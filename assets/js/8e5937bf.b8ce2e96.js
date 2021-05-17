(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8645],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return b}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=a(t),b=o,m=f["".concat(c,".").concat(b)]||f[b]||l[b]||s;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<s;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},375:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(2122),o=t(9756),s=(t(7294),t(3905)),i={id:"QueriesObserver",title:"QueriesObserver"},u={unversionedId:"reference/QueriesObserver",id:"reference/QueriesObserver",isDocsHomePage:!1,title:"QueriesObserver",description:"QueriesObserver",source:"@site/docs/reference/QueriesObserver.md",sourceDirName:"reference",slug:"/reference/QueriesObserver",permalink:"/react-query-web-i18n/reference/QueriesObserver",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/QueriesObserver.md",version:"current",lastUpdatedAt:1621249769,formattedLastUpdatedAt:"5/17/2021",frontMatter:{id:"QueriesObserver",title:"QueriesObserver"}},c=[{value:"<code>QueriesObserver</code>",id:"queriesobserver",children:[]}],a={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"queriesobserver"},(0,s.kt)("inlineCode",{parentName:"h2"},"QueriesObserver")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"QueriesObserver")," can be used to observe multiple queries."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const observer = new QueriesObserver(queryClient, [\n  { queryKey: ['post', 1], queryFn: fetchPost },\n  { queryKey: ['post', 2], queryFn: fetchPost },\n])\n\nconst unsubscribe = observer.subscribe(result => {\n  console.log(result)\n  unsubscribe()\n})\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Options")),(0,s.kt)("p",null,"The options for the ",(0,s.kt)("inlineCode",{parentName:"p"},"QueriesObserver")," are exactly the same as those of ",(0,s.kt)("a",{parentName:"p",href:"#usequeries"},(0,s.kt)("inlineCode",{parentName:"a"},"useQueries")),"."))}p.isMDXComponent=!0}}]);