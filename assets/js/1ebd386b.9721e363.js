"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"quick-start",title:"\u5feb\u901f\u5165\u95e8"},i=void 0,u={unversionedId:"getstarted/quick-start",id:"getstarted/quick-start",title:"\u5feb\u901f\u5165\u95e8",description:"\u8be5\u793a\u4f8b\u975e\u5e38\u7b80\u8981\u5730\u8bf4\u660e\u4e86 React Query \u7684 3 \u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a",source:"@site/docs/getstarted/quick-start.md",sourceDirName:"getstarted",slug:"/getstarted/quick-start",permalink:"/react-query-web-i18n/next/getstarted/quick-start",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/getstarted/quick-start.md",tags:[],version:"current",lastUpdatedAt:1660151026,formattedLastUpdatedAt:"8/10/2022",frontMatter:{id:"quick-start",title:"\u5feb\u901f\u5165\u95e8"},sidebar:"zhCN",previous:{title:"\u5b89\u88c5",permalink:"/react-query-web-i18n/next/getstarted/installation"},next:{title:"\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177",permalink:"/react-query-web-i18n/next/getstarted/devtools"}},c={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u975e\u5e38\u7b80\u8981\u5730\u8bf4\u660e\u4e86 React Query \u7684 3 \u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/next/guides&concepts/queries"},"\u67e5\u8be2 Queries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/next/guides&concepts/mutations"},"\u4fee\u6539 Mutations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/react-query-web-i18n/next/guides&concepts/query-invalidation"},"\u67e5\u8be2\u9519\u8bef\u5904\u7406 Query Invalidation"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  useQuery,\n  useMutation,\n  useQueryClient,\n  QueryClient,\n  QueryClientProvider,\n} from "@tanstack/react-query";\nimport { getTodos, postTodo } from "../my-api";\n\n// \u521b\u5efa\u4e00\u4e2a client\nconst queryClient = new QueryClient();\n\nfunction App() {\n  return (\n    // \u63d0\u4f9b client \u81f3 App\n    <QueryClientProvider client={queryClient}>\n      <Todos />\n    </QueryClientProvider>\n  );\n}\n\nfunction Todos() {\n  // \u8bbf\u95ee client\n  const queryClient = useQueryClient();\n\n  // \u67e5\u8be2\n  const query = useQuery(["todos"], getTodos);\n\n  // \u4fee\u6539\n  const mutation = useMutation(postTodo, {\n    onSuccess: () => {\n      // \u9519\u8bef\u5904\u7406\u548c\u5237\u65b0\n      queryClient.invalidateQueries(["todos"]);\n    },\n  });\n\n  return (\n    <div>\n      <ul>\n        {query.data.map((todo) => (\n          <li key={todo.id}>{todo.title}</li>\n        ))}\n      </ul>\n\n      <button\n        onClick={() => {\n          mutation.mutate({\n            id: Date.now(),\n            title: "Do Laundry",\n          });\n        }}\n      >\n        Add Todo\n      </button>\n    </div>\n  );\n}\n\nrender(<App />, document.getElementById("root"));\n')),(0,o.kt)("p",null,"\u8fd9\u4e09\u4e2a\u6982\u5ff5\u6784\u6210\u4e86 React Query \u7684\u5927\u90e8\u5206\u6838\u5fc3\u529f\u80fd\u3002\n\u672c\u6587\u6863\u7684\u4e0b\u4e00\u90e8\u5206\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u3002"))}p.isMDXComponent=!0}}]);