"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={id:"mutations",title:"\u4fee\u6539 mutations"},i=void 0,l={unversionedId:"guides&concepts/mutations",id:"guides&concepts/mutations",title:"\u4fee\u6539 mutations",description:"\u4e0e\u67e5\u8be2\u4e0d\u540c\uff0c\u4fee\u6539\u901a\u5e38\u610f\u5473\u7740\u7528\u4e8e\u521b\u5efa/\u66f4\u65b0/\u5220\u9664\u6570\u636e\u6216\u6267\u884c\u670d\u52a1\u5668\u547d\u4ee4\u7b49\u526f\u4f5c\u7528\u3002",source:"@site/v3-react/guides&concepts/mutations.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/mutations",permalink:"/react-query-web-i18n/v3-react/guides&concepts/mutations",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/guides&concepts/mutations.md",tags:[],version:"current",lastUpdatedAt:1683186321,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"mutations",title:"\u4fee\u6539 mutations"},sidebar:"default",previous:{title:"\u9884\u53d6\u6570\u636e prefetching",permalink:"/react-query-web-i18n/v3-react/guides&concepts/prefetching"},next:{title:"\u67e5\u8be2\u5931\u6548 query-invalidation",permalink:"/react-query-web-i18n/v3-react/guides&concepts/query-invalidation"}},u={},s=[{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"\u91cd\u7f6e\u4fee\u6539\u7684\u72b6\u6001",id:"\u91cd\u7f6e\u4fee\u6539\u7684\u72b6\u6001",level:2},{value:"\u526f\u4f5c\u7528",id:"\u526f\u4f5c\u7528",level:2},{value:"\u6301\u7eed\u4fee\u6539",id:"\u6301\u7eed\u4fee\u6539",level:3},{value:"Promises",id:"promises",level:2},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:2},{value:"\u6301\u4e45\u5316",id:"\u6301\u4e45\u5316",level:2},{value:"\u884d\u751f\u9605\u8bfb",id:"\u884d\u751f\u9605\u8bfb",level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0e\u67e5\u8be2\u4e0d\u540c\uff0c\u4fee\u6539\u901a\u5e38\u610f\u5473\u7740\u7528\u4e8e\u521b\u5efa/\u66f4\u65b0/\u5220\u9664\u6570\u636e\u6216\u6267\u884c\u670d\u52a1\u5668\u547d\u4ee4\u7b49\u526f\u4f5c\u7528\u3002\n\u4e3a\u6b64\uff0cReact Query \u5bfc\u51fa\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," hook\u3002"),(0,o.kt)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5411\u670d\u52a1\u5668\u6dfb\u52a0\u65b0 todo \u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  const mutation = useMutation((newTodo) => axios.post("/todos", newTodo));\n\n  return (\n    <div>\n      {mutation.isLoading ? (\n        "Adding todo..."\n      ) : (\n        <>\n          {mutation.isError ? (\n            <div>An error occurred: {mutation.error.message}</div>\n          ) : null}\n\n          {mutation.isSuccess ? <div>Todo added!</div> : null}\n\n          <button\n            onClick={() => {\n              mutation.mutate({ id: new Date(), title: "Do Laundry" });\n            }}\n          >\n            Create Todo\n          </button>\n        </>\n      )}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"\u5728\u4efb\u4f55\u7ed9\u5b9a\u65f6\u523b\uff0c\u4fee\u6539\u53ea\u80fd\u5904\u4e8e\u4ee5\u4e0b\u72b6\u6001\u4e4b\u4e00\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isIdle")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"status === 'idle'")," - \u4fee\u6539\u76ee\u524d\u5904\u4e8e\u95f2\u7f6e\u72b6\u6001\u6216\u5904\u4e8e\u5168\u65b0/\u91cd\u7f6e\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isLoading")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"status === 'loading'")," - \u4fee\u6539\u76ee\u524d\u6b63\u5728\u8fdb\u884c\u64cd\u4f5c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isError")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"status === 'error'")," - \u4fee\u6539\u9047\u5230\u4e86\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isSuccess")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"status === 'success'")," - \u4fee\u6539\u662f\u6210\u529f\u7684\uff0c\u4e14\u6570\u636e\u53ef\u7528")),(0,o.kt)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u4e3b\u8981\u72b6\u6001\u4e4b\u5916\uff0c\u8fd8\u6709\u66f4\u591a\u7684\u4fe1\u606f\u53ef\u7528\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u4fee\u6539\u7684\u72b6\u6001\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"isError")," \u65f6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," \u5c5e\u6027\u83b7\u53d6\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"isSuccess")," \u65f6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," \u5c5e\u6027\u83b7\u53d6\u6570\u636e")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u60a8\u8fd8\u770b\u5230\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5355\u4e2a\u53d8\u91cf\u6216\u5bf9\u8c61\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u51fd\u6570\u6765\u5c06\u53d8\u91cf\u4f20\u9012\u7ed9\u60a8\u7684\u4fee\u6539\u51fd\u6570"),(0,o.kt)("p",null,"\u5373\u4f7f\u53ea\u6709\u53d8\u91cf\uff0c\u4fee\u6539\u4e5f\u6ca1\u6709\u90a3\u4e48\u7279\u522b\uff0c\u4f46\u662f\u5f53\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"onSuccess")," \u56de\u8c03\uff0c",(0,o.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientinvalidatequeries"},"Query Client \u7684 ",(0,o.kt)("inlineCode",{parentName:"a"},"invalidateQueries")," \u65b9\u6cd5"),"\u548c ",(0,o.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientsetquerydata"},"Query Client \u7684 ",(0,o.kt)("inlineCode",{parentName:"a"},"setQueryData")," \u65b9\u6cd5"),"\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u4fee\u6539\u5c31\u6210\u4e3a\u4e86\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u5de5\u5177\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u91cd\u8981\u8bf4\u660e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u51fd\u6570\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u4e0d\u80fd\u5728\u4e8b\u4ef6\u56de\u8c03\u4e2d\u76f4\u63a5\u4f7f\u7528\u5b83 (",(0,o.kt)("strong",{parentName:"p"},"React16 \u53ca\u4e4b\u524d\u7248\u672c"),")\u3002\n\u5982\u679c\u60a8\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"onSubmit")," \u4e2d\u8bbf\u95ee\u4e8b\u4ef6\uff0c\u5219\u9700\u8981\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u5305\u88c5\u5728\u53e6\u4e00\u4e2a\u51fd\u6570\u4e2d\u3002 \u8fd9\u662f\u7531\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html#event-pooling"},"React \u4e8b\u4ef6\u6c60"),"\u9650\u5236\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u5728React16\u53ca\u4e4b\u524d\u7684\u7248\u672c\uff0c\u8fd9\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\nconst CreateTodo = () => {\n  const mutation = useMutation((event) => {\n    event.preventDefault();\n    return fetch("/api", new FormData(event.target));\n  });\n\n  return <form onSubmit={mutation.mutate}>...</form>;\n};\n\n// \u8fd9\u5c06\u6b63\u5e38\u5de5\u4f5c\nconst CreateTodo = () => {\n  const mutation = useMutation((formData) => {\n    return fetch("/api", formData);\n  });\n  const onSubmit = (event) => {\n    event.preventDefault();\n    mutation.mutate(new FormData(event.target));\n  };\n\n  return <form onSubmit={onSubmit}>...</form>;\n};\n')),(0,o.kt)("h2",{id:"\u91cd\u7f6e\u4fee\u6539\u7684\u72b6\u6001"},"\u91cd\u7f6e\u4fee\u6539\u7684\u72b6\u6001"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u6e05\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," \u6216\u4fee\u6539\u8bf7\u6c42\u7684\u6570\u636e\u3002\n\u4e3a\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," \u51fd\u6570\u6765\u5904\u7406\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const CreateTodo = () => {\n  const [title, setTitle] = useState("");\n  const mutation = useMutation(createTodo);\n\n  const onCreateTodo = (e) => {\n    e.preventDefault();\n    mutation.mutate({ title });\n  };\n\n  return (\n    <form onSubmit={onCreateTodo}>\n      {mutation.error && (\n        <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>\n      )}\n      <input\n        type="text"\n        value={title}\n        onChange={(e) => setTitle(e.target.value)}\n      />\n      <br />\n      <button type="submit">Create Todo</button>\n    </form>\n  );\n};\n')),(0,o.kt)("h2",{id:"\u526f\u4f5c\u7528"},"\u526f\u4f5c\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," \u9644\u5e26\u4e00\u4e9b\u6709\u5e2e\u52a9\u7684\u9009\u9879\u3002\n\u5141\u8bb8\u5728\u5176\u751f\u547d\u5468\u671f\u7684\u4efb\u4f55\u9636\u6bb5\u5feb\u901f\u800c\u7b80\u5355\u5730\u4ea7\u751f\u526f\u4f5c\u7528\u3002\n\u8fd9\u4e9b\u5bf9\u4e8e\u5728",(0,o.kt)("a",{parentName:"p",href:"./optimistic-updates"},"\u4e50\u89c2\u66f4\u65b0"),"\u751a\u81f3\u662f",(0,o.kt)("a",{parentName:"p",href:"./invalidation-from-mutations"},"\u4fee\u6539\u540e\u4f7f\u67e5\u8be2\u65e0\u6548\u5e76\u91cd\u65b0\u83b7\u53d6"),"\u90fd\u975e\u5e38\u6709\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useMutation(addTodo, {\n  onMutate: (variables) => {\n    // \u4fee\u6539\u5373\u5c06\u53d1\u751f\uff01\n\n    // \uff08\u53ef\u9009\uff09\u8fd4\u56de\u5305\u542b\u56de\u6eda\u65f6\u4f7f\u7528\u7684\u6570\u636e\u7684\u4e0a\u4e0b\u6587\n    return { id: 1 };\n  },\n  onError: (error, variables, context) => {\n    // \u9519\u8bef\u89e6\u53d1\uff01\n    console.log(`rolling back optimistic update with id ${context.id}`);\n  },\n  onSuccess: (data, variables, context) => {\n    // Boom baby!\n  },\n  onSettled: (data, error, variables, context) => {\n    // \u9519\u8bef\u6216\u6210\u529f\u2026\u2026\u8fd9\u5e76\u4e0d\u91cd\u8981\n  },\n});\n")),(0,o.kt)("p",null,"\u5f53\u5728\u4efb\u4f55\u56de\u8c03\u51fd\u6570\u4e2d\u8fd4\u56de promise \u65f6\uff0c\u5b83\u5c06\u9996\u5148\u88ab\u7b49\u5f85\uff0c\u7136\u540e\u518d\u8c03\u7528\u4e0b\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'useMutation(addTodo, {\n  onSuccess: async () => {\n    console.log("I\'m first!");\n  },\n  onSettled: async () => {\n    console.log("I\'m second!");\n  },\n});\n')),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u5728\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u65f6\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6709\u989d\u5916\u7684\u56de\u8c03\u88ab\u89e6\u53d1"),"\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," \u4e0a\u5b9a\u4e49\u7684\u56de\u8c03\u3002\n\u8fd9\u53ef\u7528\u4e8e\u89e6\u53d1\u7ec4\u4ef6\u7279\u5b9a\u7684\u526f\u4f5c\u7528\u3002\n\u4e3a\u6b64\uff0c\u53ef\u4ee5\u5728\u4fee\u6539\u53d8\u91cf\u4ea7\u751f\u4e4b\u540e\u5411\u4fee\u6539\u51fd\u6570\u63d0\u4f9b\u4efb\u4f55\u88ab\u5b9a\u4e49\u7684\u56de\u8c03\u9009\u9879\u3002\n\u652f\u6301\u7684\u8986\u76d6\u5305\u62ec: ",(0,o.kt)("inlineCode",{parentName:"p"},"onSuccess"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"onSettled"),"\u3002\n(\u8bf7\u8bb0\u4f4f\uff0c\u5982\u679c\u7ec4\u4ef6\u5728",(0,o.kt)("em",{parentName:"p"},"\u4fee\u6539\u5b8c\u6210\u4e4b\u524d\u88ab\u5378\u8f7d"),"\uff0c\u5219\u8fd9\u4e9b\u989d\u5916\u7684\u56de\u8c03\u4e0d\u4f1a\u88ab\u8fd0\u884c)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useMutation(addTodo, {\n  onSuccess: (data, variables, context) => {\n    // I will fire first\n  },\n  onError: (error, variables, context) => {\n    // I will fire first\n  },\n  onSettled: (data, error, variables, context) => {\n    // I will fire first\n  },\n});\n\nmutate(todo, {\n  onSuccess: (data, variables, context) => {\n    // I will fire second!\n  },\n  onError: (error, variables, context) => {\n    // I will fire second!\n  },\n  onSettled: (data, error, variables, context) => {\n    // I will fire second!\n  },\n});\n")),(0,o.kt)("h3",{id:"\u6301\u7eed\u4fee\u6539"},"\u6301\u7eed\u4fee\u6539"),(0,o.kt)("p",null,"\u5f53\u6301\u7eed\u4fee\u6539\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"onSuccess"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onSettled")," \u8fd9\u51e0\u4e2a\u56de\u8c03\u4f1a\u6709\u4e00\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002\n\u5f53\u7ec4\u4ef6\u662f\u6302\u8f7d\u72b6\u6001\uff0c\u4e14\u5c06\u5b83\u4eec\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u51fd\u6570\u65f6\uff0c\u5b83\u4eec\u53ea\u4f1a\u88ab ",(0,o.kt)("em",{parentName:"p"},"\u89e6\u53d1\u4e00\u6b21"),"\u3002\n\u8fd9\u662f\u56e0\u4e3a\u5728\u6bcf\u6b21\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u51fd\u6570\u65f6\uff0c\u76f8\u5173\u7684\u89c2\u5bdf\u8005\u90fd\u4f1a\u88ab\u5148\u79fb\u9664\u518d\u91cd\u65b0\u76d1\u542c\u3002\n\u4e0e\u4e4b\u76f8\u53cd\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," \u7684\u5904\u7406\u51fd\u6570\u4f1a\u5728\u6bcf\u4e00\u6b21\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u8c03\u7528\u65f6\u88ab\u8c03\u7528\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutationFn")," \u662f",(0,o.kt)("strong",{parentName:"p"},"\u540c\u6b65"),"\u7684\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"mutationFn")," \u7684\u89e6\u53d1\u987a\u5e8f\u548c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u65f6\u7684\u987a\u5e8f\u662f\u6709\u6240\u4e0d\u540c\u7684\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'useMutation(addTodo, {\n  onSuccess: (data, error, variables, context) => {\n    // Will be called 3 times\n  },\n});\n\n[("Todo 1", "Todo 2", "Todo 3")].forEach((todo) => {\n  mutate(todo, {\n    onSuccess: (data, error, variables, context) => {\n      // Will execute only once, for the last mutation (Todo 3),\n      // regardless which mutation resolves first\n    },\n  });\n});\n')),(0,o.kt)("h2",{id:"promises"},"Promises"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mutateAsync")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," \u6765\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u5b83\u5c06\u5728\u6210\u529f\u65f6\u89e3\u6790\u6216\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\u3002\n\u4f8b\u5982\uff0c\u8fd9\u53ef\u4ee5\u7528\u6765\u7ec4\u5408\u526f\u4f5c\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mutation = useMutation(addTodo);\n\ntry {\n  const todo = await mutation.mutateAsync(todo);\n  console.log(todo);\n} catch (error) {\n  console.error(error);\n} finally {\n  console.log("done");\n}\n')),(0,o.kt)("h2",{id:"\u91cd\u8bd5"},"\u91cd\u8bd5"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cReact Query \u4e0d\u4f1a\u5728\u51fa\u9519\u65f6\u91cd\u8bd5\u4fee\u6539\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," \u9009\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mutation = useMutation(addTodo, {\n  retry: 3,\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u7531\u4e8e\u8bbe\u5907\u79bb\u7ebf\u800c\u5bfc\u81f4\u4fee\u6539\u5931\u8d25\uff0c\u90a3\u4e48\u5f53\u8bbe\u5907\u91cd\u65b0\u8fde\u63a5\u65f6\uff0c\u5b83\u4eec\u5c06\u4ee5\u76f8\u540c\u7684\u987a\u5e8f\u91cd\u65b0\u5c1d\u8bd5\u3002")),(0,o.kt)("h2",{id:"\u6301\u4e45\u5316"},"\u6301\u4e45\u5316"),(0,o.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5c06\u4fee\u6539\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u6216\u5176\u4ed6\u4ec0\u4e48\u5b58\u50a8\u65b9\u5f0f\u4e2d\uff0c\u5e76\u5728\u4ee5\u540e\u6062\u590d\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9ad8\u9636\u51fd\u6570\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const queryClient = new QueryClient();\n\n// \u5b9a\u4e49 "addTodo" \u4fee\u6539\nqueryClient.setMutationDefaults("addTodo", {\n  mutationFn: addTodo,\n  onMutate: async (variables) => {\n    // \u53d6\u6d88 todos list \u5f53\u524d\u7684\u67e5\u8be2\n    await queryClient.cancelQueries("todos");\n\n    // \u521b\u5efa\u4e00\u4e2a\u5bf9\u4e8e todo \u7684\u4e50\u89c2\u4fee\u6539\n    const optimisticTodo = { id: uuid(), title: variables.title };\n\n    // \u6dfb\u52a0\u5230 todos list\n    queryClient.setQueryData("todos", (old) => [...old, optimisticTodo]);\n\n    // \u8fd4\u56de\u5305\u542b\u4e50\u89c2\u4fee\u6539\u7684\u4e0a\u4e0b\u6587\n    return { optimisticTodo };\n  },\n  onSuccess: (result, variables, context) => {\n    // \u6210\u529f\uff0c\u7528\u6b63\u786e\u5185\u5bb9\u66ff\u6362\u6389\n    queryClient.setQueryData("todos", (old) =>\n      old.map((todo) =>\n        todo.id === context.optimisticTodo.id ? result : todo,\n      ),\n    );\n  },\n  onError: (error, variables, context) => {\n    // \u6e05\u9664\u6389\u6dfb\u52a0\u5931\u8d25\u7684 todo\n    queryClient.setQueryData("todos", (old) =>\n      old.filter((todo) => todo.id !== context.optimisticTodo.id),\n    );\n  },\n  retry: 3,\n});\n\n// \u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u5185\u542f\u52a8\u4fee\u6539\nconst mutation = useMutation("addTodo");\nmutation.mutate({ title: "title" });\n\n// \u5982\u679c\u56e0\u4e3a\u8bbe\u5907\u79bb\u7ebf\u800c\u6682\u505c\u4e86\u4fee\u6539\uff0c\n// \u7136\u540e\uff0c\u5f53\u7a0b\u5e8f\u9000\u51fa\u65f6\uff0c\u53ef\u4ee5\u4f7f\u6682\u505c\u7684\u4fee\u6539\u53d8\u4e3a dehydrated \u7684\nconst state = dehydrate(queryClient);\n\n// \u5f53\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u4fee\u6539\u518d\u6b21\u542f\u52a8\nhydrate(queryClient, state);\n\n// \u91cd\u542f\u4fee\u6539\nqueryClient.resumePausedMutations();\n')),(0,o.kt)("h2",{id:"\u884d\u751f\u9605\u8bfb"},"\u884d\u751f\u9605\u8bfb"),(0,o.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4fee\u6539\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/community/tkdodos-blog#12-mastering-mutations-in-react-query"},"\u6b64\u793e\u533a\u5185\u5bb9(\u82f1\u6587)")))}c.isMDXComponent=!0}}]);