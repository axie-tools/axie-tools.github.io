(window.webpackJsonp=window.webpackJsonp||[]).push([[11,35],{652:function(e,t,r){var content=r(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("bf28df98",content,!0,{sourceMap:!1})},653:function(e,t,r){var content=r(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("20adce9a",content,!0,{sourceMap:!1})},685:function(e,t,r){"use strict";r(652)},686:function(e,t,r){var n=r(13)(!1);n.push([e.i,".parts[data-v-11e79a77]{background-color:#121212}.parts__header[data-v-11e79a77]{border-bottom:1px solid #242325}.parts__title[data-v-11e79a77]{font-size:12px}",""]),e.exports=n},687:function(e,t,r){"use strict";r(653)},688:function(e,t,r){var n=r(13)(!1);n.push([e.i,".axie[data-v-0128743e]{border-radius:5px;padding:16px;background-color:#121212;color:#b6c8ef;display:block;text-decoration:none}.axie__header[data-v-0128743e]{display:flex;align-items:center}.axie__class[data-v-0128743e]{margin-right:6px}.axie__id[data-v-0128743e]{font-size:14px}.axie__breed_count[data-v-0128743e]{font-size:14px;margin-bottom:4px}.axie__footer[data-v-0128743e]{text-align:center}.axie__price_usd[data-v-0128743e]{font-size:12px}",""]),e.exports=n},689:function(e,t,r){var content=r(706);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("fa66285c",content,!0,{sourceMap:!1})},700:function(e,t,r){"use strict";r.r(t);r(67);var n=r(672),o={props:{title:{type:String,required:!0},parts:{type:Array,required:!0},openParts:{type:Boolean,default:!0},showCard:{type:Boolean,default:!1}},components:{PartItem:n.default},computed:{cardParts:function(){return this.parts.slice(0,-2)},bestPart:function(){return this.parts[this.parts.length-1]},purity:function(){return this.parts[this.parts.length-2]},partHeaderStyles:function(){return{}}}},d=(r(685),r(22)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"parts"},[r("PartItem",{staticClass:"parts__header",style:e.partHeaderStyles,attrs:{part:{part:e.title,value:e.bestPart.value+"% | "+e.purity.value+"%",class:e.purity.value>e.bestPart.value?e.purity.class:e.bestPart.class}}}),e._v(" "),e.openParts?e._l(e.cardParts,(function(t){return r("PartItem",{key:"eyes_"+t.class+"_"+t.part,attrs:{part:Object.assign({},t,{value:t.value+"%"}),showCard:e.showCard}})})):e._e()],2)}),[],!1,null,"11e79a77",null);t.default=component.exports},701:function(e,t,r){"use strict";r.r(t);var n=r(637),o=r(445),d={props:{axie:{type:Object,required:!0}},components:{AxieClass:n.default},methods:{get:o.get}},_=(r(687),r(22)),c=r(30),l=r.n(c),m=r(159),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"axie",attrs:{href:"https://marketplace.axieinfinity.com/axie/"+e.axie.id,target:"_blank"}},[r("div",{staticClass:"axie__header"},[e.axie.class?r("AxieClass",{staticClass:"axie__class",attrs:{name:e.axie.class.toLowerCase(),size:"20"}}):e._e(),e._v(" "),r("span",{staticClass:"axie__id"},[e._v("#"+e._s(e.axie.id))])],1),e._v(" "),r("div",{staticClass:"axie__body"},[r("v-img",{attrs:{src:e.axie.image,"aspect-ratio":2,contain:""}})],1),e._v(" "),r("div",{staticClass:"axie__footer"},[r("div",{staticClass:"axie__breed_count"},[e._v("\n      "+e._s(e.axie.breedCount)+" "+e._s(e.$t("components.axie_item.childs"))+"\n    ")]),e._v(" "),r("div",{staticClass:"axie__price_usd"},[e._v("\n      "+e._s(e.get(e.axie,"auction.currentPriceUSD","-"))+" USD\n    ")])])])}),[],!1,null,"0128743e",null);t.default=component.exports;l()(component,{VImg:m.a})},705:function(e,t,r){"use strict";r(689)},706:function(e,t,r){var n=r(13)(!1);n.push([e.i,".breeding_item__overlay[data-v-5f53bb32]{display:none;width:100vw;height:100vh;background-color:rgba(0,0,0,.05);position:fixed;top:0;left:0}.breeding_item__overlay[data-v-5f53bb32]:hover{display:none!important}.breeding_item__overlay::hover~.breeding_item__content[data-v-5f53bb32]{z-index:1}.breeding_item__content[data-v-5f53bb32]{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:12px;gap:12px;align-content:flex-start}.breeding_item__warning[data-v-5f53bb32]{grid-column:span 2;background-color:#121212;padding:16px;font-size:14px;color:#fb8c00;font-weight:600}.breeding_item__general_info[data-v-5f53bb32]{grid-column:span 2}.breeding_item__parts[data-v-5f53bb32]{grid-column:span 2;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-column-gap:1px;-moz-column-gap:1px;column-gap:1px}@media screen and (min-width:576px){.breeding_item__parts[data-v-5f53bb32]{grid-template-columns:repeat(2,minmax(0,1fr))}}.breeding_item__parts--open[data-v-5f53bb32]{grid-gap:12px;gap:12px}.breeding_item__footer[data-v-5f53bb32]{grid-column:span 2}",""]),e.exports=n},737:function(e,t,r){"use strict";r.r(t);r(39),r(54);var n=r(700),o=r(672),d=r(701),_={props:{breedingItem:{type:Object,required:!0},options:{type:Object,default:{}},hasFavorite:{type:Boolean,default:!1}},components:{Parts:n.default,PartItem:o.default,AxieItem:d.default},computed:{hasWarningBrothers:function(){var e=[this.breedingItem.father.matronId,this.breedingItem.father.sireId],t=[this.breedingItem.mother.matronId,this.breedingItem.mother.sireId];return e.some((function(e){return t.includes(e)}))},hasWarningParentAndSon:function(){var e=this;return this.breedingItem.father.children.some((function(t){return t.id===e.breedingItem.mother.id}))||this.breedingItem.mother.children.some((function(t){return t.id===e.breedingItem.father.id}))}}},c=(r(705),r(22)),l=r(30),m=r.n(l),v=r(613),component=Object(c.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{key:e.breedingItem.id,staticClass:"breeding_item"},[r("div",{staticClass:"breeding_item__overlay"}),e._v(" "),r("div",{staticClass:"breeding_item__content"},[e.hasWarningParentAndSon?r("div",{staticClass:"breeding_item__warning"},[e._v("\n      "+e._s(e.$t("components.breeding_item.warning.parent_and_son"))+"\n    ")]):e._e(),e._v(" "),e.hasWarningBrothers?r("div",{staticClass:"breeding_item__warning"},[e._v("\n      "+e._s(e.$t("components.breeding_item.warning.brothers"))+"\n    ")]):e._e(),e._v(" "),r("AxieItem",{attrs:{axie:e.breedingItem.father}}),e._v(" "),r("AxieItem",{attrs:{axie:e.breedingItem.mother}}),e._v(" "),r("div",{staticClass:"breeding_item__general_info"},[r("PartItem",{attrs:{part:{part:e.$t("components.breeding_item.general_info.pure_gen_score"),value:e.breedingItem.score.toFixed(0)+" / 600"}}}),e._v(" "),r("PartItem",{attrs:{part:{part:e.$t("components.breeding_item.general_info.pure_gen_percentage"),value:e.breedingItem.scorePercentage.toFixed(0)+"%"}}}),e._v(" "),r("PartItem",{attrs:{part:{part:e.$t("components.breeding_item.general_info.pure_class_score"),value:e.breedingItem.purityScore.toFixed(0)+" / 600"}}}),e._v(" "),r("PartItem",{attrs:{part:{part:"Purity class percentaje",part:e.$t("components.breeding_item.general_info.pure_class_percentage"),value:e.breedingItem.purityScorePercentage.toFixed(0)+"%"}}}),e._v(" "),r("PartItem",{attrs:{part:{part:e.$t("components.breeding_item.general_info.price"),value:"$"+e.breedingItem.totalPriceUSD.toFixed(0)}}})],1),e._v(" "),r("div",{staticClass:"breeding_item__parts",class:{"breeding_item__parts--open":e.options.openParts}},[r("Parts",{attrs:{parts:e.breedingItem.eyesProbs,title:e.$t("components.breeding_item.parts.eyes"),openParts:e.options.openParts}}),e._v(" "),r("Parts",{attrs:{parts:e.breedingItem.earsProbs,title:e.$t("components.breeding_item.parts.ears"),openParts:e.options.openParts}}),e._v(" "),r("Parts",{attrs:{parts:e.breedingItem.mouthProbs,title:e.$t("components.breeding_item.parts.mouth"),openParts:e.options.openParts,showCard:""}}),e._v(" "),r("Parts",{attrs:{parts:e.breedingItem.hornProbs,title:e.$t("components.breeding_item.parts.horn"),openParts:e.options.openParts,showCard:""}}),e._v(" "),r("Parts",{attrs:{parts:e.breedingItem.backProbs,title:e.$t("components.breeding_item.parts.back"),openParts:e.options.openParts,showCard:""}}),e._v(" "),r("Parts",{attrs:{parts:e.breedingItem.tailProbs,title:e.$t("components.breeding_item.parts.tail"),openParts:e.options.openParts,showCard:""}})],1),e._v(" "),r("div",{staticClass:"breeding_item__footer"},[r("v-btn",{staticClass:"text_transform_none",attrs:{small:"",color:"#121212",block:""},on:{click:function(t){return e.$emit("toggle",e.breedingItem)}}},[e._v("\n        "+e._s(e.$tc("components.breeding_item.btn_toggle_favorite",Number(e.hasFavorite)))+"\n      ")])],1)],1)])}),[],!1,null,"5f53bb32",null);t.default=component.exports;m()(component,{VBtn:v.a})}}]);