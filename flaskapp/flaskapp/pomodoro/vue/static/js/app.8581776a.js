(function(t){function e(e){for(var r,o,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"36d7":function(t,e,n){},"4f5e":function(t,e,n){"use strict";var r=n("36d7"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-body container",attrs:{id:"app"}},[n("div",{class:{running:t.state_running,nRunning:!t.state_running},attrs:{id:"title"}},[n("h1",{staticClass:"title is-4"},[t._v("Simple pomodoro timer")])]),n("div",{attrs:{id:"main_wrapper"}},[n("Timer",{ref:"timer",class:{running:t.state_running,nRunning:!t.state_running},attrs:{id:"timer",time_seconds:60*t.scheme[0]}}),n("button",{directives:[{name:"show",rawName:"v-show",value:1==t.state_running,expression:"state_running==1"}],staticClass:"button is-primary is-inverted is-outlined",attrs:{id:"stop_btn"},on:{click:function(e){t.state_running=0}}},[t._v("Stop")]),0==t.state_running?n("ModeControl",{attrs:{id:"control"}}):t._e()],1),n("button",{staticClass:"button is-primary",style:{visibility:t.state_running?"hidden":"visible"},attrs:{id:"start_btn"},on:{click:function(e){t.state_running=1}}},[t._v("Start")])])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timer"}},[n("div",{attrs:{id:"shell"}}),n("div",{attrs:{id:"timer_text_wrap"}},[n("span",{attrs:{id:"text"}},[t._v(t._s(Math.floor(t.time_seconds/60))+":"+t._s((t.time_seconds%60).toString().padStart(2,"0")))])])])},a=[],c=(n("a9e3"),{name:"Timer",props:{time_seconds:{type:Number,required:!0}},methods:{setTime:function(t){this.time_seconds=t}}}),u=c,l=(n("4f5e"),n("2877")),d=Object(l["a"])(u,o,a,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"control",attrs:{id:"control"}},[n("div",{ref:"work",attrs:{id:"work_btn"},on:{click:function(e){return t.clicked("work")}}},[t._v("W")]),n("div",{ref:"sbreak",attrs:{id:"sbreak_btn"},on:{click:function(e){return t.clicked("sbreak")}}},[t._v("S")]),n("div",{ref:"lbreak",attrs:{id:"lbreak_btn"},on:{click:function(e){return t.clicked("lbreak")}}},[t._v("L")])])},p=[],b=(n("caad"),n("f654")),_=function(t){t.style.visibility="hidden"},m=function(t){t.style.visibility="visible"},v=["work","sbreak","lbreak"],k=["set","choice"],g={name:"ModeControl",data:function(){return{state:null,mode:null}},mounted:function(){this.state="set",this.mode="work"},watch:{mode:function(t){switch(console.log("check",t),t){case"work":m(this.$refs.work),_(this.$refs.sbreak),_(this.$refs.lbreak);break;case"sbreak":m(this.$refs.sbreak),_(this.$refs.work),_(this.$refs.lbreak);break;case"lbreak":m(this.$refs.lbreak),_(this.$refs.sbreak),_(this.$refs.work);break}},state:function(t){"choice"==t&&(m(this.$refs.work),m(this.$refs.sbreak),m(this.$refs.lbreak))}},methods:{set_state:function(t){b(k.includes(t)),this.state=t},get_state:function(){return this.state},set_mode:function(t){b(v.include(t)),this.mode=t},clicked:function(t){console.log(this),"set"==this.state?this.state="choice":"choice"==this.state&&(this.mode=t,this.state="set")}}},w=g,y=(n("71e0"),Object(l["a"])(w,h,p,!1,null,null,null)),$=y.exports,O={name:"App",components:{Timer:f,ModeControl:$},data:function(){return{state_running:0,state_mode:"work",scheme:[25,5,15]}},methods:{},watch:{}},j=O,x=(n("5c0b"),Object(l["a"])(j,i,s,!1,null,null,null)),S=x.exports,M=n("f654");r["a"].config.productionTip=!1;var C={state_running:0,state_mode:"work",scheme:[25,5,15]},P=new r["a"]({data:C,render:function(t){return t(S)}}).$mount("#app");P.$watch("state_running",(function(t,e){M(e*t==0&&e+t==1),t!=e&&(1==t?console.log("starting"):0==t&&console.log("stopping"))}))},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"71e0":function(t,e,n){"use strict";var r=n("8ae8"),i=n.n(r);i.a},"8ae8":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.8581776a.js.map