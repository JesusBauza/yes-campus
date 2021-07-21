<script>
  import { fly, fade } from 'svelte/transition'
  import faker from 'faker'
  import svitsConfig from '../../../svits.config.json'
  import V from '/$components/IntersectingViewport.svelte'
  import Masonry from '/$components/Masonry.svelte'
  import { getImg } from '/$components/Image.svelte'
  import { getCollection } from '../../collections'
  import { metatags, params } from '@roxi/routify'
  import { calendar } from '/$lib/dayjs'

  metatags.title = 'YES Talks | ' + svitsConfig.name

  const PAGESIZE = 4
  let page = Number($params.page) || 1
  let search = ''

  const collection = () => getCollection('blog')

  const total = collection().elements.length

  const getPosts = (p, s) => collection()
    .search(s.trim(), ['title'])
    .paginate(PAGESIZE, p)
    .elements

  let items = []
  $: items = [
    ...items,
    ...getPosts(page, search)
  ]


  const loadMore = () => {
    if (items.length > total ) {
      return
    }
    page++
    const newPosts = getPosts(1, search)
    console.log(page, newPosts)
  }
</script>

<style>
  .talk {
    color: white;
    overflow: hidden;
    display: flex;
    @apply items-end;
    min-height: 20rem
  }
  @screen md {
    .talk {
      min-height: 20rem
    }
    .talk:first-of-type:not(.search) {
      min-height: 30rem
    }
  }
  .talk-bg {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--talk-image);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    transform-origin: center;
    filter: grayscale(0);
  }
  .talk:hover .talk-bg {
    filter: grayscale(1);
    transform: scale(1.1, 1.1);
  }
</style>

<div class="w-full">
  <div
    class="flex flex-col py-16 content-lg"
    in:fly={{x: -100, duration: 1000, delay: 200}}
  >
    <div class="flex flex-col w-full lg:flex-row lg:items-center">
      <div class="w-full">
        <h1 class="flex font-bold font-title mb-6 leading-none text-5xl md:text-6xl">Blog
        </h1>
        <p class="font-bold font-title leading-none text-3xl md:text-4xl">Lee nuestro más reciente contenido</p>
      </div>
    </div>
  </div>
  <div class="flex -mt-16 py-12 content-lg">
    <input
      type="text"
      class="mx-auto text-center w-full input"
      placeholder="Buscar..."
      bind:value={search} on:input={() => { items = []; page = 1 }}
    >
  </div>
  <div class="content-lg">
    {#if !items.length}
      <p
        in:fade|local={{ duration: 100 }}
        class="text-center pb-12 t-h3"
        >No se ha encontrado nada</p
      >
    {:else}
      <div style="margin: -1.5rem; margin-bottom: 2rem;">
        <Masonry
          stretchFirst={!search.trim().length}
          gridGap={'1.5rem'}
          colWidth={'minmax(Min(20em, 100%), 1fr)'}
          items={items}
        >
          {#each items as i, idx}
            <a
              href={i.url}
              class="rounded cursor-pointer relative talk"
              class:search={search.trim().length}
              style={`--talk-image: ${i.thumbnail ? `url(${getImg(i.thumbnail)})` : 'rgb(200, 200, 200)'}`}
              in:fade|local={{ duration: 400 }}
              >
              <div class="absolute pointer-events-none talk-bg"></div>
              <div class="font-bold p-6 transform pointer-events-none">
                <h1
                  class="font-bold mb-4 leading-none text-3xl"
                  class:lg:text-5xl={idx == 0 && !search.trim().length}
                  class:lg:text-2xl={idx > 0 || search.trim().length}
                  >{i.title}</h1
                >
                <p class="t-p">{calendar(i.date)}</p>
              </div>
            </a>
          {/each}
        </Masonry>
      </div>
      <V on:intersect={loadMore} style="width: 100%; height: 0px;" />
    {/if}
  </div>
</div>
