(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{658:function(t,e,r){var content=r(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("6ceea171",content,!0,{sourceMap:!1})},659:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(456),r(457),r(21),r(33),r(84),r(54),r(83),r(27),r(44),r(55),r(45),r(175);var n=function(t){var e=t.description,r=void 0===e?null:e,n=t.title,title=void 0===n?null:n,o=t.safeImg,c=void 0===o?{}:o,d=c.alt,_=void 0===d?null:d,l=c.url,m=void 0===l?null:l,f=[];return r&&(f.push({hid:"description",name:"description",content:"".concat(r)}),f.push({hid:"twitter-description",name:"twitter:description",content:"".concat(r)}),f.push({hid:"og-description",property:"og:description",content:"".concat(r)})),title&&(f.push({hid:"twitter-title",name:"twitter:title",content:"".concat(title)}),f.push({hid:"og-title",property:"og:title",content:"".concat(title)})),_&&f.push({hid:"twitter-image-alt",name:"twitter:image:alt",content:"".concat(_)}),m&&(f.push({hid:"twitter-image",name:"twitter:image",content:"".concat(m)}),f.push({hid:"og-image",property:"og:image",content:"".concat(m)})),f}},660:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1},tag:{type:String,default:"h1"}}},o=(r(661),r(24)),c=r(31),d=r.n(c),_=r(212),l=r(653),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_page__header"},[t.hasBack?r("div",{staticClass:"dashboard_page__pre"},[r("div",{staticClass:"dashboard_page__back",on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{staticClass:"dashboard_page__back_icon"},[t._v("mdi-arrow-left")]),t._v(" "),r("span",{staticClass:"dashboard_page__back_text"},[t._v(" Volver ")])],1)]):t._e(),t._v(" "),r("div",{staticClass:"dashboard_page__body"},[r(t.tag,{tag:"component",staticClass:"dashboard_page__title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"dashboard_page__items"},[t._t("items")],2)],1)])}),[],!1,null,"185524ff",null);e.a=component.exports;d()(component,{VIcon:_.a,VSpacer:l.a})},661:function(t,e,r){"use strict";r(658)},662:function(t,e,r){var n=r(14)(!1);n.push([t.i,".dashboard_page__header[data-v-185524ff]{margin-bottom:32px}.dashboard_page__pre[data-v-185524ff]{margin-bottom:12px}.dashboard_page__back[data-v-185524ff]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-185524ff]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-185524ff]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-185524ff]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-185524ff]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),t.exports=n},663:function(t,e,r){var content=r(670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4cdbcdeb",content,!0,{sourceMap:!1})},667:function(t,e,r){"use strict";var n={data:function(){return{frontUrl:"https://axie-tools.fans"}},props:{cardItem:{type:Object,required:!0},season:{type:String,default:"19"}},computed:{alt:function(){return this.$t("components.card_image.alt",{partName:this.cardItem.partName,skillName:this.cardItem.skillName,class:this.$t("consts.CLASS.".concat(this.cardItem.class.toLowerCase())).toLowerCase(),season:this.season})}}},o=(r(669),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{staticClass:"card_image"},[r("source",{attrs:{srcset:t.frontUrl+"/cards/season-"+t.season+"/"+t.$i18n.locale+"/"+t.cardItem.id+".webp",type:"image/webp"}}),t._v(" "),r("source",{attrs:{srcset:t.frontUrl+"/cards/season-"+t.season+"/"+t.$i18n.locale+"/"+t.cardItem.id+".png",type:"image/png"}}),t._v(" "),r("img",{staticClass:"card_image__image",attrs:{src:t.frontUrl+"/cards/season-"+t.season+"/"+t.$i18n.locale+"/"+t.cardItem.id+".webp",alt:t.alt}})])}),[],!1,null,"3909a755",null);e.a=component.exports},669:function(t,e,r){"use strict";r(663)},670:function(t,e,r){var n=r(14)(!1);n.push([t.i,".card_image[data-v-3909a755],.card_image__image[data-v-3909a755]{width:100%;display:block}",""]),t.exports=n},736:function(t,e,r){var content=r(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("eb50b488",content,!0,{sourceMap:!1})},803:function(t,e,r){"use strict";r(736)},804:function(t,e,r){var n=r(14)(!1);n.push([t.i,".season_19_page__container[data-v-b633763a]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:32px;gap:32px}.season_19_page__btn[data-v-b633763a]{position:fixed;bottom:48px;right:24px;z-index:6}.season_19_page__description[data-v-b633763a]{margin-bottom:32px;line-height:26px}@media screen and (min-width:992px){.season_19_page__description[data-v-b633763a]{max-width:50%}}.cards_group[data-v-b633763a]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:48px;gap:48px}.card_group_item[data-v-b633763a]{display:grid;grid-template-columns:repeat(1,minmax(0,254px));align-items:center}@media screen and (min-width:576px){.card_group_item[data-v-b633763a]{grid-template-columns:minmax(0,254px) 96px minmax(0,254px)}}.card_group_item__separator--desktop[data-v-b633763a]{padding:0 32px;display:none}@media screen and (min-width:576px){.card_group_item__separator--desktop[data-v-b633763a]{display:block}}.card_group_item__separator--mobile[data-v-b633763a]{padding:24px}@media screen and (min-width:576px){.card_group_item__separator--mobile[data-v-b633763a]{display:none}}",""]),t.exports=n},828:function(t,e,r){"use strict";r.r(e);r(21),r(455);var n=r(45),o=r(3),c=r(660),d=r(667),_=r(117),l=r(659);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.season-19.title")," | Axie tools"),t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:title,htmlAttrs:f({},t.htmlAttrs),meta:[].concat(Object(n.a)(Object(l.a)({title:title,description:this.$t("consts.TOOLS_URLS.season-19.description")})),Object(n.a)(t.meta)),link:Object(n.a)(t.link)}},components:{DashboardPageHeader:c.a,CardImage:d.a},data:function(){return{frontUrl:"",NERF_CARDS_SEASON_19:_.j,BUFF_CARDS_SEASON_19:_.c}},mounted:function(){this.frontUrl="https://axie-tools.fans"},computed:{cardsSeason19Map:function(){return _.f.reduce((function(t,e){return f(f({},t),{},Object(o.a)({},e.id,e))}),{})},cardsSeason18Map:function(){return _.e.reduce((function(t,e){return f(f({},t),{},Object(o.a)({},e.id,e))}),{})}}},h=(r(803),r(24)),x=r(31),y=r.n(x),C=r(641),w=r(212),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"season_19_page"},[r("div",{staticClass:"season_19_page__container custom_container custom_container_fluid"},[r("div",{staticClass:"season_19_page__main"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.title"),tag:"h1"}}),t._v(" "),r("p",{staticClass:"season_19_page__description"},[t._v("\n        "+t._s(t.$t("pages.season_19.description"))+"\n        "),r("a",{staticClass:"secondary--text",attrs:{href:"https://medium.com/@ChrysalisGuild/axie-infinity-temporada-19-bdd3247df3e8"}},[t._v("\n          "+t._s(t.$t("pages.season_19.link_text"))+"\n        ")])]),t._v(" "),r("v-btn",{staticClass:"season_19_page__btn",attrs:{color:"secondary",dark:"",href:"https://medium.com/@ChrysalisGuild/axie-infinity-temporada-19-bdd3247df3e8"}},[t._v("\n        "+t._s(t.$t("pages.season_19.link_text"))+"\n      ")])],1),t._v(" "),r("div",{staticClass:"season_19_page__nerf"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.nerf.title"),tag:"h2"}}),t._v(" "),r("div",{staticClass:"cards_group"},t._l(t.NERF_CARDS_SEASON_19,(function(e){return r("div",{key:e,staticClass:"card_group_item"},[r("CardImage",{staticClass:"card_group_item__card card_group_item__card--prev",attrs:{cardItem:t.cardsSeason18Map[e],season:"18"}}),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--desktop\n            ",attrs:{size:"48px",color:"red"}},[t._v("\n            mdi-arrow-right\n          ")]),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--mobile\n            ",attrs:{size:"48px",color:"red"}},[t._v("\n            mdi-arrow-down\n          ")]),t._v(" "),r("CardImage",{staticClass:"card_group_item__card card_group_item__card--current",attrs:{cardItem:t.cardsSeason18Map[e],season:"19"}})],1)})),0)],1),t._v(" "),r("div",{staticClass:"season_19_page__buff"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.buff.title"),tag:"h2"}}),t._v(" "),r("div",{staticClass:"cards_group"},t._l(t.BUFF_CARDS_SEASON_19,(function(e){return r("div",{key:e,staticClass:"card_group_item"},[r("CardImage",{staticClass:"card_group_item__card card_group_item__card--prev",attrs:{cardItem:t.cardsSeason18Map[e],season:"18"}}),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--desktop\n            ",attrs:{size:"48px",color:"green"}},[t._v("\n            mdi-arrow-right\n          ")]),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--mobile\n            ",attrs:{size:"48px",color:"green"}},[t._v("\n            mdi-arrow-down\n          ")]),t._v(" "),r("CardImage",{staticClass:"card_group_item__card card_group_item__card--current",attrs:{cardItem:t.cardsSeason19Map[e],season:"19"}})],1)})),0)],1)])])}),[],!1,null,"b633763a",null);e.default=component.exports;y()(component,{VBtn:C.a,VIcon:w.a})}}]);