"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),y=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=y(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=y(r),p=a,d=s["".concat(l,".").concat(p)]||s[p]||m[p]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var y=2;y<o;y++)i[y]=r[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>y});var n=r(7462),a=(r(7294),r(3905));const o={id:"lukemorales-query-key-factory",title:"Query Key Factory"},i=void 0,u={unversionedId:"community/lukemorales-query-key-factory",id:"community/lukemorales-query-key-factory",title:"Query Key Factory",description:"Typesafe query key management with auto-completion features. Focus on writing and invalidating queries without the hassle of remembering how you've set up a key for a specific query!",source:"@site/react/community/lukemorales-query-key-factory.md",sourceDirName:"community",slug:"/community/lukemorales-query-key-factory",permalink:"/react-query-web-i18n/react/community/lukemorales-query-key-factory",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/community/lukemorales-query-key-factory.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"lukemorales-query-key-factory",title:"Query Key Factory"},sidebar:"zhCN",previous:{title:"React Query Kit",permalink:"/react-query-web-i18n/react/community/liaoliao666-react-query-kit"},next:{title:"Angular Query",permalink:"/react-query-web-i18n/react/community/angular-query"}},l={},y=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Declare everything in a single file",id:"declare-everything-in-a-single-file",level:3},{value:"Fine-grained declaration by features",id:"fine-grained-declaration-by-features",level:3}],c={toc:y};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Typesafe query key management with auto-completion features. Focus on writing and invalidating queries without the hassle of remembering how you've set up a key for a specific query!"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can install Query Key Factory via ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lukemorales/query-key-factory"},"NPM"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @lukemorales/query-key-factory\n# or\n$\xa0pnpm add @lukemorales/query-key-factory\n# or\n$ yarn add @lukemorales/query-key-factory\n")),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"Start by defining the query keys for your app:"),(0,a.kt)("h3",{id:"declare-everything-in-a-single-file"},"Declare everything in a single file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQueryKeyStore } from '@lukemorales/query-key-factory'\n\nexport const queryKeys = createQueryKeyStore({\n  users: null,\n  todos: {\n    completed: null,\n    search: (query: string, limit = 15) => [query, limit],\n    byId: (todoId: string) => ({ todoId }),\n  },\n})\n")),(0,a.kt)("h3",{id:"fine-grained-declaration-by-features"},"Fine-grained declaration by features"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory'\n\n// my-api/users.ts\nexport const usersKeys = createQueryKeys('users')\n\n// my-api/todos.ts\nexport const todosKeys = createQueryKeys('todos', {\n  completed: null,\n  search: (query: string, limit = 15) => [query, limit],\n  byId: (todoId: string) => ({ todoId }),\n})\n\n// my-api/index.ts\nexport const queryKeys = mergeQueryKeys(usersKeys, todosKeys)\n")),(0,a.kt)("p",null,"Use throughout your codebase as the single source for writing the query keys for your cache management:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { queryKeys, completeTodo, fetchSingleTodo } from '../my-api'\n\nexport function Todo({ todoId }) {\n  const queryClient = useQueryClient()\n\n  const query = useQuery(queryKeys.todos.byId(todoId), fetchSingleTodo)\n\n  const mutation = useMutation(completeTodo, {\n    onSuccess: () => {\n      // Invalidate and refetch\n      queryClient.invalidateQueries(queryKeys.todos.completed)\n    },\n  })\n\n  return (\n    <div>\n      <h1>\n        {query.data?.title}\n      </h1>\n\n      <p>\n        {query.data?.description}\n      </p>\n\n      <button\n        onClick={() => {\n          mutation.mutate({ todoId })\n        }}\n      >\n        Complete Todo\n      </button>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"Check the complete documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukemorales/query-key-factory"},"GitHub"),"."))}s.isMDXComponent=!0}}]);