<script>
	import Form from '../components/Form.svelte';

	const url = 'https://wa.me/';

	function send(e) {
		let { caracteristica, numero } = e.detail;
		if(!numero){
			alert("Ingresa un número sin letras ni espacios.")
		}
		window.open(url + caracteristica + numero, '_blank').focus();
	}
</script>

<sveltekit:head>
	<title>Enviar whatsapp sin guardar contacto - WasappeÁ</title>
</sveltekit:head>


	<h1>WasappeÁ</h1>

	<Form on:whatsapp={send} />

    <p>
        Envía WhatsApp sin agendar, sólo escribe el número de teléfono y haz click en "iniciar chat"!
    </p>


<style>

	h1 {
		color: white;
		position: relative;
        z-index: 0;
		margin-bottom: 0.3em;
        text-shadow: 1px 1px 2px rgb(0, 0, 0);
        font-size: 4em;
	}

    p{
        text-align: center;
        margin: 2em;
        color: white;
        font-size: 1.4em
    }
</style>
