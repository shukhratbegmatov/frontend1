(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{426:function(t,e,r){},499:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAaxJREFUOE99U8FVwkAQ/csD8SZWIFQgVCA8w1moQLgInMQKxArEU8QLWIFwBp/pQKjAWIFwQ4Osf3dDCBCZQ5Kd2fnz589EIGzdfArfiUtAlgCR5jvF8BgCDg4WD6g60437PIjAYVt5CNHlmYlRJqcQsoraaz8cNQAm+c0PTCCWLSx/xzjEFPN4lmWarHWh40LeoDZqr0AEDO13XVniGY1hJZKAXawQiAzJRC5yaDiuxkPHakKKe35PUB9mo+n7XrvYY4bSaID6iDopALvo8HlG2uXt/nbA7HwaIvFBv8tiGR/Actn/CaSXWdHay+LR4iTEEZLesZqKwJZjb7IRfKPgugUpC2iMnL0ARvAvajCjBmpHlAZWiy3c0tmns7xfxOBuSESNGudI2JdElWPsRYI8FbNYQo0biCGHq+HYMFDWOS9Bxl78xB4FvQsEVQV+4tccdcuPuxQwt1rr9SrrfQAvkYk2LgyE2v10wEjKTz0x9X8kvYKZQtj0nONtAnF99UUFNOPDQYwMEp5LER2eT1cgmwBhMEV9jtTObphJ+CBy8D/ABrWtgxGeWon+H/evq8jLPwzuAAAAAElFTkSuQmCC"},500:function(t,e,r){"use strict";var h=r(426);r.n(h).a},544:function(t,e,r){"use strict";r.r(e);var h=[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"search_org",attrs:{id:"w0",action:"/oz/site/authority",method:"get"}},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"search",name:"SearchForm[text]",maxlength:"255",placeholder:"Tashkilot nomini kiriting ...","aria-required":"true"}}),this._v(" "),e("button",{staticClass:"btn inner_search_btn",attrs:{type:"submit"}},[e("img",{attrs:{src:r(499),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"highcharts-title",staticStyle:{position:"absolute","font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"16px","white-space":"nowrap","margin-left":"0px","margin-top":"0px",left:"50px",top:"48px"},attrs:{"data-z-index":"4"}},[e("p",{staticStyle:{"font-size":"22px","font-weight":"bold","text-align":"center",position:"absolute",top:"0",left:"50%",transform:"translate(-50%, -50%)"}},[this._v("2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"highcharts-title",staticStyle:{position:"absolute","font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"16px","white-space":"nowrap","margin-left":"0px","margin-top":"0px",left:"50px",top:"48px"},attrs:{"data-z-index":"4"}},[e("p",{staticStyle:{"font-size":"22px","font-weight":"bold","text-align":"center",position:"absolute",top:"0",left:"50%",transform:"translate(-50%, -50%)"}},[this._v("5")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"highcharts-title",staticStyle:{position:"absolute","font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"16px","white-space":"nowrap","margin-left":"0px","margin-top":"0px",left:"50px",top:"48px"},attrs:{"data-z-index":"4"}},[e("p",{staticStyle:{"font-size":"22px","font-weight":"bold","text-align":"center",position:"absolute",top:"0",left:"50%",transform:"translate(-50%, -50%)"}},[this._v("4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"highcharts-label highcharts-tooltip highcharts-color-0",staticStyle:{position:"absolute",left:"192px",top:"-9999px",opacity:"0",cursor:"default","pointer-events":"none",visibility:"hidden"}},[e("span",{staticStyle:{position:"absolute","font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"16px","white-space":"nowrap","margin-left":"0px","margin-top":"0px",left:"8px",top:"8px"},attrs:{"data-z-index":"1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"highchart_left_list my-5"},[e("li",[e("p",[this._v("\n                      Barcha baholashlar soni "),e("i",[this._v("100")])])]),this._v(" "),e("li",[e("span",{staticClass:"bg_orange"},[e("img",{attrs:{src:"/img/list_icon_3.png",alt:""}})]),this._v(" "),e("p",[this._v("\n                      Oʼrtacha baho "),e("i",[this._v("5.0")])])])])}],l={data:function(){return{regions:[],districts:[],reg_id:"",dis_id:"",organiz:[],organ_name:"",retings:"",xiz:"",organiza:""}},mounted:function(){var t=this;this.$axios.get("regions/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.regions=e.data,console.log(e.data)}))},methods:{distrct:function(){var t=this;this.$axios.get("organizations/?region=".concat(this.reg_id),{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.organiz=e.data,console.log(e.data)}))},organisation:function(){var t=this;this.$axios.get("organizations/?region=".concat(this.reg_id),{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.organiz=e.data,console.log(e.data)}))}}},n=(r(500),r(68)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("section",{staticClass:"content"},[r("div",{staticClass:"container my-4"},[r("h1",[t._v("Statistika")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[r("div",{staticClass:"mr-2",staticStyle:{width:"100%"}},[r("label",[t._v("Hudud")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.reg_id,expression:"reg_id"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.reg_id=e.target.multiple?r:r[0]},t.distrct]}},t._l(t.regions,(function(e,h){return r("option",{key:h,domProps:{value:e.id}},[t._v(t._s(e.title))])})),0)])])])]),t._v(" "),r("div",{staticClass:"container  has_width"},[r("div",{staticClass:"inner_content "},[r("div",{staticClass:"flex-row row  center_border"},[r("div",{staticClass:"col-md-6"},[r("span",{staticClass:"title title_in"},[t._v("O‘ZBEKISTON RESPUBLIKASI YOSHLAR SIYOSATI VA SPORT VAZIRLIGI")]),t._v(" "),t._m(0),t._v(" "),r("ul",{staticClass:"inner_org_list",attrs:{id:"auth_list"}},[t._l(t.organiz,(function(e,h){return r("li",{key:h,attrs:{value:e}},[r("a",{attrs:{href:"#"}},[t._v("\n                  "+t._s(e.title)+"\n                    "),r("br"),t._v(" "),r("span",{staticClass:"text-primary"},[t._v("ma'sul xodimi "+t._s(e.leader.name))])])])})),t._v(" "),r("div",{staticClass:"pagination_b"})],2)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"right_side_two"},[r("span",{staticClass:"title title_in"},[t._v("Qashqadaryo viloyati bosh boshqarmasi")]),t._v(" "),r("ul",{staticClass:"result_org_list"},[r("li",[t._v("\n                    Sport ta`lim muassasalariga qabul qilish\n                    "),r("div",{staticStyle:{overflow:"hidden"},attrs:{id:"container2","data-highcharts-chart":"1"}},[r("div",{staticClass:"highcharts-container ",staticStyle:{position:"relative",overflow:"hidden",width:"100px",height:"100px","text-align":"left","line-height":"normal","z-index":"0","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","user-select":"none","touch-action":"manipulation",outline:"none"},attrs:{id:"highcharts-xx41qcm-28",dir:"ltr"}},[r("svg",{staticClass:"red_style",staticStyle:{"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"12px"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[r("desc",[t._v("Created with Highcharts 9.2.2")]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"highcharts-xx41qcm-30-"}},[r("rect",{attrs:{x:"0",y:"0",width:"80",height:"75",fill:"none"}})])]),t._v(" "),r("rect",{staticClass:"highcharts-background",attrs:{fill:"#ffffff",x:"0",y:"0",width:"100",height:"100",rx:"0",ry:"0"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-background",attrs:{fill:"none",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-pane-group",attrs:{"data-z-index":"0"}},[r("path",{staticClass:"highcharts-pane ",attrs:{fill:"#E5E5E5",d:"M 50 10.84375 A 36.65625 36.65625 0 1 1 49.96334375610935 10.843768328123474 M 49.96812500531248 15.62501593749867 A 31.875 31.875 0 1 0 50 15.625"}})]),t._v(" "),r("g",{staticClass:"highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid",attrs:{"data-z-index":"1"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-border",attrs:{fill:"none","data-z-index":"1",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-axis highcharts-yaxis highcharts-radial-axis",attrs:{"data-z-index":"2"}},[r("path",{staticClass:"highcharts-axis-line",attrs:{fill:"none","data-z-index":"7",d:"M 50 15.625 A 31.875 31.875 0 1 1 49.96812500531248 15.62501593749867 M 50 47.5 A 0 0 0 1 0 50 47.5"}})]),t._v(" "),r("g",{staticClass:"highcharts-series-group",attrs:{"data-z-index":"3"}},[r("g",{staticClass:"highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"url(#highcharts-xx41qcm-30-)"}},[r("path",{staticClass:"highcharts-point highcharts-color-0",attrs:{d:"M 40 0.84375 A 36.65625 36.65625 0 1 1 39.96334375610935 0.843768328123474 M 39.96812500531248 5.62501593749867 A 31.875 31.875 0 1 0 40 5.625","sweep-flag":"0","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),r("g",{staticClass:"highcharts-markers highcharts-series-0 highcharts-solidgauge-series",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"none"}})]),t._v(" "),r("text",{staticClass:"highcharts-subtitle",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"50","text-anchor":"middle","data-z-index":"4",y:"10"}}),t._v(" "),r("text",{staticClass:"highcharts-caption",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"10","text-anchor":"start","data-z-index":"4",y:"97"}}),t._v(" "),r("g",{staticClass:"highcharts-legend highcharts-no-tooltip",attrs:{"data-z-index":"7"}},[r("rect",{staticClass:"highcharts-legend-box",attrs:{fill:"none",rx:"0",ry:"0",x:"0",y:"0",width:"8",height:"8",visibility:"hidden"}}),t._v(" "),r("g",{attrs:{"data-z-index":"1"}},[r("g")])]),t._v(" "),r("g",{staticClass:"highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels",attrs:{"data-z-index":"7"}})]),t._v(" "),t._m(1)])])]),t._v(" "),r("li",[t._v("\n                    Sport unvonlari va sport razryadlarini berish\n                    "),r("div",{staticStyle:{overflow:"hidden"},attrs:{id:"container3","data-highcharts-chart":"2"}},[r("div",{staticClass:"highcharts-container ",staticStyle:{position:"relative",overflow:"hidden",width:"100px",height:"100px","text-align":"left","line-height":"normal","z-index":"0","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","user-select":"none","touch-action":"manipulation",outline:"none"},attrs:{id:"highcharts-xx41qcm-31",dir:"ltr"}},[r("svg",{staticClass:"blue_style",staticStyle:{"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"12px"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[r("desc",[t._v("Created with Highcharts 9.2.2")]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"highcharts-xx41qcm-33-"}},[r("rect",{attrs:{x:"0",y:"0",width:"80",height:"75",fill:"none"}})])]),t._v(" "),r("rect",{staticClass:"highcharts-background",attrs:{fill:"#ffffff",x:"0",y:"0",width:"100",height:"100",rx:"0",ry:"0"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-background",attrs:{fill:"none",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-pane-group",attrs:{"data-z-index":"0"}},[r("path",{staticClass:"highcharts-pane ",attrs:{fill:"#E5E5E5",d:"M 50 10.84375 A 36.65625 36.65625 0 1 1 49.96334375610935 10.843768328123474 M 49.96812500531248 15.62501593749867 A 31.875 31.875 0 1 0 50 15.625"}})]),t._v(" "),r("g",{staticClass:"highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid",attrs:{"data-z-index":"1"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-border",attrs:{fill:"none","data-z-index":"1",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-axis highcharts-yaxis highcharts-radial-axis",attrs:{"data-z-index":"2"}},[r("path",{staticClass:"highcharts-axis-line",attrs:{fill:"none","data-z-index":"7",d:"M 50 15.625 A 31.875 31.875 0 1 1 49.96812500531248 15.62501593749867 M 50 47.5 A 0 0 0 1 0 50 47.5"}})]),t._v(" "),r("g",{staticClass:"highcharts-series-group",attrs:{"data-z-index":"3"}},[r("g",{staticClass:"highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"url(#highcharts-xx41qcm-33-)"}},[r("path",{staticClass:"highcharts-point highcharts-color-0",attrs:{d:"M 40 0.84375 A 36.65625 36.65625 0 1 1 39.96334375610935 0.843768328123474 M 39.96812500531248 5.62501593749867 A 31.875 31.875 0 1 0 40 5.625","sweep-flag":"0","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),r("g",{staticClass:"highcharts-markers highcharts-series-0 highcharts-solidgauge-series",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"none"}})]),t._v(" "),r("text",{staticClass:"highcharts-subtitle",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"50","text-anchor":"middle","data-z-index":"4",y:"10"}}),t._v(" "),r("text",{staticClass:"highcharts-caption",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"10","text-anchor":"start","data-z-index":"4",y:"97"}}),t._v(" "),r("g",{staticClass:"highcharts-legend highcharts-no-tooltip",attrs:{"data-z-index":"7"}},[r("rect",{staticClass:"highcharts-legend-box",attrs:{fill:"none",rx:"0",ry:"0",x:"0",y:"0",width:"8",height:"8",visibility:"hidden"}}),t._v(" "),r("g",{attrs:{"data-z-index":"1"}},[r("g")])]),t._v(" "),r("g",{staticClass:"highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels",attrs:{"data-z-index":"7"}})]),t._v(" "),t._m(2)])])]),t._v(" "),r("li",[t._v("\n                    Sportchining sport pasportini berish\n                    "),r("div",{staticStyle:{overflow:"hidden"},attrs:{id:"container4","data-highcharts-chart":"3"}},[r("div",{staticClass:"highcharts-container ",staticStyle:{position:"relative",overflow:"hidden",width:"100px",height:"100px","text-align":"left","line-height":"normal","z-index":"0","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","user-select":"none","touch-action":"manipulation",outline:"none"},attrs:{id:"highcharts-xx41qcm-34",dir:"ltr"}},[r("svg",{staticClass:"yellow_style",staticStyle:{"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',"font-size":"12px"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[r("desc",[t._v("Created with Highcharts 9.2.2")]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"highcharts-xx41qcm-36-"}},[r("rect",{attrs:{x:"0",y:"0",width:"80",height:"75",fill:"none"}})])]),t._v(" "),r("rect",{staticClass:"highcharts-background",attrs:{fill:"#ffffff",x:"0",y:"0",width:"100",height:"100",rx:"0",ry:"0"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-background",attrs:{fill:"none",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-pane-group",attrs:{"data-z-index":"0"}},[r("path",{staticClass:"highcharts-pane ",attrs:{fill:"#E5E5E5",d:"M 50 10.84375 A 36.65625 36.65625 0 1 1 49.96334375610935 10.843768328123474 M 49.96812500531248 15.62501593749867 A 31.875 31.875 0 1 0 50 15.625"}})]),t._v(" "),r("g",{staticClass:"highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid",attrs:{"data-z-index":"1"}}),t._v(" "),r("rect",{staticClass:"highcharts-plot-border",attrs:{fill:"none","data-z-index":"1",x:"10",y:"10",width:"80",height:"75"}}),t._v(" "),r("g",{staticClass:"highcharts-axis highcharts-yaxis highcharts-radial-axis",attrs:{"data-z-index":"2"}},[r("path",{staticClass:"highcharts-axis-line",attrs:{fill:"none","data-z-index":"7",d:"M 50 15.625 A 31.875 31.875 0 1 1 49.96812500531248 15.62501593749867 M 50 47.5 A 0 0 0 1 0 50 47.5"}})]),t._v(" "),r("g",{staticClass:"highcharts-series-group",attrs:{"data-z-index":"3"}},[r("g",{staticClass:"highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"url(#highcharts-xx41qcm-36-)"}},[r("path",{staticClass:"highcharts-point highcharts-color-0",attrs:{d:"M 40 0.84375 A 36.65625 36.65625 0 1 1 39.96334375610935 0.843768328123474 M 39.96812500531248 5.62501593749867 A 31.875 31.875 0 1 0 40 5.625","sweep-flag":"0","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),r("g",{staticClass:"highcharts-markers highcharts-series-0 highcharts-solidgauge-series",attrs:{"data-z-index":"0.1",opacity:"1",transform:"translate(10,10) scale(1 1)","clip-path":"none"}})]),t._v(" "),r("text",{staticClass:"highcharts-subtitle",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"50","text-anchor":"middle","data-z-index":"4",y:"10"}}),t._v(" "),r("text",{staticClass:"highcharts-caption",staticStyle:{color:"#666666",fill:"#666666"},attrs:{x:"10","text-anchor":"start","data-z-index":"4",y:"97"}}),t._v(" "),r("g",{staticClass:"highcharts-legend highcharts-no-tooltip",attrs:{"data-z-index":"7"}},[r("rect",{staticClass:"highcharts-legend-box",attrs:{fill:"none",rx:"0",ry:"0",x:"0",y:"0",width:"8",height:"8",visibility:"hidden"}}),t._v(" "),r("g",{attrs:{"data-z-index":"1"}},[r("g")])]),t._v(" "),r("g",{staticClass:"highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels",attrs:{"data-z-index":"7"}}),t._v(" "),r("g",{staticClass:"highcharts-label highcharts-tooltip highcharts-color-0",staticStyle:{cursor:"default","white-space":"nowrap","pointer-events":"none"},attrs:{"data-z-index":"8",transform:"translate(192,-9999)",opacity:"0",visibility:"hidden"}},[r("path",{staticClass:"highcharts-label-box highcharts-tooltip-box",attrs:{fill:"none",d:"M 3 0 L 13 0 C 16 0 16 0 16 3 L 16 13 C 16 16 16 16 13 16 L 3 16 C 0 16 0 16 0 13 L 0 8 L -142 -132 L 0 8 L 0 3 C 0 0 0 0 3 0"}})])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])]),t._v(" "),t._m(5)])])])])])])])}),h,!1,null,null,null);e.default=component.exports}}]);