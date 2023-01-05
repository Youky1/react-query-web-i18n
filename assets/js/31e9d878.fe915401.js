"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),g=a,v=l["".concat(p,".").concat(g)]||l[g]||d[g]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"paginated-queries",title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2 paginated-queries"},o=void 0,s={unversionedId:"guides&concepts/paginated-queries",id:"version-v3/guides&concepts/paginated-queries",title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2 paginated-queries",description:'\u5448\u73b0\u5206\u9875\u6570\u636e\u662f\u4e00\u79cd\u975e\u5e38\u5e38\u89c1\u7684 UI \u6a21\u5f0f\uff0c\u5728 React Query \u4e2d\uff0c\u5b83\u901a\u8fc7\u5728\u67e5\u8be2\u952e\u4e2d\u5305\u542b\u9875\u9762\u4fe1\u606f\u6765"\u6b63\u5e38\u5de5\u4f5c"\uff1a',source:"@site/versioned_docs/version-v3/guides&concepts/paginated-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/paginated-queries",permalink:"/react-query-web-i18n/v3/guides&concepts/paginated-queries",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/paginated-queries.md",tags:[],version:"v3",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"paginated-queries",title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2 paginated-queries"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2\u91cd\u8bd5 query-retries",permalink:"/react-query-web-i18n/v3/guides&concepts/query-retries"},next:{title:"\u65e0\u9650\u67e5\u8be2 infinite-queries",permalink:"/react-query-web-i18n/v3/guides&concepts/infinite-queries"}},p={},u=[{value:"\u4f7f\u7528<code>keepPreviousData</code>\u7684\u66f4\u597d\u7684\u5206\u9875\u67e5\u8be2",id:"\u4f7f\u7528keeppreviousdata\u7684\u66f4\u597d\u7684\u5206\u9875\u67e5\u8be2",level:2},{value:"\u4f7f\u7528<code>keepPreviousData</code>\u6ede\u540e\u65e0\u9650\u67e5\u8be2\u7684\u7ed3\u679c",id:"\u4f7f\u7528keeppreviousdata\u6ede\u540e\u65e0\u9650\u67e5\u8be2\u7684\u7ed3\u679c",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'\u5448\u73b0\u5206\u9875\u6570\u636e\u662f\u4e00\u79cd\u975e\u5e38\u5e38\u89c1\u7684 UI \u6a21\u5f0f\uff0c\u5728 React Query \u4e2d\uff0c\u5b83\u901a\u8fc7\u5728\u67e5\u8be2\u952e\u4e2d\u5305\u542b\u9875\u9762\u4fe1\u606f\u6765"\u6b63\u5e38\u5de5\u4f5c"\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const result = useQuery(["projects", page], fetchProjects);\n')),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u8fd0\u884c\u8be5\u793a\u4f8b\uff0c\u60a8\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u4e00\u4e9b\u5947\u602a\u7684\u4e8b\u60c5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UI \u5728",(0,a.kt)("inlineCode",{parentName:"strong"},"success"),"\u548c",(0,a.kt)("inlineCode",{parentName:"strong"},"loading"),"\u72b6\u6001\u4e4b\u95f4\u6765\u56de\u8df3\u8f6c\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u65b0\u9875\u9762\u90fd\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5168\u65b0\u7684\u67e5\u8be2\u3002")),(0,a.kt)("p",null,"\u8fd9\u79cd\u4f53\u9a8c\u5e76\u4e0d\u662f\u6700\u4f73\u7684\uff0c\u4e0d\u5e78\u7684\u662f\uff0c\u4eca\u5929\u6709\u4e0d\u5c11\u5de5\u5177\u5728\u575a\u6301\u4f7f\u7528\u3002\n\u4f46\u4e0d\u662f React Query\uff01\n\u60a8\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\u4e86\uff0cReact Query \u5e26\u6709\u4e00\u4e2a\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"keepPreviousData"),"\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u4ece\u800c\u4f7f\u5f97\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u88ab\u8f7b\u6613\u7684\u89e3\u51b3\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528keeppreviousdata\u7684\u66f4\u597d\u7684\u5206\u9875\u67e5\u8be2"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h2"},"keepPreviousData"),"\u7684\u66f4\u597d\u7684\u5206\u9875\u67e5\u8be2"),(0,a.kt)("p",null,"\u8003\u8651\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u5728\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u4e3a\u67e5\u8be2\u589e\u52a0 pageIndex\uff08\u6216\u6e38\u6807\uff09\u3002\n\u5982\u679c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4ece\u6280\u672f\u4e0a\u8bb2\u5b83\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c"),"\uff0c\u4f46\u662f UI \u4f1a\u968f\u7740\u6bcf\u4e2a\u9875\u9762\u6216\u6e38\u6807\u521b\u5efa\u548c\u9500\u6bc1\u4e0d\u540c\u7684\u67e5\u8be2\u800c\u8df3\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," \u72b6\u6001\u3002\n\u901a\u8fc7\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"keepPreviousData"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4e00\u4e9b\u65b0\u7684\u4e1c\u897f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\u65b0\u6570\u636e\u65f6\uff0c\u5373\u4f7f\u67e5\u8be2\u952e\u503c\u5df2\u66f4\u6539\uff0c\u4e0a\u6b21\u6210\u529f\u83b7\u53d6\u7684\u6570\u636e\u4ecd\u53ef\u7528")),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u65b0\u6570\u636e\u5230\u8fbe\u65f6\uff0c\u5148\u524d\u7684\u6570\u636e\u5c06\u88ab\u65e0\u7f1d\u4ea4\u6362\u4ee5\u663e\u793a\u65b0\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"isPreviousData"),"\u6765\u4e86\u89e3\u5f53\u524d\u4e3a\u60a8\u63d0\u4f9b\u7684\u662f\u4ec0\u4e48\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Todos() {\n  const [page, setPage] = React.useState(0);\n\n  const fetchProjects = (page = 0) =>\n    fetch("/api/projects?page=" + page).then((res) => res.json());\n\n  const { isLoading, isError, error, data, isFetching, isPreviousData } =\n    useQuery(["projects", page], () => fetchProjects(page), {\n      keepPreviousData: true,\n    });\n\n  return (\n    <div>\n      {isLoading ? (\n        <div>Loading...</div>\n      ) : isError ? (\n        <div>Error: {error.message}</div>\n      ) : (\n        <div>\n          {data.projects.map((project) => (\n            <p key={project.id}>{project.name}</p>\n          ))}\n        </div>\n      )}\n      <span>Current Page: {page + 1}</span>\n      <button\n        onClick={() => setPage((old) => Math.max(old - 1, 0))}\n        disabled={page === 0}\n      >\n        Previous Page\n      </button>{" "}\n      <button\n        onClick={() => {\n          if (!isPreviousData && data.hasMore) {\n            setPage((old) => old + 1);\n          }\n        }}\n        // Disable the Next Page button until we know a next page is available\n        disabled={isPreviousData || !data?.hasMore}\n      >\n        Next Page\n      </button>\n      {isFetching ? <span> Loading...</span> : null}{" "}\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528keeppreviousdata\u6ede\u540e\u65e0\u9650\u67e5\u8be2\u7684\u7ed3\u679c"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h2"},"keepPreviousData"),"\u6ede\u540e\u65e0\u9650\u67e5\u8be2\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u4e0d\u90a3\u4e48\u5e38\u89c1\uff0c\u4f46\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"keepPreviousData"),"\u9009\u9879\u4e5f\u53ef\u4ee5\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"Hook \u5b8c\u7f8e\u914d\u5408\uff0c\u6240\u4ee5\u60a8\u53ef\u4ee5\u65e0\u7f1d\u5730\u5141\u8bb8\u60a8\u7684\u7528\u6237\u7ee7\u7eed\u67e5\u770b\u7f13\u5b58\u7684\u6570\u636e\uff0c\u800c\u65e0\u9650\u67e5\u8be2\u7684\u952e\u503c\u5c06\u968f\u7740\u65f6\u95f4\u53d8\u5316\u800c\u81ea\u52a8\u53d8\u5316\u3002"))}l.isMDXComponent=!0}}]);