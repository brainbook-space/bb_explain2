var Ye=Object.defineProperty;var De=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var Pe=(s,e,t)=>e in s?Ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ae=(s,e)=>{for(var t in e||(e={}))Ge.call(e,t)&&Pe(s,t,e[t]);if(De)for(var t of De(e))Ke.call(e,t)&&Pe(s,t,e[t]);return s};import{S as Z,i as $,s as ee,a9 as Je,k as x,e as F,n as O,c as N,b as y,L as b,aa as we,U as ue,f as U,a3 as H,ab as se,t as ce,a as z,ac as ne,d as v,g as fe,M as E,ad as Qe,H as G,ae as Ze,j as de,m as he,o as pe,af as $e,ag as et,h as tt,I as K,J,K as Q,x as W,u as M,v as me,a4 as ge,E as X,Y as te,ah as ot,r as st,w as nt,ai as ke,A as ve,N as Te,aj as rt,O as Se,P as le,ak as lt,a0 as it,al as at,am as ut,an as ct,ao as ft,ap as Ee}from"./vendor-4d76b2cf.js";import{o as Ae,u as dt,b as _e,a as Ie,c as Re,g as ht,d as Le,r as ze}from"./store-f14bdcfc.js";import{d as re,r as Ce,a as Ve}from"./canvas-226d237d.js";import{_ as pt}from"./preload-helper-ec9aa979.js";const mt=s=>({}),Fe=s=>({});function Ne(s,e,t){const o=s.slice();return o[11]=e[t],o}function Ue(s){let e,t,o,n,r,f=s[2].pencilColors,u=[];for(let i=0;i<f.length;i+=1)u[i]=We(Ne(s,f,i));return{c(){for(let i=0;i<u.length;i+=1)u[i].c();e=x(),t=F("img"),this.h()},l(i){for(let g=0;g<u.length;g+=1)u[g].l(i);e=O(i),t=N(i,"IMG",{width:!0,height:!0,style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){y(t,"width","46"),y(t,"height","33"),b(t,"margin-left","8px"),we(t.src,o="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30G9gEErDXNf8qxm0-vvSLs2zaE8V6v-pDqxNg-CUaoeORwmoosKPF-DC2SUG772Tm3A&usqp=CAU")||y(t,"src",o),y(t,"alt","eraser"),y(t,"class","svelte-1bgxyxs"),ue(t,"eraser-selected",s[3].type==="eraser")},m(i,g){for(let l=0;l<u.length;l+=1)u[l].m(i,g);U(i,e,g),U(i,t,g),n||(r=H(t,"click",s[7]),n=!0)},p(i,g){if(g&12){f=i[2].pencilColors;let l;for(l=0;l<f.length;l+=1){const h=Ne(i,f,l);u[l]?u[l].p(h,g):(u[l]=We(h),u[l].c(),u[l].m(e.parentNode,e))}for(;l<u.length;l+=1)u[l].d(1);u.length=f.length}g&8&&ue(t,"eraser-selected",i[3].type==="eraser")},d(i){Qe(u,i),i&&v(e),i&&v(t),n=!1,r()}}}function We(s){let e,t,o,n,r,f,u,i,g,l,h,c;function m(){return s[6](s[11])}return{c(){e=F("div"),t=se("svg"),o=se("g"),n=se("path"),r=ce(`;\r
            `),f=se("polygon"),i=se("path"),g=se("path"),this.h()},l(_){e=N(_,"DIV",{style:!0,class:!0});var a=z(e);t=ne(a,"svg",{preserveAspectRatio:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,style:!0,"xml:space":!0,class:!0});var T=z(t);o=ne(T,"g",{});var R=z(o);n=ne(R,"path",{d:!0}),z(n).forEach(v),r=fe(R,`;\r
            `),f=ne(R,"polygon",{style:!0,points:!0}),z(f).forEach(v),i=ne(R,"path",{style:!0,d:!0}),z(i).forEach(v),g=ne(R,"path",{style:!0,d:!0}),z(g).forEach(v),R.forEach(v),T.forEach(v),a.forEach(v),this.h()},h(){y(n,"d",`M0,0v72.377c0,1.588,0.234,3.169,0.698,4.706l45.416,150.032C46.633,228.828,48.212,230,50,230s3.367-1.172,3.886-2.883\r
              L99.31,77.079c0.457-1.525,0.69-3.108,0.69-4.702V0.002`),y(f,"style",u=`fill: ${s[11]};`),y(f,"points","50,211.978 38.879,175.24 61.122,175.24"),b(i,"fill","#424242"),y(i,"d",`M63.581,167.118H36.42L8.765,75.761l10.924-9.63l12.5,11.015c1.54,1.353,3.835,1.35,5.375-0.002\r
                l12.468-11.007l12.464,11.005c1.54,1.357,3.839,1.357,5.377,0l12.465-11.005l10.9,9.623L63.581,167.118z`),y(g,"style",l=`fill: ${s[11]};`),y(g,"d",`M91.878,0v65.486l-8.852-7.813c-1.539-1.353-3.838-1.354-5.377,0.002L65.185,68.679L52.72,57.674\r
                c-1.539-1.356-3.838-1.354-5.377-0.002L34.871,68.683L22.375,57.67c-0.769-0.676-1.725-1.013-2.685-1.013\r
                c-0.959,0-1.919,0.339-2.685,1.013L8.121,65.5L8.098,0.024L91.878,0z`),y(t,"preserveAspectRatio","none"),y(t,"version","1.1"),y(t,"id","Layer_1"),y(t,"xmlns","http://www.w3.org/2000/svg"),y(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),y(t,"x","0px"),y(t,"y","0px"),y(t,"width","16px"),y(t,"height","30px"),y(t,"viewBox","0 0 100 230"),b(t,"enable-background","new 0 0 100 230"),y(t,"xml:space","preserve"),y(t,"class","svelte-1bgxyxs"),b(e,"margin","0 4px"),b(e,"width","30px"),b(e,"height","42px"),b(e,"border-radius","3px"),b(e,"align-items","center"),b(e,"display","flex"),b(e,"justify-content","center"),y(e,"class","svelte-1bgxyxs"),ue(e,"pencil-selected",s[3].color===s[11])},m(_,a){U(_,e,a),E(e,t),E(t,o),E(o,n),E(o,r),E(o,f),E(o,i),E(o,g),h||(c=H(e,"click",m),h=!0)},p(_,a){s=_,a&4&&u!==(u=`fill: ${s[11]};`)&&y(f,"style",u),a&4&&l!==(l=`fill: ${s[11]};`)&&y(g,"style",l),a&12&&ue(e,"pencil-selected",s[3].color===s[11])},d(_){_&&v(e),h=!1,c()}}}function gt(s){let e;const t=s[5]["dropdown-menu"],o=G(t,s,s[10],Fe);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,r){o&&o.p&&(!e||r&1024)&&K(o,t,n,n[10],e?Q(t,n[10],r,mt):J(n[10]),Fe)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function _t(s){let e,t;return e=new ot({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}}),{c(){de(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,n){pe(e,o,n),t=!0},p(o,n){const r={};n&1024&&(r.$$scope={dirty:n,ctx:o}),e.$set(r)},i(o){t||(W(e.$$.fragment,o),t=!0)},o(o){M(e.$$.fragment,o),t=!1},d(o){me(e,o)}}}function bt(s){let e,t,o,n,r,f=(s[1]?"No touch":"Touch draw")+"",u,i,g=Object.keys(s[2]).length>0,l,h,c,m,_,a,T,R,V;o=new Je({props:{icons:!1,checked:!s[1],style:"margin: 0 !important"}});let w=g&&Ue(s);const P=s[5].default,d=G(P,s,s[10],null);let S={style:"left: 100px; top: 50px; width: 300px",$$slots:{default:[_t]},$$scope:{ctx:s}};return a=new Ze({props:S}),s[9](a),{c(){e=F("div"),t=F("div"),de(o.$$.fragment),n=x(),r=F("div"),u=ce(f),i=x(),w&&w.c(),l=x(),d&&d.c(),h=x(),c=F("span"),m=ce("more_horiz"),_=x(),de(a.$$.fragment),this.h()},l(A){e=N(A,"DIV",{style:!0});var D=z(e);t=N(D,"DIV",{style:!0});var B=z(t);he(o.$$.fragment,B),n=O(B),r=N(B,"DIV",{style:!0});var j=z(r);u=fe(j,f),j.forEach(v),B.forEach(v),i=O(D),w&&w.l(D),l=O(D),d&&d.l(D),h=O(D),c=N(D,"SPAN",{class:!0,style:!0});var Y=z(c);m=fe(Y,"more_horiz"),Y.forEach(v),_=O(D),he(a.$$.fragment,D),D.forEach(v),this.h()},h(){b(r,"margin-top","2px"),b(r,"font-size","0.55rem"),b(r,"font-family","Roboto,sans-serif"),b(r,"color","white"),b(t,"margin-right","10px"),b(t,"text-align","center"),y(c,"class","material-icons"),b(c,"margin-right","10px"),b(c,"color","white"),b(c,"font-size","2rem"),b(e,"position","absolute"),b(e,"display","flex"),b(e,"align-items","center"),b(e,"height","50px"),b(e,"left","0"),b(e,"right","auto"),b(e,"top","0"),b(e,"bottom","auto"),b(e,"z-index","100"),b(e,"background-color","grey"),b(e,"padding-left","10px"),b(e,"border-radius","2px")},m(A,D){U(A,e,D),E(e,t),pe(o,t,null),E(t,n),E(t,r),E(r,u),E(e,i),w&&w.m(e,null),E(e,l),d&&d.m(e,null),E(e,h),E(e,c),E(c,m),E(e,_),pe(a,e,null),T=!0,R||(V=[H(t,"click",$e(et(s[4]))),H(c,"click",s[8])],R=!0)},p(A,[D]){const B={};D&2&&(B.checked=!A[1]),o.$set(B),(!T||D&2)&&f!==(f=(A[1]?"No touch":"Touch draw")+"")&&tt(u,f),D&4&&(g=Object.keys(A[2]).length>0),g?w?w.p(A,D):(w=Ue(A),w.c(),w.m(e,l)):w&&(w.d(1),w=null),d&&d.p&&(!T||D&1024)&&K(d,P,A,A[10],T?Q(P,A[10],D,null):J(A[10]),null);const j={};D&1024&&(j.$$scope={dirty:D,ctx:A}),a.$set(j)},i(A){T||(W(o.$$.fragment,A),W(d,A),W(a.$$.fragment,A),T=!0)},o(A){M(o.$$.fragment,A),M(d,A),M(a.$$.fragment,A),T=!1},d(A){A&&v(e),me(o),w&&w.d(),d&&d.d(A),s[9](null),me(a),R=!1,ge(V)}}}function yt(s,e,t){let o,n,r;X(s,Ae,_=>t(1,o=_)),X(s,dt,_=>t(2,n=_)),X(s,_e,_=>t(3,r=_));let{$$slots:f={},$$scope:u}=e,i;function g(){Ae.set(!o)}const l=_=>_e.set({type:"pencil",color:_,lineWidth:3}),h=()=>_e.set({type:"eraser",color:"",lineWidth:40}),c=()=>i.setOpen(!0);function m(_){te[_?"unshift":"push"](()=>{i=_,t(0,i)})}return s.$$set=_=>{"$$scope"in _&&t(10,u=_.$$scope)},[i,o,n,r,g,f,l,h,c,m,u]}class wt extends Z{constructor(e){super();$(this,e,yt,bt,ee,{})}}const kt=s=>({}),Me=s=>({slot:"dropdown-menu"});function Be(s){let e,t;return e=new wt({props:{$$slots:{"dropdown-menu":[Tt],default:[vt]},$$scope:{ctx:s}}}),{c(){de(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,n){pe(e,o,n),t=!0},p(o,n){const r={};n&131072&&(r.$$scope={dirty:n,ctx:o}),e.$set(r)},i(o){t||(W(e.$$.fragment,o),t=!0)},o(o){M(e.$$.fragment,o),t=!1},d(o){me(e,o)}}}function vt(s){let e;const t=s[14].default,o=G(t,s,s[17],null);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,r){o&&o.p&&(!e||r&131072)&&K(o,t,n,n[17],e?Q(t,n[17],r,null):J(n[17]),null)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function Tt(s){let e;const t=s[14]["dropdown-menu"],o=G(t,s,s[17],Me);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,r){o&&o.p&&(!e||r&131072)&&K(o,t,n,n[17],e?Q(t,n[17],r,kt):J(n[17]),Me)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function At(s){let e,t,o,n,r,f,u,i,g,l=s[0]&&Be(s);return{c(){l&&l.c(),e=x(),t=F("canvas"),n=x(),r=F("canvas"),this.h()},l(h){l&&l.l(h),e=O(h),t=N(h,"CANVAS",{style:!0});var c=z(t);c.forEach(v),n=O(h),r=N(h,"CANVAS",{style:!0});var m=z(r);m.forEach(v),this.h()},h(){y(t,"style",o=`position: absolute; z-index: 1; margin-top: 0; margin-left: 0; width: ${s[4]}px; height: ${s[3]}px`),y(r,"style",f=`position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: block;
  background-color: rgb(46, 49, 49); width: ${s[4]}px; height: ${s[3]}px`)},m(h,c){l&&l.m(h,c),U(h,e,c),U(h,t,c),s[15](t),U(h,n,c),U(h,r,c),s[16](r),u=!0,i||(g=[H(t,"touchstart",s[5]),H(t,"touchmove",s[6]),H(t,"touchend",s[7])],i=!0)},p(h,[c]){h[0]?l?(l.p(h,c),c&1&&W(l,1)):(l=Be(h),l.c(),W(l,1),l.m(e.parentNode,e)):l&&(st(),M(l,1,1,()=>{l=null}),nt()),(!u||c&24&&o!==(o=`position: absolute; z-index: 1; margin-top: 0; margin-left: 0; width: ${h[4]}px; height: ${h[3]}px`))&&y(t,"style",o),(!u||c&24&&f!==(f=`position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: block;
  background-color: rgb(46, 49, 49); width: ${h[4]}px; height: ${h[3]}px`))&&y(r,"style",f)},i(h){u||(W(l),u=!0)},o(h){M(l),u=!1},d(h){l&&l.d(h),h&&v(e),h&&v(t),s[15](null),h&&v(n),h&&v(r),s[16](null),i=!1,ge(g)}}}function Rt(s){return(s.endTime-s.startTime)/s.points.length}function Dt(s,e,t){let o,n,r,f;X(s,Ie,p=>t(3,o=p)),X(s,Re,p=>t(4,n=p)),X(s,_e,p=>t(21,r=p)),X(s,Ae,p=>t(22,f=p));let{$$slots:u={},$$scope:i}=e,{strokesArray:g}=e,{currentTime:l=0}=e,{backgroundImageDownloadURL:h=""}=e;const c=ke();let m,_,a,T,R=[],V=!1,w={x:-1,y:-1},P={points:[]},d;ve(()=>{t(10,m=a.getContext("2d")),t(11,_=T.getContext("2d"))});function S(p){if(p.touches.length>1)return;const L=p.touches[0].touchType==="stylus";if(f&&!L){console.log("error: cannot use finger during Apple Pencil mode");return}j(p,{isInitialContact:!0})}function A(p){if(!V)return;if(p.touches.length>1){console.log("touchmove ignored: only 1 finger allowed");return}const L=p.touches[0].touchType==="stylus";if(f&&!L){console.log("error: cannot use finger during Apple Pencil mode");return}j(p,{isInitialContact:!1})}function D(p){if(!V||p.touches.length>0)return;const L=p.changedTouches[0].touchType==="stylus";if(f&&!L){console.log("error: cannot use finger during Apple Pencil mode");return}be(P),V=!1}function B(p){V=!0,w={x:-1,y:-1},P={strokeNumber:g.length+1,startTime:Number(l.toFixed(1)),color:r.color,lineWidth:r.lineWidth,isErasing:r.type==="eraser",points:[],sessionID:"123"}}function j(p,{isInitialContact:L}){p.preventDefault(),L&&B();const q=ye(p);Y(p,q)}function Y(p,L){P.points.push({unitX:parseFloat(L.x/a.width).toFixed(4),unitY:parseFloat(L.y/a.height).toFixed(4)}),w.x!==-1&&w.y!==-1&&Ve([ie(w),ie(L)],1,r.type==="eraser",m,r.color,r.lineWidth,a),w=L}function be(p){p.endTime=Number(l.toFixed(1)),p.id=ht(),R.push(p),c("stroke-drawn",{newStroke:p})}function ye(p){const{left:L,top:q}=a.getBoundingClientRect();return{x:p.touches[0].pageX-L-window.scrollX,y:p.touches[0].pageY-q-window.scrollY}}function ie({x:p,y:L}){return{unitX:p/a.width,unitY:L/a.height}}function k(){m.clearRect(0,0,n,o)}function I(p){te[p?"unshift":"push"](()=>{a=p,t(1,a),t(10,m),t(4,n),t(3,o),t(0,g)})}function C(p){te[p?"unshift":"push"](()=>{T=p,t(2,T),t(10,m),t(4,n),t(3,o),t(0,g),t(1,a)})}return s.$$set=p=>{"strokesArray"in p&&t(0,g=p.strokesArray),"currentTime"in p&&t(8,l=p.currentTime),"backgroundImageDownloadURL"in p&&t(9,h=p.backgroundImageDownloadURL),"$$scope"in p&&t(17,i=p.$$scope)},s.$$.update=()=>{if(s.$$.dirty&1051&&m&&(t(1,a.width=n,a),t(1,a.height=o,a),t(2,T.width=n,T),t(2,T.height=o,T),g))for(const p of g)re(p,null,m,a);if(s.$$.dirty&2566&&_&&(_.clearRect(0,0,T.scrollWidth,T.scrollHeight),Ce(h,a,_)),s.$$.dirty&13315&&m&&g){let p=R.length,L=g.length;if(p!==L)if(p<L)if(p===0){for(const q of g)re(q,null,m,a);t(12,R=[...g])}else for(let q=p;q<L;q++){const oe=g[q];re(oe,oe.startTime!==oe.endTime?Rt(oe):null,m,a),R.push(oe)}else{let q=function(){k(),t(12,R=[]),w={x:-1,y:-1};for(const Xe of g)re(Xe,null,m,a)};(function(){console.log("debounced board reset"),d&&clearTimeout(d),t(13,d=setTimeout(q,1e3))})()}}},[g,a,T,o,n,S,A,D,l,h,m,_,R,d,u,I,C,i]}class Xt extends Z{constructor(e){super();$(this,e,Dt,At,ee,{strokesArray:0,currentTime:8,backgroundImageDownloadURL:9})}}function je(s){let e,t,o,n;return{c(){e=F("span"),t=ce("play_circle"),this.h()},l(r){e=N(r,"SPAN",{class:!0,style:!0});var f=z(e);t=fe(f,"play_circle"),f.forEach(v),this.h()},h(){y(e,"class","material-icons overlay-center svelte-12w6n3q"),b(e,"color","white"),b(e,"font-size","6rem"),b(e,"width","120px"),b(e,"height","120px"),b(e,"z-index","5")},m(r,f){U(r,e,f),E(e,t),o||(n=H(e,"click",s[9]),o=!0)},p:Te,d(r){r&&v(e),o=!1,n()}}}function Pt(s){let e,t,o,n,r,f,u,i,g,l,h,c,m,_,a,T,R;const V=s[17].default,w=G(V,s,s[16],null);let P=!s[8]&&s[6]===!1&&s[0]&&je(s);return{c(){e=F("div"),w&&w.c(),t=x(),P&&P.c(),o=x(),n=F("div"),r=F("canvas"),u=x(),i=F("canvas"),l=x(),h=F("div"),c=F("audio"),this.h()},l(d){e=N(d,"DIV",{style:!0});var S=z(e);w&&w.l(S),S.forEach(v),t=O(d),P&&P.l(d),o=O(d),n=N(d,"DIV",{style:!0});var A=z(n);r=N(A,"CANVAS",{style:!0});var D=z(r);D.forEach(v),u=O(A),i=N(A,"CANVAS",{style:!0});var B=z(i);B.forEach(v),A.forEach(v),l=O(d),h=N(d,"DIV",{});var j=z(h);c=N(j,"AUDIO",{src:!0,style:!0});var Y=z(c);Y.forEach(v),j.forEach(v),this.h()},h(){b(e,"position","absolute"),b(e,"right","0"),b(e,"left","auto"),b(e,"top","0"),b(e,"bottom","auto"),b(e,"display","flex"),b(e,"padding-top","4px"),b(e,"padding-bottom","4px"),b(e,"z-index","5"),y(r,"style",f=`position: absolute; z-index: 1; z-index: 1; margin-top: 0; margin-left: 0; width: ${s[5]}px; height: ${s[4]}px; background-color: transparent`),y(i,"style",g=`position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    background-color: rgb(46, 49, 49); width: ${s[5]}px; height: ${s[4]}px`),b(n,"position","relative"),we(c.src,m=s[1])||y(c,"src",m),c.controls=!0,y(c,"style",_=`width: ${s[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`)},m(d,S){U(d,e,S),w&&w.m(e,null),U(d,t,S),P&&P.m(d,S),U(d,o,S),U(d,n,S),E(n,r),s[18](r),E(n,u),E(n,i),s[19](i),U(d,l,S),U(d,h,S),E(h,c),s[20](c),a=!0,T||(R=[H(c,"play",s[10]),H(c,"seeking",s[11])],T=!0)},p(d,[S]){w&&w.p&&(!a||S&65536)&&K(w,V,d,d[16],a?Q(V,d[16],S,null):J(d[16]),null),!d[8]&&d[6]===!1&&d[0]?P?P.p(d,S):(P=je(d),P.c(),P.m(o.parentNode,o)):P&&(P.d(1),P=null),(!a||S&48&&f!==(f=`position: absolute; z-index: 1; z-index: 1; margin-top: 0; margin-left: 0; width: ${d[5]}px; height: ${d[4]}px; background-color: transparent`))&&y(r,"style",f),(!a||S&48&&g!==(g=`position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    background-color: rgb(46, 49, 49); width: ${d[5]}px; height: ${d[4]}px`))&&y(i,"style",g),(!a||S&2&&!we(c.src,m=d[1]))&&y(c,"src",m),(!a||S&32&&_!==(_=`width: ${d[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`))&&y(c,"style",_)},i(d){a||(W(w,d),a=!0)},o(d){M(w,d),a=!1},d(d){d&&v(e),w&&w.d(d),d&&v(t),P&&P.d(d),d&&v(o),d&&v(n),s[18](null),s[19](null),d&&v(l),d&&v(h),s[20](null),T=!1,ge(R)}}}let xe=2;function St(s){return(s.endTime-s.startTime)/s.points.length}function Et(s,e,t){let o,n;X(s,Ie,k=>t(4,o=k)),X(s,Re,k=>t(5,n=k));let{$$slots:r={},$$scope:f}=e,{strokesArray:u}=e,{audioDownloadURL:i}=e,{backgroundImageDownloadURL:g}=e,l=!1,h,c,m,_,a,T,R,V;ve(()=>{t(14,a=m.getContext("2d")),t(15,T=_.getContext("2d"))}),rt(()=>{V&&clearTimeout(V)});function w(){for(const I of u)re(I,null,a,m);const k=[];for(let I=0;I<u.length;I++)for(let C=1;C<u[I].points.length;C++){const p={strokeIndex:I,pointIndex:C};k.push(ae({startTime:d(p)},p))}t(13,h=k.sort((I,C)=>I.startTime-C.startTime))}function P(){t(7,R.playbackRate=xe,R),R.play()}function d({strokeIndex:k,pointIndex:I}){const C=u[k];return C.startTime+(I-1)*St(C)}function S(){t(6,l=!0),c=0,a.clearRect(0,0,n,o),A()}function A(){if(!!R&&(D(),c<h.length)){const k=h[c],I=1e3*(k.startTime-R.currentTime);t(8,V=setTimeout(A,I/xe))}}function D(){if(!R)return;const k=h[c];(!k||k.startTime>R.currentTime)&&(a.clearRect(0,0,m.width,m.height),c=0),B()}function B(){const{currentTime:k}=R;for(let I=c;I<h.length;I++){const C=h[I];if(C.startTime>k)break;j(C),c+=1}}function j({strokeIndex:k,pointIndex:I}){const C=u[k],L=C.lineWidth*(m.scrollWidth/1e3);Ve(C.points,I,C.isErasing,a,C.color,L,m)}function Y(){return new Promise(async k=>{if(V)c=0,D();else for(const I of u)re(I,null,a,m);k()})}function be(k){te[k?"unshift":"push"](()=>{m=k,t(2,m),t(14,a),t(5,n),t(4,o),t(0,u)})}function ye(k){te[k?"unshift":"push"](()=>{_=k,t(3,_),t(14,a),t(5,n),t(4,o),t(0,u)})}function ie(k){te[k?"unshift":"push"](()=>{R=k,t(7,R)})}return s.$$set=k=>{"strokesArray"in k&&t(0,u=k.strokesArray),"audioDownloadURL"in k&&t(1,i=k.audioDownloadURL),"backgroundImageDownloadURL"in k&&t(12,g=k.backgroundImageDownloadURL),"$$scope"in k&&t(16,f=k.$$scope)},s.$$.update=()=>{s.$$.dirty&16433&&a&&(t(2,m.width=n,m),t(2,m.height=o,m),t(3,_.width=n,_),t(3,_.height=o,_),u&&Y()),s.$$.dirty&24577&&a&&u&&!h&&w(),s.$$.dirty&36876&&T&&(T.clearRect(0,0,_.scrollWidth,_.scrollHeight),Ce(g,m,T))},[u,i,m,_,o,n,l,R,V,P,S,D,g,h,a,T,f,r,be,ye,ie]}class Yt extends Z{constructor(e){super();$(this,e,Et,Pt,ee,{strokesArray:0,audioDownloadURL:1,backgroundImageDownloadURL:12})}}const It=s=>({currentTime:s&1}),Oe=s=>({startRecording:s[1],stopRecording:s[2],currentTime:s[0]});function Lt(s){let e;const t=s[4].default,o=G(t,s,s[3],Oe);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,[r]){o&&o.p&&(!e||r&9)&&K(o,t,n,n[3],e?Q(t,n[3],r,It):J(n[3]),Oe)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function zt(s,e,t){let o;X(s,Le,m=>t(8,o=m));let{$$slots:n={},$$scope:r}=e,f,u=0,i;ve(async()=>{window&&(f=await pt(()=>import("./index-f195c495.js"),[]),window.MediaRecorder=f.default)});const g=ke();let l=null;function h(){return new Promise(async m=>{if(!o){const a=await navigator.mediaDevices.getUserMedia({audio:!0});Le.set(a)}const _=o.clone();l=new MediaRecorder(_),l.start(),i=setInterval(()=>t(0,u+=.1),100),g("record-start"),ze.set("mid_record"),m()})}function c(){return new Promise((m,_)=>{clearTimeout(i),ze.set("post_record"),l.addEventListener("dataavailable",a=>{const T=a.data;g("record-end",{audioBlob:T}),m()}),l.stop();for(const a of l.stream.getTracks())a.stop()})}return s.$$set=m=>{"$$scope"in m&&t(3,r=m.$$scope)},[u,h,c,r,n]}class Gt extends Z{constructor(e){super();$(this,e,zt,Lt,ee,{})}}const Ct=s=>({boardDoc:s&1}),qe=s=>({boardDoc:s[0]});function Vt(s){let e;const t=s[3].default,o=G(t,s,s[2],qe);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,[r]){o&&o.p&&(!e||r&5)&&K(o,t,n,n[2],e?Q(t,n[2],r,Ct):J(n[2]),qe)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function Ft(s,e,t){let{$$slots:o={},$$scope:n}=e,{dbPath:r}=e,f;const u=Se(le(),r);return lt(u,i=>{t(0,f=ae({id:i.id},i.data()))}),s.$$set=i=>{"dbPath"in i&&t(1,r=i.dbPath),"$$scope"in i&&t(2,n=i.$$scope)},[f,r,n,o]}class Kt extends Z{constructor(e){super();$(this,e,Ft,Vt,ee,{dbPath:1})}}function Nt(s){let e,t,o,n;return{c(){e=F("div"),t=F("textarea"),this.h()},l(r){e=N(r,"DIV",{class:!0,style:!0});var f=z(e);t=N(f,"TEXTAREA",{style:!0,class:!0}),z(t).forEach(v),f.forEach(v),this.h()},h(){t.value=s[0],b(t,"box-sizing","border-box"),b(t,"width",s[2]+"px"),b(t,"padding","6px"),b(t,"border-radius","2px"),b(t,"font-family","Roboto, sans-serif"),b(t,"color","rgb(60 55 56 / 87%)"),y(t,"class","svelte-tv3wak"),y(e,"class","grow-wrap svelte-tv3wak"),b(e,"font-family","Roboto, sans-serif"),b(e,"margin","10px 0px")},m(r,f){U(r,e,f),E(e,t),s[6](e),o||(n=[H(t,"input",s[5]),it(s[4].call(null,e))],o=!0)},p(r,[f]){f&1&&(t.value=r[0]),f&4&&b(t,"width",r[2]+"px")},i:Te,o:Te,d(r){r&&v(e),s[6](null),o=!1,ge(n)}}}function Ut(s,e,t){let o;X(s,Re,l=>t(2,o=l));let{value:n}=e,r;const f=ke();function u(l){l.dataset.replicatedValue=n}const i=l=>{t(1,r.dataset.replicatedValue=l.target.value,r),f("input",l.target.value)};function g(l){te[l?"unshift":"push"](()=>{r=l,t(1,r)})}return s.$$set=l=>{"value"in l&&t(0,n=l.value)},[n,r,o,f,u,i,g]}class Jt extends Z{constructor(e){super();$(this,e,Ut,Nt,ee,{value:0})}}const Wt=s=>({strokesArray:s&1}),He=s=>({fetchStrokes:s[1],strokesArray:s[0],deleteAllStrokesFromDb:s[2]});function Mt(s){let e;const t=s[6].default,o=G(t,s,s[5],He);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,r){o&&o.m(n,r),e=!0},p(n,[r]){o&&o.p&&(!e||r&33)&&K(o,t,n,n[5],e?Q(t,n[5],r,Wt):J(n[5]),He)},i(n){e||(W(o,n),e=!0)},o(n){M(o,n),e=!1},d(n){o&&o.d(n)}}}function Bt(s,e,t){let{$$slots:o={},$$scope:n}=e,{dbPath:r}=e,{autoFetchStrokes:f=!1}=e,u;const i=at(le(),`${r}/strokes`),g=ut(i,ct("timestamp"));f&&l();async function l(){const c=await ft(g),m=[];for(const _ of c.docs)m.push(ae({id:_.id},_.data()));t(0,u=m)}async function h(){return new Promise(async c=>{const m=[];let _=Ee(le()),a=0;for(const T of u){a>=500&&(m.push(_.commit()),_=Ee(le()),a=0);const R=Se(le(),`${r}/strokes/${T.id}`);_.delete(R),a+=1}m.push(_.commit()),await Promise.all(m),t(0,u=[]),c()})}return s.$$set=c=>{"dbPath"in c&&t(3,r=c.dbPath),"autoFetchStrokes"in c&&t(4,f=c.autoFetchStrokes),"$$scope"in c&&t(5,n=c.$$scope)},[u,l,h,r,f,n,o]}class Qt extends Z{constructor(e){super();$(this,e,Bt,Mt,ee,{dbPath:3,autoFetchStrokes:4})}}export{Xt as B,Yt as D,Kt as R,Jt as T,Qt as a,Gt as b};
