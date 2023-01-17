"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,m=d["".concat(c,".").concat(y)]||d[y]||s[y]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"placeholder-query-data",title:"\u67e5\u8be2\u6570\u636e\u5360\u4f4d\u7b26 Placeholder Query Data"},o=void 0,i={unversionedId:"guides&concepts/placeholder-query-data",id:"guides&concepts/placeholder-query-data",title:"\u67e5\u8be2\u6570\u636e\u5360\u4f4d\u7b26 Placeholder Query Data",description:"\u4ec0\u4e48\u662f\u5360\u4f4d\u6570\u636e\uff1f",source:"@site/react/guides&concepts/placeholder-query-data.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/placeholder-query-data",permalink:"/react-query-web-i18n/react/guides&concepts/placeholder-query-data",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/guides&concepts/placeholder-query-data.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"placeholder-query-data",title:"\u67e5\u8be2\u6570\u636e\u5360\u4f4d\u7b26 Placeholder Query Data"},sidebar:"zhCN",previous:{title:"\u65e0\u9650\u67e5\u8be2 Infinite Queries",permalink:"/react-query-web-i18n/react/guides&concepts/infinite-queries"},next:{title:"\u521d\u59cb\u5316\u7684\u67e5\u8be2\u6570\u636e Initial Query Data",permalink:"/react-query-web-i18n/react/guides&concepts/initial-query-data"}},c={},u=[{value:"\u4ec0\u4e48\u662f\u5360\u4f4d\u6570\u636e\uff1f",id:"\u4ec0\u4e48\u662f\u5360\u4f4d\u6570\u636e",level:2},{value:"\u6765\u81ea\u503c\u7684\u5360\u4f4d\u6570\u636e",id:"\u6765\u81ea\u503c\u7684\u5360\u4f4d\u6570\u636e",level:2},{value:"\u6765\u81ea\u51fd\u6570\u7684\u5360\u4f4d\u6570\u636e",id:"\u6765\u81ea\u51fd\u6570\u7684\u5360\u4f4d\u6570\u636e",level:3},{value:"\u6765\u81ea\u7f13\u5b58\u7684\u5360\u4f4d\u6570\u636e",id:"\u6765\u81ea\u7f13\u5b58\u7684\u5360\u4f4d\u6570\u636e",level:3},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5360\u4f4d\u6570\u636e"},"\u4ec0\u4e48\u662f\u5360\u4f4d\u6570\u636e\uff1f"),(0,a.kt)("p",null,"\u5360\u4f4d\u6570\u636e\u4f7f\u67e5\u8be2\u7684\u884c\u4e3a\u5c31\u50cf\u5df2\u5177\u6709\u6570\u636e\u4e00\u6837\uff0c\u7c7b\u4f3c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"initialData"),"\u9009\u9879\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u6ca1\u6709\u88ab\u6301\u4e45\u5316\u5230\u7f13\u5b58\u4e2d"),"\u3002\n\u5982\u679c\u4e00\u8fb9\u6709\u8db3\u591f\u591a\u7684\u90e8\u5206\u6570\u636e(\u6216\u8005\u5b8c\u6574\u7684 mock \u6570\u636e)\u6765\u5448\u73b0\u6570\u636e\u5e94\u8be5\u5448\u73b0\u7684\u6837\u5f0f\uff0c\u4e00\u8fb9\u540c\u65f6\u5728\u540e\u53f0\u83b7\u53d6\u5b9e\u9645\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u5c31\u5f88\u65b9\u4fbf\u4e86\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u793a\u4f8b\uff1a\u5355\u4e2a\u535a\u5ba2\u5e16\u5b50\u7684\u67e5\u8be2\u53ef\u4ee5\u770b\u4f5c\u662f\uff1a\u4ece\u535a\u5ba2\u5e16\u5b50\u7684\u7236\u5217\u8868\u4e2d\u63d0\u53d6"\u9884\u89c8"\u6570\u636e\uff0c\u8be5\u5217\u8868\u4ec5\u5305\u62ec\u6807\u9898\u548c\u5e16\u5b50\u6b63\u6587\u7684\u4e00\u5c0f\u6bb5\u3002\n\u6b64\u65f6\uff0c\u4f60\u53ef\u80fd\u4e0d\u5e0c\u671b\u5c06\u6b64\u90e8\u5206\u6570\u636e\u6301\u4e45\u5316\u5230\u5355\u4e2a\u67e5\u8be2\u7684\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u4f46\u662f\u5b83\u5bf9\u4e8e\u5728\u5b9e\u9645\u67e5\u8be2\u8fd8\u5728\u83b7\u53d6\u6574\u4e2a\u5bf9\u8c61\u65f6\u5c3d\u53ef\u80fd\u5feb\u5730\u663e\u793a\u5185\u5bb9\u5e03\u5c40\u975e\u5e38\u6709\u7528\u3002')),(0,a.kt)("p",null,"\u6709\u51e0\u79cd\u5728\u9700\u8981\u4e4b\u524d\u5c06\u67e5\u8be2\u7684\u5360\u4f4d\u6570\u636e\u63d0\u4f9b\u7ed9\u7f13\u5b58\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u7684\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u67e5\u8be2\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"li"},"placeholderData"),"\uff0c\u4ee5\u4fbf\u5728\u67e5\u8be2\u4e3a\u7a7a\u65f6\u9884\u586b\u5145\u5176\u7f13\u5b58"))),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u5f0f\u5730\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./prefetching"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"a"},"queryClient"),"\u548c",(0,a.kt)("inlineCode",{parentName:"a"},"placeholderData"),"\u9009\u9879\u9884\u53d6\u6216\u53d6\u6570\u636e"))))),(0,a.kt)("h2",{id:"\u6765\u81ea\u503c\u7684\u5360\u4f4d\u6570\u636e"},"\u6765\u81ea\u503c\u7684\u5360\u4f4d\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function Todos() {\n  const result = useQuery({\n    queryKey: ["todos"],\n    queryFn: () => fetch("/todos"),\n    placeholderData: placeholderTodos,\n  });\n}\n')),(0,a.kt)("h3",{id:"\u6765\u81ea\u51fd\u6570\u7684\u5360\u4f4d\u6570\u636e"},"\u6765\u81ea\u51fd\u6570\u7684\u5360\u4f4d\u6570\u636e"),(0,a.kt)("p",null,"\u5982\u679c\u8bbf\u95ee\u67e5\u8be2\u7684\u5360\u4f4d\u6570\u636e\u7684\u8fc7\u7a0b\u5f88\u7e41\u7410\uff0c\u6216\u8005\u53ea\u662f\u4e0d\u60f3\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u6267\u884c\u8fd9\u79cd\u64cd\u4f5c\uff0c\u5219\u53ef\u4ee5\u5c06\u8be5\u503c memoized \u6216\u5c06 memoized \u7684\u51fd\u6570\u4f5c\u4e3a\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"placeholderData"),"\u503c\u4f20\u9012\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function Todos() {\n  const placeholderData = useMemo(() => generateFakeTodos(), []);\n  const result = useQuery({\n    queyKey: ["todos"],\n    queryFn: () => fetch("/todos"),\n    placeholderData,\n  });\n}\n')),(0,a.kt)("h3",{id:"\u6765\u81ea\u7f13\u5b58\u7684\u5360\u4f4d\u6570\u636e"},"\u6765\u81ea\u7f13\u5b58\u7684\u5360\u4f4d\u6570\u636e"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4ece\u53e6\u4e00\u4e2a\u67e5\u8be2\u7684\u7f13\u5b58\u7ed3\u679c\u4e2d\u6765\u4e3a\u67e5\u8be2\u63d0\u4f9b\u5360\u4f4d\u6570\u636e\u3002\n\u8fd9\u65b9\u9762\u7684\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u4f8b\u5b50\u662f\uff0c\u4ece\u535a\u5ba2\u5e16\u5b50\u5217\u8868\u76f8\u5173\u7684\u67e5\u8be2\u4e2d\u641c\u7d22\u7f13\u5b58\u7684\u6570\u636e\u4ee5\u83b7\u53d6\u5e16\u5b50\u7684\u9884\u89c8\u7248\u672c\uff0c\u7136\u540e\u5c06\u5176\u7528\u4f5c\u5355\u4e2a\u6587\u7ae0\u67e5\u8be2\u7684\u5360\u4f4d\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function Todo({ blogPostId }) {\n  const result = useQuery({\n    queryKey: ["blogPost", blogPostId],\n    queryFn: () => fetch(`/blogPosts/${blogPostId}`),\n    placeholderData: () => {\n      // \u4f7f\u7528 `blogPosts` \u67e5\u8be2\u4e2d\u7684\u9884\u89c8\u7248(\u8f83\u5c0f\u7684)\u4f5c\u4e3a\u8fd9\u4e2ablogPost\u67e5\u8be2\u7684\u5360\u4f4d\u6570\u636e\n      return queryClient\n        .getQueryData(["blogPosts"])\n        ?.find((d) => d.id === blogPostId);\n    },\n  });\n}\n')),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5982\u679c\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Initial Data"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Placeholder Data"),"\u6709\u56f0\u60d1\u7684\u8bdd\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/community/tkdodos-blog#9-placeholder-and-initial-data-in-react-query"},"\u6b64\u793e\u533a\u5185\u5bb9(\u82f1\u6587)")))}d.isMDXComponent=!0}}]);