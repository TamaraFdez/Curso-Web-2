(()=>{"use strict";var e={208:(e,n,o)=>{o.d(n,{A:()=>c});var t=o(601),a=o.n(t),r=o(314),i=o.n(r)()(a());i.push([e.id,":root {\n    --colorDark: #222;\n    --colorWhite: #fff;\n    --colorPref: #29bd6a;\n    --colorComp: #f9e5dc;\n\n}\n\nbody {\n    margin: 0 auto;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Helvetica, sans-serif;\n    background-color: var(--colorComp);\n\n}\n\nnav {\n    width: 100%;\n\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    background: var(--colorDark);\n    color: var(--colorPref);\n}\n\nh1 {\n    color: var(--colorDark);\n    text-align: center;\n    margin-bottom: 50px;\n}\n\nh2 {\n    color: var(--colorPref);\n}\n\n#content {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\na {\n    text-decoration: none;\n    color: var(--colorPref);\n    cursor: pointer;\n    font-weight: 800;\n    padding: 10px;\n\n}\n\n.active {\n    background-color: var(--colorPref);\n    color: var(--colorDark);\n}",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=e(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(e,o,t,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function o(e){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===e){o=t;break}return o}function t(e,t){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=o(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var o=n.domAPI(n);return o.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;o.update(e=n)}else o.remove()}}e.exports=function(e,a){var r=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=o(r[i]);n[c].references--}for(var s=t(e,a),d=0;d<r.length;d++){var l=o(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},659:e=>{var n={};e.exports=function(e,o){var t=function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,o)=>{e.exports=function(e){var n=o.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(o){!function(e,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,a&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={id:t,exports:{}};return e[t](r,r.exports,o),r.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.nc=void 0,(()=>{var e=o(72),n=o.n(e),t=o(825),a=o.n(t),r=o(659),i=o.n(r),c=o(56),s=o.n(c),d=o(540),l=o.n(d),u=o(113),p=o.n(u),m=o(208),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;const v=document.getElementById("inicio"),h=document.getElementById("menu"),b=document.getElementById("contacto"),y=document.getElementById("content"),g=document.querySelector("nav");function C(e,n){const o=document.createElement("div");let t=document.createElement("section");const a=function(e){let n=document.createElement("p");return n.textContent=`${e}`,n}(n),r=function(e){let n=document.createElement("h2");return n.textContent=`${e}`,n}(e);t.appendChild(r),o.appendChild(a),t.appendChild(o),y.appendChild(t)}function x(e){let n=document.createElement("h1");n.textContent=`${e}`,y.appendChild(n)}function E(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}function L(e){e.classList.add("active")}function q(){g.querySelectorAll("a").forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")}))}v.addEventListener("click",(()=>{q(),L(v),E(),x("Restaurante"),C("Exquisito Bocado","En el corazón de la ciudad, el Exquisito Bocado ofrece una experiencia culinaria incomparable. Con un menú que combina lo tradicional y lo innovador, ingredientes frescos y un servicio impecable, cada visita es un viaje de sabores inolvidable. Únete a nosotros y descubre por qué somos más que un restaurante; somos un refugio para los amantes de la buena comida y la buena compañía."),C("Horario","Lunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."),C("Ubicación:","Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad Espacial")})),h.addEventListener("click",(()=>{q(),L(h),E(),x("Menu"),C("Bocadillos de nitos","nitos + jamoncito + panecito"),C("Pepito con tomatito","bocadillo de lomo con tomate"),C("Lasaña","Lasaña con pasta y bechamel")})),b.addEventListener("click",(()=>{q(),L(b),E(),x("Contacto"),C("Telefono","999 111 222"),C("Dirección","Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad EspacialLunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."),C("Email","Cohete42@gmail.com")})),document.addEventListener("DOMContentLoaded",(()=>{q(),L(v),E(),x("Restaurante"),C("Exquisito Bocado","En el corazón de la ciudad, el Exquisito Bocado ofrece una experiencia culinaria incomparable. Con un menú que combina lo tradicional y lo innovador, ingredientes frescos y un servicio impecable, cada visita es un viaje de sabores inolvidable. Únete a nosotros y descubre por qué somos más que un restaurante; somos un refugio para los amantes de la buena comida y la buena compañía."),C("Horario","Lunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."),C("Ubicación:","Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad Espacial")}))})()})();