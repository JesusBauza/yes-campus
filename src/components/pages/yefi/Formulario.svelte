<script>
  import Modal from '../../Modal.svelte'
  import Tabs from '../../formularios/Tabs.svelte'
  import Select from '../../formularios/Select.svelte'
  import { writable } from 'svelte/store'
  import Datepicker from './Datepicker.svelte'
  export let open
  let page
  let closeModal
  let sending

  const initialForm = () => [
    {
      cedula: '',
      sexo: '',
      nombre: '',
      direccion: '',
      correo: '',
      tel_fijo: '',
      tel_celular: '',
      whatsapp: '',
      instagram: '',
      facebook: '',
      estado_residencia: '',
      nivel_edu: '',
      condicion_discapacidad: '',
    },
    {
      nombre_emprendimiento: '',
      tipo_emprendimiento: '',
      tiempo_emprendimiento: '',
      dedicacion: '',
      clientela: '',
      productos: '',
      necesidades: '',
      impacto: '',
      porcentaje: '',
      participacion_previa: '',
    },
    {
      internet: '',
      disposicion: '',
      ayuda: ''
    },
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
        console.log(val, value, valid)
        return valid
      })
    }
    return valid
  }

  function send() {
    const data = {...$form[0], ...$form[1], ...$form[2]}
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
    fetch('https://api.yescampus.co/formularios/full-inclusion', {
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
        <div class="input-label">Cédula de identidad</div>
        <input type="text" class="input" bind:value={$form[0].cedula}>

        <div class="mt-6 input-label">Sexo</div>
        <Select
          bind:value={$form[0].sexo}
          options={[
          'Masculino', 'Femenino', 'Otro'
          ]}
        />

        <div class="mt-6 input-label">Nombres y apellidos</div>
        <input type="text" class="input" bind:value={$form[0].nombre}>

        <p class="mt-6 input-label">
          Fecha de nacimiento
        </p>
        <Datepicker bind:formattedSelected bind:selectedDate />
        <p class="mt-4 text-right text-red-500 t-p">* Válido sólo para jóvenes de 16 a 25 años de edad</p>

        <div class="mt-6 input-label">Dirección</div>
        <input type="text" class="input" bind:value={$form[0].direccion}>

        <div class="mt-6 input-label">Correo</div>
        <input type="text" class="input" bind:value={$form[0].correo}>

        <div class="mt-6 input-label">Número de teléfono fijo</div>
        <input type="text" class="input" bind:value={$form[0].tel_fijo}>

        <div class="mt-6 input-label">Número de teléfono celular</div>
        <input type="text" class="input" bind:value={$form[0].tel_celular}>

        <div class="mt-6 input-label">Número de WhatsApp</div>
        <input type="text" class="input" bind:value={$form[0].whatsapp}>

        <div class="mt-6 input-label">Instagram</div>
        <input type="text" class="input" bind:value={$form[0].instagram}>

        <div class="mt-6 input-label">Facebook</div>
        <input type="text" class="input" bind:value={$form[0].facebook}>

        <div class="mt-6 input-label">Estado de residencia</div>
        <Select
          bind:value={$form[0].estado_residencia}
          options={[
          'Aragua', 'Carabobo', 'Lara'
          ]}
        />

        <div class="mt-6 input-label">Nivel de educación</div>
        <Select
          bind:value={$form[0].nivel_edu}
          options={[
          'Sin estudios', 'Bachiller', 'TSU', 'Universitario', 'Post-universitario'
          ]}
        />

        <div class="mt-6 input-label">Condición de discapacidad que presenta</div>
        <Select
          bind:value={$form[0].condicion_discapacidad}
          options={[
          'Discapacidad auditiva', 'Discapacidad física', 'Discapacidad intelectual', 'Discapacidad visual', 'Varias de las anteriores', 'Otra'
          ]}
        />
      {:else if page == 2}
        <div class="input-label">Nombre del emprendimiento</div>
        <input type="text" class="input" bind:value={$form[1].nombre_emprendimiento}>

          <div class="mt-6 input-label">Tipo de emprendimiento</div>
          <Select
            bind:value={$form[1].tipo_emprendimiento}
            options={[
            'Expansión',
            'Idea',
            'Crecimiento',
            'Prototipo',
            'Validación',
            ]}
            />

          <div class="mt-6 input-label">Tiempo del emprendimiento</div>
          <Select
            bind:value={$form[1].tiempo_emprendimiento}
            options={[
            'Menos de 1 año', 'Desde 1 hasta 2 años', 'Más de 2 años'
            ]}
            />

          <div class="mt-6 input-label">¿A qué se dedica tu emprendimiento?</div>
          <Select
            bind:value={$form[1].dedicacion}
            options={[
            'Producción', 'Servicios', 'Mixto'
            ]}
          />
          <div class="mt-6 input-label">¿Quiénes son tus clientes actuales y potenciales?</div>
          <textarea type="text" class="input" bind:value={$form[1].clientela} rows="3"></textarea>

          <!-- TODO -->

          <div class="mt-6 input-label">Enumera los productos/servicios que ofreces actualmente y a futuro</div>
          <textarea type="text" class="input" bind:value={$form[1].productos} rows="3"></textarea>

          <div class="mt-6 input-label">¿Cuáles son las necesidades actuales de tu emprendimiento?</div>
          <Select
            bind:value={$form[1].necesidades}
            options={[
            'Financiamiento', 'Asesoría', 'Formalización Legal', 'Marketing y Ventas', 'Gestión de procesos'
            ]}
          />

          <div class="mt-6 input-label">¿Cómo ha impactado tu condición o discapacidad a la hora de emprender?</div>
          <textarea type="text" class="input" bind:value={$form[1].impacto} rows="3"></textarea>

          <div class="mt-6 input-label">¿Qué porcentaje de los ingresos que generas por tu emprendimiento forma parte del ingreso de tu hogar?</div>
          <Select
            bind:value={$form[1].porcentaje}
            options={[
            '25%', '50%', '75%', '100%', 'Otro'
            ]}
          />

          <div class="mt-6 input-label">¿Participaste antes en programas de formación para emprendedores?</div>
          <Select
            bind:value={$form[1].participacion_previa}
            options={[
            'Sí', 'No'
            ]}
          />
      {:else if page == 3}
        <div class="input-label">¿Posees conexión a internet?</div>
        <Select
          bind:value={$form[2].internet}
          options={[
          'Sí',
          'No',
          ]}
        />
        <div class="mt-6 input-label">¿Posees conexión a internet?</div>
        <Select
          bind:value={$form[2].disposicion}
          options={[
          'Sí',
          'No',
          ]}
        />
        <div class="mt-6 input-label">¿En caso de que tu condición te impida el manejo del computador, cuentas con alguna persona que te ayude durante el proceso?</div>
        <Select
          bind:value={$form[2].ayuda}
          options={[
          'Sí',
          'No',
          ]}
        />
        <p class="mt-6 t-p">
          *- Debes subir un video de máximo 55 segundos en formato horizontal, con buen sonido,
          donde te identifiques, plantees el objetivo de tu emprendimientos y
          motives al jurado para que te seleccione, explicando las razones de porqué
          quieres formar parte del programa.
        </p>
      {/if}
    </div>
  </div>
  <div slot="footer" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex justify-end -mx-2">
      {#if page < $form.length}
        <button class="mx-2 btn-primary" on:click={() => changePage(page + 1)}>Siguiente</button>
      {:else}
        <button class="mx-2 btn-primary" on:click={() => changePage(page - 1)}>Anterior</button>
        <button class="mx-2 btn-primary" on:click={send}>Enviar</button>
      {/if}
      <button class="mx-2 btn-primary" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
</Modal>
