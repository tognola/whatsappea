<script>
	import Form from '../components/Form.svelte';

	const url = 'https://api.whatsapp.com/send?phone=';

	function send(e) {
		let { caracteristica, numero } = e.detail;
		console.log(caracteristica + numero);
		window.open(url + caracteristica + numero, '_blank').focus();
	}
</script>

<svelte:head>
	<title>WhatsappeA</title>
</svelte:head>


	<h1>WhatsappeÁ</h1>

	<Form on:whatsapp={send} />

    <p>
        Envía WhatsApp sin agendar, sólo escribe el número de teléfono y haz click en "iniciar chat"!
    </p>


<style>

	h1 {
		color: white;
		position: relative;
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
