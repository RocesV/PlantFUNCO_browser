"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6776],{60217:function(t,e,a){a.d(e,{Z:function(){return S}});var o=a(56666),r=a(31461),i=a(7896),n=a(96902),c=a(24463),s=a(73674),l=a(16644),d=a(53068),p=a(35579),v=a(88636),u=a(83413),g=a(70378),b=a(71470),m=a(88230),Z=a(30992),h=a(29938),f=(0,Z.Z)((0,h.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),y=(0,Z.Z)((0,h.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),x=a(2252),z=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],C=function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["size".concat((0,g.Z)(a.size))],"text"===a.variant&&e["text".concat((0,g.Z)(a.color))],"outlined"===a.variant&&e["outlined".concat((0,g.Z)(a.color))],"rounded"===a.shape&&e.rounded,"page"===a.type&&e.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&e.ellipsis,("previous"===a.type||"next"===a.type)&&e.previousNext,("first"===a.type||"last"===a.type)&&e.firstLast]},k=(0,x.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:C})((function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({},e.typography.body2,(0,o.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto"},"&.".concat(p.Z.disabled),{opacity:(e.vars||e).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})})),O=(0,x.ZP)(u.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:C})((function(t){var e,a,r=t.theme,n=t.ownerState;return(0,i.Z)({},r.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(r.vars||r).palette.text.primary},(0,o.Z)(a,"&.".concat(p.Z.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,o.Z)(a,"&.".concat(p.Z.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,o.Z)(a,"transition",r.transitions.create(["color","background-color"],{duration:r.transitions.duration.short})),(0,o.Z)(a,"&:hover",{backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(a,"&.".concat(p.Z.selected),(e={backgroundColor:(r.vars||r).palette.action.selected,"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.selected," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(r.palette.action.selected,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(r.vars||r).palette.action.selected}}},(0,o.Z)(e,"&.".concat(p.Z.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.selected," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(r.palette.action.selected,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}),(0,o.Z)(e,"&.".concat(p.Z.disabled),{opacity:1,color:(r.vars||r).palette.action.disabled,backgroundColor:(r.vars||r).palette.action.selected}),e)),a),"small"===n.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:r.typography.pxToRem(15)},"rounded"===n.shape&&{borderRadius:(r.vars||r).shape.borderRadius})}),(function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({},"text"===a.variant&&(0,o.Z)({},"&.".concat(p.Z.selected),(0,i.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}},"&.".concat(p.Z.focusVisible),{backgroundColor:(e.vars||e).palette[a.color].dark}),(0,o.Z)({},"&.".concat(p.Z.disabled),{color:(e.vars||e).palette.action.disabled}))),"outlined"===a.variant&&(0,o.Z)({border:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(p.Z.selected),(0,i.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].main,border:"1px solid ".concat(e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / 0.5)"):(0,l.Fq)(e.palette[a.color].main,.5)),backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / ").concat(e.vars.palette.action.activatedOpacity,")"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(p.Z.focusVisible),{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}),(0,o.Z)({},"&.".concat(p.Z.disabled),{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}))))})),R=(0,x.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(t,e){return e.icon}})((function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:e.typography.pxToRem(18)},"large"===a.size&&{fontSize:e.typography.pxToRem(22)})})),S=n.forwardRef((function(t,e){var a=(0,d.Z)({props:t,name:"MuiPaginationItem"}),o=a.className,n=a.color,l=void 0===n?"standard":n,u=a.component,Z=a.components,x=void 0===Z?{}:Z,C=a.disabled,S=void 0!==C&&C,w=a.page,L=a.selected,P=void 0!==L&&L,M=a.shape,N=void 0===M?"circular":M,j=a.size,I=void 0===j?"medium":j,F=a.slots,q=void 0===F?{}:F,T=a.type,W=void 0===T?"page":T,V=a.variant,_=void 0===V?"text":V,B=(0,r.Z)(a,z),A=(0,i.Z)({},a,{color:l,disabled:S,selected:P,shape:N,size:I,type:W,variant:_}),H=(0,v.Z)(),U=function(t){var e=t.classes,a=t.color,o=t.disabled,r=t.selected,i=t.size,n=t.shape,c=t.type,l=t.variant,d={root:["root","size".concat((0,g.Z)(i)),l,n,"standard"!==a&&"".concat(l).concat((0,g.Z)(a)),o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[c]],icon:["icon"]};return(0,s.Z)(d,p.b,e)}(A),D=("rtl"===H.direction?{previous:q.next||x.next||y,next:q.previous||x.previous||f,last:q.first||x.first||b.Z,first:q.last||x.last||m.Z}:{previous:q.previous||x.previous||f,next:q.next||x.next||y,first:q.first||x.first||b.Z,last:q.last||x.last||m.Z})[W];return"start-ellipsis"===W||"end-ellipsis"===W?(0,h.jsx)(k,{ref:e,ownerState:A,className:(0,c.default)(U.root,o),children:"\u2026"}):(0,h.jsxs)(O,(0,i.Z)({ref:e,ownerState:A,component:u,disabled:S,className:(0,c.default)(U.root,o)},B,{children:["page"===W&&w,D?(0,h.jsx)(R,{as:D,ownerState:A,className:U.icon}):null]}))}))},56776:function(t,e,a){a.r(e),a.d(e,{default:function(){return o.Z},getPaginationItemUtilityClass:function(){return r.b},paginationItemClasses:function(){return r.Z}});var o=a(60217),r=a(35579)},35579:function(t,e,a){a.d(e,{b:function(){return i}});var o=a(74732),r=a(61235);function i(t){return(0,r.Z)("MuiPaginationItem",t)}var n=(0,o.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);e.Z=n},71470:function(t,e,a){a(96902);var o=a(30992),r=a(29938);e.Z=(0,o.Z)((0,r.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},88230:function(t,e,a){a(96902);var o=a(30992),r=a(29938);e.Z=(0,o.Z)((0,r.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=6776.f173f855.chunk.js.map