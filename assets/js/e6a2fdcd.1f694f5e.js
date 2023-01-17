"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2380],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 Disabling/Pausing Queries"},l=void 0,o={unversionedId:"guides&concepts/disabling-queries",id:"guides&concepts/disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 Disabling/Pausing Queries",description:"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528enabled = false\u9009\u9879\u3002",source:"@site/react/guides&concepts/disabling-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/disabling-queries",permalink:"/react-query-web-i18n/react/guides&concepts/disabling-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/guides&concepts/disabling-queries.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"disabling-queries",title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2 Disabling/Pausing Queries"},sidebar:"zhCN",previous:{title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0 Window Focus Refetching",permalink:"/react-query-web-i18n/react/guides&concepts/window-focus-refetching"},next:{title:"\u67e5\u8be2\u91cd\u8bd5 Query Retries",permalink:"/react-query-web-i18n/react/guides&concepts/query-retries"}},s={},u=[{value:"\u60f0\u6027\u67e5\u8be2",id:"\u60f0\u6027\u67e5\u8be2",level:2},{value:"isInitialLoading",id:"isinitialloading",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u8981\u7981\u7528\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"enabled = false"),"\u9009\u9879\u3002"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u5df2\u7f13\u5b58\u4e86\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'success'"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316"))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u7f13\u5b58\u7684\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5c06\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'loading'"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"fetchStatus === 'idle'"),"\u7684\u72b6\u6001\u8fdb\u884c\u521d\u59cb\u5316"))),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u4e0d\u4f1a\u5728\u6302\u8f7d\u65f6\u81ea\u52a8\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u4e0d\u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u67e5\u8be2\u5c06\u5ffd\u7565\u67e5\u8be2\u5ba2\u6237\u7aef\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"invalidateQueries"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"refetchQueries"),"\u8c03\u7528\uff0c\u8fd9\u4e9b\u8c03\u7528\u901a\u5e38\u4f1a\u5bfc\u81f4\u67e5\u8be2\u91cd\u65b0\u83b7\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery"),"\u8fd4\u56de\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"refetch"),"\u53ef\u7528\u4e8e\u624b\u52a8\u89e6\u53d1\u67e5\u8be2\u4ee5\u8fdb\u884c\u6570\u636e\u83b7\u53d6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'function Todos() {\n  const { isInitialLoading, isError, data, error, refetch, isFetching } =\n    useQuery({\n      queryKey: ["todos"],\n      queryFn: fetchTodoList,\n      enabled: false,\n    });\n\n  return (\n    <div>\n      <button onClick={() => refetch()}>Fetch Todos</button>\n\n      {data ? (\n        <>\n          <ul>\n            {data.map((todo) => (\n              <li key={todo.id}>{todo.title}</li>\n            ))}\n          </ul>\n        </>\n      ) : isError ? (\n        <span>Error: {error.message}</span>\n      ) : isInitialLoading ? (\n        <span>Loading...</span>\n      ) : (\n        <span>Not ready ...</span>\n      )}\n\n      <div>{isFetching ? "Fetching..." : null}</div>\n    </div>\n  );\n}\n')),(0,i.kt)("p",null,"\u6c38\u4e45\u6027\u5730\u7981\u7528\u4e00\u4e2a\u67e5\u8be2\u4f1a\u4f7f\u4f60\u5931\u53bb React Query \u6240\u63d0\u4f9b\u7684\u8bb8\u591a\u4f18\u79c0\u7684\u529f\u80fd\uff08\u5982\u540e\u53f0\u7684\u91cd\u65b0\u8bf7\u6c42\uff09\uff0c\u800c\u4e14\u8fd9\u4e5f\u4e0d\u662f\u4e00\u79cd\u81ea\u7136\u7684\u65b9\u5f0f\u3002\n\u5b83\u628a\u4f60\u4ece\u58f0\u660e\u6027\u7684\u65b9\u6cd5\uff08\u5b9a\u4e49\u67e5\u8be2\u5e94\u8be5\u4f55\u65f6\u8fd0\u884c\u7684\u4f9d\u8d56\u5173\u7cfb\uff09\u5e26\u5165\u4e86\u547d\u4ee4\u6027\u7684\u6a21\u5f0f\uff08\u6bcf\u5f53\u6211\u70b9\u51fb\u8fd9\u91cc\u65f6\u5c31\u4f1a\u83b7\u53d6\uff09\u3002\n\u5b83\u4e5f\u4e0d\u53ef\u80fd\u4f20\u9012\u53c2\u6570\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"refetch"),"\u3002\n\u5f88\u591a\u65f6\u5019\uff0c\u4f60\u60f3\u8981\u7684\u53ef\u80fd\u53ea\u662f\u4e00\u4e2a\u60f0\u6027\u67e5\u8be2\uff1a"),(0,i.kt)("h2",{id:"\u60f0\u6027\u67e5\u8be2"},(0,i.kt)("a",{parentName:"h2",href:"https://gist.github.com/39eff87048d54dbdb8ea"},"\u60f0\u6027"),"\u67e5\u8be2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),"\u9009\u9879\u4e0d\u4ec5\u53ef\u4ee5\u7528\u6765\u6c38\u4e45\u7981\u7528\u4e00\u4e2a\u67e5\u8be2\uff0c\u8fd8\u53ef\u4ee5\u8ba9\u4f60\u5728\u7a0d\u665a\u7684\u65f6\u5019\u542f\u7528\u6216\u8005\u7981\u7528\u5b83\u3002\n\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f\u4e00\u4e2a\u5e26\u8fc7\u6ee4\u5668\u7684\u8868\u5355\uff0c\u4f60\u53ea\u60f3\u5728\u7528\u6237\u8f93\u5165\u4e86\u4e00\u4e2a\u7528\u4e8e\u8fc7\u6ee4\u7684\u5173\u952e\u8bcd\u540e\u624d\u53d1\u8d77\u7b2c\u4e00\u6b21\u8bf7\u6c42\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'function Todos() {\n  const [filter, setFilter] = React.useState("");\n\n  const { data } = useQuery({\n    queryKey: ["todos", filter],\n    queryFn: () => fetchTodos(filter),\n    // \u2b07\ufe0f \u53ea\u8981filter\u4e3a\u7a7a\u5219\u7981\u7528\n    enabled: !!filter,\n  });\n\n  return (\n    <div>\n      {/* \ud83d\ude80 \u8fc7\u6ee4\u7684\u5173\u952e\u8bcd\u8bbe\u7f6e\u540e\u5c06\u542f\u7528\u5e76\u6267\u884c\u67e5\u8be2 */}\n      <FiltersForm onApply={setFilter} />\n      {data && <TodosTable data={{ data }} />}\n    </div>\n  );\n}\n')),(0,i.kt)("h3",{id:"isinitialloading"},"isInitialLoading"),(0,i.kt)("p",null,"\u60f0\u6027\u67e5\u8be2\u4e00\u5f00\u59cb\u5c31\u4f1a\u5904\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"status: 'loading'"),"\u7684\u72b6\u6001\uff0c\u56e0\u4e3a\u5b83\u7684\u771f\u5b9e\u52a0\u8f7d\u65f6\u673a\u4e0d\u786e\u5b9a\u4e14\u5b83\u7684\u786e\u6682\u65f6\u6ca1\u6709\u6570\u636e\u3002\n\u7531\u4e8e\u6211\u4eec\u76ee\u524d\u6ca1\u6709\u83b7\u53d6\u4efb\u4f55\u6570\u636e\uff08\u56e0\u4e3a",(0,i.kt)("em",{parentName:"p"},"enabled"),"\u5df2\u88ab\u7981\u7528\uff09\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u5f88\u6709\u53ef\u80fd\u6ca1\u6cd5\u4f7f\u7528\u8fd9\u4e2a\u5b57\u6bb5\u6765\u663e\u793a\u4e00\u4e2a\u201c\u6b63\u5728\u52a0\u8f7d\u201d\u7684\u6837\u5f0f\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7981\u7528\u4e86\u81ea\u52a8\u8fd0\u884c\u7684\u67e5\u8be2\u6216\u8005\u4f7f\u7528\u4e86\u60f0\u6027\u67e5\u8be2\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"isInitialLoading"),"\u5b57\u6bb5\u3002\n\u8fd9\u662f\u4e00\u4e2a\u6d3e\u751f\u7684\u6807\u5fd7\uff0c\u662f\u7531\u90e8\u5206\u5185\u5bb9\u8ba1\u7b97\u51fa\u6765\u7684\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading && isFetching")),(0,i.kt)("p",null,"\u6240\u4ee5\u53ea\u6709\u5f53\u67e5\u8be2\u6b63\u5728\u8fdb\u884c\u7b2c\u4e00\u6b21\u83b7\u53d6\u65f6\uff0c\u5b83\u624d\u4f1a\u4e3a\u771f\u3002"))}p.isMDXComponent=!0}}]);