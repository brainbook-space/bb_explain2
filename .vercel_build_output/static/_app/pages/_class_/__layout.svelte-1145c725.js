var bt=Object.defineProperty;var je=Object.getOwnPropertySymbols;var $t=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var Ne=(l,e,s)=>e in l?bt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s,ve=(l,e)=>{for(var s in e||(e={}))$t.call(e,s)&&Ne(l,s,e[s]);if(je)for(var s of je(e))vt.call(e,s)&&Ne(l,s,e[s]);return l};import{S as de,i as me,s as ae,ad as kt,ae as ze,a2 as he,af as Le,e as E,t as M,k as j,j as F,c as C,a as S,g as N,d as _,n as z,m as q,b as A,M as d,f as w,N as $,o as B,a4 as ie,h as ce,ag as Ue,x as b,u as k,v as H,F as W,A as we,a9 as ke,Q as Z,ac as Fe,P as te,_ as pe,ah as Dt,ai as Ee,aj as yt,V as It,l as Q,r as Y,w as G,ak as wt,al as qe,am as Et,O as X,a5 as Ct,a6 as Ot,H as Rt,an as St,ao as Tt,ap as Vt,aq as At,W as Pt,I as Ce,J as Oe,K as Re,L as Se,Z as Te,ar as Be,as as He,at as Je,au as Mt,av as jt,T as Ve,aw as Nt,ax as fe,R as Qe,a7 as Ke,aa as zt,ab as Lt,ay as Ut,az as Ft,aA as qt,aB as Bt,aC as Ht,aD as We,aE as Ye,aF as Ge,aG as Ze,aH as De,aI as Jt,aJ as Qt,aK as Kt}from"../../chunks/vendor-3cd1c581.js";import{u as _e,b as Ae,i as Pe,r as le,g as Xe,d as ge,e as Me,w as xe,a as Wt,c as Yt}from"../../chunks/store-d69d6870.js";import{g as be}from"../../chunks/navigation-51f4a605.js";import{b as Gt}from"../../chunks/canvas-fe9cb9fb.js";import"../../chunks/singletons-12a22614.js";function et(l,e,s){const t=l.slice();return t[18]=e[s],t}function Zt(l){let e;return{c(){e=M("arrow_drop_down")},l(s){e=N(s,"arrow_drop_down")},m(s,t){w(s,e,t)},d(s){s&&_(e)}}}function tt(l){let e,s,t=l[7].enrolledClasses,n=[];for(let r=0;r<t.length;r+=1)n[r]=nt(et(l,t,r));const o=r=>k(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Q()},l(r){for(let i=0;i<n.length;i+=1)n[i].l(r);e=Q()},m(r,i){for(let f=0;f<n.length;f+=1)n[f].m(r,i);w(r,e,i),s=!0},p(r,i){if(i&641){t=r[7].enrolledClasses;let f;for(f=0;f<t.length;f+=1){const c=et(r,t,f);n[f]?(n[f].p(c,i),b(n[f],1)):(n[f]=nt(c),n[f].c(),b(n[f],1),n[f].m(e.parentNode,e))}for(Y(),f=t.length;f<n.length;f+=1)o(f);G()}},i(r){if(!s){for(let i=0;i<t.length;i+=1)b(n[i]);s=!0}},o(r){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)k(n[i]);s=!1},d(r){wt(n,r),r&&_(e)}}}function st(l){let e,s;function t(){return l[10](l[18])}return e=new qe({props:{$$slots:{default:[Xt]},$$scope:{ctx:l}}}),e.$on("SMUI:action",t),{c(){F(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,o){B(e,n,o),s=!0},p(n,o){l=n;const r={};o&2097280&&(r.$$scope={dirty:o,ctx:l}),e.$set(r)},i(n){s||(b(e.$$.fragment,n),s=!0)},o(n){k(e.$$.fragment,n),s=!1},d(n){H(e,n)}}}function Xt(l){let e,s=l[18].name+"",t,n,o=l[18].description+"",r,i,f;return{c(){e=E("div"),t=M(s),n=M(" ("),r=M(o),i=M(")"),f=j(),this.h()},l(c){e=C(c,"DIV",{class:!0});var a=S(e);t=N(a,s),n=N(a," ("),r=N(a,o),i=N(a,")"),a.forEach(_),f=z(c),this.h()},h(){A(e,"class","my-truncated-text")},m(c,a){w(c,e,a),$(e,t),$(e,n),$(e,r),$(e,i),w(c,f,a)},p(c,a){a&128&&s!==(s=c[18].name+"")&&ce(t,s),a&128&&o!==(o=c[18].description+"")&&ce(r,o)},d(c){c&&_(e),c&&_(f)}}}function nt(l){let e,s,t=l[18].name!==l[0]&&st(l);return{c(){t&&t.c(),e=Q()},l(n){t&&t.l(n),e=Q()},m(n,o){t&&t.m(n,o),w(n,e,o),s=!0},p(n,o){n[18].name!==n[0]?t?(t.p(n,o),o&129&&b(t,1)):(t=st(n),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(Y(),k(t,1,1,()=>{t=null}),G())},i(n){s||(b(t),s=!0)},o(n){k(t),s=!1},d(n){t&&t.d(n),n&&_(e)}}}function lt(l){let e,s,t;function n(r){l[11](r)}let o={options:l[6],getOptionLabel:ss,textfield$variant:"outlined",label:"Search class",menu$style:"max-height: 226px;"};return l[3]!==void 0&&(o.value=l[3]),e=new Et({props:o}),he.push(()=>Le(e,"value",n)),e.$on("SMUIAutocomplete:",l[12]),{c(){F(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,i){B(e,r,i),t=!0},p(r,i){const f={};i&64&&(f.options=r[6]),!s&&i&8&&(s=!0,f.value=r[3],Ue(()=>s=!1)),e.$set(f)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){H(e,r)}}}function xt(l){let e,s,t,n=l[7].enrolledClasses&&tt(l),o=l[2].length>0&&lt(l);return{c(){n&&n.c(),e=j(),s=E("div"),o&&o.c(),this.h()},l(r){n&&n.l(r),e=z(r),s=C(r,"DIV",{style:!0});var i=S(s);o&&o.l(i),i.forEach(_),this.h()},h(){d(s,"margin-left","12px"),d(s,"margin-bottom","4px"),d(s,"margin-top","16px")},m(r,i){n&&n.m(r,i),w(r,e,i),w(r,s,i),o&&o.m(s,null),t=!0},p(r,i){r[7].enrolledClasses?n?(n.p(r,i),i&128&&b(n,1)):(n=tt(r),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(Y(),k(n,1,1,()=>{n=null}),G()),r[2].length>0?o?(o.p(r,i),i&4&&b(o,1)):(o=lt(r),o.c(),b(o,1),o.m(s,null)):o&&(Y(),k(o,1,1,()=>{o=null}),G())},i(r){t||(b(n),b(o),t=!0)},o(r){k(n),k(o),t=!1},d(r){n&&n.d(r),r&&_(e),r&&_(s),o&&o.d()}}}function es(l){let e,s;return e=new Ee({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n&2097357&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function ts(l){let e,s,t,n,o,r,i,f,c,a,u,m,v,D,g,O;a=new kt({props:{class:"material-icons",$$slots:{default:[Zt]},$$scope:{ctx:l}}});function P(h){l[14](h)}let T={anchor:!1,anchorCorner:"BOTTOM_LEFT",style:"left: 70px; top: 5px; width: 240px; overflow: visible;",$$slots:{default:[es]},$$scope:{ctx:l}};return l[4]!==void 0&&(T.anchorElement=l[4]),m=new ze({props:T}),l[13](m),he.push(()=>Le(m,"anchorElement",P)),{c(){e=E("div"),s=E("div"),t=E("div"),n=E("h1"),o=M(l[0]),r=j(),i=E("div"),f=M(l[1]),c=j(),F(a.$$.fragment),u=j(),F(m.$$.fragment),this.h()},l(h){e=C(h,"DIV",{});var p=S(e);s=C(p,"DIV",{style:!0});var R=S(s);t=C(R,"DIV",{});var V=S(t);n=C(V,"H1",{class:!0,style:!0});var I=S(n);o=N(I,l[0]),I.forEach(_),r=z(V),i=C(V,"DIV",{class:!0,style:!0});var U=S(i);f=N(U,l[1]),U.forEach(_),V.forEach(_),c=z(R),q(a.$$.fragment,R),R.forEach(_),u=z(p),q(m.$$.fragment,p),p.forEach(_),this.h()},h(){A(n,"class","my-truncated-text"),d(n,"width","150px"),d(n,"font-family","Roboto, sans-serif"),d(n,"font-weight","400"),d(n,"margin-left","6px"),d(n,"margin-top","5px"),d(n,"margin-bottom","0px"),d(n,"font-size","2.0rem"),A(i,"class","my-truncated-text"),d(i,"width","150px"),d(i,"font-family","Roboto, sans-serif"),d(i,"font-size","0.875rem"),d(i,"color","rgba(0,0,0,.6)"),d(i,"margin-left",6+2+"px"),d(i,"margin-bottom","12px"),d(s,"display","flex"),d(s,"align-items","center")},m(h,p){w(h,e,p),$(e,s),$(s,t),$(t,n),$(n,o),$(t,r),$(t,i),$(i,f),$(s,c),B(a,s,null),$(e,u),B(m,e,null),l[15](e),D=!0,g||(O=ie(s,"click",l[8]),g=!0)},p(h,[p]){(!D||p&1)&&ce(o,h[0]),(!D||p&2)&&ce(f,h[1]);const R={};p&2097152&&(R.$$scope={dirty:p,ctx:h}),a.$set(R);const V={};p&2097357&&(V.$$scope={dirty:p,ctx:h}),!v&&p&16&&(v=!0,V.anchorElement=h[4],Ue(()=>v=!1)),m.$set(V)},i(h){D||(b(a.$$.fragment,h),b(m.$$.fragment,h),D=!0)},o(h){k(a.$$.fragment,h),k(m.$$.fragment,h),D=!1},d(h){h&&_(e),H(a),l[13](null),H(m),l[15](null),g=!1,O()}}}const ss=l=>l?`${l.name} (${l.description})`:"";function ns(l,e,s){let t,n;W(l,_e,p=>s(7,n=p));let{nameOfClass:o}=e,{descriptionOfClass:r}=e,i,f=[],c="",a;we(async()=>{const p=ke(Z(),"/classes"),R=await Fe(p),V=[];R.forEach(I=>{V.push(ve({id:I.id},I.data()))}),s(2,f=[...V])});function u(){a.setOpen(!0)}async function m({mitClass:p}){console.log("join mitClass =",p);for(const V of n.enrolledClasses)if(V.id===p.id){alert(`You are already in ${p.name}`);return}const R=Z();pe(te(R,`users/${n.uid}`),{enrolledClasses:yt(p),mostRecentClassID:p.id}),pe(te(R,`classes/${p.id}`),{numOfMembers:It(1)}),s(3,c=""),be(`/${p.id}/${p.id}`)}async function v(p){const R=Z(),V=te(R,`users/${n.uid}`);pe(V,{mostRecentClassID:p.id}),be(`/${p.id}/${p.id}`)}const D=p=>v(p);function g(p){c=p,s(3,c)}function O(p){Dt.call(this,l,p)}function P(p){he[p?"unshift":"push"](()=>{a=p,s(5,a)})}function T(p){i=p,s(4,i)}function h(p){he[p?"unshift":"push"](()=>{i=p,s(4,i)})}return l.$$set=p=>{"nameOfClass"in p&&s(0,o=p.nameOfClass),"descriptionOfClass"in p&&s(1,r=p.descriptionOfClass)},l.$$.update=()=>{l.$$.dirty&8&&c&&m({mitClass:c}),l.$$.dirty&4&&s(6,t=f)},[o,r,f,c,i,a,t,n,u,v,D,g,O,P,T,h]}class ls extends de{constructor(e){super();me(this,e,ns,ts,ae,{nameOfClass:0,descriptionOfClass:1})}}function os(l){let e,s,t,n,o,r,i,f,c,a,u,m,v,D,g,O;return{c(){e=E("div"),s=E("div"),t=E("h2"),n=M("App Settings"),o=j(),r=E("span"),i=M("close"),f=j(),c=E("div"),a=M("TODO: notifications and name"),u=j(),m=E("div"),v=E("button"),D=M("Logout"),this.h()},l(P){e=C(P,"DIV",{id:!0,class:!0});var T=S(e);s=C(T,"DIV",{style:!0});var h=S(s);t=C(h,"H2",{});var p=S(t);n=N(p,"App Settings"),p.forEach(_),o=z(h),r=C(h,"SPAN",{class:!0,style:!0});var R=S(r);i=N(R,"close"),R.forEach(_),h.forEach(_),f=z(T),c=C(T,"DIV",{style:!0});var V=S(c);a=N(V,"TODO: notifications and name"),V.forEach(_),u=z(T),m=C(T,"DIV",{style:!0});var I=S(m);v=C(I,"BUTTON",{style:!0});var U=S(v);D=N(U,"Logout"),U.forEach(_),I.forEach(_),T.forEach(_),this.h()},h(){A(r,"class","material-icons"),d(r,"margin-right","0"),d(r,"margin-left","auto"),d(s,"display","flex"),d(s,"align-items","center"),d(s,"margin-left","10px"),d(s,"margin-right","10px"),d(c,"margin-left","10px"),d(v,"margin-right","16px"),d(v,"margin-left","auto"),d(m,"display","flex"),d(m,"margin-left","4px"),d(m,"margin-bottom","0px"),d(m,"margin-top","auto"),A(e,"id","app-popup"),A(e,"class","svelte-1ptar6u")},m(P,T){w(P,e,T),$(e,s),$(s,t),$(t,n),$(s,o),$(s,r),$(r,i),$(e,f),$(e,c),$(c,a),$(e,u),$(e,m),$(m,v),$(v,D),g||(O=[ie(r,"click",l[2]),ie(v,"click",l[1])],g=!0)},p:X,i:X,o:X,d(P){P&&_(e),g=!1,Ct(O)}}}function rs(l,e,s){let t;W(l,_e,i=>s(3,t=i));const n=Ot();function o(){if(t.uid){const i=Rt();St(i)}be("/")}return[n,o,()=>n("popup-close")]}class as extends de{constructor(e){super();me(this,e,rs,os,ae,{})}}function ot(l){let e,s;return e=new as({}),e.$on("popup-close",l[6]),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p:X,i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function is(l){let e,s,t,n,o;return{c(){e=E("div"),s=M(l[0]),t=j(),n=E("div"),o=M(l[1]),this.h()},l(r){e=C(r,"DIV",{style:!0,class:!0});var i=S(e);s=N(i,l[0]),i.forEach(_),t=z(r),n=C(r,"DIV",{style:!0,class:!0});var f=S(n);o=N(f,l[1]),f.forEach(_),this.h()},h(){d(e,"font-family","Roboto, sans-serif"),d(e,"font-weight","400"),d(e,"margin-left","6px"),d(e,"margin-top","5px"),d(e,"margin-bottom","0px"),d(e,"font-size","2.0rem"),A(e,"class","svelte-ek1cfd"),d(n,"font-family","Roboto,sans-serif"),d(n,"font-size","0.875rem"),d(n,"color","rgba(0,0,0,.6)"),d(n,"margin-left","8px"),d(n,"margin-bottom","12px"),A(n,"class","svelte-ek1cfd")},m(r,i){w(r,e,i),$(e,s),w(r,t,i),w(r,n,i),$(n,o)},p(r,i){i&1&&ce(s,r[0]),i&2&&ce(o,r[1])},i:X,o:X,d(r){r&&_(e),r&&_(t),r&&_(n)}}}function cs(l){let e=l[0],s,t,n=rt(l);return{c(){n.c(),s=Q()},l(o){n.l(o),s=Q()},m(o,r){n.m(o,r),w(o,s,r),t=!0},p(o,r){r&1&&ae(e,e=o[0])?(Y(),k(n,1,1,X),G(),n=rt(o),n.c(),b(n),n.m(s.parentNode,s)):n.p(o,r)},i(o){t||(b(n),t=!0)},o(o){k(n),t=!1},d(o){o&&_(s),n.d(o)}}}function rt(l){let e,s;return e=new ls({props:{nameOfClass:l[0],descriptionOfClass:l[1]}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n&1&&(o.nameOfClass=t[0]),n&2&&(o.descriptionOfClass=t[1]),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function fs(l){let e;const s=l[4].default,t=Ce(s,l,l[7],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&128)&&Oe(t,s,n,n[7],e?Se(s,n[7],o,null):Re(n[7]),null)},i(n){e||(b(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function us(l){let e,s,t,n,o,r,i,f,c,a,u,m,v,D,g=l[2]&&ot(l);const O=[cs,is],P=[];function T(h,p){return h[3].uid?0:1}return f=T(l),c=P[f]=O[f](l),u=new Ee({props:{$$slots:{default:[fs]},$$scope:{ctx:l}}}),{c(){e=E("div"),s=E("div"),t=E("img"),o=j(),g&&g.c(),r=j(),i=E("div"),c.c(),a=j(),F(u.$$.fragment),this.h()},l(h){e=C(h,"DIV",{style:!0,class:!0});var p=S(e);s=C(p,"DIV",{style:!0,class:!0});var R=S(s);t=C(R,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),o=z(R),g&&g.l(R),r=z(R),i=C(R,"DIV",{class:!0});var V=S(i);c.l(V),V.forEach(_),R.forEach(_),p.forEach(_),a=z(h),q(u.$$.fragment,h),this.h()},h(){Pt(t.src,n="/logo.png")||A(t,"src",n),A(t,"width","60"),A(t,"height","54"),A(t,"alt","web-logo"),A(t,"class","logo-image svelte-ek1cfd"),A(i,"class","svelte-ek1cfd"),d(s,"display","flex"),d(s,"align-items","center"),A(s,"class","svelte-ek1cfd"),d(e,"margin-bottom","12px"),d(e,"padding-top","2px"),d(e,"padding-bottom","0"),d(e,"padding-left","8px"),A(e,"class","mdc-elevation--z"+4+" svelte-ek1cfd")},m(h,p){w(h,e,p),$(e,s),$(s,t),$(s,o),g&&g.m(s,null),$(s,r),$(s,i),P[f].m(i,null),w(h,a,p),B(u,h,p),m=!0,v||(D=ie(t,"click",l[5]),v=!0)},p(h,p){h[2]?g?(g.p(h,p),p&4&&b(g,1)):(g=ot(h),g.c(),b(g,1),g.m(s,r)):g&&(Y(),k(g,1,1,()=>{g=null}),G());let R=f;f=T(h),f===R?P[f].p(h,p):(Y(),k(P[R],1,1,()=>{P[R]=null}),G(),c=P[f],c?c.p(h,p):(c=P[f]=O[f](h),c.c()),b(c,1),c.m(i,null));const V={};p&128&&(V.$$scope={dirty:p,ctx:h}),u.$set(V)},i(h){m||(b(g),b(c),b(u.$$.fragment,h),m=!0)},o(h){k(g),k(c),k(u.$$.fragment,h),m=!1},d(h){h&&_(e),g&&g.d(),P[f].d(),h&&_(a),H(u,h),v=!1,D()}}}function ds(l){let e,s;return e=new At({props:{$$slots:{default:[us]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n&143&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function ms(l){let e;return{c(){e=E("main"),this.h()},l(s){e=C(s,"MAIN",{class:!0,id:!0,style:!0});var t=S(e);t.forEach(_),this.h()},h(){A(e,"class","main-content svelte-ek1cfd"),A(e,"id","main-content"),d(e,"padding","0")},m(s,t){w(s,e,t)},d(s){s&&_(e)}}}function ps(l){let e,s,t,n,o;return s=new Tt({props:{style:"overflow-y: scroll; height: 100%;",class:"mdc-elevation--z"+5,$$slots:{default:[ds]},$$scope:{ctx:l}}}),n=new Vt({props:{class:"app-content",$$slots:{default:[ms]},$$scope:{ctx:l}}}),{c(){e=E("div"),F(s.$$.fragment),t=j(),F(n.$$.fragment),this.h()},l(r){e=C(r,"DIV",{class:!0});var i=S(e);q(s.$$.fragment,i),t=z(i),q(n.$$.fragment,i),i.forEach(_),this.h()},h(){A(e,"class","drawer-container svelte-ek1cfd")},m(r,i){w(r,e,i),B(s,e,null),$(e,t),B(n,e,null),o=!0},p(r,[i]){const f={};i&143&&(f.$$scope={dirty:i,ctx:r}),s.$set(f);const c={};i&128&&(c.$$scope={dirty:i,ctx:r}),n.$set(c)},i(r){o||(b(s.$$.fragment,r),b(n.$$.fragment,r),o=!0)},o(r){k(s.$$.fragment,r),k(n.$$.fragment,r),o=!1},d(r){r&&_(e),H(s),H(n)}}}function _s(l,e,s){let t;W(l,_e,u=>s(3,t=u));let{$$slots:n={},$$scope:o}=e,{nameOfClass:r}=e,{descriptionOfClass:i}=e,f=!1;const c=()=>s(2,f=!0),a=()=>s(2,f=!1);return l.$$set=u=>{"nameOfClass"in u&&s(0,r=u.nameOfClass),"descriptionOfClass"in u&&s(1,i=u.descriptionOfClass),"$$scope"in u&&s(7,o=u.$$scope)},[r,i,f,t,n,c,a,o]}class hs extends de{constructor(e){super();me(this,e,_s,ps,ae,{nameOfClass:0,descriptionOfClass:1})}}function gs(l,e,s){let t,n,o,r;W(l,Ae,D=>s(10,n=D)),W(l,_e,D=>s(3,o=D)),W(l,Pe,D=>s(4,r=D));let{classID:i}=e,{roomID:f}=e,c,a,u,m,v;return Te(()=>{v&&v(),r&&(Be(a),Pe.set(!1)),m&&m.cancel()}),we(()=>{le.set({}),u=He(Je(),".info/connected"),v=Mt(u,async D=>{if(D.val()===!0){const g=Xe();c=He(Je(),`/class/${i}/room/${f}/participants/${g}`),m=jt(c),m.set({hasDisconnected:!0,userUID:o.uid}),s(2,a=te(Z(),`classes/${i}/participants/${g}`)),Ve(a,{uid:o.uid,browserTabID:n,currentRoomID:f,name:t}),Pe.set(!0)}})}),l.$$set=D=>{"classID"in D&&s(0,i=D.classID),"roomID"in D&&s(1,f=D.roomID)},l.$$.update=()=>{l.$$.dirty&8&&(t=o.name?o.name:"Beaver #"),l.$$.dirty&30&&r&&o.name&&pe(a,{currentRoomID:f,name:o.name})},[i,f,a,o,r]}class bs extends de{constructor(e){super();me(this,e,gs,null,ae,{classID:0,roomID:1})}}const $s="0ac8a98cf9bef2827f5beef5cd36c4f42a442863ce904a2469de12caa9097fa1",vs=l=>({activeSpeakerID:l&2,firestoreIDToDailyID:l&1}),at=l=>({toggleMic:l[2],activeSpeakerID:l[1],firestoreIDToDailyID:l[0]});function ks(l){let e;const s=l[9].default,t=Ce(s,l,l[8],at);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,[o]){t&&t.p&&(!e||o&259)&&Oe(t,s,n,n[8],e?Se(s,n[8],o,vs):Re(n[8]),at)},i(n){e||(b(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}async function Ds({track:l,participant:e}){switch(l.kind){case"audio":if(e.local)return;{const s=document.createElement("audio");s.srcObject=new MediaStream([l]),s.setAttribute("id","audio"+e.user_id),s.setAttribute("playsinline",!0),s.setAttribute("autoplay",!0),document.getElementById("container-for-audio-elements").appendChild(s)}break}}async function ys({track:l,participant:e}){const s=document.getElementById(l.id);s&&(s.srcObject=null,s.remove())}function Is(l,e,s){let t,n,o,r;W(l,ge,I=>s(11,t=I)),W(l,Ae,I=>s(12,n=I)),W(l,Me,I=>s(13,o=I)),W(l,_e,I=>s(7,r=I));let{$$slots:i={},$$scope:f}=e,{roomID:c}=e,a,u,m,v,D,g="";Te(()=>{v==="connected"&&R(),o&&(o.getAudioTracks().forEach(I=>{I.stop()}),Me.set(null))});async function O(){return new Promise(async(I,U)=>{if(!o)try{const x=await navigator.mediaDevices.getUserMedia({audio:!0});Me.set(x)}catch{return alert(`Don't forget to enable your your mic! Click the "aA" / "i" button beside the URL bar "https://explain.mit.edu", then click "website settings" / "microphone"`),U("Can't access mic stream")}const[ue]=o.getAudioTracks();a=Nt.createCallObject({audioSource:ue,videoSource:!1});const se=["participant-joined","participant-updated","participant-left"];for(const x of se)a.on(x,()=>{ge.set(a.participants());const oe={};for(const ye of Object.keys(t)){const y=t[ye],J=y.user_name;J&&(oe[J]=y.user_id)}s(0,u=oe)});a.on("track-started",Ds),a.on("track-stopped",ys),a.on("active-speaker-change",({activeSpeaker:x})=>{s(1,g=x.peerId)}),a.on("load-attempt-failed",({action:x,errorMsg:oe})=>{alert(x+": "+oe)}),a.on("error",({action:x,errorMsg:oe})=>{alert(x+": "+oe)}),I()})}async function P(){s(4,m="not_connected"),s(5,v="connecting"),s(6,D=c);const{url:I}=await T();I&&(await h(I),s(4,m="connecting"),s(5,v="connected"))}function T(){return new Promise(async I=>{try{const U=2*60*60,se=await(await fetch("https://api.daily.co/v1/rooms",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+$s},body:JSON.stringify({name:c,properties:{exp:Math.round(Date.now()/1e3)+U,eject_at_room_exp:!0,start_video_off:!0}})})).json();se.error==="invalid-request-error"&&se.info===`a room named ${c} already exists`?I({url:`https://feynman.daily.co/${c}`}):I(se)}catch(U){console.error(U),alert(U),reject({url:""})}})}function h(I){return new Promise(async(U,ue)=>{try{await a.join({url:I,userName:n}),U()}catch(se){console.log("error)"),alert(se),ue()}})}function p(){a.setLocalAudio(!t.local.audio),ge.set(a.participants())}function R(){const I=document.querySelectorAll("audio");for(const U of I)U.remove();V(),s(4,m="connected"),s(5,v="not_connected")}function V(){a.leave(),ge.set({}),s(1,g="")}return l.$$set=I=>{"roomID"in I&&s(3,c=I.roomID),"$$scope"in I&&s(8,f=I.$$scope)},l.$$.update=()=>{if(l.$$.dirty&120&&D!==c&&v==="connected"&&m==="connecting"&&R(),l.$$.dirty&120&&D!==c&&v==="not_connected"&&m==="connected"&&P(),l.$$.dirty&128&&r.uid){async function I(){await O(),P()}I()}},[u,g,p,c,m,v,D,r,f,i]}class ws extends de{constructor(e){super();me(this,e,Is,ks,ae,{roomID:3})}}function it(l,e,s){const t=l.slice();return t[30]=e[s],t}function ct(l,e,s){const t=l.slice();return t[33]=e[s],t}function ft(l){let e=l[0],s,t,n=ut(l);return{c(){n.c(),s=Q()},l(o){n.l(o),s=Q()},m(o,r){n.m(o,r),w(o,s,r),t=!0},p(o,r){r[0]&1&&ae(e,e=o[0])?(Y(),k(n,1,1,X),G(),n=ut(o),n.c(),b(n),n.m(s.parentNode,s)):n.p(o,r)},i(o){t||(b(n),t=!0)},o(o){k(n),t=!1},d(o){o&&_(s),n.d(o)}}}function ut(l){let e,s;return e=new bs({props:{classID:l[0],roomID:l[1]}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n[0]&1&&(o.classID=t[0]),n[0]&2&&(o.roomID=t[1]),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Es(l){let e,s;return{c(){e=E("div"),s=M("(no title)"),this.h()},l(t){e=C(t,"DIV",{style:!0});var n=S(e);s=N(n,"(no title)"),n.forEach(_),this.h()},h(){d(e,"margin-bottom","2px")},m(t,n){w(t,e,n),$(e,s)},p:X,d(t){t&&_(e)}}}function Cs(l){let e,s=l[30].name+"",t;return{c(){e=E("div"),t=M(s),this.h()},l(n){e=C(n,"DIV",{class:!0,style:!0});var o=S(e);t=N(o,s),o.forEach(_),this.h()},h(){A(e,"class","my-truncated-text svelte-ms4my9"),d(e,"margin-bottom","2px"),De(e,"question-item",l[30].name.charAt(l[30].name.length-1)==="?"&&l[30].id!==l[1])},m(n,o){w(n,e,o),$(e,t)},p(n,o){o[0]&32&&s!==(s=n[30].name+"")&&ce(t,s),o[0]&34&&De(e,"question-item",n[30].name.charAt(n[30].name.length-1)==="?"&&n[30].id!==n[1])},d(n){n&&_(e)}}}function dt(l){let e,s,t,n,o,r,i,f={style:"width: 300px",$$slots:{default:[Ss]},$$scope:{ctx:l}};return n=new ze({props:f}),l[15](n),{c(){e=E("span"),s=M("more_vert"),t=j(),F(n.$$.fragment),this.h()},l(c){e=C(c,"SPAN",{class:!0,style:!0});var a=S(e);s=N(a,"more_vert"),a.forEach(_),t=z(c),q(n.$$.fragment,c),this.h()},h(){A(e,"class","material-icons"),d(e,"margin-right","0px"),d(e,"margin-left","auto"),d(e,"color","white"),d(e,"font-size","1.5rem")},m(c,a){w(c,e,a),$(e,s),w(c,t,a),B(n,c,a),o=!0,r||(i=ie(e,"click",function(){Ye(l[6].setOpen(!0))&&l[6].setOpen(!0).apply(this,arguments)}),r=!0)},p(c,a){l=c;const u={};a[0]&131104&&(u.$$scope={dirty:a,ctx:l}),n.$set(u)},i(c){o||(b(n.$$.fragment,c),o=!0)},o(c){k(n.$$.fragment,c),o=!1},d(c){c&&_(e),c&&_(t),l[15](null),H(n,c),r=!1,i()}}}function Os(l){let e;return{c(){e=M("Delete room")},l(s){e=N(s,"Delete room")},m(s,t){w(s,e,t)},d(s){s&&_(e)}}}function Rs(l){let e,s;function t(){return l[14](l[30])}return e=new qe({props:{$$slots:{default:[Os]},$$scope:{ctx:l}}}),e.$on("SMUI:action",t),{c(){F(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,o){B(e,n,o),s=!0},p(n,o){l=n;const r={};o[0]&131072&&(r.$$scope={dirty:o,ctx:l}),e.$set(r)},i(n){s||(b(e.$$.fragment,n),s=!0)},o(n){k(e.$$.fragment,n),s=!1},d(n){H(e,n)}}}function Ss(l){let e,s;return e=new Ee({props:{$$slots:{default:[Rs]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n[0]&131104&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function mt(l){let e=[],s=new Map,t,n,o=l[7][l[30].id];const r=i=>i[33].browserTabID;for(let i=0;i<o.length;i+=1){let f=ct(l,o,i),c=r(f);s.set(c,e[i]=_t(c,f))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=Q()},l(i){for(let f=0;f<e.length;f+=1)e[f].l(i);t=Q()},m(i,f){for(let c=0;c<e.length;c+=1)e[c].m(i,f);w(i,t,f),n=!0},p(i,f){f[0]&939525024&&(o=i[7][i[30].id],Y(),e=Ge(e,f,r,1,i,o,s,t.parentNode,Ze,_t,t,ct),G())},i(i){if(!n){for(let f=0;f<o.length;f+=1)b(e[f]);n=!0}},o(i){for(let f=0;f<e.length;f+=1)k(e[f]);n=!1},d(i){for(let f=0;f<e.length;f+=1)e[f].d(i);i&&_(t)}}}function pt(l){let e,s,t,n;const o=[Vs,Ts],r=[];function i(f,c){return f[33].browserTabID===f[9]?0:f[8][f[29][f[33].browserTabID]]?1:-1}return~(e=i(l))&&(s=r[e]=o[e](l)),{c(){s&&s.c(),t=Q()},l(f){s&&s.l(f),t=Q()},m(f,c){~e&&r[e].m(f,c),w(f,t,c),n=!0},p(f,c){let a=e;e=i(f),e===a?~e&&r[e].p(f,c):(s&&(Y(),k(r[a],1,1,()=>{r[a]=null}),G()),~e?(s=r[e],s?s.p(f,c):(s=r[e]=o[e](f),s.c()),b(s,1),s.m(t.parentNode,t)):s=null)},i(f){n||(b(s),n=!0)},o(f){k(s),n=!1},d(f){~e&&r[e].d(f),f&&_(t)}}}function Ts(l){let e;function s(o,r){return o[8][o[29][o[33].browserTabID]].audio?Ps:As}let t=s(l),n=t(l);return{c(){n.c(),e=Q()},l(o){n.l(o),e=Q()},m(o,r){n.m(o,r),w(o,e,r)},p(o,r){t===(t=s(o))&&n?n.p(o,r):(n.d(1),n=t(o),n&&(n.c(),n.m(e.parentNode,e)))},i:X,o:X,d(o){n.d(o),o&&_(e)}}}function Vs(l){let e,s,t,n,o,r,i;t=new Jt({props:{checked:l[8].local.audio,style:"margin: 0 !important"}});function f(u,m){return u[8].local.audio?js:Ms}let c=f(l),a=c(l);return{c(){e=E("div"),s=E("div"),F(t.$$.fragment),n=j(),a.c(),this.h()},l(u){e=C(u,"DIV",{style:!0});var m=S(e);s=C(m,"DIV",{style:!0});var v=S(s);q(t.$$.fragment,v),v.forEach(_),n=z(m),a.l(m),m.forEach(_),this.h()},h(){d(s,"padding-top","5px"),d(e,"display","flex"),d(e,"align-items","center"),d(e,"margin-right","6px"),d(e,"margin-left","auto")},m(u,m){w(u,e,m),$(e,s),B(t,s,null),$(e,n),a.m(e,null),o=!0,r||(i=ie(s,"click",Qt(Kt(function(){Ye(l[28])&&l[28].apply(this,arguments)}))),r=!0)},p(u,m){l=u;const v={};m[0]&256&&(v.checked=l[8].local.audio),t.$set(v),c!==(c=f(l))&&(a.d(1),a=c(l),a&&(a.c(),a.m(e,null)))},i(u){o||(b(t.$$.fragment,u),o=!0)},o(u){k(t.$$.fragment,u),o=!1},d(u){u&&_(e),H(t),a.d(),r=!1,i()}}}function As(l){let e,s;return{c(){e=E("span"),s=M("mic_off"),this.h()},l(t){e=C(t,"SPAN",{class:!0,style:!0});var n=S(e);s=N(n,"mic_off"),n.forEach(_),this.h()},h(){A(e,"class","material-icons"),d(e,"margin-right","0"),d(e,"margin-left","auto"),d(e,"font-size","1.1rem"),d(e,"color","red")},m(t,n){w(t,e,n),$(e,s)},p:X,d(t){t&&_(e)}}}function Ps(l){let e,s;return{c(){e=E("span"),s=M("mic"),this.h()},l(t){e=C(t,"SPAN",{class:!0,style:!0});var n=S(e);s=N(n,"mic"),n.forEach(_),this.h()},h(){A(e,"class","material-icons"),d(e,"margin-right","0"),d(e,"margin-left","auto"),d(e,"font-size","1.1rem"),d(e,"color",l[29]&&l[29][l[33].browserTabID]&&l[29][l[33].browserTabID]===l[27]?"white":"")},m(t,n){w(t,e,n),$(e,s)},p(t,n){n[0]&671088800&&d(e,"color",t[29]&&t[29][t[33].browserTabID]&&t[29][t[33].browserTabID]===t[27]?"white":"")},d(t){t&&_(e)}}}function Ms(l){let e,s;return{c(){e=E("div"),s=M("muted"),this.h()},l(t){e=C(t,"DIV",{style:!0});var n=S(e);s=N(n,"muted"),n.forEach(_),this.h()},h(){d(e,"font-size","0.7rem"),d(e,"margin-left","6px"),d(e,"color","red")},m(t,n){w(t,e,n),$(e,s)},d(t){t&&_(e)}}}function js(l){let e,s;return{c(){e=E("div"),s=M("voice on"),this.h()},l(t){e=C(t,"DIV",{style:!0});var n=S(e);s=N(n,"voice on"),n.forEach(_),this.h()},h(){d(e,"font-size","0.7rem"),d(e,"margin-left","6px"),d(e,"color","#33ff33")},m(t,n){w(t,e,n),$(e,s)},d(t){t&&_(e)}}}function _t(l,e){let s,t,n=e[33].name+"",o,r,i=Object.keys(e[8]).length>0,f,c,a=i&&pt(e);return{key:l,first:null,c(){s=E("div"),t=E("div"),o=M(n),r=j(),a&&a.c(),f=j(),this.h()},l(u){s=C(u,"DIV",{style:!0});var m=S(s);t=C(m,"DIV",{style:!0,class:!0});var v=S(t);o=N(v,n),v.forEach(_),r=z(m),a&&a.l(m),f=z(m),m.forEach(_),this.h()},h(){d(t,"font-size","0.7rem"),d(t,"margin-left","6px"),A(t,"class","svelte-ms4my9"),De(t,"speaking",e[29]&&e[29][e[33].browserTabID]&&e[29][e[33].browserTabID]===e[27]),d(s,"display","flex"),d(s,"align-items","center"),d(s,"padding-left","8px"),d(s,"padding-right","8px"),this.first=s},m(u,m){w(u,s,m),$(s,t),$(t,o),$(s,r),a&&a.m(s,null),$(s,f),c=!0},p(u,m){e=u,(!c||m[0]&160)&&n!==(n=e[33].name+"")&&ce(o,n),m[0]&671088800&&De(t,"speaking",e[29]&&e[29][e[33].browserTabID]&&e[29][e[33].browserTabID]===e[27]),m[0]&256&&(i=Object.keys(e[8]).length>0),i?a?(a.p(e,m),m[0]&256&&b(a,1)):(a=pt(e),a.c(),b(a,1),a.m(s,f)):a&&(Y(),k(a,1,1,()=>{a=null}),G())},i(u){c||(b(a),c=!0)},o(u){k(a),c=!1},d(u){u&&_(s),a&&a.d()}}}function ht(l,e){let s,t,n,o,r,i,f,c,a,u;function m(T,h){return T[30].name?Cs:Es}let v=m(e),D=v(e),g=e[30].id===e[1]&&e[2].uid&&dt(e),O=e[7][e[30].id]&&mt(e);function P(){return e[16](e[30])}return{key:l,first:null,c(){s=E("div"),t=E("div"),n=E("div"),D.c(),o=j(),g&&g.c(),r=j(),O&&O.c(),f=j(),this.h()},l(T){s=C(T,"DIV",{style:!0});var h=S(s);t=C(h,"DIV",{class:!0,style:!0});var p=S(t);n=C(p,"DIV",{style:!0});var R=S(n);D.l(R),o=z(R),g&&g.l(R),R.forEach(_),r=z(p),O&&O.l(p),p.forEach(_),f=z(h),h.forEach(_),this.h()},h(){d(n,"display","flex"),d(n,"align-items","center"),d(n,"padding-left","8px"),d(n,"padding-right","5px"),d(n,"padding-top","6px"),A(t,"class",i=""+(We(e[30].id===e[1]?"selected":"")+" svelte-ms4my9")),d(t,"padding-bottom","6px"),d(t,"opacity","90%"),d(t,"border-radius","5px"),d(s,"padding","6px"),this.first=s},m(T,h){w(T,s,h),$(s,t),$(t,n),D.m(n,null),$(n,o),g&&g.m(n,null),$(t,r),O&&O.m(t,null),$(s,f),c=!0,a||(u=ie(s,"click",P),a=!0)},p(T,h){e=T,v===(v=m(e))&&D?D.p(e,h):(D.d(1),D=v(e),D&&(D.c(),D.m(n,o))),e[30].id===e[1]&&e[2].uid?g?(g.p(e,h),h[0]&38&&b(g,1)):(g=dt(e),g.c(),b(g,1),g.m(n,null)):g&&(Y(),k(g,1,1,()=>{g=null}),G()),e[7][e[30].id]?O?(O.p(e,h),h[0]&160&&b(O,1)):(O=mt(e),O.c(),b(O,1),O.m(t,null)):O&&(Y(),k(O,1,1,()=>{O=null}),G()),(!c||h[0]&34&&i!==(i=""+(We(e[30].id===e[1]?"selected":"")+" svelte-ms4my9")))&&A(t,"class",i)},i(T){c||(b(g),b(O),c=!0)},o(T){k(g),k(O),c=!1},d(T){T&&_(s),D.d(),g&&g.d(),O&&O.d(),a=!1,u()}}}function gt(l){let e,s,t,n,o,r;return{c(){e=E("div"),s=E("span"),t=M("add"),n=M(`\r
        new room`),this.h()},l(i){e=C(i,"DIV",{style:!0});var f=S(e);s=C(f,"SPAN",{class:!0,style:!0});var c=S(s);t=N(c,"add"),c.forEach(_),n=N(f,`\r
        new room`),f.forEach(_),this.h()},h(){A(s,"class","material-icons"),d(s,"margin-left","6px"),d(s,"margin-right","5px"),d(s,"margin-top","2.5px"),d(s,"font-size","1.2rem"),d(e,"padding","6px"),d(e,"display","flex"),d(e,"align-items","center")},m(i,f){w(i,e,f),$(e,s),$(s,t),$(e,n),o||(r=ie(e,"click",l[11]),o=!0)},p:X,d(i){i&&_(e),o=!1,r()}}}function Ns(l){let e=[],s=new Map,t,n,o,r=l[5];const i=c=>c[30].id+c[1];for(let c=0;c<r.length;c+=1){let a=it(l,r,c),u=i(a);s.set(u,e[c]=ht(u,a))}let f=l[2].uid&&gt(l);return{c(){for(let c=0;c<e.length;c+=1)e[c].c();t=j(),f&&f.c(),n=Q()},l(c){for(let a=0;a<e.length;a+=1)e[a].l(c);t=z(c),f&&f.l(c),n=Q()},m(c,a){for(let u=0;u<e.length;u+=1)e[u].m(c,a);w(c,t,a),f&&f.m(c,a),w(c,n,a),o=!0},p(c,a){a[0]&939530214&&(r=c[5],Y(),e=Ge(e,a,i,1,c,r,s,t.parentNode,Ze,ht,t,it),G()),c[2].uid?f?f.p(c,a):(f=gt(c),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null)},i(c){if(!o){for(let a=0;a<r.length;a+=1)b(e[a]);o=!0}},o(c){for(let a=0;a<e.length;a+=1)k(e[a]);o=!1},d(c){for(let a=0;a<e.length;a+=1)e[a].d(c);c&&_(t),f&&f.d(c),c&&_(n)}}}function zs(l){let e,s;return e=new hs({props:{nameOfClass:l[3],descriptionOfClass:l[4],$$slots:{default:[Ns]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),s=!0},p(t,n){const o={};n[0]&8&&(o.nameOfClass=t[3]),n[0]&16&&(o.descriptionOfClass=t[4]),n[0]&939656166&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Ls(l){let e,s,t,n,o,r,i=l[2].uid&&ft(l);n=new ws({props:{roomID:l[1],$$slots:{default:[zs,({activeSpeakerID:a,toggleMic:u,firestoreIDToDailyID:m})=>({27:a,28:u,29:m}),({activeSpeakerID:a,toggleMic:u,firestoreIDToDailyID:m})=>[(a?134217728:0)|(u?268435456:0)|(m?536870912:0)]]},$$scope:{ctx:l}}});const f=l[13].default,c=Ce(f,l,l[17],null);return{c(){i&&i.c(),e=j(),s=E("div"),t=j(),F(n.$$.fragment),o=j(),c&&c.c(),this.h()},l(a){i&&i.l(a),e=z(a),s=C(a,"DIV",{id:!0});var u=S(s);u.forEach(_),t=z(a),q(n.$$.fragment,a),o=z(a),c&&c.l(a),this.h()},h(){A(s,"id","container-for-audio-elements")},m(a,u){i&&i.m(a,u),w(a,e,u),w(a,s,u),w(a,t,u),B(n,a,u),w(a,o,u),c&&c.m(a,u),r=!0},p(a,u){a[2].uid?i?(i.p(a,u),u[0]&4&&b(i,1)):(i=ft(a),i.c(),b(i,1),i.m(e.parentNode,e)):i&&(Y(),k(i,1,1,()=>{i=null}),G());const m={};u[0]&2&&(m.roomID=a[1]),u[0]&939656190&&(m.$$scope={dirty:u,ctx:a}),n.$set(m),c&&c.p&&(!r||u[0]&131072)&&Oe(c,f,a,a[17],r?Se(f,a[17],u,null):Re(a[17]),null)},i(a){r||(b(i),b(n.$$.fragment,a),b(c,a),r=!0)},o(a){k(i),k(n.$$.fragment,a),k(c,a),r=!1},d(a){i&&i.d(a),a&&_(e),a&&_(s),a&&_(t),H(n,a),a&&_(o),c&&c.d(a)}}}function Ks({page:l}){return{props:{classID:l.params.class,roomID:l.params.room}}}function Us(l,e,s){let t,n,o,r,i;W(l,le,y=>s(7,t=y)),W(l,xe,y=>s(19,n=y)),W(l,_e,y=>s(2,o=y)),W(l,ge,y=>s(8,r=y)),W(l,Ae,y=>s(9,i=y));let{$$slots:f={},$$scope:c}=e,{classID:a}=e,{roomID:u}=e;const m=`classes/${a}/`;let v=[],D="",g="",O=[],P;function T(){for(const y of v)y();v=[]}async function h(){const y=te(Z(),`classes/${a}`),J=await Qe(y);s(3,D=J.data().name),s(4,g=J.data().description)}we(async()=>{window.addEventListener("resize",I),I()}),Te(()=>{T(),window.removeEventListener("resize",I)});function p(y){n?window.confirm("You're still recording, are you sure you want to leave?")&&(xe.set(!1),be(`/${a}/${y}`)):be(`/${a}/${y}`)}async function R(){for(const K of O)if(K.name===""){alert("There is still an empty room available");return}const y=Xe(),J=te(Z(),m+`rooms/${y}`),ne=te(Z(),m+`blackboards/${y}`);await Promise.all([Ve(J,{name:"",blackboards:[y],date:new Date().toISOString()}),Ve(ne,{recordState:"pre_record"})])}function V(){const{height:y,width:J}=Gt();Wt.set(y),Yt.set(J)}function I(){setTimeout(V,100)}function U(){const y=ke(Z(),`classes/${a}/participants`);v.push(Ke(y,J=>{J.docChanges().forEach(ne=>{const K=ne.doc.data(),L=K.currentRoomID;switch(ne.type){case"added":t[L]||fe(le,t[L]=[],t),fe(le,t[L]=[...t[L],K],t);break;case"modified":for(const ee of Object.keys(t))for(const $e of t[ee])$e.browserTabID===K.browserTabID&&fe(le,t[ee]=t[ee].filter(re=>re.browserTabID!==K.browserTabID),t);t[L]||fe(le,t[L]=[],t),fe(le,t[L]=[...t[L],K],t);break;case"removed":fe(le,t[L]=t[L].filter(ee=>ee.browserTabID!==K.browserTabID),t);break}})}))}function ue(){const y=ke(Z(),`classes/${a}/rooms`),J=zt(y,Lt("date","asc"));v.push(Ke(J,async ne=>{const K=[];if(ne.forEach(L=>{K.push(ve({id:L.id,ref:L.ref.path},L.data()))}),s(5,O=K),O.length===0){const L=ke(Z(),`classes/${a}/rooms`),ee=[];(await Fe(L)).docs.forEach(re=>{ee.push(ve({id:re.id},re.data()))});for(const re of ee){const Ie=te(Z(),`classes/${a}/rooms/${re.id}`);pe(Ie,{date:Date.toISOString()})}}}))}async function se(y){const J=[];for(const K of y.blackboards)J.push(Qe(te(Z(),m+`blackboards/${K}`)));await Promise.all(J);const ne=[];for(const K of J){const L=await K;if(!L.exists())continue;const ee=L.data();if(ee.audioRefFullPath)try{ne.push(Ut(Ft(qt(),ee.audioRefFullPath)))}catch(Ie){console.alert(Ie)}const $e=Bt(),re=Ht($e,"recursiveDelete");ne.push(re({path:`/classes/${a}/blackboards/${L.id}`}).then(console.log(`Deleted blackboard /classes/${a}/blackboards/${L.id}`)))}await Promise.all(ne),await Be(te(Z(),m+`rooms/${y.id}`))}const x=y=>se(y);function oe(y){he[y?"unshift":"push"](()=>{P=y,s(6,P)})}const ye=y=>p(y.id);return l.$$set=y=>{"classID"in y&&s(0,a=y.classID),"roomID"in y&&s(1,u=y.roomID),"$$scope"in y&&s(17,c=y.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&1&&a&&(T(),fe(le,t=[],t),h(),U(),ue()),l.$$.dirty[0]&7&&u&&o.uid){const y=te(Z(),`users/${o.uid}`);pe(y,{mostRecentClassAndRoomID:`/${a}/${u}`})}},[a,u,o,D,g,O,P,t,r,i,p,R,se,f,x,oe,ye,c]}class Ws extends de{constructor(e){super();me(this,e,Us,Ls,ae,{classID:0,roomID:1},null,[-1,-1])}}export{Ws as default,Ks as load};
