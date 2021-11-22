var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&u(f)}function h(t){let e;return 0===d.size&&u(f),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}function m(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=y("style");return function(t,e){m(t.head||t,e)}(p(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function _(){return x(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e){t.value=null==e?"":e}function M(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}const T=new Set;let A,P=0;function H(t,e,n,o,r,l,i,s=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${i(o,1-o)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,f=p(t);T.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${d} ${o}ms linear ${r}ms 1 both`,P+=1,d}function S(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),P-=r,P||u((()=>{P||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function j(t){A=t}const z=[],O=[],B=[],N=[],R=Promise.resolve();let V=!1;function Z(t){B.push(t)}let D=!1;const Y=new Set;function q(){if(!D){D=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];j(e),I(e.$$)}for(j(null),z.length=0;O.length;)O.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];Y.has(e)||(Y.add(e),e())}B.length=0}while(z.length);for(;N.length;)N.pop()();V=!1,D=!1,Y.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let J;function F(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function U(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const W=new Set;let G;function K(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),G.c.push((()=>{W.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const X={duration:0};function tt(n,o,i,s){let c=o(n,i),u=s?0:1,d=null,f=null,m=null;function p(){m&&S(n,m)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:l=0,duration:i=300,easing:s=e,tick:v=t,css:b}=c||X,y={start:a()+l,b:o};o||(y.group=G,G.r+=1),d||f?f=y:(b&&(p(),m=H(n,u,o,i,l,s,b)),o&&v(0,1),d=g(y,i),Z((()=>U(n,o,"start"))),h((t=>{if(f&&t>f.start&&(d=g(f,i),f=null,U(n,d.b,"start"),b&&(p(),m=H(n,u,d.b,d.duration,0,s,c.css))),d)if(t>=d.end)v(u=d.b,1-u),U(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*s(e/d.duration),v(u,1-u)}return!(!d&&!f)})))}return{run(t){l(c)?F().then((()=>{c=c(),v(t)})):v(t)},end(){p(),d=f=null}}}const et="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function nt(t,e){-1===t.$$.dirty[0]&&(z.push(t),V||(V=!0,R.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,i,s,c,a,u,d,f=[-1]){const h=A;j(e);const m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:i.target||h.$$.root};d&&d(m.root);let p=!1;if(m.ctx=s?s(e,i.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&nt(e,t)),n})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(b)}else m.fragment&&m.fragment.c();i.intro&&K(e.$$.fragment),function(t,e,o,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,o),i||Z((()=>{const e=c.map(n).filter(l);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(Z)}(e,i.target,i.anchor,i.customElement),q()}j(h)}function rt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}const{document:lt}=et;function it(t,e,n){const o=t.slice();return o[17]=e[n],o[18]=e,o[19]=n,o}function st(t){let e,n,o,r,l,i,s=t[4].success+"";return{c(){e=y("div"),n=y("span"),o=w("svg"),r=w("path"),l=_(),i=x(s),k(r,"d","M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"),k(o,"xmlns","http://www.w3.org/2000/svg"),k(o,"width","1em"),k(o,"height","1em"),k(o,"fill","currentColor"),k(o,"class","bi bi-check-lg"),k(o,"viewBox","0 0 16 16"),k(e,"class","alert alert-success")},m(t,s){v(t,e,s),m(e,n),m(n,o),m(o,r),m(n,l),m(n,i)},p(t,e){16&e&&s!==(s=t[4].success+"")&&C(i,s)},d(t){t&&b(e)}}}function ct(t){let e,n,o,r,l,i,s=t[4].error+"";return{c(){e=y("div"),n=y("span"),o=w("svg"),r=w("path"),l=_(),i=x(s),k(r,"d","M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"),k(o,"xmlns","http://www.w3.org/2000/svg"),k(o,"width","1em"),k(o,"height","1em"),k(o,"fill","currentColor"),k(o,"class","bi bi-exclamation-diamond-fill"),k(o,"viewBox","0 0 16 16"),k(e,"class","alert alert-danger")},m(t,s){v(t,e,s),m(e,n),m(n,o),m(o,r),m(n,l),m(n,i)},p(t,e){16&e&&s!==(s=t[4].error+"")&&C(i,s)},d(t){t&&b(e)}}}function at(e){let n,o=e[5],r=[];for(let t=0;t<o.length;t+=1)r[t]=ft(it(e,o,t));return{c(){n=y("div");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,e){v(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,e){if(672&e){let l;for(o=t[5],l=0;l<o.length;l+=1){const i=it(t,o,l);r[l]?(r[l].p(i,e),K(r[l],1)):(r[l]=ft(i),r[l].c(),K(r[l],1),r[l].m(n,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=o.length}},i(t){for(let t=0;t<o.length;t+=1)K(r[t])},o:t,d(t){t&&b(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function ut(e){let n;return{c(){n=y("div"),n.innerHTML='<i class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-90deg-up ml-3" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"></path></svg>\n\t\t\t\t\t\t\tStart by clicking here</i>',k(n,"class","my-4 ms-3")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}function dt(t){let e,n,o=t[5][t[19]].error+"";return{c(){e=y("div"),n=x(o),k(e,"class","invalid-feedback")},m(t,o){v(t,e,o),m(e,n)},p(t,e){32&e&&o!==(o=t[5][t[19]].error+"")&&C(n,o)},d(t){t&&b(e)}}}function ft(n){let o,i,s,c,u,d,f,p,g;function w(){n[11].call(i,n[19])}function x(){return n[12](n[19])}function C(){return n[13](n[19])}let M=n[5][n[19]].error&&dt(n);return{c(){o=y("div"),i=y("input"),s=_(),c=y("button"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path></svg>\n\t\t\t                    delete',u=_(),M&&M.c(),d=_(),k(i,"type","email"),k(i,"class","form-control form-control-lg"),k(i,"placeholder","Your collaborator email"),E(i,"is-invalid",!n[5][n[19]].valid),k(c,"type","button"),k(c,"class","btn btn-outline-danger btn-delete"),k(o,"class","input-group my-4")},m(t,e){v(t,o,e),m(o,i),L(i,n[5][n[19]].email),m(o,s),m(o,c),m(o,u),M&&M.m(o,null),m(o,d),p||(g=[$(i,"input",w),$(i,"input",x),$(c,"click",C)],p=!0)},p(t,e){n=t,32&e&&i.value!==n[5][n[19]].email&&L(i,n[5][n[19]].email),32&e&&E(i,"is-invalid",!n[5][n[19]].valid),n[5][n[19]].error?M?M.p(n,e):(M=dt(n),M.c(),M.m(o,d)):M&&(M.d(1),M=null)},i(n){f||Z((()=>{f=function(n,o,r){let i,s,c=o(n,r),u=!1,d=0;function f(){i&&S(n,i)}function m(){const{delay:o=0,duration:r=300,easing:l=e,tick:m=t,css:p}=c||X;p&&(i=H(n,0,1,r,o,l,p,d++)),m(0,1);const g=a()+o,v=g+r;s&&s.abort(),u=!0,Z((()=>U(n,!0,"start"))),s=h((t=>{if(u){if(t>=v)return m(1,0),U(n,!0,"end"),f(),u=!1;if(t>=g){const e=l((t-g)/r);m(e,1-e)}}return u}))}let p=!1;return{start(){p||(p=!0,S(n),l(c)?(c=c(),F().then(m)):m())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}(o,rt,{}),f.start()}))},o:t,d(t){t&&b(o),M&&M.d(),p=!1,r(g)}}}function ht(t){let e,n;return{c(){e=w("svg"),n=w("path"),k(n,"fill-rule","evenodd"),k(n,"d","M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","16"),k(e,"height","16"),k(e,"fill","currentColor"),k(e,"class","bi bi-arrow-return-right"),k(e,"viewBox","0 0 16 16")},m(t,o){v(t,e,o),m(e,n)},d(t){t&&b(e)}}}function mt(t){let e;return{c(){e=y("div"),e.innerHTML='<span class="visually-hidden">Loading...</span>',k(e,"class","spinner-border text-light"),M(e,"width","1em"),M(e,"height","1em"),k(e,"role","status")},m(t,n){v(t,e,n)},d(t){t&&b(e)}}}function pt(t){let e;return{c(){e=y("small"),e.textContent="We're verifying your emails. This can take some time.",k(e,"class","text-success mt-3")},m(t,n){v(t,e,n)},d(t){t&&b(e)}}}function gt(t){let e,n,o,r,l,i,s,c,a,u,d,f,h,p,g,w,L,M,E,T,A,P,H,S,j,z,O,B=t[4].token+"";return{c(){e=y("div"),n=y("div"),o=y("h3"),o.textContent="Your beautiful new form",r=_(),l=y("h2"),l.textContent="now ready !",i=_(),s=y("div"),s.innerHTML="<p>Emails has been sent to your collaborator addresses to verify their consent.<br/>Remember to click on the link provided in theses mail in order to receive futur submissions on this address.</p>",c=_(),a=y("div"),u=y("input"),f=_(),h=y("button"),h.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg>\n\t\t\t\t\t\tCopy',p=_(),g=y("div"),g.innerHTML="<p>Use it in your website code like this.<br/>Remember to add your inputs, to set the method as <code>POST</code> and that you can use as much formatting / styling as you want.</p>",w=_(),L=y("pre"),M=y("code"),E=x('<form action="https://cform.rac-0.fr/f/'),T=x(B),A=x('" method="POST">\n    ...\n</form>'),P=_(),H=y("div"),H.innerHTML="<h5>Thank you for using, and see you soon !</h5>",k(o,"class","display-4"),k(l,"class","display-5 mb-5"),k(s,"clas","my-5"),k(u,"type","text"),k(u,"class","form-control form-control-lg"),u.value=d="https://cform.rac-0.fr/f/"+t[4].token,u.readOnly=!0,k(h,"type","button"),k(h,"class","mt-2 btn btn-sm btn-outline-primary"),k(a,"class","my-5"),k(g,"class","my-5"),k(H,"class","my-5"),k(n,"class","p-5 m-4"),k(e,"class","col vh-100")},m(d,b){v(d,e,b),m(e,n),m(n,o),m(n,r),m(n,l),m(n,i),m(n,s),m(n,c),m(n,a),m(a,u),t[15](u),m(a,f),m(a,h),m(n,p),m(n,g),m(n,w),m(n,L),m(L,M),m(M,E),m(M,T),m(M,A),m(n,P),m(n,H),j=!0,z||(O=$(h,"click",t[8]),z=!0)},p(t,e){(!j||16&e&&d!==(d="https://cform.rac-0.fr/f/"+t[4].token)&&u.value!==d)&&(u.value=d),(!j||16&e)&&B!==(B=t[4].token+"")&&C(T,B)},i(t){j||(Z((()=>{S||(S=tt(e,rt,{},!0)),S.run(1)})),j=!0)},o(t){S||(S=tt(e,rt,{},!1)),S.run(0),j=!1},d(n){n&&b(e),t[15](null),n&&S&&S.end(),z=!1,O()}}}function vt(t){let e,n,o,l,i,c,a,u,d,f,h,p,g,w,C,L,M,T,A,P,H,S,j,z,O,B,N,R,V,Z,D,Y,q,I,J,F,U,W,X,tt,et,nt,ot,rt=t[4].success&&st(t),it=t[4].error&&ct(t);function dt(t,e){return 0==t[5].length?ut:at}let ft=dt(t),vt=ft(t);function bt(t,e){return t[0]?mt:ht}let yt=bt(t),wt=yt(t),xt=t[0]&&pt(),_t=t[4].token&&gt(t);return{c(){var r,m;e=y("script"),o=_(),l=y("div"),i=y("div"),c=y("div"),a=y("div"),u=y("h1"),u.textContent="Your contact form",d=_(),f=y("h2"),f.textContent="free & ready in 10 seconds...",h=_(),p=y("p"),p.innerHTML='Set emails you want to be notified on, then click on <code class="text-success">Create form</code>.<br/>Once it is created, you will get a link your form should point to.<br/>Just put it in your form as template code show it, and you&#39;re done !',g=_(),w=y("div"),rt&&rt.c(),C=_(),it&&it.c(),L=_(),M=y("button"),M.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>\n                        Add email',T=_(),vt.c(),A=_(),P=y("div"),H=y("div"),S=y("input"),j=_(),z=y("label"),z.textContent="I Agree to Privacy Policy",O=_(),B=y("div"),N=y("button"),wt.c(),R=x("\n                            Create form\n                        "),Z=y("br"),D=_(),Y=y("div"),xt&&xt.c(),q=_(),I=y("div"),I.innerHTML='<div class="addthis_inline_follow_toolbox_1x8t"></div>',J=_(),F=y("a"),F.textContent="Privacy Policy",U=y("script"),U.textContent='(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);',W=_(),X=y("div"),X.innerHTML='<p><small class="text-muted">Copyright © Didelot Maurice-Michel, All rights reserved.</small></p> \n\t\t\t\t\t<p><small class="text-muted">VERSION 2.0.</small></p>',tt=_(),_t&&_t.c(),k(e,"type","text/javascript"),r=e.src,m=n="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6197c01f7d727a63",s||(s=document.createElement("a")),s.href=m,r!==s.href&&k(e,"src","//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6197c01f7d727a63"),k(u,"class","display-4"),k(f,"class","display-5"),k(p,"class","my-5"),k(M,"type","button"),k(M,"class","btn btn-primary btn-lg"),k(S,"class","form-check-input"),k(S,"type","checkbox"),S.__value="",S.value=S.__value,k(S,"id","privacyPolicyCheckbox"),k(z,"class","form-check-label"),k(z,"for","privacyPolicyCheckbox"),k(H,"class","form-check"),k(P,"class","form-group mb-3"),k(N,"class","btn btn-success btn-lg"),N.disabled=V=t[0]||0==t[5].length||""==t[5][0],E(N,"disabled",t[0]||t[1]||0==t[2]),k(B,"class","form-group mb-3"),k(Y,"class","form-group"),k(w,"class","form-group my-4"),k(I,"class","mt-5 pt-3"),k(F,"href","https://www.iubenda.com/privacy-policy/40666792"),k(F,"class","iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "),k(F,"title","Privacy Policy "),k(U,"type","text/javascript"),k(X,"class","mt-4"),k(a,"class","p-5 m-4"),k(c,"class","col bg-light vh-100"),k(i,"class","row"),k(l,"class","container-fluid vh-100")},m(n,r){m(lt.head,e),v(n,o,r),v(n,l,r),m(l,i),m(i,c),m(c,a),m(a,u),m(a,d),m(a,f),m(a,h),m(a,p),m(a,g),m(a,w),rt&&rt.m(w,null),m(w,C),it&&it.m(w,null),m(w,L),m(w,M),m(w,T),vt.m(w,null),m(w,A),m(w,P),m(P,H),m(H,S),S.checked=t[2],m(H,j),m(H,z),m(w,O),m(w,B),m(B,N),wt.m(N,null),m(N,R),m(B,Z),m(w,D),m(w,Y),xt&&xt.m(Y,null),m(a,q),m(a,I),m(a,J),m(a,F),m(a,U),m(a,W),m(a,X),m(i,tt),_t&&_t.m(i,null),et=!0,nt||(ot=[$(M,"click",t[6]),$(S,"change",t[14]),$(N,"click",t[10])],nt=!0)},p(t,[e]){t[4].success?rt?rt.p(t,e):(rt=st(t),rt.c(),rt.m(w,C)):rt&&(rt.d(1),rt=null),t[4].error?it?it.p(t,e):(it=ct(t),it.c(),it.m(w,L)):it&&(it.d(1),it=null),ft===(ft=dt(t))&&vt?vt.p(t,e):(vt.d(1),vt=ft(t),vt&&(vt.c(),K(vt,1),vt.m(w,A))),4&e&&(S.checked=t[2]),yt!==(yt=bt(t))&&(wt.d(1),wt=yt(t),wt&&(wt.c(),wt.m(N,R))),(!et||33&e&&V!==(V=t[0]||0==t[5].length||""==t[5][0]))&&(N.disabled=V),7&e&&E(N,"disabled",t[0]||t[1]||0==t[2]),t[0]?xt||(xt=pt(),xt.c(),xt.m(Y,null)):xt&&(xt.d(1),xt=null),t[4].token?_t?(_t.p(t,e),16&e&&K(_t,1)):(_t=gt(t),_t.c(),K(_t,1),_t.m(i,null)):_t&&(G={r:0,c:[],p:G},Q(_t,1,1,(()=>{_t=null})),G.r||r(G.c),G=G.p)},i(t){et||(K(vt),K(_t),et=!0)},o(t){Q(_t),et=!1},d(t){b(e),t&&b(o),t&&b(l),rt&&rt.d(),it&&it.d(),vt.d(),wt.d(),xt&&xt.d(),_t&&_t.d(),nt=!1,r(ot)}}}function bt(t,e,n){let o,r=!1,l=!0,i=!1,s={},c=[];function a(){if(n(1,l=!1),0!=c.length){for(var t in c)if(!c[t].valid)return void n(1,l=!0)}else n(1,l=!0)}function u(t){n(5,c=[...c.slice(0,t),...c.slice(t+1)]),a()}function d(t){var e;n(5,c[t].valid=(e=c[t].email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())),c),a()}return[r,l,i,o,s,c,function(){n(5,c=[...c,{email:"",valid:!1,error:""}]),a()},u,function(){o.select(),document.execCommand("copy"),gtag("send","event","form","copylink",s.token)},d,function(){if(0==c.length)return 0;n(0,r=!0),fetch("/new",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({emails:c})}).then((function(t){return t.json()})).then((function(t){n(0,r=!1),n(4,s=t),gtag("send","event","form","create",s.token)}))},function(t){c[t].email=this.value,n(5,c)},t=>d(t),t=>u(t),function(){i=this.checked,n(2,i)},function(t){O[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),ot(this,t,bt,vt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
