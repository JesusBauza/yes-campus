<script>
  import Contenido from '/$components/pages/yefi/Contenido.svelte'
  import Slide from '/$components/pages/yefi/Sliders.svelte'
  import Formulario from '/$components/pages/yefi/Formulario.svelte'
  const facilitadores = [
    {
      title: 'Alberto González',
      desc: 'Experto en Marketing, consultor y facilitador',
    },
    {
      title: 'Delia Rivas',
      desc: 'Abogado, conferencista y asesora en inclusión',
    },
    {
      title: 'Mauricio Parilli',
      desc: 'Empresario, consultor y conferencista',
    },
    {
      title: 'Jennifer Belisario',
      desc: 'Comunicadora social, especialista en emprendimiento sostenible, consultor y facilitadora',
    },
    {
      title: 'Jorge Parra',
      desc: 'Facilitador, conferencista y comediante',
    },
    {
      title: 'Karla Hernández',
      desc: 'Consultora, facilitadora y conferencista',
    },
    {
      title: 'Ernesto Brito',
      desc: 'Ilustrador, empresario, creativo y consultor',
    },
    {
      title: 'Evelyn González',
      desc: 'Ingeniera, consultora, coach y conferencista',
    },
    {
      title: 'Richard Tovar',
      desc: 'Educador, facilitador, empresario y conferencista',
    },
    {
      title: 'María Valderrama',
      desc: 'Psicóloga, coach y facilitadora',
    },
  ]

  let ref

  function toggleModal () {
    ref.classList.toggle('opacity-0')
    ref.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
  }

  let openForm
</script>

<style>
  * {
    @apply duration-500;
  }

  .bkg {
    background-image: url("/images/yefi/fondo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @keyframes flot {
    0% {
      transform: translate(0px, 50px);
    }

    50% {
      transform: translate(0px, 60px);
    }

    100% {
      transform: translate(0px, 50px);
    }
  }

  @keyframes flot-invert {
    0% {
      transform: translate(0px, -50px);
    }

    50% {
      transform: translate(0px, -60px);
    }

    100% {
      transform: translate(0px, -50px);
    }
  }

  .anim {
    animation: flot 2s ease-in-out infinite;
  }

  .anim-invert {
    animation: flot-invert 2s ease-in-out infinite;
  }

  .req * {
    @apply duration-500;
  }

  .req img {
    @apply transform;
    @apply m-auto;
  }

  .req:hover img, .req:focus p {
    @apply -translate-y-2;
    @apply opacity-0;
  }

  .req p {
    @apply opacity-0;
    @apply transform;
    @apply text-yefi-secondary;
    @apply m-auto;
    @apply text-center;
    @apply px-16;
  }

  .req:hover p, .req:focus p {
    @apply -translate-y-40;
    @apply opacity-100;
  }
</style>

<Formulario bind:open={openForm} />

<div class="w-full">
  <div class="relative px-6 pb-32 overflow-hidden lg:min-h-screen bkg">
    <img alt="" src="/images/yefi/wheelchair.png" class="absolute top-0 left-0 w-24 pt-6 mt-24 ml-4 anim-invert lg:w-32 lg:hidden">
    <img alt="" src="/images/yefi/bombillo.png" class="absolute top-0 right-0 w-16 mt-12 anim lg:w-32">
    <img alt="" src="/images/yefi/full.png" class="absolute right-0 w-64 pt-24 mt-64 lg:bottom-0 lg:mt-0 lg:pt-0 lg:pb-8 lg:mb-40 lg:w-2/5">
    <img alt="" src="/images/yefi/flecha.png" class="absolute right-0 w-16 pt-40 mt-64 anim-invert lg:mt-0 lg:bottom-0 lg:pt-0 lg:mb-24 lg:pb-4 lg:w-40">
    <img alt="" src="/images/yefi/atom.png" class="absolute bottom-0 left-0 w-16 mb-24 -ml-4 anim lg:w-32">
    <div class="absolute right-0 flex p-4">
      <img src="/images/yefi/eye.png" alt="" class="h-12 lg:h-16">
      <img src="/images/yefi/cevac.png" alt="" class="h-12 lg:h-16">
    </div>
    <div class="container relative lg:mx-auto">
      <div class="flex flex-col items-center pt-32 lg:flex-row lg:pb-16 lg:pb-0">
        <div class="flex justify-end flex-1 mt-16 mb-24 lg:hidden sm:mt-0">
          <img alt="" src="/images/yefi/logo.png">
        </div>
        <div class="flex flex-col justify-center mb-4 lg:w-1/2 lg:w-1/3 sm:mb-16 lg:mb-0">
          <img src="/images/yefi/wheelchair.png" alt="" class="hidden w-24 -mb-6 lg:block anim-invert lg:w-32">
          <img src="/images/yefi/vive.png" alt="" class="hidden pb-4 lg:block">
          <h2 class="mb-4 text-lg font-bold text-justify lg:text-lg text-yefi-secondary-600 lg:mb-6">Desarrolla tus competencias de emprendimiento en nuestro bootcamp diseñado especialmente para jóvenes con discapacidad</h2>
          <button on:click={openForm} class="justify-center p-4 text-lg font-bold text-center uppercase rounded-full shadow-lg bg-yefi-primary lg:text-xl text-yefi-secondary hover:bg-yefi-primary-400 hover:text-yefi-secondary-400 hover:shadow-xl">¡Quiero postularme!</button>
        </div>
        <div class="justify-end flex-1 hidden mt-16 ml-12 sm:mt-0 lg:flex">
          <img alt="" src="/images/yefi/logo.png">
        </div>
      </div>
    </div>
  </div>
  <img src="/images/yefi/convo-movil.webp" alt="" class="w-screen md:hidden">
  <div id="our-process" class="relative">
    <img alt="" src="/images/yefi/circle2.svg" class="absolute top-0 left-0 hidden mt-12 -mx-32 sm:block">
    <div class="container relative px-6 pt-4 pb-6 mx-auto">
      <h3 class="flex flex-col items-center mb-12 text-4xl font-bold text-center text-yefi-secondary">Pasos para postularte<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></h3>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!--div class="flex flex-col md:flex-row xl:px-32"-->
        <div class="flex flex-col items-center md:px-6 lg:px-12">
          <img src="/images/yefi/form.webp" alt="">
          <!--span class="text-6xl text-yefi-primary">1</span-->
          <h4 class="my-2 text-2xl font-semibold text-yefi-secondary">Regístrate</h4>
          <p class="leading-relaxed text-center text-yefi-secondary-700">
          Rellenar nuestro <span on:click={openForm} class="underline text-yefi-primary-800 text-bold">formulario de registro</span> con tus datos
          </p>
        </div>
        <div class="flex flex-col items-center md:px-6 lg:px-12">
          <img src="/images/yefi/seguir.webp" alt="">
          <!--span class="text-6xl text-yefi-primary">2</span-->
          <h4 class="my-2 text-2xl font-semibold text-yefi-secondary">Síguenos</h4>
          <p class="leading-relaxed text-center text-yefi-secondary-700">
          Debe seguir las cuentas de Instagram de
          <a href="https://www.instagram.com/aprendoyemprendo/" target="_blank" class="underline text-yefi-primary-800 text-bold">@aprendoyemprendo </a>
          y <a href="https://www.instagram.com/cevacarabobo/" target="_blank" class="underline text-yefi-primary-800 text-bold">@cevacarabobo</a>
          </p>
        </div>
        <div class="flex flex-col items-center md:px-4 lg:px-12">
          <img src="/images/yefi/video.webp" alt="">
          <!--span class="text-6xl text-yefi-primary">3</span-->
          <h4 class="my-2 text-2xl font-semibold text-yefi-secondary">Preséntate</h4>
          <p class="leading-relaxed text-center text-yefi-secondary-700">
          Publica un vídeo de máximo 1 minuto en tu cuenta de Instagram,
          <a
            href="{null}"
            class="underline modal-open text-yefi-primary-800 text-bold"
            on:click={toggleModal}
            > haz click para ver los pasos a seguir</a
          >
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="about-us" class="relative py-12 mt-32 bg-yefi-blue-100">
    <img alt="" src="/images/yefi/nube.webp" class="absolute top-0 right-0 hidden mr-6 -mt-32 md:block">
    <div class="container px-6 mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:pr-8 lg:pr-16">
          <img alt="" src="/images/yefi/sobre-nostros.webp" class="mb-16 -mt-24 md:mt-0 lg:-mt-24 md:mb-0">
        </div>
        <div class="text-justify md:w-1/2">
          <h3 class="flex flex-col items-center mb-6 text-4xl font-bold text-center md:items-start md:text-left text-yefi-secondary">Acerca de nosotros<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></h3>
          <p class="mb-4 text-md text-yefi-secondary-700">
          Queremos contribuir con la disminución
          de las barreras de desigualdad que muchas
          veces excluyen a parte de la población
          sobre las oportunidades de insertarse
          a la vida económica, para mejorar
          su calidad de vida.
          </p>
          <p class="mb-4 text-md text-yefi-secondary-700">
          Por primera vez, hemos transformado la
          experiencia del Young Entrepreneur para
          ofrecer el <strong>Bootcamp YE Full Inclusion</strong>,
          que busca desarrollar competencias de
          emprendimiento, diseñado para jóvenes
          con discapacidad e interesados en generar
          soluciones a través de productos y servicios
          con mayor <strong>inclusión</strong> y <strong>accesibilidad</strong>.
          </p>

          <p class="text-md text-yefi-secondary-700">
          Este programa se lleva a cabo gracias a la
          alianza entre el <strong>Centro Venezolano Americano de Carabobo</strong>
          y la asociación civil <strong>Aprendo y Emprendo</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative bkg">
    <div id="services" class="relative">
      <img alt="" src="/images/yefi/bombillo.webp" class="absolute top-0 right-0 hidden w-16 w-48 mt-6 md:block">
      <img alt="" src="/images/yefi/bombillo2.webp" class="absolute bottom-0 left-0 hidden w-16 mb-4 -ml-4 md:block md:w-24">
      <div class="container relative px-6 py-24 mx-auto">
        <h3 class="flex flex-col items-center text-4xl font-bold text-center text-yefi-orange-500">Descubre lo que aprenderás<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></h3>
        <div id="contenidos">
          <Contenido/>
        </div>
      </div>
    </div>
  </div>
  <div id="services" class="relative">
    <img alt="" src="/images/yefi/circle.svg" class="absolute top-0 right-0 hidden mt-64 md:block">
    <img alt="" src="/images/yefi/estrella.webp" class="absolute top-0 right-0 hidden w-16 mt-2 ml-4 md:w-40 md:ml-8 md:block">
    <img alt="" src="/images/yefi/hojas.webp" class="absolute bottom-0 left-0 hidden w-24 -ml-8 md:w-40 md:block">
    <div class="container relative px-6 py-16 mx-auto">
      <h3 class="flex flex-col items-center text-4xl font-bold text-center text-yefi-orange-500">¿Eres de los estados Aragua, Carabobo<br>o Lara y cumples estos requisitos?</h3>
      <div class="mt-6 -mb-16 grid grid-cols-1 md:grid-cols-3 ">
        <div class="req">
          <img src="/images/yefi/1.webp" alt="">
          <p>
          <strong class="text-yefi-primary">1.</strong> Eres un jóven con edades comprendidas entre los <strong>16</strong> y <strong>25</strong> años de edad.
          </p>
        </div>
        <div class="req">
          <img src="/images/yefi/2.webp" class="" alt="">
          <p>
          <strong class="text-yefi-primary">2.</strong> Posees una discapacidad y tienes interés en emprender.
          </p>
        </div>
        <div class="req">
          <img src="/images/yefi/3.webp" class="" alt="">
          <p>
          <strong class="text-yefi-primary">3.</strong> Tienes un familiar con una discapacidad severa y eres sostén de hogar.
          </p>
        </div>
        <div class="req">
          <img src="/images/yefi/4.webp" class="" alt="">
          <p>
          <strong class="text-yefi-primary">4.</strong> Eres <strong>optimista</strong>, con <strong>visión</strong> y <strong>comprometido</strong> con tu desarrollo personal.
          </p>
        </div>
        <div class="req">
          <img src="/images/yefi/5.webp" class="" alt="">
          <p>
          <strong class="text-yefi-primary">5.</strong> Estás dispuesto/a a vivir una inmersión <strong>online</strong> que combina formación, networking y espacios creativos entretenidos.
          </p>
        </div>
        <div class="req">
          <img src="/images/yefi/6.webp" class="" alt="">
          <p>
          <strong class="text-yefi-primary">6.</strong> Tienes propuestas de negocios y desarrollo de soluciones para mejorar los servicios para personas con discapacidad.
          </p>
        </div>
      </div>
      <h3 class="flex flex-col items-center pb-12 text-4xl italic font-bold text-center text-yefi-primary">Si la respuesta es SÍ, este programa es para ti</h3>
    </div>
  </div>
  <div id="testimonials" class="bg-yefi-blue-500">
    <div class="relative pt-16 pb-12">
      <!--div class="relative pt-16 pb-16 bg-yefi-blue-500 md:pb-32"-->
      <img alt="" src="/images/yefi/wave3.svg" class="absolute object-cover object-top w-full h-16 bottom-full lg:h-auto">
      <div class="container px-6 mx-auto">
        <div class="relative mx-auto md:w-2/3">
          <img alt="" src="/images/yefi/quote.svg" class="absolute top-0 left-0 -mt-4 sm:-ml-16">
          <h3 class="text-4xl italic text-center text-white">
            Más de 800 jóvenes han vivido la experiencia Young Entrepreneur
            <!--strong class="block mt-6 not-italic text-yefi-primary">FRANK</strong-->
          </h3>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <div id="slide">
        <Slide/>
      </div>
    </div>
  </div>

  <div class="relative bkg">
    <div class="relative">
      <div class="container relative px-6 py-24 mx-auto">
        <h3 class="flex flex-col items-center pb-12 text-4xl font-bold text-center text-yefi-orange-500">Conoce a nuestros facilitadores<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></h3>
        <div id="facilitadores">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-16">
            {#each facilitadores as item}
              <div>
                <img src="/images/yefi/profesores/{item.title}.webp" class="m-auto" alt="">
                <p class="text-2xl font-bold text-center text-primary">{ item.title }</p>
                <p class="text-sm font-bold text-center text-secondary">{@html item.desc}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative py-24 bg-yefi-blue-100">
    <div class="container px-6 mx-auto">
      <h3 class="flex flex-col items-center pb-16 text-4xl font-bold text-center text-yefi-primary">"Únete a la red Young Entrepreneur y obtén las herramientas para desarrollar tu idea de negocio"</h3>
      <div class="flex justify-center"><button on:click={openForm} class="justify-center p-6 text-lg italic font-bold text-center uppercase rounded-full shadow-lg text-yefi-blue-100 bg-yefi-primary lg:text-2xl hover:shadow-xl">¡Quiero unirme!</button></div>
    </div>
  </div>

  <div class="relative bg-yefi-blue-100">
    <div class="container relative px-6 pb-24 mx-auto">
      <h3 class="flex flex-col items-center text-4xl font-bold text-center text-yefi-secondary">Este programa es posible gracias a<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></h3>
      <div class="flex flex-col items-center pt-16 mx-auto md:flex-row">
        <img class="h-16 mx-auto md:h-32" src="/images/yefi/eye.webp" alt="">
        <img class="h-32 mx-auto mt-12 md:mt-0 md:h-48" src="/images/yefi/cevac.webp" alt="">
      </div>
      <!--div class="pt-16 grid gric-cols-1 md:grid-cols-2">
        <img class="h-24 mx-auto" src="/images/yefi/eye.webp" alt="">
        <img class="h-32 mx-auto mt-12 md:mt-0 md:h-24" src="/images/yefi/cevac.webp" alt="">
        </div-->
  </div>
</div>

<div class="fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal duration-500" bind:this={ref}>
  <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

  <div class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">

    <!-- Add margin if you want to see some of the overlay behind the modal-->
    <div class="px-6 py-4 pb-12 text-left modal-content">
      <!--Title-->
      <div class="flex items-center justify-between pb-12">
        <p class="text-2xl font-bold text-yefi-secondary">Instrucciones del vídeo<span class="block w-20 h-1 mt-4 bg-yefi-primary"></span></p>
        <div class="z-50 cursor-pointer modal-close" on:click={toggleModal}>
          <svg class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </div>

      <!--Body-->
      <p class="text-center">
      En dicho vídeo debes identificarte, plantear la idea de emprendimiento y comentar acerca
      de los beneficios que generan utilizando los hashtags
      <strong class="text-yefi-primary">#YoungEntrepreneurFullInclusion #YoungEntrepreneur2020</strong>
      </p>

    </div>
  </div>
</div>
</div>
