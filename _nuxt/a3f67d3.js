(window.webpackJsonp=window.webpackJsonp||[]).push([[49,26],{629:function(e,t,n){var content=n(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("663dae12",content,!0,{sourceMap:!1})},665:function(e,t,n){"use strict";n(629)},666:function(e,t,n){var r=n(12)(!1);r.push([e.i,".dashboard_page__header[data-v-10f9c690]{margin-bottom:32px}.dashboard_page__pre[data-v-10f9c690]{margin-bottom:12px}.dashboard_page__back[data-v-10f9c690]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-10f9c690]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-10f9c690]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-10f9c690]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-10f9c690]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),e.exports=r},667:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1}}},c=(n(665),n(22)),o=n(30),l=n.n(o),d=n(608),_=n(188),f=n(617),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard_page__header"},[e.hasBack?n("div",{staticClass:"dashboard_page__pre"},[n("div",{staticClass:"dashboard_page__back",on:{click:function(t){return e.$router.go(-1)}}},[n("v-icon",{staticClass:"dashboard_page__back_icon"},[e._v("mdi-arrow-left")]),e._v(" "),n("span",{staticClass:"dashboard_page__back_text"},[e._v(" Volver ")])],1)]):e._e(),e._v(" "),n("div",{staticClass:"dashboard_page__body"},[n("h1",{staticClass:"dashboard_page__title"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"dashboard_page__items"},[e._t("items",[n("v-btn",{staticClass:"v-btn--btn_action",attrs:{color:"#ffffff",depressed:""},on:{click:function(t){return e.$emit("click")}}},[e._v("\n          "+e._s(e.btnAddText)+"\n        ")])])],2)],1)])}),[],!1,null,"10f9c690",null);t.default=component.exports;l()(component,{VBtn:d.a,VIcon:_.a,VSpacer:f.a})},731:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return y}));n(28),n(87),n(61),n(447),n(14);var r,c,o=n(3),l=n(732),d=n(151);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(e){var t=e.map((function(e){return"_".concat(e,": axie(axieId: $axie").concat(e,") {\n  id\n  class\n  image\n  breedCount\n  stage\n  genes\n  sireId\n  matronId\n  auction {\n    currentPriceUSD\n  }\n  __typename\n}")}));return{query:Object(d.a)(r||(r=Object(l.a)(["query GetAxie(",") {\n","\n}"])),e.map((function(e){return"$axie".concat(e,": ID!")})).join(", "),t.join(", \n")),variables:e.reduce((function(e,t){return f(f({},e),{},Object(o.a)({},"axie".concat(t),String(t)))}),{})}},y=Object(d.a)(c||(c=Object(l.a)(["\n  query GetAxieBriefList(\n    $auctionType: AuctionType\n    $criteria: AxieSearchCriteria\n    $from: Int\n    $sort: SortBy\n    $size: Int\n    $owner: String\n  ) {\n    axies(\n      auctionType: $auctionType\n      criteria: $criteria\n      from: $from\n      sort: $sort\n      size: $size\n      owner: $owner\n    ) {\n      total\n      results {\n        id\n        name\n        stage\n        class\n        breedCount\n        image\n        title\n        battleInfo {\n          banned\n          __typename\n        }\n        auction {\n          currentPrice\n          currentPriceUSD\n          __typename\n        }\n        parts {\n          id\n          name\n          class\n          type\n          specialGenes\n          __typename\n        }\n        __typename\n        __typename\n      }\n      __typename\n    }\n  }\n"])))},732:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},756:function(e,t,n){var content=n(833);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("28b832fe",content,!0,{sourceMap:!1})},832:function(e,t,n){"use strict";n(756)},833:function(e,t,n){var r=n(12)(!1);r.push([e.i,".test_page[data-v-32162c91]{color:#b6c8ef}",""]),e.exports=r},853:function(e,t,n){"use strict";n.r(t);n(87),n(61);var r=n(667),c=n(731),o={name:"Test",components:{DashboardPageHeader:r.default},mounted:function(){this.$apollo.query({query:c.b,variables:{auctionType:"Sale",criteria:{bodyShapes:null,breedCount:[0,0],breedable:null,classes:null,hp:[],morale:[],numMystic:null,parts:null,pureness:null,region:null,skill:[],speed:[],stages:[1],title:null},from:0,owner:null,size:100,sort:"PriceAsc"}}).then((function(e){console.log("success",e.data.axies.results.map((function(e){return e.id})).join(","))})).catch((function(e){console.log("error",e)}))}},l=(n(832),n(22)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test_page"},[n("div",{staticClass:"test_page__container custom_container custom_container_xxl"},[n("DashboardPageHeader",{attrs:{title:"Test"},scopedSlots:e._u([{key:"items",fn:function(){return[e._v(" .")]},proxy:!0}])})],1)])}),[],!1,null,"32162c91",null);t.default=component.exports}}]);