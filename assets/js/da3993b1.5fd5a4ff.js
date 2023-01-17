"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"infinite-queries",title:"\u65e0\u9650\u67e5\u8be2 Infinite Queries"},l=void 0,p={unversionedId:"guides&concepts/infinite-queries",id:"guides&concepts/infinite-queries",title:"\u65e0\u9650\u67e5\u8be2 Infinite Queries",description:'\u901a\u8fc7"\u52a0\u8f7d\u66f4\u591a"\u6765\u9644\u52a0\u66f4\u591a\u7684\u6570\u636e\u5230\u73b0\u6709\u6570\u636e\u96c6\uff0c\u6216\u8005\u662f\u901a\u8fc7"\u65e0\u9650\u6eda\u52a8"\u6765\u5448\u73b0\u5217\u8868\uff0c\u8fd9\u4e9b\u90fd\u662f\u975e\u5e38\u5e38\u89c1\u7684 UI \u6a21\u5f0f\u3002',source:"@site/react/guides&concepts/infinite-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/infinite-queries",permalink:"/react-query-web-i18n/react/guides&concepts/infinite-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/guides&concepts/infinite-queries.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"infinite-queries",title:"\u65e0\u9650\u67e5\u8be2 Infinite Queries"},sidebar:"zhCN",previous:{title:"\u5206\u9875/\u6ede\u540e\u67e5\u8be2 Paginated Queries",permalink:"/react-query-web-i18n/react/guides&concepts/paginated-queries"},next:{title:"\u67e5\u8be2\u6570\u636e\u5360\u4f4d\u7b26 Placeholder Query Data",permalink:"/react-query-web-i18n/react/guides&concepts/placeholder-query-data"}},s={},o=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u5f53\u65e0\u9650\u67e5\u8be2\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48",id:"\u5f53\u65e0\u9650\u67e5\u8be2\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48",level:2},{value:"\u91cd\u65b0\u83b7\u53d6\u9875\u9762",id:"\u91cd\u65b0\u83b7\u53d6\u9875\u9762",level:3},{value:"\u5982\u679c\u6211\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u4fe1\u606f\u4f20\u9012\u7ed9\u67e5\u8be2\u51fd\u6570\u600e\u4e48\u529e",id:"\u5982\u679c\u6211\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u4fe1\u606f\u4f20\u9012\u7ed9\u67e5\u8be2\u51fd\u6570\u600e\u4e48\u529e",level:2},{value:"\u5982\u679c\u6211\u60f3\u5b9e\u73b0\u53cc\u5411\u65e0\u9650\u5217\u8868\u600e\u4e48\u529e",id:"\u5982\u679c\u6211\u60f3\u5b9e\u73b0\u53cc\u5411\u65e0\u9650\u5217\u8868\u600e\u4e48\u529e",level:2},{value:"\u5982\u679c\u6211\u60f3\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u663e\u793a\u9875\u9762\u5462",id:"\u5982\u679c\u6211\u60f3\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u663e\u793a\u9875\u9762\u5462",level:2},{value:"\u5982\u679c\u8981\u624b\u52a8\u66f4\u65b0\u65e0\u9650\u67e5\u8be2\u8be5\u600e\u4e48\u529e",id:"\u5982\u679c\u8981\u624b\u52a8\u66f4\u65b0\u65e0\u9650\u67e5\u8be2\u8be5\u600e\u4e48\u529e",level:2}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'\u901a\u8fc7"\u52a0\u8f7d\u66f4\u591a"\u6765\u9644\u52a0\u66f4\u591a\u7684\u6570\u636e\u5230\u73b0\u6709\u6570\u636e\u96c6\uff0c\u6216\u8005\u662f\u901a\u8fc7"\u65e0\u9650\u6eda\u52a8"\u6765\u5448\u73b0\u5217\u8868\uff0c\u8fd9\u4e9b\u90fd\u662f\u975e\u5e38\u5e38\u89c1\u7684 UI \u6a21\u5f0f\u3002\n\u6b63\u5de7\uff0cReact Query \u652f\u6301\u4e00\u4e2a\u6709\u7528\u7684',(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u7248\u672c\uff0c\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"\uff0c\u5f88\u9002\u5408\u7528\u6765\u67e5\u8be2\u8fd9\u4e9b\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4e00\u4e9b\u4e0d\u540c\u4e4b\u5904\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u73b0\u5728\u662f\u4e00\u4e2a\u5305\u542b\u65e0\u9650\u67e5\u8be2\u6570\u636e\u7684\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.pages"),"\u6570\u7ec4\u5305\u542b\u5df2\u83b7\u53d6\u7684\u5206\u9875\u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.pageParams"),"\u6570\u7ec4\u5305\u542b\u7528\u4e8e\u83b7\u53d6\u5206\u9875\u9875\u9762\u7684\u53c2\u6570"))),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage"),"\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam"),"\u9009\u9879\u53ef\u7528\u4e8e\u786e\u5b9a\u662f\u5426\u6709\u66f4\u591a\u6570\u636e\u8981\u52a0\u8f7d\u548c\u6216\u7528\u6765\u83b7\u53d6\u5b83\u6240\u9700\u7684\u4fe1\u606f\u3002\u6b64\u4fe1\u606f\u4f5c\u4e3a\u67e5\u8be2\u51fd\u6570\u4e2d\u7684\u9644\u52a0\u53c2\u6570\u63d0\u4f9b\uff08\u5728\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage"),"\u51fd\u6570\u65f6\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u8986\u76d6\u6b64\u4fe1\u606f\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasNextPage"),"\u5e03\u5c14\u503c\u73b0\u5728\u53ef\u7528\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam"),"\u8fd4\u56de\u7684\u503c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u7684\uff0c\u5219\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasPreviousPage"),"\u5e03\u5c14\u503c\u73b0\u5728\u53ef\u7528\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam"),"\u8fd4\u56de\u7684\u503c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u7684\uff0c\u5219\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetchingNextPage"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"isFetchingPreviousPage"),"\u5e03\u5c14\u503c\u6765\u533a\u5206\u540e\u53f0\u5237\u65b0\u72b6\u6001\u548c\u52a0\u8f7d\u66f4\u591a\u72b6\u6001")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"initialData"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"select"),"\u53c2\u6570\u65f6\uff0c\u8bf7\u786e\u4fdd\u5728\u91cd\u7ec4(restructure)\u6570\u636e\u65f6\u4ecd\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"data.pages"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"data.pageParams"),"\u5c5e\u6027\uff0c\u5426\u5219\u67e5\u8be2\u8fd4\u56de\u65f6\u5c06\u8986\u76d6\u4f60\u7684\u66f4\u6539\uff01")),(0,r.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u57fa\u4e8e\u6e38\u6807\u7d22\u5f15\u7684\uff0c\u4e14\u6bcf\u6b21\u8fd4\u56de\u4e09\u9879",(0,r.kt)("inlineCode",{parentName:"p"},"projects"),"\u7684 API\uff0c\u4ee5\u53ca\u4e00\u4e2a\u53ef\u7528\u4e8e\u83b7\u53d6\u4e0b\u4e00\u7ec4\u9879\u76ee\u7684\u6e38\u6807\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'fetch("/api/projects?cursor=0");\n// { data: [...], nextCursor: 3}\nfetch("/api/projects?cursor=3");\n// { data: [...], nextCursor: 6}\nfetch("/api/projects?cursor=6");\n// { data: [...], nextCursor: 9}\nfetch("/api/projects?cursor=9");\n// { data: [...] }\n')),(0,r.kt)("p",null,'\u6709\u4e86\u8fd9\u4e9b\u4fe1\u606f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa"\u52a0\u8f7d\u66f4\u591a"\u7684 UI\uff1a'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7b49\u5f85",(0,r.kt)("inlineCode",{parentName:"li"},"useInfiniteQuery"),"\u8bf7\u6c42\u7b2c\u4e00\u7ec4\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"li"},"getNextPageParam"),"\u4e2d\u8fd4\u56de\u7684\u7528\u4e8e\u4e0b\u4e00\u4e2a\u67e5\u8be2\u7684\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"\u51fd\u6570")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8bf7\u52ff\u4f7f\u7528\u53c2\u6570\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"fetchNextPage"),"\uff0c\u8fd9\u5f88\u91cd\u8981\u3002\u9664\u975e\u4f60\u5e0c\u671b\u5b83\u4eec\u8986\u76d6\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"getNextPageParam"),"\u51fd\u6570\u8fd4\u56de\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"pageParam"),"\u6570\u636e\u3002\n\u4f8b\u5982\uff0c\u4e0d\u8981\u8fd9\u6837\u505a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<button onClick={fetchNextPage} />"),"\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"onClick"),"\u7684\u4e8b\u4ef6\u5bf9\u8c61\u5f53\u4f5c\u4e00\u4e2a\u53c2\u6570\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"fetchNextPage"),"\u51fd\u6570\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInfiniteQuery } from "@tanstack/react-query";\n\nfunction Projects() {\n  const fetchProjects = async ({ pageParam = 0 }) => {\n    const res = await fetch("/api/projects?cursor=" + pageParam);\n    return res.json();\n  };\n\n  const {\n    data,\n    error,\n    fetchNextPage,\n    hasNextPage,\n    isFetching,\n    isFetchingNextPage,\n    status,\n  } = useInfiniteQuery({\n    queryKey: ["projects"],\n    queryFn: fetchProjects,\n    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,\n  });\n\n  return status === "loading" ? (\n    <p>Loading...</p>\n  ) : status === "error" ? (\n    <p>Error: {error.message}</p>\n  ) : (\n    <>\n      {data.pages.map((group, i) => (\n        <React.Fragment key={i}>\n          {group.projects.map((project) => (\n            <p key={project.id}>{project.name}</p>\n          ))}\n        </React.Fragment>\n      ))}\n      <div>\n        <button\n          onClick={() => fetchNextPage()}\n          disabled={!hasNextPage || isFetchingNextPage}\n        >\n          {isFetchingNextPage\n            ? "Loading more..."\n            : hasNextPage\n            ? "Load More"\n            : "Nothing more to load"}\n        </button>\n      </div>\n      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>\n    </>\n  );\n}\n')),(0,r.kt)("h2",{id:"\u5f53\u65e0\u9650\u67e5\u8be2\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48"},"\u5f53\u65e0\u9650\u67e5\u8be2\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48"),(0,r.kt)("p",null,"\u5f53\u65e0\u9650\u67e5\u8be2\u53d8\u5f97\u9648\u65e7(stale)\u4e14\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u65f6\uff0c\u5c06\u4ece\u7b2c\u4e00\u4e2a\u67e5\u8be2\u5f00\u59cb\uff0c",(0,r.kt)("em",{parentName:"p"},"\u6309\u7167\u5bf9\u5e94\u987a\u5e8f"),"\u83b7\u53d6\u6bcf\u4e2a\u7ec4\u3002\n\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u5373\u4f7f\u57fa\u7840\u6570\u636e\u53d1\u751f\u4e86\u4fee\u6539\uff0c\u6211\u4eec\u4e5f\u4e0d\u4f1a\u4f7f\u7528\u8fc7\u65f6\u7684\u6e38\u6807\uff0c\u4e5f\u4e0d\u4f1a\u5f97\u5230\u91cd\u590d\u7684\u8bb0\u5f55\u6216\u8df3\u8fc7\u8bb0\u5f55\u3002\n\u5982\u679c\u4ece queryCache \u4e2d\u5220\u9664\u4e86\u65e0\u9650\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u5219\u5206\u9875\u5c06\u5728\u521d\u59cb\u72b6\u6001\u4e0b\u91cd\u65b0\u542f\u52a8\uff0c\u4ec5\u8bf7\u6c42\u521d\u59cb\u7684\u7b2c\u4e00\u4e2a\u5206\u7ec4(initial group)\u3002"),(0,r.kt)("h3",{id:"\u91cd\u65b0\u83b7\u53d6\u9875\u9762"},"\u91cd\u65b0\u83b7\u53d6\u9875\u9762"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u4e3b\u52a8\u91cd\u65b0\u83b7\u53d6\u67d0\u4e00\u90e8\u5206\u9875\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"refetch"),"(\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"\u8fd4\u56de\u7684)\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"refetchPage"),"\u51fd\u6570\u6765\u505a\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { refetch } = useInfiniteQuery({\n  queryKey: ["projects"],\n  queryFn: fetchProjects,\n  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,\n});\n\n// \u53ea\u91cd\u65b0\u83b7\u53d6 index===0 \u7684\u9875\u9762\nrefetch({ refetchPage: (page, index) => index === 0 });\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u8be5\u65b9\u6cd5\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570(",(0,r.kt)("inlineCode",{parentName:"p"},"queryFilters"),")\u4f20\u9012\u7ed9 ",(0,r.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientrefetchqueries"},"queryClient.refetchQueries"),", ",(0,r.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientinvalidatequeries"},"queryClient.invalidateQueries")," \u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"../reference/QueryClient#queryclientresetqueries"},"queryClient.resetQueries")," \u6765\u505a\u5230\u540c\u6837\u7684\u6548\u679c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u7b7e\u540d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refetchPage: (page: TData, index: number, allPages: TData[]) => boolean"))),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u5bf9\u6bcf\u4e2a\u9875\u9762\u6267\u884c\u4e00\u6b21\uff0c\u53ea\u6709\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u7684\u9875\u9762\u624d\u4f1a\u88ab\u91cd\u65b0\u83b7\u53d6\u3002"),(0,r.kt)("h2",{id:"\u5982\u679c\u6211\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u4fe1\u606f\u4f20\u9012\u7ed9\u67e5\u8be2\u51fd\u6570\u600e\u4e48\u529e"},"\u5982\u679c\u6211\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u4fe1\u606f\u4f20\u9012\u7ed9\u67e5\u8be2\u51fd\u6570\u600e\u4e48\u529e"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"getNextPageParam"),"\u8fd4\u56de\u7684\u53d8\u91cf\u5c06\u63d0\u4f9b\u7ed9\u67e5\u8be2\u51fd\u6570\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u91cd\u5199\u5b83\u3002\n\u4f60\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u53d8\u91cf\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"fetchNextPage"),"\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u8986\u76d6\u9ed8\u8ba4\u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function Projects() {\n  const fetchProjects = ({ pageParam = 0 }) =>\n    fetch("/api/projects?cursor=" + pageParam);\n\n  const {\n    status,\n    data,\n    isFetching,\n    isFetchingNextPage,\n    fetchNextPage,\n    hasNextPage,\n  } = useInfiniteQuery({\n    queryKey: ["projects"],\n    queryFn: fetchProjects,\n    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,\n  });\n\n  // \u4f20\u9012\u4f60\u81ea\u5df1\u7684\u9875\u9762\u53c2\u6570\n  const skipToCursor50 = () => fetchNextPage({ pageParam: 50 });\n}\n')),(0,r.kt)("h2",{id:"\u5982\u679c\u6211\u60f3\u5b9e\u73b0\u53cc\u5411\u65e0\u9650\u5217\u8868\u600e\u4e48\u529e"},"\u5982\u679c\u6211\u60f3\u5b9e\u73b0\u53cc\u5411\u65e0\u9650\u5217\u8868\u600e\u4e48\u529e"),(0,r.kt)("p",null,"\u53cc\u5411\u5217\u8868\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"getPreviousPageParam"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"fetchPreviousPage"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"hasPreviousPage"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"isFetchingPreviousPage"),"\u5c5e\u6027\u548c\u51fd\u6570\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useInfiniteQuery({\n  queryKey: ["projects"],\n  queryFn: fetchProjects,\n  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,\n  getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,\n});\n')),(0,r.kt)("h2",{id:"\u5982\u679c\u6211\u60f3\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u663e\u793a\u9875\u9762\u5462"},"\u5982\u679c\u6211\u60f3\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u663e\u793a\u9875\u9762\u5462"),(0,r.kt)("p",null,"\u6709\u65f6\u4f60\u53ef\u80fd\u60f3\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u663e\u793a\u9875\u9762\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"select"),"\u9009\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useInfiniteQuery({\n  queryKey: ["projects"],\n  queryFn: fetchProjects,\n  select: (data) => ({\n    pages: [...data.pages].reverse(),\n    pageParams: [...data.pageParams].reverse(),\n  }),\n});\n')),(0,r.kt)("h2",{id:"\u5982\u679c\u8981\u624b\u52a8\u66f4\u65b0\u65e0\u9650\u67e5\u8be2\u8be5\u600e\u4e48\u529e"},"\u5982\u679c\u8981\u624b\u52a8\u66f4\u65b0\u65e0\u9650\u67e5\u8be2\u8be5\u600e\u4e48\u529e"),(0,r.kt)("p",null,"\u624b\u52a8\u5220\u9664\u7b2c\u4e00\u9875\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'queryClient.setQueryData(["projects"], (data) => ({\n  pages: data.pages.slice(1),\n  pageParams: data.pageParams.slice(1),\n}));\n')),(0,r.kt)("p",null,"\u4ece\u5355\u4e2a\u9875\u9762\u4e2d\u624b\u52a8\u5220\u9664\u67d0\u4e00\u4e2a\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const newPagesArray =\n  oldPagesArray?.pages.map((page) =>\n    page.filter((val) => val.id !== updatedId)\n  ) ?? [];\n\nqueryClient.setQueryData(["projects"], (data) => ({\n  pages: newPagesArray,\n  pageParams: data.pageParams,\n}));\n')),(0,r.kt)("p",null,"\u786e\u4fdd\u5206\u9875\u9875\u9762\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"pageParams"),"\u4fdd\u6301\u76f8\u540c\u7684\u6570\u636e\u7ed3\u6784\uff01"))}c.isMDXComponent=!0}}]);