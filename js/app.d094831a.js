(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/funbox-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19a3":function(t,e,a){"use strict";var s=a("22d8"),r=a.n(s);r.a},"22d8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"shadow"}),a("div",{staticClass:"container"},[a("Title"),a("CardContainer",{attrs:{products:t.products}})],1)])},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card_container"},t._l(t.products,(function(t){return a("Card",{key:t.name+t.mass,attrs:{product:t,disabled:!t.available}})})),1)},i=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card",style:"border-color: "+t.mainColor+"; cursor: "+(t.disabled?"default;":"pointer;"),on:{click:t.handleSelection,mouseenter:function(e){t.hover=!t.disabled&&!0},mouseleave:function(e){t.hover=!1}}},[s("svg",{staticClass:"card__border"},[s("path",{style:"fill-opacity:0;stroke:"+t.mainColor+";stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1",attrs:{d:"M48 2L2 50v418.74a9.26 9.26 45 009.26 9.26h297.48a9.26 9.26 135 009.26-9.26V11.26A9.26 9.26 45 00308.74 2z"}})]),t.hover&&t.selected?s("p",{staticClass:"card__top",style:"color: "+t.mainColor+";"},[t._v(" Котэ не одобряет? ")]):s("p",{staticClass:"card__top",style:t.disabled&&"opacity: 0.5;"},[t._v(" Сказочное заморское яство ")]),s("h2",{staticClass:"card__name",style:t.disabled&&"opacity: 0.5;"},[t._v(" Нямушка ")]),s("h3",{staticClass:"card__taste",style:t.disabled&&"opacity: 0.5;"},[t._v(" "+t._s(this.product.name)+" ")]),s("p",{staticClass:"card__text",style:t.disabled&&"opacity: 0.5;"},[t._v(" "+t._s(this.product.portions)+" порций ")]),s("p",{staticClass:"card__text",style:t.disabled&&"opacity: 0.5;"},[t._v(" "+t._s(this.product.gift)+" в подарок ")]),t.product.customerIsHappy?s("p",{staticClass:"card__text",style:t.disabled&&"opacity: 0.5;"},[t._v(" Зачазик доволен ")]):t._e(),s("img",{staticClass:"card__pic",style:t.disabled&&"opacity: 0.5;",attrs:{src:a("68ef"),alt:"cat picture"}}),s("div",{staticClass:"card__circle",style:"background: "+t.mainColor+";"},[s("p",{staticClass:"card__circle__weight"},[t._v(t._s(this.product.mass))]),s("p",{staticClass:"card__circle__kg"},[t._v("кг")])])]),s("p",{staticClass:"description"},[t.selected||t.disabled?t._e():s("span",[t._v(" Чего сидишь? Порадуй котэ, "),s("button",{style:"color: "+t.mainColor,on:{mouseenter:function(e){t.hover=!t.disabled&&!0},mouseleave:function(e){t.hover=!1},click:t.handleSelection}},[t._v(" купи ")]),s("span",{style:"color: "+t.mainColor},[t._v(".")])]),t.selected&&!t.disabled?s("span",[t._v(" "+t._s(t.product.description)+" ")]):t._e(),t.disabled?s("span",{staticClass:"description__out"},[t._v(" Печалька, "+t._s(t.product.name)+" закончился. ")]):t._e()])])},l=[],d={name:"Card",data:function(){return{selected:!1,hover:!1}},props:{product:Object,disabled:Boolean},computed:{mainColor:function(){return this.disabled?"#b3b3b3":this.selected?this.hover?"#e52e7a":"#d91667":this.hover?"#2ea8e6":"#1698d9"}},methods:{handleSelection:function(){this.disabled||(this.selected||(this.hover=!1),this.selected=!this.selected)}}},u=d,p=(a("19a3"),a("2877")),f=Object(p["a"])(u,c,l,!1,null,"4c1a30be",null),_=f.exports,v={name:"CardContainer",props:{products:Array},components:{Card:_}},b=v,h=(a("aadc"),Object(p["a"])(b,o,i,!1,null,"428446b4",null)),m=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"title"},[t._v("Ты сегодня покормил кота?")])},C=[],g={name:"Title"},O=g,j=(a("587a"),Object(p["a"])(O,y,C,!1,null,"ee6ef1d2",null)),k=j.exports,x={name:"App",components:{Title:k,CardContainer:m},data:function(){return{products:[{name:"с фуа-гра",mass:"0,5",portions:"10",gift:"мышь",description:"Печень утки разварная с артишоками.",customerIsHappy:!1,available:!0},{name:"с рыбой",mass:"2",portions:"40",gift:"2 мыши",description:"Головы щучьи с чесноком да свежайшая сёмгушка.",customerIsHappy:!1,available:!0},{name:"с курицей",mass:"5",portions:"100",gift:"5 мышей",description:"Головы щучьи с чесноком да свежайшая сёмгушка.",customerIsHappy:!0,available:!1}]}}},w=x,S=(a("5c0b"),Object(p["a"])(w,r,n,!1,null,null,null)),P=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)}}).$mount("#app")},"587a":function(t,e,a){"use strict";var s=a("60cd"),r=a.n(s);r.a},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"60cd":function(t,e,a){},"68ef":function(t,e,a){t.exports=a.p+"img/cat_compressed.16e1ada4.png"},"9c0c":function(t,e,a){},aadc:function(t,e,a){"use strict";var s=a("e2a2"),r=a.n(s);r.a},e2a2:function(t,e,a){}});
//# sourceMappingURL=app.d094831a.js.map