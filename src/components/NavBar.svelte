<script>
    let isShowing = false;
    
    function closeMenu(){
        isShowing = false;
    }
</script>

<nav>
	<label for="menu-btn" class="menu"><span class="menu-icon" /></label>
	<input type="checkbox" class="hide" id="menu-btn" bind:checked={isShowing} />
	<ul on:click={closeMenu}>
		<li><a href="/">Inicio</a></li>
		<li><a href="/how_to">¿Cómo usar?</a></li>
		<li><a href="/about">Sobre nosotros</a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		right: 1em;
		z-index: 1;
	}

	ul {
		display: flex;
	}

	ul li {
		list-style: none;
		margin: 1em;
	}

	ul li a {
		color: white;
		text-decoration: none;
		text-shadow: 1px 1px 2px rgb(0, 0, 0);
		font-size: 1.2rem;
	}

	.menu {
		color: white;
		width: 32px;
		height: 32px;
		font-size: 32px;
		line-height: 36px;
		text-align: center;
		padding: 0.1em;
		background: rgba(99, 98, 98, 0.249);
		border: 1px solid rgba(255, 255, 255, 0.3);
		position: fixed;
		right: 0.5em;
		top: 0.5em;
		display: none;
		filter: tra;
	}

	.menu-icon::before {
		content: url('/menu_icon.svg');
		filter: opacity(75%);
	}

	.hide {
		display: none;
	}

	@media screen and (max-width: 640px) {
		.menu {
			display: block;
			cursor: pointer;
		}

		ul {
			display: none;
			flex-direction: column;
			align-items: center;
			position: fixed;
			top: 60px;
			left: 1em;
			right: 1em;
			background: rgba(30, 30, 30, 0.95);
			border-radius: 5px;
			border: 1px solid rgba(99, 98, 98, 1);
		}

		#menu-btn:checked ~ ul {
			display: flex;
		}
	}
</style>
