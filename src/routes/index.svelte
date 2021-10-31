<script>

    let caracterisitica;
    let numero;
    const url = "https://api.whatsapp.com/send?phone="
    
    function send(e){
        e.preventDefault();
        console.log(caracterisitica + numero)
        window.open(url+caracterisitica + numero, '_blank').focus();
    }

</script>

<svelte:head>
    <title>WhatsappeA</title>
</svelte:head>

<main>
    <h1>WhatsappeA</h1>

    <form action="">
        <select name="" id="" bind:value={caracterisitica}>
            <option value="+549">ARG (+54)</option>
        </select>
        <input type="number" bind:value={numero}>
        <button type="submit" on:click={send}> Enviar</button>
    </form>
</main>


<style>
    main{
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgb(0, 90, 173);
        font-family: sans-serif;
    }

    h1{
        color: white;
        position: relative;
        margin-bottom: 1em;
    }

    select{
        padding: 0.5em;
        border-radius: .5em;
    }

    input {
        padding: 0.5em;
        border-radius: .5em;
    }
</style>