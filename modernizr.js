/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cors-customevent-es5-matchmedia-supports-xdomainrequest !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,r,n,o,i,s;for(var d in tests)if(tests.hasOwnProperty(d)){if(e=[],t=tests[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=n:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=n),classes.push((n?"":"no-")+s.join("-"))}}function contains(e,t){return!!~(""+e).indexOf(t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,r,n){var o,i,s,d,a="modernizr",u=createElement("div"),l=getBody();if(parseInt(r,10))for(;r--;)s=createElement("div"),s.id=n?n[r]:a+(r+1),u.appendChild(s);return o=createElement("style"),o.type="text/css",o.id="s"+a,(l.fake?l:u).appendChild(o),l.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),u.id=a,l.fake&&(l.style.background="",l.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(l)),i=t(u,e),l.fake?(l.parentNode.removeChild(l),docElement.style.overflow=d,docElement.offsetHeight):u.parentNode.removeChild(u),!!i}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(e,t,r){var n;if("getComputedStyle"in window){n=getComputedStyle.call(window,e,t);var o=window.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!t&&e.currentStyle&&e.currentStyle[r];return n}function nativeTestProps(e,t){var r=e.length;if("CSS"in window&&"supports"in window.CSS){for(;r--;)if(window.CSS.supports(domToCSS(e[r]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];r--;)n.push("("+domToCSS(e[r])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,r,n){function o(){s&&(delete mStyle.style,delete mStyle.modElem)}if(n=is(n,"undefined")?!1:n,!is(r,"undefined")){var i=nativeTestProps(e,r);if(!is(i,"undefined"))return i}for(var s,d,a,u,l,c=["modernizr","tspan","samp"];!mStyle.style&&c.length;)s=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,d=0;a>d;d++)if(u=e[d],l=mStyle.style[u],contains(u,"-")&&(u=cssToDOM(u)),mStyle.style[u]!==undefined){if(n||is(r,"undefined"))return o(),"pfx"==t?u:!0;try{mStyle.style[u]=r}catch(f){}if(mStyle.style[u]!=l)return o(),"pfx"==t?u:!0}return o(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,r){var n;for(var o in e)if(e[o]in t)return r===!1?e[o]:(n=t[e[o]],is(n,"function")?fnBind(n,r||t):n);return!1}function testPropsAll(e,t,r,n,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,n,o):(s=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(s,t,r))}var tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){tests.push({name:e,fn:t,options:r})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[];Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest);var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(r){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("strictmode",function(){"use strict";return!this}()),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(r){return!1}return e}),Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes,ModernizrProto.testAllProps=testPropsAll;var atRule=function(e){var t,r=prefixes.length,n=window.CSSRule;if("undefined"==typeof n)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in n)return"@"+e;for(var o=0;r>o;o++){var i=prefixes[o],s=i.toUpperCase()+"_"+t;if(s in n)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var prefixed=ModernizrProto.prefixed=function(e,t,r){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,r):testPropsAll(e,"pfx"))};Modernizr.addTest("matchmedia",!!prefixed("matchMedia",window)),Modernizr.addTest("xdomainrequest","XDomainRequest"in window),Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),testRunner(),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);