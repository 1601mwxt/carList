webpackJsonp([6],{"+VQA":function(t,s){},xJsL:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("4YfN"),i=a.n(e),r=a("9rMa"),n={data:function(){return{username:"",password:""}},computed:i()({},Object(r.e)({name:function(t){return t.Login.name},pwd:function(t){return t.Login.pwd}})),methods:{Login:function(){this.username===this.name&&this.password===this.pwd&&(alert("登陆成功"),window.localStorage.setItem("status","success"),this.$router.push({path:"/index"}))}},mounted:function(){}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper animated flipInY"},[t._m(0),t._v(" "),a("div",{staticClass:"box"},[t._m(1),t._v(" "),a("form",{attrs:{id:"loginform",method:"post",action:"index.html"}},[t._m(2),t._v(" "),a("div",{staticClass:"box-body padding-md"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"box-footer"},[a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button"},on:{click:t.Login}},[t._v("Sign in")])])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-bolt"}),this._v(" "),s("span",[this._v("Maniac")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header clearfix"},[s("div",{staticClass:"pull-left"},[s("i",{staticClass:"fa fa-sign-in"}),this._v(" Sign In")]),this._v(" "),s("div",{staticClass:"pull-right"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-times"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"alert alert-warning no-radius no-margin padding-sm"},[s("i",{staticClass:"fa fa-info-circle"}),this._v(" Please sign in to maniac dashboard")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("input",{attrs:{type:"checkbox"}}),this._v(" "),s("small",[this._v("Remember me")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-extra clearfix"},[s("a",{staticClass:"pull-left btn btn-xs",attrs:{href:"#"}},[this._v("Forgotten Password?")]),this._v(" "),s("a",{staticClass:"pull-right btn  btn-xs",attrs:{href:"register.html"}},[this._v("Register an account")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",[t._v("\n        Copyright © 2014 by YAKUZI.\n        \n        "),a("ul",{staticClass:"list-unstyled list-inline"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("About Us")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("UI Elements")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Charts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Mobile Apps")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])])])])}]};var l=a("C7Lr")(n,o,!1,function(t){a("+VQA")},"data-v-583ac776",null);s.default=l.exports}});
//# sourceMappingURL=6.22d8eab54fbedeb0fcc2.js.map