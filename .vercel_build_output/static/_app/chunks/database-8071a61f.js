var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var r=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var o=(s,a,n)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))r.call(a,n)&&o(s,n,a[n]);if(i)for(var n of i(a))d.call(a,n)&&o(s,n,a[n]);return s};import{R as f,P as h,N as u,O as p,T as y,U as b}from"./vendor-c16c1f41.js";function D(){return f({apiKey:"AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",databaseURL:"https://feynman-mvp.firebaseio.com",authDomain:"feynman-mvp.firebaseapp.com",projectId:"feynman-mvp",storageBucket:"feynman-mvp.appspot.com",messagingSenderId:"148720897081",appId:"1:148720897081:web:fdf5c605dcc74b56",measurementId:"G-DR4M7QGV7Z"})}async function g(s){return new Promise(async a=>{const t=(await y(b(p(),s))).docs.map(c=>e({id:c.id},c.data()));a(t)})}async function I(s){return new Promise(async a=>{const n=await h(u(p(),s)),t=e({id:n.id},n.data());a(t)})}export{I as a,g as f,D as i};