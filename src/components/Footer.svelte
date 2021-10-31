<script>
	import MediaQuery from './MediaQuery.svelte';

	const fb_url = 'https://www.facebook.com/sharer/sharer.php?u=https%3A//whatsappea.vercel.app';
	const twitter_url =
		'https://twitter.com/intent/tweet?text=Env%C3%ADa%20mensajes%20por%20whatsapp%20sin%20agendar%20el%20contacto,%20ingres%C3%A1%20en%3A%20https%3A//whatsappea.vercel.app';
    const wp_url ='whatsapp://send?text=Enviá mensajes por WhatsApp sin agendar el contacto! https://whatsappea.vercel.app/';
</script>

<div>
	Compartir:
	<!-- span class="instagram" / .instagram::before {
		content: url('/instagram.svg');
		display: inline-block;
		width: 24px;
		height: 24px;
	}-->
	<a href={fb_url} target="_blank"><span class="facebook" /></a>
	<a href={twitter_url} target="_blank"><span class="twitter" /></a>

	<MediaQuery query="(max-width: 640px)" let:matches>
		{#if matches}
			<a href={wp_url} data-action="share/whatsapp/share"><span class="whatsapp"></span></a>
		{/if}
	</MediaQuery>
</div>

<style>
	div {
		color: white;
		position: fixed;
		bottom: 0.5em;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 30vw;
	}

	span {
		display: inline-block;
		filter: drop-shadow(1px 1px 1px #000000);
		transform: scale(0.5);
	}
	

	.facebook::before {
		content: url('/facebook.png');
		display: inline-block;
		width: 24px;
		height: 24px;
	}

	.twitter::before {
		content: url('/twitter.png');
		display: inline-block;
	}

	.whatsapp::before {
		content: url('/whatsapp.png');
		display: inline-block;
		width: 24px;
		height: 24px;
	}

	@media screen and (max-width: 1024px) {
		div {
			width: 90vw;
		}
	}
</style>
