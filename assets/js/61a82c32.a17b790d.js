"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,d=u["".concat(c,".").concat(g)]||u[g]||A[g]||p;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const p={id:"typescript",title:"TypeScript"},o=void 0,s={unversionedId:"getstarted/typescript",id:"getstarted/typescript",title:"TypeScript",description:"React Query \u73b0\u5728\u662f\u7528TypeScript\u5199\u7684\uff0c\u4ee5\u786e\u4fdd\u5e93\u548c\u9879\u76ee\u91cc\u6709\u5173\u7684\u4ee3\u7801\u662f\u7c7b\u578b\u5b89\u5168\u7684\uff01",source:"@site/react/getstarted/typescript.md",sourceDirName:"getstarted",slug:"/getstarted/typescript",permalink:"/react-query-web-i18n/react/getstarted/typescript",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/getstarted/typescript.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"typescript",title:"TypeScript"},sidebar:"zhCN",previous:{title:"\u6bd4\u8f83 | React Query vs SWR vs Apollo vs RTK Query vs React Router",permalink:"/react-query-web-i18n/react/getstarted/comparison"},next:{title:"GraphQL",permalink:"/react-query-web-i18n/react/getstarted/graphql"}},c={},l=[{value:"\u7c7b\u578b\u63a8\u5bfc",id:"\u7c7b\u578b\u63a8\u5bfc",level:2},{value:"\u7c7b\u578b\u7a84\u5316",id:"\u7c7b\u578b\u7a84\u5316",level:2},{value:"\u9519\u8bef\u5b57\u6bb5\u7684\u7c7b\u578b",id:"\u9519\u8bef\u5b57\u6bb5\u7684\u7c7b\u578b",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],i={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u73b0\u5728\u662f\u7528",(0,a.kt)("strong",{parentName:"p"},"TypeScript"),"\u5199\u7684\uff0c\u4ee5\u786e\u4fdd\u5e93\u548c\u9879\u76ee\u91cc\u6709\u5173\u7684\u4ee3\u7801\u662f\u7c7b\u578b\u5b89\u5168\u7684\uff01"),(0,a.kt)("p",null,"\u9700\u8981\u8bb0\u4f4f\u7684\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u9700\u8981\u4f7f\u7528 TypeScript v4.1 \u6216\u66f4\u9ad8\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8be5\u5e93\u4e2d\u7684\u7c7b\u578b\u6240\u505a\u7684\u66f4\u6539\u88ab\u8ba4\u4e3a\u662f",(0,a.kt)("strong",{parentName:"li"},"\u975e\u7834\u574f\u6027(non-breaking)"),"\u7684\uff0c\u5e76\u4e14\u901a\u5e38\u4ee5",(0,a.kt)("strong",{parentName:"li"},"\u8865\u4e01(\u5c0f\u7248\u672c\u53f7)"),"\u7684\u5f62\u5f0f\u53d1\u5e03\uff08\u6bcf\u6b21\u7c7b\u578b\u7684\u589e\u5f3a\u90fd\u4f1a\u5728\u4e3b\u8981\u7248\u672c\u4e2d!\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u70c8\u5efa\u8bae\u60a8",(0,a.kt)("strong",{parentName:"li"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"strong"},"react-query"),"\u5305\u7248\u672c\u9501\u5b9a\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u5c0f\u7248\u672c\u53f7\u4e0a\uff0c\u5e76\u505a\u597d\u5728\u4efb\u4f55\u7248\u672c\u4e4b\u95f4\u7c7b\u578b\u90fd\u4f1a\u56fa\u5b9a\u6216\u5347\u7ea7\u7684\u6253\u7b97"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u7c7b\u578b\u65e0\u5173\u7684\u516c\u5171 API \u4ecd\u7136\u975e\u5e38\u4e25\u683c\u5730\u9075\u5faa semver \u7248\u672c\u5b88\u5219\u3002")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u63a8\u5bfc"},"\u7c7b\u578b\u63a8\u5bfc"),(0,a.kt)("p",null,"React Query \u4e2d\u7684\u7c7b\u578b\u901a\u5e38\u53ef\u4ee5\u5f88\u597d\u5730\u88ab ts \u81ea\u52a8\u63a8\u5bfc\uff0c\u56e0\u6b64\u4f60\u4e0d\u9700\u8981\u81ea\u5df1\u6765\u63d0\u4f9b\u7c7b\u578b\u6ce8\u91ca"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { data } = useQuery({\n  //    ^? const data: number | undefined\n  queryKey: ["test"],\n  queryFn: () => Promise.resolve(5),\n});\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFC8MQAdqnhIAJnRh0icALwoM2XHgAUAbSqDkIAEa4qAXQA0cFQEo5APjgAFciGAYAdLVQQANgDd0KgKxmzXgB6ILgw8IA9AH5eIA"},"typescript playground")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { data } = useQuery({\n  //      ^? const data: string | undefined\n  queryKey: ["test"],\n  queryFn: () => Promise.resolve(5),\n  select: (data) => data.toString(),\n});\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFC8MQAdqnhIAJnRh0icALwoM2XHgAUAbSox0IqgF0ANHBUBKOQD44ABXIhgGAHS1UEADYA3dCoCsxw0gwu6EwAXHASUuZhknT2MBAAyjBQwIIA5iaExrwA9Nlw+QUAegD8vEA"},"typescript playground")),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"queryFn")," \u6709\u4e00\u4e2a\u5b9a\u4e49\u826f\u597d\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u90a3\u4e48\u8fd9\u79cd\u65b9\u6cd5\u6700\u6709\u6548\u3002\n\u8bf7\u8bb0\u4f4f\uff0c\u5927\u591a\u6570\u7684\u6570\u636e\u83b7\u53d6\u5e93\u90fd\u4f1a\u9ed8\u8ba4\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u6765\u586b\u5145\uff0c\u6240\u4ee5\u8bf7\u786e\u4fdd\u5c06\u5176\u63d0\u53d6\u5230\u4e00\u4e2a\u62e5\u6709\u6b63\u786e\u7c7b\u578b\u7684\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const fetchGroups = (): Promise<Group[]> =>\n  axios.get("/groups").then((response) => response.data);\n\nconst { data } = useQuery({ queryKey: ["groups"], queryFn: fetchGroups });\n//      ^? const data: Group[] | undefined\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFCiSw4dAB7AIqUuUpURY1Nx68YeMOjgBxcsjBwAvIjjAAJgC44AO2QgARriK9eDCOdTwS6GAwAWmiNon6ABQAlGYAClLAGAA8vtoA2gC6AHx6qbLiAHQA5h6BVAD02Vpg8sGZMF7o5oG0qJAuarqpdQ0YmUZ0MHTBDjxOLvBInd1EeigY2Lh4gfFUxX6lVIkANKQe3nGlvTwFBXAHhwB6APxwA65wI3RmW0lwAD4o5kboJMDm6Ea8QA"},"typescript playground")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u7a84\u5316"},"\u7c7b\u578b\u7a84\u5316"),(0,a.kt)("p",null,"React Query \u5bf9\u67e5\u8be2\u7ed3\u679c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions"},"\u53ef\u8fa8\u8bc6\u7684\u8054\u5408\u7c7b\u578b(discriminated union type)"),"\uff0c\u5176\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u5b57\u6bb5\u548c\u6d3e\u751f\u7684\u5e03\u5c14\u72b6\u6001\u5b57\u6bb5\u533a\u5206\u3002\u4f8b\u5982\u4e0b\u9762\u7684\u793a\u4f8b\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"success"),"\u7684\u76f8\u5173\u72b6\u6001\u6765\u786e\u4fdd",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u662f\u5df2\u88ab\u5b9a\u4e49\u548c\u8d4b\u503c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { data, isSuccess } = useQuery({\n  queryKey: ["test"],\n  queryFn: () => Promise.resolve(5),\n});\n\nif (isSuccess) {\n  data;\n  //  ^? const data: number\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFC8MQAdqnhIAJnRh0ANHGCoAysgYN0qVETgBeFBmy48ACgDaVGGphUAurMMBKbQD44ABXIh56AHS1UEADYAbuiGAKx2dry8wCRwhvJKKmqoDgi8cBlwElK8APS5GQB6APy8hLxAA"},"typescript playground")),(0,a.kt)("h2",{id:"\u9519\u8bef\u5b57\u6bb5\u7684\u7c7b\u578b"},"\u9519\u8bef\u5b57\u6bb5\u7684\u7c7b\u578b"),(0,a.kt)("p",null,"error \u7684\u7c7b\u578b\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"\u3002\n\u8fd9\u548c TypeScript \u5728 catch \u8bed\u53e5\u4e2d\u7ed9\u51fa\u7684\u9ed8\u8ba4\u503c\u4e00\u81f4(\u8bf7\u770b",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/#use-unknown-catch-variables"},"useUnknownInCatchVariables"),")\u3002\n\u5904\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\u6700\u5b89\u5168\u7684\u65b9\u6cd5\u662f\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u68c0\u67e5\uff1b\u6216\u8005\u662f\u663e\u5f0f\u5730\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\u7684\u7c7b\u578b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { error } = useQuery({ queryKey: ["groups"], queryFn: fetchGroups });\n//      ^? const error: unknown\n\nif (error instanceof Error) {\n  error;\n  // ^? const error: Error\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFCiSw4dAB7AIqUuUpURY1Nx68YeMOjgBxcsjBwAvIjjAAJgC44AO2QgARriK9eDCOdTwS6GAwAWmiNon6ABQAlGYAClLAGAA8vtoA2gC6AHx6qbLiAHQA5h6BVAD02Vpg8sGZMF7o5oG0qJAuarqpdQ0YmUZ0MHTBDjxOLvBIuORQRHooGNi4eIHxVMV+pVSJADSkHt5xpb08BQVwh0cAegD8fcAkcIEj0IaDdOYM6BBXAKJQo8GIvIe3ULx9nAzrxCEA"},"typescript playground")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { error } = useQuery<Group[], Error>(["groups"], fetchGroups);\n//      ^? const error: Error | null\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgVwM4FMCKz1QJ5wC+cAZlBCHAORToCGAxjALQCOO+VAsAFCiSw4dAB7AIqUuUpURY1Nx68YeMOjgBxcsjBwAvIjjAAJgC44AO2QgARriK9eDCOdTwS6GAwAWmiNon6ABQAlGYAClLAGAA8vtoA2gC6AHx6qbLiAHQA5h6BVAD02Vpg8sGZMF7o5oG0qJAuarqpdQ0YmUZ0MHTBDjxOLvBIuORQRHooGNi4eLElSQA0cACiUKPJgfFUxX6lVIlL7p4+Jai9PAUFcNc3AHoA-LxAA"},"typescript playground")),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5173\u4e8e\u5728 Typescript \u4e2d\u7c7b\u578b\u63a8\u65ad\u7684\u6280\u5de7\u548c\u5efa\u8bae\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/community/tkdodos-blog#6-react-query-and-typescript"},"\u6b64\u793e\u533a\u8d44\u6e90")))}u.isMDXComponent=!0}}]);