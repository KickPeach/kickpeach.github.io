(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(98).concat([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"j",function(){return s}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"l",function(){return h}),n.d(e,"m",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"k",function(){return g});const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=a(t);return o.test(i)?t:i+".html"+n}function p(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function h(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:o}=n,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=s.sidebar||o.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,a);return n?n.map(e=>(function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const o=e.children||[];return 0===o.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},function(t,e,n){var r=n(98),i=n(109),o=n(110),s=n(113),a=n(116),u=function(t,e,n){var c,l,f,p,h=t&u.F,d=t&u.G,v=t&u.S,g=t&u.P,m=t&u.B,b=d?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,_=d?i:i[e]||(i[e]={}),x=_.prototype||(_.prototype={});for(c in d&&(n=e),n)f=((l=!h&&b&&void 0!==b[c])?b:n)[c],p=m&&l?a(f,r):g&&"function"==typeof f?a(Function.call,f):f,b&&s(b,c,f,t&u.U),_[c]!=f&&o(_,c,p),g&&x[c]!=f&&(x[c]=f)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){t.exports=!n(100)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(143)("wks"),i=n(115),o=n(98).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";var r=n(102),i=n(117)(3);r(r.P+r.F*!n(107)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(100);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},,function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(111),i=n(139);t.exports=n(103)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(112),i=n(137),o=n(138),s=Object.defineProperty;e.f=n(103)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(99);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(98),i=n(110),o=n(114),s=n(115)("src"),a=Function.toString,u=(""+a).split("toString");n(109).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||i(n,s,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(156);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(116),i=n(140),o=n(157),s=n(141),a=n(158);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=e||a;return function(e,a,d){for(var v,g,m=o(e),b=i(m),_=r(a,d,3),x=s(b.length),k=0,y=n?h(e,x):u?h(e,0):void 0;x>k;k++)if((p||k in b)&&(g=_(v=b[k],k,m),t))if(n)y[k]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:y.push(v)}else if(l)return!1;return f?-1:c||l?l:y}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){},function(t,e,n){var r=n(140),i=n(104);t.exports=function(t){return r(i(t))}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,function(t,e,n){t.exports=!n(103)&&!n(100)(function(){return 7!=Object.defineProperty(n(155)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(99);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(118);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(142),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(109),i=n(98),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(161)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){n(146)("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},function(t,e,n){"use strict";var r=n(110),i=n(113),o=n(100),s=n(104),a=n(105);t.exports=function(t,e,n){var u=a(t),c=n(s,u,""[t]),l=c[0],f=c[1];o(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,l),r(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){t.exports=n(171)},function(t,e,n){var r=n(120),i=n(141),o=n(175);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=i(u.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){n(146)("replace",2,function(t,e,n){return[function(r,i){"use strict";var o=t(this),s=null==r?void 0:r[e];return void 0!==s?s.call(r,o,i):n.call(String(o),r,i)},n]})},function(t,e,n){"use strict";var r=n(102),i=n(117)(1);r(r.P+r.F*!n(107)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";n.r(e);n(106);var r=n(101),i={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(153).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(151).default},methods:{isActive:r.e}},o=(n(198),n(2)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(150);function a(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function u(t,e,n,i,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(r.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,i,o,s+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,o=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,p=l.sidebarDepth,h=Object(r.e)(o,f.path),d="auto"===f.type?h||f.children.some(function(t){return Object(r.e)(o,f.basePath+"#"+t.slug)}):h,v=a(t,f.path,f.title||f.path,d),g=i.frontmatter.sidebarDepth||p||c.sidebarDepth||s.sidebarDepth,m=null==g?1:g,b=c.displayAllHeaders||s.displayAllHeaders;return"auto"===f.type?[v,u(t,f.children,f.basePath,o,m)]:(d||b)&&f.headers&&!r.d.test(f.path)?[v,u(t,Object(r.c)(f.headers),f.path,o,m)]:v}};n(199);var l={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(o.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return"page"===e.type&&Object(r.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(r.e)(this.$route,t.regularPath)}}},f=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=f.exports},,function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(193),n(2)),o=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=o.exports},,function(t,e,n){var r=n(99),i=n(98).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(104);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(159);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(99),i=n(160),o=n(105)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(118);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){t.exports=!1},function(t,e,n){"use strict";n(163)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var r=n(102),i=n(100),o=n(104),s=/"/g,a=function(t,e,n,r){var i=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var r=n(119);n.n(r).a},function(t,e,n){t.exports=n(166)},function(t,e,n){n(167),t.exports=n(0).parseInt},function(t,e,n){var r=n(8),i=n(168);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(3).parseInt,i=n(169).trim,o=n(144),s=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(s.test(n)?16:10))}:r},function(t,e,n){var r=n(8),i=n(20),o=n(11),s=n(144),a="["+s+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=o(function(){return!!s[t]()||"​"!="​"[t]()}),u=i[t]=a?e(f):s[t];n&&(i[n]=u),r(r.P+r.F*a,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e,n){"use strict";var r=n(102),i=n(117)(2);r(r.P+r.F*!n(107)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){n(172),t.exports=n(0).Object.assign},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(173)})},function(t,e,n){"use strict";var r=n(15),i=n(31),o=n(21),s=n(22),a=n(55),u=Object.assign;t.exports=!u||n(11)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=s(t),u=arguments.length,c=1,l=i.f,f=o.f;u>c;)for(var p,h=a(arguments[c++]),d=l?r(h).concat(l(h)):r(h),v=d.length,g=0;v>g;)f.call(h,p=d[g++])&&(n[p]=h[p]);return n}:u},function(t,e,n){"use strict";var r=n(102),i=n(148)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!n(107)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){var r=n(142),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){"use strict";n(177)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){var r=n(102),i=n(104),o=n(100),s=n(178),a="["+s+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=o(function(){return!!s[t]()||"​"!="​"[t]()}),u=i[t]=a?e(f):s[t];n&&(i[n]=u),r(r.P+r.F*a,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(121);n.n(r).a},function(t,e,n){"use strict";var r=n(122);n.n(r).a},function(t,e,n){var r=n(98),i=n(182),o=n(111).f,s=n(186).f,a=n(190),u=n(191),c=r.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(103)&&(!d||n(100)(function(){return h[n(105)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,r=a(t),o=void 0===e;return!n&&r&&t.constructor===c&&o?t:i(d?new l(r&&!o?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&o?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||o(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=s(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(113)(r,"RegExp",c)}n(192)("RegExp")},function(t,e,n){var r=n(99),i=n(183).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){var r=n(99),i=n(112),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(116)(Function.call,n(184).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){var r=n(185),i=n(139),o=n(120),s=n(138),a=n(114),u=n(137),c=Object.getOwnPropertyDescriptor;e.f=n(103)?c:function(t,e){if(t=o(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(187),i=n(189).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(114),i=n(120),o=n(148)(!1),s=n(188)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(143)("keys"),i=n(115);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(99),i=n(118),o=n(105)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(112);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(98),i=n(111),o=n(103),s=n(105)("species");t.exports=function(t){var e=r[t];o&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(123);n.n(r).a},function(t,e,n){"use strict";var r=n(124);n.n(r).a},function(t,e,n){"use strict";var r=n(125);n.n(r).a},function(t,e,n){"use strict";var r=n(126);n.n(r).a},function(t,e,n){"use strict";var r=n(127);n.n(r).a},function(t,e,n){"use strict";var r=n(128);n.n(r).a},function(t,e,n){"use strict";var r=n(129);n.n(r).a},function(t,e,n){"use strict";var r=n(130);n.n(r).a},function(t,e,n){"use strict";var r=n(131);n.n(r).a},function(t,e,n){"use strict";var r=n(132);n.n(r).a},,,,,function(t,e,n){"use strict";n.r(e);var r=n(32),i=n.n(r),o=(n(106),n(162),n(101)),s={props:{item:{required:!0}},computed:{link:function(){return Object(o.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?i()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:o.f,isMailto:o.g,isTel:o.h}},a=n(2),u=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,c={components:{NavLink:u},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(164),Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),f=n(165),p=n.n(f),h=(n(145),n(170),n(45)),d=n.n(h),v=n(147),g=n.n(v),m=(n(174),n(176),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],o=0;o<e.length&&!(i.length>=5);o++){var s=e[o];if(this.getPageLocalePath(s)===n&&this.isSearchable(s))if(r(s))i.push(s);else if(s.headers)for(var a=0;a<s.headers.length&&!(i.length>=5);a++){var u=s.headers[a];r(u)&&i.push(g()({},s,{path:s.path+"#"+u.slug,header:u}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=d()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),b=(n(179),Object(a.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),_=(n(180),Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),x=(n(181),n(49)),k=(n(149),n(150),{components:{NavLink:u,DropdownTransition:n(153).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),y=(n(194),{components:{NavLink:u,DropdownLink:Object(a.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&i()(e).length>1){var n=this.$page.path,r=this.$router.options.routes,o=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:i()(e).map(function(i){var s,a=e[i],u=o[i]&&o[i].label||a.lang;return a.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,i),r.some(function(t){return t.path===s})||(s=i)),{text:u,link:s}})};return[].concat(Object(x.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return g()(Object(o.k)(t),{items:(t.items||[]).map(o.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}}),$=(n(195),Object(a.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:_,NavLinks:$,SearchBox:b,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=p()(C(this.$el,"paddingLeft"))+p()(C(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(196),Object(a.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function O(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var o=r[i];if("page"===o.type&&o.path===decodeURIComponent(t.path))return r[i+n]}}var L={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(o.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(o.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,i=void 0===r?"":r,s=t.docsBranch,a=void 0===s?"master":s,u=t.docsRepo,c=void 0===u?e:u,l=Object(o.i)(this.$page.path);return o.a.test(l)?l+="README.md":l+=".md",c&&n?this.createEditLink(e,c,i,a,l):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){return/bitbucket.org/.test(t)?(o.j.test(e)?e:t).replace(o.a,"")+"/src"+"/".concat(r)+(n?"/"+n.replace(o.a,""):"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(o.j.test(e)?e:"https://github.com/".concat(e)).replace(o.a,"")+"/edit/".concat(r)+(n?"/"+n.replace(o.a,""):"")+i}}},j=(n(197),Object(a.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),E={name:"Sidebar",components:{SidebarLinks:n(151).default,NavLinks:$},props:["items"]},I=(n(200),{components:{Home:l,Page:j,Sidebar:Object(a.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),P=(n(201),n(202),Object(a.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=P.exports}])]);