module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=n(0),u=r(n(2));t.ABContext=a.createContext([{},function(){}]),t.ABProvider=function(e){var n=a.useState(e.initialState||u.default.get()),r=n[0],l=n[1];return o.default.createElement(t.ABContext.Provider,{value:[r,l]},e.children)}},function(e,t){e.exports=require("js-cookie")},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.ABProvider=r.ABProvider;var o=n(5);t.Experiment=o.Experiment;var a=n(9);t.Variant=a.Variant},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(0)),i=u(n(2)),c=n(1),f=u(n(6)),d=n(7);var p=30;t.Experiment=function(e){var t=l.useState(!1),n=t[0],a=t[1],u=l.useContext(c.ABContext),s=u[0],m=u[1],v=l.useState(s[encodeURIComponent(e.name)]?parseInt(s[encodeURIComponent(e.name)],10):-1),b=v[0],h=v[1],y=l.default.useState(!1),_=y[0],g=y[1];l.useEffect((function(){if(-1===b){var t=e.pickVariant?e.pickVariant(e.children):(n=e.children,Math.floor(Math.random()*n.length));h(t)}var n;a(!!(e.debugUriParam&&window.location.href.indexOf(e.debugUriParam)>-1))}),[]),l.useEffect((function(){var t;if(-1!==b){var n={};s&&(n=r(r({},s),((t={})[encodeURIComponent(e.name)]=b,t))),m(n),i.default.set(e.name,""+b,{expires:p})}}),[b]);var x=l.default.Children.map(e.children,(function(t){return l.default.cloneElement(t,{onClick:function(n,r){e.onClick&&e.onClick(n,e.name,r),t.props.onClick&&t.props.onClick(n,r)},onRunVariant:function(n){e.onRunExperiment&&e.onRunExperiment(e.name,n),t.props.onRunVariant&&t.props.onRunVariant(n)}})}));return l.default.createElement(l.default.Fragment,null,x.length<2?x:null,b>-1?x[b]:null,"undefined"!=typeof document&&n?f.default.createPortal(l.default.createElement("button",{style:{border:"none",backgroundColor:"black",color:"white",padding:"1rem",margin:".5rem",borderRadius:"3px",cursor:"pointer"},onClick:function(){g(!0)}},"A/B ",e.name," (",b+1,"∈",x.length,")"),e.debugRoot||document.querySelector("#ABdebug")):null,"undefined"!=typeof document&&n?f.default.createPortal(l.default.createElement(d.Debug,{debugChange:function(e){h(parseInt(e.currentTarget.value,10))},handleClose:function(){g(!1)},handleRemoveExperiment:function(e){var t={};s&&(t=r({},s));var n=encodeURIComponent(e),a=(t[n],o(t,["symbol"==typeof n?n:n+""]));i.default.remove(e),m(a)},open:_,name:e.name,variant:b},x),document.querySelector("body")):null)}},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=r(n(8)),u={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};a.default.setAppElement("body"),t.Debug=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.default,{isOpen:e.open,onRequestClose:e.handleClose,style:u,contentLabel:"Example Modal"},o.default.createElement("div",null,o.default.createElement("section",null,o.default.createElement("h2",null,e.name,o.default.createElement("span",{onClick:function(){e.handleRemoveExperiment(e.name)},title:"Remove experiment from cookie"},"[x]")),e.children.map((function(t,n){return o.default.createElement("label",{key:t.props.name},o.default.createElement("input",{type:"radio",value:n,name:e.name,onChange:e.debugChange,checked:n===e.variant}),t.props.name)}))))))}},function(e,t){e.exports=require("react-modal")},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.Variant=function(e){o.useEffect((function(){e.onRunVariant&&e.onRunVariant(e.name)}),[]);var t=o.default.Children.map(e.children,(function(t){return o.default.cloneElement(t,{onClick:function(n){e.onClick&&e.onClick(n,e.name),t.props.onClick&&t.props.onClick(n)}})}));return o.default.createElement(o.default.Fragment,{key:e.name},t)}}]);