webpackJsonp([1],{"2vxh":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h1",[e._v("Digital silk portfolio")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"piechart"},[n("figure",[n("chart",{attrs:{options:e.pieData,"auto-resize":""}})],1)]),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",bordered:"","show-empty":"",items:e.getTableRows,fields:e.fields}}),e._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"updated"},[n("p",[e._v("Updated: "+e._s(e.updated))])]),e._v(" "),n("div",{staticClass:"cap"},[e._v("Prices calculated according to "),n("a",{attrs:{href:"https://coinmarketcap.com"}},[e._v("CoinMarketCap")]),e._v(".")])])],1)])},staticRenderFns:[]}},"4OK8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Gu7T"),a=n.n(i),o=n("mtWM"),r=n.n(o),s=n("sE1n"),c=n.n(s),u=n("Vb+l"),d=(n.n(u),n("Oq2I")),h=(n.n(d),n("80cc")),l=(n.n(h),n("tQk0"));n.n(l);t.default={name:"dashboard",components:{chart:c.a},data:function(){return{updated:this.getCurrentTime(),assets:[{id:"bitcoin",name:"Bitcoin",amount:8.1037,share:32.56},{id:"ethereum",name:"Ethereum",amount:41.036,share:11.88},{id:"ethereum-classic",name:"Ethereum Classic",amount:274.6,share:4.08},{id:"ripple",name:"Ripple",amount:20295,share:4.08},{id:"monero",name:"Monero",amount:150,share:16.27},{id:"iota",name:"Iota",amount:39632,share:19.47},{id:"neo",name:"Neo",amount:366,share:7.62},{id:"augur",name:"Augur",amount:201.7,share:4.05}],fields:{name:{label:"Currency",class:"text-center"},amount:{label:"Amount",class:"text-center"},share:{label:"%",class:"text-center"},price_btc:{label:"Price BTC",class:"text-center"},price_usd:{label:"Price USD",class:"text-center"}},pie:{tooltip:{trigger:"item",formatter:"{b} : {c}%"},legend:{orient:"vertical",right:0,top:100,data:[]},series:[{name:"Portfolio",type:"pie",radius:"70%",center:["30%","50%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},methods:{getTableRows:function(e,t){var n=this;r.a.get("https://api.coinmarketcap.com/v1/ticker/?limit=40").then(function(e){var i=n.mapData(e.data,n.assets);t(i)}).catch(function(e){console.log(e)})},mapData:function(e,t){var n=t.map(function(e){return e.id}),i=[].concat(a()(t)),o=this;return e.forEach(function(e){n.includes(e.id)&&o.setAssetInfo(e,i)}),i.sort(function(e,t){return e.share<t.share}),i.push({name:"Total",amount:null,share:this.getTotal(i,"share").toFixed(0),price_usd:+this.getTotal(i,"price_usd").toFixed(2),price_btc:+this.getTotal(i,"price_btc").toFixed(4),_rowVariant:"warning"}),i},setAssetInfo:function(e,t){t.forEach(function(t){t.id===e.id&&(t.price_usd=+(+e.price_usd*t.amount).toFixed(2),t.price_btc=+(+e.price_btc*t.amount).toFixed(4))})},getTotal:function(e,t){var n=0;return e.forEach(function(e){n+=e[t]}),n},getCurrentTime:function(){var e=new Date;return(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()}},computed:{pieData:function(){var e=this.assets;return e.sort(function(e,t){return e.share<t.share}),this.pie.legend.data=e.map(function(e){return e.name}),this.pie.series[0].data=e.map(function(e){return{name:e.name,value:e.share}}),this.pie}}}},"6+PU":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"echarts"})},staticRenderFns:[]}},"79kF":function(e,t){},"9M+g":function(e,t){},Jmt5:function(e,t){},M93x:function(e,t,n){n("fPNm");var i=n("VU/8")(n("xJD8"),n("RDb1"),null,null);e.exports=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),o=n.n(a),r=n("YaEn"),s=n("sCSS"),c=n("Jmt5"),u=(n.n(c),n("9M+g"));n.n(u);i.a.config.productionTip=!1,i.a.use(s.a),new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},Nbkj:function(e,t,n){n("dydZ");var i=n("VU/8")(n("4OK8"),n("2vxh"),"data-v-1b7bfdb3",null);e.exports=i.exports},RDb1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},YaEn:function(e,t,n){"use strict";var i=n("7+uW"),a=n("/ocq"),o=n("Nbkj"),r=n.n(o);i.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Dash",component:r.a}]})},dydZ:function(e,t){},fPNm:function(e,t){},i62I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Gu7T"),a=n.n(i),o=n("Icdr"),r=n.n(o),s=n("y1vT"),c=n.n(s),u=n("7+uW"),d=["legendselectchanged","legendselected","legendunselected","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","brush","brushselected"],h=["click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"];t.default={props:{options:Object,theme:String,initOptions:Object,group:String,autoResize:Boolean},data:function(){return{chart:null}},computed:{width:{cache:!1,get:function(){return this._delegateGet("width","getWidth")}},height:{cache:!1,get:function(){return this._delegateGet("height","getHeight")}},isDisposed:{cache:!1,get:function(){return!!this._delegateGet("isDisposed","isDisposed")}},computedOptions:{cache:!1,get:function(){return this._delegateGet("computedOptions","getOption")}}},watch:{options:{handler:function(e){!this.chart&&e?this._init():this.chart.setOption(this.options,!0)},deep:!0},group:{handler:function(e){this.chart.group=e}}},methods:{mergeOptions:function(e){this._delegateMethod("setOption",e)},resize:function(e){this._delegateMethod("resize",e)},dispatchAction:function(e){this._delegateMethod("dispatchAction",e)},convertToPixel:function(e,t){return this._delegateMethod("convertToPixel",e,t)},convertFromPixel:function(e,t){return this._delegateMethod("convertFromPixel",e,t)},containPixel:function(e,t){return this._delegateMethod("containPixel",e,t)},showLoading:function(e,t){this._delegateMethod("showLoading",e,t)},hideLoading:function(){this._delegateMethod("hideLoading")},getDataURL:function(e){return this._delegateMethod("getDataURL",e)},getConnectedDataURL:function(e){return this._delegateMethod("getConnectedDataURL",e)},clear:function(){this._delegateMethod("clear")},dispose:function(){this._delegateMethod("dispose")},_delegateMethod:function(e){var t;if(!this.chart)return void u.a.util.warn("Cannot call ["+e+"] before the chart is initialized. Set prop [options] first.",this);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(t=this.chart)[e].apply(t,a()(i))},_delegateGet:function(e,t){return this.chart||u.a.util.warn("Cannot get ["+e+"] before the chart is initialized. Set prop [options] first.",this),this.chart[t]()},_init:function(){var e=this;if(!this.chart){var t=r.a.init(this.$el,this.theme,this.initOptions);this.group&&(t.group=this.group),t.setOption(this.options,!0),d.forEach(function(n){t.on(n,function(t){e.$emit(n,t)})}),h.forEach(function(n){t.on(n,function(t){e.$emit(n,t),e.$emit("chart"+n,t)})}),this.autoResize&&(this.__resizeHanlder=c()(function(){t.resize()},100,{leading:!0}),window.addEventListener("resize",this.__resizeHanlder)),this.chart=t}}},mounted:function(){this.options&&this._init()},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder),this.dispose())},connect:function(e){"string"!=typeof e&&(e=e.map(function(e){return e.chart})),r.a.connect(e)},disconnect:function(e){r.a.disConnect(e)},registerMap:function(){r.a.registerMap.apply(r.a,arguments)},registerTheme:function(){r.a.registerTheme.apply(r.a,arguments)}}},sE1n:function(e,t,n){n("79kF");var i=n("VU/8")(n("i62I"),n("6+PU"),null,null);e.exports=i.exports},xJD8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.561788a5725af4ed6e66.js.map