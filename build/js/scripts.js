"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t=function(c,R,T){"use strict";var F,O;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};O=c.lazySizesConfig||c.lazysizesConfig||{};for(e in t){e in O||(O[e]=t[e])}}(),!R||!R.getElementsByClassName)return{init:function e(){},cfg:O,noSupport:!0};var $=R.documentElement,a=c.HTMLPictureElement,H="addEventListener",P="getAttribute",I=c[H].bind(c),U=c.setTimeout,j=c.requestAnimationFrame||U,l=c.requestIdleCallback,X=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function e(t,n){return i[n]||(i[n]=new RegExp("(\\s|^)"+n+"(\\s|$)")),i[n].test(t[P]("class")||"")&&i[n]},K=function e(t,n){J(t,n)||t.setAttribute("class",(t[P]("class")||"").trim()+" "+n)},Q=function e(t,n){var i;(i=J(t,n))&&t.setAttribute("class",(t[P]("class")||"").replace(i," "))},V=function e(t,n,i){var a=i?H:"removeEventListener";i&&e(t,n),r.forEach(function(e){t[a](e,n)})},Y=function e(t,n,i,a,r){var o=R.createEvent("Event");return i||(i={}),i.instance=F,o.initEvent(n,!a,!r),o.detail=i,t.dispatchEvent(o),o},Z=function e(t,n){var i;!a&&(i=c.picturefill||O.pf)?(n&&n.src&&!t[P]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},ee=function e(t,n){return(getComputedStyle(t,null)||{})[n]},s=function e(t,n,i){for(i=i||t.offsetWidth;i<O.minSize&&n&&!t._lazysizesWidth;){i=n.offsetWidth,n=n.parentNode}return i},te=function(){var i,a,n=[],r=[],o=n,s=function e(){var t=o;for(o=n.length?r:n,i=!0,a=!1;t.length;){t.shift()()}i=!1},e=function e(t,n){i&&!n?t.apply(this,arguments):(o.push(t),a||(a=!0,(R.hidden?U:j)(s)))};return e._lsFlush=s,e}(),ne=function e(n,t){return t?function(){te(n)}:function(){var e=this,t=arguments;te(function(){n.apply(e,t)})}},e=function e(t){var n,i=0,a=O.throttleDelay,r=O.ricTimeout,o=function e(){n=!1,i=T.now(),t()},s=l&&r>49?function(){l(o,{timeout:r}),r!==O.ricTimeout&&(r=O.ricTimeout)}:ne(function(){U(o)},!0);return function(e){var t;(e=!0===e)&&(r=33),n||(n=!0,t=a-(T.now()-i),t<0&&(t=0),e||t<9?s():U(s,t))}},ie=function e(t){var n,i,a=99,r=function e(){n=null,t()},o=function e(){var t=T.now()-i;t<a?U(e,a-t):(l||r)(r)};return function(){i=T.now(),n||(n=U(o,a))}},t=function(){var b,v,d,y,t,g,h,p,_,z,E,A,o=/^img$/i,f=/^iframe$/i,C="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),L=0,S=0,x=0,k=-1,m=function e(t){x--,(!t||x<0||!t.target)&&(x=0)},w=function e(t){return null==A&&(A="hidden"==ee(R.body,"visibility")),A||!("hidden"==ee(t.parentNode,"visibility")&&"hidden"==ee(t,"visibility"))},N=function e(t,n){var i,a=t,r=w(t);for(p-=n,E+=n,_-=n,z+=n;r&&(a=a.offsetParent)&&a!=R.body&&a!=$;){(r=(ee(a,"opacity")||1)>0)&&"visible"!=ee(a,"overflow")&&(i=a.getBoundingClientRect(),r=z>i.left&&_<i.right&&E>i.top-1&&p<i.bottom+1)}return r},n=function e(){var t,n,i,a,r,o,s,l,u,c,d,f,m=F.elements;if((y=O.loadMode)&&x<8&&(t=m.length)){for(n=0,k++;n<t;n++){if(m[n]&&!m[n]._lazyRace)if(!C||F.prematureUnveil&&F.prematureUnveil(m[n]))B(m[n]);else if((l=m[n][P]("data-expand"))&&(o=1*l)||(o=S),c||(c=!O.expand||O.expand<1?$.clientHeight>500&&$.clientWidth>500?500:370:O.expand,F._defEx=c,d=c*O.expFactor,f=O.hFac,A=null,S<d&&x<1&&k>2&&y>2&&!R.hidden?(S=d,k=0):S=y>1&&k>1&&x<6?c:L),u!==o&&(g=innerWidth+o*f,h=innerHeight+o,s=-1*o,u=o),i=m[n].getBoundingClientRect(),(E=i.bottom)>=s&&(p=i.top)<=h&&(z=i.right)>=s*f&&(_=i.left)<=g&&(E||z||_||p)&&(O.loadHidden||w(m[n]))&&(v&&x<3&&!l&&(y<3||k<4)||N(m[n],o))){if(B(m[n]),r=!0,x>9)break}else!r&&v&&!a&&x<4&&k<4&&y>2&&(b[0]||O.preloadAfterLoad)&&(b[0]||!l&&(E||z||_||p||"auto"!=m[n][P](O.sizesAttr)))&&(a=b[0]||m[n])}a&&!r&&B(a)}},i=e(n),W=function e(t){var n=t.target;if(n._lazyCache)return void delete n._lazyCache;m(t),K(n,O.loadedClass),Q(n,O.loadingClass),V(n,q),Y(n,"lazyloaded")},a=ne(W),q=function e(t){a({target:t.target})},M=function e(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}},D=function e(t){var n,i=t[P](O.srcsetAttr);(n=O.customMedia[t[P]("data-media")||t[P]("media")])&&t.setAttribute("media",n),i&&t.setAttribute("srcset",i)},s=ne(function(t,e,n,i,a){var r,o,s,l,u,c;(u=Y(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(n?K(t,O.autosizesClass):t.setAttribute("sizes",i)),o=t[P](O.srcsetAttr),r=t[P](O.srcAttr),a&&(s=t.parentNode,l=s&&X.test(s.nodeName||"")),c=e.firesLoad||"src"in t&&(o||r||l),u={target:t},K(t,O.loadingClass),c&&(clearTimeout(d),d=U(m,2500),V(t,q,!0)),l&&G.call(s.getElementsByTagName("source"),D),o?t.setAttribute("srcset",o):r&&!l&&(f.test(t.nodeName)?M(t,r):t.src=r),a&&(o||l)&&Z(t,{src:r})),t._lazyRace&&delete t._lazyRace,Q(t,O.lazyClass),te(function(){var e=t.complete&&t.naturalWidth>1;c&&!e||(e&&K(t,"ls-is-cached"),W(u),t._lazyCache=!0,U(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&x--},!0)}),B=function e(t){if(!t._lazyRace){var n,i=o.test(t.nodeName),a=i&&(t[P](O.sizesAttr)||t[P]("sizes")),r="auto"==a;(!r&&v||!i||!t[P]("src")&&!t.srcset||t.complete||J(t,O.errorClass)||!J(t,O.lazyClass))&&(n=Y(t,"lazyunveilread").detail,r&&ae.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,x++,s(t,n,r,a,i))}},r=ie(function(){O.loadMode=3,i()}),l=function e(){3==O.loadMode&&(O.loadMode=2),r()},u=function e(){if(!v){if(T.now()-t<999)return void U(e,999);v=!0,O.loadMode=3,i(),I("scroll",l,!0)}};return{_:function e(){t=T.now(),F.elements=R.getElementsByClassName(O.lazyClass),b=R.getElementsByClassName(O.lazyClass+" "+O.preloadClass),I("scroll",i,!0),I("resize",i,!0),I("pageshow",function(e){if(e.persisted){var t=R.querySelectorAll("."+O.loadingClass);t.length&&t.forEach&&j(function(){t.forEach(function(e){e.complete&&B(e)})})}}),c.MutationObserver?new MutationObserver(i).observe($,{childList:!0,subtree:!0,attributes:!0}):($[H]("DOMNodeInserted",i,!0),$[H]("DOMAttrModified",i,!0),setInterval(i,999)),I("hashchange",i,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){R[H](e,i,!0)}),/d$|^c/.test(R.readyState)?u():(I("load",u),R[H]("DOMContentLoaded",i),U(u,2e4)),F.elements.length?(n(),te._lsFlush()):i()},checkElems:i,unveil:B,_aLSL:l}}(),ae=function(){var i,o=ne(function(e,t,n,i){var a,r,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),X.test(t.nodeName||""))for(a=t.getElementsByTagName("source"),r=0,o=a.length;r<o;r++){a[r].setAttribute("sizes",i)}n.detail.dataAttr||Z(e,n.detail)}),a=function e(t,n,i){var a,r=t.parentNode;r&&(i=s(t,r,i),a=Y(t,"lazybeforesizes",{width:i,dataAttr:!!n}),a.defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&o(t,r,a,i))},e=function e(){var t,n=i.length;if(n)for(t=0;t<n;t++){a(i[t])}},t=ie(e);return{_:function e(){i=R.getElementsByClassName(O.autosizesClass),I("resize",t)},checkElems:t,updateElem:a}}(),n=function e(){!e.i&&R.getElementsByClassName&&(e.i=!0,ae._(),t._())};return U(function(){O.init&&n()}),F={cfg:O,autoSizer:ae,loader:t,init:n,uP:Z,aC:K,rC:Q,hC:J,fire:Y,gW:s,rAF:te}}(e,e.document,Date);e.lazySizes=t,"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});var form=document.querySelector("#form");form.onsubmit=function(e){e.preventDefault();var t=new FormData(form),n=new XMLHttpRequest;n.open("POST","mail.php"),n.send(t),n.onreadystatechange=function(){4==this.readyState&&200==this.status&&(form.reset(),alert("Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся"))}},window.addEventListener("DOMContentLoaded",function(){[].forEach.call(document.querySelectorAll(".form__elem-tel"),function(e){var s;function t(e){e.keyCode&&(s=e.keyCode),this.selectionStart<3&&e.preventDefault();var t="+7 (___) ___ ____",n=0,i=t.replace(/\D/g,""),a=this.value.replace(/\D/g,""),r=t.replace(/[_\d]/g,function(e){return n<a.length?a.charAt(n++)||i.charAt(n):e});-1!=(n=r.indexOf("_"))&&(n<5&&(n=3),r=r.slice(0,n));var o=t.substr(0,this.value.length).replace(/_+/g,function(e){return"\\d{1,"+e.length+"}"}).replace(/[+()]/g,"\\$&");(!(o=new RegExp("^"+o+"$")).test(this.value)||this.value.length<5||47<s&&s<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1),e.addEventListener("keydown",t,!1)})});var btnCatalog=document.querySelector(".nav__item--drop"),submenu=document.querySelector(".nav__submenu"),burger=document.querySelector(".burger"),menu=document.querySelector(".nav__list"),btnSublinks=document.querySelectorAll(".nav__btn--submenu"),btnCatLink=document.querySelector(".nav__link--drop");function showSub(e){700<document.documentElement.clientWidth&&submenu.classList.remove("nav__submenu--visial")}function hideSub(e){700<document.documentElement.clientWidth&&submenu.classList.add("nav__submenu--visial")}document.documentElement.clientWidth<=700&&document.querySelector(".nav__burger").removeAttribute("aria-hidden"),btnCatalog.addEventListener("mouseenter",showSub,!1),btnCatalog.addEventListener("mouseleave",hideSub,!1),burger.addEventListener("click",function(e){document.documentElement.clientWidth<=700&&(document.querySelector(".burger__icon").classList.toggle("burger__icon--active"),"false"==burger.getAttribute("aria-expanded")?burger.setAttribute("aria-expanded","true"):burger.setAttribute("aria-expanded","false"),document.querySelector(".burger__icon").classList.contains("burger__icon--active")?(menu.classList.remove("nav__list--visial"),menu.style.zIndex="10"):(menu.classList.add("nav__list--visial"),menu.style.zIndex="0"),document.querySelector(".head__wrap").classList.toggle("head__wrap--active"))}),btnSublinks.forEach(function(t){t.addEventListener("click",function(e){"false"==t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false"),t.parentNode.nextElementSibling.classList.toggle("nav__submenu2--visial"),document.querySelectorAll(".nav__link2").forEach(function(e){"-1"==e.getAttribute("tabindex")?e.setAttribute("tabindex","0"):e.setAttribute("tabindex","-1"),e.classList.contains("nav__link2--disabled")&&e.setAttribute("tabindex","-1")}),t.firstElementChild.classList.toggle("active")}),t.addEventListener("focus",function(e){document.documentElement.clientWidth<=700&&(t.parentNode.parentNode.style.background="#B7000E")}),t.addEventListener("blur",function(e){document.documentElement.clientWidth<=700&&(t.parentNode.parentNode.style.background="#ffffff")})}),btnCatLink.addEventListener("click",function(e){"false"==btnCatLink.getAttribute("aria-expanded")?btnCatLink.setAttribute("aria-expanded","true"):btnCatLink.setAttribute("aria-expanded","false"),submenu.classList.toggle("nav__submenu--visial"),document.querySelector(".svg__drop").classList.toggle("active"),document.querySelectorAll(".nav__sublink").forEach(function(t){"-1"==t.getAttribute("tabindex")?t.setAttribute("tabindex","0"):t.setAttribute("tabindex","-1"),t.addEventListener("focus",function(e){document.documentElement.clientWidth<=700&&(t.parentNode.parentNode.style.background="#B7000E")}),t.addEventListener("blur",function(e){document.documentElement.clientWidth<=700&&(t.parentNode.parentNode.style.background="#ffffff")})}),btnSublinks.forEach(function(e){"-1"==e.getAttribute("tabindex")?e.setAttribute("tabindex","0"):e.setAttribute("tabindex","-1")})}),document.documentElement.clientWidth;