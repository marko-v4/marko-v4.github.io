$rmod.main("/marko-widgets@6.0.0","lib/index");
$rmod.dep("","marko-widgets","6.0.0");
$rmod.def("/marko-widgets@6.0.0/lib/client-init",function(i,e,n,t,d){i("./init-widgets").initServerRendered()});
$rmod.run("/$/marko-widgets/lib/client-init");
$rmod.main("/marko-widgets@6.0.0/lib","index");
$rmod.def("/marko-widgets@6.0.0/lib/Widget",function(t,e,r,i,n){function s(t){t.remove()}function o(t){v.forEachChildEl(t,function(t){var e=t.__widget;e&&l(e,!1,!1),o(t)})}function a(t,e,r){var i=t[C[e]];i&&i.call(t,r),t.emit(e,r)}function d(t){var e=t.__evHandles;e&&(e.forEach(s),t.__evHandles=null)}function l(t,e,r){if(!t.isDestroyed()){var i=t.getEl();a(t,"beforeDestroy"),t.__lifecycleState="destroyed",i&&(r&&o(i),e&&i.parentNode&&i.parentNode.removeChild(i),i.__widget=null),d(t),t.__subscriptions&&(t.__subscriptions.removeAllListeners(),t.__subscriptions=null),a(t,"destroy")}}function u(t,e,r,i,n){if("function"!=typeof r){if(null===r&&(r=void 0),i){var s=t.__dirtyState||(t.__dirtyState={});s[e]=!0}else if(t.state[e]===r)return;var o=!t.__dirty;if(o){var a=t.state;t.__dirty=!0,t.__oldState=a,t.state=S({},a),t.__stateChanges={}}t.__stateChanges[e]=r,null==r?delete t.state[e]:t.state[e]=r,o&&n!==!0&&$.queueWidgetUpdate(t)}}function h(t,e,r){var i;for(i in t.state)t.state.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&u(t,i,void 0,!1,r);for(i in e)e.hasOwnProperty(i)&&u(t,i,e[i],!1,r)}function _(t){t.__oldState=null,t.__dirty=!1,t.__stateChanges=null,t.__newProps=null,t.__dirtyState=null}function f(t,e){var r=e.id,i=t.getWidget(r);return i?e.__type===i.type:!1}function c(t,e){E.call(this),this.id=t,this.el=null,this.bodyEl=null,this.state=null,this.__subscriptions=null,this.__evHandles=null,this.__lifecycleState=null,this.__customEvents=null,this.__scope=null,this.__dirty=!1,this.__oldState=null,this.__stateChanges=null,this.__updateQueued=!1,this.__dirtyState=null,this.__document=e}var p,g=t("/$/marko-widgets/$/raptor-util/inherit"),v=t("/$/marko-widgets/$/raptor-dom"),y=t("./"),m=t("/$/marko-widgets/$/raptor-renderer"),E=t("/$/marko-widgets/$/events").EventEmitter,w=t("/$/marko-widgets/$/listener-tracker"),b=t("/$/marko-widgets/$/raptor-util/arrayFromArguments"),S=t("/$/marko-widgets/$/raptor-util/extend"),$=t("./update-manager"),I=t("/$/marko-widgets/$/morphdom"),B=!1,P=null,U={addDestroyListener:!1},k=E.prototype.emit,W=/^\#(\w+)( .*)?/,C={beforeDestroy:"onBeforeDestroy",destroy:"onDestroy",beforeUpdate:"onBeforeUpdate",update:"onUpdate",render:"onRender",beforeInit:"onBeforeInit",afterInit:"onAfterInit"};c.prototype=p={_isWidget:!0,subscribeTo:function(t){if(!t)throw new Error("target is required");var e=this.__subscriptions;e||(this.__subscriptions=e=w.createTracker());var r=t._isWidget?P:U;return e.subscribeTo(t,r)},emit:function(t){var e,r,i=this.__customEvents;if(i&&(e=i[t])){r=r||b(arguments,1),r.push(this);var n=y.getWidgetForEl(this.__scope),s=n[e];if(!s)throw new Error("Method not found for widget "+n.id+": "+e);s.apply(n,r)}return k.apply(this,arguments)},getElId:function(t,e){var r=null!=t?this.id+"-"+t:this.id;return null!=e&&(r+="["+e+"]"),r},getEl:function(t,e){return null!=t?this.__document.getElementById(this.getElId(t,e)):this.el||this.__document.getElementById(this.getElId())},getEls:function(t){for(var e=[],r=0;;){var i=this.getEl(t,r);if(!i)break;e.push(i),r++}return e},getWidget:function(t,e){var r=this.getElId(t,e);return y.getWidgetForEl(r,this.__document)},getWidgets:function(t){for(var e=[],r=0;;){var i=this.getWidget(t,r);if(!i)break;e.push(i),r++}return e},destroy:function(t){t=t||{},l(this,t.removeNode!==!1,t.recursive!==!1)},isDestroyed:function(){return"destroyed"===this.__lifecycleState},getBodyEl:function(){return this.bodyEl},setState:function(t,e){if("object"!=typeof t)u(this,t,e);else{var r=t;for(var i in r)r.hasOwnProperty(i)&&u(this,i,r[i])}},setStateDirty:function(t,e){1===arguments.length&&(e=this.state[t]),u(this,t,e,!0)},_replaceState:function(t){h(this,t,!0)},_removeDOMEventListeners:function(){d(this)},replaceState:function(t){h(this,t)},setProps:function(t){if(this.getInitialState){this.getInitialProps&&(t=this.getInitialProps(t)||{});var e=this.getInitialState(t);return void this.replaceState(e)}this.__newProps||$.queueWidgetUpdate(this),this.__newProps=t},update:function(){var t=this.__newProps;return this.shouldUpdate(t,this.state)===!1?void _(this):t?(_(this),void this.rerender(t)):void(this.__dirty&&(this._processUpdateHandlers()||this.doUpdate(this.__stateChanges,this.__oldState),_(this)))},isDirty:function(){return this.__dirty},_reset:function(){_(this)},_processUpdateHandlers:function(){var t,e,r,i=this.__stateChanges,n=this.__oldState,s=[];for(var o in i)if(i.hasOwnProperty(o)){if(e=i[o],r=n[o],r===e){var d=this.__dirtyState;if(null==d||!d.hasOwnProperty(o))continue}var l="update_"+o;if(t=this[l],!t)return!1;s.push([o,t])}if(!s.length)return!0;a(this,"beforeUpdate");for(var u=0,h=s.length;h>u;u++){var f=s[u],c=f[0];t=f[1],e=i[c],r=n[c],t.call(this,e,r)}return a(this,"update"),_(this),!0},shouldUpdate:function(t,e){return!0},doUpdate:function(t,e){this.rerender()},_emitLifecycleEvent:function(t,e){a(this,t,e)},rerender:function(t){var e=this;if(!e.renderer)throw new Error('Widget does not have a "renderer" property');var r=this.__document.getElementById(e.id),i=e.renderer||e;e.__lifecycleState="rerender";var n=S({},t||e.state),s=n.$global={};s.__rerenderWidget=e,s.__rerenderEl=e.el,s.__rerender=!0,t||(s.__rerenderState=t?null:e.state),$.batchUpdate(function(){function s(t){var e=t.__widget;e&&l(e,!1,!1)}function o(t,e){var r,i=t.id,n=e.getAttribute("data-w-preserve-attrs");if(n){n=n.split(/\s*[,]\s*/);for(var d=0;d<n.length;d++){var u=n[d],h=t.getAttribute(u);null==h?e.removeAttribute(u):e.setAttribute(u,h)}}if(c&&i){if(c.isPreservedEl(i))return c.hasUnpreservedBody(i)&&(r=t.__widget,I(r.bodyEl,e,{childrenOnly:!0,onNodeDiscarded:s,onBeforeMorphEl:o,onBeforeMorphElChildren:a})),B;r=t.__widget,r&&!f(c,r)&&l(r,!1,!1)}}function a(t){return c&&t.id&&c.isPreservedBodyEl(t.id)?B:void 0}var d=m.render(i,n),u=d.getNode(e.__document),h=d.out,c=h.global.widgets;I(r,u,{onNodeDiscarded:s,onBeforeMorphEl:o,onBeforeMorphElChildren:a}),d.afterInsert(e.__document),e.__lifecycleState=null,t||_(e)})},detach:function(){v.detach(this.el)},appendTo:function(t){v.appendTo(this.el,t)},replace:function(t){v.replace(this.el,t)},replaceChildrenOf:function(t){v.replaceChildrenOf(this.el,t)},insertBefore:function(t){v.insertBefore(this.el,t)},insertAfter:function(t){v.insertAfter(this.el,t)},prependTo:function(t){v.prependTo(this.el,t)},ready:function(t){y.ready(t,this)},$:function(t){var e=y.$,r=arguments;if(1===r.length){if("function"==typeof t){var i=this;i.ready(function(){t.call(i)})}else if("string"==typeof t){var n=W.exec(t);if(null!=n){var s=n[1];return e(null==n[2]?this.getEl(s):"#"+this.getElId(s)+n[2])}var o=this.getEl();if(!o)throw new Error("Root element is not defined for widget");if(o)return e(t,o)}}else{if(2===r.length&&"string"==typeof r[1])return e(t,this.getEl(r[1]));if(0===r.length)return e(this.el)}return e.apply(window,arguments)}},p.elId=p.getElId,g(c,E),r.exports=c});
$rmod.remap("/marko-widgets@6.0.0/lib/init-widgets","init-widgets-browser");
$rmod.def("/marko-widgets@6.0.0/lib/init-widgets-browser",function(require,exports,module,__filename,__dirname){function invokeWidgetEventHandler(e,t,i){var r=e[t];if(!r)throw new Error("Widget "+e.id+' does not have method named "'+t+'"');r.apply(e,i)}function addDOMEventListener(e,t,i,r){return _addEventListener(t,i,function(i){invokeWidgetEventHandler(e,r,[i,t])})}function parseJSON(config){return eval("("+config+")")}function getNestedEl(e,t,i){return null==t?null:""===t?e.getEl():"string"==typeof t&&"#"===t.charAt(0)?i.getElementById(t.substring(1)):e.getEl(t)}function initWidget(e,t,i,r,n,d,o,a,g,l,s,u){var f,v,m,c,w;if(s||(s=u.getElementById(t)),l||(l=s.__widget),l&&l.__type!==e&&(l=null),l?(l._removeDOMEventListeners(),l._reset(),w=l):w=registry.createWidget(e,t,u),r)for(var p in r)if(r.hasOwnProperty(p)){var E=r[p];("function"==typeof E||null==E)&&delete r[p]}if(w.state=r||{},logger.isDebugEnabled()&&logger.debug("Creating widget: "+e+" ("+t+")"),i||(i={}),s.__widget=w,w._isWidget){if(w.el=s,w.bodyEl=getNestedEl(w,g,u),d){var y=[];for(f=0,v=d.length;v>f;f+=3){m=d[f],c=d[f+1];var b=d[f+2],_=getNestedEl(w,b,u),h=addDOMEventListener(w,_,m,c);y.push(h)}y.length&&(w.__evHandles=y)}if(o)for(w.__customEvents={},w.__scope=n,f=0,v=o.length;v>f;f+=2)m=o[f],c=o[f+1],w.__customEvents[m]=c;if(a)for(f=0,v=a.length;v>f;f++){var W=a[f];if(!l){var A=registry.load(W),k=A.extendWidget||A.extend;if("function"!=typeof k)throw new Error("extendWidget(widget, cfg) method missing: "+W);k(w)}}}else i.elId=t,i.el=s;if(l)w._emitLifecycleEvent("update"),w._emitLifecycleEvent("render",{});else{var I={widget:w,config:i};raptorPubsub.emit("marko-widgets/initWidget",I),w._emitLifecycleEvent("beforeInit",I),w.initWidget(i),w._emitLifecycleEvent("afterInit",I),w._emitLifecycleEvent("render",{firstRender:!0})}return w}function initWidgetFromEl(e){if(null==e.__widget){var t,i=e.ownerDocument,r=e.id,n=e.getAttribute("data-widget");e.removeAttribute("data-widget");var d=e.getAttribute("data-w-config");d&&(d=parseJSON(d),e.removeAttribute("data-w-config"));var o=e.getAttribute("data-w-state");o&&(o=parseJSON(o),e.removeAttribute("data-w-state"));var a,g=e.getAttribute("data-w-on");if(g){var l=i.getElementById(r+"-$on");l&&(l.parentNode.removeChild(l),a=(l.getAttribute("data-on")||"").split(",")),e.removeAttribute("data-w-on")}var s=e.getAttribute("data-w-events");s&&(s=s.split(","),t=s[0],s=s.slice(1),e.removeAttribute("data-w-events"));var u=e.getAttribute("data-w-extend");u&&(u=u.split(","),e.removeAttribute("data-w-extend"));var f=e.getAttribute("data-w-body");initWidget(n,r,d,o,t,a,s,u,f,null,e,i)}}function initClientRendered(e,t){t=t||window.document;for(var i=0,r=e.length;r>i;i++){var n=e[i];n.children.length&&initClientRendered(n.children,t);var d=initWidget(n.type,n.id,n.config,n.state,n.scope,n.domEvents,n.customEvents,n.extend,n.bodyElId,n.existingWidget,null,t);n.widget=d}}require("/$/marko-widgets/$/raptor-polyfill/array/forEach"),require("/$/marko-widgets/$/raptor-polyfill/string/endsWith");var logger=require("/$/marko-widgets/$/raptor-logging").logger(module),raptorPubsub=require("/$/marko-widgets/$/raptor-pubsub"),ready=require("/$/marko-widgets/$/raptor-dom").ready,_addEventListener=require("./addEventListener"),registry=require("./registry");exports.initClientRendered=initClientRendered,exports.initServerRendered=function(e){function t(){if("string"!=typeof e){var t=document.getElementById("markoWidgets");if(!t)return;if(document.markoWidgetsInitialized===!0)return;document.markoWidgetsInitialized=!0,e=t?t.getAttribute("data-ids"):null}if(e)for(var i=e.split(","),r=i.length,n=0;r>n;n++){var d=i[n],o=document.getElementById(d);o?initWidgetFromEl(o):logger.error('DOM node for widget with ID "'+d+'" not found')}}"string"==typeof e?t():ready(t)}});
$rmod.def("/marko-widgets@6.0.0/lib/addEventListener",function(e,t,n,o,r){function i(e,t,n){this._info=[e,t,n]}function a(e,t,n){this._info=[e,t,n]}function u(){var e=window.event;return e.target=e.target||e.srcElement,e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.stopPropagation=e.stopPropagation||function(){e.cancelBubble=!0},e.key=(e.which+1||e.keyCode+1)-1||0,e}var c=document.body||document.createElement("div");i.prototype={remove:function(){var e=this._info,t=e[0],n=e[1],o=e[2];t.detachEvent(n,o)}},a.prototype={remove:function(){var e=this._info,t=e[0],n=e[1],o=e[2];t.removeEventListener(n,o)}},c.addEventListener?n.exports=function(e,t,n){return e.addEventListener(t,n,!1),new a(e,t,n)}:n.exports=function(e,t,n){function o(){var e=u();n(e)}return t="on"+t,e.attachEvent(t,o),new i(e,t,o)}});
$rmod.def("/marko-widgets@6.0.0/lib/update-manager",function(e,u,n,t,a){function l(){if(y.length)try{d(y)}finally{g=!1}}function r(){g||(g=!0,p.nextTick(l))}function i(e){r(),s||(s=new c),s.done(e)}function d(e){for(var u=0;u<e.length;u++){var n=e[u];n.__updateQueued=!1,n.update()}e.length=0}function f(e){var u=0===h.length,n={queue:null};h.push(n);try{e()}finally{try{n.queue&&d(n.queue)}finally{h.length--,u&&s&&(s.resolve(),s=null)}}}function o(e){if(!e.__updateQueued){e.__updateQueued=!0;var u=h.length;if(u){var n=h[u-1];n.queue?n.queue.push(e):n.queue=[e]}else r(),y.push(e)}}var p=e("process"),c=e("/$/marko-widgets/$/raptor-async/AsyncValue"),s=null,s=null,g=!1,h=[],y=[];u.queueWidgetUpdate=o,u.batchUpdate=f,u.onAfterUpdate=i});
$rmod.def("/marko-widgets@6.0.0/lib/repeated-id",function(e,t,n,o,d){function i(){this.nextIdLookup={}}i.prototype={nextId:function(e,t){var n=e+"-"+t,o=this.nextIdLookup[n];return o=null==o?this.nextIdLookup[n]=0:++this.nextIdLookup[n],n.slice(0,-2)+"["+o+"]"}},t.nextId=function(e,t,n){var o=e.global.__repeatedId;return null==o&&(o=e.global.__repeatedId=new i),o.nextId(t,n)}});
$rmod.def("/marko-widgets@6.0.0/lib/WidgetDef",function(t,s,i,e,n){function d(t,s,i){this.type=t.type,this.id=t.id,this.config=t.config,this.state=t.state,this.scope=t.scope,this.domEvents=null,this.customEvents=t.customEvents,this.bodyElId=t.bodyElId,this.children=[],this.end=s,this.extend=t.extend,this.out=i,this.hasDomEvents=t.hasDomEvents,this._nextId=0}t("/$/marko-widgets/$/raptor-polyfill/string/endsWith");var o=t("../lib/repeated-id");d.prototype={addChild:function(t){this.children.push(t)},elId:function(t){return null==t?this.id:"string"==typeof t&&t.endsWith("[]")?o.nextId(this.out,this.id,t):this.id+"-"+t},addDomEvent:function(t,s,i){this.domEvents||(this.domEvents=[]),this.domEvents.push(t),this.domEvents.push(s),this.domEvents.push(i)},getDomEventsAttr:function(){return this.domEvents?this.domEvents.join(","):void 0},nextId:function(){return this.id+"-w"+this._nextId++}},i.exports=d});
$rmod.remap("/marko-widgets@6.0.0/lib/uniqueId","uniqueId-browser");
$rmod.def("/marko-widgets@6.0.0/lib/uniqueId-browser",function(r,i,n,o,w){var I=window.MARKO_WIDGETS_UNIQUE_ID;if(!I){var d=0;window.MARKO_WIDGETS_UNIQUE_ID=I=function(){return"wc"+d++}}n.exports=I});
$rmod.def("/marko-widgets@6.0.0/lib/WidgetsContext",function(t,e,i,n,d){function s(t){h.call(this),this.out=t,this.widgets=[],this.widgetStack=[],this.preserved=null,this.reusableWidgets=null,this.reusableWidgetsById=null,this.widgetsById={}}var r=t("./WidgetDef"),g=t("./uniqueId"),u=t("./init-widgets"),h=t("/$/marko-widgets/$/events").EventEmitter,o=t("/$/marko-widgets/$/raptor-util/inherit"),a=1,c=2,l=4;s.prototype={getWidgets:function(){return this.widgets},getWidgetStack:function(){return this.widgetStack},getCurrentWidget:function(){return this.widgetStack.length?this.widgetStack[this.widgetStack.length-1]:void 0},beginWidget:function(t,e){function i(){d.length=s}var n=this,d=n.widgetStack,s=d.length,g=s?d[s-1]:null;t.id||(t.id=n._nextWidgetId()),t.parent=g;var u=new r(t,i,this.out);return this.widgetsById[t.id]=u,g?g.addChild(u):n.widgets.push(u),d.push(u),this.emit("beginWidget",u),u},getWidget:function(t){return this.widgetsById[t]},hasWidgets:function(){return 0!==this.widgets.length},clearWidgets:function(){this.widgets=[],this.widgetStack=[]},_nextWidgetId:function(){return g(this.out)},initWidgets:function(t){var e=this.widgets;u.initClientRendered(e,t),this.clearWidgets()},onBeginWidget:function(t){this.on("beginWidget",t)},isPreservedEl:function(t){var e=this.preserved;return e&&e[t]&a},isPreservedBodyEl:function(t){var e=this.preserved;return e&&e[t]&c},hasUnpreservedBody:function(t){var e=this.preserved;return e&&e[t]&l},addPreservedDOMNode:function(t,e,i){var n=this.preserved||(this.preserved={}),d=e?c:a;i&&(d|=l),n[t.id]=d}},o(s,h),s.getWidgetsContext=function(t){var e=t.global;return t.data.widgets||e.widgets||(e.widgets=new s(t))},i.exports=s});
$rmod.def("/marko-widgets@6.0.0/lib/bubble",function(e,d,r,s,o){r.exports=["click","dblclick","mousedown","mouseup","dragstart","drag","drop","dragend","keydown","keypress","keyup","select","change","submit","reset"]});
$rmod.def("/marko-widgets@6.0.0/lib/registry",function(e,r,t,n,i){function d(r){var t=g[r];if(void 0===t&&(t=f[r],t||(t=e(r)),g[r]=t||null),null==t)throw new Error("Unable to load: "+r);return t}function o(e){var r=l[e];if(r)return r;r=d(e);var t;return r.Widget&&(r=r.Widget),r.renderer&&(t=a(r)),r=u(r,t),r.prototype.__type=e,l[e]=r,r}var u,a,f={},g={},l={};r.register=function(e,r){if(1===arguments.length){var t=arguments[0];e=t.name,r=t.def()}f[e]=r,delete g[e],delete l[e]},r.load=d,r.createWidget=function(e,r,t){var n,i=o(e);return"function"==typeof i?n=new i(r,t):i.initWidget&&(n=i,n.__document=t),n},u=e("./defineWidget"),a=e("./defineRenderer")});
$rmod.def("/marko-widgets@6.0.0/lib/defineComponent",function(e,r,n,t,d){var i,o;n.exports=function(e){if(e._isWidget)return e;var r;if(!e.template&&!e.renderer)throw new Error('Expected "template" or "renderer"');return r=i(e),o(e,r)},i=e("./defineRenderer"),o=e("./defineWidget")});
$rmod.remap("/marko-widgets@6.0.0/lib/defineWidget","defineWidget-browser");
$rmod.def("/marko-widgets@6.0.0/lib/defineWidget-browser",function(e,r,t,n,i){var o,d;t.exports=function(e,r){function t(e,r){o.call(this,e,r)}if(e._isWidget)return e;var n=e.extendWidget;if(n)return{renderer:r,render:r.render,extendWidget:function(e){n(e),e.renderer=r}};var i,u;if("function"==typeof e){if(i=e,u=i.prototype,u.render&&2===u.render.length)throw new Error('"render(input, out)" is no longer supported. Use "renderer(input, out)" instead.')}else{if("object"!=typeof e)throw new Error("Invalid widget");i=e.init||function(){},u=i.prototype=e}return u._isWidget||d(i,o),u=t.prototype=i.prototype,u.initWidget=i,u.constructor=e.constructor=t,t._isWidget=!0,r&&(t.renderer=u.renderer=r,t.render=r.render),t},o=e("./Widget"),d=e("/$/marko-widgets/$/raptor-util/inherit")});
$rmod.def("/marko-widgets@6.0.0/lib/defineRenderer",function(e,r,t,d,n){var i=e("/$/marko-widgets/$/marko"),a=e("/$/marko-widgets/$/raptor-renderer"),o=e("/$/marko-widgets/$/raptor-util/extend");t.exports=function(e){var r,t=e.template,d=e.getInitialProps,n=e.getTemplateData,g=e.getInitialState,_=e.getWidgetConfig,l=e.getInitialBody,f=e.extendWidget,s=e.renderer;return s||(s=function(e,a){var s=a.global,w=e;w||(w={}),r||(r=t.render?t:i.load(t));var p;if(g&&s.__rerenderWidget&&s.__rerenderState){var u=!s.__firstWidgetFound;if(!u||f)for(var m in s.__rerenderState)s.__rerenderState.hasOwnProperty(m)&&!e.hasOwnProperty(m)&&(w[m]=s.__rerenderState[m]);else p=e,w=null}p||(d&&(w=d(w,a)||{}),g&&(p=g(w,a))),s.__firstWidgetFound=!0;var v=n?n(p,w,a):p||w;v=v?o({},v):{},p&&(v.widgetState=p),w&&(v.widgetProps=w,l?v.widgetBody=l(w,a):v.widgetBody=w.renderBody,_&&(v.widgetConfig=_(w,a))),r.render(v,a)}),s.render=a.createRenderFunc(s),s}});
$rmod.remap("/marko-widgets@6.0.0/lib/index","index-browser");
$rmod.def("/marko-widgets@6.0.0/lib/index-browser",function(e,t,n,r,i){function d(e,t){if(!e)return void 0;var n="string"==typeof e?(t||window.document).getElementById(e):e;return n&&n.__widget||void 0}var o=e("/$/marko-widgets/$/raptor-pubsub"),a=e("/$/marko-widgets/$/raptor-dom").ready,g={},f=e("./Widget"),u=e("./init-widgets"),s=e("./addEventListener"),c=e("/$/marko-widgets/$/raptor-renderer"),w=e("./update-manager"),m=t.WidgetsContext=e("./WidgetsContext");t.getWidgetsContext=m.getWidgetsContext,t.Widget=f,t.ready=a,t.onInitWidget=function(e){o.on("marko-widgets/initWidget",e)},t.attrs=function(){return g},t.writeDomEventsEl=function(){},t.get=t.getWidgetForEl=d,t.initAllWidgets=function(){u.initServerRendered(!0)},o.on("dom/beforeRemove",function(e){var t=e.el,n=t.id?d(t):null;n&&n.destroy({removeNode:!1,recursive:!0})}).on("raptor-renderer/renderedToDOM",function(e){var t=e.out||e.context,n=t.global.widgets;n&&n.initWidgets(e.document)}),t.initWidgets=window.$markoWidgets=function(e){u.initServerRendered(e)};var b="jquery",l=window.$;if(!l)try{l=e(b)}catch(v){}t.$=l,a(function(){var t=document.body;e("./bubble").forEach(function(e){s(t,e,function(t){var n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),n=!0},w.batchUpdate(function(){var r=t.target;if(r){var i,d,o="data-w-on"+e;do if(i=r.getAttribute(o)){var a=i.lastIndexOf("|"),g=i.substring(a+1);if(d=document.getElementById(g).__widget,!d)throw new Error("Widget not found: "+g);i=i.substring(0,a);var f=d[i];if(!f)throw new Error("Method not found on widget "+d.id+": "+i);if(d[i](t,r),n)break}while((r=r.parentNode)&&r.getAttribute)}})})})}),t.registerWidget=e("./registry").register,t.makeRenderable=t.renderable=c.renderable,t.render=c.render,t.defineComponent=e("./defineComponent"),t.defineWidget=e("./defineWidget"),t.defineRenderer=e("./defineRenderer"),t.batchUpdate=w.batchUpdate,t.onAfterUpdate=w.onAfterUpdate,window.$MARKO_WIDGETS=t});