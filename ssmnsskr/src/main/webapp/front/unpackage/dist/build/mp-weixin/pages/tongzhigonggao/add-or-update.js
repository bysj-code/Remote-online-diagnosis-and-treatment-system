(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongzhigonggao/add-or-update"],{"0809":function(e,n,t){"use strict";t.r(n);var r=t("8b37"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},"6b9f":function(e,n,t){"use strict";(function(e){t("1673");r(t("66fd"));var n=r(t("dcea"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"879e":function(e,n,t){},"8b37":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(f){return void t(f)}o.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("fb1e"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{biaoti:"",neirong:"",faburen:"",faburiqi:"",tupian:""},user:{},ro:{biaoti:!1,neirong:!1,faburen:!1,faburiqi:!1,tupian:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.ruleForm.faburiqi=t.$utils.getCurDate(),u=e.getStorageSync("nowTable"),a.next=4,t.$api.session(u);case 4:if(i=a.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("tongzhigonggao",t.ruleForm.id);case 12:i=a.sent,t.ruleForm=i.data;case 14:if(!n.cross){a.next=41;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"biaoti"!=c){a.next=23;break}return t.ruleForm.biaoti=o[c],t.ro.biaoti=!0,a.abrupt("continue",17);case 23:if("neirong"!=c){a.next=27;break}return t.ruleForm.neirong=o[c],t.ro.neirong=!0,a.abrupt("continue",17);case 27:if("faburen"!=c){a.next=31;break}return t.ruleForm.faburen=o[c],t.ro.faburen=!0,a.abrupt("continue",17);case 31:if("faburiqi"!=c){a.next=35;break}return t.ruleForm.faburiqi=o[c],t.ro.faburiqi=!0,a.abrupt("continue",17);case 35:if("tupian"!=c){a.next=39;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:t.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("tongzhigonggao",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("tongzhigonggao",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},dcea:function(e,n,t){"use strict";t.r(n);var r=t("f270"),a=t("0809");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("e8bf");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"d57d4246",null,!1,r["a"],i);n["default"]=c.exports},e8bf:function(e,n,t){"use strict";var r=t("879e"),a=t.n(r);a.a},f270:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["6b9f","common/runtime","common/vendor"]]]);