import{U as n,C as t}from"./vendor-577628cf.js";import{r}from"./singletons-12a22614.js";function c(){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<20;s++)e+=o.charAt(Math.floor(Math.random()*o.length));return e}const f=function(o,e={month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"utc"}){const s=new Date(o);let a=s.getTimezoneOffset()*6e4;return new Date(s-a).toLocaleDateString("en-US",e)},h=t(0),m=t(0),g=t(!1),p=t({}),D=t({type:"pencil",color:"white",lineWidth:3}),y=t(!0),w=t(null),b=t({}),T=t({}),j=n(c()),v=t(!1),i=r,A=l;async function l(o,e){return i.goto(o,e,[])}export{h as a,j as b,m as c,c as d,T as e,w as f,A as g,g as h,v as i,D as j,f as k,y as o,b as r,p as u};