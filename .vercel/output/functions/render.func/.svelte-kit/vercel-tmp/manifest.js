export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["facebook.png","favicon.png","favicon_192.png","favicon_32.png","favicon_48.png","favicon_512.png","favicon_96.png","instagram.png","manifest.json","menu_icon.svg","style.css","twitter.png","whatsapp.png","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-eb195c9f.js","imports":["_app/immutable/start-eb195c9f.js","_app/immutable/chunks/index-c07530e9.js","_app/immutable/chunks/singletons-c00e543a.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/howto",
				pattern: /^\/howto\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
