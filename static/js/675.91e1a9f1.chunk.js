(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{403:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},5649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(4454)},3044:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(9439),o=r(3366),i=r(7462),a=r(2791),c=r(3733),u=r(4419),s=r(6934),l=r(1402),f=r(9201),p=r(3329),d=(0,f.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(5878),m=r(1217);function v(e){return(0,m.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),b=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),T=(0,s.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var S=a.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiAvatar"}),s=r.alt,f=r.children,d=r.className,h=r.component,m=void 0===h?"div":h,S=r.imgProps,w=r.sizes,x=r.src,A=r.srcSet,O=r.variant,C=void 0===O?"circular":O,k=(0,o.Z)(r,g),E=null,P=function(e){var t=e.crossOrigin,r=e.referrerPolicy,o=e.src,i=e.srcSet,c=a.useState(!1),u=(0,n.Z)(c,2),s=u[0],l=u[1];return a.useEffect((function(){if(o||i){l(!1);var e=!0,n=new Image;return n.onload=function(){e&&l("loaded")},n.onerror=function(){e&&l("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=o,i&&(n.srcset=i),function(){e=!1}}}),[t,r,o,i]),s}((0,i.Z)({},S,{src:x,srcSet:A})),M=x||A,j=M&&"error"!==P,Z=(0,i.Z)({},r,{colorDefault:!j,component:m,variant:C}),I=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(r,v,t)}(Z);return E=j?(0,p.jsx)(b,(0,i.Z)({alt:s,src:x,srcSet:A,sizes:w,ownerState:Z,className:I.img},S)):null!=f?f:M&&s?s[0]:(0,p.jsx)(T,{ownerState:Z,className:I.fallback}),(0,p.jsx)(y,(0,i.Z)({as:m,ownerState:Z,className:(0,c.Z)(I.root,d),ref:t},k,{children:E}))}))},1889:function(e,t,r){"use strict";r.d(t,{ZP:function(){return E}});var n=r(3433),o=r(4942),i=r(3366),a=r(7462),c=r(2791),u=r(3733),s=r(1184),l=r(8519),f=r(4419),p=r(6934),d=r(1402),h=r(3967);var m=c.createContext(),v=r(5878),g=r(1217);function y(e){return(0,g.Z)("MuiGrid",e)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],T=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,n.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,n.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,n.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,n.Z)(b.map((function(e){return"grid-xs-".concat(e)}))),(0,n.Z)(b.map((function(e){return"grid-sm-".concat(e)}))),(0,n.Z)(b.map((function(e){return"grid-md-".concat(e)}))),(0,n.Z)(b.map((function(e){return"grid-lg-".concat(e)}))),(0,n.Z)(b.map((function(e){return"grid-xl-".concat(e)}))))),S=r(3329),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function A(e){var t=e.breakpoints,r=e.values,n="";Object.keys(r).forEach((function(e){""===n&&0!==r[e]&&(n=e)}));var o=Object.keys(t).sort((function(e,r){return t[e]-t[r]}));return o.slice(0,o.indexOf(n))}var O=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,o=r.container,i=r.direction,a=r.item,c=r.spacing,u=r.wrap,s=r.zeroMinWidth,l=r.breakpoints,f=[];o&&(f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r["spacing-xs-".concat(String(e))]];var n=[];return t.forEach((function(t){var o=e[t];Number(o)>0&&n.push(r["spacing-".concat(t,"-").concat(String(o))])})),n}(c,l,t));var p=[];return l.forEach((function(e){var n=r[e];n&&p.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,o&&t.container,a&&t.item,s&&t.zeroMinWidth].concat((0,n.Z)(f),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==u&&t["wrap-xs-".concat(String(u))]],p)}})((function(e){var t=e.ownerState;return(0,a.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,r=e.ownerState,n=(0,s.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},n,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(T.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,r=e.ownerState,n=r.container,i=r.rowSpacing,a={};if(n&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof u&&(c=A({breakpoints:t.breakpoints.values,values:u})),a=(0,s.k9)({theme:t},u,(function(e,r){var n,i=t.spacing(e);return"0px"!==i?(0,o.Z)({marginTop:"-".concat(x(i))},"& > .".concat(T.item),{paddingTop:x(i)}):null!=(n=c)&&n.includes(r)?{}:(0,o.Z)({marginTop:0},"& > .".concat(T.item),{paddingTop:0})}))}return a}),(function(e){var t=e.theme,r=e.ownerState,n=r.container,i=r.columnSpacing,a={};if(n&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof u&&(c=A({breakpoints:t.breakpoints.values,values:u})),a=(0,s.k9)({theme:t},u,(function(e,r){var n,i=t.spacing(e);return"0px"!==i?(0,o.Z)({width:"calc(100% + ".concat(x(i),")"),marginLeft:"-".concat(x(i))},"& > .".concat(T.item),{paddingLeft:x(i)}):null!=(n=c)&&n.includes(r)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(T.item),{paddingLeft:0})}))}return a}),(function(e){var t,r=e.theme,n=e.ownerState;return r.breakpoints.keys.reduce((function(e,o){var i={};if(n[o]&&(t=n[o]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:n.columns,breakpoints:r.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return e;var l="".concat(Math.round(t/u*1e8)/1e6,"%"),f={};if(n.container&&n.item&&0!==n.columnSpacing){var p=r.spacing(n.columnSpacing);if("0px"!==p){var d="calc(".concat(l," + ").concat(x(p),")");f={flexBasis:d,maxWidth:d}}}i=(0,a.Z)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===r.breakpoints.values[o]?Object.assign(e,i):e[r.breakpoints.up(o)]=i,e}),{})}));var C=function(e){var t=e.classes,r=e.container,o=e.direction,i=e.item,a=e.spacing,c=e.wrap,u=e.zeroMinWidth,s=e.breakpoints,l=[];r&&(l=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var r=[];return t.forEach((function(t){var n=e[t];if(Number(n)>0){var o="spacing-".concat(t,"-").concat(String(n));r.push(o)}})),r}(a,s));var p=[];s.forEach((function(t){var r=e[t];r&&p.push("grid-".concat(t,"-").concat(String(r)))}));var d={root:["root",r&&"container",i&&"item",u&&"zeroMinWidth"].concat((0,n.Z)(l),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],p)};return(0,f.Z)(d,y,t)},k=c.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiGrid"}),n=(0,h.Z)().breakpoints,o=(0,l.Z)(r),s=o.className,f=o.columns,p=o.columnSpacing,v=o.component,g=void 0===v?"div":v,y=o.container,b=void 0!==y&&y,T=o.direction,x=void 0===T?"row":T,A=o.item,k=void 0!==A&&A,E=o.rowSpacing,P=o.spacing,M=void 0===P?0:P,j=o.wrap,Z=void 0===j?"wrap":j,I=o.zeroMinWidth,L=void 0!==I&&I,N=(0,i.Z)(o,w),R=E||M,D=p||M,_=c.useContext(m),H=b?f||12:_,z={},W=(0,a.Z)({},N);n.keys.forEach((function(e){null!=N[e]&&(z[e]=N[e],delete W[e])}));var B=(0,a.Z)({},o,{columns:H,container:b,direction:x,item:k,rowSpacing:R,columnSpacing:D,wrap:Z,zeroMinWidth:L,spacing:M},z,{breakpoints:n.keys}),q=C(B);return(0,S.jsx)(m.Provider,{value:H,children:(0,S.jsx)(O,(0,a.Z)({ownerState:B,className:(0,u.Z)(q.root,s),as:g,ref:t},W))})})),E=k},4454:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return p},setRef:function(){return d},unstable_ClassNameGenerator:function(){return S},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return g.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return T.Z}});var n=r(5902),o=r(4036),i=r(8949).Z,a=r(9201),c=r(3199);var u=function(e,t){return function(){return null}},s=r(9103),l=r(8301),f=r(7602);r(7462);var p=function(e,t){return function(){return null}},d=r(2971).Z,h=r(162),m=r(8252).Z;var v=function(e,t,r,n,o){return null},g=r(5158),y=r(9683),b=r(2071),T=r(3031),S={configure:function(e){n.Z.configure(e)}}},2176:function(e){"use strict";e.exports=function(e,t,r,n,o,i,a,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,o,i,a,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6907:function(e,t,r){"use strict";r.d(t,{B6:function(){return U},ql:function(){return X}});var n=r(2791),o=r(2007),i=r.n(o),a=r(5121),c=r.n(a),u=r(2176),s=r.n(u),l=r(9613),f=r.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},g={rel:["amphtml","canonical","alternate"]},y={type:["application/ld+json"]},b={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},T=Object.keys(v).map((function(e){return v[e]})),S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},w=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),x=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},A=function(e){var t=x(e,v.TITLE),r=x(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=x(e,"defaultTitle");return t||n||void 0},O=function(e){return x(e,"onChangeClientState")||function(){}},C=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return p({},e,t)}),{})},k=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o+=1){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},E=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r,i=Object.keys(e),a=0;a<i.length;a+=1){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===u&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a+=1){var c=i[a],u=p({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},P=function(e,t){if(Array.isArray(e)&&e.length)for(var r=0;r<e.length;r+=1)if(e[r][t])return!0;return!1},M=function(e){return Array.isArray(e)?e.join(""):e},j=function(e,t){return Array.isArray(e)?e.reduce((function(e,r){return function(e,t){for(var r=Object.keys(e),n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1}(r,t)?e.priority.push(r):e.default.push(r),e}),{priority:[],default:[]}):{default:e}},Z=function(e,t){var r;return p({},e,((r={})[t]=void 0,r))},I=[v.NOSCRIPT,v.SCRIPT,v.STYLE],L=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},N=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},R=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[S[r]||r]=e[r],t}),t)},D=function(e,t){return t.map((function(t,r){var o,i=((o={key:r})["data-rh"]=!0,o);return Object.keys(t).forEach((function(e){var r=S[e]||e;"innerHTML"===r||"cssText"===r?i.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:i[r]=t[e]})),n.createElement(e,i)}))},_=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return r=t.titleAttributes,(o={key:e=t.title})["data-rh"]=!0,i=R(r,o),[n.createElement(v.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=N(r),i=M(t);return o?"<"+e+' data-rh="true" '+o+">"+L(i,n)+"</"+e+">":"<"+e+' data-rh="true">'+L(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return R(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return D(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+L(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===I.indexOf(e);return t+"<"+e+' data-rh="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},H=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.noscriptTags,a=e.styleTags,c=e.title,u=void 0===c?"":c,s=e.titleAttributes,l=e.linkTags,f=e.metaTags,p=e.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var h=function(e){var t=e.linkTags,r=e.scriptTags,n=e.encode,o=j(e.metaTags,b),i=j(t,g),a=j(r,y);return{priorityMethods:{toComponent:function(){return[].concat(D(v.META,o.priority),D(v.LINK,i.priority),D(v.SCRIPT,a.priority))},toString:function(){return _(v.META,o.priority,n)+" "+_(v.LINK,i.priority,n)+" "+_(v.SCRIPT,a.priority,n)}},metaTags:o.default,linkTags:i.default,scriptTags:a.default}}(e);d=h.priorityMethods,l=h.linkTags,f=h.metaTags,p=h.scriptTags}return{priority:d,base:_(v.BASE,t,n),bodyAttributes:_("bodyAttributes",r,n),htmlAttributes:_("htmlAttributes",o,n),link:_(v.LINK,l,n),meta:_(v.META,f,n),noscript:_(v.NOSCRIPT,i,n),script:_(v.SCRIPT,p,n),style:_(v.STYLE,a,n),title:_(v.TITLE,{title:u,titleAttributes:s},n)}},z=[],W=function(e,t){var r=this;void 0===t&&(t="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(e){r.context.helmet=e},helmetInstances:{get:function(){return r.canUseDOM?z:r.instances},add:function(e){(r.canUseDOM?z:r.instances).push(e)},remove:function(e){var t=(r.canUseDOM?z:r.instances).indexOf(e);(r.canUseDOM?z:r.instances).splice(t,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=H({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},B=n.createContext({}),q=i().shape({setHelmet:i().func,helmetInstances:i().shape({get:i().func,add:i().func,remove:i().func})}),F="undefined"!=typeof document,U=function(e){function t(r){var n;return(n=e.call(this,r)||this).helmetData=new W(n.props.context,t.canUseDOM),n}return d(t,e),t.prototype.render=function(){return n.createElement(B.Provider,{value:this.helmetData.value},this.props.children)},t}(n.Component);U.canUseDOM=F,U.propTypes={context:i().shape({helmet:i().shape()}),children:i().node.isRequired},U.defaultProps={context:{}},U.displayName="HelmetProvider";var Y=function(e,t){var r,n=document.head||document.querySelector(v.HEAD),o=n.querySelectorAll(e+"[data-rh]"),i=[].slice.call(o),a=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&("innerHTML"===o?n.innerHTML=t.innerHTML:"cssText"===o?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(o,void 0===t[o]?"":t[o]));n.setAttribute("data-rh","true"),i.some((function(e,t){return r=t,n.isEqualNode(e)}))?i.splice(r,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},G=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c+=1){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f-=1)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},V=function(e,t){var r=e.baseTag,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,l=e.title,f=e.titleAttributes;G(v.BODY,e.bodyAttributes),G(v.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=M(e)),G(v.TITLE,t)}(l,f);var p={baseTag:Y(v.BASE,r),linkTags:Y(v.LINK,o),metaTags:Y(v.META,i),noscriptTags:Y(v.NOSCRIPT,a),scriptTags:Y(v.SCRIPT,u),styleTags:Y(v.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},K=null,$=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}d(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!f()(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,o=null,i=(e=r.helmetInstances.get().map((function(e){var t=p({},e.props);return delete t.context,t})),{baseTag:k(["href"],e),bodyAttributes:C("bodyAttributes",e),defer:x(e,"defer"),encode:x(e,"encodeSpecialCharacters"),htmlAttributes:C("htmlAttributes",e),linkTags:E(v.LINK,["rel","href"],e),metaTags:E(v.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:E(v.NOSCRIPT,["innerHTML"],e),onChangeClientState:O(e),scriptTags:E(v.SCRIPT,["src","innerHTML"],e),styleTags:E(v.STYLE,["cssText"],e),title:A(e),titleAttributes:C("titleAttributes",e),prioritizeSeoTags:P(e,"prioritizeSeoTags")});U.canUseDOM?(t=i,K&&cancelAnimationFrame(K),t.defer?K=requestAnimationFrame((function(){V(t,(function(){K=null}))})):(V(t),K=null)):H&&(o=H(i)),n(o)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(n.Component);$.propTypes={context:q.isRequired},$.displayName="HelmetDispatcher";var J=["children"],Q=["children"],X=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!c()(Z(this.props,"helmetData"),Z(e,"helmetData"))},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return p({},n,((t={})[r.type]=[].concat(n[r.type]||[],[p({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return p({},o,((t={})[n.type]=a,t.titleAttributes=p({},i),t));case v.BODY:return p({},o,{bodyAttributes:p({},i)});case v.HTML:return p({},o,{htmlAttributes:p({},i)});default:return p({},o,((r={})[n.type]=p({},i),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=p({},t);return Object.keys(e).forEach((function(t){var n;r=p({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return s()(T.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+T.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),s()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=m(n,J),c=Object.keys(a).reduce((function(e,t){return e[w[t]||t]=a[t],e}),{}),u=e.type;switch("symbol"==typeof u?u=u.toString():r.warnOnInvalidChildren(e,i),u){case v.FRAGMENT:t=r.mapChildrenToProps(i,t);break;case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),this.mapArrayTypeChildrenToProps(o,t)},r.render=function(){var e=this.props,t=e.children,r=m(e,Q),o=p({},r),i=r.helmetData;return t&&(o=this.mapChildrenToProps(t,o)),!i||i instanceof W||(i=new W(i.context,i.instances)),i?n.createElement($,p({},o,{context:i.value,helmetData:void 0})):n.createElement(B.Consumer,null,(function(e){return n.createElement($,p({},o,{context:e}))}))},t}(n.Component);X.propTypes={base:i().object,bodyAttributes:i().object,children:i().oneOfType([i().arrayOf(i().node),i().node]),defaultTitle:i().string,defer:i().bool,encodeSpecialCharacters:i().bool,htmlAttributes:i().object,link:i().arrayOf(i().object),meta:i().arrayOf(i().object),noscript:i().arrayOf(i().object),onChangeClientState:i().func,script:i().arrayOf(i().object),style:i().arrayOf(i().object),title:i().string,titleAttributes:i().object,titleTemplate:i().string,prioritizeSeoTags:i().bool,helmetData:i().object},X.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},X.displayName="Helmet"},5121:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!==u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=675.91e1a9f1.chunk.js.map