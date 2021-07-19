(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3782],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},684:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=["components"],i={id:"graphql",title:"GraphQL"},p=void 0,u={unversionedId:"getstarted/graphql",id:"getstarted/graphql",isDocsHomePage:!1,title:"GraphQL",description:"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01",source:"@site/docs/getstarted/graphql.md",sourceDirName:"getstarted",slug:"/getstarted/graphql",permalink:"/react-query-web-i18n/getstarted/graphql",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/getstarted/graphql.md",version:"current",lastUpdatedAt:1626686688,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"graphql",title:"GraphQL"},sidebar:"zhCN",previous:{title:"TypeScript",permalink:"/react-query-web-i18n/getstarted/typescript"},next:{title:"React Native",permalink:"/react-query-web-i18n/getstarted/react-native"}},l=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],s={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7531\u4e8e React Query \u7684\u83b7\u53d6\u673a\u5236\u4e0d\u53ef\u77e5\u5730\u5efa\u7acb\u5728 Promises \u4e0a\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 React Query \u4e0e\u5b57\u9762\u4e0a\u7684\u4efb\u4f55\u5f02\u6b65\u6570\u636e\u83b7\u53d6\u5ba2\u6237\u7aef\uff08\u5305\u62ec GraphQL\uff09\u4e00\u8d77\u4f7f\u7528\uff01"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u8bb0\u4f4f\uff0cReact Query \u4e0d\u652f\u6301\u5f52\u4e00\u5316\u7f13\u5b58\u3002 \u5c3d\u7ba1\u7edd\u5927\u591a\u6570\u7528\u6237\u5b9e\u9645\u4e0a\u5e76\u4e0d\u9700\u8981\u5f52\u4e00\u5316\u7f13\u5b58\uff0c\u751a\u81f3\u6ca1\u6709\u50cf\u4ed6\u4eec\u8ba4\u4e3a\u7684\u90a3\u6837\u53d7\u76ca\uff0c\u4f46\u662f\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\u53ef\u80fd\u9700\u8981\u8fd9\u6837\u505a\uff0c\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5148\u4e0e\u6211\u4eec\u8054\u7cfb\u3002 \u4ee5\u786e\u4fdd\u5b83\u662f\u4f60\u6240\u9700\u8981\u7684\u771f\u6b63\u7684\u4e1c\u897f\uff01")),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/examples/basic-graphql-request"},"basic-graphql-request")," (\u201c\u57fa\u672c\u201d\u793a\u4f8b\uff0c\u4f46\u4f7f\u7528\u4e86 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-request"},(0,o.kt)("inlineCode",{parentName:"a"},"graphql-request")),")")))}f.isMDXComponent=!0}}]);