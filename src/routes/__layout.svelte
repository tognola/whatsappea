<script>
    import NavBar from '../components/NavBar.svelte';

</script>

<main>
    <NavBar></NavBar>

    <slot />
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
		font-family: 'Bebas Neue', sans-serif;
	}
</style>
