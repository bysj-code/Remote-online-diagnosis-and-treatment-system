(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/keshixinxi/add-or-update"],{"131e":function(e,i,n){"use strict";n.r(i);var t=n("f317"),r=n.n(t);for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);i["default"]=r.a},"2b16":function(e,i,n){"use strict";var t=n("84f0"),r=n.n(t);r.a},"2fb3":function(e,i,n){"use strict";n.r(i);var t=n("d84b"),r=n("131e");for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);n("2b16");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"ad0cd3ea",null,!1,t["a"],u);i["default"]=o.exports},8290:function(e,i,n){"use strict";(function(e){n("b349"),n("921b");t(n("66fd"));var i=t(n("2fb3"));function t(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,n("543d")["createPage"])},"84f0":function(e,i,n){},d84b:function(e,i,n){"use strict";var t,r=function(){var e=this,i=e.$createElement;e._self._c},a=[];n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return t}))},f317:function(e,i,n){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,i,n,t,r,a,u){try{var s=e[a](u),o=s.value}catch(h){return void n(h)}s.done?i(o):Promise.resolve(o).then(t,r)}function u(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var u=e.apply(i,n);function s(e){a(u,t,r,s,o,"next",e)}function o(e){a(u,t,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("6859"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{keshimingcheng:"",keshileixing:"",gonghao:"",yishengxingming:"",zhiwei:"",yishengjieshao:"",guahaofeiyong:"",lianxidianhua:"",paibanbiao:"",tupian:"",userid:""},keshileixingOptions:[],keshileixingIndex:0,user:{},ro:{keshimingcheng:!1,keshileixing:!1,gonghao:!1,yishengxingming:!1,zhiwei:!1,yishengjieshao:!1,guahaofeiyong:!1,lianxidianhua:!1,paibanbiao:!1,tupian:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(t.default.mark((function i(n){var r,a,u,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.getStorageSync("nowTable"),i.next=3,this.$api.session(r);case 3:return a=i.sent,this.user=a.data,this.ruleForm.gonghao=this.user.gonghao,this.ruleForm.yishengxingming=this.user.yishengxingming,i.next=9,this.$api.option("keshileixing","leixing",{});case 9:if(a=i.sent,this.keshileixingOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=19;break}return this.ruleForm.id=n.id,i.next=17,this.$api.info("keshixinxi",this.ruleForm.id);case 17:a=i.sent,this.ruleForm=a.data;case 19:if(!n.cross){i.next=70;break}u=e.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 22:if((i.t1=i.t0()).done){i.next=70;break}if(s=i.t1.value,"keshimingcheng"!=s){i.next=28;break}return this.ruleForm.keshimingcheng=u[s],this.ro.keshimingcheng=!0,i.abrupt("continue",22);case 28:if("keshileixing"!=s){i.next=32;break}return this.ruleForm.keshileixing=u[s],this.ro.keshileixing=!0,i.abrupt("continue",22);case 32:if("gonghao"!=s){i.next=36;break}return this.ruleForm.gonghao=u[s],this.ro.gonghao=!0,i.abrupt("continue",22);case 36:if("yishengxingming"!=s){i.next=40;break}return this.ruleForm.yishengxingming=u[s],this.ro.yishengxingming=!0,i.abrupt("continue",22);case 40:if("zhiwei"!=s){i.next=44;break}return this.ruleForm.zhiwei=u[s],this.ro.zhiwei=!0,i.abrupt("continue",22);case 44:if("yishengjieshao"!=s){i.next=48;break}return this.ruleForm.yishengjieshao=u[s],this.ro.yishengjieshao=!0,i.abrupt("continue",22);case 48:if("guahaofeiyong"!=s){i.next=52;break}return this.ruleForm.guahaofeiyong=u[s],this.ro.guahaofeiyong=!0,i.abrupt("continue",22);case 52:if("lianxidianhua"!=s){i.next=56;break}return this.ruleForm.lianxidianhua=u[s],this.ro.lianxidianhua=!0,i.abrupt("continue",22);case 56:if("paibanbiao"!=s){i.next=60;break}return this.ruleForm.paibanbiao=u[s],this.ro.paibanbiao=!0,i.abrupt("continue",22);case 60:if("tupian"!=s){i.next=64;break}return this.ruleForm.tupian=u[s],this.ro.tupian=!0,i.abrupt("continue",22);case 64:if("userid"!=s){i.next=68;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,i.abrupt("continue",22);case 68:i.next=22;break;case 70:this.styleChange();case 71:case"end":return i.stop()}}),i,this)})));function n(e){return i.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},keshileixingChange:function(e){this.keshileixingIndex=e.target.value,this.ruleForm.keshileixing=this.keshileixingOptions[this.keshileixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.tupian=e.$base.url+"upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.guahaofeiyong||this.$validate.isIntNumer(this.ruleForm.guahaofeiyong)){e.next=3;break}return this.$utils.msg("挂号费用应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){e.next=6;break}return this.$utils.msg("联系电话应输入手机格式"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("keshixinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("keshixinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),t=i.getMonth()+1,r=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(n,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=o}).call(this,n("543d")["default"])}},[["8290","common/runtime","common/vendor"]]]);