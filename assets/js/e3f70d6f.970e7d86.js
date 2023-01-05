"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"useIsFetching",title:"useIsFetching"},o=void 0,s={unversionedId:"reference/useIsFetching",id:"version-v4/reference/useIsFetching",title:"useIsFetching",description:"useIsFetching is an optional hook that returns the number of the queries that your application is loading or fetching in the background (useful for app-wide loading indicators).",source:"@site/versioned_docs/version-v4/reference/useIsFetching.md",sourceDirName:"reference",slug:"/reference/useIsFetching",permalink:"/react-query-web-i18n/reference/useIsFetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v4/reference/useIsFetching.md",tags:[],version:"v4",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"useIsFetching",title:"useIsFetching"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useIsFetching")," is an optional hook that returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of the queries that your application is loading or fetching in the background (useful for app-wide loading indicators)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIsFetching } from "@tanstack/react-query";\n// How many queries are fetching?\nconst isFetching = useIsFetching();\n// How many queries matching the posts prefix are fetching?\nconst isFetchingPosts = useIsFetching(["posts"]);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/guides&concepts/query-keys"},"Query Keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/guides&concepts/filters#query-filters"},"Query Filters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context?: React.Context<QueryClient | undefined>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use this to use a custom React Query context. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultContext")," will be used.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetching: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be the ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," of the queries that your application is currently loading or fetching in the background.")))))}p.isMDXComponent=!0}}]);