(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{707:function(t,e,r){var content=r(783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("327c44d9",content,!0,{sourceMap:!1})},782:function(t,e,r){"use strict";r(707)},783:function(t,e,r){var n=r(14)(!1);n.push([t.i,".season_19_page__container[data-v-27e0f758]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:32px;gap:32px}.season_19_page__btn[data-v-27e0f758]{position:fixed;bottom:48px;right:24px;z-index:6}.season_19_page__description[data-v-27e0f758]{margin-bottom:32px;line-height:26px}@media screen and (min-width:992px){.season_19_page__description[data-v-27e0f758]{max-width:50%}}.cards_group[data-v-27e0f758]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:48px;gap:48px}.card_group_item[data-v-27e0f758]{display:grid;grid-template-columns:repeat(1,minmax(0,254px));align-items:center}@media screen and (min-width:768px){.card_group_item[data-v-27e0f758]{grid-template-columns:254px 126px 254px}}.card_group_item__separator--desktop[data-v-27e0f758]{padding:0 46px 0 32px;display:none}@media screen and (min-width:768px){.card_group_item__separator--desktop[data-v-27e0f758]{display:block}}.card_group_item__separator--mobile[data-v-27e0f758]{padding:24px}@media screen and (min-width:768px){.card_group_item__separator--mobile[data-v-27e0f758]{display:none}}",""]),t.exports=n},799:function(t,e,r){"use strict";r.r(e);r(21),r(55),r(448);var n=r(45),o=r(3),_=r(654),c=r(669),d=r(116),l=r(653);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.season-19.title")," | Axie tools"),t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:title,htmlAttrs:f({},t.htmlAttrs),meta:[].concat(Object(n.a)(Object(l.a)({title:title,description:this.$t("consts.TOOLS_URLS.season-19.description")})),Object(n.a)(t.meta)),link:Object(n.a)(t.link)}},components:{DashboardPageHeader:_.a,CardItem:c.a},data:function(){return{frontUrl:"",NERF_CARDS_SEASON_19:d.i,BUFF_CARDS_SEASON_19:d.c}},mounted:function(){this.frontUrl="https://axie-tools.fans"},computed:{cardsSeason19Map:function(){var t=this;return d.e.map((function(e){return f(f({},e),{},{description:t.$t("consts.CARDS.".concat(e.id))})})).reduce((function(t,e){return f(f({},t),{},Object(o.a)({},e.id,e))}),{})},cardsSeason18Map:function(){var t=this;return d.d.map((function(e){return f(f({},e),{},{description:t.$t("consts.CARDS_SEASON_18.".concat(e.id))})})).reduce((function(t,e){return f(f({},t),{},Object(o.a)({},e.id,e))}),{})}}},h=(r(782),r(29)),x=r(33),O=r.n(x),C=r(635),S=r(209),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"season_19_page"},[r("div",{staticClass:"season_19_page__container custom_container custom_container_fluid"},[r("div",{staticClass:"season_19_page__main"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.title"),tag:"h1"}}),t._v(" "),r("p",{staticClass:"season_19_page__description"},[t._v("\n        "+t._s(t.$t("pages.season_19.description"))+"\n        "),r("a",{staticClass:"secondary--text",attrs:{href:"https://medium.com/@ChrysalisGuild/axie-infinity-temporada-19-bdd3247df3e8"}},[t._v("\n          "+t._s(t.$t("pages.season_19.link_text"))+"\n        ")])]),t._v(" "),r("v-btn",{staticClass:"season_19_page__btn",attrs:{color:"secondary",dark:"",href:"https://medium.com/@ChrysalisGuild/axie-infinity-temporada-19-bdd3247df3e8"}},[t._v("\n        "+t._s(t.$t("pages.season_19.link_text"))+"\n      ")])],1),t._v(" "),r("div",{staticClass:"season_19_page__nerf"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.nerf.title"),tag:"h2"}}),t._v(" "),r("div",{staticClass:"cards_group"},t._l(t.NERF_CARDS_SEASON_19,(function(e){return r("div",{key:e,staticClass:"card_group_item"},[r("CardItem",{staticClass:"card_group_item__card card_group_item__card--prev",attrs:{cardItem:t.cardsSeason18Map[e]}}),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--desktop\n            ",attrs:{size:"48px",color:"red"}},[t._v("\n            mdi-arrow-right\n          ")]),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--mobile\n            ",attrs:{size:"48px",color:"red"}},[t._v("\n            mdi-arrow-down\n          ")]),t._v(" "),r("CardItem",{staticClass:"card_group_item__card card_group_item__card--current",attrs:{cardItem:t.cardsSeason19Map[e]}})],1)})),0)],1),t._v(" "),r("div",{staticClass:"season_19_page__buff"},[r("DashboardPageHeader",{attrs:{title:t.$t("pages.season_19.buff.title"),tag:"h2"}}),t._v(" "),r("div",{staticClass:"cards_group"},t._l(t.BUFF_CARDS_SEASON_19,(function(e){return r("div",{key:e,staticClass:"card_group_item"},[r("CardItem",{staticClass:"card_group_item__card card_group_item__card--prev",attrs:{cardItem:t.cardsSeason18Map[e]}}),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--desktop\n            ",attrs:{size:"48px",color:"green"}},[t._v("\n            mdi-arrow-right\n          ")]),t._v(" "),r("v-icon",{staticClass:"\n              card_group_item__separator card_group_item__separator--mobile\n            ",attrs:{size:"48px",color:"green"}},[t._v("\n            mdi-arrow-down\n          ")]),t._v(" "),r("CardItem",{staticClass:"card_group_item__card card_group_item__card--current",attrs:{cardItem:t.cardsSeason19Map[e]}})],1)})),0)],1)])])}),[],!1,null,"27e0f758",null);e.default=component.exports;O()(component,{VBtn:C.a,VIcon:S.a})}}]);