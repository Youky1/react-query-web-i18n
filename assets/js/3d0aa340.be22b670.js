"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8829],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||u;return t?n.createElement(y,s(s({ref:r},c),{},{components:t})):n.createElement(y,s({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,s=new Array(u);s[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<u;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8369:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const u={id:"parallel-queries",title:"\u5e76\u884c\u67e5\u8be2 parallel-queries"},s=void 0,o={unversionedId:"guides&concepts/parallel-queries",id:"guides&concepts/parallel-queries",title:"\u5e76\u884c\u67e5\u8be2 parallel-queries",description:"\u201c\u5e76\u884c\u201d\u67e5\u8be2\u662f\u5e76\u884c\u6267\u884c\u7684\u67e5\u8be2\uff0c\u6216\u8005\u662f\u540c\u65f6\u6267\u884c\u7684\u67e5\u8be2\u3002\u7528\u4ee5\u6700\u5927\u5316\u67e5\u8be2\u5e76\u53d1\u6027\u3002",source:"@site/v3-react/guides&concepts/parallel-queries.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/parallel-queries",permalink:"/react-query-web-i18n/v3-react/guides&concepts/parallel-queries",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/guides&concepts/parallel-queries.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"parallel-queries",title:"\u5e76\u884c\u67e5\u8be2 parallel-queries"},sidebar:"default",previous:{title:"\u67e5\u8be2\u51fd\u6570 query-functions",permalink:"/react-query-web-i18n/v3-react/guides&concepts/query-functions"},next:{title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2 dependent-queries",permalink:"/react-query-web-i18n/v3-react/guides&concepts/dependent-queries"}},i={},l=[{value:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2",id:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2",level:2},{value:"\u4f7f\u7528<code>useQueries</code>\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2",id:"\u4f7f\u7528usequeries\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2",level:2}],c={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u201c\u5e76\u884c\u201d\u67e5\u8be2\u662f\u5e76\u884c\u6267\u884c\u7684\u67e5\u8be2\uff0c\u6216\u8005\u662f\u540c\u65f6\u6267\u884c\u7684\u67e5\u8be2\u3002\u7528\u4ee5\u6700\u5927\u5316\u67e5\u8be2\u5e76\u53d1\u6027\u3002"),(0,a.kt)("h2",{id:"\u624b\u52a8\u5e76\u884c\u67e5\u8be2"},"\u624b\u52a8\u5e76\u884c\u67e5\u8be2"),(0,a.kt)("p",null,"\u5982\u679c\u5e76\u884c\u67e5\u8be2\u7684\u6570\u91cf\u6ca1\u6709\u53d8\u5316\uff0c\u5219",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u9700\u4ed8\u51fa\u989d\u5916\u7684\u52aa\u529b"),"\u5373\u53ef\u4f7f\u7528\u5e76\u884c\u67e5\u8be2\u3002\n\u53ea\u9700\u5e76\u6392\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684 React Query \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),"Hooks \u5373\u53ef\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function App () {\n  // \u4e0b\u9762\u7684\u67e5\u8be2\u5c06\u81ea\u52a8\u5730\u5e76\u884c\u6267\u884c\n  const usersQuery = useQuery('users', fetchUsers)\n  const teamsQuery = useQuery('teams', fetchTeams)\n  const projectsQuery = useQuery('projects', fetchProjects)\n  ...\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 React \u7684 suspense \u6a21\u5f0f\u4e0b\u4f7f\u7528 React Query \u65f6\uff0c\u8fd9\u79cd\u5e76\u884c\u6a21\u5f0f\u4e0d\u8d77\u4f5c\u7528\u3002\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u67e5\u8be2\u5c06\u5728\u5185\u90e8\u629b\u51fa Promise\uff0c\u5e76\u4e14\u5c06\u5728\u5176\u4ed6\u67e5\u8be2\u8fd0\u884c\u4e4b\u524d\u6302\u8d77\u7ec4\u4ef6\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u8981\u4e48\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"useQueries"),"Hook(\u8fd9\u662f\u5efa\u8bae\u7684)\uff0c\u8981\u4e48\u4e3a\u6bcf\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u5b9e\u4f8b\u7528\u5355\u72ec\u7684\u7ec4\u4ef6\u7f16\u6392\u4f60\u81ea\u5df1\u7684\u5e76\u884c\u5ea6(\u8fd9\u5f88\u7cdf\u7cd5)\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528usequeries\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h2"},"useQueries"),"\u7684\u52a8\u6001\u5e76\u884c\u67e5\u8be2"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6267\u884c\u7684\u67e5\u8be2\u6570\u91cf\u5728\u6bcf\u6b21\u6e32\u67d3\u4e4b\u95f4\u4f1a\u53d8\u5316\uff0c\u5219\u4e0d\u80fd\u4f7f\u7528\u624b\u52a8\u67e5\u8be2\uff0c\u56e0\u4e3a\u8fd9\u5c06\u8fdd\u53cd hook \u7684\u89c4\u5219\u3002\u76f8\u53cd\uff0cReact Query \u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"useQueries"),"\u7684 Hook\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u52a8\u6001\u5730\u5e76\u884c\u6267\u884c\u5c3d\u53ef\u80fd\u591a\u7684\u67e5\u8be2\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useQueries"),"\u63a5\u53d7\u4e00\u7ec4",(0,a.kt)("a",{parentName:"p",href:"./query-functions#%E4%BD%BF%E7%94%A8%E6%9F%A5%E8%AF%A2%E5%AF%B9%E8%B1%A1%E4%BB%A3%E6%9B%BF%E5%8F%82%E6%95%B0"},(0,a.kt)("strong",{parentName:"a"},"\u4f5c\u4e3a\u67e5\u8be2\u914d\u7f6e\u7684\u5bf9\u8c61")),"\uff0c\u5e76\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u67e5\u8be2\u7684\u7ed3\u679c"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function App({ users }) {\n  const userQueries = useQueries(\n    users.map((user) => {\n      return {\n        queryKey: ["user", user.id],\n        queryFn: () => fetchUserById(user.id),\n      };\n    }),\n  );\n}\n')))}p.isMDXComponent=!0}}]);