webpackJsonp([14],{sdHY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),o=s("NYxO"),a=s("VsUZ"),u={name:"AppWrapper",beforeMount:function(){this.getUserInfo()},methods:r()({},Object(o.c)(["SET_FIRST_NAME","SET_LAST_NAME","SET_USERNAME"]),{setUserInfo:function(t,e,s){this.SET_FIRST_NAME(t),this.SET_LAST_NAME(e),this.SET_USERNAME(s)},getUserInfo:function(){var t=this;Object(a.a)("user/status").then(function(e){var s=e.data,n=e.status;if(console.log(s,n),200===n&&s.status){var r=s.user;t.setUserInfo(r.first_name,r.last_name,r.username)}else console.log("fail"),t.$router.push({path:"/"})}).catch(function(e){e&&t.$router.push({path:"/"})})}}),components:{FooterBar:function(){return s.e(21).then(s.bind(null,"OnuA"))}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background_color--light",attrs:{id:"app-wrapper"}},[e("router-view"),this._v(" "),e("footer-bar",{class:"top-border"})],1)},staticRenderFns:[]},c=s("VU/8")(u,i,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=14.63cb1bcb3ef3aede7ff0.js.map