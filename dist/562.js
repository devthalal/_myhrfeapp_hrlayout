"use strict";(self.webpackChunklayout=self.webpackChunklayout||[]).push([[562],{326:(e,t,r)=>{r.d(t,{yS:()=>d});var n=r(587);const o=window.location.origin;let a=null;const i=function(){return n.parseUrl(window.location.href).query.code},s=new class{constructor(){i()||this.initRefreshCycle()}t;rt;te;sendRefreshBefore=1e4;timeoutHandle;setToken(e){this.t=e,localStorage.setItem("_ab_t",e)}initRefreshCycle(){clearTimeout(this.timeoutHandle);let e=this.getExpiry();if(console.log("expires in = ",e),!e)return!1;e*=1e3;let t=e-(new Date).getTime();if(!t||t<this.sendRefreshBefore||isNaN(t))return t||console.log("!timer"),t<this.sendRefreshBefore&&console.log("less than",this.sendRefreshBefore),isNaN(t)&&console.log("isNan"),console.log("invalid expiry time ",(new Date).getTime(),e,t),null;t=parseInt(t)-this.sendRefreshBefore,console.log("valid expiry time ",(new Date).getTime(),e,t),this.timeoutHandle=setTimeout((()=>{c()}),t)}setExpiry(e){this.te=e,localStorage.setItem("_ab_t_e",e)}getExpiry(){return this.te||localStorage.getItem("_ab_t_e")}removeToken(e){this.t=e,localStorage.removeItem("_ab_t")}setRefreshToken(e){this.rt=e,localStorage.setItem("_ab_rt",e)}removeRefreshToken(e){this.rt=e,localStorage.removeItem("_ab_rt")}getToken(){return this.t||localStorage.getItem("_ab_t")}getRefreshToken(){return this.rt||localStorage.getItem("_ab_rt")}clearTokens(){this.removeRefreshToken(),this.removeToken()}},c=async()=>{console.log("calling refresh access token");try{const e=await fetch("https://shield-dev.appblox.io/refresh-token",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.getToken()} ${s.getRefreshToken()}`}}),t=await e.json();t&&t.data.AccessToken?(console.log("data is ",t.data),s.setToken(t.data.AccessToken),s.setExpiry(t.data.AtExpires),s.setRefreshToken(t.data.RefreshToken),s.initRefreshCycle()):401===t.status&&(console.log("expired token"),s.clearTokens(),await l())}catch(e){console.log("error in refreshing = ",e)}},l=async()=>{if(s.getToken()){const e=await u();if(!e){const e=f();window.location=e}return e}{const e=f();window.location=e}},u=async()=>{try{const e=await fetch("https://shield-dev.appblox.io/validate-appblox-acess-token",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.getToken()}`}}),t=await e.json();return t.data&&"valid"===t.data}catch(e){console.log(e)}},f=()=>{const e={response_type:"code",scope:"user private_repo",redirect_uri:o,client_id:a,state:"state123"};return`https://shield-dev.appblox.io/login?${n.stringify(e)}`},d={init:async function(e){a=e;const t=i();if(t){const e=await async function(e){const t=`https://shield-dev.appblox.io/auth/get-token?grant_type=authorization_code&code=${e}&redirect_uri=${o}`;try{const e=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}),r=await e.json();return location.href.includes("?")&&history.pushState({},null,location.href.split("?")[0]),console.log("🚀  file: index.js  line 50  sendCodeToServer  data",r),r}catch(e){console.log(e)}}(t);e.success&&e.data&&(s.setToken(e.data.ab_at),s.setExpiry(e.data.expires_in),s.setRefreshToken(e.data.ab_rt),s.initRefreshCycle())}},verifyLogin:l,tokenStore:s,getAuthUrl:f,logout:async()=>{await(async()=>{try{const e=await fetch("https://shield-dev.appblox.io/logout",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.getToken()}`}});return await e.json()}catch(e){console.log(e)}})(),s.removeRefreshToken(),s.removeToken(),await l()}};new Set,new Set,new Map,new Map},788:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},336:e=>{var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),s=0;s<i.length;s++){var c=i[s];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},106:e=>{e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],s=e[i];(o?-1!==t.indexOf(i):t(i,s,e))&&(r[i]=s)}return r}},587:(e,t,r)=>{const n=r(757),o=r(336),a=r(3),i=r(106),s=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=h(r[e],t);else n[e]=h(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=f(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),":list="].join("")]:[...r,[l(t,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(r,e),t,l(o,e)].join("")]:[[n,l(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let c=t.stringify(i,r);c&&(c=`?${c}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[s]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${c}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:o,query:a,fragmentIdentifier:c}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:i(a,r),fragmentIdentifier:c},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},265:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(965),o=function(e,t){var r;return null==(r=e.classList)?void 0:r.contains(t)},a=function(e,t){for(var r=e.target||e;r;){if(Array.isArray(t)){if(t.some((function(e){return o(r,e)})))return!0}else if(o(r,t))return!0;r=r.parentElement}return!1},i=function(e){return!(!e.includes("touch")||!function(){if("undefined"==typeof window||"function"!=typeof window.addEventListener)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){return null};return window.addEventListener("test",r,t),window.removeEventListener("test",r,t),e}())&&{passive:!0}};const s=function(e,t){var r=void 0===t?{}:t,o=r.refs,s=r.disabled,c=r.eventTypes,l=void 0===c?["mousedown","touchstart"]:c,u=r.excludeScrollbar,f=r.ignoreClass,d=void 0===f?"ignore-onclickoutside":f,p=r.detectIFrame,h=void 0===p||p,m=(0,n.useState)([]),g=m[0],y=m[1],v=(0,n.useRef)(e);v.current=e;var b=(0,n.useCallback)((function(e){return y((function(t){return[].concat(t,[{current:e}])}))}),[]);return(0,n.useEffect)((function(){if(null!=o&&o.length||g.length){var e=function(){var e=[];return(o||g).forEach((function(t){var r=t.current;return r&&e.push(r)})),e},t=function(t){a(t,d)||u&&function(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY}(t)||!e().every((function(e){return!e.contains(t.target)}))||v.current(t)},r=function(t){return setTimeout((function(){var r=document.activeElement;"IFRAME"!==(null==r?void 0:r.tagName)||a(r,d)||e().includes(r)||v.current(t)}),0)},n=function(){l.forEach((function(e){return document.removeEventListener(e,t,i(e))})),h&&window.removeEventListener("blur",r)};if(!s)return l.forEach((function(e){return document.addEventListener(e,t,i(e))})),h&&window.addEventListener("blur",r),function(){return n()};n()}}),[g,d,u,s,h,JSON.stringify(l)]),b}},3:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},757:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var f=i(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:m(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,h=0;function m(e,t){var r,n,o;if(t.singleton){var a=h++;r=p||(p=c(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=c(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var c=s(e,t),l=0;l<r.length;l++){var u=i(r[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=c}}}}}]);