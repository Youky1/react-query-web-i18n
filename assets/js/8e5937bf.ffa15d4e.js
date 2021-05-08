(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),c=(t(0),t(143)),a={id:"QueriesObserver",title:"QueriesObserver"},i={unversionedId:"reference/QueriesObserver",id:"reference/QueriesObserver",isDocsHomePage:!1,title:"QueriesObserver",description:"QueriesObserver",source:"@site/docs/reference/QueriesObserver.md",slug:"/reference/QueriesObserver",permalink:"/react-query-web-i18n/reference/QueriesObserver",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/QueriesObserver.md",version:"current",lastUpdatedAt:1620447725,formattedLastUpdatedAt:"5/8/2021"},s=[{value:"<code>QueriesObserver</code>",id:"queriesobserver",children:[]}],u={toc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"queriesobserver"},Object(c.b)("inlineCode",{parentName:"h2"},"QueriesObserver")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"QueriesObserver")," can be used to observe multiple queries."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const observer = new QueriesObserver(queryClient, [\n  { queryKey: ['post', 1], queryFn: fetchPost },\n  { queryKey: ['post', 2], queryFn: fetchPost },\n])\n\nconst unsubscribe = observer.subscribe(result => {\n  console.log(result)\n  unsubscribe()\n})\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Options")),Object(c.b)("p",null,"The options for the ",Object(c.b)("inlineCode",{parentName:"p"},"QueriesObserver")," are exactly the same as those of ",Object(c.b)("a",{parentName:"p",href:"#usequeries"},Object(c.b)("inlineCode",{parentName:"a"},"useQueries")),"."))}b.isMDXComponent=!0},143:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return O}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=b(t),f=n,O=p["".concat(a,".").concat(f)]||p[f]||l[f]||c;return t?o.a.createElement(O,i(i({ref:r},u),{},{components:t})):o.a.createElement(O,i({ref:r},u))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);