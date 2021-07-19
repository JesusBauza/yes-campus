<script>
  import { metatags } from '@roxi/routify'
  import svitsConfig from '../../svits.config.json'
  import List from '/$components/pages/yefi/List.svelte'
  import V from '/$components/IntersectingViewport.svelte'
  import PC from '/$components/motion/ParallaxContainer.svelte'
  import P from '/$components/motion/ParallaxObject.svelte'
  import Especialistas from '/$components/pages/home/Profesores.svelte'
  import Formulario from '/$components/pages/leaders/Formulario.svelte'
  import { fly } from 'svelte/transition'

  const description = 'Desarrolla tus competencias de emprendimiento en nuestro bootcamp diseñado especialmente para jóvenes con discapacidad'

  let openForm

  metatags.title = 'Young Entrepreneur Full Inclusion | ' + svitsConfig.name
  metatags.description = description

  const aliados = [
    'aye',
    'yes',
    '1001',
    'ashoka',
    'vayalo',
    'esperanza',
    'kala',
    'compromiso',
  ]

  const iconografia = [
    'Regístrate a través de nuestro formulario',
    'Sigue en Instagram a <a href="https://instagram.com/aprendoyemprendo">@aprendoyemprendo</a> y <a href="https://instagram.com/cevacarabobo">@cevacarabobo</a>',
    'Publica un video de máximo 1 minuto en tu cuenta de Instagram',
  ]

  const fases = [
    'Convocatoria y selección',
    'Ciclo de Webinars',
    '#Challenge "Ideas por el Cambio"',
    'Workshop "Liderazgo Trascendental"',
    'Selección de los ganadores del capital semilla',
  ]

  const modulos = [
    {
      title: 'Detectando mis fortalezas',
      description: '',
    },
    {
      title: 'Entorno productivo y discapacidad',
      description: '',
    },
    {
      title: 'Maestría personal',
      description: '',
    },
    {
      title: 'ABC de emprender',
      description: '',
    },
    {
      title: 'Modelos de negocios inclusivos',
      description: '',
    },
    {
      title: 'Marketing estratégico y segmentación de mercado',
      description: '',
    },
    {
      title: 'Creamos un Canvas',
      description: '',
    },
    {
      title: 'Identidad y marca',
      description: '',
    },
    {
      title: 'Costos y finanzas para emprender',
      description: '',
    },
    {
      title: 'Storytelling del emprendimiento',
      description: '',
    },
  ]

  const modulos2 = [
    {
      title: 'Agilismo',
      description: 'para líderes transformadores',
    },
    {
      title: 'Construcción de mapa de mapa de incidencia',
      description: 'y tablero de control',
    },
    {
      title: 'Gestión de proyectos y gobernanzas',
      description: '',
    },
    {
      title: 'Sostenibilidad y estrategias para la autogestión',
      description: '',
    },
    {
      title: 'Articulación y comunicación de impacto',
      description: '',
    },
  ]

  let modulos1
</script>

<style>
  .modulos1-wrapper {
    overflow: hidden;
    display: grid;
    align-items: start;
  }

  .modulos1-img {
    grid-column: 1/2;
    grid-row: 1/2 relative;
  }

  .grayscale {
    --filter-gray: 100%;
    filter: grayscale(var(--filter-gray)) drop-shadow(1px 1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -1px 0 white)
        drop-shadow(-1px -1px 0 white);
  }

  .grayscale:hover {
    --filter-gray: 0%;
  }
</style>

<Formulario bind:open={openForm} />

<div class="w-full overflow-hidden">
  <V class="relative w-full overflow-hidden bg-yes-blue-600" style="background-image: url('/images/yefi/bg.svg'); background-size: cover;">
    <div class="absolute bottom-0 right-0 hidden animate lg:block w-4/10" style="--animate-y: 40%">
      <img src="/images/yefi/bg1.png" alt="" class="w-full transform translate-y-6">
    </div>
    <div class="flex flex-wrap py-16 pb-0 text-white lg:py-12 content">
      <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
        <img src="/images/yefi/title.svg" alt="" class="w-full mb-6 w-8/10">
        <p class="mb-8 t-p">{description}</p>
        <div class="transform hover:-translate-y-px duration-200">
          <button on:click={openForm} class="px-8 py-4 font-bold rounded-full shadow text-yes-blue-400 duration-200 hover:shadow-md bg-yes-gray-800">Quiero postularme</button>
        </div>
      </div>
    </div>
    <img src="/images/yefi/bg1.png" alt="" class="w-full lg:hidden transform translate-y-6 animate">
  </V>
  <div class="py-16 content">
    <h2 class="mb-4 text-center t-h1 text-yes-blue-400">Vive la experiencia Young Entrepreneur</h2>
    <p class="text-center t-h3 text-yes-gray-800">Únete a la red Young Entrepreneur y obtén las herramientas para desarrollar tu idea de negocio</p>
  </div>

  <V class="flex flex-wrap items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <!--h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-yes-blue-400 border-yes-blue-400">Potencia tu liderazgo</h2-->
      <div class="flex flex-col mb-8 t-p space-y-4">
        <p>
        Queremos contribuir con la disminución de las barreras de desigualdad que muchas veces excluyen a parte de la población sobre las oportunidades de insertarse a la vida económica, para mejorar su calidad de vida.
        </p>
        <p>
        Por primera vez, hemos transformado la experiencia del Young Entrepreneur para ofrecer el Bootcamp YE Full Inclusion, que busca desarrollar competencias de emprendimiento, diseñado para jóvenes con discapacidad e interesados en generar soluciones a través de productos y servicios con mayor inclusión y accesibilidad.
        </p>
        <p>
        Este programa se lleva a cabo gracias a la alianza entre el Centro Venezolano Americano de Carabobo y la asociación civil Aprendo y Emprendo.
        </p>
      </div>
      <div class="transform hover:-translate-y-px duration-200">
        <a
          href="#detalles"
          class="px-8 py-4 font-bold text-white rounded-full shadow duration-200 hover:shadow-md bg-yes-blue-400"
          >Conoce los detalles</a
        >
      </div>
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <img src="/images/yefi/logo.svg" alt="" class="pt-16 mx-auto ml-auto lg:mr-0 lg:pt-0 w-7/10 lg:w-7/10">
    </div>
  </V>

  <div class="mb-16 content" id="detalles">
    <h3 class="mb-8 text-center t-h2 text-yes-gray-800">Pasos para postularte</h3>
    <V class="flex flex-col w-full px-6 overflow-hidden shadow-lg sm:flex-row sm:justify-between from-yes-blue-400 to-yes-blue-600 bg-gradient-to-r animate" style="border-radius: 3rem; --animate-r-y: 64deg" oneWay>
      {#each iconografia as s, i}
        <div class="w-full py-4 text-white md:w-1/4 animate" style="transition-delay: {100 * i + 400}ms; --animate-y: 0.5rem; --animate-r-y: 0deg; --animate-r-x: -64deg">
          <img src="/images/yefi/pasos/{i + 1}.svg" alt="" class="w-full mx-auto mb-4 w-6/10 sm:w-7/10">
          <p class="text-lg font-bold text-center">{@html s}</p>
        </div>
      {/each}
    </V>
  </div>

  <V class="flex flex-wrap-reverse items-center pb-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 3rem">
      <img src="/images/yefi/publico.png" alt="" class="w-full pt-16 lg:pt-0">
    </div>
    <div class="w-full lg:w-1/2 animate lg:pl-24" style="--animate-x: 3rem">
      <h2 class="w-full pb-2 mb-4 border-b-4 rounded t-h2 text-yes-blue-400 border-yes-blue-400">Este programa es para tí, si</h2>
      <ul class="pl-12 list-disc t-p">
        <li>Eres un jóven con edades comprendidas entre los 16 y 25 años de edad.</li>
        <li>Posees una discapacidad y tienes interés en emprender.</li>
        <li>Tienes un familiar con una discapacidad severa y eres sostén de hogar.</li>
        <li>Eres optimista, con visión y comprometido con tu desarrollo personal.</li>
        <li>Estás dispuesto/a a vivir una inmersión online que combina formación, networking y espacios creativos entretenidos.</li>
        <li>Tienes propuestas de negocios y desarrollo de soluciones para mejorar los servicios para personas con discapacidad.</li>
      </ul>
    </div>
  </V>

  <V class="flex flex-wrap items-center py-16 content" oneWay>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: -2rem">
      <div class="flex items-center mb-8">
        <div class="w-24 mr-4 bg-yes-gray-500 dark:bg-gray-300" style="height: 1px"></div>
        <h2 class="font-light t-p" style="line-height: 0">{modulos.length} módulos formativos</h2>
      </div>
      <List elements={modulos} bind:index={modulos1} />
    </div>
    <div class="w-full lg:w-1/2 animate" style="--animate-x: 2rem; --animate-y: -2rem; --animate-r: 1deg">
      <div class="w-full my-6 overflow-hidden modulos1-wrapper lg:w-8/10 lg:ml-auto">
        {#each [modulos[modulos1]] as _, i (modulos1)}
          <div class="modulos1-img" in:fly|local={{x: 100}} out:fly|local={{x: -100, opacity: 0.8}}>
            <img src="/images/yefi/modulos/{modulos1 + 1}.svg" alt="" class="w-full">
          </div>
        {/each}
      </div>
    </div>
  </V>

  <div class="w-full">
    <h2 class="mb-12 text-center t-h2 text-yes-gray-800">Facilitadores del Bootcamp</h2>
    <Especialistas titulo={false} programa="young-leaders" />
  </div>

  <div class="w-full mt-12 text-yes-gray-800" id="aliados">
    <div class="py-12 content">
      <V class="overflow-hidden" oneWay>
        <h2 class="text-center t-h2 animate" style="line-height: 1.5 !important; --animate-r: 3deg; --animate-y: 100%">Organizaciones que hacen posible el Bootcamp</h2>
        <p class="pb-2 text-center t-h3 animate" style="transition-delay: 200ms; --animate-r: 3deg; --animate-y: 100%">Young Entrepreneur Full Inclusion es posible gracias a</p>
      </V>
      <V class="flex flex-wrap items-center" oneWay>
        {#each aliados as c, i}
          <div class="flex w-1/2 p-6 mx-auto mt-2 animate lg:w-1/4" style="transition-delay: {50 * i + 500}ms">
            <img src="/images/leaders/aliados/{c}.webp" alt="" class="w-auto m-auto grayscale duration-200 hover:scale-110 transform" style="max-height: 6rem">
          </div>
        {/each}
      </V>
    </div>
  </div>
  <V class="bg-yes-gray-100" oneWay>
    <div class="flex flex-col-reverse items-center py-16 italic lg:flex-row content t-p">
      <p class="w-full lg:w-1/2 animate" style="--animate-x: -3rem">
      <strong>Aprendo y Emprendo - Yes Campus</strong>, como organización cuidan el equilibrio en la conformación de sus equipos de trabajo y participantes en sus actividades, por lo tanto se asegura la participación equitativa entre hombres y mujeres en cada una de las fases del programa Young Leaders, tanto en la selección de speaker, facilitadores y participantes beneficiarios del programa.
      </p>
      <div class="flex justify-center w-full pb-16 lg:w-1/2 lg:pb-0 lg:pl-16 animate" style="--animate-x: 3rem">
        <img src="/images/logo.svg" alt="" class="w-72">
      </div>
    </div>
  </V>
</div>
