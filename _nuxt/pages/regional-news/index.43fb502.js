(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{395:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNTI4NjM2IDAuODYyMDFDMC4yNjgyODcgMS4xMjIzNiAwLjI2ODI4NyAxLjU0NDQ3IDAuNTI4NjM2IDEuODA0ODJMNC43MjM5IDYuMDAwMDhMMC41Mjg2MzcgMTAuMTk1M0MwLjI2ODI4NyAxMC40NTU3IDAuMjY4Mjg3IDEwLjg3NzggMC41Mjg2MzcgMTEuMTM4MkMwLjc4ODk4NiAxMS4zOTg1IDEuMjExMSAxMS4zOTg1IDEuNDcxNDUgMTEuMTM4Mkw2LjEzODExIDYuNDcxNDlDNi4zOTg0NiA2LjIxMTE0IDYuMzk4NDYgNS43ODkwMyA2LjEzODExIDUuNTI4NjhMMS40NzE0NSAwLjg2MjAxQzEuMjExMSAwLjYwMTY2MSAwLjc4ODk4NiAwLjYwMTY2MSAwLjUyODYzNiAwLjg2MjAxWiIgZmlsbD0iI0I0QkRDMSIvPg0KPC9zdmc+DQo="},396:function(t,e,n){t.exports=n.p+"img/footer-logo.21583fe.svg"},512:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"ico d-flex align-items-center justify-content-center"},[e("img",{attrs:{src:n(395),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("i",[e("img",{attrs:{src:n(396),alt:""}})])}],l=(n(18),n(10),n(13),n(21),n(22),n(20),n(14),n(1)),o=(n(40),n(8)),c=n(97);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ArchiveNewsRegion",data:function(){return{page:1,currentCat:"barcha"}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("newsCategory/fetchRegionCategory");case 2:return e.next=4,t.$store.dispatch("news/fetchAllRegionNews");case 4:case"end":return e.stop()}}),e)})))()},computed:_(_({},Object(c.b)({category:function(t){return t.newsCategory.category},allNews:function(t){return t.news.allNews},perPage:function(t){return t.news.perPage},total:function(t){return t.news.total},currentPage:function(t){return t.news.currentPage}})),{},{formatDate:function(){var t=this,e="uz_Latn";return"ru"==this.$i18n.locale?e="ru_RU":"en"==this.$i18n.locale&&(e="en_EN"),function(n){return t.$moment(n).locale(e).format("Do MMM")}}}),created:function(){this.page=this.currentPage},watch:{page:function(t){this.$store.dispatch("news/fetchAllRegionNewsPage",t)}}},w=n(68),m={name:"index",components:{ArchiveNews:Object(w.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"news archive-news"},[n("div",{staticClass:"container"},[n("div",{staticClass:"news-nav"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 d-flex align-items-center justify-content-between"},[n("h4",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news"}},[t._v("\n              "+t._s(t.$t("news"))+"\n            ")])],1),t._v(" "),n("nav",[t.category?n("b-dropdown",{staticClass:"region-btn",scopedSlots:t._u([{key:"button-content",fn:function(){return[n("span",[t._v("  "+t._s(t.$t("other")))]),t._v(" "),n("i",{staticClass:"ico"},[n("svg",{attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1.5264 1.10934C1.21858 0.818603 0.733348 0.832457 0.442614 1.14028C0.151879 1.44811 0.165734 1.93334 0.47356 2.22407L6.47356 7.89094C6.76901 8.16999 7.23088 8.17001 7.52636 7.89099L13.5273 2.22411C13.8352 1.9334 13.8491 1.44818 13.5584 1.14033C13.2676 0.832478 12.7824 0.818584 12.4746 1.10929L7.00002 6.27906L1.5264 1.10934Z",fill:"#CDCDCD",stroke:"#CDCDCD","stroke-width":"0.2"}})])])]},proxy:!0}],null,!1,368060832)},[t._v(" "),t._l(t.category,(function(e,r){return n("b-dropdown-item",{key:r,attrs:{href:"/"+t.$i18n.locale+"/regional-news/"+e.slug}},[t._v("\n                "+t._s(e.title)+"\n              ")])}))],2):t._e()],1)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"news-items"},t._l(t.allNews,(function(e,r){return n("div",{key:r,staticClass:"item",class:e.actual?"item-sticky":""},[n("nuxt-link",{staticClass:"img-wrap",attrs:{to:"/"+t.$i18n.locale+"/regional-news/post/"+e.id}},[n("img",{attrs:{src:e.thumbnail_url,alt:""}})]),t._v(" "),n("div",{staticClass:"item-card"},[n("nuxt-link",{staticClass:"title",attrs:{to:"/"+t.$i18n.locale+"/regional-news/post/"+e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("p",[n("span",{domProps:{textContent:t._s(t.formatDate(e.publish_date))}}),t._v(" "),n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/"+e.category_slug}},[t._v(t._s(e.category))])],1)],1)],1)})),0)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"pagination-wrap"},[n("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.perPage,"first-number":"","last-number":"","aria-controls":"stadiums-items"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])])])}),[],!1,null,"56af66da",null).exports}},f=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"breadcrumbs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale}},[t._v("\n                "+t._s(t.$t("home"))+"\n              ")]),t._v(" "),t._m(0)],1),t._v(" "),n("li",[t._v(t._s(t.$t("region_news"))+" ")])])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-9"},[n("div",{staticClass:"inner"},[n("archive-news")],1)]),t._v(" "),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"side-bar-nav"},[n("div",{staticClass:"side-bar-nav-head d-flex"},[t._m(1),t._v(" "),n("h6",[t._v(" "+t._s(t.$t("region_news")))])]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/sports-news"}},[t._v(t._s(t.$t("sport_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/regional-news"}},[t._v(t._s(t.$t("region_news")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/ministry-news"}},[t._v(t._s(t.$t("ministerial_edition")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/anonslar-va-elonlar-1"}},[t._v(t._s(t.$t("announcement")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/hayati-yigilishlari"}},[t._v(t._s(t.$t("board_meeting")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/oav-akkreditatsiyadan-otkazish"}},[t._v(t._s(t.$t("media_accredited_firing")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/news/yangiliklar"}},[t._v(t._s(t.$t("news_of_uzbekistan")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/video"}},[t._v(t._s(t.$t("videos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/press-relizlar"}},[t._v(t._s(t.$t("press_realization")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/media/fotos"}},[t._v(t._s(t.$t("fotos")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/media-is-about-us"}},[t._v(t._s(t.$t("media_is_about_us")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/vazirning-nutqlari"}},[t._v(t._s(t.$t("minister_speeches")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/static/intervyu"}},[t._v(t._s(t.$t("interview")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/quiz-archive"}},[t._v(t._s(t.$t("polls")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/"+t.$i18n.locale+"/press-center/faq"}},[t._v(t._s(t.$t("questions_and_answers")))])],1)])])])])])])])}),r,!1,null,"517ddd7e",null);e.default=f.exports}}]);