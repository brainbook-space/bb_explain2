import{r as g}from"./singletons-12a22614.js";const m=g,y=w;async function w(e,o){return m.goto(e,o,[])}function P(){const e=document.getElementById("main-content")||document.getElementById("root-layout-div"),o=e.clientHeight,i=e.clientWidth,t=4/3;let n={};return i*(1/t)<o?(n.width=i,n.height=n.width*(1/t)):(n.height=o,n.width=n.height*t),n}function b({points:e,color:o,lineWidth:i,isErasing:t},n=null,u,r){return new Promise(async l=>{for(let s=1;s<e.length;s++)f(e,s,t,u,o,i,r),n!==null&&await new Promise(a=>setTimeout(a,n));l()})}function f(e,o,i,t,n="white",u=3,r){p(n,u,i,t);const l=e[o-1],s=l.unitX*r.width,a=l.unitY*r.height,c=e[o],h=c.unitX*r.width,d=c.unitY*r.height;t.beginPath(),t.moveTo(s,a),t.lineTo(h,d),t.stroke()}function p(e,o,i,t){t.globalCompositeOperation=i?"destination-out":"source-over",t.strokeStyle=e,t.lineWidth=o,t.lineJoin="round",t.lineCap="round"}export{P as a,f as c,b as d,y as g};