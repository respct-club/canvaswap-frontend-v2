(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[0],{775:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return j}));var r=n(0),a=n(27),u=n(113),o=n(78),i=n(30),s=n.n(i),c=n(43),l=n(89),f=n(38),p=n(235),d=n(69),m=n(360),b=function(e){return{allowance:e.userData?new s.a(e.userData.allowance):c.c,tokenBalance:e.userData?new s.a(e.userData.tokenBalance):c.c,stakedBalance:e.userData?new s.a(e.userData.stakedBalance):c.c,earnings:e.userData?new s.a(e.userData.earnings):c.c}},v=function(e){return{lpAddresses:e.lpAddresses,lpSymbol:e.lpSymbol,pid:e.pid,dual:e.dual,multiplier:e.multiplier,isCommunity:e.isCommunity,quoteTokenPriceBusd:e.quoteTokenPriceBusd,tokenPriceBusd:e.tokenPriceBusd,token:Object(d.c)(e.token),quoteToken:Object(d.c)(e.quoteToken),userData:b(e),tokenAmountTotal:e.tokenAmountTotal?new s.a(e.tokenAmountTotal):c.c,lpTotalInQuoteToken:e.lpTotalInQuoteToken?new s.a(e.lpTotalInQuoteToken):c.c,lpTotalSupply:e.lpTotalSupply?new s.a(e.lpTotalSupply):c.c,tokenPriceVsQuote:e.tokenPriceVsQuote?new s.a(e.tokenPriceVsQuote):c.c,poolWeight:e.poolWeight?new s.a(e.poolWeight):c.c}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u.b)(),n=Object(p.a)(),a=n.slowRefresh,i=Object(o.c)(),s=i.account;Object(r.useEffect)((function(){var n=(e?f.w:m.d).map((function(e){return e.pid}));t(Object(m.c)(n)),s&&t(Object(m.b)({account:s,pids:n}))}),[e,t,a,s])},g=function(){var e=Object(a.c)((function(e){return e.farms})),t=e.data.map(v);return{loadArchivedFarmsData:e.loadArchivedFarmsData,userDataLoaded:e.userDataLoaded,data:t}},w=function(e){var t=Object(a.c)((function(t){return t.farms.data.find((function(t){return t.pid===e}))}));return v(t)},y=function(e){var t=w(e).userData;return{allowance:t.allowance,tokenBalance:t.tokenBalance,stakedBalance:t.stakedBalance,earnings:t.earnings}},O=function(e){var t=function(e){var t=Object(a.c)((function(t){return t.farms.data.find((function(t){return t.lpSymbol===e}))}));return v(t)}(e),n=function(e){var t=w(e);return t&&new s.a(t.tokenPriceBusd)}(t.pid),r=c.c;if(t.lpTotalSupply.gt(0)&&t.lpTotalInQuoteToken.gt(0)){var u=n.times(t.tokenAmountTotal).times(2),o=Object(l.d)(t.lpTotalSupply);r=u.div(o)}return r},j=function(){var e=w(8).tokenPriceBusd;return Object(r.useMemo)((function(){return new s.a(e)}),[e])}},781:function(e,t,n){"use strict";var r=n(5),a=n(60),u=n(0),o=n(810),i=n.n(o),s=n(3),c=n(1),l=["value","color","decimals","isDisabled","unit","prefix","onClick"];t.a=function(e){var t=e.value,n=e.color,o=void 0===n?"text":n,f=e.decimals,p=void 0===f?3:f,d=e.isDisabled,m=void 0!==d&&d,b=e.unit,v=e.prefix,h=e.onClick,g=Object(a.a)(e,l),w=Object(u.useRef)(0);return Object(u.useEffect)((function(){w.current=t}),[t]),Object(c.jsx)(s.Hb,Object(r.a)(Object(r.a)({color:m?"textDisabled":o,onClick:h},g),{},{children:Object(c.jsx)(i.a,{start:w.current,end:t,prefix:v,suffix:b,decimals:p,duration:1,separator:","})}))}},801:function(e,t,n){"use strict";var r=n(11),a=n(0);t.a=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),u=Object(r.a)(n,2),o=u[0],i=u[1],s=Object(a.useState)(!1),c=Object(r.a)(s,2),l=c[0],f=c[1];return Object(a.useEffect)((function(){return o||(t.current=new IntersectionObserver((function(e){var t=Object(r.a)(e,1)[0];f(t.isIntersecting)}),{rootMargin:"0px",threshold:1}),t.current.observe(e.current),i(!0)),function(){t.current&&o&&t.current.disconnect()}}),[o]),{observerRef:e,isIntersecting:l}}},809:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return h}));var r=n(5),a=n(2),u=n.n(a),o=(n(29),n(10)),i=(n(65),n(30)),s=n.n(i),c=n(88),l=n(7),f=n(113),p=n(69),d=function(){var e=f.a.getState().user.gasPrice||p.b.default;return"80001"===l.a.MAINNET.toString()?e:p.b.testnet},m={gasLimit:c.j},b=function(){var e=Object(o.a)(u.a.mark((function e(t,n,a){var o,i,l,f,p,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=d(),i=new s.a(a).times(c.k).toString(),0!==n){e.next=10;break}return e.next=5,t.enterStaking(i,Object(r.a)(Object(r.a)({},m),{},{gasPrice:o}));case 5:return l=e.sent,e.next=8,l.wait();case 8:return f=e.sent,e.abrupt("return",f.status);case 10:return e.next=12,t.deposit(n,i,Object(r.a)(Object(r.a)({},m),{},{gasPrice:o}));case 12:return p=e.sent,e.next=15,p.wait();case 15:return b=e.sent,e.abrupt("return",b.status);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(u.a.mark((function e(t,n,a){var o,i,l,f,p,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=d(),i=new s.a(a).times(c.k).toString(),0!==n){e.next=10;break}return e.next=5,t.leaveStaking(i,Object(r.a)(Object(r.a)({},m),{},{gasPrice:o}));case 5:return l=e.sent,e.next=8,l.wait();case 8:return f=e.sent,e.abrupt("return",f.status);case 10:return e.next=12,t.withdraw(n,i,Object(r.a)(Object(r.a)({},m),{},{gasPrice:o}));case 12:return p=e.sent,e.next=15,p.wait();case 15:return b=e.sent,e.abrupt("return",b.status);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(u.a.mark((function e(t,n){var a,o,i,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d(),0!==n){e.next=9;break}return e.next=4,t.leaveStaking("0",Object(r.a)(Object(r.a)({},m),{},{gasPrice:a}));case 4:return o=e.sent,e.next=7,o.wait();case 7:return i=e.sent,e.abrupt("return",i.status);case 9:return e.next=11,t.deposit(n,"0",Object(r.a)(Object(r.a)({},m),{},{gasPrice:a}));case 11:return s=e.sent,e.next=14,s.wait();case 14:return c=e.sent,e.abrupt("return",c.status);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n(91),n(397),n(55),n(94),n(37)},810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),a=n(0),u=n(370),o=n(811);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=i(r),c=i(a),l=i(u),f=i(o);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?w(e):t}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,u=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(s){i=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return u}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,u=t.easingFn,o=t.end,i=t.formattingFn,s=t.prefix,c=t.separator,l=t.start,p=t.suffix,d=t.useEasing;return new f.default(e,l,o,r,a,{decimal:n,easingFn:u,formattingFn:i,separator:c,prefix:s,suffix:p,useEasing:d,useGrouping:!!c})},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,a=O(u);function u(){var e;m(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(w(e=a.call.apply(a,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,a=n.suffix,u=n.prefix,o=n.redraw,i=n.duration,s=n.separator,c=n.decimals,l=n.decimal,f=n.className;return i!==t.duration||r!==t.start||a!==t.suffix||u!==t.prefix||s!==t.separator||c!==t.decimals||l!==t.decimal||f!==t.className||o})),v(w(e),"createInstance",(function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),V(e.containerRef.current,e.props)})),v(w(e),"pauseResume",(function(){var t=w(e),n=t.reset,r=t.restart,a=t.update,u=e.props.onPauseResume;e.instance.pauseResume(),u({reset:n,start:r,update:a})})),v(w(e),"reset",(function(){var t=w(e),n=t.pauseResume,r=t.restart,a=t.update,u=e.props.onReset;e.instance.reset(),u({pauseResume:n,start:r,update:a})})),v(w(e),"restart",(function(){e.reset(),e.start()})),v(w(e),"start",(function(){var t=w(e),n=t.pauseResume,r=t.reset,a=t.restart,u=t.update,o=e.props,i=o.delay,s=o.onEnd,c=o.onStart,l=function(){return e.instance.start((function(){return s({pauseResume:n,reset:r,start:a,update:u})}))};i>0?e.timeoutId=setTimeout(l,1e3*i):l(),c({pauseResume:n,reset:r,update:u})})),v(w(e),"update",(function(t){var n=w(e),r=n.pauseResume,a=n.reset,u=n.restart,o=e.props.onUpdate;e.instance.update(t),o({pauseResume:r,reset:a,start:u})})),v(w(e),"containerRef",c.default.createRef()),e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,u=this.pauseResume,o=this.reset,i=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:u,reset:o,start:i,update:s}):c.default.createElement("span",{className:n,ref:a,style:r})}}])&&b(t.prototype,n),r&&b(t,r),u}(a.Component);v(x,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),v(x,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var R={innerHTML:null};t.default=x,t.useCountUp=function(e){var t=d(d({},x.defaultProps),e),n=t.start,r=t.formattingFn,u=j(a.useState("function"===typeof r?r(n):n),2),o=u[0],i=u[1],s=a.useRef(null),c=a.useRef(null),l=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=V(R,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);i(e)},e}();return s.current=n,n},f=function(){var e=t.onReset;l().reset(),e({pauseResume:m,start:p,update:b})},p=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start((function(){r({pauseResume:m,reset:f,start:e,update:b})})),n({pauseResume:m,reset:f,update:b})},m=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:f,start:p,update:b})},b=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:m,reset:f,start:p})};return a.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(c.current=setTimeout((function(){n({pauseResume:m,reset:f,update:b}),l().start((function(){clearTimeout(c.current),r({pauseResume:m,reset:f,start:p,update:b})}))}),1e3*e)),function(){clearTimeout(c.current),f()}}),[]),{countUp:o,start:p,pauseResume:m,reset:f,update:b}}},811:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,u){function o(e){var t,n,r,a,u,o,i=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(a="",u=0,o=n.length;u<o;++u)0!==u&&u%3===0&&(a=c.options.separator+a),a=n[o-u-1]+a;n=a}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(i?"-":"")+c.options.prefix+n+r+c.options.suffix}function i(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:i,formattingFn:o,prefix:"",suffix:"",numerals:[]},u&&"object"==typeof u)for(var l in c.options)u.hasOwnProperty(l)&&null!==u[l]&&(c.options[l]=u[l]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var f=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-f)),a=window.setTimeout((function(){e(n+r)}),r);return f=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),s(c.startVal)&&s(c.endVal)?(c.decimals=Math.max(0,r||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(a)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!s(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)}}]);