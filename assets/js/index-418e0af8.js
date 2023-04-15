import{r as a,f as A,h as E,k as p,C as K,e as Q,R as q,u as U,v as O,w as W,x as X,a as i,j}from"./index-a62f48fe.js";import{A as Y}from"./index-a3883a72.js";import"./getDataOrAriaProps-8c1fcf80.js";var Z=function(e){var n=e.children;return n},_=Z;function k(t){return t!=null}var ee=function(e){var n=e.itemPrefixCls,r=e.component,l=e.span,s=e.className,o=e.style,x=e.labelStyle,v=e.contentStyle,b=e.bordered,u=e.label,d=e.content,C=e.colon,h=r;if(b){var c;return a.exports.createElement(h,{className:A((c={},E(c,"".concat(n,"-item-label"),k(u)),E(c,"".concat(n,"-item-content"),k(d)),c),s),style:o,colSpan:l},k(u)&&a.exports.createElement("span",{style:x},u),k(d)&&a.exports.createElement("span",{style:v},d))}return a.exports.createElement(h,{className:A("".concat(n,"-item"),s),style:o,colSpan:l},a.exports.createElement("div",{className:"".concat(n,"-item-container")},(u||u===0)&&a.exports.createElement("span",{className:A("".concat(n,"-item-label"),E({},"".concat(n,"-item-no-colon"),!C)),style:x},u),(d||d===0)&&a.exports.createElement("span",{className:A("".concat(n,"-item-content")),style:v},d)))},z=ee;function M(t,e,n){var r=e.colon,l=e.prefixCls,s=e.bordered,o=n.component,x=n.type,v=n.showLabel,b=n.showContent,u=n.labelStyle,d=n.contentStyle;return t.map(function(C,h){var c=C.props,f=c.label,g=c.children,F=c.prefixCls,S=F===void 0?l:F,w=c.className,m=c.style,P=c.labelStyle,N=c.contentStyle,I=c.span,B=I===void 0?1:I,$=C.key;return typeof o=="string"?a.exports.createElement(z,{key:"".concat(x,"-").concat($||h),className:w,style:m,labelStyle:p(p({},u),P),contentStyle:p(p({},d),N),span:B,colon:r,component:o,itemPrefixCls:S,bordered:s,label:v?f:null,content:b?g:null}):[a.exports.createElement(z,{key:"label-".concat($||h),className:w,style:p(p(p({},u),m),P),span:1,colon:r,component:o[0],itemPrefixCls:S,bordered:s,label:f}),a.exports.createElement(z,{key:"content-".concat($||h),className:w,style:p(p(p({},d),m),N),span:B*2-1,component:o[1],itemPrefixCls:S,bordered:s,content:g})]})}var te=function(e){var n=a.exports.useContext(V),r=e.prefixCls,l=e.vertical,s=e.row,o=e.index,x=e.bordered;return l?a.exports.createElement(a.exports.Fragment,null,a.exports.createElement("tr",{key:"label-".concat(o),className:"".concat(r,"-row")},M(s,e,p({component:"th",type:"label",showLabel:!0},n))),a.exports.createElement("tr",{key:"content-".concat(o),className:"".concat(r,"-row")},M(s,e,p({component:"td",type:"content",showContent:!0},n)))):a.exports.createElement("tr",{key:o,className:"".concat(r,"-row")},M(s,e,p({component:x?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},ne=te,V=a.exports.createContext({}),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ae(t,e){if(typeof t=="number")return t;if(U(t)==="object")for(var n=0;n<O.length;n++){var r=O[n];if(e[r]&&t[r]!==void 0)return t[r]||G[r]}return 3}function T(t,e,n){var r=t;return(e===void 0||e>n)&&(r=X(t,{span:n})),r}function re(t,e){var n=W(t).filter(function(o){return o}),r=[],l=[],s=e;return n.forEach(function(o,x){var v,b=(v=o.props)===null||v===void 0?void 0:v.span,u=b||1;if(x===n.length-1){l.push(T(o,b,s)),r.push(l);return}u<s?(s-=u,l.push(o)):(l.push(T(o,u,s)),r.push(l),s=e,l=[])}),r}function D(t){var e,n=t.prefixCls,r=t.title,l=t.extra,s=t.column,o=s===void 0?G:s,x=t.colon,v=x===void 0?!0:x,b=t.bordered,u=t.layout,d=t.children,C=t.className,h=t.style,c=t.size,f=t.labelStyle,g=t.contentStyle,F=a.exports.useContext(K),S=F.getPrefixCls,w=F.direction,m=S("descriptions",n),P=a.exports.useState({}),N=Q(P,2),I=N[0],B=N[1],$=ae(o,I);a.exports.useEffect(function(){var L=q.subscribe(function(R){U(o)==="object"&&B(R)});return function(){q.unsubscribe(L)}},[]);var H=re(d,$),J=a.exports.useMemo(function(){return{labelStyle:f,contentStyle:g}},[f,g]);return a.exports.createElement(V.Provider,{value:J},a.exports.createElement("div",{className:A(m,(e={},E(e,"".concat(m,"-").concat(c),c&&c!=="default"),E(e,"".concat(m,"-bordered"),!!b),E(e,"".concat(m,"-rtl"),w==="rtl"),e),C),style:h},(r||l)&&a.exports.createElement("div",{className:"".concat(m,"-header")},r&&a.exports.createElement("div",{className:"".concat(m,"-title")},r),l&&a.exports.createElement("div",{className:"".concat(m,"-extra")},l)),a.exports.createElement("div",{className:"".concat(m,"-view")},a.exports.createElement("table",null,a.exports.createElement("tbody",null,H.map(function(L,R){return a.exports.createElement(ne,{key:R,index:R,colon:v,prefixCls:m,vertical:u==="vertical",bordered:b,row:L})}))))))}D.Item=_;function y(t){const{name:e,prefix:n="icon",iconStyle:r={width:"100px",height:"100px"}}=t,l=`#${n}-${e}`;return i("svg",{"aria-hidden":"true",style:r,children:i("use",{href:l})})}const ce=()=>j("div",{className:"card content-box",children:[i(Y,{message:"SVG \u56FE\u6807\u76EE\u524D\u4F7F\u7528 vite-plugin-svg-icons \u63D2\u4EF6\u5B8C\u6210\uFF0C\u5B98\u65B9\u6587\u6863\u8BF7\u67E5\u770B \uFF1Ahttps://github.com/vbenjs/vite-plugin-svg-icons",style:{width:"100%"},type:"warning"}),i("br",{}),j("div",{className:"icon-list",children:[i(y,{name:"xianxingdaoyu"}),i(y,{name:"xianxingdiqiu"}),i(y,{name:"xianxingditu"}),i(y,{name:"xianxingfanchuan"}),i(y,{name:"xianxingfeiji"}),i(y,{name:"xianxinglvhangriji"}),i(y,{name:"xianxingtianqiyubao"}),i(y,{name:"xianxingxiangjipaizhao"}),i(y,{name:"xianxingxiarilengyin"}),i(y,{name:"xianxingyoulun"}),i(y,{name:"xianxingxiarilengyin"})]}),j(D,{title:"\u914D\u7F6E\u9879 \u{1F4DA}",bordered:!0,className:"antd-descriptions",column:1,children:[i(D.Item,{label:"name",children:"\u56FE\u6807\u7684\u540D\u79F0\uFF0Csvg \u56FE\u6807\u5FC5\u987B\u5B58\u50A8\u5728 src/assets/icons \u76EE\u5F55\u4E0B"}),i(D.Item,{label:"prefix",children:"\u56FE\u6807\u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3Aicon"}),j(D.Item,{label:"iconStyle",children:[" \u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u6837\u5F0F\u4E3A ","{ width: 100px, height: 100px}"," "]})]})]});export{ce as default};
