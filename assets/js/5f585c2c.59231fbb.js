"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[4939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching",tags:["\u7ffb\u8bd1\u5b8c\u6210"]},c=void 0,o={unversionedId:"guides&concepts/prefetching",id:"guides&concepts/prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching",description:"\u5982\u679c\u4f60\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01",source:"@site/docs/guides&concepts/prefetching.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/prefetching",permalink:"/react-query-web-i18n/next/guides&concepts/prefetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/prefetching.md",tags:[{label:"\u7ffb\u8bd1\u5b8c\u6210",permalink:"/react-query-web-i18n/next/tags/\u7ffb\u8bd1\u5b8c\u6210"}],version:"current",lastUpdatedAt:1662383304,formattedLastUpdatedAt:"9/5/2022",frontMatter:{id:"prefetching",title:"\u9884\u53d6\u6570\u636e Prefetching",tags:["\u7ffb\u8bd1\u5b8c\u6210"]},sidebar:"zhCN",previous:{title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e Initial Query Data",permalink:"/react-query-web-i18n/next/guides&concepts/initial-query-data"},next:{title:"\u4fee\u6539 Mutations",permalink:"/react-query-web-i18n/next/guides&concepts/mutations"}},l={},p=[{value:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8db3\u591f\u5e78\u8fd0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5bf9\u7528\u6237\u5c06\u505a\u7684\u4e8b\u60c5\u6709\u8db3\u591f\u7684\u4e86\u89e3\uff0c\u4ee5\u4fbf\u80fd\u591f\u5728\u9700\u8981\u4e4b\u524d\u9884\u53d6\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\uff01\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"prefetchQuery"),"\u65b9\u6cd5\u9884\u53d6\u8981\u653e\u5165\u7f13\u5b58\u7684\u67e5\u8be2\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const prefetchTodos = async () => {\n  // \u8be5\u67e5\u8be2\u7684\u7ed3\u679c\u5c06\u50cf\u666e\u901a\u67e5\u8be2\u4e00\u6837\u88ab\u7f13\u5b58\n  await queryClient.prefetchQuery(["todos"], fetchTodos);\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u67e5\u8be2\u7684\u6570\u636e\u5df2\u7ecf\u5728\u7f13\u5b58\u4e2d\u5e76\u4e14",(0,a.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u5931\u6548"),"\uff0c\u5219\u5c06\u4e0d\u4f1a\u83b7\u53d6\u8be5\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"staleTime"),"\u88ab\u4f20\u9012\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"prefetchQuery('todos', fn, {staleTime\uff1a5000})"),"\u5e76\u4e14\u6570\u636e\u65e9\u4e8e\u6307\u5b9a\u7684 staleTime\uff0c\u5219\u67e5\u8be2\u5c06\u53bb\u5c1d\u8bd5\u83b7\u53d6\u65b0\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9884\u53d6\u7684\u67e5\u8be2\u6ca1\u6709\u51fa\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery"),"\u5b9e\u4f8b\uff0c\u5219\u5c06\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"cacheTime"),"\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\u88ab\u5220\u9664\u5e76\u88ab\u5783\u573e\u56de\u6536")),(0,a.kt)("h2",{id:"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"},"\u624b\u52a8\u542f\u52a8\u4e00\u4e2a\u67e5\u8be2"),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u540c\u6b65\u53ef\u7528\u7684\u67e5\u8be2\u6570\u636e\uff0c\u5219\u65e0\u9700\u9884\u53d6\u3002\n\u4f60\u53ef\u4ee5\u53ea\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydata"},"Query Client \u7684",(0,a.kt)("inlineCode",{parentName:"a"},"setQueryData"),"\u65b9\u6cd5"),"\u76f4\u63a5\u6309\u952e\u503c\u6dfb\u52a0\u6216\u66f4\u65b0\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'queryClient.setQueryData(["todos"], todos);\n')))}s.isMDXComponent=!0}}]);