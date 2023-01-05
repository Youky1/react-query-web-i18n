"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3283],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>b});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),y=i,b=f["".concat(u,".").concat(y)]||f[y]||p[y]||o;return n?t.createElement(b,a(a({ref:r},l),{},{components:n})):t.createElement(b,a({ref:r},l))}));function b(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2107:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const o={id:"InfiniteQueryObserver",title:"InfiniteQueryObserver"},a=void 0,s={unversionedId:"reference/InfiniteQueryObserver",id:"version-v4/reference/InfiniteQueryObserver",title:"InfiniteQueryObserver",description:"InfiniteQueryObserver",source:"@site/versioned_docs/version-v4/reference/InfiniteQueryObserver.md",sourceDirName:"reference",slug:"/reference/InfiniteQueryObserver",permalink:"/react-query-web-i18n/reference/InfiniteQueryObserver",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v4/reference/InfiniteQueryObserver.md",tags:[],version:"v4",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"InfiniteQueryObserver",title:"InfiniteQueryObserver"}},u={},c=[{value:"<code>InfiniteQueryObserver</code>",id:"infinitequeryobserver",level:2}],l={toc:c};function f(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"infinitequeryobserver"},(0,i.kt)("inlineCode",{parentName:"h2"},"InfiniteQueryObserver")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQueryObserver")," can be used to observe and switch between infinite queries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const observer = new InfiniteQueryObserver(queryClient, {\n  queryKey: ["posts"],\n  queryFn: fetchPosts,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,\n  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,\n});\n\nconst unsubscribe = observer.subscribe((result) => {\n  console.log(result);\n  unsubscribe();\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("p",null,"The options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQueryObserver")," are exactly the same as those of ",(0,i.kt)("a",{parentName:"p",href:"/react-query-web-i18n/reference/useInfiniteQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"useInfiniteQuery")),"."))}f.isMDXComponent=!0}}]);