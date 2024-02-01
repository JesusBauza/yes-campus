<script>
  import Modal from '../../Modal.svelte'
  import Tabs from '../../formularios/Tabs.svelte'
  import Select from '../../formularios/Select.svelte'
  import { writable } from 'svelte/store'
  import Datepicker from './Datepicker.svelte'
  import NumberInput from './NumberInput.svelte'
  export let open
  let page
  let closeModal
  let sending

  const initialForm = () => [
    {
      cedula: '',
      nombre: '',
      email: '',
      telefono: '',
      instagram: '',
      facebook: '',
      nivel_educativo: '',
      habilidades: '',
      debilidades: '',
      num_hijos: 0,
      edad_madre_por_primera_vez: 0,
      estado: '',
      ciudad: '',
      direccion: '',
    },
    {
      disponibilidad: '',
      horario: '',
      dias: '',
    },
    {
      tiene_emprendimiento: '',
      area_emprendimiento: '',
      experiencia: '',
      vision: '',
      posesion_equipos_y_recursos: '',
      disposicion_trabajo_equipo: '',
    },
    {
      automanutencion: '',
      fuente_de_ingresos: '',
      porcentaje_de_ingreso: '',
    }
  ]

  const form = writable(initialForm())

  const reset = () => {
    form.set(initialForm())
    formattedSelected = null
    page = 1
  }

  const isEmpty = str => !str.trim().length

  let changePage

  let formattedSelected
  let selectedDate

  function edadValida(selected, data) {
    const edad = Math.floor((new Date() - selected.getTime()) / 3.15576e+10)
    const valid = edad >= 16 && edad <= 25
    if (valid) {
      data.edad = edad
      data.fecha_nacimiento = formattedSelected
    }
    return valid
  }

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
    const data = {...$form[0], ...$form[1], ...$form[2], ...$form[3]}
    if (!edadValida(selectedDate, data)) {
      alert("Debes tener entre 16 y 25 años para postularse")
      return
    }
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
    fetch('https://api.yescampus.co/formularios/girle', {
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

<Modal bind:open bind:close={closeModal} onClose={reset} fullscreen>
  <div slot="header" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <Tabs pages={$form.length} bind:page={page} validate={validate} bind:changePage />
  </div>
  <div slot="content" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex flex-col w-full font-title">
      {#if page == 1}
        <p class="input-label">
          Cédula de identidad
        </p>
        <input bind:value={$form[0].cedula} class="input" type="text" placeholder="Cédula de identidad">

        <p class="mt-6 input-label">
          Nombre y apellido
        </p>
        <input bind:value={$form[0].nombre} class="input" type="text" placeholder="Nombre">

        <p class="mt-6 input-label">
          Fecha de nacimiento
        </p>
        <Datepicker bind:formattedSelected bind:selectedDate />

        <p class="mt-6 input-label">
          Correo electrónico
        </p>
        <input bind:value={$form[0].email} class="input" type="text" placeholder="Correo electrónico">

        <p class="mt-6 input-label">
          Teléfono
        </p>
        <input bind:value={$form[0].telefono} class="input" type="text" placeholder="Teléfono">

        <p class="mt-6 input-label">
          Cuenta de Instagram
        </p>
        <input bind:value={$form[0].instagram} class="input" type="text" placeholder="Cuenta de Instagram">

        <p class="mt-6 input-label">
          Cuenta de Facebook
        </p>
        <input bind:value={$form[0].facebook} class="input" type="text" placeholder="Cuenta de Facebook">

        <p class="mt-6 input-label">
          Nivel educativo
        </p>
        <Select
          bind:value={$form[0].nivel_educativo}
          options={[
            'Sin estudios',
            'Bachiller',
            'TSU',
            'Universitario',
            'Postgrado',
            'Solo experiencia',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Cuáles consideras que son tus tres principales habilidades?
        </p>
        <textarea bind:value={$form[0].habilidades} rows="3" class="input"></textarea>

        <p class="mt-6 input-label">
          ¿Qué debilidades consideras que posees en términos de habilidades y destrezas?
        </p>
        <textarea bind:value={$form[0].debilidades} rows="3" class="input"></textarea>

        <p class="mt-6 input-label">
          Número de hijos
        </p>
        <NumberInput bind:value={$form[0].num_hijos} />

        <p class="mt-6 input-label">
          ¿A qué edad fuiste madre por primera vez?
        </p>
        <NumberInput bind:value={$form[0].edad_madre_por_primera_vez} />

        <p class="mt-6 input-label">
          Estado de residencia
        </p>
        <Select
          bind:value={$form[0].estado}
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

        <p class="mt-6 input-label">
          Ciudad
        </p>
        <input bind:value={$form[0].ciudad} class="input" type="text" placeholder="Ciudad">

        <p class="mt-6 input-label">
          Dirección
        </p>
        <input bind:value={$form[0].direccion} class="input" type="text" placeholder="Dirección">
      {:else if page == 2}
        <p class="input-label">
          ¿Cuentas con acceso a internet y posees disponibilidad de tiempo para dedicar
          y completar el programa?
        </p>
        <Select
          bind:value={$form[1].disponibilidad}
          options={[
            'Sí',
            'No',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Cuál horario se adapta mejor a tu disponibilidad de tiempo?
        </p>
        <Select
          bind:value={$form[1].horario}
          options={[
            '2:00 pm a 3:30 pm',
            '3:30 pm a 5:00 pm',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Qué días se adaptan mejor a ti para recibir la $formación?
        </p>
        <Select
          bind:value={$form[1].dias}
          options={[
            'Martes y jueves',
            'Miércoles y viernes',
          ]}
        />
      {:else if page == 3}
        <p class="input-label">
          ¿Posees algún emprendimiento?
        </p>
        <Select
          bind:value={$form[2].tiene_emprendimiento}
          options={[
            'Sí',
            'No',
          ]}
        />

        <p class="mt-6 input-label">
          ¿En cuál de las áreas?
        </p>
        <Select
          bind:value={$form[2].area_emprendimiento}
          options={[
            'Gastronomía',
            'Moda',
            'Tecnología',
            'Servicios',
            'No poseo emprendimiento',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Has tenido experiencia en el área?
        </p>
        <Select
          bind:value={$form[2].experiencia}
          options={[
            'Sí',
            'No',
            'No poseo emprendimiento',
          ]}
        />

        <p class="mt-6 input-label">
          Cuéntanos un poco acerca de lo que te llama la atención de emprender
          en esta área, y cuál es la visión de negocio que posees al respecto
        </p>
        <textarea bind:value={$form[2].vision} rows="3" class="input"></textarea>

        <p class="mt-6 input-label">
          ¿Posees equipos, maquinarias e implementos para desarrollar un
          emprendimiento en el área seleccionada?
        </p>
        <Select
          bind:value={$form[2].posesion_equipos_y_recursos}
          options={[
            'Sí',
            'No',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Estarías dispuesta a trabajar de manera colaborativa y/o asociativa
          con otras mujeres para el desarrollo de una marca colectiva?
        </p>
        <Select
          bind:value={$form[2].disposicion_trabajo_equipo}
          options={[
            'Sí',
            'No',
          ]}
        />
      {:else if page == 4}
        <p class="input-label">
          ¿Te mantienes por tus propios medios?
        </p>
        <Select
          bind:value={$form[3].automanutencion }
          options={[
            'Sí',
            'No',
          ]}
        />

        <p class="mt-6 input-label">
          ¿Cuál es la principal fuente de ingresos de tu hogar?
        </p>
        <input bind:value={$form[3].fuente_de_ingresos} class="input" type="text">

        <p class="mt-6 input-label">
          ¿Qué porcentaje de ingreso representa tu aporte?
        </p>
        <Select
          bind:value={$form[3].porcentaje_de_ingreso}
          options={[
            '20%',
            '50%',
            '75%',
            '100%',
          ]}
        />
      {/if}
    </div>
  </div>
  <div slot="footer" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex justify-end -mx-2">
      {#if page < 4}
        <button class="mx-2 btn-primary" on:click={() => changePage(page + 1)}>Siguiente</button>
      {:else}
        <button class="mx-2 btn-primary" on:click={() => changePage(page - 1)}>Anterior</button>
        <button class="mx-2 btn-primary" on:click={send}>Enviar</button>
      {/if}
      <button class="mx-2 btn-primary" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
</Modal>
