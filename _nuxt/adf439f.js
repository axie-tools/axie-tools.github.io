(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{658:function(e,t,n){var content=n(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("6ceea171",content,!0,{sourceMap:!1})},659:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(456),n(457),n(21),n(33),n(84),n(54),n(83),n(27),n(44),n(55),n(45),n(175);var r=function(e){var t=e.description,n=void 0===t?null:t,r=e.title,title=void 0===r?null:r,l=e.safeImg,c=void 0===l?{}:l,o=c.alt,d=void 0===o?null:o,m=c.url,_=void 0===m?null:m,f=[];return n&&(f.push({hid:"description",name:"description",content:"".concat(n)}),f.push({hid:"twitter-description",name:"twitter:description",content:"".concat(n)}),f.push({hid:"og-description",property:"og:description",content:"".concat(n)})),title&&(f.push({hid:"twitter-title",name:"twitter:title",content:"".concat(title)}),f.push({hid:"og-title",property:"og:title",content:"".concat(title)})),d&&f.push({hid:"twitter-image-alt",name:"twitter:image:alt",content:"".concat(d)}),_&&(f.push({hid:"twitter-image",name:"twitter:image",content:"".concat(_)}),f.push({hid:"og-image",property:"og:image",content:"".concat(_)})),f}},660:function(e,t,n){"use strict";var r={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1},tag:{type:String,default:"h1"}}},l=(n(661),n(24)),c=n(31),o=n.n(c),d=n(212),m=n(653),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard_page__header"},[e.hasBack?n("div",{staticClass:"dashboard_page__pre"},[n("div",{staticClass:"dashboard_page__back",on:{click:function(t){return e.$router.go(-1)}}},[n("v-icon",{staticClass:"dashboard_page__back_icon"},[e._v("mdi-arrow-left")]),e._v(" "),n("span",{staticClass:"dashboard_page__back_text"},[e._v(" Volver ")])],1)]):e._e(),e._v(" "),n("div",{staticClass:"dashboard_page__body"},[n(e.tag,{tag:"component",staticClass:"dashboard_page__title"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"dashboard_page__items"},[e._t("items")],2)],1)])}),[],!1,null,"185524ff",null);t.a=component.exports;o()(component,{VIcon:d.a,VSpacer:m.a})},661:function(e,t,n){"use strict";n(658)},662:function(e,t,n){var r=n(14)(!1);r.push([e.i,".dashboard_page__header[data-v-185524ff]{margin-bottom:32px}.dashboard_page__pre[data-v-185524ff]{margin-bottom:12px}.dashboard_page__back[data-v-185524ff]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-185524ff]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-185524ff]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-185524ff]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-185524ff]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),e.exports=r},677:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h}));n(21),n(62),n(84),n(54),n(174),n(696),n(8);var r,l,c,o=n(3),d=n(698),m=n(162);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(e){var t=e.map((function(e){return"_".concat(e,": axie(axieId: $axie").concat(e,") {\n  id\n  class\n  image\n  breedCount\n  stage\n  genes\n  sireId\n  matronId\n  auction {\n    currentPriceUSD\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}")}));return{query:Object(m.a)(r||(r=Object(d.a)(["query GetAxie(",") {\n","\n}"])),e.map((function(e){return"$axie".concat(e,": ID!")})).join(", "),t.join(", \n")),variables:e.reduce((function(e,t){return f(f({},e),{},Object(o.a)({},"axie".concat(t),String(t)))}),{})}},h=function(e){return{query:Object(m.a)(l||(l=Object(d.a)(["\n    query GetAxieBriefList2 {\n      axie(axieId: ",") {\n        id\n        class\n        image\n        breedCount\n        stage\n        genes\n        sireId\n        stats {\n          hp\n          speed\n          skill\n          morale\n        }\n        parts {\n          id\n          name\n          class\n          type\n          specialGenes\n          stage\n          abilities {\n            id\n            name\n            attack\n            defense\n            energy\n            description\n            backgroundUrl\n            effectIconUrl\n            __typename\n          }\n        }\n        matronId\n        auction {\n          currentPriceUSD\n        }\n        children {\n          id\n          name\n          class\n          image\n          title\n          stage\n          __typename\n        }\n        __typename\n      }\n    }\n  "])),e),variables:{}}};Object(m.a)(c||(c=Object(d.a)(["\n  query GetAxieBriefList(\n    $auctionType: AuctionType\n    $criteria: AxieSearchCriteria\n    $from: Int\n    $sort: SortBy\n    $size: Int\n    $owner: String\n  ) {\n    axies(\n      auctionType: $auctionType\n      criteria: $criteria\n      from: $from\n      sort: $sort\n      size: $size\n      owner: $owner\n    ) {\n      total\n      results {\n        id\n        name\n        stage\n        class\n        breedCount\n        image\n        title\n        battleInfo {\n          banned\n          __typename\n        }\n        auction {\n          currentPrice\n          currentPriceUSD\n          __typename\n        }\n        parts {\n          id\n          name\n          class\n          type\n          specialGenes\n          __typename\n        }\n        __typename\n        __typename\n      }\n      __typename\n    }\n  }\n"])))},696:function(e,t,n){n(697)},697:function(e,t,n){"use strict";var r=n(7),l=n(58),c=n(179),o=n(178),d=n(474),m=n(23),_=n(28),f=m("replace"),v=RegExp.prototype,h=Math.max,x=function(e,t,n){return n>e.length?-1:""===t?n:e.indexOf(t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,m,y,$,w,O,k,j=l(this),S=0,C=0,P="";if(null!=e){if((n=c(e))&&!~String(l("flags"in v?e.flags:o.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=e[f]))return r.call(e,j,t);if(_&&n)return String(j).replace(e,t)}for(m=String(j),y=String(e),($="function"==typeof t)||(t=String(t)),w=y.length,O=h(1,w),S=x(m,y,0);-1!==S;)k=$?String(t(y,S,m)):d(y,m,S,[],void 0,t),P+=m.slice(C,S)+k,C=S+w,S=x(m,y,S+O);return C<m.length&&(P+=m.slice(C)),P}})},698:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},735:function(e,t,n){var content=n(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("67ebbc38",content,!0,{sourceMap:!1})},801:function(e,t,n){"use strict";n(735)},802:function(e,t,n){var r=n(14)(!1);r.push([e.i,".in_game_page[data-v-422a449a]{color:#b6c8ef}.in_game_page__container[data-v-422a449a]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:48px;gap:48px}@media screen and (min-width:992px){.in_game_page__container[data-v-422a449a]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (min-width:992px){.in_game_page__pvp[data-v-422a449a]{grid-column:span 2}}.pvp_list[data-v-422a449a]{display:grid;grid-template-columns:minmax(0,1fr);grid-gap:32px;gap:32px}.pvp_list__vs[data-v-422a449a]{font-size:32px;font-weight:800;text-transform:uppercase;text-align:center;align-self:center;border:1px solid red}.data_table__cell_slp[data-v-422a449a]{display:flex;align-items:center;font-weight:600}.data_table__cell_slp_icon[data-v-422a449a]{width:24px}.chip_tag[data-v-422a449a]{font-weight:600;display:inline-flex;align-items:center;margin-top:2px;margin-bottom:2px;font-size:14px}.chip_tag__image[data-v-422a449a]{width:24px}.chip_bonus[data-v-422a449a]{display:inline-flex;align-items:center;font-weight:600}.chip_bonus__image[data-v-422a449a]{width:24px}",""]),e.exports=r},827:function(e,t,n){"use strict";n.r(t);n(21),n(33),n(44),n(455),n(56);var r=n(12),l=n(45),c=n(3),o=n(660),d=n(659),m=n(677);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.in-game.title")," | Axie tools"),e=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:title,htmlAttrs:f({},e.htmlAttrs),meta:[].concat(Object(l.a)(Object(d.a)({title:title,description:this.$t("consts.TOOLS_URLS.in-game.description")})),Object(l.a)(e.meta)),link:Object(l.a)(e.link)}},components:{DashboardPageHeader:o.a},data:function(){return{frontUrl:"",myTeamLoading:{},enemyTeamLoading:{},myTeamIds:{0:567433,1:596710,2:695466},enemyTeamIds:{0:1377891,1:1333171,2:1075106},myTeamData:{},enemyTeamData:{},myTeamPvpAxiePlaceholder:[567433,596710,695466],enemyTeamPvpAxiePlaceholder:[1377891,1333171,1075106],adventureItems:[{id:1,level:1,exp:51,slp:1},{id:2,level:2,exp:59,slp:1},{id:3,level:3,exp:111,slp:1},{id:4,level:4,exp:118,slp:1},{id:5,level:5,exp:141,slp:2,tag:"best-slp",bestLevel:"low"},{id:6,level:6,exp:119,slp:2},{id:7,level:7,exp:256,slp:2},{id:8,level:8,exp:237,slp:2},{id:9,level:9,exp:282,slp:2,tag:"best-exp",bestLevel:"low"},{id:10,level:10,exp:300,slp:4,tag:"best-slp",bestLevel:"low_medium"},{id:11,level:11,exp:344,slp:4},{id:12,level:12,exp:429,slp:4,tag:"best-exp",bestLevel:"medium"},{id:13,level:13,exp:378,slp:4},{id:14,level:14,exp:347,slp:4},{id:15,level:15,exp:358,slp:6,tag:"best-slp",bestLevel:"medium"},{id:16,level:16,exp:402,slp:6},{id:17,level:17,exp:367,slp:"6-10"},{id:18,level:18,exp:446,slp:"6-10",tag:"best-exp",bestLevel:"high"},{id:19,level:19,exp:434,slp:"6-10"},{id:20,level:20,exp:401,slp:"6-10",tag:"best-daily-quest",bestLevel:"high"},{id:21,level:21,exp:644,slp:"10-20",tag:"bonus",bonus:200},{id:22,level:22,exp:449,slp:"10-20"},{id:23,level:23,exp:618,slp:"10-20"},{id:24,level:24,exp:582,slp:"10-20"},{id:25,level:25,exp:618,slp:"10-20"},{id:26,level:26,exp:797,slp:"10-20"},{id:27,level:27,exp:735,slp:"10-20"},{id:28,level:28,exp:759,slp:"10-20"},{id:29,level:29,exp:800,slp:"10-20"},{id:30,level:30,exp:1209,slp:"10-20"},{id:31,level:31,exp:810,slp:"10-20"},{id:32,level:32,exp:724,slp:"10-20"},{id:33,level:33,exp:891,slp:"10-20"},{id:34,level:34,exp:"-",slp:"10-20"},{id:35,level:35,exp:805,slp:"10-20"},{id:36,level:36,exp:820,slp:"10-20",tag:"bonus",bonus:300}],arenaItems:[{id:1,mmr:"0-800",slp:0},{id:2,mmr:"800-999",slp:1},{id:3,mmr:"1000-1099",slp:3},{id:4,mmr:"1100-1299",slp:6},{id:5,mmr:"1300-1499",slp:9},{id:6,mmr:"1500-1799",slp:12},{id:7,mmr:"1800-1999",slp:15},{id:8,mmr:"2000-2199",slp:18},{id:9,mmr:"+2200",slp:21}]}},mounted:function(){this.frontUrl="https://axie-tools.fans"},computed:{buffItems:function(){return[{id:1,icon:"attack-up.png",name:this.$t("pages.in_game.buff.items.attack_up.name"),description:this.$t("pages.in_game.buff.items.attack_up.description"),isStackable:!0},{id:2,icon:"morale-up.png",name:this.$t("pages.in_game.buff.items.morale_up.name"),description:this.$t("pages.in_game.buff.items.morale_up.description"),isStackable:!0},{id:3,icon:"speed-up.png",name:this.$t("pages.in_game.buff.items.speed_up.name"),description:this.$t("pages.in_game.buff.items.speed_up.description"),isStackable:!0}]},buffHeaders:function(){return[{text:this.$t("pages.in_game.buff.headers.icon"),value:"icon"},{text:this.$t("pages.in_game.buff.headers.name"),value:"name"},{text:this.$t("pages.in_game.buff.headers.description"),value:"description"}]},debuffItems:function(){return[{id:1,icon:"aroma.png",name:this.$t("pages.in_game.debuff.items.aroma.name"),description:this.$t("pages.in_game.debuff.items.aroma.description")},{id:2,icon:"attack-down.png",name:this.$t("pages.in_game.debuff.items.attack_down.name"),description:this.$t("pages.in_game.debuff.items.attack_down.description"),isStackable:!0},{id:3,icon:"chill.png",name:this.$t("pages.in_game.debuff.items.chill.name"),description:this.$t("pages.in_game.debuff.items.chill.description")},{id:4,icon:"fear.png",name:this.$t("pages.in_game.debuff.items.fear.name"),description:this.$t("pages.in_game.debuff.items.fear.description")},{id:5,icon:"fragile.png",name:this.$t("pages.in_game.debuff.items.fragile.name"),description:this.$t("pages.in_game.debuff.items.fragile.description")},{id:6,icon:"jinx.png",name:this.$t("pages.in_game.debuff.items.jinx.name"),description:this.$t("pages.in_game.debuff.items.jinx.description")},{id:7,icon:"lethal.png",name:this.$t("pages.in_game.debuff.items.lethal.name"),description:this.$t("pages.in_game.debuff.items.lethal.description")},{id:8,icon:"morale-down.png",name:this.$t("pages.in_game.debuff.items.morale_down.name"),description:this.$t("pages.in_game.debuff.items.morale_down.description"),isStackable:!0},{id:9,icon:"poison.png",name:this.$t("pages.in_game.debuff.items.poison.name"),description:this.$t("pages.in_game.debuff.items.poison.description"),isStackable:!0},{id:10,icon:"sleep.png",name:this.$t("pages.in_game.debuff.items.sleep.name"),description:this.$t("pages.in_game.debuff.items.sleep.description")},{id:11,icon:"speed-down.png",name:this.$t("pages.in_game.debuff.items.speed_down.name"),description:this.$t("pages.in_game.debuff.items.speed_down.description"),isStackable:!0},{id:12,icon:"stench.png",name:this.$t("pages.in_game.debuff.items.stench.name"),description:this.$t("pages.in_game.debuff.items.stench.description")},{id:13,icon:"stun.png",name:this.$t("pages.in_game.debuff.items.stun.name"),description:this.$t("pages.in_game.debuff.items.stun.description")}]},debuffHeaders:function(){return[{text:this.$t("pages.in_game.debuff.headers.icon"),value:"icon"},{text:this.$t("pages.in_game.debuff.headers.name"),value:"name"},{text:this.$t("pages.in_game.debuff.headers.description"),value:"description"}]},adventureHeaders:function(){return[{text:this.$t("pages.in_game.adventure.headers.level"),value:"level"},{text:this.$t("pages.in_game.adventure.headers.exp"),value:"exp"},{text:this.$t("pages.in_game.adventure.headers.slp"),value:"slp",cellClass:"text_truncate"},{text:this.$t("pages.in_game.adventure.headers.tag"),value:"tag"}]},arenaHeaders:function(){return[{text:this.$t("pages.in_game.arena.headers.mmr"),value:"mmr"},{text:this.$t("pages.in_game.arena.headers.slp"),value:"slp"}]}},methods:{updateAxieInfo:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,o,d,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.team,l=e.index,o=t["".concat(r,"Ids")][l],n.prev=2,t["".concat(r,"Loading")]=f(f({},t["".concat(r,"Loading")]),{},Object(c.a)({},l,!0)),n.next=6,t.$apollo.query(Object(m.b)(o));case 6:d=n.sent,_=d.data.axie,t["".concat(r,"Data")]=f(f({},t["".concat(r,"Data")]),{},Object(c.a)({},l,f(f({},_),{},{stats:[{key:"hp",value:_.stats.hp},{key:"speed",value:_.stats.speed},{key:"skill",value:_.stats.skill},{key:"morale",value:_.stats.morale}]}))),console.log({axie:_}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0);case 15:return n.prev=15,t["".concat(r,"Loading")]=f(f({},t["".concat(r,"Loading")]),{},Object(c.a)({},l,!1)),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},colorTag:function(e){return e.includes("low")?"bg_error":"medium"===e?"bg_warning":"bg_success"}}},h=(n(801),n(24)),x=n(31),y=n.n(x),$=n(640),w=n(819),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"in_game_page"},[n("div",{staticClass:"in_game_page__container custom_container custom_container_fluid"},[n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.buff.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.buffHeaders,items:e.buffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.icon",fn:function(e){var t=e.item;return[n("img",{attrs:{src:"/images/buff/"+t.icon}})]}},{key:"item.description",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.description)+"\n\n          "),r.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.debuff.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.debuffHeaders,items:e.debuffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.icon",fn:function(e){var t=e.item;return[n("img",{attrs:{src:"/images/debuff/"+t.icon}})]}},{key:"item.description",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.description)+"\n\n          "),r.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.adventure.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.adventureHeaders,items:e.adventureItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.slp",fn:function(t){var r=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v("\n            "+e._s(r.slp)+" x\n            "),n("img",{staticClass:"data_table__cell_slp_icon",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]}},{key:"item.tag",fn:function(t){var r=t.item;return[r.bestLevel?[n("v-chip",{staticClass:"chip_tag",class:e.colorTag(r.bestLevel)},[e._v("\n              "+e._s(e.$t("pages.in_game.adventure.level"))+" -\n              "+e._s(e.$t("pages.in_game.adventure.best_level."+r.bestLevel))+"\n            ")])]:e._e(),e._v(" "),r.tag?["best-exp"===r.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_exp"))+"\n              ")])]:e._e(),e._v(" "),"best-slp"===r.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_slp"))+"\n\n                "),n("img",{staticClass:"chip_tag__image ml_1",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e(),e._v(" "),"best-daily-quest"===r.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_daily_quest"))+"\n                "),n("img",{staticClass:"chip_tag__image ml_1",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e(),e._v(" "),"bonus"===r.tag?[n("v-chip",{staticClass:"chip_tag bg_info"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.bonus"))+"\n              ")]),e._v(" "),n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(r.bonus)+"\n                x\n                "),n("img",{staticClass:"chip_tag__image",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e()]:e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.arena.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.arenaHeaders,items:e.arenaItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.slp",fn:function(t){var r=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v("\n            "+e._s(r.slp)+" x\n            "),n("img",{staticClass:"data_table__cell_slp_icon",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]}}])})],1)])])}),[],!1,null,"422a449a",null);t.default=component.exports;y()(component,{VChip:$.a,VDataTable:w.a})}}]);