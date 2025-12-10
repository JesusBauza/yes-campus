<script>
  import { fly, fade } from 'svelte/transition'
  import faker from 'faker'
  import svitsConfig from '../../svits.config.json'
  import { hoverable } from '/$components/Cursor.svelte'
  import V from '/$components/IntersectingViewport.svelte'
  import Masonry from '/$components/Masonry.svelte'
  import { getImg } from '/$components/Image.svelte'
  import { getCollection } from '../collections'
  import { metatags, params } from '@roxi/routify'
  import { calendar } from '/$lib/dayjs'

  metatags.title = 'Especialistas | ' + svitsConfig.name

  const PAGESIZE = 4
  let page = Number($params.page) || 1

  const collection = () => getCollection('profesores')

  const total = collection().elements.length

  const getPosts = (p) => collection()
    .elements

  $: items = [
    ...getPosts()
  ]


  const loadMore = () => {
    if (items.length > total ) {
      return
    }
    page++
    const newPosts = getPosts()
  }
</script>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1.5rem;
    width: 100%;
  }

  .gallery-item {
    width: auto;
    margin: 0;
  }

  .gallery :global(.gallery-item) {
    aspect-ratio: 1 / 1;
  }

  .gallery :global(img) {
    transition: filter 0.4s, transform 0.4s,;
    aspect-ratio: 1 / 1;
    filter: grayscale(1) brightness(0.6);
  }

  .gallery :global(.gallery-item:hover img) {
    transform: scale(1.1, 1.1);
    filter: grayscale(0);
  }

  .gallery :global(h2),
  .gallery :global(p) {
    transition: transform 0.4s, opacity 0.4s;
  }

  .gallery :global(.gallery-item:hover h2),
  .gallery :global(.gallery-item:hover p) {
    opacity: 0;
    transform: translateY(-1rem);
  }
</style>

<div class="w-full">
  <div
    class="flex flex-col py-16 content-lg"
    in:fly={{x: -100, duration: 1000, delay: 200}}
  >
    <div class="flex flex-col w-full lg:items-center lg:flex-row">
      <div class="w-full">
        <h1 class="flex mb-6 text-5xl font-bold leading-none md:text-6xl font-title">Nuestros especialistas
        </h1>
        <p class="text-3xl font-bold leading-none md:text-4xl font-title">Conoce a nuesros profesionales</p>
      </div>
    </div>
  </div>
  <div class="content-lg">
    {#if !items.length}
      <p
        in:fade|local={{ duration: 100 }}
        class="pb-12 text-center t-h3"
        >No se ha encontrado nada</p
      >
    {:else}
      <div style="margin-bottom: 2rem;">
        <div class="gallery">
          {#each items as i, idx}
            <V class="relative overflow-hidden bg-gray-500 rounded gallery-item animate" oneWay>
              <div class="w-full h-full" use:hoverable={{primary: true, text: 'Conocer', color: '#0273E3'}}>
                <div class="absolute w-full h-full">
                  <img src={getImg(i.thumbnail)} class="object-cover object-top w-full h-full" lazy alt={i.nombre} title={i.nombre}>
                </div>
                <div class="z-20 flex flex-col justify-end w-full h-full p-4 text-white t-p transform">
                  <h2 class="t-h3">{i.nombre}</h2>
                  {#if i.ocupacion}
                    <p class="mt-2 leading-none">{i.ocupacion}</p>
                  {/if}
                </div>
              </div>
            </V>
          {/each}
        </div>
      </div>
      <V on:intersect={loadMore} style="width: 100%; height: 0px;" />
    {/if}
  </div>
</div>
