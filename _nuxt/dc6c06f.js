(window.webpackJsonp=window.webpackJsonp||[]).push([[42,26],{644:function(e,t,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("772fa005",content,!0,{sourceMap:!1})},647:function(e,t,n){"use strict";n(644)},648:function(e,t,n){var l=n(12)(!1);l.push([e.i,".dashboard_page__header[data-v-097654ce]{margin-bottom:32px}.dashboard_page__pre[data-v-097654ce]{margin-bottom:12px}.dashboard_page__back[data-v-097654ce]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-097654ce]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-097654ce]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-097654ce]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-097654ce]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),e.exports=l},649:function(e,t,n){"use strict";n.r(t);var l={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1}}},r=(n(647),n(23)),d=n(30),c=n.n(d),o=n(193),_=n(636),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard_page__header"},[e.hasBack?n("div",{staticClass:"dashboard_page__pre"},[n("div",{staticClass:"dashboard_page__back",on:{click:function(t){return e.$router.go(-1)}}},[n("v-icon",{staticClass:"dashboard_page__back_icon"},[e._v("mdi-arrow-left")]),e._v(" "),n("span",{staticClass:"dashboard_page__back_text"},[e._v(" Volver ")])],1)]):e._e(),e._v(" "),n("div",{staticClass:"dashboard_page__body"},[n("h1",{staticClass:"dashboard_page__title"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"dashboard_page__items"},[e._t("items")],2)],1)])}),[],!1,null,"097654ce",null);t.default=component.exports;c()(component,{VIcon:o.a,VSpacer:_.a})},650:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));n(453),n(454),n(28),n(41),n(80),n(56),n(78),n(32),n(57),n(63);var l=n(49),r=n(217),d=function(e){var t=e.description,n=void 0===t?null:t,l=e.title,title=void 0===l?null:l,r=e.safeImg,d=void 0===r?{}:r,c=d.alt,o=void 0===c?null:c,_=d.url,m=void 0===_?null:_,f=[];return n&&(f.push({hid:"description",name:"description",content:"".concat(n)}),f.push({hid:"twitter-description",name:"twitter:description",content:"".concat(n)}),f.push({hid:"og-description",property:"og:description",content:"".concat(n)})),title&&(f.push({hid:"twitter-title",name:"twitter:title",content:"".concat(title)}),f.push({hid:"og-title",property:"og:title",content:"".concat(title)})),o&&f.push({hid:"twitter-image-alt",name:"twitter:image:alt",content:"".concat(o)}),m&&(f.push({hid:"twitter-image",name:"twitter:image",content:"".concat(m)}),f.push({hid:"og-image",property:"og:image",content:"".concat(m)})),f},c=function(e,t){if(e.includes("-lang")){var n=t.slice(1).split("/"),l=Object(r.a)(n);l[0];return l.slice(1).join("/")}return t.slice(1)},o=function(e,t,path){return[{rel:"alternate",href:"".concat(t,"/").concat(path),hreflang:"en",hid:"lang-en"}].concat(Object(l.a)(e.map((function(e){return{rel:"alternate",href:"".concat(t,"/").concat(e,"/").concat(path),hreflang:e,hid:"lang-".concat(e)}}))))}},764:function(e,t,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("420e5b6a",content,!0,{sourceMap:!1})},813:function(e,t,n){"use strict";n(764)},814:function(e,t,n){var l=n(12)(!1);l.push([e.i,".in_game_page[data-v-58f666ef]{color:#b6c8ef}.in_game_page__container[data-v-58f666ef]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:48px;gap:48px}@media screen and (min-width:992px){.in_game_page__container[data-v-58f666ef]{grid-template-columns:repeat(2,minmax(0,1fr))}}.data_table__cell_slp[data-v-58f666ef]{display:flex;align-items:center;font-weight:600}.data_table__cell_slp_icon[data-v-58f666ef]{width:24px}.chip_tag[data-v-58f666ef]{font-weight:600;display:inline-flex;align-items:center;margin-top:2px;margin-bottom:2px;font-size:14px}.chip_tag__image[data-v-58f666ef]{width:24px}.chip_bonus[data-v-58f666ef]{display:inline-flex;align-items:center;font-weight:600}.chip_bonus__image[data-v-58f666ef]{width:24px}",""]),e.exports=l},866:function(e,t,n){"use strict";n.r(t);n(41),n(42),n(57);var l=n(649),r=n(129),d=n(650),c={head:function(){var title="".concat(this.$t("consts.TOOLS_URLS.in-game.title")," | Axie tools"),e=this.$route.params.lang,t=void 0===e?"en":e,path=Object(d.c)(this.$route.name,this.$route.path);return{title:title,htmlAttrs:{lang:t},meta:Object(d.b)({title:title,description:this.$t("consts.TOOLS_URLS.in-game.description")}),link:Object(d.a)(r.a,"https://axie-tools.github.io",path)}},components:{DashboardPageHeader:l.default},data:function(){return{frontUrl:"",adventureItems:[{id:1,level:1,exp:51,slp:1},{id:2,level:2,exp:59,slp:1},{id:3,level:3,exp:111,slp:1},{id:4,level:4,exp:118,slp:1},{id:5,level:5,exp:141,slp:2,tag:"best-slp",bestLevel:"low"},{id:6,level:6,exp:119,slp:2},{id:7,level:7,exp:256,slp:2},{id:8,level:8,exp:237,slp:2},{id:9,level:9,exp:282,slp:2,tag:"best-exp",bestLevel:"low"},{id:10,level:10,exp:300,slp:4,tag:"best-slp",bestLevel:"low_medium"},{id:11,level:11,exp:344,slp:4},{id:12,level:12,exp:429,slp:4,tag:"best-exp",bestLevel:"medium"},{id:13,level:13,exp:378,slp:4},{id:14,level:14,exp:347,slp:4},{id:15,level:15,exp:358,slp:6,tag:"best-slp",bestLevel:"medium"},{id:16,level:16,exp:402,slp:6},{id:17,level:17,exp:367,slp:"6-10"},{id:18,level:18,exp:446,slp:"6-10",tag:"best-exp",bestLevel:"high"},{id:19,level:19,exp:434,slp:"6-10"},{id:20,level:20,exp:401,slp:"6-10",tag:"best-daily-quest",bestLevel:"high"},{id:21,level:21,exp:644,slp:"10-20",tag:"bonus",bonus:200},{id:22,level:22,exp:449,slp:"10-20"},{id:23,level:23,exp:618,slp:"10-20"},{id:24,level:24,exp:582,slp:"10-20"},{id:25,level:25,exp:618,slp:"10-20"},{id:26,level:26,exp:797,slp:"10-20"},{id:27,level:27,exp:735,slp:"10-20"},{id:28,level:28,exp:759,slp:"10-20"},{id:29,level:29,exp:800,slp:"10-20"},{id:30,level:30,exp:1209,slp:"10-20"},{id:31,level:31,exp:810,slp:"10-20"},{id:32,level:32,exp:724,slp:"10-20"},{id:33,level:33,exp:891,slp:"10-20"},{id:34,level:34,exp:"-",slp:"10-20"},{id:35,level:35,exp:805,slp:"10-20"},{id:36,level:36,exp:820,slp:"10-20",tag:"bonus",bonus:300}],arenaItems:[{id:4,mmr:"1100-1299",slp:6},{id:5,mmr:"1300-1399",slp:9},{id:6,mmr:"1400-1499",slp:12},{id:7,mmr:"1500-1599",slp:15},{id:8,mmr:"1600-1699",slp:18},{id:9,mmr:"1700-1799",slp:20}]}},mounted:function(){this.frontUrl="https://axie-tools.github.io"},computed:{buffItems:function(){return[{id:1,icon:"attack-up.png",name:this.$t("pages.in_game.buff.items.attack_up.name"),description:this.$t("pages.in_game.buff.items.attack_up.description"),isStackable:!0},{id:2,icon:"morale-up.png",name:this.$t("pages.in_game.buff.items.morale_up.name"),description:this.$t("pages.in_game.buff.items.morale_up.description"),isStackable:!0},{id:3,icon:"speed-up.png",name:this.$t("pages.in_game.buff.items.speed_up.name"),description:this.$t("pages.in_game.buff.items.speed_up.description"),isStackable:!0}]},buffHeaders:function(){return[{text:this.$t("pages.in_game.buff.headers.icon"),value:"icon"},{text:this.$t("pages.in_game.buff.headers.name"),value:"name"},{text:this.$t("pages.in_game.buff.headers.description"),value:"description"}]},debuffItems:function(){return[{id:1,icon:"aroma.png",name:this.$t("pages.in_game.debuff.items.aroma.name"),description:this.$t("pages.in_game.debuff.items.aroma.description")},{id:2,icon:"attack-down.png",name:this.$t("pages.in_game.debuff.items.attack_down.name"),description:this.$t("pages.in_game.debuff.items.attack_down.description"),isStackable:!0},{id:3,icon:"chill.png",name:this.$t("pages.in_game.debuff.items.chill.name"),description:this.$t("pages.in_game.debuff.items.chill.description")},{id:4,icon:"fear.png",name:this.$t("pages.in_game.debuff.items.fear.name"),description:this.$t("pages.in_game.debuff.items.fear.description")},{id:5,icon:"fragile.png",name:this.$t("pages.in_game.debuff.items.fragile.name"),description:this.$t("pages.in_game.debuff.items.fragile.description")},{id:6,icon:"jinx.png",name:this.$t("pages.in_game.debuff.items.jinx.name"),description:this.$t("pages.in_game.debuff.items.jinx.description")},{id:7,icon:"lethal.png",name:this.$t("pages.in_game.debuff.items.lethal.name"),description:this.$t("pages.in_game.debuff.items.lethal.description")},{id:8,icon:"morale-down.png",name:this.$t("pages.in_game.debuff.items.morale_down.name"),description:this.$t("pages.in_game.debuff.items.morale_down.description"),isStackable:!0},{id:9,icon:"poison.png",name:this.$t("pages.in_game.debuff.items.poison.name"),description:this.$t("pages.in_game.debuff.items.poison.description"),isStackable:!0},{id:10,icon:"sleep.png",name:this.$t("pages.in_game.debuff.items.sleep.name"),description:this.$t("pages.in_game.debuff.items.sleep.description")},{id:11,icon:"speed-down.png",name:this.$t("pages.in_game.debuff.items.speed_down.name"),description:this.$t("pages.in_game.debuff.items.speed_down.description"),isStackable:!0},{id:12,icon:"stench.png",name:this.$t("pages.in_game.debuff.items.stench.name"),description:this.$t("pages.in_game.debuff.items.stench.description")},{id:13,icon:"stun.png",name:this.$t("pages.in_game.debuff.items.stun.name"),description:this.$t("pages.in_game.debuff.items.stun.description")}]},debuffHeaders:function(){return[{text:this.$t("pages.in_game.debuff.headers.icon"),value:"icon"},{text:this.$t("pages.in_game.debuff.headers.name"),value:"name"},{text:this.$t("pages.in_game.debuff.headers.description"),value:"description"}]},adventureHeaders:function(){return[{text:this.$t("pages.in_game.adventure.headers.level"),value:"level"},{text:this.$t("pages.in_game.adventure.headers.exp"),value:"exp"},{text:this.$t("pages.in_game.adventure.headers.slp"),value:"slp",cellClass:"text_truncate"},{text:this.$t("pages.in_game.adventure.headers.tag"),value:"tag"}]},arenaHeaders:function(){return[{text:this.$t("pages.in_game.arena.headers.mmr"),value:"mmr"},{text:this.$t("pages.in_game.arena.headers.slp"),value:"slp"}]}},methods:{colorTag:function(e){return e.includes("low")?"bg_error":"medium"===e?"bg_warning":"bg_success"}}},o=(n(813),n(23)),_=n(30),m=n.n(_),f=n(625),h=n(860),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"in_game_page"},[n("div",{staticClass:"in_game_page__container custom_container custom_container_fluid"},[n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.buff.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.buffHeaders,items:e.buffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.icon",fn:function(e){var t=e.item;return[n("img",{attrs:{src:"/images/buff/"+t.icon}})]}},{key:"item.description",fn:function(t){var l=t.item;return[e._v("\n          "+e._s(l.description)+"\n\n          "),l.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.debuff.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.debuffHeaders,items:e.debuffItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.icon",fn:function(e){var t=e.item;return[n("img",{attrs:{src:"/images/debuff/"+t.icon}})]}},{key:"item.description",fn:function(t){var l=t.item;return[e._v("\n          "+e._s(l.description)+"\n\n          "),l.isStackable?n("div",{staticClass:"font_style_italic font_weight_light mt_1"},[e._v("\n            "+e._s(e.$t("pages.in_game.stackable"))+"\n          ")]):e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.adventure.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.adventureHeaders,items:e.adventureItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.slp",fn:function(t){var l=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v("\n            "+e._s(l.slp)+" x\n            "),n("img",{staticClass:"data_table__cell_slp_icon",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]}},{key:"item.tag",fn:function(t){var l=t.item;return[l.bestLevel?[n("v-chip",{staticClass:"chip_tag",class:e.colorTag(l.bestLevel)},[e._v("\n              "+e._s(e.$t("pages.in_game.adventure.level"))+" -\n              "+e._s(e.$t("pages.in_game.adventure.best_level."+l.bestLevel))+"\n            ")])]:e._e(),e._v(" "),l.tag?["best-exp"===l.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_exp"))+"\n              ")])]:e._e(),e._v(" "),"best-slp"===l.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_slp"))+"\n\n                "),n("img",{staticClass:"chip_tag__image ml_1",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e(),e._v(" "),"best-daily-quest"===l.tag?[n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.best_daily_quest"))+"\n                "),n("img",{staticClass:"chip_tag__image ml_1",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e(),e._v(" "),"bonus"===l.tag?[n("v-chip",{staticClass:"chip_tag bg_info"},[e._v("\n                "+e._s(e.$t("pages.in_game.adventure.bonus"))+"\n              ")]),e._v(" "),n("v-chip",{staticClass:"chip_tag"},[e._v("\n                "+e._s(l.bonus)+"\n                x\n                "),n("img",{staticClass:"chip_tag__image",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]:e._e()]:e._e()]}}])})],1),e._v(" "),n("div",[n("DashboardPageHeader",{attrs:{title:e.$t("pages.in_game.arena.title")}}),e._v(" "),n("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:e.arenaHeaders,items:e.arenaItems,"mobile-breakpoint":"0","hide-default-footer":"","items-per-page":1e3},scopedSlots:e._u([{key:"item.slp",fn:function(t){var l=t.item;return[n("span",{staticClass:"data_table__cell_slp"},[e._v("\n            "+e._s(l.slp)+" x\n            "),n("img",{staticClass:"data_table__cell_slp_icon",attrs:{src:e.frontUrl+"/images/currencies/slp.webp"}})])]}}])})],1)])])}),[],!1,null,"58f666ef",null);t.default=component.exports;m()(component,{VChip:f.a,VDataTable:h.a})}}]);