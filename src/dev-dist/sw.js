if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(t[s])return;let r={};const l=e=>i(e,s),u={module:{uri:s},exports:r,require:l};t[s]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(o(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"0.4bh7s2qsmf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
