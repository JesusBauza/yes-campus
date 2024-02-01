<script>
  import Modal from '../../Modal.svelte'
  import Tabs from '../../formularios/Tabs.svelte'
  import Select from '../../formularios/Select.svelte'
  import { writable } from 'svelte/store'
  export let open
  let page
  let closeModal
  let sending

  const initialForm = () => [
    {
      nombres: '',
      cedula: '',
      instagram: '',
      telefono: '',
      email: '',
      residencia: '',
    },
    {
      ocupacion: '',
      organizacion: '',
      ods: '',
      experiencia: '',
      participacionProyecto: '',
    },
  ]

  const form = writable(initialForm())

  const reset = () => {
    form.set(initialForm())
    descripcionParticipacion = ''
    page = 1
  }

  const isEmpty = str => !str.trim().length

  let changePage

  function validate() {
    let valid = true
    const i = page - 1
    if ($form && $form[i]) {
      Object.keys($form[i]).every(val => {
        const value = String($form[i][val])
        valid = !isEmpty(value)
        console.log(value, valid)
        return valid
      })
    }
    return valid
  }

  function send() {
    const data = {...$form[0], ...$form[1]}
    if (validate()) {
      if (data.participacionProyecto == 'Sí') {
        if (isEmpty(descripcionParticipacion)) {
          alert('No puede dejar campos vacíos')
          return
        } else {
          data.participacionProyecto = descripcionParticipacion
        }
      }
    } else {
      alert('No puede dejar campos vacíos')
      return
    }

    sending = true
    fetch('https://api.yescampus.co/formularios/leaders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => { return res.json(); })
      .then(data => {
        console.log(data)
        alert('Formulario enviado')
        closeModal()
      })
      .catch(err => {
        console.log(err)
        alert('Hubo un error enviando el formulario, intente más tarde')
      })
      .finally(() => (sending = false))
  }

  let descripcionParticipacion = ''
</script>

<Modal bind:open bind:close={closeModal} onClose={reset}>
  <div slot="header" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <Tabs pages={$form.length} bind:page={page} validate={validate} bind:changePage />
  </div>
  <div slot="content" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex flex-col w-full font-title">
      {#if page == 1}
        <div class="input-label">Nombre y apellido</div>
        <input type="text" class="mb-6 input" placeholder="Ej. Maria Rondón" bind:value={$form[0].nombres}>

        <div class="input-label">Cédula</div>
        <input type="text" class="mb-6 input" placeholder="Ej. V-123456" bind:value={$form[0].cedula}>

        <div class="input-label">Instagram</div>
        <input type="text" class="mb-6 input" placeholder="Ej. @mariarondon" bind:value={$form[0].instagram}>

        <div class="input-label">Teléfono</div>
        <input type="text" class="mb-6 input" placeholder="Ej. +584123456789" bind:value={$form[0].telefono}>

        <div class="input-label">Correo</div>
        <input type="text" class="mb-6 input" placeholder="Ej. mariarondon@gmail.com" bind:value={$form[0].email}>

        <div class="input-label">Estado de residencia</div>
        <Select
          bind:value={$form[0].residencia}
          options={[
            'Amazonas',
            'Anzoátegui',
            'Apure',
            'Aragua',
            'Barinas',
            'Bolívar',
            'Carabobo',
            'Cojedes',
            'Delta Amacuro',
            'Distrito Capital',
            'Falcón',
            'Guárico',
            'La Guaira',
            'Lara',
            'Mérida',
            'Miranda',
            'Monagas',
            'Nueva Esparta',
            'Portuguesa',
            'Sucre',
            'Táchira',
            'Trujillo',
            'Yaracuy',
            'Zulia',
          ]}
        />
      {:else if page == 2}
        <div class="input-label">Soy un...</div>
        <Select
          bind:value={$form[1].ocupacion}
          options={[
            'Estudiante',
            'Líder socio-político',
            'Emprendedor social',
          ]}
        />

        <div class="mt-6 input-label">Organización donde activa o participa</div>
        <input type="text" class="input" bind:value={$form[1].organizacion}>

        <div class="mt-6 input-label">¿A qué ODS inciden?</div>
        <Select
          bind:value={$form[1].ods}
          options={[
            '1. Fin de la Pobreza',
            '2. Hambre Cero',
            '3. Salud y Bienestar',
            '4. Educación de Calidad',
            '5. Igualdad de Género',
            '6. Agua Limpia y Saneamiento',
            '7. Energía Asequible y no Contaminante',
            '8. Trabajo Decente y Crecimiento Económico',
            '9. Industria, Innovación e Infraestructura',
            '10. Reducción de las Desigualdades',
            '11. Ciudades y Comunidades Sostenibles',
            '12. Producción y Consumo Responsables',
            '13. Acción por el Clima',
            '14. Vida Submarina',
            '15. Vida de Ecosistemas Terrestres',
            '16. Paz, Justicia e Instituciones Sólidas',
            '17. Alianzas para Lograr los Objetivos',
          ]}
        />

        <div class="mt-6 input-label">Experiencia en proyectos sociales</div>
        <input type="text" class="input" bind:value={$form[1].experiencia}>

        <div class="mt-6 input-label">¿Has participado como voluntario en algún proyecto?</div>
          <Select
            bind:value={$form[1].participacionProyecto}
            options={[
              'Sí',
              'No',
            ]}
          />

        {#if $form[1].participacionProyecto === 'Sí'}
          <div class="mt-6 input-label">Descríbenos en cuál y lo que hiciste</div>
          <input type="textarea" class="input" rows="3" bind:value={descripcionParticipacion}>
        {/if}
      {/if}
    </div>
  </div>
  <div slot="footer" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex justify-end -mx-2">
      {#if page < 2}
        <button class="mx-2 btn-primary" on:click={() => changePage(page + 1)}>Siguiente</button>
      {:else}
        <button class="mx-2 btn-primary" on:click={() => changePage(page - 1)}>Anterior</button>
        <button class="mx-2 btn-primary" on:click={send}>Enviar</button>
      {/if}
      <button class="mx-2 btn-primary" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
</Modal>
