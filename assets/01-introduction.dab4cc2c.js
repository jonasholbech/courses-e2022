import{o as h}from"./vendor.1b243f8b.js";const m="modulepreload",s={},f="/",i=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${f}${t}`,t in s)return;s[t]=!0;const a=t.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${l}`))return;const e=document.createElement("link");if(e.rel=a?"stylesheet":m,a||(e.as="script",e.crossOrigin=""),e.href=t,document.head.appendChild(e),a)return new Promise((d,c)=>{e.addEventListener("load",d),e.addEventListener("error",c)})})).then(()=>n())};h("Z2dhx9M",{value:!0},async()=>{const[{default:o},{default:n}]=await Promise.all([i(()=>import("./Explainer.ba333569.js"),["assets/Explainer.ba333569.js","assets/index.57424268.js"]),i(()=>import("./client.d5006f2b.js"),["assets/client.d5006f2b.js","assets/index.57424268.js"])]);return(r,t)=>n(r)(o,{data:[{type:"rect",classes:"fragment fade-in-then-out",animation:"letsAnimateFast",x:130,y:230,width:660,height:110},{type:"rect",classes:"fragment fade-in-then-out",animation:"letsAnimateFast",x:150,y:185,width:660,height:110},{type:"text",classes:"fragment",x:50,y:40,text:"Which file do we load?"},{type:"text",x:550,y:150,text:"What kind of data do we need?"},{type:"text",x:550,y:250,text:"What to do once we get it"},{type:"arrow",classes:"fragment",d:"M170,50 L180,80"},{type:"arrow",d:"M550,145 L470,175"},{type:"arrow",d:"M550,245 L300,330"},{type:"arrow",d:"M550,245 L340,260"}]},t)});