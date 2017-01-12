/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxsizing-cssanimations-csscolumns-cssgradients-display_runin-ellipsis-flexbox-flexboxtweener-fontface-setclasses !*/
!function(e,t,n){function s(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,a;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function o(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function l(e,n,s,r){var o,l,d,f,u="modernizr",c=i("div"),p=a();if(parseInt(s,10))for(;s--;)d=i("div"),d.id=r?r[s]:u+(s+1),c.appendChild(d);return o=i("style"),o.type="text/css",o.id="s"+u,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=f,w.offsetHeight):c.parentNode.removeChild(c),!!l}function d(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?u(r,n||t):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,s){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),s))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(t[r])+":"+s+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,r,o){function a(){u&&(delete P.style,delete P.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var l=m(e,r);if(!s(l,"undefined"))return l}for(var u,c,p,g,h,v=["modernizr","tspan","samp"];!P.style&&v.length;)u=!0,P.modElem=i(v.shift()),P.style=P.modElem.style;for(p=e.length,c=0;p>c;c++)if(g=e[c],h=P.style[g],d(g,"-")&&(g=f(g)),P.style[g]!==n){if(o||s(r,"undefined"))return a(),"pfx"==t?g:!0;try{P.style[g]=r}catch(y){}if(P.style[g]!=h)return a(),"pfx"==t?g:!0}return a(),!1}function h(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?g(a,t,r,o):(a=(e+" "+R.join(i+" ")+i).split(" "),c(a,t,n))}function v(e,t,s){return h(e,n,n,t,s)}var y=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),T=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=T,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="",r=0,o=T.length-1;o>r;r++)e=0===r?"to ":"",s+=t+T[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(s+=t+"-webkit-"+n);var a=i("a"),l=a.style;return l.cssText=s,(""+l.backgroundImage).indexOf("gradient")>-1});var k=x.testStyles=l,S=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),s=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||s}();S?Modernizr.addTest("fontface",!1):k('@font-face {font-family:"font";src:url("https://")}',function(e,n){var s=t.getElementById("smodernizr"),r=s.sheet||s.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var _="Moz O ms Webkit",z=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=z;var R=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=R;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style}),x.testAllProps=h,x.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("bgrepeatround",v("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",v("backgroundRepeat","space")),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],s=0;s<n.length;s++)e=n[s].toLowerCase(),t=v("column"+n[s]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[s])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("displayrunin",v("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("ellipsis",v("textOverflow","ellipsis")),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("backgroundcliptext",function(){return v("backgroundClip","text")}),r(),o(y),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);