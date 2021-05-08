(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,y=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(y,o(o({ref:t},l),{},{components:r})):a.a.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(143)),c={id:"query-retries",title:"\u67e5\u8be2\u91cd\u8bd5"},o={unversionedId:"guides&concepts/query-retries",id:"guides&concepts/query-retries",isDocsHomePage:!1,title:"\u67e5\u8be2\u91cd\u8bd5",description:"\u5f53useQuery\u67e5\u8be2\u5931\u8d25\uff08\u67e5\u8be2\u51fd\u6570\u5f15\u53d1\u9519\u8bef\uff09\u65f6\uff0c\u5982\u679c\u8be5\u67e5\u8be2\u7684\u8bf7\u6c42\u672a\u8fbe\u5230\u6700\u5927\u8fde\u7eed\u91cd\u8bd5\u6b21\u6570\uff08\u9ed8\u8ba4\u4e3a 3\uff09\uff0c\u6216\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u786e\u5b9a\u662f\u5426\u5141\u8bb8\u91cd\u8bd5\uff0c\u5219 React Query \u5c06\u81ea\u52a8\u91cd\u8bd5\u8be5\u67e5\u8be2\u3002",source:"@site/docs/guides&concepts/query-retries.md",slug:"/guides&concepts/query-retries",permalink:"/react-query-web-i18n/guides&concepts/query-retries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-retries.md",version:"current",lastUpdatedAt:1620447725,formattedLastUpdatedAt:"5/8/2021",sidebar:"zhCN",previous:{title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/disabling-queries"},next:{title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/paginated-queries"}},u=[{value:"\u91cd\u8bd5\u5ef6\u8fdf",id:"\u91cd\u8bd5\u5ef6\u8fdf",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5f53",Object(i.b)("inlineCode",{parentName:"p"},"useQuery"),"\u67e5\u8be2\u5931\u8d25\uff08\u67e5\u8be2\u51fd\u6570\u5f15\u53d1\u9519\u8bef\uff09\u65f6\uff0c\u5982\u679c\u8be5\u67e5\u8be2\u7684\u8bf7\u6c42\u672a\u8fbe\u5230\u6700\u5927\u8fde\u7eed\u91cd\u8bd5\u6b21\u6570\uff08\u9ed8\u8ba4\u4e3a 3\uff09\uff0c\u6216\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u786e\u5b9a\u662f\u5426\u5141\u8bb8\u91cd\u8bd5\uff0c\u5219 React Query \u5c06\u81ea\u52a8\u91cd\u8bd5\u8be5\u67e5\u8be2\u3002"),Object(i.b)("p",null,"\u60a8\u53ef\u4ee5\u5728\u5168\u5c40\u7ea7\u522b\u548c\u5355\u4e2a\u67e5\u8be2\u7ea7\u522b\u4e0a\u914d\u7f6e\u91cd\u8bd5\u903b\u8f91\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"retry = false"),"\u5c06\u7981\u7528\u91cd\u8bd5"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"retry = 6"),"\u5c06\u91cd\u8bd5\u5931\u8d25\u7684\u6b21\u6570\u8bbe\u7f6e\u4e3a 6 \u6b21\uff0c\u7136\u540e\u663e\u793a\u8be5\u51fd\u6570\u5f15\u53d1\u7684\u6700\u7ec8\u9519\u8bef"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"retry = true"),"\u5c06\u65e0\u9650\u6b21\u91cd\u8bd5\u5931\u8d25\u7684\u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"retry =\uff08failureCount\uff0cerror\uff09=> ..."),"\u5141\u8bb8\u57fa\u4e8e\u8bf7\u6c42\u5931\u8d25\u7684\u539f\u56e0\u8fdb\u884c\u81ea\u5b9a\u4e49\u903b\u8f91")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { useQuery } from 'react-query'\n\n// \u5bf9\u7279\u5b9a\u7684\u4e00\u4e2a\u67e5\u8be2\u8bbe\u7f6e\u56fa\u5b9a\u7684\u91cd\u8bd5\u6b21\u6570\nconst result = useQuery(['todos', 1], fetchTodoListPage, {\n  retry: 10, // \u5728\u663e\u793a\u9519\u8bef\u4e4b\u524d\uff0c\u5c06\u91cd\u8bd510\u6b21\n})\n")),Object(i.b)("h2",{id:"\u91cd\u8bd5\u5ef6\u8fdf"},"\u91cd\u8bd5\u5ef6\u8fdf"),Object(i.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u5931\u8d25\u540e\uff0cReact Query \u4e2d\u7684\u91cd\u8bd5\u4e0d\u4f1a\u7acb\u5373\u53d1\u751f\u3002\u6309\u7167\u6807\u51c6\uff0c\u540e\u9000\u5ef6\u8fdf\u5c06\u9010\u6e10\u5e94\u7528\u4e8e\u6bcf\u6b21\u91cd\u8bd5\u5c1d\u8bd5\u3002"),Object(i.b)("p",null,"\u9ed8\u8ba4\u7684",Object(i.b)("inlineCode",{parentName:"p"},"retryDelay"),"\u8bbe\u7f6e\u4e3a\u4ee5\u4e8c\u7684\u500d\u6570\u9012\u589e\uff08\u4ece",Object(i.b)("inlineCode",{parentName:"p"},"1000ms"),"\u5f00\u59cb\uff09\uff0c\u4f46\u4e0d\u8d85\u8fc7 30 \u79d2\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// \u4e3a\u6240\u6709\u67e5\u8be2\u914d\u7f6e\nimport { QueryCache, QueryClient, QueryClientProvider } from 'react-query'\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),\n    },\n  },\n})\n\nfunction App() {\n  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>\n}\n")),Object(i.b)("p",null,"\u5c3d\u7ba1\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\uff0c\u4f46\u662f\u663e\u7136\u53ef\u4ee5\u5728 Provider \u548c\u5355\u4e2a\u67e5\u8be2\u9009\u9879\u4e2d\u8986\u76d6",Object(i.b)("inlineCode",{parentName:"p"},"retryDelay"),"\u51fd\u6570/\u6574\u6570\u3002\n\u5982\u679c\u8bbe\u7f6e\u4e3a\u6574\u6570\u800c\u4e0d\u662f\u51fd\u6570\uff0c\u5219\u5ef6\u8fdf\u5c06\u59cb\u7ec8\u662f\u76f8\u540c\u7684\u65f6\u95f4\u91cf\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const result = useQuery('todos', fetchTodoList, {\n  retryDelay: 1000, // \u65e0\u8bba\u91cd\u8bd5\u591a\u5c11\u6b21\uff0c\u90fd\u4f1a\u59cb\u7ec8\u7b49\u5f851000\u6beb\u79d2\u91cd\u8bd5\n})\n")))}p.isMDXComponent=!0}}]);