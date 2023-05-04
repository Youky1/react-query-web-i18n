"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[2438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),y=r,m=p["".concat(o,".").concat(y)]||p[y]||d[y]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={id:"QueryCache",title:"QueryCache"},i=void 0,c={unversionedId:"reference/QueryCache",id:"reference/QueryCache",title:"QueryCache",description:"The QueryCache is the storage mechanism for React Query. It stores all the data, meta information and state of queries it contains.",source:"@site/react/reference/QueryCache.md",sourceDirName:"reference",slug:"/reference/QueryCache",permalink:"/react-query-web-i18n/react/reference/QueryCache",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/reference/QueryCache.md",tags:[],version:"current",lastUpdatedAt:1683186321,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"QueryCache",title:"QueryCache"}},o={},u=[{value:"Global callbacks",id:"global-callbacks",level:2},{value:"<code>queryCache.find</code>",id:"querycachefind",level:2},{value:"<code>queryCache.findAll</code>",id:"querycachefindall",level:2},{value:"<code>queryCache.subscribe</code>",id:"querycachesubscribe",level:2},{value:"<code>queryCache.clear</code>",id:"querycacheclear",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryCache")," is the storage mechanism for React Query. It stores all the data, meta information and state of queries it contains."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Normally, you will not interact with the QueryCache directly and instead use the ",(0,r.kt)("inlineCode",{parentName:"strong"},"QueryClient")," for a specific cache.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { QueryCache } from "@tanstack/react-query";\n\nconst queryCache = new QueryCache({\n  onError: (error) => {\n    console.log(error);\n  },\n  onSuccess: (data) => {\n    console.log(data);\n  },\n});\n\nconst query = queryCache.find(["posts"]);\n')),(0,r.kt)("p",null,"Its available methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#global-callbacks"},"Global callbacks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#querycachefind"},(0,r.kt)("inlineCode",{parentName:"a"},"queryCache.find"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#querycachefindall"},(0,r.kt)("inlineCode",{parentName:"a"},"queryCache.findAll"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#querycachesubscribe"},(0,r.kt)("inlineCode",{parentName:"a"},"queryCache.subscribe"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#querycacheclear"},(0,r.kt)("inlineCode",{parentName:"a"},"queryCache.clear")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onError?: (error: unknown, query: Query) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function will be called if some query encounters an error."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onSuccess?: (data: unknown, query: Query) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional"),(0,r.kt)("li",{parentName:"ul"},"This function will be called if some query is successful.")))),(0,r.kt)("h2",{id:"global-callbacks"},"Global callbacks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," callbacks on the QueryCache can be used to handle these events on a global level. They are different to ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultOptions")," provided to the QueryClient because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions")," can be overridden by each Query - the global callbacks will ",(0,r.kt)("strong",{parentName:"li"},"always")," be called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions")," callbacks will be called once for each Observer, while the global callbacks will only be called once per Query.")),(0,r.kt)("h2",{id:"querycachefind"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryCache.find")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"find")," is a slightly more advanced synchronous method that can be used to get an existing query instance from the cache. This instance not only contains ",(0,r.kt)("strong",{parentName:"p"},"all")," the state for the query, but all of the instances, and underlying guts of the query as well. If the query does not exist, ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," will be returned."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios (eg. Looking at the query.state.dataUpdatedAt timestamp to decide whether a query is fresh enough to be used as an initial value)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const query = queryCache.find(queryKey);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/query-keys"},"Query Keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/filters#query-filters"},"Query Filters"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Query"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The query instance from the cache")))),(0,r.kt)("h2",{id:"querycachefindall"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryCache.findAll")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findAll")," is even more advanced synchronous method that can be used to get existing query instances from the cache that partially match query key. If queries do not exist, empty array will be returned."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const queries = queryCache.findAll(queryKey);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryKey?: QueryKey"),": ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/query-keys"},"Query Keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filters?: QueryFilters"),": ",(0,r.kt)("a",{parentName:"li",href:"/react-query-web-i18n/react/guides&concepts/filters#query-filters"},"Query Filters"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Query[]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Query instances from the cache")))),(0,r.kt)("h2",{id:"querycachesubscribe"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryCache.subscribe")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method can be used to subscribe to the query cache as a whole and be informed of safe/known updates to the cache like query states changing or queries being updated, added or removed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const callback = (event) => {\n  console.log(event.type, event.query);\n};\n\nconst unsubscribe = queryCache.subscribe(callback);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback: (event: QueryCacheNotifyEvent) => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function will be called with the query cache any time it is updated via its tracked update mechanisms (eg, ",(0,r.kt)("inlineCode",{parentName:"li"},"query.setState"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"queryClient.removeQueries"),", etc). Out of scope mutations to the cache are not encouraged and will not fire subscription callbacks")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsubscribe: Function => void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This function will unsubscribe the callback from the query cache.")))),(0,r.kt)("h2",{id:"querycacheclear"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryCache.clear")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clear")," method can be used to clear the cache entirely and start fresh."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"queryCache.clear();\n")))}d.isMDXComponent=!0}}]);