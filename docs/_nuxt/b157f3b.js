(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(t,e,n){"use strict";var r=n(369),o=n(370);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},369:function(t,e,n){"use strict";var r=n(4),o=n(8),c=n(111),l=n(32),f=n(228),d=n(227),v=n(89),y=n(20),h=n(5),O=n(144),j=n(67),m=n(145);t.exports=function(t,e,n){var w=-1!==t.indexOf("Map"),k=-1!==t.indexOf("Weak"),S=w?"set":"add",x=o[t],_=x&&x.prototype,C=x,P={},E=function(t){var e=_[t];l(_,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(k&&!y(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return k&&!y(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(k&&!y(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof x||!(k||_.forEach&&!h((function(){(new x).entries().next()})))))C=n.getConstructor(e,t,w,S),f.REQUIRED=!0;else if(c(t,!0)){var z=new C,N=z[S](k?{}:-0,1)!=z,D=h((function(){z.has(1)})),R=O((function(t){new x(t)})),B=!k&&h((function(){for(var t=new x,e=5;e--;)t[S](e,e);return!t.has(-0)}));R||((C=e((function(e,n){v(e,C,t);var r=m(new x,e,C);return null!=n&&d(n,r[S],{that:r,AS_ENTRIES:w}),r}))).prototype=_,_.constructor=C),(D||B)&&(E("delete"),E("has"),w&&E("get")),(B||N)&&E(S),k&&_.clear&&delete _.clear}return P[t]=C,r({global:!0,forced:C!=x},P),j(C,t),k||n.setStrong(C,t,w),C}},370:function(t,e,n){"use strict";var r=n(26).f,o=n(78),c=n(142),l=n(66),f=n(89),d=n(227),v=n(171),y=n(143),h=n(24),O=n(228).fastKey,j=n(41),m=j.set,w=j.getterFor;t.exports={getConstructor:function(t,e,n,v){var y=t((function(t,r){f(t,y,e),m(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),j=w(e),k=function(t,e,n){var r,o,c=j(t),l=S(t,e);return l?l.value=n:(c.last=l={index:o=O(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},S=function(t,e){var n,r=j(t),o=O(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y.prototype,{clear:function(){for(var t=j(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=j(this),n=S(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),h?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=j(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(y.prototype,n?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return k(this,0===t?0:t,e)}}:{add:function(t){return k(this,t=0===t?0:t,t)}}),h&&r(y.prototype,"size",{get:function(){return j(this).size}}),y},setStrong:function(t,e,n){var r=e+" Iterator",o=w(e),c=w(r);v(t,e,(function(t,e){m(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),y(e)}}},371:function(t,e,n){"use strict";n(46),n(40),n(141),n(90),n(368),n(18),n(53),n(22),n(27),n(77),n(54),n(47),n(64),n(88);var r=n(2),o=(n(229),n(1)),c=n(65),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(y),offset:Object.keys(h),order:Object.keys(O)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},372:function(t,e,n){"use strict";n(23),n(46),n(40),n(141),n(368),n(53),n(22),n(27),n(55),n(77),n(54),n(64),n(88);var r=n(2),o=(n(229),n(1)),c=n(65),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.t)(r)]=e(),n}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:O}})),m=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:m}})),k=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},S=h("alignContent",(function(){return{type:String,default:null,validator:k}})),x={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(S)},_={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:k}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},395:function(t,e,n){"use strict";n.r(e);n(22),n(68);var r,o=n(16),c=n(146),l={data:function(){return{relay:c.a.relay}},components:{},methods:{proceed:(r=Object(o.a)(regeneratorRuntime.mark((function t(time){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(time),c.a.relay.timer=time,t.next=4,fetch(c.a.api_url+"/relay/"+c.a.relay.code,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:c.a.relay.category,timer:c.a.relay.timer})});case 4:return e=t.sent,t.next=7,e.json();case 7:c.a.relay=t.sent,this.$router.push({path:"/waiting"});case 9:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),go_back:function(){this.$router.back()}}},f=n(79),d=n(112),v=n.n(d),y=n(225),h=n(371),O=n(372),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("RELAY")]),t._v(" "),n("p",[t._v("Choose a difficulty level!")]),t._v(" "),n("v-btn",{attrs:{block:""},on:{click:function(e){return t.proceed(-1)}}},[t._v("\n        Zen - No timer\n      ")]),t._v(" "),n("v-btn",{attrs:{block:"",id:"mental"},on:{click:function(e){return t.proceed(30)}}},[t._v("\n        Chillin' - 30 minutes/challenge\n      ")]),t._v(" "),n("v-btn",{attrs:{block:"",id:"creative"},on:{click:function(e){return t.proceed(15)}}},[t._v("\n        Cruising - 15 minutes/challenge\n      ")]),t._v(" "),n("v-btn",{attrs:{block:"",id:"service"},on:{click:function(e){return t.proceed(5)}}},[t._v("\n        Blazing - 5 minutes/challenge\n      ")]),t._v(" "),n("v-btn",{attrs:{block:"",id:"random"},on:{click:function(e){return t.proceed(2)}}},[t._v("\n        Screaming - 2 minutes/challenge\n      ")]),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{color:"grey"},on:{click:t.go_back}},[t._v("\n      Go Back\n    ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:y.a,VCol:h.a,VRow:O.a})}}]);