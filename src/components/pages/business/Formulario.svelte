<script>
  import Modal from '../../Modal.svelte'
  import { writable } from 'svelte/store'
  import Select from '/$/components/formularios/Select.svelte'
  export let open
  let closeModal
  let sending

  const initialForm = () => ({
    nombre: '',
    numero: '',
    ciudad: '',
    email: '',
    servicio: '',
    mensaje: '',
  })

  const form = writable(initialForm())

  const reset = () => {
    form.set(initialForm())
  }

  const isEmpty = str => !str.trim().length

  function validate() {
    let valid = true
    Object.keys($form).every(val => {
      const value = String($form[val])
      valid = !isEmpty(value)
      console.log(value, valid)
      return valid
    })
    return valid
  }

  function send() {
    const data = {...$form}
    if (!validate()) {
      alert('No puede dejar campos vacíos')
      return
    }

    sending = true
    fetch('https://api.yescampus.co/formularios/business', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
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
</script>

<Modal bind:open bind:close={closeModal} onClose={reset} fullscreen>
  <div slot="header" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <h2 class="t-h3">Formulario de contacto</h2>
  </div>
  <div slot="content" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex flex-col w-full font-title">
      <div class="input-label">Nombre y apellido</div>
      <input type="text" class="mb-6 input" placeholder="Ej. Maria Rondón" bind:value={$form.nombre}>

      <div class="input-label">Teléfono</div>
      <input type="text" class="mb-6 input" placeholder="Ej. +584123456789" bind:value={$form.numero}>

      <div class="input-label">Ciudad</div>
      <input type="text" class="mb-6 input" placeholder="Ej. Caracas, Venezuela" bind:value={$form.ciudad}>

      <div class="input-label">Correo</div>
      <input type="text" class="mb-6 input" placeholder="Ej. mariarondon@gmail.com" bind:value={$form.email}>

      <div class="input-label">Servicio de interés</div>
      <Select
        bind:value={$form.servicio}
        options={[
        'Formación in Company',
        'Ruta Sustentable',
        'Financiamiento e inversión',
        'Varios',
        ]}
      />

      <div class="mt-6 input-label">Mensaje</div>
      <textarea class="input" cols="3" bind:value={$form.mensaje}></textarea>
    </div>
  </div>
  <div slot="footer" class:opacity-25={sending} class="duration-200" class:pointer-events-none={sending}>
    <div class="flex justify-end -mx-2">
      <button class="mx-2 btn-primary" on:click={send}>Enviar</button>
      <button class="mx-2 btn-primary-gray" on:click={closeModal}>Cerrar</button>
    </div>
  </div>
</Modal>
