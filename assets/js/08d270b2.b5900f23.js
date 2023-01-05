"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||y[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={id:"query-retries",title:"\u67e5\u8be2\u91cd\u8bd5 Query Retries"},o=void 0,u={unversionedId:"guides&concepts/query-retries",id:"version-v4/guides&concepts/query-retries",title:"\u67e5\u8be2\u91cd\u8bd5 Query Retries",description:"\u5f53useQuery\u67e5\u8be2\u5931\u8d25\uff08\u67e5\u8be2\u51fd\u6570\u5f15\u53d1\u9519\u8bef\uff09\u65f6\uff0c\u5982\u679c\u8be5\u67e5\u8be2\u7684\u8bf7\u6c42\u672a\u8fbe\u5230\u6700\u5927\u8fde\u7eed\u91cd\u8bd5\u6b21\u6570\uff08\u9ed8\u8ba4 3 \u6b21\uff09\uff0c\u6216\u8005\u672a\u63d0\u4f9b\u51fd\u6570\u6765\u786e\u5b9a\u662f\u5426\u5141\u8bb8\u91cd\u8bd5\uff0c\u90a3\u4e48 React Query \u5c06\u81ea\u52a8\u91cd\u8bd5\u8be5\u67e5\u8be2\u3002",source:"@site/versioned_docs/version-v4/guides&concepts/query-retries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-retries",permalink:"/react-query-web-i18n/guides&concepts/query-retries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v4/guides&concepts/query-retries.md",tags:[],version:"v4",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"query-retries",title:"\u67e5\u8be2\u91cd\u8bd5 Query Retries"},sidebar:"zhCN",previous:{title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 Disabling/Pausing Queries",permalink:"/react-query-web-i18n/guides&concepts/disabling-queries"},next:{title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2 Paginated Queries",permalink:"/react-query-web-i18n/guides&concepts/paginated-queries"}},l={},s=[{value:"\u91cd\u8bd5\u5ef6\u8fdf",id:"\u91cd\u8bd5\u5ef6\u8fdf",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u67e5\u8be2\u5931\u8d25\uff08\u67e5\u8be2\u51fd\u6570\u5f15\u53d1\u9519\u8bef\uff09\u65f6\uff0c\u5982\u679c\u8be5\u67e5\u8be2\u7684\u8bf7\u6c42\u672a\u8fbe\u5230\u6700\u5927\u8fde\u7eed\u91cd\u8bd5\u6b21\u6570\uff08\u9ed8\u8ba4 3 \u6b21\uff09\uff0c\u6216\u8005\u672a\u63d0\u4f9b\u51fd\u6570\u6765\u786e\u5b9a\u662f\u5426\u5141\u8bb8\u91cd\u8bd5\uff0c\u90a3\u4e48 React Query \u5c06\u81ea\u52a8\u91cd\u8bd5\u8be5\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5168\u5c40\u7ea7\u522b\u6216\u8005\u5355\u4e2a\u67e5\u8be2\u7ea7\u522b\u4e0a\u914d\u7f6e\u91cd\u8bd5\u903b\u8f91\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"retry = false"),"\u5c06\u7981\u7528\u91cd\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"retry = 6"),"\u8be5\u51fd\u6570\u629b\u51fa\u6700\u7ec8\u9519\u8bef\u524d\uff0c\u5c06\u91cd\u8bd5 6 \u6b21"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"retry = true"),"\u5c06\u65e0\u9650\u6b21\u91cd\u8bd5\u5931\u8d25\u7684\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"retry =\uff08failureCount\uff0cerror\uff09=> ..."),"\u5141\u8bb8\u57fa\u4e8e\u8bf7\u6c42\u5931\u8d25\u7684\u539f\u56e0\u8fdb\u884c\u81ea\u5b9a\u4e49\u903b\u8f91")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useQuery } from "@tanstack/react-query";\n\n// \u5bf9\u7279\u5b9a\u7684\u4e00\u4e2a\u67e5\u8be2\u8bbe\u7f6e\u56fa\u5b9a\u7684\u91cd\u8bd5\u6b21\u6570\nconst result = useQuery(["todos", 1], fetchTodoListPage, {\n  retry: 10, // \u5728\u663e\u793a\u9519\u8bef\u4e4b\u524d\uff0c\u5c06\u91cd\u8bd510\u6b21\n});\n')),(0,i.kt)("h2",{id:"\u91cd\u8bd5\u5ef6\u8fdf"},"\u91cd\u8bd5\u5ef6\u8fdf"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cReact Query \u4e0d\u4f1a\u5728\u8bf7\u6c42\u5931\u8d25\u540e\u7acb\u5373\u91cd\u8bd5\u3002\u6309\u7167\u6807\u51c6\uff0c\u540e\u9000\u5ef6\u8fdf\u5c06\u9010\u6e10\u5e94\u7528\u4e8e\u6bcf\u6b21\u91cd\u8bd5\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"retryDelay"),"\u8bbe\u7f6e\u4e3a\u4ee5\u4e8c\u7684\u500d\u6570\u9012\u589e\uff08\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"1000ms"),"\u5f00\u59cb\uff09\uff0c\u4f46\u4e0d\u8d85\u8fc7 30 \u79d2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u4e3a\u6240\u6709\u67e5\u8be2\u914d\u7f6e\nimport {\n  QueryCache,\n  QueryClient,\n  QueryClientProvider,\n} from "@tanstack/react-query";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),\n    },\n  },\n});\n\nfunction App() {\n  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;\n}\n')),(0,i.kt)("p",null,"\u5c3d\u7ba1\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\uff0c\u4f46\u662f\u663e\u7136\u4f60\u53ef\u4ee5\u5728 Provider \u548c\u5355\u4e2a\u67e5\u8be2\u9009\u9879\u4e2d\u8986\u76d6",(0,i.kt)("inlineCode",{parentName:"p"},"retryDelay"),"\u51fd\u6570/\u6574\u6570\u3002\n\u5982\u679c\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u6574\u6570\u800c\u4e0d\u662f\u51fd\u6570\uff0c\u5219\u91cd\u8bd5\u4e4b\u95f4\u7684\u5ef6\u8fdf\u5c06\u59cb\u7ec8\u662f\u76f8\u540c\u7684\u65f6\u95f4\u91cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = useQuery("todos", fetchTodoList, {\n  retryDelay: 1000, // \u65e0\u8bba\u91cd\u8bd5\u591a\u5c11\u6b21\uff0c\u90fd\u4f1a\u59cb\u7ec8\u7b49\u5f851000\u6beb\u79d2\u7136\u540e\u91cd\u8bd5\n});\n')))}p.isMDXComponent=!0}}]);