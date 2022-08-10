"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"filters",title:"\u8fc7\u6ee4\u5668 filters"},l=void 0,o={unversionedId:"guides&concepts/filters",id:"version-v3/guides&concepts/filters",title:"\u8fc7\u6ee4\u5668 filters",description:"React Query \u4e2d\u7684\u67d0\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7 QueryFilters \u6216\u8005 MutationFilters \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-v3/guides&concepts/filters.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/filters",permalink:"/react-query-web-i18n/guides&concepts/filters",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/filters.md",tags:[],version:"v3",lastUpdatedAt:1660144558,formattedLastUpdatedAt:"8/10/2022",frontMatter:{id:"filters",title:"\u8fc7\u6ee4\u5668 filters"},sidebar:"zhCN",previous:{title:"\u6eda\u52a8\u6062\u590d scroll-restoration",permalink:"/react-query-web-i18n/guides&concepts/scroll-restoration"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",permalink:"/react-query-web-i18n/guides&concepts/ssr"}},u={},p=[{value:"\u67e5\u8be2\u8fc7\u6ee4\u5668",id:"\u67e5\u8be2\u8fc7\u6ee4\u5668",level:2},{value:"\u4fee\u6539\u8fc7\u6ee4\u5668",id:"\u4fee\u6539\u8fc7\u6ee4\u5668",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u4e2d\u7684\u67d0\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7 ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryFilters")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"MutationFilters")," \u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"\u67e5\u8be2\u8fc7\u6ee4\u5668"},"\u67e5\u8be2\u8fc7\u6ee4\u5668"),(0,a.kt)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u7684\u8fc7\u6ee4\u5668\u662f\u5177\u6709\u7279\u5b9a\u6761\u4ef6\u7684\u5bf9\u8c61\uff0c\u53ef\u5c06\u67e5\u8be2\u4e0e\u4ee5\u4e0b\u5404\u9879\u8fdb\u884c\u5339\u914d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u53d6\u6d88\u6240\u6709\u67e5\u8be2\nawait queryClient.cancelQueries();\n\n// \u5220\u9664\u6240\u6709\u4ee5`posts`\u5f00\u5934\u7684\u952e\u503c\u7684\u975e\u6d3b\u52a8\u67e5\u8be2\nqueryClient.removeQueries("posts", { inactive: true });\n\n// \u91cd\u65b0\u83b7\u53d6\u6240\u6709\u6d3b\u52a8\u67e5\u8be2\nawait queryClient.refetchQueries({ active: true });\n\n// \u91cd\u65b0\u83b7\u53d6\u952e\u4e2d\u4ee5`posts`\u5f00\u5934\u7684\u6240\u6709\u6d3b\u52a8\u67e5\u8be2\nawait queryClient.refetchQueries("posts", { active: true });\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u8fc7\u6ee4\u5668\u5bf9\u8c61\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exact?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e0d\u60f3\u5bf9\u952e\u503c\u505a\u6a21\u7cca\u67e5\u8be2\uff08search queries inclusively\uff09\uff0c\u5219\u53ef\u4ee5\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"li"},"exact: true")," \u9009\u9879\uff0c\u9009\u9879\u6765\u8fd4\u56de\u4e14\u53ea\u8fd4\u56de\u5b8c\u6574\u5339\u914d\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"active?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u6d3b\u52a8\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u975e\u6d3b\u52a8\u67e5\u8be2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inactive?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u975e\u6d3b\u52a8\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u6d3b\u52a8\u67e5\u8be2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stale?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u8fc7\u65f6\uff08staled\uff09\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u6ca1\u8fc7\u65f6\uff08fresh\uff09\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetching?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u5f53\u524d\u6b63\u5728\u83b7\u53d6\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u5f53\u524d\u672a\u5728\u83b7\u53d6\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate?: (query: Query) => boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7f13\u5b58\u4e2d\u7684\u6bcf\u4e2a\u67e5\u8be2\uff0c\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u4e14\u5bf9\u4e8e\u5339\u914d\uff08found\uff09\u7684\u67e5\u8be2\uff0c\u8be5\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"true")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6b64\u5c5e\u6027\u4ee5\u5b9a\u4e49\u8981\u5339\u914d\u7684\u67e5\u8be2\u952e\u503c")))),(0,a.kt)("h2",{id:"\u4fee\u6539\u8fc7\u6ee4\u5668"},"\u4fee\u6539\u8fc7\u6ee4\u5668"),(0,a.kt)("p",null,"\u4fee\u6539\u7684\u8fc7\u6ee4\u5668\u662f\u5177\u6709\u7279\u5b9a\u6761\u4ef6\u7684\u5bf9\u8c61\uff0c\u53ef\u5c06\u4fee\u6539\u4e0e\u4ee5\u4e0b\u6761\u4ef6\u8fdb\u884c\u5339\u914d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u83b7\u53d6\u6240\u6709\u6b63\u5728\u83b7\u53d6\u7684\u4fee\u6539\u7684\u6570\u91cf\nawait queryClient.isMutating();\n// \u901a\u8fc7 mutationKey \u8fc7\u6ee4\nawait queryClient.isMutating({ mutationKey: "post" });\n// \u4f7f\u7528\u8c13\u8bcd\u51fd\u6570\u8fc7\u6ee4\nawait queryClient.isMutating({\n  predicate: (mutation) => mutation.options.variables?.id === 1,\n});\n')),(0,a.kt)("p",null,"\u4fee\u6539\u8fc7\u6ee4\u5668\u5bf9\u8c61\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exact?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e0d\u60f3\u5bf9\u952e\u503c\u505a\u6a21\u7cca\u67e5\u8be2\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"exact: true")," \u9009\u9879\u6765\u8fd4\u56de\u4e14\u53ea\u8fd4\u56de\u5b8c\u6574\u5339\u914d\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetching?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u5f53\u524d\u6b63\u5728\u83b7\u53d6\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u65f6\uff0c\u5b83\u5c06\u5339\u914d\u5f53\u524d\u672a\u5728\u83b7\u53d6\u7684"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate?: (mutation: Mutation) => boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7f13\u5b58\u4e2d\u7684\u6bcf\u4e2a\u4fee\u6539\uff0c\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u4e14\u5bf9\u4e8e\u5339\u914d\uff08found\uff09\u7684\u4fee\u6539\uff0c\u8be5\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"true")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mutationKey?: MutationKey"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6b64\u5c5e\u6027\u4ee5\u5b9a\u4e49\u8981\u5339\u914d\u7684\u4fee\u6539\u952e\u503c")))))}c.isMDXComponent=!0}}]);