"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 query-cancellation"},l=void 0,i={unversionedId:"guides&concepts/query-cancellation",id:"version-v3/guides&concepts/query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 query-cancellation",description:"\u4ee5\u524d\u7684\u65b9\u6cd5\u9700\u8981\u4e00\u4e2acancel\u51fd\u6570",source:"@site/versioned_docs/version-v3/guides&concepts/query-cancellation.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-cancellation",permalink:"/react-query-web-i18n/v3/guides&concepts/query-cancellation",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/query-cancellation.md",tags:[],version:"v3",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88 query-cancellation"},sidebar:"zhCN",previous:{title:"\u4e50\u89c2\u66f4\u65b0 optimistic-updates",permalink:"/react-query-web-i18n/v3/guides&concepts/optimistic-updates"},next:{title:"\u6eda\u52a8\u6062\u590d scroll-restoration",permalink:"/react-query-web-i18n/v3/guides&concepts/scroll-restoration"}},s={},c=[{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:2},{value:"\u4f7f\u7528 <code>fetch</code>",id:"\u4f7f\u7528-fetch",level:2},{value:"\u4f7f\u7528 <code>axios</code>",id:"\u4f7f\u7528-axios",level:2},{value:"\u4f7f\u7528 <code>axios</code> v0.22.0+",id:"\u4f7f\u7528-axios-v0220",level:3},{value:"\u4f7f\u7528 <code>axios</code> (\u7248\u672c\u4f4e\u4e8e <code>v0.22.0</code>)",id:"\u4f7f\u7528-axios-\u7248\u672c\u4f4e\u4e8e-v0220",level:3},{value:"\u4f7f\u7528 <code>XMLHttpRequest</code>",id:"\u4f7f\u7528-xmlhttprequest",level:2},{value:"\u4f7f\u7528 <code>graphql-request</code>",id:"\u4f7f\u7528-graphql-request",level:2},{value:"\u4f7f\u7528 <code>graphql-request</code> v4.0.0+",id:"\u4f7f\u7528-graphql-request-v400",level:3},{value:"\u4f7f\u7528 <code>graphql-request</code> (\u7248\u672c\u4f4e\u4e8e <code>v4.0.0</code>)",id:"\u4f7f\u7528-graphql-request-\u7248\u672c\u4f4e\u4e8e-v400",level:3},{value:"\u624b\u52a8\u53d6\u6d88",id:"\u624b\u52a8\u53d6\u6d88",level:2},{value:"\u65e7\u7684 <code>cancel</code> \u51fd\u6570",id:"\u65e7\u7684-cancel-\u51fd\u6570",level:2},{value:"\u4f7f\u7528 <code>axios</code>",id:"\u4f7f\u7528-axios-1",level:3},{value:"\u4f7f\u7528 <code>fetch</code>",id:"\u4f7f\u7528-fetch-1",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#%E6%97%A7%E7%9A%84-cancel-%E5%87%BD%E6%95%B0"},"\u4ee5\u524d\u7684\u65b9\u6cd5\u9700\u8981\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"a"},"cancel"),"\u51fd\u6570")),(0,a.kt)("p",null,"React Query \u4e3a\u6bcf\u4e2a\u67e5\u8be2\u51fd\u6570\u90fd\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/AbortSignal"},(0,a.kt)("inlineCode",{parentName:"a"},"AbortSignal"),"\u7684\u5b9e\u4f8b"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u4e14\u4ec5\u5f53\u4f60\u7684\u8fd0\u884c\u73af\u5883\u652f\u6301\u8be5\u5bf9\u8c61"),"\u3002\n\u5f53\u4e00\u4e2a\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u6216\u8005\u4e0d\u6d3b\u8dc3\uff0c\u90a3\u4e48\u8be5\u201c\u4fe1\u53f7\u201d\u5c06\u88ab\u4e2d\u6b62\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u6240\u6709\u7684\u67e5\u8be2\u90fd\u662f\u53ef\u53d6\u6d88\u7684\uff0c\u800c\u4e14\u5982\u679c\u9700\u8981\uff0c\u60a8\u53ef\u4ee5\u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u54cd\u5e94\u53d6\u6d88\u52a8\u4f5c\u3002\n\u6700\u597d\u7684\u662f\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u666e\u901a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," \u8bed\u6cd5\uff0c\u540c\u65f6\u83b7\u5f97\u81ea\u52a8\u53d6\u6d88\u7684\u6240\u6709\u597d\u5904\u3002\n\u6b64\u5916\uff0c\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\u6bd4\u65e7\u7684\u89e3\u51b3\u65b9\u6848\u66f4\u9002\u5408 TypeScript\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/AbortController#browser_compatibility"},"AbortController API \u5728\u5927\u591a\u6570\u8fd0\u884c\u65f6\u73af\u5883\u4e2d\u90fd\u662f\u53ef\u7528\u7684"),"\u3002\u4f46\u662f\u5982\u679c\u8fd0\u884c\u65f6\u73af\u5883\u4e0d\u652f\u6301\u5b83\uff0c\u90a3\u4e48\u67e5\u8be2\u51fd\u6570\u5c06\u5728\u5bf9\u5e94\u7684\u5730\u65b9\u63a5\u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\n\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u624b\u52a8\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortController")," API\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=abortcontroller%20polyfill"},"\u5728 npm \u4e0a\u6709\u51e0\u4e2a\u53ef\u7528\u7684"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u8be5\u7279\u6027\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"3.30.0")," \u7248\u672c\u4e2d\u5f15\u5165\u3002\n\u5982\u679c\u4f60\u4ecd\u5728\u4f7f\u7528\u65e7\u7248\u672c\u7684\uff0c\u8bf7\u5c3d\u5feb\u5347\u7ea7\u6216\u8005\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"#%E6%97%A7%E7%9A%84-cancel-%E5%87%BD%E6%95%B0"},"\u65e7\u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"cancel")," \u51fd\u6570")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u884c\u4e3a"},"\u9ed8\u8ba4\u884c\u4e3a"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672a\u6302\u8f7d(unmount)\u7684\u6216\u8005\u5728\u5176\u8fd4\u56de\u7684 Promise \u88ab\u6267\u884c\u4e4b\u524d\u7684\u67e5\u8be2\u662f",(0,a.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u53d6\u6d88\u7684\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u5728\u6267\u884c\u4e4b\u540e\u7684\u6570\u636e\u662f\u5728\u7f13\u5b58\u4e2d\u53ef\u7528\u3002\n\u56e0\u6b64\uff0c\u5728\u5df2\u7ecf\u5f00\u59cb\u63a5\u6536\u4e00\u4e2a\u67e5\u8be2\u65f6\u4e14\u5728\u5176\u5b8c\u6210\u4e4b\u524d\uff0c\u5378\u8f7d\u5176\u7ec4\u4ef6\u7684\u60c5\u5f62\u662f\u88ab\u5141\u8bb8\u7684\u3002\u5e76\u4e14\u82e5\u518d\u6b21\u6302\u8f7d\u7ec4\u4ef6\uff0c\u800c\u67e5\u8be2\u8fd8\u6ca1\u6709\u88ab GC\uff0c\u90a3\u4e48\u6570\u636e\u662f\u53ef\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal")," \u6216\u8005\u662f\u9644\u52a0\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\uff0c\u90a3\u4e48\u8fd9\u4e2a Promise \u662f\u53ef\u4ee5\u88ab\u53d6\u6d88\u7684(\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u53d6\u6d88 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u64cd\u4f5c)\uff0c\u56e0\u6b64\u67e5\u8be2\u4e5f\u5fc5\u987b\u88ab\u53d6\u6d88\u3002\n\u53d6\u6d88\u67e5\u8be2\u5c06\u5bfc\u81f4\u5176\u72b6\u6001",(0,a.kt)("em",{parentName:"p"},"\u6062\u590d\u5230"),"\u4ee5\u524d\u7684\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-fetch"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"fetch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const query = useQuery('todos', async ({ signal }) => {\n  const todosResponse = await fetch('/todos', {\n    // \u4f20\u9012\u53ef\u64a4\u9500\u7684\u4fe1\u53f7\u5230fetch\u91cc\u53bb\n    signal,\n  })\n  const todos = await todosResponse.json()\n\n  const todoDetails = todos.map(async ({ details } => {\n    const response = await fetch(details, {\n      // \u6216\u8fd9\u5c06\u4ed6\u4f20\u9012\u7ed9\u597d\u51e0\u4e2a\u5b9e\u4f8b\n      signal,\n    })\n    return response.json()\n  })\n\n  return Promise.all(todoDetails)\n})\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-axios"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"axios")),(0,a.kt)("h3",{id:"\u4f7f\u7528-axios-v0220"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"axios")," ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/axios/axios/releases/tag/v0.22.0"},"v0.22.0+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nconst query = useQuery("todos", ({ signal }) =>\n  axios.get("/todos", {\n    // \u4f20\u9012\u53ef\u64a4\u9500\u7684\u4fe1\u53f7\u5230 `axios`\n    signal,\n  }),\n);\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-axios-\u7248\u672c\u4f4e\u4e8e-v0220"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"axios")," (\u7248\u672c\u4f4e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h3"},"v0.22.0"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nconst query = useQuery("todos", ({ signal }) => {\n  // \u7ed9\u8fd9\u4e2a request \u521b\u5efa\u4e00\u4e2a CancelToken\n  const CancelToken = axios.CancelToken;\n  const source = CancelToken.source();\n\n  const promise = axios.get("/todos", {\n    // \u4f20\u9012\u8fd9\u4e2a token \u5230\u8be5\u8bf7\u6c42\n    cancelToken: source.token,\n  });\n\n  // \u5982\u679c React Query \u4fe1\u53f7\u662f abort\uff0c\u90a3\u4e48\u64a4\u9500\u8be5\u8bf7\u6c42\n  signal?.addEventListener("abort", () => {\n    source.cancel("Query was cancelled by React Query");\n  });\n\n  return promise;\n});\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528-xmlhttprequest"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"XMLHttpRequest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const query = useQuery("todos", ({ signal }) => {\n  return new Promise((resolve, reject) => {\n    var oReq = new XMLHttpRequest();\n    oReq.addEventListener("load", () => {\n      resolve(JSON.parse(oReq.responseText));\n    });\n    signal?.addEventListener("abort", () => {\n      oReq.abort();\n      reject();\n    });\n    oReq.open("GET", "/todos");\n    oReq.send();\n  });\n});\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528-graphql-request"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"graphql-request")),(0,a.kt)("h3",{id:"\u4f7f\u7528-graphql-request-v400"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"graphql-request")," v4.0.0+"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const client = new GraphQLClient(endpoint);\n\nconst query = useQuery("todos", ({ signal }) => {\n  client.request({ document: query, signal });\n});\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-graphql-request-\u7248\u672c\u4f4e\u4e8e-v400"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"graphql-request")," (\u7248\u672c\u4f4e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h3"},"v4.0.0"),")"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," \u7684\u6784\u9020\u51fd\u6570\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const query = useQuery("todos", ({ signal }) => {\n  const client = new GraphQLClient(endpoint, {\n    signal,\n  });\n  return client.request(query, variables);\n});\n')),(0,a.kt)("h2",{id:"\u624b\u52a8\u53d6\u6d88"},"\u624b\u52a8\u53d6\u6d88"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u60a8\u53ef\u80fd\u4f1a\u60f3\u624b\u52a8\u53d6\u6d88\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u8bf7\u6c42\u9700\u8981\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\uff0c\u6b64\u65f6\u5141\u8bb8\u7528\u6237\u5355\u51fb\u201c\u53d6\u6d88\u201d\u6309\u94ae\u6765\u505c\u6b62\u8bf7\u6c42\u3002\n\u4e3a\u6b64\uff0c\u60a8\u53ea\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"queryClient.cancelQueries(key)"),"\uff0c\u53d6\u6d88\u6b64\u6b21\u67e5\u8be2\u5e76\u5c06\u6570\u636e\u8fd8\u539f\u5230\u4e0a\u4e00\u6b21\u7684\u72b6\u6001\u3002\n\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"promise.cancel")," \u53ef\u7528\u6216\u8005\u4f60\u5728\u67e5\u8be2\u51fd\u6570\u5185\u5904\u7406\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"signal"),"\uff0cReact Query \u5c06\u53d6\u6d88\u8be5 Promise \u7684\u540c\u65f6\u53d6\u6d88\u8bf7\u6c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const [queryKey] = useState("todos");\n\nconst query = useQuery(queryKey, async ({ signal }) => {\n  const resp = await fetch("/todos", { signal });\n  return resp.json();\n});\n\nconst queryClient = useQueryClient();\n\nreturn (\n  <button\n    onClick={(e) => {\n      e.preventDefault();\n      queryClient.cancelQueries(queryKey);\n    }}\n  >\n    Cancel\n  </button>\n);\n')),(0,a.kt)("h2",{id:"\u65e7\u7684-cancel-\u51fd\u6570"},"\u65e7\u7684 ",(0,a.kt)("inlineCode",{parentName:"h2"},"cancel")," \u51fd\u6570"),(0,a.kt)("p",null,"\u4e0d\u7528\u62c5\u5fc3\uff01\u65e7\u7684\u53d6\u6d88\u529f\u80fd\u8bbe\u8ba1\u5c06\u7ee7\u7eed\u5de5\u4f5c\u3002\n\u4f46\u662f\u6211\u4eec\u5efa\u8bae\u4f60\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-cancelable-promises"},"\u53ef\u53d6\u6d88\u7684 Promise"),"\u8f6c\u79fb\u5230\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortSignal")," \u63a5\u53e3\uff0c\u56e0\u4e3a\u5b83\u5df2\u7ecf\u88ab",(0,a.kt)("a",{parentName:"p",href:"https://dom.spec.whatwg.org/#interface-abortcontroller"},"\u6807\u51c6\u5316\u4e3a\u4e00\u4e2a\u901a\u7528\u7684\u6784\u9020"),"\uff0c\u7528\u4e8e\u5728",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/abortcontroller"},"\u5927\u591a\u6570\u6d4f\u89c8\u5668"),"\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/globals.html#globals_class_abortsignal"},"Node \u4e2d"),"\u4e2d\u6b62\u6b63\u5728\u8fdb\u884c\u7684\u6d3b\u52a8\u3002\u65e7\u7684\u53d6\u6d88\u51fd\u6570\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7684\u4e3b\u7248\u672c\u4e2d\u88ab\u5220\u9664\u3002"),(0,a.kt)("p",null,"\u8981\u4e0e\u6b64\u7279\u6027\u96c6\u6210\uff0c\u8bf7\u5728(\u9700\u8981\u5b9e\u73b0\u53d6\u6d88\u7684\u67e5\u8be2)\u8fd4\u56de\u7684 Promise \u4e0a\u9644\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\u3002\n\u5f53\u67e5\u8be2\u53d8\u5f97\u8fc7\u65f6\u6216\u4e0d\u6d3b\u8dc3\u65f6\uff0c\u5c06\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"promise.cancel")," \u51fd\u6570(\u5982\u679c\u53ef\u7528)\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-axios-1"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"axios")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nconst query = useQuery("todos", () => {\n  // \u4e3a\u6b64\u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 CancelToken \u6e90\n  const source = axios.CancelToken.source();\n\n  const promise = axios.get("/todos", {\n    // \u4f20\u5165\u8be5\u6e90\u5230 cancelToken\n    cancelToken: source.token,\n  });\n\n  // \u5982\u679c React Query \u8c03\u7528 `promise.cancel` \u65b9\u6cd5\uff0c\u5219\u53d6\u6d88\u8bf7\u6c42\n  promise.cancel = () => {\n    source.cancel("Query was cancelled by React Query");\n  };\n\n  return promise;\n});\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-fetch-1"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"fetch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const query = useQuery("todos", () => {\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 AbortController \u5b9e\u4f8b\n  const controller = new AbortController();\n  // \u83b7\u53d6 abortController \u7684\u4fe1\u53f7(signal)\n  const signal = controller.signal;\n\n  const promise = fetch("/todos", {\n    method: "get",\n    // \u4f20\u5165\u4fe1\u53f7\n    signal,\n  });\n\n  // \u5982\u679c React Query \u8c03\u7528 `promise.cancel` \u65b9\u6cd5\uff0c\u5219\u53d6\u6d88\u8bf7\u6c42\n  promise.cancel = () => controller.abort();\n\n  return promise;\n});\n')))}u.isMDXComponent=!0}}]);