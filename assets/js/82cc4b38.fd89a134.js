"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"createWebStoragePersistor",title:"createWebStoragePersistor (Experimental)"},o=void 0,s={unversionedId:"plugins/createWebStoragePersistor",id:"plugins/createWebStoragePersistor",title:"createWebStoragePersistor (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/v3-react/plugins/createWebStoragePersistor.md",sourceDirName:"plugins",slug:"/plugins/createWebStoragePersistor",permalink:"/react-query-web-i18n/v3-react/plugins/createWebStoragePersistor",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/plugins/createWebStoragePersistor.md",tags:[],version:"current",lastUpdatedAt:1683186321,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"createWebStoragePersistor",title:"createWebStoragePersistor (Experimental)"},sidebar:"default",previous:{title:"createAsyncStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/v3-react/plugins/createAsyncStoragePersistor"},next:{title:"persistQueryClient (Experimental)",permalink:"/react-query-web-i18n/v3-react/plugins/persist-query-client"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"<code>createWebStoragePersistor</code>",id:"createwebstoragepersistor",level:3},{value:"<code>Options</code>",id:"options",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This utility comes packaged with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query/createWebStoragePersistor-experimental")," import."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import the ",(0,a.kt)("inlineCode",{parentName:"li"},"createWebStoragePersistor")," function"),(0,a.kt)("li",{parentName:"ul"},"Create a new webStoragePersistor"),(0,a.kt)("li",{parentName:"ul"},"Pass it to the ",(0,a.kt)("a",{parentName:"li",href:"/react-query-web-i18n/v3-react/plugins/persist-query-client"},(0,a.kt)("inlineCode",{parentName:"a"},"persistQueryClient"))," function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { persistQueryClient } from "react-query/persistQueryClient-experimental";\nimport { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n});\n\nconst localStoragePersistor = createWebStoragePersistor({\n  storage: window.localStorage,\n});\n// const sessionStoragePersistor = createWebStoragePersistor({ storage: window.sessionStorage })\n\npersistQueryClient({\n  queryClient,\n  persistor: localStoragePersistor,\n});\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createwebstoragepersistor"},(0,a.kt)("inlineCode",{parentName:"h3"},"createWebStoragePersistor")),(0,a.kt)("p",null,"Call this function to create a webStoragePersistor that you can use later with ",(0,a.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"createWebStoragePersistor(options: CreateWebStoragePersistorOptions)\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"Options")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreateWebStoragePersistorOptions {\n  /** The storage client used for setting an retrieving items from cache (window.localStorage or window.sessionStorage) */\n  storage: Storage;\n  /** The key to use when storing the cache */\n  key?: string;\n  /** To avoid spamming,\n   * pass a time in ms to throttle saving the cache to disk */\n  throttleTime?: number;\n  /** How to serialize the data to storage */\n  serialize?: (client: PersistedClient) => string;\n  /** How to deserialize the data from storage */\n  deserialize?: (cachedString: string) => PersistedClient;\n}\n")),(0,a.kt)("p",null,"The default options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  key = `REACT_QUERY_OFFLINE_CACHE`,\n  throttleTime = 1000,\n  serialize = JSON.stringify,\n  deserialize = JSON.parse,\n}\n")))}g.isMDXComponent=!0}}]);