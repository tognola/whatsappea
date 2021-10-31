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

<main>
	<h1>WhatsappeÁ</h1>

	<Form on:whatsapp={send} />

	<hr />

    <p>
        Envía WhatsApp sin agendar, sólo escribe el número de teléfono y haz click en enviar!
    </p>
</main>

<style>
	main {
		display: flex;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: rgb(67, 56, 255);
		background: linear-gradient(0deg, rgba(67, 56, 255, 1) 0%, rgba(28, 247, 206, 1) 100%);
		font-family: sans-serif;
	}

	h1 {
		color: white;
		position: relative;
		margin-bottom: 1em;
        text-shadow: 1px 1px 2px rgb(0, 0, 0);
	}

    p{
        margin: 2em;
        color: white;
    }
</style>
