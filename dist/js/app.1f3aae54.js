(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,v=[];d<s.length;d++)o=s[d],r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("ToolBar"),a("v-container",{attrs:{fluid:""}},[a("SelectBox"),a("TableView")],1),a("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{attrs:{dark:""}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("school")])],1),a("v-toolbar-title",{staticClass:"white--text"},[e._v("暨大課程查詢")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){t.stopPropagation(),e.dialog_1=!0}}},[e._v("使用說明")]),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){t.stopPropagation(),e.dialog_2=!0}}},[e._v("問題回報")]),a("v-btn",{attrs:{flat:"",href:"https://github.com/yiyu0x/ncnu-course-X/issues"}},[e._v("參與協助")])],1),a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog_1,callback:function(t){e.dialog_1=t},expression:"dialog_1"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("使用說明")]),a("v-card-text",[a("p",[e._v("\n        請用\n        "),a("b",[e._v("學院")]),e._v("、\n        "),a("b",[e._v("系所")]),e._v("來指定搜尋條件\n        ")]),a("p",[a("b",[e._v("教師姓名")]),e._v("、\n        "),a("b",[e._v("課程名稱")]),e._v("只要輸入一個字後，即會啟動自動提示功能\n        ")]),a("p",[e._v("\n        表格內之\n        "),a("b",[e._v("篩選器")]),e._v("可以將搜尋後的表格內容，進一步用純文字篩選\n        ")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.dialog_1=!1}}},[e._v("關閉")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog_2,callback:function(t){e.dialog_2=t},expression:"dialog_2"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("問題回報")]),a("v-card-text",[a("p",[e._v("\n        如果有任何使用上的問題、改進空間，請來信告知(\n        "),a("b",[e._v("yiyu0x@icloud.com")]),e._v(")\n        ")]),a("p",[e._v('如果你有能力協助系統改善，請點擊 "參與協助" 發送 issue 或 PR')])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.dialog_2=!1}}},[e._v("關閉")])],1)],1)],1)],1)},c=[],l={data:function(){return{dialog_1:!1,dialog_2:!1}}},u=l,d=a("2877"),v=a("6544"),f=a.n(v),_=a("8336"),p=a("b0af"),h=a("99d9"),m=a("12b2"),g=a("169a"),x=a("ce7e"),b=a("132d"),y=a("9910"),w=a("71d9"),C=a("2a7f"),V=Object(d["a"])(u,s,c,!1,null,null,null);V.options.__file="ToolBar.vue";var k=V.exports;f()(V,{VBtn:_["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:m["a"],VDialog:g["a"],VDivider:x["a"],VIcon:b["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[a("v-select",{attrs:{items:e.faculty,label:"學院"},on:{change:function(t){e.getDataFac(e.fac)}},model:{value:e.fac,callback:function(t){e.fac=t},expression:"fac"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[a("v-select",{attrs:{items:e.department,label:"系所"},on:{change:function(t){e.getDataDep(e.dep)}},model:{value:e.dep,callback:function(t){e.dep=t},expression:"dep"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-autocomplete",{staticClass:"mx-3",attrs:{loading:e.loading_teacher,items:e.items_teacher,"search-input":e.search_teacher,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"教師姓名","solo-inverted":""},on:{"update:searchInput":function(t){e.search_teacher=t},input:function(t){e.getDataTeacher(e.teacher_name)}},model:{value:e.teacher_name,callback:function(t){e.teacher_name=t},expression:"teacher_name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-autocomplete",{staticClass:"mx-3",attrs:{loading:e.loading_course,items:e.items_course,"search-input":e.search_course,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"課程名稱","solo-inverted":""},on:{"update:searchInput":function(t){e.search_course=t},input:function(t){e.getDataCourse(e.cname)}},model:{value:e.cname,callback:function(t){e.cname=t},expression:"cname"}})],1)],1)],1)},T=[],O=(a("57e7"),a("d25f"),a("bc3a")),j=a.n(O),D={data:function(){return{faculty:["人文學院","管理學院","科技學院","教育學院"],department:[],fac:"",dep:"",teacher_name:"",cname:"",items_teacher:[],items_course:[],loading_teacher:!1,loading_course:!1,search_teacher:null,search_course:null,select_teacher:null,select_course:null,teacher_name_box:[],course_name_box:[]}},mounted:function(){var e=this;j.a.get(oe+"/api/teacherList/all").then(function(t){e.teacher_name_box=t.data}),j.a.get(oe+"/api/courseList/all").then(function(t){e.course_name_box=t.data})},methods:{getDataFac:function(e){j.a.get(oe+"/api/faculty/"+e).then(function(e){ie.$emit("serverSelected",e.data)})},getDataDep:function(e){j.a.get(oe+"/api/department/"+e).then(function(e){ie.$emit("serverSelected",e.data)})},getDataTeacher:function(e){j.a.get(oe+"/api/teacher/"+e).then(function(e){ie.$emit("serverSelected",e.data)})},getDataCourse:function(e){j.a.get(oe+"/api/course/"+e).then(function(e){ie.$emit("serverSelected",e.data)})},querySelections_teacher:function(e){var t=this;this.loading=!0,setTimeout(function(){t.items_teacher=t.teacher_name_box.filter(function(t){return(t||"").toLowerCase().indexOf((e||"").toLowerCase())>-1}),t.loading=!1},500)},querySelections_course:function(e){var t=this;this.loading=!0,setTimeout(function(){t.items_course=t.course_name_box.filter(function(t){return(t||"").toLowerCase().indexOf((e||"").toLowerCase())>-1}),t.loading=!1},500)}},watch:{fac:function(){var e=this;j.a.get(oe+"/api/depList/"+this.fac).then(function(t){e.department=t.data})},search_teacher:function(e){e&&e!==this.select_teacher&&this.querySelections_teacher(e)},search_course:function(e){e&&e!==this.select_course&&this.querySelections_course(e)}}},L=D,$=a("c6a6"),P=a("a523"),F=a("0e8f"),B=a("a722"),A=a("b56d"),I=Object(d["a"])(L,S,T,!1,null,null,null);I.options.__file="SelectBox.vue";var E=I.exports;f()(I,{VAutocomplete:$["a"],VContainer:P["a"],VFlex:F["a"],VLayout:B["a"],VSelect:A["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{dark:""}},[a("v-card-title",[e._v("\n        課程資訊\n        "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"篩選器 (任意輸入文字來篩選結果)","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.info,loading:e.isLoading,search:e.search,"hide-actions":"",dark:""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(a){e.showInfo(t.item.course_id)}}},[a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.course_cname))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.course_id))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.department))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.division))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.course_credit))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.time))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.location))]),a("td",{staticClass:"text-xs"},[e._v(e._s(t.item.teacher))])])]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1),a("v-dialog",{attrs:{"max-width":"40%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("iframe",{staticStyle:{width:"100%",height:"700px"},attrs:{src:e.dataUrl}})])],1)],1)},M=[],U={data:function(){return{search:"",headers:[{text:"課程名稱",align:"left",value:"course_cname",sortable:!1},{text:"課號",value:"course_id"},{text:"開課單位",value:"department"},{text:"年級",value:"division"},{text:"學分",value:"course_credit"},{text:"時段",value:"time"},{text:"地點",value:"location"},{text:"教師姓名",value:"teacher"}],info:[],isLoading:!0,dialog:!1,dataUrl:""}},created:function(){var e=this;this.isLoading=!0,ie.$on("serverSelected",function(t){e.info=t})},mounted:function(){var e=this;j.a.get(oe+"/api/20").then(function(t){e.info=t.data,e.isLoading=!1})},methods:{showInfo:function(e){this.dataUrl="https://ccweb.ncnu.edu.tw/student/current_semester_opened_listview.php?showdetail=&year=1071&courseid=".concat(e,"&class=0&modal=1&rnd=119581"),this.dialog=!0}}},J=U,R=a("8fea"),X=a("8e36"),z=a("2677"),G=Object(d["a"])(J,q,M,!1,null,null,null);G.options.__file="TableView.vue";var H=G.exports;f()(G,{VCard:p["a"],VCardTitle:m["a"],VDataTable:R["a"],VDialog:g["a"],VProgressLinear:X["a"],VSpacer:y["a"],VTextField:z["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-actions",{staticClass:"grey darken-3 justify-center"},[e._v("\n            ©- "),a("strong",[e._v("Copyright (c) 2018 aFish")])])],1)],1)},N=[],Q=a("553a"),W={},Y=Object(d["a"])(W,K,N,!1,null,null,null);Y.options.__file="Footer.vue";var Z=Y.exports;f()(Y,{VCard:p["a"],VCardActions:h["a"],VFooter:Q["a"]});var ee={name:"App",components:{ToolBar:k,SelectBox:E,TableView:H,Footer:Z},data:function(){return{}}},te=ee,ae=a("7496"),ne=Object(d["a"])(te,i,o,!1,null,null,null);ne.options.__file="App.vue";var re=ne.exports;f()(ne,{VApp:ae["a"],VContainer:P["a"]}),a.d(t,"serverBus",function(){return ie}),a.d(t,"base_url",function(){return oe});var ie=new n["a"],oe="https://api.ncnusa.ml";n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(re)}}).$mount("#app")}});
//# sourceMappingURL=app.1f3aae54.js.map