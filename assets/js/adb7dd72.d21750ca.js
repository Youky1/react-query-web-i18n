"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[3694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,y=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"persist-query-client",title:"persistQueryClient (Experimental)"},s=void 0,o={unversionedId:"plugins/persist-query-client",id:"version-v3/plugins/persist-query-client",title:"persistQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/versioned_docs/version-v3/plugins/persist-query-client.md",sourceDirName:"plugins",slug:"/plugins/persist-query-client",permalink:"/react-query-web-i18n/v3/plugins/persist-query-client",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/plugins/persist-query-client.md",tags:[],version:"v3",lastUpdatedAt:1672918012,formattedLastUpdatedAt:"1/5/2023",frontMatter:{id:"persist-query-client",title:"persistQueryClient (Experimental)"},sidebar:"zhCN",previous:{title:"createWebStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/v3/plugins/createWebStoragePersistor"},next:{title:"\u5bf9\u8d21\u732e\u8005\u5199\u7684\u6587\u6863\u89c4\u8303",permalink:"/react-query-web-i18n/v3/doc_template"}},l={},p=[{value:"Officially Supported Persistors",id:"officially-supported-persistors",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Cache Busting",id:"cache-busting",level:2},{value:"API",id:"api",level:2},{value:"<code>persistQueryClient</code>",id:"persistqueryclient",level:3},{value:"<code>Options</code>",id:"options",level:3},{value:"Building a Persistor",id:"building-a-persistor",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"persistQueryClient")," is a utility for persisting the state of your queryClient and its caches for later use. Different ",(0,i.kt)("strong",{parentName:"p"},"persistors")," can be used to store your client and cache to many different storage layers."),(0,i.kt)("h2",{id:"officially-supported-persistors"},"Officially Supported Persistors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/v3/plugins/createWebStoragePersistor"},"createWebStoragePersistor (Experimental)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/v3/plugins/createAsyncStoragePersistor"},"createAsyncStoragePersistor (Experimental)"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"This utility comes packaged with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query/persistQueryClient-experimental")," import."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"persistQueryClient")," function, and pass it your ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance (with a ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheTime")," set), and a Persistor interface (there are multiple persistor types you can use):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { persistQueryClient } from 'react-query/persistQueryClient-experimental'\nimport { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n})\n\nconst localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})\n\npersistQueryClient({\n  queryClient,\n  persistor: localStoragePersistor,\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT")," - for persist to work properly, you need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheTime")," value to override the default during hydration (as shown above)."),(0,i.kt)("p",null,"If it is not set when creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance, it will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"300000")," (5 minutes) for hydration, and the stored cache will be discarded after 5 minutes of inactivity. This is the default garbage collection behavior."),(0,i.kt)("p",null,"It should be set as the same value or higher than persistQueryClient's ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge")," option. E.g. if ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge")," is 24 hours (the default) then ",(0,i.kt)("inlineCode",{parentName:"p"},"cacheTime")," should be 24 hours or higher. If lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge"),", garbage collection will kick in and discard the stored cache earlier than expected."),(0,i.kt)("p",null,"You can also pass it ",(0,i.kt)("inlineCode",{parentName:"p"},"Infinity")," to disable garbage collection behavior entirely."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"As you use your application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When your query/mutation cache is updated, it will be dehydrated and stored by the persistor you provided. ",(0,i.kt)("strong",{parentName:"li"},"By default"),", this action is throttled to happen at most every 1 second to save on potentially expensive writes to a persistor, but can be customized as you see fit.")),(0,i.kt)("p",null,"When you reload/bootstrap your app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attempts to load a previously persisted dehydrated query/mutation cache from the persistor"),(0,i.kt)("li",{parentName:"ul"},"If a cache is found that is older than the ",(0,i.kt)("inlineCode",{parentName:"li"},"maxAge")," (which by default is 24 hours), it will be discarded. This can be customized as you see fit.")),(0,i.kt)("h2",{id:"cache-busting"},"Cache Busting"),(0,i.kt)("p",null,"Sometimes you may make changes to your application or data that immediately invalidate any and all cached data. If and when this happens, you can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"buster")," string option to ",(0,i.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),", and if the cache that is found does not also have that buster string, it will be discarded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"persistQueryClient({ queryClient, persistor, buster: buildHash })\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"persistqueryclient"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistQueryClient")),(0,i.kt)("p",null,"Pass this function a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance and a persistor that will persist your cache. Both are ",(0,i.kt)("strong",{parentName:"p"},"required")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"persistQueryClient({ queryClient, persistor })\n")),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"Options")),(0,i.kt)("p",null,"An object of options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface PersistQueryClientOptions {\n  /** The QueryClient to persist */\n  queryClient: QueryClient\n  /** The Persistor interface for storing and restoring the cache\n   * to/from a persisted location */\n  persistor: Persistor\n  /** The max-allowed age of the cache.\n   * If a persisted cache is found that is older than this\n   * time, it will be discarded */\n  maxAge?: number\n  /** A unique string that can be used to forcefully\n   * invalidate existing caches if they do not share the same buster string */\n  buster?: string\n  /** The options passed to the hydrate function */\n  hydrateOptions?: HydrateOptions\n  /** The options passed to the dehydrate function */\n  dehydrateOptions?: DehydrateOptions\n}\n")),(0,i.kt)("p",null,"The default options are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  maxAge = 1000 * 60 * 60 * 24, // 24 hours\n  buster = '',\n}\n")),(0,i.kt)("h2",{id:"building-a-persistor"},"Building a Persistor"),(0,i.kt)("p",null,"Persistors have the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Persistor {\n  persistClient(persistClient: PersistedClient): Promisable<void>\n  restoreClient(): Promisable<PersistedClient | undefined>\n  removeClient(): Promisable<void>\n}\n")),(0,i.kt)("p",null,"Persisted Client entries have the following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface PersistedClient {\n  timestamp: number\n  buster: string\n  cacheState: any\n}\n")),(0,i.kt)("p",null,"Satisfy all of these interfaces and you've got yourself a persistor!"))}c.isMDXComponent=!0}}]);