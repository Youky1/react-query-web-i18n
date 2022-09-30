"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[5718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,m=d["".concat(i,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c Query Keys"},u=void 0,s={unversionedId:"guides&concepts/query-keys",id:"version-v4/guides&concepts/query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c Query Keys",description:"React Query \u5728\u5185\u90e8\u57fa\u4e8e\u67e5\u8be2\u952e\u503c\u6765\u7ba1\u7406\u67e5\u8be2\u7f13\u5b58\u3002",source:"@site/versioned_docs/version-v4/guides&concepts/query-keys.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/query-keys",permalink:"/react-query-web-i18n/guides&concepts/query-keys",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v4/guides&concepts/query-keys.md",tags:[],version:"v4",lastUpdatedAt:1664524864,formattedLastUpdatedAt:"9/30/2022",frontMatter:{id:"query-keys",title:"\u67e5\u8be2\u7684\u952e\u503c Query Keys"},sidebar:"zhCN",previous:{title:"\u67e5\u8be2 Queries",permalink:"/react-query-web-i18n/guides&concepts/queries"},next:{title:"\u67e5\u8be2\u51fd\u6570 Query Functions",permalink:"/react-query-web-i18n/guides&concepts/query-functions"}},i={},l=[{value:"\u6700\u7b80\u5f62\u5f0f",id:"\u6700\u7b80\u5f62\u5f0f",level:3},{value:"\u5305\u542b\u590d\u6742\u5bf9\u8c61\u7684\u6570\u7ec4",id:"\u5305\u542b\u590d\u6742\u5bf9\u8c61\u7684\u6570\u7ec4",level:3},{value:"\u67e5\u8be2\u952e\u503c\u7684\u6563\u5217\u662f\u786e\u5b9a\u7684(hashed deterministically)\uff01",id:"\u67e5\u8be2\u952e\u503c\u7684\u6563\u5217\u662f\u786e\u5b9a\u7684hashed-deterministically",level:3},{value:"\u5982\u679c\u4f60\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\uff0c\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d",id:"\u5982\u679c\u4f60\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React Query \u5728\u5185\u90e8\u57fa\u4e8e\u67e5\u8be2\u952e\u503c\u6765\u7ba1\u7406\u67e5\u8be2\u7f13\u5b58\u3002\n\u4f20\u9012\u7ed9 React Query \u7684\u67e5\u8be2\u952e\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4\u3002\n\u8be5\u6570\u7ec4\u53ef\u4ee5\u662f\u7b80\u5355\u7684\u4ec5\u6709\u5355\u4e2a\u5e38\u91cf\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u5305\u542b\u8bb8\u591a\u5d4c\u5957\u5bf9\u8c61\u53ca\u53d8\u91cf\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u3002\n\u53ea\u8981\u6570\u7ec4\u7684\u5185\u5bb9\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u5e8f\u5217\u5316\u7684"),"\uff0c\u5e76\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u67e5\u8be2\u7684\u6570\u636e\u6765\u8bf4\u5b83\u662f\u552f\u4e00\u7684"),"\uff0c\u90a3\u5b83\u5c31\u662f\u5408\u6cd5\u7684\uff01"),(0,a.kt)("h3",{id:"\u6700\u7b80\u5f62\u5f0f"},"\u6700\u7b80\u5f62\u5f0f"),(0,a.kt)("p",null,"\u952e\u503c\u6700\u7b80\u5355\u5f62\u5f0f\u662f\u4e00\u4e2a\u5e26\u6709\u5355\u4e2a\u5e38\u91cf\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u3002\u5728\u4ee5\u4e0b\u60c5\u51b5\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u4f7f\u7528\u8fd9\u79cd\u683c\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u7528\u7684",(0,a.kt)("em",{parentName:"li"},"List/Index"),"\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u975e\u5206\u5c42\u7684(Non-hierarchical)\u8d44\u6e90")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// A list of todos\nuseQuery(['todos'], ...); // queryKey === ['todos']\n\n// Something else, whatever!\nuseQuery(['somethingSpecial'], ...); // queryKey === ['somethingSpecial']\n")),(0,a.kt)("h3",{id:"\u5305\u542b\u590d\u6742\u5bf9\u8c61\u7684\u6570\u7ec4"},"\u5305\u542b\u590d\u6742\u5bf9\u8c61\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u5f53\u67e5\u8be2\u9700\u8981\u66f4\u591a\u4fe1\u606f\u6765\u552f\u4e00\u5730\u63cf\u8ff0\u5176\u6570\u636e\u65f6\uff0c\u6570\u7ec4\u53ef\u4ee5\u4e3a\u5e26\u6709\u4efb\u610f\u6570\u91cf\u5b57\u7b26\u4e32\u53ca\u53ef\u5e8f\u5217\u5316\u5bf9\u8c61\u7684\u5f62\u5f0f\u3002\u8fd9\u79cd\u5f62\u5f0f\u5bf9\u4e8e\u4ee5\u4e0b\u60c5\u51b5\u5f88\u6709\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u5c42\u6216\u5d4c\u5957\u7684\u8d44\u6e90",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u9700\u8981\u4f20\u9012 ID\u3001\u7d22\u5f15\u6216\u5176\u4ed6\u539f\u8bed\u6765\u552f\u4e00\u5730\u6807\u8bc6\u8be5\u8d44\u6e90"))),(0,a.kt)("li",{parentName:"ul"},"\u5e26\u6709\u9644\u52a0\u53c2\u6570\u7684\u67e5\u8be2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u9700\u8981\u4f20\u9012\u4e00\u4e2a\u4f5c\u4e3a\u9644\u52a0\u4fe1\u606f\u7684\u5bf9\u8c61")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// An individual todo\nuseQuery(['todo', 5], ...);\n\n// An individual todo in a \"preview\" format\nuseQuery(['todo', 5, { preview: true }], ...);\n\n// A list of todos that are \"done\"\nuseQuery(['todos', { type: 'done' }], ...);\n")),(0,a.kt)("h3",{id:"\u67e5\u8be2\u952e\u503c\u7684\u6563\u5217\u662f\u786e\u5b9a\u7684hashed-deterministically"},"\u67e5\u8be2\u952e\u503c\u7684\u6563\u5217\u662f\u786e\u5b9a\u7684(hashed deterministically)\uff01"),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c\u4e0d\u7ba1\u5bf9\u8c61\u4e2d\u952e\u503c\u7684\u987a\u5e8f\u5982\u4f55\uff0c\u4ee5\u4e0b\u6240\u6709\u67e5\u8be2\u90fd\u88ab\u8ba4\u4e3a\u662f\u76f8\u7b49\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useQuery(['todos', { status, page }], ...);\nuseQuery(['todos', { page, status }], ...);\nuseQuery(['todos', { page, status, other: undefined }], ...);\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u4ee5\u4e0b\u67e5\u8be2\u952e\u503c\u4e0d\u76f8\u7b49\u3002\u8fd9\u4e9b\u6570\u7ec4\u9879\u7684\u987a\u5e8f\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u6563\u5217\u4fe1\u606f\u5e76\u4e0d\u76f8\u540c\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useQuery(['todos', status, page], ...);\nuseQuery(['todos', page, status], ...);\nuseQuery(['todos', undefined, page, status], ...);\n")),(0,a.kt)("h2",{id:"\u5982\u679c\u4f60\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d"},"\u5982\u679c\u4f60\u7684\u67e5\u8be2\u529f\u80fd\u4f9d\u8d56\u4e8e\u53d8\u91cf\uff0c\u5219\u5c06\u5176\u5305\u542b\u5728\u67e5\u8be2\u952e\u503c\u4e2d"),(0,a.kt)("p",null,"\u7531\u4e8e\u67e5\u8be2\u952e\u503c\u552f\u4e00\u5730\u63cf\u8ff0\u4e86\u9700\u8981\u83b7\u53d6\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5b83\u4eec\u5e94\u8be5\u5305\u62ec\u6240\u6709\u90a3\u4e9b\u5728\u67e5\u8be2\u51fd\u6570\u4e2d\u4f7f\u7528\u5230\u7684",(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u66f4\u6539\u7684\u53d8\u91cf"),"\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function Todos({ todoId }) {\n  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));\n}\n')),(0,a.kt)("h2",{id:"\u5ef6\u4f38\u9605\u8bfb"},"\u5ef6\u4f38\u9605\u8bfb"),(0,a.kt)("p",null,"\u5982\u4f55\u5728\u5927\u578b\u5e94\u7528\u4e2d\u6b63\u786e\u7684\u7ec4\u7ec7\u67e5\u8be2\u952e\u503c\uff1f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/community/tkdodos-blog?#8-effective-react-query-keys"},"\u6b64\u793e\u533a\u8d44\u6e90(\u82f1\u6587)")))}p.isMDXComponent=!0}}]);