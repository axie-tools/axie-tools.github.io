(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{699:function(e,t,r){var content=r(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("43ecf4f7",content,!0,{sourceMap:!1})},758:function(e,t,r){"use strict";r(699)},759:function(e,t,r){var n=r(14)(!1);n.push([e.i,".best_breeding[data-v-40563dac]{color:#b6c8ef}.breeding[data-v-40563dac]{display:grid;grid-gap:24px;gap:24px;grid-template-columns:repeat(1,minmax(0,1fr))}@media screen and (min-width:576px){.breeding[data-v-40563dac]{grid-template-columns:repeat(auto-fill,minmax(380px,1fr))}}",""]),e.exports=n},792:function(e,t,r){"use strict";r.r(t);r(23),r(68),r(54),r(83),r(173),r(24),r(27),r(670),r(76),r(56),r(85),r(448),r(671),r(672),r(673),r(674),r(675),r(676),r(677),r(678),r(679),r(680),r(681),r(682),r(683),r(684),r(685),r(686),r(77);var n=r(8),o=(r(50),r(12)),c=r(55),d=r(3),l=r(659),f=r(687),m=r(710),v=r(654),h=r(713),_=r(698),y=r(660),O=r(653);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={name:"BestBreeding",mixins:[_.a],head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.best-breeding.title")," | Axie tools"),e=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:title,htmlAttrs:j({},e.htmlAttrs),meta:[].concat(Object(c.a)(Object(O.a)({title:title,description:this.$t("consts.TOOLS_URLS.best-breeding.description")})),Object(c.a)(e.meta)),link:Object(c.a)(e.link)}},components:{DashboardPageHeader:v.a,AxieFilters:h.a,BreedingItem:m.a},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.query,n=r.father_ids,o=void 0===n?null:n,c=r.mother_ids,d=void 0===c?null:c,!o||!d){t.next=6;break}return e.form.fatherIds=o,e.form.motherIds=d,t.next=6,e.getAxies();case 6:case"end":return t.stop()}}),t)})))()},computed:{totalAxies:function(){return this.form.fatherIds.split(",").length+this.form.motherIds.split(",").length},breedingFounded:function(){return this.breedingSort(this.breedingFiltered(this.breeding))},breedingSelectedFounded:function(){return this.breedingSort(this.breedingFiltered(this.breedingSelected))}},methods:{breedingSort:function(e){var t=e.slice();switch(this.form.sortBy){case"major_pure_gen_score":t=t.sort((function(a,b){return b.score-a.score}));break;case"major_pure_class_score":t=t.sort((function(a,b){return b.purityScore-a.purityScore}));break;case"minor_price":t=t.sort((function(a,b){return a.totalPriceUSD-b.totalPriceUSD}))}return t},breedingFiltered:function(e){var t=this.form.parts,r=t.eyes,n=t.ears,o=t.mouth,c=t.horn,d=t.back,l=t.tail,f=this.form,m=f.minAttack,v=(f.minDefense,JSON.parse(JSON.stringify(e)));return r.isPurity&&n.isPurity&&o.isPurity&&c.isPurity&&d.isPurity&&l.isPurity,m&&(v=v.filter((function(e){return e.minAttack>=m}))),r.score||n.score||o.score||c.score||d.score||l.score?v.filter((function(e){var t=e.purity,f=e.bestPart,m=r.isPurity?t.eyes.value:f.eyes.value,v=n.isPurity?t.ears.value:f.ears.value,h=o.isPurity?t.mouth.value:f.mouth.value,_=c.isPurity?t.horn.value:f.horn.value,y=d.isPurity?t.back.value:f.back.value,O=l.isPurity?t.tail.value:f.tail.value,x=[];return r.score&&x.push(m>=r.score),n.score&&x.push(v>=n.score),o.score&&x.push(h>=o.score),c.score&&x.push(_>=c.score),d.score&&x.push(y>=d.score),l.score&&x.push(O>=l.score),x.every((function(e){return!0===e}))})):v},getAxies:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,m,v,h,_,O,x,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,r=Object(c.a)(new Set(e.form.fatherIds.split(",").map((function(e){return e.trim()})))),m=Object(c.a)(new Set(e.form.motherIds.split(",").map((function(e){return e.trim()})))),v=Object(c.a)(new Set([].concat(Object(c.a)(r),Object(c.a)(m)))),t.next=7,Object(f.a)(Object(l.chunk)(v,8),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$apollo.query(Object(y.a)(r));case 2:return o=t.sent,t.abrupt("return",Object.entries(o.data).reduce((function(e,t){var r=Object(n.a)(t,2),o=(r[0],r[1]);return[].concat(Object(c.a)(e),[o])}),[]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:h=t.sent,_=h.reduce((function(e,t){return j(j({},e),{},Object(d.a)({},t.id,t))}),{}),O=[r.map((function(t){return e.loadGenesInfo(_[t])})).filter((function(e){return e&&e.id})),m.map((function(t){return e.loadGenesInfo(_[t])})).filter((function(e){return e&&e.id}))],x=O[0],w=O[1],e.breeding=e.breedingMap(x,w),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:return t.prev=16,e.isLoading=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})))()}}},P=(r(758),r(29)),S=r(33),k=r.n(S),I=r(635),$=r(730),F=r(697),A=r(731),D=r(786),component=Object(P.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"best_breeding"},[r("div",{staticClass:"best_breeding__container custom_container custom_container_fluid"},[r("DashboardPageHeader",{attrs:{title:e.$t("pages.best_breeding.title")}}),e._v(" "),r("form",{staticClass:"mb_2",on:{submit:function(t){return t.preventDefault(),e.getAxies(t)}}},[r("v-row",[r("v-col",{staticClass:"py_0 my_0",attrs:{cols:"12"}},[e._v("\n          "+e._s(e.$t("pages.best_breeding.form_axie.title"))+"\n        ")]),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("v-text-field",{attrs:{"hide-details":"",label:e.$t("pages.best_breeding.form_axie.fields.father_ids.label"),placeholder:"1578813,1578780,1559511"},model:{value:e.form.fatherIds,callback:function(t){e.$set(e.form,"fatherIds",t)},expression:"form.fatherIds"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("v-text-field",{attrs:{"hide-details":"",label:e.$t("pages.best_breeding.form_axie.fields.mother_ids.label"),placeholder:"1578813,1578780,1559511"},model:{value:e.form.motherIds,callback:function(t){e.$set(e.form,"motherIds",t)},expression:"form.motherIds"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("v-btn",{staticClass:"text_transform_none",attrs:{color:"primary",type:"submit",loading:e.isLoading,disabled:e.isLoading}},[e._v("\n            "+e._s(e.$t("pages.best_breeding.form_axie.btn_search"))+"\n          ")])],1)],1)],1),e._v(" "),r("AxieFilters",{attrs:{filters:e.form}}),e._v(" "),r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-5801233672161121","data-ad-slot":"9977515141","data-ad-format":"auto","data-full-width-responsive":"true"}}),e._v(" "),0!==e.breedingSelectedFounded.length?r("div",{staticClass:"breeding mt_12"},e._l(e.breedingSelectedFounded,(function(t){return r("BreedingItem",{key:t.id,attrs:{breedingItem:t,options:e.form,hasFavorite:""},on:{toggle:function(r){return e.toggleBreeding(t)}}})})),1):e._e(),e._v(" "),r("v-divider",{staticClass:"my_6"}),e._v(" "),e.isLoading?r("span",[e._v(" "+e._s(e.$t("pages.best_breeding.loading"))+"... ")]):[0===e.breedingFounded.length?r("div",[e._v("\n        "+e._s(e.$t("pages.best_breeding.no_items"))+"\n      ")]):[r("div",{staticClass:"breeding"},e._l(e.breedingFounded,(function(t){return r("BreedingItem",{key:t.id,attrs:{breedingItem:t,options:e.form},on:{toggle:function(r){return e.toggleBreeding(t)}}})})),1)]]],2)])}),[],!1,null,"40563dac",null);t.default=component.exports;k()(component,{VBtn:I.a,VCol:$.a,VDivider:F.a,VRow:A.a,VTextField:D.a})}}]);