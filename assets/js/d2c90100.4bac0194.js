"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),y=r,c=s["".concat(d,".").concat(y)]||s[y]||m[y]||i;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},3188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={id:"hydration",title:"hydration"},l=void 0,o={unversionedId:"reference/hydration",id:"reference/hydration",title:"hydration",description:"dehydrate",source:"@site/vue/reference/hydration.md",sourceDirName:"reference",slug:"/reference/hydration",permalink:"/react-query-web-i18n/vue/reference/hydration",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/vue/reference/hydration.md",tags:[],version:"current",lastUpdatedAt:1683186321,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"hydration",title:"hydration"}},d={},u=[{value:"<code>dehydrate</code>",id:"dehydrate",level:2},{value:"limitations",id:"limitations",level:3},{value:"<code>hydrate</code>",id:"hydrate",level:2},{value:"Limitations",id:"limitations-1",level:3},{value:"<code>useHydrate</code>",id:"usehydrate",level:2},{value:"<code>Hydrate</code>",id:"hydrate-1",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dehydrate"},(0,r.kt)("inlineCode",{parentName:"h2"},"dehydrate")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dehydrate")," creates a frozen representation of a ",(0,r.kt)("inlineCode",{parentName:"p"},"cache")," that can later be hydrated with ",(0,r.kt)("inlineCode",{parentName:"p"},"Hydrate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useHydrate"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"hydrate"),". This is useful for passing prefetched queries from server to client or persisting queries to localStorage or other persistent locations. It only includes currently successful queries by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { dehydrate } from '@tanstack/react-query'\n\nconst dehydratedState = dehydrate(queryClient, {\n  shouldDehydrateQuery,\n})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client: QueryClient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," that should be dehydrated"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options: DehydrateOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dehydrateMutations: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"Whether or not to dehydrate mutations."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dehydrateQueries: boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"Whether or not to dehydrate queries."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shouldDehydrateMutation: (mutation: Mutation) => boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function is called for each mutation in the cache"),(0,r.kt)("li",{parentName:"ul"},"Return ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to include this mutation in dehydration, or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise"),(0,r.kt)("li",{parentName:"ul"},"The default version only includes paused mutations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shouldDehydrateQuery: (query: Query) => boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function is called for each query in the cache"),(0,r.kt)("li",{parentName:"ul"},"Return ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to include this query in dehydration, or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise"),(0,r.kt)("li",{parentName:"ul"},"The default version only includes successful queries, do ",(0,r.kt)("inlineCode",{parentName:"li"},"shouldDehydrateQuery: () => true")," to include all queries")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dehydratedState: DehydratedState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes everything that is needed to hydrate the ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," at a later point"),(0,r.kt)("li",{parentName:"ul"},"You ",(0,r.kt)("strong",{parentName:"li"},"should not")," rely on the exact format of this response, it is not part of the public API and can change at any time"),(0,r.kt)("li",{parentName:"ul"},"This result is not in serialized form, you need to do that yourself if desired")))),(0,r.kt)("h3",{id:"limitations"},"limitations"),(0,r.kt)("p",null,"Some storage systems (such as browser ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},"Web Storage API"),") require values to be JSON serializable. If you need to dehydrate values that are not automatically serializable to JSON (like ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"), you have to serialize them for yourself. Since only successful queries are included per default, to also include ",(0,r.kt)("inlineCode",{parentName:"p"},"Errors"),", you have to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldDehydrateQuery"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// server\nconst state = dehydrate(client, { shouldDehydrateQuery: () => true }) // to also include Errors\nconst serializedState = mySerialize(state) // transform Error instances to objects\n\n// client\nconst state = myDeserialize(serializedState) // transform objects back to Error instances\nhydrate(client, state)\n")),(0,r.kt)("h2",{id:"hydrate"},(0,r.kt)("inlineCode",{parentName:"h2"},"hydrate")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hydrate")," adds a previously dehydrated state into a ",(0,r.kt)("inlineCode",{parentName:"p"},"cache"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { hydrate } from '@tanstack/react-query'\n\nhydrate(queryClient, dehydratedState, options)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client: QueryClient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient")," to hydrate the state into"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dehydratedState: DehydratedState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},"The state to hydrate into the client"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options: HydrateOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions: DefaultOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mutations: MutationOptions")," The default mutation options to use for the hydrated mutations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queries: QueryOptions")," The default query options to use for the hydrated queries."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context?: React.Context<QueryClient | undefined>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use this to use a custom React Query context. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultContext")," will be used.")))))),(0,r.kt)("h3",{id:"limitations-1"},"Limitations"),(0,r.kt)("p",null,"If the queries included in dehydration already exist in the queryCache, ",(0,r.kt)("inlineCode",{parentName:"p"},"hydrate")," does not overwrite them and they will be ",(0,r.kt)("strong",{parentName:"p"},"silently")," discarded."),(0,r.kt)("h2",{id:"usehydrate"},(0,r.kt)("inlineCode",{parentName:"h2"},"useHydrate")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useHydrate")," adds a previously dehydrated state into the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryClient")," that would be returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueryClient()"),". If the client already contains data, the new queries will be intelligently merged based on update timestamp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHydrate } from '@tanstack/react-query'\n\nuseHydrate(dehydratedState, options)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dehydratedState: DehydratedState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required")),(0,r.kt)("li",{parentName:"ul"},"The state to hydrate"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options: HydrateOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions: QueryOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The default query options to use for the hydrated queries."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context?: React.Context<QueryClient | undefined>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use this to use a custom React Query context. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultContext")," will be used.")))))),(0,r.kt)("h2",{id:"hydrate-1"},(0,r.kt)("inlineCode",{parentName:"h2"},"Hydrate")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hydrate")," wraps ",(0,r.kt)("inlineCode",{parentName:"p"},"useHydrate")," into component. Can be useful when you need hydrate in class component or need hydrate on same level where ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryClientProvider")," rendered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Hydrate } from '@tanstack/react-query'\n\nfunction App() {\n  return <Hydrate state={dehydratedState}>...</Hydrate>\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state: DehydratedState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The state to hydrate"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options: HydrateOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions: QueryOptions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The default query options to use for the hydrated queries."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context?: React.Context<QueryClient | undefined>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use this to use a custom React Query context. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultContext")," will be used.")))))))}m.isMDXComponent=!0}}]);