webpackJsonp([5],{"9U/C":function(t,a){},wHgX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("4YfN"),r=e.n(i),n=e("9rMa"),o={computed:r()({},Object(n.e)({CarDetail:function(t){return t.index.CarDetail},currentYear:function(t){return t.details.currentYear},defaultCity:function(t){return t.quotation.defaultCity},carId:function(t){return t.index.carId},ColorId:function(t){return t.index.ColorId}}),Object(n.c)({years:"details/years",list:"details/list"})),methods:r()({},Object(n.d)({getInfo:"details/getInfo",changeYear:"details/changeYear",initDealerList:"quotation/initDealerList"}),Object(n.b)({initImageDatas:"index/initImageDatas",getDetail:"details/getDetail",getDealerList:"quotation/getDealerList"}),{goImg:function(t){this.$router.push({path:"/img",query:{id:t}})},goQuotation:function(t){this.$router.push({path:"/quotation",query:{id:t}})},gop:function(t){console.log(t)}}),mounted:function(){this.getDetail(this.$route.query.id)}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"car"},[e("div",{staticClass:"content"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.CarDetail&&t.CarDetail.CoverPhoto,"data-hover":"hover"},on:{click:function(a){t.initImageDatas({SerialID:t.CarDetail.SerialID,carId:t.carId,ColorId:t.ColorId}),t.goImg(t.CarDetail.SerialID)}}}),t._v(" "),e("span",{attrs:{"data-hover":"hover"}},[t._v(t._s(t.CarDetail&&t.CarDetail.pic_group_count)+"张照片")])]),t._v(" "),e("div",{staticClass:"info"},[e("p",[t._v("\n                \n                "+t._s(t.CarDetail&&t.CarDetail.market_attribute.dealer_price)+"\n            ")]),t._v(" "),e("p",[t._v("指导价 "+t._s(t.CarDetail&&t.CarDetail.market_attribute.official_refer_price))]),t._v(" "),e("div",{staticClass:"action active flex-row"},[e("button",{attrs:{"data-hover":"hover"},on:{click:function(a){t.goQuotation(t.CarDetail.list[0].car_id),t.getDealerList({carId:t.CarDetail.list[0].car_id,cityId:t.defaultCity.id})}}},[t._v(t._s(t.CarDetail&&t.CarDetail.BottomEntranceTitle))])])]),t._v(" "),t.CarDetail?e("div",{staticClass:"car-list"},[e("div",{staticClass:"c-type"},t._l(t.years,function(a,i){return e("span",{key:i,class:t.currentYear==a?"active":"",on:{click:function(e){t.changeYear(a)}}},[t._v(t._s(a))])})),t._v(" "),e("div",{staticClass:"list"},t._l(t.list,function(a,i){return e("div",{key:i},[e("p",[t._v(t._s(i))]),t._v(" "),e("ul",t._l(a,function(a,i){return e("li",{key:i,on:{click:function(e){t.goQuotation(a.car_id),t.getDealerList({carId:t.CarDetail.list[0].car_id,cityId:t.defaultCity.id})}}},[e("p",[t._v(t._s(a.market_attribute.year+"款  "+a.car_name))]),t._v(" "),e("p",[t._v(t._s(a.horse_power+"马力"+a.gear_num+"档"))]),t._v(" "),e("p",[e("span",[t._v(t._s("指导价 "+a.market_attribute.official_refer_price))]),t._v(" "),e("span",[t._v(t._s(a.market_attribute.dealer_price_min+"起"))])]),t._v(" "),e("button",{on:{click:function(e){t.goQuotation(a.car_id)}}},[t._v(t._s(t.CarDetail.BottomEntranceTitle))])])}))])}))]):t._e()]),t._v(" "),e("div",{staticClass:"bottom flex-cloum flex-centerY",on:{click:function(a){t.goQuotation(t.CarDetail.list[0].car_id),t.getDealerList({carId:t.CarDetail.list[0].car_id,cityId:t.defaultCity.id})}}},[e("p",[t._v("询问底价")]),t._v(" "),e("p",[t._v("本地经销商为你报价")])])])},staticRenderFns:[]};var l=e("C7Lr")(o,c,!1,function(t){e("9U/C")},"data-v-62454fbb",null);a.default=l.exports}});
//# sourceMappingURL=5.52d3b6f0226dfb383d0b.js.map