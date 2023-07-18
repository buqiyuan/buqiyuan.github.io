import{d as e,a5 as t,h as a,c as n,k as s,R as o,a3 as r,o as l,_ as c,aa as i,ab as u,e as p,I as d,b as m,ac as v,H as h,L as f,l as g,w as y,W as b,ad as k,ae as _,af as w,ag as A,ah as j,ai as L,aj as x,ak as C,al as E,am as P,Z as I,u as T,j as q,A as $,an as O,ao as R,ap as W}from"./chunks/framework.37cce752.js";import{t as U}from"./chunks/theme.2999eb8d.js";const Y=["onWheel"],D=["src"],M=c(e({inheritAttrs:!1,__name:"ImgPreviewer",props:{url:String},emits:["click"],setup(e,{emit:c}){t((e=>({"73f2dd90":p.value,"71b65cf8":d.value,"71b65cf6":m.value,"3db96450":i.value})));const i=a(1),u=a(),p=a("center"),d=a("0px"),m=a("0px");let v=!1,h=!1,f={x:0,y:0};const g=e=>{setTimeout((()=>{v?v=!1:c("click",e)}),80)},y=e=>{const{deltaY:t,offsetX:a,offsetY:n}=e;t&&(p.value=`${a}px ${n}px`,t<0?i.value+=.1:t>0&&i.value>.6&&(i.value-=.1))},b=e=>{h=!0;const{clientX:t,clientY:a}=e;f={x:t-parseFloat(d.value),y:a-parseFloat(m.value)}},k=e=>{if(h){v=!0;const{clientX:t,clientY:a}=e;d.value=t-f.x+"px",m.value=a-f.y+"px"}},_=e=>{setTimeout((()=>{h=v=!1}),100)};return(t,a)=>(l(),n("div",{class:"modal",onClick:g,onWheel:r(y,["prevent"]),onPointerdown:b,onPointerup:_,onPointermove:k},[s("img",o({ref_key:"imgRef",ref:u,src:e.url},t.$attrs,{draggable:"false"}),null,16,D)],40,Y))}}),[["__scopeId","data-v-2ed882be"]]);M.show=e=>{const t=document.createElement("div"),a={...e,onClick:async()=>{var a;await(null==(a=e.onClick)?void 0:a.call(e)),t.remove()}};i(u(M,a),t),document.body.appendChild(t)};const X=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"},null,-1),F={key:0,fixed:"true",mini:"true",auto:"https://y.qq.com/n/yqq/playlist/2949360967.html"},H=e({__name:"APlayer",setup(e){const t=a(0),o=e=>{const a=document.createElement("script");a.src=e.target.href,document.body.appendChild(a),requestIdleCallback((()=>{t.value++}))};return(e,a)=>(l(),n(d,null,[X,s("link",{href:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js",rel:"preload",as:"script",onLoad:o},null,32),s("link",{href:"https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js",rel:"preload",as:"script",onLoad:o},null,32),2===t.value?(l(),n("meting-js",F)):p("",!0)],64))}}),S="is-longpress",B=c(e({__name:"BlowHeart",setup(e){t((e=>({bb7d7578:r.value,b438cc10:c.value,16157392:o.value})));const s=a(!1),o=a(""),r=a(""),c=a("");let i;return document.documentElement.addEventListener("mousedown",(e=>{i=setTimeout((()=>{const t=e.target;t instanceof HTMLElement&&!t.closest("a")&&document.body.classList.add(S)}),1e3)})),document.documentElement.addEventListener("mouseup",(e=>{document.body.classList.contains(S)&&(o.value=crypto.randomUUID?`#${crypto.randomUUID().slice(0,6)}`:`#${Math.random().toString(16).slice(2,8)}`,r.value=e.clientY+"px",c.value=e.clientX+"px",s.value=!0),clearTimeout(i),document.body.classList.remove(S)})),(e,t)=>(l(),m(v,{to:"body"},[s.value?(l(),n("div",{key:0,class:"heart-shape",onAnimationend:t[0]||(t[0]=e=>s.value=!1)},null,32)):p("",!0)]))}}),[["__scopeId","data-v-90ffaf87"]]),V=e({__name:"MyLayout",setup(e){const{Layout:t}=U;return(e,a)=>{const s=h("ClientOnly");return l(),n(d,null,[f(g(t)),f(s,null,{default:y((()=>[f(H),f(B)])),_:1})],64)}}});"undefined"!=typeof window&&window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then((async e=>{for(let t of e)await t.unregister();navigator.serviceWorker.register("/sw.js")}));const z=Object.assign({},U,{Layout:V,async enhanceApp({router:e}){b&&(e.onBeforePageLoad=t=>!(e.route.path.length>1&&e.route.path===new URL(t).pathname),e.onAfterRouteChanged=e=>{globalThis.requestIdleCallback??(globalThis.requestIdleCallback=setTimeout),globalThis.requestIdleCallback((()=>{document.querySelectorAll(".vp-doc img:not([no-zoom])").forEach((e=>{e.onclick=N}))}))})}}),N=e=>{const t=e.target,a=Object.fromEntries(Array.from(t.attributes).map((({name:e,value:t})=>[e,t])));M.show(a)};const Z=function e(t){if(t.extends){const a=e(t.extends);return{...a,...t,async enhanceApp(e){a.enhanceApp&&await a.enhanceApp(e),t.enhanceApp&&await t.enhanceApp(e)}}}return t}(z),G=e({name:"VitePressApp",setup(){const{site:e}=T();return q((()=>{$((()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir}))})),O(),R(),W(),Z.setup&&Z.setup(),()=>u(Z.Layout)}});async function J(){const e=function(){let e,t=b;return E((a=>{let n=P(a);return n?(t&&(e=n),(t||e===n)&&(n=n.replace(/\.js$/,".lean.js")),b&&(t=!1),I((()=>import(n)),[])):null}),Z.NotFound)}(),t=C(G);t.provide(_,e);const a=w(e.route);return t.provide(A,a),t.component("Content",j),t.component("ClientOnly",L),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>a.frontmatter.value},$params:{get:()=>a.page.value.params}}),Z.enhanceApp&&await Z.enhanceApp({app:t,router:e,siteData:x}),{app:t,router:e,data:a}}b&&J().then((({app:e,router:t,data:a})=>{t.go().then((()=>{k(t.route,a.site),e.mount("#app")}))}));export{J as createApp};
