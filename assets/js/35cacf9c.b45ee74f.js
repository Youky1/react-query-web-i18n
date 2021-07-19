(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6123],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"broadcast-query-client",title:"broadcastQueryClient (Experimental)"},l={unversionedId:"plugins/broadcast-query-client",id:"plugins/broadcast-query-client",isDocsHomePage:!1,title:"broadcastQueryClient (Experimental)",description:"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.",source:"@site/docs/plugins/broadcast-query-client.md",sourceDirName:"plugins",slug:"/plugins/broadcast-query-client",permalink:"/react-query-web-i18n/plugins/broadcast-query-client",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/plugins/broadcast-query-client.md",version:"current",lastUpdatedAt:1626685648,formattedLastUpdatedAt:"7/19/2021",frontMatter:{id:"broadcast-query-client",title:"broadcastQueryClient (Experimental)"},sidebar:"zhCN",previous:{title:"\u8fc1\u79fb\u5230React Query 3",permalink:"/react-query-web-i18n/guides&concepts/migrating-to-react-query-3"},next:{title:"createAsyncStoragePersistor (Experimental)",permalink:"/react-query-web-i18n/plugins/createAsyncStoragePersistor"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"<code>broadcastQueryClient</code>",id:"broadcastqueryclient",children:[]},{value:"<code>Options</code>",id:"options",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VERY IMPORTANT: This utility is currently in an experimental stage. This means that breaking changes will happen in minor AND patch releases. Use at your own risk. If you choose to rely on this in production in an experimental stage, please lock your version to a patch-level version to avoid unexpected breakages.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," is a utility for broadcasting and syncing the state of your queryClient between browser tabs/windows with the same origin."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"This utility comes packaged with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query")," and is available under the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query/broadcastQueryClient-experimental")," import."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastQueryClient")," function, and pass it your ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance, and optionally, set a ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { broadcastQueryClient } from 'react-query/broadcastQueryClient-experimental'\n\nconst queryClient = new QueryClient()\n\nbroadcastQueryClient({\n  queryClient,\n  broadcastChannel: 'my-app',\n})\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"broadcastqueryclient"},(0,i.kt)("inlineCode",{parentName:"h3"},"broadcastQueryClient")),(0,i.kt)("p",null,"Pass this function a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryClient")," instance and optionally, a ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastChannel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"broadcastQueryClient({ queryClient, broadcastChannel })\n")),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"Options")),(0,i.kt)("p",null,"An object of options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface broadcastQueryClient {\n  /** The QueryClient to sync */\n  queryClient: QueryClient\n  /** This is the unique channel name that will be used\n   * to communicate between tabs and windows */\n  broadcastChannel?: string\n}\n")),(0,i.kt)("p",null,"The default options are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  broadcastChannel = 'react-query',\n}\n")))}u.isMDXComponent=!0}}]);