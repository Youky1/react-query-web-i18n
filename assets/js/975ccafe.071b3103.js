(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(143)),s={id:"persist-query-client",title:"persistQueryClient (Experimental)"},o={unversionedId:"plugins/persist-query-client",id:"plugins/persist-query-client",isDocsHomePage:!1,title:"persistQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/docs/plugins/persist-query-client.md",slug:"/plugins/persist-query-client",permalink:"/react-query-web-i18n/plugins/persist-query-client",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/plugins/persist-query-client.md",version:"current",lastUpdatedAt:1620447725,formattedLastUpdatedAt:"5/8/2021",sidebar:"zhCN",previous:{title:"createLocalStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/plugins/create-localStorage-persistor"},next:{title:"Document Template",permalink:"/react-query-web-i18n/doc_template"}},l=[{value:"Officially Supported Persistors",id:"officially-supported-persistors",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Cache Busting",id:"cache-busting",children:[]},{value:"API",id:"api",children:[{value:"<code>persistQueryClient</code>",id:"persistqueryclient",children:[]},{value:"<code>Options</code>",id:"options",children:[]}]},{value:"Building a Persistor",id:"building-a-persistor",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"persistQueryClient")," is a utility for persisting the state of your queryClient and its caches for later use. Different ",Object(a.b)("strong",{parentName:"p"},"persistors")," can be used to store your client and cache to many different storage layers."),Object(a.b)("h2",{id:"officially-supported-persistors"},"Officially Supported Persistors"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./create-localStorage-persistor"},"createLocalStoragePersistor (Experimental)"))),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"This utility comes packaged with ",Object(a.b)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",Object(a.b)("inlineCode",{parentName:"p"},"react-query/persistQueryClient-experimental")," import."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Import the ",Object(a.b)("inlineCode",{parentName:"p"},"persistQueryClient")," function, and pass it your ",Object(a.b)("inlineCode",{parentName:"p"},"QueryClient")," instance (with a ",Object(a.b)("inlineCode",{parentName:"p"},"cacheTime")," set), and a Persistor interface (there are multiple persistor types you can use):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { persistQueryClient } from 'react-query/persistQueryClient-experimental'\nimport { createLocalStoragePersistor } from 'react-query/createLocalStoragePersistor-experimental'\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n})\n\nconst localStoragePersistor = createLocalStoragePersistor()\n\npersistQueryClient({\n  queryClient,\n  persistor: localStoragePersistor,\n})\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IMPORTANT")," - for persist to work properly, you need to pass ",Object(a.b)("inlineCode",{parentName:"p"},"QueryClient")," a ",Object(a.b)("inlineCode",{parentName:"p"},"cacheTime")," value to override the default during hydration (as shown above)."),Object(a.b)("p",null,"If it is not set when creating the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryClient")," instance, it will default to ",Object(a.b)("inlineCode",{parentName:"p"},"300000")," (5 minutes) for hydration, and the stored cache will be discarded after 5 minutes of inactivity. This is the default garbage collection behavior."),Object(a.b)("p",null,"It should be set as the same value or higher than persistQueryClient's ",Object(a.b)("inlineCode",{parentName:"p"},"maxAge")," option. E.g. if ",Object(a.b)("inlineCode",{parentName:"p"},"maxAge")," is 24 hours (the default) then ",Object(a.b)("inlineCode",{parentName:"p"},"cacheTime")," should be 24 hours or higher. If lower than ",Object(a.b)("inlineCode",{parentName:"p"},"maxAge"),", garbage collection will kick in and discard the stored cache earlier than expected."),Object(a.b)("p",null,"You can also pass it ",Object(a.b)("inlineCode",{parentName:"p"},"Infinity")," to disable garbage collection behavior entirely."),Object(a.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(a.b)("p",null,"As you use your application:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When your query/mutation cache is updated, it will be dehydrated and stored by the persistor you provided. ",Object(a.b)("strong",{parentName:"li"},"By default"),", this action is throttled to happen at most every 1 second to save on potentially expensive writes to a persistor, but can be customized as you see fit.")),Object(a.b)("p",null,"When you reload/bootstrap your app:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Attempts to load a previously persisted dehydrated query/mutation cache from the persistor"),Object(a.b)("li",{parentName:"ul"},"If a cache is found that is older than the ",Object(a.b)("inlineCode",{parentName:"li"},"maxAge")," (which by default is 24 hours), it will be discarded. This can be customized as you see fit.")),Object(a.b)("h2",{id:"cache-busting"},"Cache Busting"),Object(a.b)("p",null,"Sometimes you may make changes to your application or data that immediately invalidate any and all cached data. If and when this happens, you can pass a ",Object(a.b)("inlineCode",{parentName:"p"},"buster")," string option to ",Object(a.b)("inlineCode",{parentName:"p"},"persistQueryClient"),", and if the cache that is found does not also have that buster string, it will be discarded."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"persistQueryClient({ queryClient, persistor, buster: buildHash })\n")),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("h3",{id:"persistqueryclient"},Object(a.b)("inlineCode",{parentName:"h3"},"persistQueryClient")),Object(a.b)("p",null,"Pass this function a ",Object(a.b)("inlineCode",{parentName:"p"},"QueryClient")," instance and a persistor that will persist your cache. Both are ",Object(a.b)("strong",{parentName:"p"},"required")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"persistQueryClient({ queryClient, persistor })\n")),Object(a.b)("h3",{id:"options"},Object(a.b)("inlineCode",{parentName:"h3"},"Options")),Object(a.b)("p",null,"An object of options:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"interface PersistQueryClientOptions {\n  /** The QueryClient to persist */\n  queryClient: QueryClient\n  /** The Persistor interface for storing and restoring the cache\n   * to/from a persisted location */\n  persistor: Persistor\n  /** The max-allowed age of the cache.\n   * If a persisted cache is found that is older than this\n   * time, it will be discarded */\n  maxAge?: number\n  /** A unique string that can be used to forcefully\n   * invalidate existing caches if they do not share the same buster string */\n  buster?: string\n}\n")),Object(a.b)("p",null,"The default options are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"{\n  maxAge = 1000 * 60 * 60 * 24, // 24 hours\n  buster = '',\n}\n")),Object(a.b)("h2",{id:"building-a-persistor"},"Building a Persistor"),Object(a.b)("p",null,"Persistors have the following interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export interface Persistor {\n  persistClient(persistClient: PersistedClient): Promisable<void>\n  restoreClient(): Promisable<PersistedClient | undefined>\n  removeClient(): Promisable<void>\n}\n")),Object(a.b)("p",null,"Persisted Client entries have the following interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export interface PersistedClient {\n  timestamp: number\n  buster: string\n  cacheState: any\n}\n")),Object(a.b)("p",null,"Satisfy all of these interfaces and you've got yourself a persistor!"))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);