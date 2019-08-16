parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FuMJ":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u={behaviourKey:"behaviours"},c=function(e){if(!e)return[];try{e=JSON.parse(e)}catch(t){"object"!=a(e=e)&&(e=[e])}return e};function l(e,t){var r=c(e.dataset[t.behaviourKey]);return t.behaviours&&(r=(r||[]).concat(t.behaviours)),r}function f(e,t){if(null==e){var r="data-".concat(t.behaviourKey);o=document.querySelectorAll("[".concat(r,"]"))}else if(e instanceof HTMLElement)o=[e];else{if("string"!=typeof e)throw"No compatible selector or DOM node given to Freud.init";var o=document.querySelectorAll(e)}return o}var s=function(){function e(){o(this,e),this.behaviours={}}return i(e,[{key:"init",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f(r,o=t({},u,{},o))||[];return n.forEach(function(r){var n=l(r,o),i=t({},o,{},r.dataset);n.forEach(function(t){e.behaviours[t]&&(r.dataset["loaded_behaviour_".concat(t)]||(r.dataset["loaded_behaviour_".concat(t)]=!0,new e.behaviours[t](r,i)))})}),n}},{key:"register",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e)throw"Freud.register called without a behaviour or name";if("function"==typeof e){var r=e.name;t=e}else{if(!t||"function"!=typeof t)throw"Freud.register called without a behaviour or behaviour type is invalid";r=e;t=t}this.behaviours[r]=t}},{key:"ready",value:function(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}}]),e}(),b=new s;exports.default=b;
},{}]},{},["FuMJ"], null)
//# sourceMappingURL=/freud.js.map