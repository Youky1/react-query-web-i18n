(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9448],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5841:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={id:"useIsFetching",title:"useIsFetching"},u=void 0,s={unversionedId:"reference/useIsFetching",id:"reference/useIsFetching",isDocsHomePage:!1,title:"useIsFetching",description:"useIsFetching is an optional hook that returns the number of the queries that your application is loading or fetching in the background (useful for app-wide loading indicators).",source:"@site/docs/reference/useIsFetching.md",sourceDirName:"reference",slug:"/reference/useIsFetching",permalink:"/react-query-web-i18n/reference/useIsFetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/useIsFetching.md",version:"current",lastUpdatedAt:1626686688,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"useIsFetching",title:"useIsFetching"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useIsFetching")," is an optional hook that returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," of the queries that your application is loading or fetching in the background (useful for app-wide loading indicators)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useIsFetching } from 'react-query'\n// How many queries are fetching?\nconst isFetching = useIsFetching()\n// How many queries matching the posts prefix are fetching?\nconst isFetchingPosts = useIsFetching(['posts'])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",(0,o.kt)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/guides&concepts/filters"},"Query Filters"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isFetching: number"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Will be the ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," of the queries that your application is currently loading or fetching in the background.")))))}f.isMDXComponent=!0}}]);