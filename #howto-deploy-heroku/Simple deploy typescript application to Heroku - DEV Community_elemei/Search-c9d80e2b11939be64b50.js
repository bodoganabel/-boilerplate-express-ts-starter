(window.webpackJsonp=window.webpackJsonp||[]).push([[10,103],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),o=(n(91),n(2)),c=n(4),i=n(1),a=n.n(i),u=n(13),s=n(17),l=Object(c.e)((function(e,t){var n=e.searchTerm,o=e.onSearch,c=e.onSubmitSearch;return Object(r.h)("form",{action:"/search",acceptCharset:"UTF-8",method:"get",onSubmit:c},Object(r.h)("input",{name:"utf8",type:"hidden",value:"\u2713"}),Object(r.h)("input",{ref:t,className:"crayons-header--search-input crayons-textfield",type:"text",name:"q",placeholder:"Search...",autoComplete:"off","aria-label":"search",onKeyDown:o,value:n}))}));function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}l.propTypes={searchTerm:a.a.string.isRequired,onSearch:a.a.func.isRequired,onSubmitSearch:a.a.func.isRequired};var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,o,c=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),v(b(t=c.call(this,e)),"enableSearchPageListener",(function(){t.enableSearchPageChecker=!0})),v(b(t),"hasKeyModifiers",(function(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey})),v(b(t),"submit",(function(e){u.hasInstantClick&&e.preventDefault()})),v(b(t),"minimizeHeader",(function(e){e.preventDefault(),document.body.classList.toggle("zen-mode")})),v(b(t),"focusOnSearchBox",(function(e){e.preventDefault(),document.body.classList.remove("zen-mode");var n=t.searchInputRef.current;n.focus(),n.select()})),t.enableSearchPageChecker=!0,t.syncSearchUrlWithInput=t.syncSearchUrlWithInput.bind(b(t)),t.searchInputRef=Object(r.createRef)(null),t}return t=i,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.searchTerm,r=t.setSearchTerm;!function t(){e.enableSearchPageChecker&&""!==n&&null===/^http(s)?:\/\/[^/]+\/search/.exec(window.location.href)&&r(""),setTimeout(t,500)}()}},{key:"syncSearchUrlWithInput",value:function(){var e=this.props.setSearchTerm,t=Object(u.getSearchTermFromUrl)(window.location.search);this.searchInputRef.current.value=t,e(t)}},{key:"componentDidMount",value:function(){InstantClick.on("change",this.enableSearchPageListener),window.addEventListener("popstate",this.syncSearchUrlWithInput)}},{key:"search",value:function(e,t){var n=this.props.searchTerm;this.enableSearchPageChecker=!1,Object(u.hasInstantClick)()&&"Enter"===e&&n!==t&&((0,this.props.setSearchTerm)(t),Object(u.preloadSearchResults)({searchTerm:t}),Object(u.displaySearchResults)({searchTerm:t}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.globalKeysListener),window.removeEventListener("popstate",this.syncSearchUrlWithInput),InstantClick.off&&InstantClick.off("change",this.enableSearchPageListener)}},{key:"render",value:function(e){var t,n=this,o=e.searchTerm;return Object(r.h)(r.Fragment,null,Object(r.h)(s.a,{shortcuts:(t={},v(t,"/",this.focusOnSearchBox),v(t,"Digit0",this.minimizeHeader),t)}),Object(r.h)(l,{searchTerm:o,onSearch:function(e){var t=e.key,r=e.target.value;n.search(t,r)},onSubmitSearch:this.submit,ref:this.searchInputRef}))}}])&&h(t.prototype,n),o&&h(t,o),i}(r.Component);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return c}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(){var e=g(Object(o.j)((function(){return Object(u.getSearchTermFromUrl)(location.search)})),2),t=e[0],n=e[1],i=g(Object(o.j)(null),2),a=i[0],s=i[1];function l(e){var t=e.detail.querystring,r=Object(u.getSearchTermFromUrl)(t),o=document.getElementById("mobile-search-container");if(a&&o!==a&&Object(c.f)(a),o){var i=o.querySelector("form");i&&o.removeChild(i)}s(o),n(r)}return Object(o.d)((function(){return window.addEventListener("syncSearchForms",l),function(){window.removeEventListener("syncSearchForms",l)}})),Object(r.h)(c.a,null,Object(r.h)(O,{searchTerm:t,setSearchTerm:n}),a&&Object(c.d)(Object(r.h)(O,{searchTerm:t,setSearchTerm:n}),a))}O.propTypes={searchTerm:a.a.string.isRequired,setSearchTerm:a.a.func.isRequired},document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("header-search");Object(r.render)(Object(r.h)(w,null),e)}))},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=["headers","body","method","csrfToken"];function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t,n,r,o,c,i){try{var a=e[c](i),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function i(e){u(c,r,o,i,a,"next",e)}function a(e){u(c,r,o,i,a,"throw",e)}i(void 0)}))}}function l(e){return f.apply(this,arguments)}function f(){return(f=s((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,o=t.body,i=t.method,u=void 0===i?"GET":i,s=t.csrfToken,l=void 0===s?yield getCsrfToken():s,f=a(t,r),h={body:o&&"string"!==typeof o?JSON.stringify(o):o},p=c(c({method:u,headers:c({Accept:"application/json","X-CSRF-Token":l,"Content-Type":"application/json"},n),credentials:"same-origin"},h),f);return fetch(e,p)}))).apply(this,arguments)}},13:function(e,t,n){"use strict";n.r(t),n.d(t,"hasInstantClick",(function(){return i})),n.d(t,"displaySearchResults",(function(){return u})),n.d(t,"getSearchTermFromUrl",(function(){return s})),n.d(t,"preloadSearchResults",(function(){return l})),n.d(t,"fetchSearch",(function(){return f}));var r=n(8);function o(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n=e.replace(/[[\]]/g,"\\$&"),r=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}(e,t);return n?"&".concat(e,"=").concat(n):""}function c(e){return o("filters",e)}function i(){return"undefined"!==typeof instantClick}function a(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function u(e){var t,n=e.searchTerm,r=e.location,i=void 0===r?window.location:r,u=i.origin,s=a(n),l=c(i.href),f=o("sort_by",t=i.href)+o("sort_direction",t);InstantClick.display("".concat(u,"/search?q=").concat(s).concat(l).concat(f))}function s(e){var t,n=new URLSearchParams(e),r=null!==(t=filterXSS(n.get("q")))&&void 0!==t?t:"",o=document.createElement("div");return o.innerHTML=r,null!==o.firstChild?o.firstChild.nodeValue:r}function l(e){var t=e.searchTerm,n=e.location,r=void 0===n?window.location:n,o=a(t.replace(/^[ ]+|[ ]+$/g,"")),i="".concat(r.origin,"/search?q=").concat(o).concat(c(r.href));InstantClick.preload(i)}function f(e,t){var n=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){t.append("".concat(n,"[]"),e)})):t.append(n,r)})),t.toString()}(t);return Object(r.b)("/search/".concat(e,"?").concat(n)).then((function(e){return e.json()}))}},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return m}));var r=n(2),o=n(1),c=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return c}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){if(e instanceof HTMLElement===!1)return!1;var t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n&&"checkbox"!==n&&"radio"!==n||e.isContentEditable}var y=function(e,t,n,r){var o=n&&n.length>0?r["".concat(n.join("~"),"~").concat(e.code)]:r["".concat(t).concat(e.code)]||r["".concat(t).concat(e.key.toLowerCase())];return o?(o(e),[]):t||"Shift"===e.key?[]:[].concat(l(n),[e.code])},d={timeout:0};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(r.j)(e),c=s(o,1),i=c[0],u=Object(r.j)([]),l=s(u,2),f=l[0],h=l[1],b=Object(r.j)(a(a({},d),n)),m=s(b,2),v=m[0],O=m[1];Object(r.d)((function(){var e={};"number"===typeof n.timeout&&(e.timeout=n.timeout),O(a(a({},d),e))}),[n.timeout]),Object(r.d)((function(){if(!(f.length<=0)){var e=window.setTimeout((function(){clearTimeout(e),h([])}),v.timeout);return function(){return clearTimeout(e)}}}),[f.length,v.timeout]),Object(r.d)((function(){if(i&&0!==Object.keys(i).length){var e=function(e){if(!e.defaultPrevented){var t="".concat(e.ctrlKey||e.metaKey?"ctrl+":"").concat(e.altKey?"alt+":"").concat((e.ctrlKey||e.metaKey||e.altKey)&&e.shiftKey?"shift+":"");if(!(e.target instanceof Node&&p(e.target))||t){var n=y(e,t,f,i);h(n)}}};return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}}),[f,i,t])}function m(e){return b(e.shortcuts,e.eventTarget,e.options),null}m.propTypes={shortcuts:c.a.object.isRequired,options:c.a.shape({timeout:c.a.number}),eventTarget:c.a.instanceOf(Element)},m.defaultProps={shortcuts:{},options:{},eventTarget:window}},8:function(e,t,n){"use strict";function r(e){if(e.ok)return e;try{e.json().then((function(e){throw new Error(e.error)}))}catch(t){throw t instanceof SyntaxError?new Error(e.statusText):t}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o.a}));var o=n(12)}},[[104,47,93]]]);
//# sourceMappingURL=Search-c9d80e2b11939be64b50.chunk.js.map