(window.webpackJsonp=window.webpackJsonp||[]).push([[48,21,26,27,28,29],{625:function(t,e,r){var content=r(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("0dad9a62",content,!0,{sourceMap:!1})},626:function(t,e,r){var content=r(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("addef812",content,!0,{sourceMap:!1})},627:function(t,e,r){var content=r(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("287201fc",content,!0,{sourceMap:!1})},629:function(t,e,r){var content=r(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("663dae12",content,!0,{sourceMap:!1})},630:function(t,e,r){"use strict";r(625)},631:function(t,e,r){var o=r(12)(!1);o.push([t.i,".dashboard_modal_header[data-v-12be0d6f]{display:flex;margin-bottom:24px}.dashboard_modal_header__title[data-v-12be0d6f]{font-size:20px;line-height:32px;font-weight:600}",""]),t.exports=o},632:function(t,e,r){"use strict";r(626)},633:function(t,e,r){var o=r(12)(!1);o.push([t.i,".dashboard_modal_footer[data-v-5241ad4f]{display:flex}",""]),t.exports=o},634:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0}}},n=(r(630),r(22)),d=r(30),l=r.n(d),c=r(608),f=r(188),m=r(617),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_modal_header"},[r("v-spacer"),t._v(" "),r("h4",{staticClass:"dashboard_modal_header__title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("click")}}},[r("v-icon",[t._v("mdi-close")])],1)],1)}),[],!1,null,"12be0d6f",null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:f.a,VSpacer:m.a})},635:function(t,e,r){"use strict";r.r(e);var o={props:{btnOkText:{type:String,required:!0},isLoading:{type:Boolean,required:!0},isDisabled:{type:Boolean,required:!0}}},n=(r(632),r(22)),d=r(30),l=r.n(d),c=r(608),f=r(617),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_modal_footer"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"v-btn--dashboard_modal_footer mr_2",attrs:{text:"",depressed:""},on:{click:function(e){return t.$emit("close")}}},[t._v("\n    Cancelar\n  ")]),t._v(" "),r("v-btn",{staticClass:"v-btn--dashboard_modal_footer",attrs:{color:"primary",depressed:"",type:"submit",loading:t.isLoading,disabled:t.isDisabled||t.isLoading}},[t._v("\n    "+t._s(t.btnOkText)+"\n  ")])],1)}),[],!1,null,"5241ad4f",null);e.default=component.exports;l()(component,{VBtn:c.a,VSpacer:f.a})},636:function(t,e,r){"use strict";r(627)},637:function(t,e,r){var o=r(12)(!1);o.push([t.i,".dashboard_modal[data-v-1585054b]{background-color:#fff;padding:32px;border-radius:8px}.dashboard_modal__content[data-v-1585054b]{margin-bottom:32px}",""]),t.exports=o},639:function(t,e,r){"use strict";r.r(e);var o=r(634),n=r(635),d={components:{ModalFormHeader:o.default,ModalFormFooter:n.default},props:{title:{type:String,required:!0},btnOkText:{type:String,default:"Crear"},value:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0},isDisabled:{type:Boolean,required:!0}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},l=(r(636),r(22)),c=r(30),f=r.n(c),m=r(618),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("form",{staticClass:"dashboard_modal",on:{submit:function(e){return e.preventDefault(),t.$emit("submit")}}},[r("ModalFormHeader",{attrs:{title:t.title},on:{click:function(e){t.dialog=!1}}}),t._v(" "),r("div",{staticClass:"dashboard_modal__content"},[t._t("default")],2),t._v(" "),r("ModalFormFooter",{attrs:{btnOkText:t.btnOkText,isLoading:t.isLoading,isDisabled:t.isDisabled},on:{close:function(e){t.dialog=!1}}})],1)])}),[],!1,null,"1585054b",null);e.default=component.exports;f()(component,{VDialog:m.a})},640:function(t,e,r){"use strict";var o=r(639);var n=function(t,e){var r=[],o=t.$dirty,n=t.required;return o?(!n&&r.push(this.$t("validations.required")),r):r},d=r(441);e.a={components:{ModalForm:o.default},props:{active:{type:Boolean,required:!0},data:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},data:function(){return{fieldsPick:[],form:{}}},computed:{dialog:{get:function(){return this.active},set:function(t){this.$emit("close",t)}}},watch:{active:function(t,e){t?this.form=Object(d.pick)(JSON.parse(JSON.stringify(this.data)),this.fieldsPick):this.$v.$reset()}},methods:{vuelidateErrors:n,submitForm:function(){this.$emit("submit",Object(d.pick)(JSON.parse(JSON.stringify(this.form)),this.fieldsPick))}}}},665:function(t,e,r){"use strict";r(629)},666:function(t,e,r){var o=r(12)(!1);o.push([t.i,".dashboard_page__header[data-v-10f9c690]{margin-bottom:32px}.dashboard_page__pre[data-v-10f9c690]{margin-bottom:12px}.dashboard_page__back[data-v-10f9c690]{display:flex;align-items:center;cursor:pointer}.dashboard_page__back_icon[data-v-10f9c690]{font-size:18px;color:#7c8286;margin-right:12px}.dashboard_page__back_text[data-v-10f9c690]{font-size:14px;line-height:20px;color:#7c8286}.dashboard_page__body[data-v-10f9c690]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.dashboard_page__title[data-v-10f9c690]{font-size:30px;font-weight:600;line-height:32px;color:#b6c8ef}",""]),t.exports=o},667:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0},btnAddText:{type:String,default:"-"},hasBack:{type:Boolean,default:!1}}},n=(r(665),r(22)),d=r(30),l=r.n(d),c=r(608),f=r(188),m=r(617),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_page__header"},[t.hasBack?r("div",{staticClass:"dashboard_page__pre"},[r("div",{staticClass:"dashboard_page__back",on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{staticClass:"dashboard_page__back_icon"},[t._v("mdi-arrow-left")]),t._v(" "),r("span",{staticClass:"dashboard_page__back_text"},[t._v(" Volver ")])],1)]):t._e(),t._v(" "),r("div",{staticClass:"dashboard_page__body"},[r("h1",{staticClass:"dashboard_page__title"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"dashboard_page__items"},[t._t("items",[r("v-btn",{staticClass:"v-btn--btn_action",attrs:{color:"#ffffff",depressed:""},on:{click:function(e){return t.$emit("click")}}},[t._v("\n          "+t._s(t.btnAddText)+"\n        ")])])],2)],1)])}),[],!1,null,"10f9c690",null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:f.a,VSpacer:m.a})},724:function(t,e,r){var content=r(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("680a119e",content,!0,{sourceMap:!1})},739:function(t,e,r){"use strict";r(724)},740:function(t,e,r){var o=r(12)(!1);o.push([t.i,".dashboard_card[data-v-0556ba00]{border:1px solid #d1d3d5;padding:24px 32px;background-color:#fff;border-radius:8px}.dashboard_card__header[data-v-0556ba00]{display:flex;justify-content:space-between;margin-bottom:16px}.dashboard_card__title[data-v-0556ba00]{font-size:14px;font-weight:600;line-height:16px;color:#b6c8ef}",""]),t.exports=o},755:function(t,e,r){var content=r(823);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("2bc7d000",content,!0,{sourceMap:!1})},764:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0}}},n=(r(739),r(22)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard_card"},[r("div",{staticClass:"dashboard_card__header"},[r("h3",{staticClass:"dashboard_card__title"},[t._v(t._s(t.title))]),t._v(" "),t._t("items")],2),t._v(" "),t._t("default")],2)}),[],!1,null,"0556ba00",null);e.default=component.exports},765:function(t,e,r){"use strict";r.r(e);r(46);var o=r(638),n={mixins:[r(640).a],validations:{form:{name:{required:o.required},ethAddress:{required:o.required}}},data:function(){return{fieldsPick:["name","ethAddress"]}},computed:{nameErrors:function(){return this.vuelidateErrors(this.$v.form.name,"required")},ethAddressErrors:function(){return this.vuelidateErrors(this.$v.form.ethAddress,"required")}}},d=r(22),l=r(30),c=r.n(l),f=r(844),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ModalForm",{attrs:{isLoading:t.isLoading,isDisabled:t.$v.$invalid,title:"Nuevo becario"},on:{submit:t.submitForm},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-text-field",{attrs:{label:"Nombre del becario","error-messages":t.nameErrors,autofocus:""},on:{input:function(e){return t.$v.form.name.$touch()},blur:function(e){return t.$v.form.name.$touch()}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{attrs:{label:"Dirección de ethereum","error-messages":t.ethAddressErrors},on:{input:function(e){return t.$v.form.ethAddress.$touch()},blur:function(e){return t.$v.form.ethAddress.$touch()}},model:{value:t.form.ethAddress,callback:function(e){t.$set(t.form,"ethAddress",e)},expression:"form.ethAddress"}})],1)}),[],!1,null,"785682f4",null);e.default=component.exports;c()(component,{VTextField:f.a})},766:function(t,e,r){"use strict";r.r(e);r(46);var o=r(638),n={mixins:[r(640).a],validations:{form:{name:{required:o.required}}},data:function(){return{fieldsPick:["name","_id"]}},computed:{nameErrors:function(){return this.vuelidateErrors(this.$v.form.name,"name")}}},d=r(22),l=r(30),c=r.n(l),f=r(844),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ModalForm",{attrs:{isLoading:t.isLoading,isDisabled:t.$v.$invalid,title:"Actualizar proyecto"},on:{submit:t.submitForm},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-text-field",{attrs:{label:"Nombre (*)",required:"","error-messages":t.nameErrors,autofocus:""},on:{input:function(e){return t.$v.form.name.$touch()},blur:function(e){return t.$v.form.name.$touch()}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)}),[],!1,null,"307667e0",null);e.default=component.exports;c()(component,{VTextField:f.a})},822:function(t,e,r){"use strict";r(755)},823:function(t,e,r){var o=r(12)(!1);o.push([t.i,"",""]),t.exports=o},850:function(t,e,r){"use strict";r.r(e);r(46),r(65);var o=r(11),n=r(764),d=r(667),l=r(765),c=r(766),f=(r(162),r(441)),m={data:function(){return{modal:{data:{},active:!1,isLoading:!1}}},methods:{setModal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.active,r=void 0===e?"":e,o=t.data,data=void 0===o?{}:o,n=t.isLoading,d=void 0!==n&&n;this.modal.active=r,this.modal.isLoading=d,this.modal.data=data},closeModal:function(){this.setModal({active:"",data:{}})},loadingModal:function(){this.modal.isLoading=!0},findIndexById:function(t,e){return Object(f.findIndex)(t,["_id",e])},updateItemIsLoadingProp:function(t,e,r){this.$set(t[this.findIndexById(t,e)],"isLoading",r)},deleteItem:function(t,e){var r=Object(f.findIndex)(t,["_id",e]);t.splice(r,1)},updateItem:function(t,e,data){var r=Object(f.findIndex)(t,["_id",e]);t.splice(r,1,data)},addItem:function(t,data){t.push(data)}}},v=(r(262),{mixins:[m],components:{DashboardPageHeader:d.default,DashboardCard:n.default,ModalFormNewScholar:l.default,ModalFormUpdateProject:c.default},data:function(){return{isFirstLoading:!0,scholars:[],headers:[{text:"Nombre",value:"name"},{text:"Promedio",value:"average"},{text:"Sin reclamar",value:"unclaimed"},{text:"Reclamado",value:"claimed"},{text:"Total",value:"total"},{text:"Ultimo reclamo",value:"lastClaimDateDay"},{text:"Acciones",value:"actions",sortable:!1}]}},mounted:function(){this.isFirstLoading=!1},methods:{addScholar:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,d,l,c,f,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.name,n=t.ethAddress,r.prev=1,r.next=4,e.$axios.$get("https://lunacia.skymavis.com/game-api/clients/".concat(n,"/items/1"));case 4:d=r.sent,l=new Date(1e3*d.last_claimed_item_at),c=e.$moment(l,"DD-MM-YYYY"),(f=new Date).setHours(21),f.setMinutes(0),f.setSeconds(0),m=e.$moment(new Date,"DD-MM-YYYY"),e.scholars.push({name:o,ethAddress:n,unclaimed:d.total,claimed:d.claimable_total,total:d.total,lastClaimDateDay:m.diff(c,"days")}),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(1),console.log({error:r.t0});case 18:return r.prev=18,r.finish(18);case 20:case"end":return r.stop()}}),r,null,[[1,15,18,20]])})))()}}}),_=(r(822),r(22)),h=r(30),x=r.n(h),y=r(608),k=r(848),$=r(188),M=r(190),C=r(114),D=r(104),L=r(751),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("div",{staticClass:"project__container custom_container custom_container_fluid"},[r("DashboardPageHeader",{attrs:{title:"Becarios",btnAddText:"Agregar becario"},on:{click:function(e){return t.setModal({active:"scholar_new",data:{ethAddress:""}})}}}),t._v(" "),r("v-data-table",{staticClass:"v-data-table--custom",attrs:{headers:t.headers,items:t.scholars,"mobile-breakpoint":"0","loading-text":"Cargando becarios","no-data-text":"No hay becarios cargados",loading:t.isFirstLoading},scopedSlots:t._u([{key:"item.name",fn:function(e){var o=e.item;return[r("a",{attrs:{href:"https://marketplace.axieinfinity.com/profile/"+o+"/axie"}},[t._v("\n          "+t._s(o.name)+"\n        ")])]}},{key:"item.lastClaimDateDay",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(r.lastClaimDateDay)+" días\n      ")]}},{key:"item.average",fn:function(e){var r=e.item;return[t._v("\n        "+t._s((r.total/r.lastClaimDateDay).toFixed(2))+"\n      ")]}},{key:"item.actions",fn:function(e){var o=e.item;return[r("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(e){return t.setModal({active:"scholar_update",data:o})}}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Editar becarios")])],1)],1),t._v(" "),r("v-list-item",{attrs:{disabled:o.isLoading}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Eliminar becarios")])],1)],1)],1)],1)]}}])})],1),t._v(" "),r("ModalFormNewScholar",{attrs:{active:"scholar_new"===t.modal.active,data:t.modal.data,isLoading:t.modal.isLoading},on:{close:t.closeModal,submit:t.addScholar}})],1)}),[],!1,null,"532163b4",null);e.default=component.exports;x()(component,{VBtn:y.a,VDataTable:k.a,VIcon:$.a,VList:M.a,VListItem:C.a,VListItemContent:D.a,VListItemTitle:D.b,VMenu:L.a})}}]);