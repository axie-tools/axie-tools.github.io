(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{665:function(e,t,n){var content=n(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("6ceea171",content,!0,{sourceMap:!1})},667:function(e,t,n){"use strict";var r={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1},tag:{type:String,default:"h1"}}},c=(n(668),n(24)),o=n(31),d=n.n(o),l=n(213),m=n(660),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard_page__header"},[e.hasBack?n("div",{staticClass:"dashboard_page__pre"},[n("div",{staticClass:"dashboard_page__back",on:{click:function(t){return e.$router.go(-1)}}},[n("v-icon",{staticClass:"dashboard_page__back_icon"},[e._v("mdi-arrow-left")]),e._v(" "),n("span",{staticClass:"dashboard_page__back_text"},[e._v(" Volver ")])],1)]):e._e(),e._v(" "),n("div",{staticClass:"dashboard_page__body"},[n(e.tag,{tag:"component",staticClass:"dashboard_page__title"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"dashboard_page__items"},[e._t("items")],2)],1)])}),[],!1,null,"185524ff",null);t.a=component.exports;d()(component,{VIcon:l.a,VSpacer:m.a})},668:function(e,t,n){"use strict";n(665)},669:function(e,t,n){var r=n(14)(!1);r.push([e.i,".dashboard_page__header[data-v-185524ff]{margin-bottom:32px}.dashboard_page__pre[data-v-185524ff]{margin-bottom:12px}.dashboard_page__back[data-v-185524ff]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-185524ff]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-185524ff]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-185524ff]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-185524ff]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),e.exports=r},670:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(460),n(461),n(21),n(33),n(84),n(55),n(83),n(27),n(44),n(56),n(45),n(173);var r=function(e){var t=e.description,n=void 0===t?null:t,r=e.title,title=void 0===r?null:r,c=e.safeImg,o=void 0===c?{}:c,d=o.alt,l=void 0===d?null:d,m=o.url,f=void 0===m?null:m,_=[];return n&&(_.push({hid:"description",name:"description",content:"".concat(n)}),_.push({hid:"twitter-description",name:"twitter:description",content:"".concat(n)}),_.push({hid:"og-description",property:"og:description",content:"".concat(n)})),title&&(_.push({hid:"twitter-title",name:"twitter:title",content:"".concat(title)}),_.push({hid:"og-title",property:"og:title",content:"".concat(title)})),l&&_.push({hid:"twitter-image-alt",name:"twitter:image:alt",content:"".concat(l)}),f&&(_.push({hid:"twitter-image",name:"twitter:image",content:"".concat(f)}),_.push({hid:"og-image",property:"og:image",content:"".concat(f)})),_}},677:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return $})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return w}));n(21),n(61),n(84),n(55),n(174),n(681);var r,c,o,d,l,m=n(8),f=n(3),_=n(682),h=n(141);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=function(e){var t=e.map((function(e){return"_".concat(e,": axie(axieId: $axie").concat(e,") {\n  id\n  class\n  image\n  breedCount\n  stage\n  genes\n  sireId\n  matronId\n  auction {\n    currentPriceUSD\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}")}));return{query:Object(h.a)(r||(r=Object(_.a)(["query GetAxie(",") {\n","\n}"])),e.map((function(e){return"$axie".concat(e,": ID!")})).join(", "),t.join(", \n")),variables:e.reduce((function(e,t){return y(y({},e),{},Object(f.a)({},"axie".concat(t),String(t)))}),{})}},O=function(e){var t=e.map((function(e){return"_".concat(e,": axie(axieId: $axie").concat(e,") {\n  id\n  class\n  parts {\n    id\n    class\n    name\n    abilities {\n      id\n      name\n      __typename\n    }\n  }\n  stats {\n    hp\n    speed\n    skill\n    morale\n  }\n  __typename\n}")}));return{query:Object(h.a)(c||(c=Object(_.a)(["query GetAxie(",") {\n","\n}"])),e.map((function(e){return"$axie".concat(e,": ID!")})).join(", "),t.join(", \n")),variables:e.reduce((function(e,t){return y(y({},e),{},Object(f.a)({},"axie".concat(t),String(t)))}),{})}},w=function(e){return{query:Object(h.a)(o||(o=Object(_.a)(["\n    query GetAxieBriefList2 {\n      axie(axieId: ",") {\n        id\n        class\n        image\n        breedCount\n        stage\n        genes\n        sireId\n        stats {\n          hp\n          speed\n          skill\n          morale\n        }\n        parts {\n          id\n          name\n          class\n          type\n          specialGenes\n          stage\n          abilities {\n            id\n            name\n            attack\n            defense\n            energy\n            description\n            backgroundUrl\n            effectIconUrl\n            __typename\n          }\n        }\n        matronId\n        auction {\n          currentPriceUSD\n        }\n        children {\n          id\n          name\n          class\n          image\n          title\n          stage\n          __typename\n        }\n        __typename\n      }\n    }\n  "])),e),variables:{}}},$=(Object(h.a)(d||(d=Object(_.a)(["\n  query GetAxieBriefList(\n    $auctionType: AuctionType\n    $criteria: AxieSearchCriteria\n    $from: Int\n    $sort: SortBy\n    $size: Int\n    $owner: String\n  ) {\n    axies(\n      auctionType: $auctionType\n      criteria: $criteria\n      from: $from\n      sort: $sort\n      size: $size\n      owner: $owner\n    ) {\n      total\n      results {\n        id\n        name\n        stage\n        class\n        breedCount\n        image\n        title\n        battleInfo {\n          banned\n          __typename\n        }\n        auction {\n          currentPrice\n          currentPriceUSD\n          __typename\n        }\n        parts {\n          id\n          name\n          class\n          type\n          specialGenes\n          __typename\n        }\n        __typename\n        __typename\n      }\n      __typename\n    }\n  }\n"]))),function(e){var t=e.map((function(e,t){var n=e.replaceAll("-","_");return"\n        ".concat(n,': axies(criteria: { parts: ["').concat(e,'"] }, from: 0, size: 1) {\n          results {\n            parts {\n              id\n              name\n              class\n              type\n              specialGenes\n              stage\n              abilities {\n                id\n                name\n                attack\n                defense\n                energy\n                description\n                backgroundUrl\n                effectIconUrl\n                __typename\n              }\n            }\n          }\n        }\n      ')})).join("");return{query:Object(h.a)(l||(l=Object(_.a)(["\n    query GetAxieBriefList {\n      ","\n    }\n    "])),t),variables:{}}}),j=function(data,e){return e.map((function(e){var t=e.replaceAll("-","_"),n=Object(m.a)(data[t].results,1)[0];return n?n.parts.find((function(t){return t.id===e})):null}))}},681:function(e,t,n){n(695)},682:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},695:function(e,t,n){"use strict";var r=n(7),c=n(57),o=n(180),d=n(179),l=n(479),m=n(23),f=n(28),_=m("replace"),h=RegExp.prototype,v=Math.max,y=function(e,t,n){return n>e.length?-1:""===t?n:e.indexOf(t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,m,x,O,w,$,j,k=c(this),S=0,C=0,P="";if(null!=e){if((n=o(e))&&!~String(c("flags"in h?e.flags:d.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=e[_]))return r.call(e,k,t);if(f&&n)return String(k).replace(e,t)}for(m=String(k),x=String(e),(O="function"==typeof t)||(t=String(t)),w=x.length,$=v(1,w),S=y(m,x,0);-1!==S;)j=O?String(t(x,S,m)):l(x,m,S,[],void 0,t),P+=m.slice(C,S)+j,C=S+w,S=y(m,x,S+$);return C<m.length&&(P+=m.slice(C)),P}})},753:function(e,t,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("43d03b96",content,!0,{sourceMap:!1})},840:function(e,t,n){"use strict";n(753)},841:function(e,t,n){var r=n(14)(!1);r.push([e.i,".in_game_page[data-v-528a1a46]{color:#b6c8ef}.in_game_page__container[data-v-528a1a46]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:48px;gap:48px}@media screen and (min-width:992px){.in_game_page__container[data-v-528a1a46]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (min-width:992px){.in_game_page__pvp[data-v-528a1a46]{grid-column:span 2}}.pvp_list[data-v-528a1a46]{display:grid;grid-template-columns:minmax(0,1fr);grid-gap:32px;gap:32px}.pvp_list__vs[data-v-528a1a46]{font-size:32px;font-weight:800;text-transform:uppercase;text-align:center;align-self:center;border:1px solid red}.data_table__cell_slp[data-v-528a1a46]{display:flex;font-size:18px;justify-content:center}.chip_tag[data-v-528a1a46],.data_table__cell_slp[data-v-528a1a46]{align-items:center;font-weight:600}.chip_tag[data-v-528a1a46]{display:inline-flex;margin-top:2px;margin-bottom:2px;font-size:14px}.chip_tag__image[data-v-528a1a46]{width:24px}.chip_bonus[data-v-528a1a46]{display:inline-flex;align-items:center;font-weight:600}.chip_bonus__image[data-v-528a1a46]{width:24px}",""]),e.exports=r},883:function(e,t,n){"use strict";n.r(t);n(21),n(33),n(44),n(476),n(60);var r=n(12),c=n(45),o=n(3),d=n(667),l=n(670),m=n(677);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.in-game.title")," | Axie tools"),e=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:title,htmlAttrs:_({},e.htmlAttrs),meta:[].concat(Object(c.a)(Object(l.a)({title:title,description:this.$t("consts.TOOLS_URLS.in-game.description")})),Object(c.a)(e.meta)),link:Object(c.a)(e.link)}},components:{DashboardPageHeader:d.a},data:function(){return{frontUrl:"",myTeamLoading:{},enemyTeamLoading:{},myTeamIds:{0:567433,1:596710,2:695466},enemyTeamIds:{0:1377891,1:1333171,2:1075106},myTeamData:{},enemyTeamData:{},myTeamPvpAxiePlaceholder:[567433,596710,695466],enemyTeamPvpAxiePlaceholder:[1377891,1333171,1075106],arenaItems:[{id:1,mmr:"0-999",slp:1},{id:2,mmr:"1000-1099",slp:3},{id:3,mmr:"1100-1299",slp:5},{id:4,mmr:"1300-1499",slp:6},{id:5,mmr:"1500-1799",slp:8},{id:6,mmr:"1800-1999",slp:10},{id:7,mmr:"2000-2499",slp:12},{id:8,mmr:"2500+",slp:14}]}},mounted:function(){this.frontUrl="https://axie-tools.fans"},computed:{buffItems:function(){return[{id:1,icon:"attack-up.png",name:this.$t("pages.in_game.buff.items.attack_up.name"),description:this.$t("pages.in_game.buff.items.attack_up.description"),isStackable:!0},{id:2,icon:"morale-up.png",name:this.$t("pages.in_game.buff.items.morale_up.name"),description:this.$t("pages.in_game.buff.items.morale_up.description"),isStackable:!0},{id:3,icon:"speed-up.png",name:this.$t("pages.in_game.buff.items.speed_up.name"),description:this.$t("pages.in_game.buff.items.speed_up.description"),isStackable:!0}]},buffHeaders:function(){return[{text:this.$t("pages.in_game.buff.headers.name"),value:"name"},{text:this.$t("pages.in_game.buff.headers.description"),value:"description"}]},debuffItems:function(){return[{id:1,icon:"aroma.png",name:this.$t("pages.in_game.debuff.items.aroma.name"),description:this.$t("pages.in_game.debuff.items.aroma.description")},{id:2,icon:"attack-down.png",name:this.$t("pages.in_game.debuff.items.attack_down.name"),description:this.$t("pages.in_game.debuff.items.attack_down.description"),isStackable:!0},{id:3,icon:"chill.png",name:this.$t("pages.in_game.debuff.items.chill.name"),description:this.$t("pages.in_game.debuff.items.chill.description")},{id:4,icon:"fear.png",name:this.$t("pages.in_game.debuff.items.fear.name"),description:this.$t("pages.in_game.debuff.items.fear.description")},{id:5,icon:"fragile.png",name:this.$t("pages.in_game.debuff.items.fragile.name"),description:this.$t("pages.in_game.debuff.items.fragile.description")},{id:6,icon:"jinx.png",name:this.$t("pages.in_game.debuff.items.jinx.name"),description:this.$t("pages.in_game.debuff.items.jinx.description")},{id:7,icon:"lethal.png",name:this.$t("pages.in_game.debuff.items.lethal.name"),description:this.$t("pages.in_game.debuff.items.lethal.description")},{id:8,icon:"morale-down.png",name:this.$t("pages.in_game.debuff.items.morale_down.name"),description:this.$t("pages.in_game.debuff.items.morale_down.description"),isStackable:!0},{id:9,icon:"poison.png",name:this.$t("pages.in_game.debuff.items.poison.name"),description:this.$t("pages.in_game.debuff.items.poison.description"),isStackable:!0},{id:10,icon:"sleep.png",name:this.$t("pages.in_game.debuff.items.sleep.name"),description:this.$t("pages.in_game.debuff.items.sleep.description")},{id:11,icon:"speed-down.png",name:this.$t("pages.in_game.debuff.items.speed_down.name"),description:this.$t("pages.in_game.debuff.items.speed_down.description"),isStackable:!0},{id:12,icon:"stench.png",name:this.$t("pages.in_game.debuff.items.stench.name"),description:this.$t("pages.in_game.debuff.items.stench.description")},{id:13,icon:"stun.png",name:this.$t("pages.in_game.debuff.items.stun.name"),description:this.$t("pages.in_game.debuff.items.stun.description")}]},debuffHeaders:function(){return[{text:this.$t("pages.in_game.debuff.headers.name"),value:"name"},{text:this.$t("pages.in_game.debuff.headers.description"),value:"description"}]},arenaHeaders:function(){return[{text:this.$t("pages.in_game.arena.headers.mmr"),value:"mmr",cellClass:"text-center",class:"text-center"},{text:this.$t("pages.in_game.arena.headers.slp"),value:"slp",cellClass:"text-center",class:"text-center"}]}},methods:{updateAxieInfo:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,d,l,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.team,c=e.index,d=t["".concat(r,"Ids")][c],n.prev=2,t["".concat(r,"Loading")]=_(_({},t["".concat(r,"Loading")]),{},Object(o.a)({},c,!0)),n.next=6,t.$apollo.query(Object(m.d)(d));case 6:l=n.sent,f=l.data.axie,t["".concat(r,"Data")]=_(_({},t["".concat(r,"Data")]),{},Object(o.a)({},c,_(_({},f),{},{stats:[{key:"hp",value:f.stats.hp},{key:"speed",value:f.stats.speed},{key:"skill",value:f.stats.skill},{key:"morale",value:f.stats.morale}]}))),console.log({axie:f}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0);case 15:return n.prev=15,t["".concat(r,"Loading")]=_(_({},t["".concat(r,"Loading")]),{},Object(o.a)({},c,!1)),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})))()},colorTag:function(e){return e.includes("low")?"bg_error":"medium"===e?"bg_warning":"bg_success"}}},v=(n(840),n(24)),y=n(31),x=n.n(y),O=n(873),w=n(171),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"in_game_page"},[n("div",{staticClass:"in_game_page__container custom_container custom_container_fluid"},[n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.arena.title")}}),e._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-5801233672161121","data-ad-slot":"8089718407","data-ad-format":"auto","data-full-width-responsive":"true"}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.arenaHeaders,items:e.arenaItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"header.mmr",fn:function(t){t.item;return[n("span",{staticClass:"d-flex justify-center"},[n("v-img",{attrs:{src:e.frontUrl+"/images/top-1.png",width:"48","max-width":"48"}})],1)]}},{key:"header.slp",fn:function(t){t.item;return[n("span",{staticClass:"d-flex justify-center"},[n("v-img",{attrs:{src:e.frontUrl+"/images/currencies/slp.webp",width:"48","max-width":"48"}})],1)]}},{key:"item.mmr",fn:function(t){var r=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v(" "+e._s(r.mmr)+" ")])]}},{key:"item.slp",fn:function(t){var r=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v(" "+e._s(r.slp)+" ")])]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.debuff.title")}}),e._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-5801233672161121","data-ad-slot":"8089718407","data-ad-format":"auto","data-full-width-responsive":"true"}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.debuffHeaders,items:e.debuffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("span",{staticClass:"d-flex align-center"},[n("img",{staticClass:"mr-3",attrs:{src:"/images/debuff/"+r.icon}}),e._v("\n            "+e._s(r.name)+"\n          ")])]}},{key:"item.description",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.description)+"\n\n          "),r.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.buff.title")}}),e._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-5801233672161121","data-ad-slot":"8089718407","data-ad-format":"auto","data-full-width-responsive":"true"}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.buffHeaders,items:e.buffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.name",fn:function(t){var r=t.item;return[n("span",{staticClass:"d-flex align-center"},[n("img",{staticClass:"mr-3",attrs:{src:"/images/buff/"+r.icon}}),e._v("\n            "+e._s(r.name)+"\n          ")])]}},{key:"item.description",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.description)+"\n\n          "),r.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1)])])}),[],!1,null,"528a1a46",null);t.default=component.exports;x()(component,{VDataTable:O.a,VImg:w.a})}}]);