(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2354],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2929:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"createWebStoragePersistor",title:"createWebStoragePersistor (Experimental)"},s={unversionedId:"plugins/createWebStoragePersistor",id:"plugins/createWebStoragePersistor",isDocsHomePage:!1,title:"createWebStoragePersistor (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/docs/plugins/createWebStoragePersistor.md",sourceDirName:"plugins",slug:"/plugins/createWebStoragePersistor",permalink:"/react-query-web-i18n/plugins/createWebStoragePersistor",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/plugins/createWebStoragePersistor.md",version:"current",lastUpdatedAt:1626685648,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"createWebStoragePersistor",title:"createWebStoragePersistor (Experimental)"},sidebar:"zhCN",previous:{title:"createAsyncStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/plugins/createAsyncStoragePersistor"},next:{title:"persistQueryClient (Experimental)",permalink:"/react-query-web-i18n/plugins/persist-query-client"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"<code>createWebStoragePersistor</code>",id:"createwebstoragepersistor",children:[]},{value:"<code>Options</code>",id:"options",children:[]}]}],c={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"This utility comes packaged with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query/createWebStoragePersistor-experimental")," import."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import the ",(0,i.kt)("inlineCode",{parentName:"li"},"createWebStoragePersistor")," function"),(0,i.kt)("li",{parentName:"ul"},"Create a new webStoragePersistor"),(0,i.kt)("li",{parentName:"ul"},"Pass it to the ",(0,i.kt)("a",{parentName:"li",href:"/react-query-web-i18n/plugins/persist-query-client"},(0,i.kt)("inlineCode",{parentName:"a"},"persistQueryClient"))," function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { persistQueryClient } from 'react-query/persistQueryClient-experimental'\nimport { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      cacheTime: 1000 * 60 * 60 * 24, // 24 hours\n    },\n  },\n})\n\nconst localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })\n// const sessionStoragePersistor = createWebStoragePersistor({ storage: window.sessionStorage })\n\npersistQueryClient({\n  queryClient,\n  persistor: localStoragePersistor,\n})\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"createwebstoragepersistor"},(0,i.kt)("inlineCode",{parentName:"h3"},"createWebStoragePersistor")),(0,i.kt)("p",null,"Call this function to create a webStoragePersistor that you can use later with ",(0,i.kt)("inlineCode",{parentName:"p"},"persistQueryClient"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"createWebStoragePersistor(options: CreateWebStoragePersistorOptions)\n")),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"Options")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreateWebStoragePersistorOptions {\n  /** The storage client used for setting an retrieving items from cache (window.localStorage or window.sessionStorage) */\n  storage: Storage\n  /** The key to use when storing the cache */\n  key?: string\n  /** To avoid spamming,\n   * pass a time in ms to throttle saving the cache to disk */\n  throttleTime?: number\n}\n")),(0,i.kt)("p",null,"The default options are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  key = `REACT_QUERY_OFFLINE_CACHE`,\n  throttleTime = 1000,\n}\n")))}p.isMDXComponent=!0}}]);