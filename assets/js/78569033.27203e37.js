"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"query-functions",title:"\u67e5\u8be2\u51fd\u6570 Query Functions"},u=void 0,i={unversionedId:"guides&concepts/query-functions",id:"guides&concepts/query-functions",title:"\u67e5\u8be2\u51fd\u6570 Query Functions",description:"\u67e5\u8be2\u51fd\u6570\u5b9e\u9645\u4e0a\u53ef\u4ee5\u662f\u4efb\u4f55\u4e00\u4e2a\u8fd4\u56de Promise \u7684\u51fd\u6570\u3002\u8fd4\u56de\u7684 Promise \u5e94\u8be5\u89e3\u51b3\u6570\u636e\u6216\u629b\u51fa\u9519\u8bef\u3002",source:"@site/react/guides&concepts/query-functions.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-functions",permalink:"/react-query-web-i18n/react/guides&concepts/query-functions",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/guides&concepts/query-functions.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"query-functions",title:"\u67e5\u8be2\u51fd\u6570 Query Functions"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u7684\u952e\u503c Query Keys",permalink:"/react-query-web-i18n/react/guides&concepts/query-keys"},next:{title:"\u7f51\u7edc\u6a21\u5f0f Network Mode",permalink:"/react-query-web-i18n/react/guides&concepts/network-mode"}},c={},s=[{value:"\u629b\u51fa\u548c\u5904\u7406\u9519\u8bef",id:"\u629b\u51fa\u548c\u5904\u7406\u9519\u8bef",level:2},{value:"\u4e0e<code>fetch</code>\u548c\u5176\u4ed6\u9ed8\u8ba4\u4e0d\u629b\u51fa\u9519\u8bef\u7684\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528",id:"\u4e0efetch\u548c\u5176\u4ed6\u9ed8\u8ba4\u4e0d\u629b\u51fa\u9519\u8bef\u7684\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528",level:2},{value:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570",id:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570",level:2},{value:"<code>QueryFunctionContext</code>\u53ca\u5176\u7c7b\u578b\u5b9a\u4e49",id:"queryfunctioncontext\u53ca\u5176\u7c7b\u578b\u5b9a\u4e49",level:3}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u67e5\u8be2\u51fd\u6570\u5b9e\u9645\u4e0a\u53ef\u4ee5\u662f",(0,o.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4e00\u4e2a\u8fd4\u56de Promise \u7684\u51fd\u6570"),"\u3002\u8fd4\u56de\u7684 Promise \u5e94\u8be5",(0,o.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u6570\u636e"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u629b\u51fa\u9519\u8bef"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6240\u6709\u90fd\u662f\u6709\u6548\u7684\u67e5\u8be2\u51fd\u6570\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'useQuery({ queryKey: ["todos"], queryFn: fetchAllTodos });\nuseQuery({ queryKey: ["todos", todoId], queryFn: () => fetchTodoById(todoId) });\nuseQuery({\n  queryKey: ["todos", todoId],\n  queryFn: async () => {\n    const data = await fetchTodoById(todoId);\n    return data;\n  },\n});\nuseQuery({\n  queryKey: ["todos", todoId],\n  queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),\n});\n')),(0,o.kt)("h2",{id:"\u629b\u51fa\u548c\u5904\u7406\u9519\u8bef"},"\u629b\u51fa\u548c\u5904\u7406\u9519\u8bef"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4f7f React Query \u786e\u5b9a\u67e5\u8be2\u9519\u8bef\uff0c\u67e5\u8be2\u51fd\u6570\u7684\u9519\u8bef",(0,o.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u629b\u51fa"),"\u6216\u8fd4\u56de",(0,o.kt)("strong",{parentName:"p"},"rejected Promise"),"\u3002\u67e5\u8be2\u51fd\u6570\u4e2d\u5f15\u53d1\u7684\u4efb\u4f55\u9519\u8bef\u90fd\u5c06\u88ab\u6301\u4e45\u5316\u5728\u67e5\u8be2\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"error"),"\u72b6\u6001\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { error } = useQuery({\n  queryKey: ["todos", todoId],\n  queryFn: async () => {\n    if (somethingGoesWrong) {\n      throw new Error("Oh no!");\n    }\n    if (somethingElseGoesWrong) {\n      return Promise.reject(new Error("Oh no!"));\n    }\n\n    return data;\n  },\n});\n')),(0,o.kt)("h2",{id:"\u4e0efetch\u548c\u5176\u4ed6\u9ed8\u8ba4\u4e0d\u629b\u51fa\u9519\u8bef\u7684\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528"},"\u4e0e",(0,o.kt)("inlineCode",{parentName:"h2"},"fetch"),"\u548c\u5176\u4ed6\u9ed8\u8ba4\u4e0d\u629b\u51fa\u9519\u8bef\u7684\u5ba2\u6237\u7aef\u5e93\u4e00\u8d77\u4f7f\u7528"),(0,o.kt)("p",null,"\u867d\u7136\u5927\u591a\u6570\u5e93\uff08\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"axios"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-request"),"\uff09\u4f1a\u9488\u5bf9\u4e0d\u6210\u529f\u7684 HTTP \u8bf7\u6c42\u81ea\u52a8\u629b\u51fa\u9519\u8bef\uff0c\u4f46\u67d0\u4e9b\u5e93\uff08\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"\uff09\u9ed8\u8ba4\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u81ea\u5df1",(0,o.kt)("inlineCode",{parentName:"p"},"throw"),"\u5b83\u4eec\u3002\u8fd9\u662f\u4f7f\u7528\u6d41\u884c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," API \u7684\u4e00\u79cd\u7b80\u5355\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'useQuery({\n  queryKey: ["todos", todoId],\n  queryFn: async () => {\n    const response = await fetch("/todos/" + todoId);\n    if (!response.ok) {\n      throw new Error("Network response was not ok");\n    }\n    return response.json();\n  },\n});\n')),(0,o.kt)("h2",{id:"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570"},"\u67e5\u8be2\u51fd\u6570\u7684\u53c2\u6570"),(0,o.kt)("p",null,"\u67e5\u8be2\u952e\u503c\u4e0d\u4ec5\u7528\u4e8e\u552f\u4e00\u5730\u6807\u8bc6\u8981\u83b7\u53d6\u7684\u6570\u636e\uff0c\u800c\u4e14\u8fd8\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f20\u9012\u5230\u67e5\u8be2\u51fd\u6570\u4e2d\uff0c\u867d\u7136\u5e76\u975e\u603b\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u8fd9\u4f7f\u5f97\u5728\u9700\u8981\u65f6\u63d0\u53d6\u67e5\u8be2\u51fd\u6570\u6210\u4e3a\u53ef\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function Todos({ status, page }) {\n  const result = useQuery({\n    queryKey: ["todos", { status, page }],\n    queryFn: fetchTodoList,\n  });\n}\n\n// \u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u8bbf\u95ee\u952e\u503c\uff0c\u72b6\u6001\u548c\u9875\u9762\u53d8\u91cf\uff01\nfunction fetchTodoList({ queryKey }) {\n  const [_key, { status, page }] = queryKey;\n  return new Promise();\n}\n')),(0,o.kt)("h3",{id:"queryfunctioncontext\u53ca\u5176\u7c7b\u578b\u5b9a\u4e49"},(0,o.kt)("inlineCode",{parentName:"h3"},"QueryFunctionContext"),"\u53ca\u5176\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"QueryFunctionContext")," \u4f1a\u5f53\u4f5c\u53c2\u6570\u4f20\u7ed9\u6bcf\u4e00\u4e2a\u67e5\u8be2\u51fd\u6570\uff0c\u5176\u5305\u542b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryKey: QueryKey"),": ",(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/query-keys"},"\u67e5\u770b\u67e5\u8be2\u952e\u503c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageParam: unknown | undefined"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ea\u4f1a\u5728",(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/infinite-queries"},"\u65e0\u9650\u67e5\u8be2"),"\u573a\u666f\u4f20\u9012"),(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u67e5\u8be2\u5f53\u524d\u9875\u6240\u4f7f\u7528\u7684\u53c2\u6570"))),(0,o.kt)("li",{parentName:"ul"},"signal?: AbortSignal",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"React Query \u63d0\u4f9b\u7684",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"},"AbortSignal"),"\u5b9e\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u6765\u505a",(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/query-cancellation"},"\u67e5\u8be2\u53d6\u6d88")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"meta?: Record<string, unknown>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u9009\u5b57\u6bb5\uff0c\u53ef\u4ee5\u586b\u5199\u4efb\u610f\u5173\u4e8e\u8be5\u67e5\u8be2\u7684\u989d\u5916\u4fe1\u606f")))))}p.isMDXComponent=!0}}]);