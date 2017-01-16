/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-borderradius-cssgradients-flexbox-fontface-svg-setclasses !*/
!function(e,t,n){function s(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?b.className.baseVal=t:b.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function f(e,n,s,r){var o,a,f,u,d="modernizr",c=i("div"),p=l();if(parseInt(s,10))for(;s--;)f=i("div"),f.id=r?r[s]:d+(s+1),c.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=u,b.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,s){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(t[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+u(t[r])+":"+s+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,r,o){function l(){u&&(delete P.style,delete P.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var f=d(e,r);if(!s(f,"undefined"))return f}for(var u,p,m,g,h,v=["modernizr","tspan"];!P.style;)u=!0,P.modElem=i(v.shift()),P.style=P.modElem.style;for(m=e.length,p=0;m>p;p++)if(g=e[p],h=P.style[g],a(g,"-")&&(g=c(g)),P.style[g]!==n){if(o||s(r,"undefined"))return l(),"pfx"==t?g:!0;try{P.style[g]=r}catch(y){}if(P.style[g]!=h)return l(),"pfx"==t?g:!0}return l(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?m(r,n||t):r);return!1}function h(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?p(a,t,r,o):(a=(e+" "+k.join(i+" ")+i).split(" "),g(a,t,n))}function v(e,t,s){return h(e,n,n,t,s)}var y=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=[],b=t.documentElement,C="svg"===b.nodeName.toLowerCase(),S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=S,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="",r=0,o=S.length-1;o>r;r++)e=0===r?"to ":"",s+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(s+=t+"-webkit-"+n);var a=i("a"),l=a.style;return l.cssText=s,(""+l.backgroundImage).indexOf("gradient")>-1});var _="Moz O ms Webkit",T=w._config.usePrefixes?_.split(" "):[];w._cssomPrefixes=T;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style});var k=w._config.usePrefixes?_.toLowerCase().split(" "):[];w._domPrefixes=k,w.testAllProps=h,w.testAllProps=v,Modernizr.addTest("borderradius",v("borderRadius","0px",!0));var z=w.testStyles=f,N=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||s}();N?Modernizr.addTest("fontface",!1):z('@font-face {font-family:"font";src:url("https://")}',function(e,n){var s=t.getElementById("smodernizr"),r=s.sheet||s.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),r(),o(x),delete w.addTest,delete w.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);