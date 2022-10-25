import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const Modal_svelte_svelte_type_style_lang = "";
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-227wnf{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.input.svelte-227wnf{padding:1em 0.5em;border-radius:0.5em;margin:0.25em 0.5em;border:0}select.input.svelte-227wnf{flex-grow:1}input.input.svelte-227wnf{flex-grow:2}button.svelte-227wnf{border:0;border-radius:0.5em;padding:1em 0.5em;margin:1em 0.5em;flex-grow:1;background:#e2e2e2}button.svelte-227wnf:hover{background:#bdbbbb;cursor:pointer}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let numero;
  $$result.css.add(css$1);
  return `<form action="${""}" class="${"svelte-227wnf"}"><select class="${"input svelte-227wnf"}" name="${""}" id="${""}"><option value="${"+549"}">ARG (+54)</option><option value="${"+55"}">BRA (+55)</option><option value="${"+56"}">CHI (+56)</option><option value="${"+57"}">COL (+57)</option><option value="${"+34"}">ESP (+34)</option><option value="${"+595"}">PAR (+595)</option><option value="${"+598"}">URU (+598)</option><option value="${"+"}">OTRO (+)</option></select>
	<input class="${"input svelte-227wnf"}" type="${"number"}" placeholder="${"N\xFAmero de tel\xE9fono (Sin 0 y sin 15)"}"${add_attribute("value", numero, 0)}>
	<button type="${"submit"}" class="${"svelte-227wnf"}">Iniciar chat</button>
	</form>

${``}

${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1asdawd{color:white;position:relative;z-index:0;margin-bottom:0.3em;text-shadow:1px 1px 2px rgb(0, 0, 0);font-size:4em}p.svelte-1asdawd{text-align:center;margin:2em;color:white;font-size:1.4em\n    }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Enviar whatsapp sin guardar contacto - Wasappe\xC1</title></sveltekit:head>


	<h1 class="${"svelte-1asdawd"}">Wasappe\xC1</h1>

	${validate_component(Form, "Form").$$render($$result, {}, {}, {})}

    <p class="${"svelte-1asdawd"}">Env\xEDa WhatsApp sin agendar, s\xF3lo escribe el n\xFAmero de tel\xE9fono y haz click en &quot;iniciar chat&quot;!
    </p>`;
});
export {
  Page as default
};
