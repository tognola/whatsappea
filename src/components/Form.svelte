<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
    let caracteristica;

    onMount( () => {
		caracteristica = localStorage.getItem('areacode')
		? localStorage.getItem('areacode')
		: '+549';
	});

	
	let numero;
	let showName = false;

	function sendWhatsApp(e) {
		e.preventDefault();
		dispatch('whatsapp', { caracteristica, numero });
	}

	function saveContact(e) {
		e.preventDefault();
		showName = !showName;
	}

	function saveOption() {
		localStorage.setItem('areacode', caracteristica);
	}
</script>

<form action="">
	<select class="input" name="" id="" bind:value={caracteristica} on:change={saveOption}>
		<option value="+549">ARG (+54)</option>
		<option value="+55">BRA (+55)</option>
		<option value="+569">CHI (+56)</option>
		<option value="+579">COL (+57)</option>
	</select>
	<input
		class="input"
		type="number"
		bind:value={numero}
		placeholder="Número de teléfono (Sin 0 y sin 15)"
	/>
	<button type="submit" on:click={sendWhatsApp}>Enviar</button>
	<!-- button on:click={saveContact}> Guardar</button -->
</form>

{#if showName}
	<input type="text" />
{/if}

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.input {
		padding: 0.5em;
		border-radius: 0.5em;
		margin: 0 0.5em;
		border: 0;
	}

	select.input {
		flex-grow: 1;
	}

	input.input {
		flex-grow: 2;
	}

	button {
		padding: 0.5em;
		margin: 1em 0.5em;
		flex-grow: 1;
	}
</style>
