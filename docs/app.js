var t,e;t=this,e=function(){return r={},n.m=o=[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t},r=n(1),a=n(3),o=(o(i,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(o,r){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var t=this.humanizer(this.typeSpeed),s=1;return!0===this.pause.status?void this.setPauseStatus(o,r,!0):void(this.timeout=setTimeout(function(){r=a.htmlParser.typeHtmlChars(o,r,i);var t,e=0,n=o.substr(r);if("^"===n.charAt(0)&&/^\^\d+/.test(n)&&(t=1,t+=(n=/\d+/.exec(n)[0]).length,e=parseInt(n),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),o=o.substring(0,r)+o.substring(r+t),i.toggleBlinking(!0)),"`"===n.charAt(0)){for(;"`"!==o.substr(r+s).charAt(0)&&!(r+ ++s>o.length););n=o.substring(0,r);o=n+o.substring(n.length+1,r+s)+o.substring(r+s+1),s--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),r>=o.length?i.doneTyping(o,r):i.keepTyping(o,r,s),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},e)},t))}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(n,o){var r=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){o=a.htmlParser.backSpaceHtmlChars(n,o,r);var t,e=n.substr(0,o);r.replaceText(e),r.smartBackspace&&((t=r.strings[r.arrayPos+1])&&e===t.substr(0,o)?r.stopNum=o:r.stopNum=0),o>r.stopNum?(o--,r.backspace(n,o)):o<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],o))},t)}else this.setPauseStatus(n,o,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&((this.cursorBlinking=t)?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),i);function i(t,e){(function(t){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")})(this),r.initializer.load(this,e,t),this.begin()}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=function(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t},i=n(2),u=(o=i)&&o.__esModule?o:{default:o},r=(r(s,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=a({},u.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var i=0;i<r;i+=1){var s=o[i];t.strings.push(s.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e,n="data-typed-js-css";t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+n+"]")&&((e=document.createElement("style")).type="text/css",e.setAttribute(n,!0),n="",t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e)))}}]),s);function s(){!function(t){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}r=new(e.default=r);e.initializer=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(o,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;n=t.substr(e).charAt(0);if("<"===n||"&"===n){for(var o="<"===n?">":";";t.substr(e+1).charAt(0)!==o&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;n=t.substr(e).charAt(0);if(">"===n||";"===n){for(var o=">"===n?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),o);function o(){!function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n=new(e.default=n);e.htmlParser=n}],n.c=r,n.p="",n(0);function n(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return o[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var o,r},"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e();"use strict";t=this,e=function(t){function g(t){return{width:(t=t.getBoundingClientRect()).width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function m(t){return"[object Window]"!==t.toString()?(t=t.ownerDocument)&&t.defaultView||window:t}function y(t){return{scrollLeft:(t=m(t)).pageXOffset,scrollTop:t.pageYOffset}}function b(t){return t instanceof m(t).Element||t instanceof Element}function v(t){return t instanceof m(t).HTMLElement||t instanceof HTMLElement}function w(t){return t?(t.nodeName||"").toLowerCase():null}function O(t){return((b(t)?t.ownerDocument:t.document)||window.document).documentElement}function x(t){return g(O(t)).left+y(t).scrollLeft}function k(t){return m(t).getComputedStyle(t)}function C(t){return t=k(t),/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function j(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function P(t){return"html"===w(t)?t:t.assignedSlot||t.parentNode||t.host||O(t)}function E(t,e){void 0===e&&(e=[]);var n=function t(e){return 0<=["html","body","#document"].indexOf(w(e))?e.ownerDocument.body:v(e)&&C(e)?e:t(P(e))}(t);t="body"===w(n);var o=m(n),n=t?[o].concat(o.visualViewport||[],C(n)?n:[]):n;return e=e.concat(n),t?e:e.concat(E(P(n)))}function o(t){if(!v(t)||"fixed"===k(t).position)return null;if(t=t.offsetParent){var e=O(t);if("body"===w(t)&&"static"===k(t).position&&"static"!==k(e).position)return e}return t}function T(t){for(var e=m(t),n=o(t);n&&0<=["table","td","th"].indexOf(w(n))&&"static"===k(n).position;)n=o(n);if(n&&"body"===w(n)&&"static"===k(n).position)return e;if(!n)t:{for(t=P(t);v(t)&&["html","body"].indexOf(w(t))<0;){if("none"!==(n=k(t)).transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange){n=t;break t}t=t.parentNode}n=null}return n||e}function S(t){return t.split("-")[0]}function M(t,e){var n,o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if((n=o)&&(n=o instanceof(n=m(o).ShadowRoot)||o instanceof ShadowRoot),n)do{if(e&&t.isSameNode(e))return!0}while(e=e.parentNode||e.host);return!1}function D(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function L(t,e){var n,o,r,i;return"viewport"===e?(e=m(t),o=O(t),e=e.visualViewport,n=o.clientWidth,o=o.clientHeight,i=r=0,e&&(n=e.width,o=e.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=e.offsetLeft,i=e.offsetTop)),t=D(t={width:n,height:o,x:r+x(t),y:i})):v(e)?((t=g(e)).top+=e.clientTop,t.left+=e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top):(i=O(t),t=O(i),r=y(i),e=i.ownerDocument.body,n=Math.max(t.scrollWidth,t.clientWidth,e?e.scrollWidth:0,e?e.clientWidth:0),o=Math.max(t.scrollHeight,t.clientHeight,e?e.scrollHeight:0,e?e.clientHeight:0),i=-r.scrollLeft+x(i),r=-r.scrollTop,"rtl"===k(e||t).direction&&(i+=Math.max(t.clientWidth,e?e.clientWidth:0)-n),t=D({width:n,height:o,x:i,y:r})),t}function B(t){return 0<=["top","bottom"].indexOf(t)?"x":"y"}function A(t){var e=t.reference,n=t.element,o=(t=t.placement)?S(t):null;t=t?t.split("-")[1]:null;var r=e.x+e.width/2-n.width/2,i=e.y+e.height/2-n.height/2;switch(o){case"top":r={x:r,y:e.y-n.height};break;case"bottom":r={x:r,y:e.y+e.height};break;case"right":r={x:e.x+e.width,y:i};break;case"left":r={x:e.x-n.width,y:i};break;default:r={x:e.x,y:e.y}}if(null!=(o=o?B(o):null))switch(i="y"===o?"height":"width",t){case"start":r[o]-=e[i]/2-n[i]/2;break;case"end":r[o]+=e[i]/2-n[i]/2}return r}function q(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function H(n,t){return t.reduce(function(t,e){return t[e]=n,t},{})}function I(t,e){void 0===e&&(e={}),e=void 0===(e=(l=e).placement)?t.placement:e;var n,o,r,i,s,a,u=void 0===(p=l.boundary)?"clippingParents":p,c=void 0===(p=l.rootBoundary)?"viewport":p,p=void 0===(p=l.elementContext)?"popper":p,f=void 0!==(h=l.altBoundary)&&h,l=q("number"!=typeof(l=void 0===(l=l.padding)?0:l)?l:H(l,W)),d=t.elements.reference,h=t.rects.popper;n=b(f=t.elements[f?"popper"===p?"reference":"popper":p])?f:f.contextElement||O(t.elements.popper),r=c,o="clippingParents"===(o=u)?(s=E(P(i=n)),b(a=0<=["absolute","fixed"].indexOf(k(i).position)&&v(i)?T(i):i)?s.filter(function(t){return b(t)&&M(t,a)&&"body"!==w(t)}):[]):[].concat(o),(r=(r=[].concat(o,[r])).reduce(function(t,e){return e=L(n,e),t.top=Math.max(e.top,t.top),t.right=Math.min(e.right,t.right),t.bottom=Math.min(e.bottom,t.bottom),t.left=Math.max(e.left,t.left),t},L(n,r[0]))).width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,u=r,f=A({reference:c=g(d),element:h,strategy:"absolute",placement:e}),h=D(Object.assign(Object.assign({},h),f)),c="popper"===p?h:c;var m,y={top:u.top-c.top+l.top,bottom:c.bottom-u.bottom+l.bottom,left:u.left-c.left+l.left,right:c.right-u.right+l.right};return t=t.modifiersData.offset,"popper"===p&&t&&(m=t[e],Object.keys(y).forEach(function(t){var e=0<=["right","bottom"].indexOf(t)?1:-1,n=0<=["top","bottom"].indexOf(t)?"y":"x";y[t]+=m[n]*e})),y}function i(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(t){return!(t&&"function"==typeof t.getBoundingClientRect)})}function e(t){void 0===t&&(t={});var e=t.defaultModifiers,d=void 0===e?[]:e,h=void 0===(t=t.defaultOptions)?s:t;return function(a,u,e){function c(){f.forEach(function(t){return t()}),f=[]}void 0===e&&(e=h);var n,o,p={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},s),h),modifiersData:{},elements:{reference:a,popper:u},attributes:{},styles:{}},f=[],r=!1,l={state:p,setOptions:function(t){return c(),p.options=Object.assign(Object.assign(Object.assign({},h),p.options),t),p.scrollParents={reference:b(a)?E(a):a.contextElement?E(a.contextElement):[],popper:E(u)},s=[].concat(d,p.options.modifiers).reduce(function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign(Object.assign(Object.assign({},n),e),{},{options:Object.assign(Object.assign({},n.options),e.options),data:Object.assign(Object.assign({},n.data),e.data)}):e,t},{}),e=e=Object.keys(s).map(function(t){return s[t]}),n=new Map,o=new Set,r=[],e.forEach(function(t){n.set(t.name,t)}),e.forEach(function(t){o.has(t.name)||function e(t){o.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){o.has(t)||(t=n.get(t))&&e(t)}),r.push(t)}(t)}),i=r,t=z.reduce(function(t,e){return t.concat(i.filter(function(t){return t.phase===e}))},[]),p.orderedModifiers=t.filter(function(t){return t.enabled}),p.orderedModifiers.forEach(function(t){var e=t.name,n=void 0===(n=t.options)?{}:n;"function"==typeof(t=t.effect)&&(e=t({state:p,name:e,instance:l,options:n}),f.push(e||function(){}))}),l.update();var e,n,o,r,i,s},forceUpdate:function(){if(!r){var t,e,n=p.elements,o=n.reference;if(i(o,n=n.popper))for(p.rects={reference:function(t,e,n){void 0===n&&(n=!1);var o=O(e);t=g(t);var r=v(e),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return!r&&(r||n)||("body"===w(e)&&!C(o)||(i=e!==m(e)&&v(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:y(e)),v(e)?((s=g(e)).x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=x(o))),{x:t.left+i.scrollLeft-s.x,y:t.top+i.scrollTop-s.y,width:t.width,height:t.height}}(o,T(n),"fixed"===p.options.strategy),popper:j(n)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(t){return p.modifiersData[t.name]=Object.assign({},t.data)}),o=0;o<p.orderedModifiers.length;o++)!0===p.reset?(p.reset=!1,o=-1):(n=(e=p.orderedModifiers[o]).fn,t=void 0===(t=e.options)?{}:t,e=e.name,"function"==typeof n&&(p=n({state:p,options:t,name:e,instance:l})||p))}},update:(n=function(){return new Promise(function(t){l.forceUpdate(),t(p)})},function(){return o=o||new Promise(function(t){Promise.resolve().then(function(){o=void 0,t(n())})})}),destroy:function(){c(),r=!0}};return i(a,u)&&l.setOptions(e).then(function(t){!r&&e.onFirstUpdate&&e.onFirstUpdate(t)}),l}}function r(t){var e=t.popper,n=t.popperRect,o=t.placement,r=t.offsets,i=t.position,s=t.gpuAcceleration,a=t.adaptive,u=t=t.roundOffsets?(t=window.devicePixelRatio||1,{x:Math.round(r.x*t)/t||0,y:Math.round(r.y*t)/t||0}):r;t=void 0===(t=u.x)?0:t,u=void 0===(u=u.y)?0:u;var c,p=r.hasOwnProperty("x"),r=r.hasOwnProperty("y"),f="left",l="top",d=window;return a&&((c=T(e))===m(e)&&(c=O(e)),"top"===o&&(l="bottom",u-=c.clientHeight-n.height,u*=s?1:-1),"left"===o&&(f="right",t-=c.clientWidth-n.width,t*=s?1:-1)),e=Object.assign({position:i},a&&h),s?Object.assign(Object.assign({},e),{},((s={})[l]=r?"0":"",s[f]=p?"0":"",s.transform=(d.devicePixelRatio||1)<2?"translate("+t+"px, "+u+"px)":"translate3d("+t+"px, "+u+"px, 0)",s)):Object.assign(Object.assign({},e),{},((e={})[l]=r?u+"px":"",e[f]=p?t+"px":"",e.transform="",e))}function N(t){return t.replace(/left|right|bottom|top/g,function(t){return V[t]})}function R(t){return t.replace(/start|end/g,function(t){return U[t]})}function a(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function u(e){return["top","right","bottom","left"].some(function(t){return 0<=e[t]})}var W=["top","bottom","right","left"],_=W.reduce(function(t,e){return t.concat([e+"-start",e+"-end"])},[]),F=[].concat(W,["auto"]).reduce(function(t,e){return t.concat([e,e+"-start",e+"-end"])},[]),z="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),s={placement:"bottom",modifiers:[],strategy:"absolute"},c={passive:!0},n={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=(t=t.options).scroll,r=void 0===o||o,i=void 0===(t=t.resize)||t,s=m(e.elements.popper),a=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&a.forEach(function(t){t.addEventListener("scroll",n.update,c)}),i&&s.addEventListener("resize",n.update,c),function(){r&&a.forEach(function(t){t.removeEventListener("scroll",n.update,c)}),i&&s.removeEventListener("resize",n.update,c)}},data:{}},p={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state;e.modifiersData[t.name]=A({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},h={top:"auto",right:"auto",bottom:"auto",left:"auto"},f={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state;t=void 0===(t=(o=t.options).gpuAcceleration)||t;var n=void 0===(n=o.adaptive)||n,o=void 0===(o=o.roundOffsets)||o;t={placement:S(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:t},null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),r(Object.assign(Object.assign({},t),{},{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:n,roundOffsets:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),r(Object.assign(Object.assign({},t),{},{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-placement":e.placement})},data:{}},l={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var r=t.state;Object.keys(r.elements).forEach(function(t){var e=r.styles[t]||{},n=r.attributes[t]||{},o=r.elements[t];v(o)&&w(o)&&(Object.assign(o.style,e),Object.keys(n).forEach(function(t){var e=n[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)}))})},effect:function(t){var o=t.state,r={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,r.popper),o.elements.arrow&&Object.assign(o.elements.arrow.style,r.arrow),function(){Object.keys(o.elements).forEach(function(t){var e=o.elements[t],n=o.attributes[t]||{};t=Object.keys((o.styles.hasOwnProperty(t)?o.styles:r)[t]).reduce(function(t,e){return t[e]="",t},{}),v(e)&&w(e)&&(Object.assign(e.style,t),Object.keys(n).forEach(function(t){e.removeAttribute(t)}))})}},requires:["computeStyles"]},d={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var s=t.state,e=t.name,a=void 0===(t=t.options.offset)?[0,0]:t,n=(o=(t=F.reduce(function(t,e){var n=s.rects,o=S(e),r=0<=["left","top"].indexOf(o)?-1:1,n=(n=(i="function"==typeof a?a(Object.assign(Object.assign({},n),{},{placement:e})):a)[0])||0,i=((i=i[1])||0)*r,o=0<=["left","right"].indexOf(o)?{x:i,y:n}:{x:n,y:i};return t[e]=o,t},{}))[s.placement]).x,o=o.y;null!=s.modifiersData.popperOffsets&&(s.modifiersData.popperOffsets.x+=n,s.modifiersData.popperOffsets.y+=o),s.modifiersData[e]=t}},V={left:"right",right:"left",bottom:"top",top:"bottom"},U={start:"end",end:"start"},Y={name:"flip",enabled:!0,phase:"main",fn:function(t){var n=t.state,e=t.options;if(t=t.name,!n.modifiersData[t]._skip){var o=void 0===(o=e.mainAxis)||o,r=void 0===(r=e.altAxis)||r,i=e.fallbackPlacements,s=e.padding,a=e.boundary,u=e.rootBoundary,c=e.altBoundary,p=void 0===(l=e.flipVariations)||l,f=e.allowedAutoPlacements,l=S(e=n.options.placement),i=i||(l!==e&&p?function(t){if("auto"===S(t))return[];var e=N(t);return[R(t),e,R(e)]}(e):[N(e)]),d=[e].concat(i).reduce(function(t,e){return t.concat("auto"===S(e)?function(n,t){void 0===t&&(t={});var o=t.boundary,r=t.rootBoundary,i=t.padding,e=t.flipVariations,s=t.allowedAutoPlacements,a=void 0===s?F:s,u=t.placement.split("-")[1];0===(e=(t=u?e?_:_.filter(function(t){return t.split("-")[1]===u}):W).filter(function(t){return 0<=a.indexOf(t)})).length&&(e=t);var c=e.reduce(function(t,e){return t[e]=I(n,{placement:e,boundary:o,rootBoundary:r,padding:i})[S(e)],t},{});return Object.keys(c).sort(function(t,e){return c[t]-c[e]})}(n,{placement:e,boundary:a,rootBoundary:u,padding:s,flipVariations:p,allowedAutoPlacements:f}):e)},[]),e=n.rects.reference;i=n.rects.popper;var h=new Map;l=!0;for(var m=d[0],y=0;y<d.length;y++){var g=d[y],b=S(g),v="start"===g.split("-")[1],w=0<=["top","bottom"].indexOf(b),O=w?"width":"height",x=I(n,{placement:g,boundary:a,rootBoundary:u,altBoundary:c,padding:s}),v=w?v?"right":"left":v?"bottom":"top";if(e[O]>i[O]&&(v=N(v)),O=N(v),w=[],o&&w.push(x[b]<=0),r&&w.push(x[v]<=0,x[O]<=0),w.every(function(t){return t})){m=g,l=!1;break}h.set(g,w)}if(l)for(o=function(e){var t=d.find(function(t){if(t=h.get(t))return t.slice(0,e).every(function(t){return t})});if(t)return m=t,"break"},r=p?3:1;0<r&&"break"!==o(r);r--);n.placement!==m&&(n.modifiersData[t]._skip=!0,n.placement=m,n.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},X={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options;t=t.name;var o=void 0===(r=n.mainAxis)||r,r=void 0!==(r=n.altAxis)&&r,i=void 0===(i=n.tether)||i,s=void 0===(a=n.tetherOffset)?0:a,n=I(e,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),a=S(e.placement),u=e.placement.split("-")[1],c=!u,p=B(a);a="x"===p?"y":"x";var f,l,d,h,m,y,g,b,v=e.modifiersData.popperOffsets,w=e.rects.reference,O=e.rects.popper,x="function"==typeof s?s(Object.assign(Object.assign({},e.rects),{},{placement:e.placement})):s,s={x:0,y:0};v&&(o&&(g="y"===p?"top":"left",b="y"===p?"bottom":"right",f="y"===p?"height":"width",o=v[p],l=v[p]+n[g],d=v[p]-n[b],h=i?-O[f]/2:0,m=("start"===u?w:O)[f],u="start"===u?-O[f]:-w[f],O=e.elements.arrow,O=i&&O?j(O):{width:0,height:0},g=(y=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0})[g],b=y[b],O=Math.max(0,Math.min(w[f],O[f])),m=c?w[f]/2-h-O-g-x:m-O-g-x,c=c?-w[f]/2+h+O+b+x:u+O+b+x,x=e.elements.arrow&&T(e.elements.arrow),w=e.modifiersData.offset?e.modifiersData.offset[e.placement][p]:0,x=v[p]+m-w-(x?"y"===p?x.clientTop||0:x.clientLeft||0:0),c=v[p]+c-w,i=Math.max(i?Math.min(l,x):l,Math.min(o,i?Math.max(d,c):d)),v[p]=i,s[p]=i-o),r&&(r=v[a],i=Math.max(r+n["x"===p?"top":"left"],Math.min(r,r-n["x"===p?"bottom":"right"])),v[a]=i,s[a]=i-r),e.modifiersData[t]=s)},requiresIfExists:["offset"]},G={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e=t.state;t=t.name;var n,o,r,i,s,a=e.elements.arrow,u=e.modifiersData.popperOffsets,c=S(e.placement),p=B(c);c=0<=["left","right"].indexOf(c)?"height":"width",a&&u&&(n=e.modifiersData[t+"#persistent"].padding,o=j(a),r="y"===p?"top":"left",i="y"===p?"bottom":"right",s=e.rects.reference[c]+e.rects.reference[p]-u[p]-e.rects.popper[c],u=u[p]-e.rects.reference[p],s=(a=(a=T(a))?"y"===p?a.clientHeight||0:a.clientWidth||0:0)/2-o[c]/2+(s/2-u/2),c=Math.max(n[r],Math.min(s,a-o[c]-n[i])),e.modifiersData[t]=((t={})[p]=c,t.centerOffset=c-s,t))},effect:function(t){var e=t.state,n=t.options;t=t.name;var o=void 0===(o=n.element)?"[data-popper-arrow]":o,n=void 0===(n=n.padding)?0:n;null==o||("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&M(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[t+"#persistent"]={padding:q("number"!=typeof n?n:H(n,W))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},J={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state;t=t.name;var n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=I(e,{elementContext:"reference"}),s=I(e,{altBoundary:!0}),n=a(i,n),o=a(s,o,r),r=u(n),s=u(o);e.modifiersData[t]={referenceClippingOffsets:n,popperEscapeOffsets:o,isReferenceHidden:r,hasPopperEscaped:s},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-reference-hidden":r,"data-popper-escaped":s})}},K=e({defaultModifiers:[n,p,f,l]}),Q=[n,p,f,l,d,Y,X,G,J],Z=e({defaultModifiers:Q});t.applyStyles=l,t.arrow=G,t.computeStyles=f,t.createPopper=Z,t.createPopperLite=K,t.defaultModifiers=Q,t.detectOverflow=I,t.eventListeners=n,t.flip=Y,t.hide=J,t.offset=d,t.popperGenerator=e,t.popperOffsets=p,t.preventOverflow=X,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Popper={}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("h1"),e=t.innerText,n=document.querySelector("h2"),o=n.innerText;t.innerText="",n.innerText="",new Typed("h1",{strings:[e],showCursor:!1,typeSpeed:75,onComplete:function(){new Typed("h2",{strings:[o],showCursor:!1,typeSpeed:25,backSpeed:0,backDelay:3e3,loop:!0})}});var r,i,s,a,u;r="#link-google-play",i="#qr-code-google-play",s="left-start",a=document.querySelector(r),u=document.querySelector(i),Popper.createPopper(a,u,{placement:s}),["mouseenter","focus"].forEach(function(t){return a.addEventListener(t,function(){return u.setAttribute("data-show","")})}),["mouseleave","blur"].forEach(function(t){return a.addEventListener(t,function(){return u.removeAttribute("data-show")})})});