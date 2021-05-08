(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(143)),o={id:"window-focus-refetching",title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0"},i={unversionedId:"guides&concepts/window-focus-refetching",id:"guides&concepts/window-focus-refetching",isDocsHomePage:!1,title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0",description:"\u5982\u679c\u7528\u6237\u79bb\u5f00\u60a8\u7684\u5e94\u7528\u65f6\u6570\u636e\u662f\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\uff0cReact Query \u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u4e3a\u60a8\u8bf7\u6c42\u65b0\u7684\u6570\u636e\u3002",source:"@site/docs/guides&concepts/window-focus-refetching.md",slug:"/guides&concepts/window-focus-refetching",permalink:"/react-query-web-i18n/guides&concepts/window-focus-refetching",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/window-focus-refetching.md",version:"current",lastUpdatedAt:1620447725,formattedLastUpdatedAt:"5/8/2021",sidebar:"zhCN",previous:{title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668",permalink:"/react-query-web-i18n/guides&concepts/background-fetching-indicators"},next:{title:"\u7981\u7528/\u6682\u505c\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/disabling-queries"}},s=[{value:"\u81ea\u5b9a\u4e49\u7a97\u53e3 Focus \u4e8b\u4ef6",id:"\u81ea\u5b9a\u4e49\u7a97\u53e3-focus-\u4e8b\u4ef6",children:[]},{value:"\u5ffd\u7565 Iframe \u7684 Focus \u4e8b\u4ef6",id:"\u5ffd\u7565-iframe-\u7684-focus-\u4e8b\u4ef6",children:[]},{value:"\u5728 React Native \u4e2d\u7ba1\u7406\u7126\u70b9",id:"\u5728-react-native-\u4e2d\u7ba1\u7406\u7126\u70b9",children:[]},{value:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001",id:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001",children:[]}],u={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5982\u679c\u7528\u6237\u79bb\u5f00\u60a8\u7684\u5e94\u7528\u65f6\u6570\u636e\u662f\u6807\u8bb0\u4e3a\u8fc7\u65f6\u7684\uff0c",Object(c.b)("strong",{parentName:"p"},"React Query \u4f1a\u81ea\u52a8\u5728\u540e\u53f0\u4e3a\u60a8\u8bf7\u6c42\u65b0\u7684\u6570\u636e"),"\u3002\n\u60a8\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),"\u9009\u9879\u5728\u5168\u5c40\u6216\u6bcf\u4e2a\u67e5\u8be2\u4e2d\u7981\u7528\u6b64\u9009\u9879\u3002"),Object(c.b)("h4",{id:"\u5168\u5c40\u7981\u7528"},"\u5168\u5c40\u7981\u7528"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"//\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      refetchOnWindowFocus: false,\n    },\n  },\n})\n\nfunction App() {\n  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>\n}\n")),Object(c.b)("h4",{id:"\u5355\u72ec\u7981\u7528"},"\u5355\u72ec\u7981\u7528"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"useQuery('todos', fetchTodos, { refetchOnWindowFocus: false })\n")),Object(c.b)("h2",{id:"\u81ea\u5b9a\u4e49\u7a97\u53e3-focus-\u4e8b\u4ef6"},"\u81ea\u5b9a\u4e49\u7a97\u53e3 Focus \u4e8b\u4ef6"),Object(c.b)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u81ea\u5df1\u7ba1\u7406\u7a97\u53e3\u7684 Focus \u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u4f1a\u89e6\u53d1 React Query \u7684\u91cd\u65b0\u9a8c\u8bc1\u3002\n\u4e3a\u6b64\uff0cReact Query \u63d0\u4f9b\u4e86\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"focusManager.setEventListener"),"\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63d0\u4f9b\u4e86\u5f53\u7a97\u53e3\u805a\u7126\u65f6\u5e94\u89e6\u53d1\u7684\u56de\u8c03\uff0c\u5e76\u5141\u8bb8\u60a8\u8bbe\u7f6e\u81ea\u5df1\u7684\u4e8b\u4ef6\u3002\n\u5f53\u8c03\u7528",Object(c.b)("inlineCode",{parentName:"p"},"focusManager.setEventListener"),"\u65f6\uff0c\u5148\u524d\u8bbe\u7f6e\u7684\u5904\u7406\u51fd\u6570\u5c06\u88ab\u5220\u9664\uff08\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5c06\u662f\u9ed8\u8ba4\u5904\u7406\u51fd\u6570\uff09\uff0c\u800c\u5c06\u4f7f\u7528\u65b0\u7684\u5904\u7406\u51fd\u6570\u3002 \u4f8b\u5982\uff0c\u8fd9\u662f\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"focusManager.setEventListener((handleFocus) => {\n  // \u76d1\u542c\u53ef\u89c1\u7684\u53d8\u5316\u548c\u7126\u70b9\n  if (typeof window !== 'undefined' && window.addEventListener) {\n    window.addEventListener('visibilitychange', handleFocus, false)\n    window.addEventListener('focus', handleFocus, false)\n  }\n\n  return () => {\n    // \u5982\u679c\u8bbe\u7f6e\u4e86\u65b0\u7684\u5904\u7406\u7a0b\u5e8f\uff0c\u786e\u4fdd\u53d6\u6d88\u8ba2\u9605\n    window.removeEventListener('visibilitychange', handleFocus)\n    window.removeEventListener('focus', handleFocus)\n  }\n})\n")),Object(c.b)("h2",{id:"\u5ffd\u7565-iframe-\u7684-focus-\u4e8b\u4ef6"},"\u5ffd\u7565 Iframe \u7684 Focus \u4e8b\u4ef6"),Object(c.b)("p",null,"\u66ff\u6362\u7126\u70b9\u5904\u7406\u51fd\u6570\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u7528\u4f8b\u662f iframe \u7684\u4e8b\u4ef6\u3002\n\u5f53\u5728\u5e94\u7528\u4e2d\u805a\u7126\u6216\u4f7f\u7528 iframe \u65f6\uff0ciframe \u4f1a\u901a\u8fc7\u4e24\u6b21\u89e6\u53d1\u4e8b\u4ef6(both double-firing events)\u4ee5\u53ca\u89e6\u53d1\u5047\u9633\u6027\u4e8b\u4ef6(false-positive events)\u6765\u68c0\u6d4b\u7a97\u53e3\u7126\u70b9\uff0c\u4ece\u800c\u5e26\u6765\u67d0\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\u3002\n\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u4e00\u4e2a\u5c3d\u53ef\u80fd\u5ffd\u7565\u8fd9\u4e9b\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002\u4f8b\u5982\u4f7f\u7528",Object(c.b)("a",{parentName:"p",href:"https://gist.github.com/tannerlinsley/1d3a2122332107fcd8c9cc379be10d88"},"\u8fd9\u4e2a Gist"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { focusManager } from 'react-query'\nimport onWindowFocus from './onWindowFocus' // The gist\n\nfocusManager.setEventListener(onWindowFocus) // Boom!\n")),Object(c.b)("h2",{id:"\u5728-react-native-\u4e2d\u7ba1\u7406\u7126\u70b9"},"\u5728 React Native \u4e2d\u7ba1\u7406\u7126\u70b9"),Object(c.b)("p",null,"React Native \u901a\u8fc7",Object(c.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/appstate#app-states"},Object(c.b)("inlineCode",{parentName:"a"},"AppState"),"\u6a21\u5757"),"\u63d0\u4f9b\u7126\u70b9\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u7a97\u53e3\u4e0a\u7684\u4e8b\u4ef6\u4fa6\u542c\u5668\u3002\u5f53\u5e94\u7528\u72b6\u6001\u66f4\u6539\u4e3a\u201cactive\u201d\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"AppState"),"\u7684\u201cchange\u201d\u4e8b\u4ef6\u6765\u89e6\u53d1\u66f4\u65b0\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { AppState } from 'react-native'\nimport { focusManager } from 'react-query'\n\nfocusManager.setEventListener((handleFocus) => {\n  AppState.addEventListener('change', handleFocus)\n\n  return () => {\n    AppState.removeEventListener('change', handleFocus)\n  }\n})\n")),Object(c.b)("h2",{id:"\u7ba1\u7406\u7126\u70b9\u72b6\u6001"},"\u7ba1\u7406\u7126\u70b9\u72b6\u6001"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { focusManager } from 'react-query'\n\n// \u8986\u76d6\u9ed8\u8ba4\u7684\u7126\u70b9\u72b6\u6001\nfocusManager.setFocused(true)\n\n// \u56de\u9000\u5230\u9ed8\u8ba4\u7684\u7126\u70b9\u68c0\u67e5\nfocusManager.setFocused(undefined)\n")))}p.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,b=d["".concat(o,".").concat(f)]||d[f]||l[f]||c;return t?a.a.createElement(b,i(i({ref:n},u),{},{components:t})):a.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);