"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),c=a,m=s["".concat(d,".").concat(c)]||s[c]||y[c]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"hydration.useHydrate",title:"hydration/useHydrate"},o=void 0,l={unversionedId:"reference/hydration/hydration.useHydrate",id:"version-v3/reference/hydration/hydration.useHydrate",title:"hydration/useHydrate",description:"useHydrate adds a previously dehydrated state into the queryClient that would be returned by useQueryClient(). If the client already contains data, the new queries will be intelligently merged based on update timestamp.",source:"@site/versioned_docs/version-v3/reference/hydration/useHydrate.md",sourceDirName:"reference/hydration",slug:"/reference/hydration/hydration.useHydrate",permalink:"/react-query-web-i18n/v3/reference/hydration/hydration.useHydrate",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/reference/hydration/useHydrate.md",tags:[],version:"v3",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"hydration.useHydrate",title:"hydration/useHydrate"}},d={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useHydrate")," adds a previously dehydrated state into the ",(0,a.kt)("inlineCode",{parentName:"p"},"queryClient")," that would be returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"useQueryClient()"),". If the client already contains data, the new queries will be intelligently merged based on update timestamp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useHydrate } from 'react-query/hydration'\n\nuseHydrate(dehydratedState, options)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dehydratedState: DehydratedState"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required")),(0,a.kt)("li",{parentName:"ul"},"The state to hydrate"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options: HydrateOptions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Optional"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultOptions: QueryOptions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The default query options to use for the hydrated queries.")))))))}s.isMDXComponent=!0}}]);