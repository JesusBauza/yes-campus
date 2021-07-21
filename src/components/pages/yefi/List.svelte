<script lang="ts">
  import V from '../../IntersectingViewport.svelte'
  import { onDestroy } from 'svelte'

  interface ListElement {
    title: string
    description: string
  }
  export let elements: ListElement[]
  export let index: number = 0

  const next = () => {
    index = (index + 1) % elements.length
  }

  let interval: number
  const initInterval = () => {
    if (!interval) {
      interval = setInterval(next, 2000)
    }
  }
  const resetInterval = () => {
    clearInterval(interval)
    interval = setInterval(next, 2000)
  }

  onDestroy(() => {
    clearInterval(interval)
    interval = null
  })
</script>

<V oneWay on:intersect={() => initInterval()} on:top={() => { if (interval) { resetInterval(); index = 0 } }}>
  <ul>
    {#each elements as el, i}
      <li class:active={index == i} on:click={() => { resetInterval(); index = i; }} class="cursor-pointer">
        <div class="flex flex-col pointer-events-none">
          <h2 class="duration-200 t-h3" class:text-yes-blue-400={index == i}>{i + 1}. {el.title}</h2>
          <p class="font-light transform duration-200 t-p" class:-translate-x-4={index != i} class:opacity-0={index != i}>{el.description}</p>
        </div>
      </li>
    {/each}
  </ul>
</V>

<style>
  ul {
    list-style-type: none;
  }

  li {
    /* You need to turn on relative positioning so the line is placed relative to the item rather than absolutely on the page */
    position: relative;

    /* Use padding to space things out rather than margins as the line would get broken up otherwise */
    margin: 0;
    padding-bottom: 1em;
    padding-left: 25px;
  }

  li:hover h2 {
    @apply text-yes-blue-400;
  }

  /* The actual line being placed before each list item, tweak width and color as appropriate */
  li:before {
    background-color: #4E9DEB;
    @apply bg-yes-gray-500;
    width: 2px;
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 5px;
  }

  :global(.dark) li:before {
    @apply bg-yes-gray-300;
  }

  /* Small bullets for normal list items */
  li::after {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23605F5F' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    left: 0;
    top: 2px;
    width: 12px;
    height: 12px;
  }

  :global(.dark) li::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23BFBFBF' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E");
  }

  /* Large bullet for the first list item */
  li.active::after {
    content: '';
    width: 16px;
    height: 16px;
    left: -2px;
    top: 0;
    background-image: url("/images/yefi/bullet.svg");
  }

  :global(.dark) li.active::after {
    background-image: url("/images/yefi/bullet-dark.svg");
  }

  /* Start the line further down on the first list item */
  li:first-child:before { top: 6px;  }

  /* Stop the line short on the final list item */
  li:last-child:before { height: 6px; }
</style>
