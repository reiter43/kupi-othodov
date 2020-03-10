"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t=function(u,T,W){"use strict";var F,O;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};O=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){e in O||(O[e]=t[e])}}(),!T||!T.getElementsByClassName)return{init:function e(){},cfg:O,noSupport:!0};var H=T.documentElement,i=u.HTMLPictureElement,I="addEventListener",P="getAttribute",$=u[I].bind(u),U=u.setTimeout,j=u.requestAnimationFrame||U,s=u.requestIdleCallback,K=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],a={},X=Array.prototype.forEach,G=function e(t,n){return a[n]||(a[n]=new RegExp("(\\s|^)"+n+"(\\s|$)")),a[n].test(t[P]("class")||"")&&a[n]},J=function e(t,n){G(t,n)||t.setAttribute("class",(t[P]("class")||"").trim()+" "+n)},Q=function e(t,n){var a;(a=G(t,n))&&t.setAttribute("class",(t[P]("class")||"").replace(a," "))},V=function e(t,n,a){var i=a?I:"removeEventListener";a&&e(t,n),o.forEach(function(e){t[i](e,n)})},Y=function e(t,n,a,i,o){var r=T.createEvent("Event");return a||(a={}),a.instance=F,r.initEvent(n,!i,!o),r.detail=a,t.dispatchEvent(r),r},Z=function e(t,n){var a;!i&&(a=u.picturefill||O.pf)?(n&&n.src&&!t[P]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},ee=function e(t,n){return(getComputedStyle(t,null)||{})[n]},l=function e(t,n,a){for(a=a||t.offsetWidth;a<O.minSize&&n&&!t._lazysizesWidth;){a=n.offsetWidth,n=n.parentNode}return a},te=function(){var a,i,n=[],o=[],r=n,l=function e(){var t=r;for(r=n.length?o:n,a=!0,i=!1;t.length;){t.shift()()}a=!1},e=function e(t,n){a&&!n?t.apply(this,arguments):(r.push(t),i||(i=!0,(T.hidden?U:j)(l)))};return e._lsFlush=l,e}(),ne=function e(n,t){return t?function(){te(n)}:function(){var e=this,t=arguments;te(function(){n.apply(e,t)})}},e=function e(t){var n,a=0,i=O.throttleDelay,o=O.ricTimeout,r=function e(){n=!1,a=W.now(),t()},l=s&&o>49?function(){s(r,{timeout:o}),o!==O.ricTimeout&&(o=O.ricTimeout)}:ne(function(){U(r)},!0);return function(e){var t;(e=!0===e)&&(o=33),n||(n=!0,t=i-(W.now()-a),t<0&&(t=0),e||t<9?l():U(l,t))}},ae=function e(t){var n,a,i=99,o=function e(){n=null,t()},r=function e(){var t=W.now()-a;t<i?U(e,i-t):(s||o)(o)};return function(){a=W.now(),n||(n=U(r,i))}},t=function(){var v,y,d,h,t,g,p,b,_,E,z,A,r=/^img$/i,f=/^iframe$/i,L="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent),C=0,S=0,w=0,x=-1,m=function e(t){w--,(!t||w<0||!t.target)&&(w=0)},q=function e(t){return null==A&&(A="hidden"==ee(T.body,"visibility")),A||!("hidden"==ee(t.parentNode,"visibility")&&"hidden"==ee(t,"visibility"))},k=function e(t,n){var a,i=t,o=q(t);for(b-=n,z+=n,_-=n,E+=n;o&&(i=i.offsetParent)&&i!=T.body&&i!=H;){(o=(ee(i,"opacity")||1)>0)&&"visible"!=ee(i,"overflow")&&(a=i.getBoundingClientRect(),o=E>a.left&&_<a.right&&z>a.top-1&&b<a.bottom+1)}return o},n=function e(){var t,n,a,i,o,r,l,s,c,u,d,f,m=F.elements;if((h=O.loadMode)&&w<8&&(t=m.length)){for(n=0,x++;n<t;n++){if(m[n]&&!m[n]._lazyRace)if(!L||F.prematureUnveil&&F.prematureUnveil(m[n]))B(m[n]);else if((s=m[n][P]("data-expand"))&&(r=1*s)||(r=S),u||(u=!O.expand||O.expand<1?H.clientHeight>500&&H.clientWidth>500?500:370:O.expand,F._defEx=u,d=u*O.expFactor,f=O.hFac,A=null,S<d&&w<1&&x>2&&h>2&&!T.hidden?(S=d,x=0):S=h>1&&x>1&&w<6?u:C),c!==r&&(g=innerWidth+r*f,p=innerHeight+r,l=-1*r,c=r),a=m[n].getBoundingClientRect(),(z=a.bottom)>=l&&(b=a.top)<=p&&(E=a.right)>=l*f&&(_=a.left)<=g&&(z||E||_||b)&&(O.loadHidden||q(m[n]))&&(y&&w<3&&!s&&(h<3||x<4)||k(m[n],r))){if(B(m[n]),o=!0,w>9)break}else!o&&y&&!i&&w<4&&x<4&&h>2&&(v[0]||O.preloadAfterLoad)&&(v[0]||!s&&(z||E||_||b||"auto"!=m[n][P](O.sizesAttr)))&&(i=v[0]||m[n])}i&&!o&&B(i)}},a=e(n),N=function e(t){var n=t.target;if(n._lazyCache)return void delete n._lazyCache;m(t),J(n,O.loadedClass),Q(n,O.loadingClass),V(n,M),Y(n,"lazyloaded")},i=ne(N),M=function e(t){i({target:t.target})},D=function e(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}},R=function e(t){var n,a=t[P](O.srcsetAttr);(n=O.customMedia[t[P]("data-media")||t[P]("media")])&&t.setAttribute("media",n),a&&t.setAttribute("srcset",a)},l=ne(function(t,e,n,a,i){var o,r,l,s,c,u;(c=Y(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?J(t,O.autosizesClass):t.setAttribute("sizes",a)),r=t[P](O.srcsetAttr),o=t[P](O.srcAttr),i&&(l=t.parentNode,s=l&&K.test(l.nodeName||"")),u=e.firesLoad||"src"in t&&(r||o||s),c={target:t},J(t,O.loadingClass),u&&(clearTimeout(d),d=U(m,2500),V(t,M,!0)),s&&X.call(l.getElementsByTagName("source"),R),r?t.setAttribute("srcset",r):o&&!s&&(f.test(t.nodeName)?D(t,o):t.src=o),i&&(r||s)&&Z(t,{src:o})),t._lazyRace&&delete t._lazyRace,Q(t,O.lazyClass),te(function(){var e=t.complete&&t.naturalWidth>1;u&&!e||(e&&J(t,"ls-is-cached"),N(c),t._lazyCache=!0,U(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&w--},!0)}),B=function e(t){if(!t._lazyRace){var n,a=r.test(t.nodeName),i=a&&(t[P](O.sizesAttr)||t[P]("sizes")),o="auto"==i;(!o&&y||!a||!t[P]("src")&&!t.srcset||t.complete||G(t,O.errorClass)||!G(t,O.lazyClass))&&(n=Y(t,"lazyunveilread").detail,o&&ie.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,w++,l(t,n,o,i,a))}},o=ae(function(){O.loadMode=3,a()}),s=function e(){3==O.loadMode&&(O.loadMode=2),o()},c=function e(){if(!y){if(W.now()-t<999)return void U(e,999);y=!0,O.loadMode=3,a(),$("scroll",s,!0)}};return{_:function e(){t=W.now(),F.elements=T.getElementsByClassName(O.lazyClass),v=T.getElementsByClassName(O.lazyClass+" "+O.preloadClass),$("scroll",a,!0),$("resize",a,!0),$("pageshow",function(e){if(e.persisted){var t=T.querySelectorAll("."+O.loadingClass);t.length&&t.forEach&&j(function(){t.forEach(function(e){e.complete&&B(e)})})}}),u.MutationObserver?new MutationObserver(a).observe(H,{childList:!0,subtree:!0,attributes:!0}):(H[I]("DOMNodeInserted",a,!0),H[I]("DOMAttrModified",a,!0),setInterval(a,999)),$("hashchange",a,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){T[I](e,a,!0)}),/d$|^c/.test(T.readyState)?c():($("load",c),T[I]("DOMContentLoaded",a),U(c,2e4)),F.elements.length?(n(),te._lsFlush()):a()},checkElems:a,unveil:B,_aLSL:s}}(),ie=function(){var a,r=ne(function(e,t,n,a){var i,o,r;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),K.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,r=i.length;o<r;o++){i[o].setAttribute("sizes",a)}n.detail.dataAttr||Z(e,n.detail)}),i=function e(t,n,a){var i,o=t.parentNode;o&&(a=l(t,o,a),i=Y(t,"lazybeforesizes",{width:a,dataAttr:!!n}),i.defaultPrevented||(a=i.detail.width)&&a!==t._lazysizesWidth&&r(t,o,i,a))},e=function e(){var t,n=a.length;if(n)for(t=0;t<n;t++){i(a[t])}},t=ae(e);return{_:function e(){a=T.getElementsByClassName(O.autosizesClass),$("resize",t)},checkElems:t,updateElem:i}}(),n=function e(){!e.i&&T.getElementsByClassName&&(e.i=!0,ie._(),t._())};return U(function(){O.init&&n()}),F={cfg:O,autoSizer:ie,loader:t,init:n,uP:Z,aC:J,rC:Q,hC:G,fire:Y,gW:l,rAF:te}}(e,e.document,Date);e.lazySizes=t,"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{}),window.addEventListener("DOMContentLoaded",function(){function t(){r=document.activeElement,l.classList.remove("hide"),d.style.overflow="hidden",d.style.marginRight="17px",u.focus(),l.addEventListener("keydown",function(e){9===e.keyCode&&(e.shiftKey?document.activeElement===m&&v.focus():document.activeElement===v&&m.focus()),27===e.keyCode&&n()})}function n(){l.classList.add("hide"),d.style.overflow="",d.style.marginRight="0px",u.focus(),r.focus(),document.onkeydown=null}var e,a,i,o,r,l,s,c,u,d,f,m,v;e=".btn-base--call",a=".modal",i=".modal__btn-close",o="form__tel--modal",l=document.querySelector(a),s=document.querySelectorAll(e),c=document.querySelector(i),u=document.getElementById(o),d=document.querySelector("body"),f=l.querySelectorAll('*[tabindex="0"]'),m=f[0],v=f[f.length-1],s.forEach(function(e){e.addEventListener("click",t)}),c.addEventListener("click",n),l.addEventListener("click",function(e){e.target===l&&n()})}),window.addEventListener("DOMContentLoaded",function(){function e(e){var a=document.querySelector(e);a&&(a.onsubmit=function(e){e.preventDefault();var t=new FormData(a),n=new XMLHttpRequest;n.open("POST","mail.php"),n.send(t),n.onreadystatechange=function(){4==this.readyState&&200==this.status&&(a.reset(),alert("Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся"))}})}function t(e){var t="+7 (___) ___ __ __",n=0,a=t.replace(/\D/g,""),i=this.value.replace(/\D/g,"");a.length>=i.length&&(i=a),this.value=t.replace(/./g,function(e){return/[_\d]/.test(e)&&n<i.length?i.charAt(n++):n>=i.length?"":e}),"blur"===e.type?2==this.value.length&&(this.value=""):function(e,t){if(t.focus(),t.setSelectionRange){t.setSelectionRange(e,e)}else if(t.createTextRange){var n=t.createTextRange();n.collapse(true);n.moveEnd("character",e);n.moveStart("character",e);n.select()}}(this.value.length,this)}e("#form"),e("#form--modal"),e(".anons__form"),e(".form--delivery");function n(e){document.querySelectorAll(e).forEach(function(e){e.addEventListener("keypress",function(e){e.key.match(/[^а-яё 0-9]/gi)&&e.preventDefault()})})}document.querySelectorAll('[type="tel"]').forEach(function(e){e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)}),n("textarea"),n('[type="text"')}),window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".nav__item--drop"),t=document.querySelector(".nav__submenu"),n=document.querySelector(".burger"),a=document.querySelector(".burger__icon"),i=document.querySelector(".nav__list"),o=document.querySelectorAll(".nav__btn--submenu"),r=document.querySelectorAll(".nav__sublink"),l=document.querySelectorAll(".nav__link2"),s=document.querySelector(".nav__link--drop"),c=document.documentElement.clientWidth,u=window.location.pathname;function d(e){"false"==e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}function f(e,t){"-1"==e.getAttribute("tabindex")?e.setAttribute("tabindex","0"):e.setAttribute("tabindex","-1"),t.classList.contains("disabled")&&e.setAttribute("tabindex","-1")}function m(t,e,n){t.addEventListener(e,function(e){c<=700&&(t.parentNode.parentNode.style.background=n)})}c<=700&&document.querySelector(".nav__burger").removeAttribute("aria-hidden"),("/catalog.html"!=u||"/catalog.html"==u&&c<=890)&&(e.addEventListener("mouseenter",function(e){700<c&&t.classList.remove("visual")}),e.addEventListener("mouseleave",function(e){700<c&&t.classList.add("visual")})),n.addEventListener("click",function(e){c<=700&&(a.classList.toggle("burger__icon--active"),d(n),a.classList.contains("burger__icon--active")?(i.classList.remove("nav__list--visial"),i.style.zIndex="10"):(i.classList.add("nav__list--visial"),i.style.zIndex="0"))}),o.forEach(function(t){t.addEventListener("click",function(e){d(t),t.parentNode.nextElementSibling.classList.toggle("nav__submenu2--visial"),t.firstElementChild.classList.toggle("active"),l.forEach(function(e){f(e,e)})}),m(t,"focus","#B7000E"),m(t,"blur","#ffffff")}),s.addEventListener("click",function(e){d(s),t.classList.toggle("visual"),document.querySelector(".svg__drop").classList.toggle("active"),r.forEach(function(e){f(e,e),m(e,"focus","#B7000E"),m(e,"blur","#ffffff")}),o.forEach(function(e){f(e,e.parentNode.parentNode.querySelector(".nav__sublink"))})}),document.querySelectorAll(".nav-catalog__item-content>button").forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=n.parentNode.parentNode.querySelector(".nav-catalog__submenu");t&&(t.classList.toggle("visual"),d(n),t.querySelectorAll(".nav-catalog__sublink ").forEach(function(e){t.classList.contains("visual")?e.setAttribute("tabindex","-1"):e.setAttribute("tabindex","0")}))})})});