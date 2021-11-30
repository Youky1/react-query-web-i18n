"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"updates-from-mutation-responses",title:"\u54cd\u5e94\u66f4\u65b0\u7684\u6570\u636e updates-from-mutation-responses"},s=void 0,c={unversionedId:"guides&concepts/updates-from-mutation-responses",id:"guides&concepts/updates-from-mutation-responses",isDocsHomePage:!1,title:"\u54cd\u5e94\u66f4\u65b0\u7684\u6570\u636e updates-from-mutation-responses",description:"When dealing with mutations that update objects on the server, \u65b0\u5bf9\u8c61\u901a\u5e38\u4f1a\u5728\u66f4\u65b0\u7684\u54cd\u5e94\u4e2d\u81ea\u52a8\u8fd4\u56de\u3002",source:"@site/docs/guides&concepts/updates-from-mutation-responses.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/updates-from-mutation-responses",permalink:"/react-query-web-i18n/guides&concepts/updates-from-mutation-responses",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/updates-from-mutation-responses.md",version:"current",lastUpdatedAt:1638282073,formattedLastUpdatedAt:"11/30/2021",frontMatter:{id:"updates-from-mutation-responses",title:"\u54cd\u5e94\u66f4\u65b0\u7684\u6570\u636e updates-from-mutation-responses"},sidebar:"zhCN",previous:{title:"\u4fee\u6539\u5bfc\u81f4\u7684\u5931\u6548 invalidation-from-mutations",permalink:"/react-query-web-i18n/guides&concepts/invalidation-from-mutations"},next:{title:"\u4e50\u89c2\u66f4\u65b0 optimistic-updates",permalink:"/react-query-web-i18n/guides&concepts/optimistic-updates"}},p=[],d={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When dealing with mutations that ",(0,a.kt)("strong",{parentName:"p"},"update")," objects on the server, \u65b0\u5bf9\u8c61\u901a\u5e38\u4f1a\u5728\u66f4\u65b0\u7684\u54cd\u5e94\u4e2d\u81ea\u52a8\u8fd4\u56de\u3002\n\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u66f4\u65b0\u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientsetquerydata"},"Query Client \u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"setQueryData")," \u65b9\u6cd5"),"\u7acb\u5373\u7528\u65b0\u6570\u636e\u66f4\u65b0\u73b0\u6709\u7684\u67e5\u8be2\u2014\u2014\u800c\u4e0d\u662f\u91cd\u65b0\u83b7\u53d6\u8be5\u9879\u7684\u4efb\u4f55\u67e5\u8be2\uff0c\u6d6a\u8d39\u5bf9\u5df2\u6709\u6570\u636e\u7684\u7f51\u7edc\u8c03\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const queryClient = useQueryClient();\n\nconst mutation = useMutation(editTodo, {\n  onSuccess: (data) => {\n    queryClient.setQueryData(["todo", { id: 5 }], data);\n  },\n});\n\nmutation.mutate({\n  id: 5,\n  name: "Do the laundry",\n});\n\n// \u4e0b\u9762\u7684\u67e5\u8be2\u5c06\u4f7f\u7528\u6210\u529f\u7684\u66f4\u65b0\u54cd\u5e94\u6765\u8fdb\u884c\u66f4\u65b0\nconst { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoByID);\n')),(0,a.kt)("p",null,"\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," \u903b\u8f91\u7ed1\u5b9a\u5230\u53ef\u91cd\u7528\u7684\u66f4\u65b0\u4e2d\u3002\n\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const useMutateTodo = () => {\n  const queryClient = useQueryClient();\n\n  return useMutation(editTodo, {\n    // \u6ce8\u610f\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f`mutate`\u51fd\u6570\u63a5\u6536\u7684\u53d8\u91cf\u5bf9\u8c61\n    onSuccess: (data, variables) => {\n      queryClient.setQueryData(["todo", { id: variables.id }], data);\n    },\n  });\n};\n')))}l.isMDXComponent=!0}}]);