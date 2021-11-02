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
		<option value="+34">ESP (+34)</option>
		<option value="+595">PAR (+595)</option>
		<option value="+598">URU (+598)</option>
        <option value="+">OTRO (+)</option>
	</select>
	<input
		class="input"
		type="number"
		bind:value={numero}
		placeholder="Número de teléfono (Sin 0 y sin 15)"
	/>
	<button type="submit" on:click={sendWhatsApp}>Iniciar chat</button>
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
		padding: 1em 0.5em;
		border-radius: 0.5em;
		margin: 0.25em 0.5em;
		border: 0;
	}

	select.input {
		flex-grow: 1;
	}

	input.input {
		flex-grow: 2;
	}

	button {
        border: 0;
        border-radius: 0.5em;
		padding: 1em 0.5em;
		margin: 1em 0.5em;
		flex-grow: 1;
        background: #e2e2e2;
        
	}

    button:hover{
        background: #bdbbbb;
        cursor: pointer;
    }
</style>
