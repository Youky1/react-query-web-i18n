(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(y,c(c({ref:t},s),{},{components:n})):a.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(142)),o={id:"broadcast-query-client",title:"broadcastQueryClient (Experimental)"},c={unversionedId:"plugins/broadcast-query-client",id:"plugins/broadcast-query-client",isDocsHomePage:!1,title:"broadcastQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/docs/plugins/broadcast-query-client.md",slug:"/plugins/broadcast-query-client",permalink:"/react-query-web-i18n/plugins/broadcast-query-client",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/plugins/broadcast-query-client.md",version:"current",lastUpdatedAt:1615262977,sidebar:"zhCN",previous:{title:"\u8fc1\u79fb\u5230React Query 3",permalink:"/react-query-web-i18n/guides&concepts/migrating-to-react-query-3"},next:{title:"createLocalStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/plugins/create-localStorage-persistor"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"<code>broadcastQueryClient</code>",id:"broadcastqueryclient",children:[]},{value:"<code>Options</code>",id:"options",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"broadcastQueryClient")," is a utility for broadcasting and syncing the state of your queryClient between browser tabs/windows with the same origin."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"This utility comes packaged with ",Object(i.b)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",Object(i.b)("inlineCode",{parentName:"p"},"react-query/broadcastQueryClient-experimental")," import."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Import the ",Object(i.b)("inlineCode",{parentName:"p"},"broadcastQueryClient")," function, and pass it your ",Object(i.b)("inlineCode",{parentName:"p"},"QueryClient")," instance, and optionally, set a ",Object(i.b)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { broadcastQueryClient } from 'react-query/broadcastQueryClient-experimental'\n\nconst queryClient = new QueryClient()\n\nbroadcastQueryClient({\n  queryClient,\n  broadcastChannel: 'my-app',\n})\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"broadcastqueryclient"},Object(i.b)("inlineCode",{parentName:"h3"},"broadcastQueryClient")),Object(i.b)("p",null,"Pass this function a ",Object(i.b)("inlineCode",{parentName:"p"},"QueryClient")," instance and optionally, a ",Object(i.b)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"broadcastQueryClient({ queryClient, broadcastChannel })\n")),Object(i.b)("h3",{id:"options"},Object(i.b)("inlineCode",{parentName:"h3"},"Options")),Object(i.b)("p",null,"An object of options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"interface broadcastQueryClient {\n  /** The QueryClient to sync */\n  queryClient: QueryClient\n  /** This is the unique channel name that will be used\n   * to communicate between tabs and windows */\n  broadcastChannel?: string\n}\n")),Object(i.b)("p",null,"The default options are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"{\n  broadcastChannel = 'react-query',\n}\n")))}u.isMDXComponent=!0}}]);