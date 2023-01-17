"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"broadcast-query-client",title:"broadcastQueryClient (Experimental)"},o=void 0,l={unversionedId:"plugins/broadcast-query-client",id:"plugins/broadcast-query-client",title:"broadcastQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/v3-react/plugins/broadcast-query-client.md",sourceDirName:"plugins",slug:"/plugins/broadcast-query-client",permalink:"/react-query-web-i18n/v3-react/plugins/broadcast-query-client",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/v3-react/plugins/broadcast-query-client.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"broadcast-query-client",title:"broadcastQueryClient (Experimental)"},sidebar:"default",previous:{title:"\u8fc1\u79fb\u5230React Query 3",permalink:"/react-query-web-i18n/v3-react/guides&concepts/migrating-to-react-query-3"},next:{title:"createAsyncStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/v3-react/plugins/createAsyncStoragePersistor"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"<code>broadcastQueryClient</code>",id:"broadcastqueryclient",level:3},{value:"<code>Options</code>",id:"options",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," is a utility for broadcasting and syncing the state of your queryClient between browser tabs/windows with the same origin."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This utility comes packaged with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query/broadcastQueryClient-experimental")," import."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," function, and pass it your ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance, and optionally, set a ",(0,a.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { broadcastQueryClient } from 'react-query/broadcastQueryClient-experimental'\n\nconst queryClient = new QueryClient()\n\nbroadcastQueryClient({\n  queryClient,\n  broadcastChannel: 'my-app',\n})\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"broadcastqueryclient"},(0,a.kt)("inlineCode",{parentName:"h3"},"broadcastQueryClient")),(0,a.kt)("p",null,"Pass this function a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance and optionally, a ",(0,a.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"broadcastQueryClient({ queryClient, broadcastChannel })\n")),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"Options")),(0,a.kt)("p",null,"An object of options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface broadcastQueryClient {\n  /** The QueryClient to sync */\n  queryClient: QueryClient\n  /** This is the unique channel name that will be used\n   * to communicate between tabs and windows */\n  broadcastChannel?: string\n}\n")),(0,a.kt)("p",null,"The default options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  broadcastChannel = 'react-query',\n}\n")))}p.isMDXComponent=!0}}]);