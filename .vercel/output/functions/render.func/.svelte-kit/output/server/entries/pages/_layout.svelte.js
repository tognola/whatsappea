import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const NavBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-11hvxyn.svelte-11hvxyn{position:fixed;top:0;right:1em;z-index:1}ul.svelte-11hvxyn.svelte-11hvxyn{display:flex}ul.svelte-11hvxyn li.svelte-11hvxyn{list-style:none;margin:1em}ul.svelte-11hvxyn li a.svelte-11hvxyn{color:white;text-decoration:none;text-shadow:1px 1px 2px rgb(0, 0, 0);font-size:1.2rem}.menu.svelte-11hvxyn.svelte-11hvxyn{color:white;width:32px;height:32px;font-size:32px;line-height:36px;text-align:center;padding:0.1em;background:rgba(99, 98, 98, 0.249);border:1px solid rgba(255, 255, 255, 0.3);position:fixed;right:0.5em;top:0.5em;display:none;filter:tra}.menu-icon.svelte-11hvxyn.svelte-11hvxyn::before{content:url('/menu_icon.svg');filter:opacity(75%)}.hide.svelte-11hvxyn.svelte-11hvxyn{display:none}@media screen and (max-width: 640px){.menu.svelte-11hvxyn.svelte-11hvxyn{display:block;cursor:pointer}ul.svelte-11hvxyn.svelte-11hvxyn{display:none;flex-direction:column;align-items:center;position:fixed;top:60px;left:1em;right:1em;background:rgba(30, 30, 30, 0.95);border-radius:5px;border:1px solid rgba(99, 98, 98, 1)}#menu-btn.svelte-11hvxyn:checked~ul.svelte-11hvxyn{display:flex}}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isShowing = false;
  $$result.css.add(css$2);
  return `<nav class="${"svelte-11hvxyn"}"><label for="${"menu-btn"}" class="${"menu svelte-11hvxyn"}"><span class="${"menu-icon svelte-11hvxyn"}"></span></label>
	<input type="${"checkbox"}" class="${"hide svelte-11hvxyn"}" id="${"menu-btn"}"${add_attribute("checked", isShowing, 1)}>
	<ul class="${"svelte-11hvxyn"}"><li class="${"svelte-11hvxyn"}"><a href="${"/"}" class="${"svelte-11hvxyn"}">Inicio</a></li>
		<li class="${"svelte-11hvxyn"}"><a href="${"/how_to"}" class="${"svelte-11hvxyn"}">\xBFC\xF3mo usar?</a></li>
		<li class="${"svelte-11hvxyn"}"><a href="${"/about"}" class="${"svelte-11hvxyn"}">Sobre nosotros</a></li></ul>
</nav>`;
});
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { query } = $$props;
  let matches = false;
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  return `${slots.default ? slots.default({ matches }) : ``}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-tahbez{color:white;position:fixed;bottom:0.5em;display:flex;align-items:center;justify-content:space-evenly;width:30vw}span.svelte-tahbez{display:inline-block;filter:drop-shadow(1px 1px 1px #000000);transform:scale(0.5)}.instagram.svelte-tahbez::before{content:url('/instagram.png');display:inline-block;width:24px;height:24px}.facebook.svelte-tahbez::before{content:url('/facebook.png');display:inline-block;width:24px;height:24px}.twitter.svelte-tahbez::before{content:url('/twitter.png');display:inline-block;width:24px;height:24px}.whatsapp.svelte-tahbez::before{content:url('/whatsapp.png');display:inline-block;width:24px;height:24px}@media screen and (max-width: 1024px){div.svelte-tahbez{width:90vw}}",
  map: null
};
const ig_url = "https://instagram.com/wasappea";
const fb_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A//whatsappea.vercel.app";
const twitter_url = "https://twitter.com/intent/tweet?text=Env%C3%ADa%20mensajes%20por%20whatsapp%20sin%20agendar%20el%20contacto,%20ingres%C3%A1%20en%3A%20https%3A//whatsappea.vercel.app";
const wp_url = "whatsapp://send?text=Inici\xE1 un chat por WhatsApp sin agendar el contacto! https://wasappea.com/";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"svelte-tahbez"}">Compartir:
	<a rel="${"external"}"${add_attribute("href", fb_url, 0)} target="${"_blank"}"><span class="${"facebook svelte-tahbez"}"></span></a>
	<a rel="${"external"}"${add_attribute("href", twitter_url, 0)} target="${"_blank"}"><span class="${"twitter svelte-tahbez"}"></span></a>

	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 640px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<a rel="${"external"}"${add_attribute("href", wp_url, 0)} data-action="${"share/whatsapp/share"}"><span class="${"whatsapp svelte-tahbez"}"></span></a>` : ``}`;
    }
  })}
	<a rel="${"external"}"${add_attribute("href", ig_url, 0)}><span class="${"instagram svelte-tahbez"}"></span></a>

</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1gijzft{display:flex;width:100vw;height:100vh;justify-content:center;align-items:center;flex-direction:column;background:rgb(67, 56, 255);background:linear-gradient(0deg, rgba(67, 56, 255, 1) 0%, rgba(28, 247, 206, 1) 100%);font-family:'Bebas Neue', sans-serif}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1gijzft"}">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}

    ${slots.default ? slots.default({ class: "content" }) : ``}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Layout as default
};
