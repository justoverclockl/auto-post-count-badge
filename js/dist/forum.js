module.exports=function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(o){return t[o]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=11)}([,function(t,o,e){"use strict";function r(t,o){return(r=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function n(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,r(t,o)}e.d(o,"a",(function(){return n}))},function(t,o){t.exports=flarum.core.compat["forum/app"]},function(t,o){t.exports=flarum.core.compat["common/models/User"]},function(t,o){t.exports=flarum.core.compat["common/Model"]},,function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["forum/components/PostUser"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/components/Tooltip"]},,function(t,o,e){"use strict";e.r(o),e.d(o,"components",(function(){return r}));var r={};e.r(r),e.d(r,"PostCountBadge",(function(){return x}));var n=e(2),u=e.n(n),a=e(6),c=e(7),s=e.n(c),i=e(3),p=e.n(i),f=e(4),l=e.n(f),d=e(1),b=e(8),y=e.n(b),g=e(9),v=e.n(g),x=function(t){function o(){return t.apply(this,arguments)||this}return Object(d.a)(o,t),o.prototype.view=function(){var t=this.attrs.posts,o=this.attrs.userClass,e=this.attrs.label;return m("span",null,m(v.a,{text:u.a.translator.trans("justoverclock-auto-post-count-badge.forum.hasWritten",{count:t})},m("span",{className:"auto-badge"},m("i",{class:o+" autopost"}),e)))},o}(y.a);u.a.initializers.add("justoverclock/auto-post-count-badge",(function(){p.a.prototype.autoCountBadge=l.a.attribute("autoCountBadge"),p.a.prototype.autoCountBadgeLabel=l.a.attribute("autoCountBadgeLabel"),Object(a.extend)(s.a.prototype,"view",(function(t){var o=u.a.current.get("routeName");if("discussion"===o||"discussion.near"===o||"blogArticle"===o){var e=this.attrs.post;if(!e.user())return;var r=e.user().commentCount(),n=e.user().autoCountBadge(),a=e.user().autoCountBadgeLabel();if(""===n||""===a)return;t.children.push(m(x,{posts:r,userClass:n,label:a}))}}))}))}]);
//# sourceMappingURL=forum.js.map