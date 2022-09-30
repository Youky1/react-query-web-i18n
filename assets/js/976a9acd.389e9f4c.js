"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"does-this-replace-client-state",title:"React Query\u662f\u5426\u4f1a/\u53ef\u4ee5\u53d6\u4ee3Redux\uff0cMobX\u6216\u5176\u4ed6\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5668\uff1f"},l=void 0,i={unversionedId:"guides&concepts/does-this-replace-client-state",id:"version-v3/guides&concepts/does-this-replace-client-state",title:"React Query\u662f\u5426\u4f1a/\u53ef\u4ee5\u53d6\u4ee3Redux\uff0cMobX\u6216\u5176\u4ed6\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5668\uff1f",description:"\u597d\u5427\uff0c\u8ba9\u6211\u4eec\u4ece\u51e0\u4e2a\u91cd\u8981\u7684\u4e1c\u897f\u5f00\u59cb\uff1a",source:"@site/versioned_docs/version-v3/guides&concepts/does-this-replace-client-state.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/does-this-replace-client-state",permalink:"/react-query-web-i18n/v3/guides&concepts/does-this-replace-client-state",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/guides&concepts/does-this-replace-client-state.md",tags:[],version:"v3",lastUpdatedAt:1664524864,formattedLastUpdatedAt:"9/30/2022",frontMatter:{id:"does-this-replace-client-state",title:"React Query\u662f\u5426\u4f1a/\u53ef\u4ee5\u53d6\u4ee3Redux\uff0cMobX\u6216\u5176\u4ed6\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5668\uff1f"},sidebar:"zhCN",previous:{title:"\u6d4b\u8bd5 testing",permalink:"/react-query-web-i18n/v3/guides&concepts/testing"},next:{title:"\u8fc1\u79fb\u5230React Query 3",permalink:"/react-query-web-i18n/v3/guides&concepts/migrating-to-react-query-3"}},c={},s=[{value:"\u4e00\u4e2a\u201c\u505a\u4f5c\u201d\uff08Contrived\uff09\u7684\u4f8b\u5b50",id:"\u4e00\u4e2a\u505a\u4f5ccontrived\u7684\u4f8b\u5b50",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u597d\u5427\uff0c\u8ba9\u6211\u4eec\u4ece\u51e0\u4e2a\u91cd\u8981\u7684\u4e1c\u897f\u5f00\u59cb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React Query \u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u670d\u52a1\u5668\u72b6\u6001"),"\u5e93\uff0c\u8d1f\u8d23",(0,a.kt)("em",{parentName:"li"},"\u7ba1\u7406\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u5f02\u6b65\u64cd\u4f5c")),(0,a.kt)("li",{parentName:"ul"},"Redux\uff0cMobX\uff0cZustand \u7b49\u662f",(0,a.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\u72b6\u6001"),"\u5e93\uff0c\u53ef\u7528\u4e8e",(0,a.kt)("em",{parentName:"li"},"\u5b58\u50a8\u5f02\u6b65\u6570\u636e"),"\uff0c\u5c3d\u7ba1\u4e0e React Query \u4e4b\u7c7b\u7684\u5de5\u5177\u76f8\u6bd4\u6548\u7387\u8f83\u4f4e")),(0,a.kt)("p",null,"\u8003\u8651\u5230\u8fd9\u4e9b\uff0c\u7b80\u77ed\u7684\u7b54\u6848\u662f",(0,a.kt)("strong",{parentName:"p"},"React Query \u7528\u5c11\u6570\u51e0\u884c\u4ee3\u7801\u66ff\u4ee3\u4e86\u7528\u4e8e\u7ba1\u7406\u5ba2\u6237\u7aef\u72b6\u6001\u4e2d\u7684\u7f13\u5b58\u6570\u636e\u7684\u6837\u677f\u4ee3\u7801\u548c\u76f8\u5173\u8054\u7684\u4ee3\u7801"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7edd\u5927\u591a\u6570\u5e94\u7528\u800c\u8a00\uff0c\u5728\u8fc1\u79fb\u6240\u6709\u5f02\u6b65\u4ee3\u7801\u5230 React Query \u4e4b\u540e\uff0c\u9057\u7559\u4e0b\u6765\u7684\uff08\u53ef\u80fd\u4f1a\u6c61\u67d3\u73af\u5883\u7684\uff09\u3001",(0,a.kt)("strong",{parentName:"p"},"\u5168\u5c40\u53ef\u8bbf\u95ee\u7684"),"\u5ba2\u6237\u7aef\u72b6\u6001\u901a\u5e38\u975e\u5e38\u5c0f\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u53ef\u80fd\u786e\u5b9e\u5177\u6709\u5927\u91cf\u7684\u3001\u4ec5\u540c\u6b65\u5ba2\u6237\u7aef\u7684\u72b6\u6001\uff08\u4f8b\u5982\u89c6\u89c9\u8bbe\u8ba1\u6216\u97f3\u4e50\u5236\u4f5c\u76f8\u5173\u5e94\u7528\uff09\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u4ecd\u5c06\u9700\u8981\u4e00\u4e2a\u5ba2\u6237\u7aef\u72b6\u6001\u7ba1\u7406\u5e93\u3002\n\u6b64\u65f6\uff0c\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0cReact Query \u4e0d\u80fd\u4ee3\u66ff\u672c\u5730/\u5ba2\u6237\u7aef\u72b6\u6001\u7ba1\u7406\u3002\n\u4f46\u662f\uff0c\u8bf7\u653e\u5fc3\uff0cReact Query \u4f9d\u65e7\u53ef\u4ee5\u4e0e\u5927\u591a\u6570\u5ba2\u6237\u7aef\u72b6\u6001\u7ba1\u7406\u5668\u4e00\u8d77\u4f7f\u7528\uff0c\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u3002")),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u505a\u4f5ccontrived\u7684\u4f8b\u5b50"},"\u4e00\u4e2a\u201c\u505a\u4f5c\u201d\uff08Contrived\uff09\u7684\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u6709\u4e00\u4e9b\u7531\u5168\u5c40\u72b6\u6001\u5e93\u7ba1\u7406\u7684\u201c\u5168\u5c40\u201d\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const globalState = {\n  projects,\n  teams,\n  tasks,\n  users,\n  themeMode,\n  sidebarStatus,\n}\n")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5e93\u6b63\u5728\u7f13\u5b58 4 \u79cd\u7c7b\u578b\u7684\u670d\u52a1\u5668\u72b6\u6001\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"projects"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teams"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tasks"),", \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"users"),"\u3002\n\u5982\u679c\u6211\u4eec\u8981\u5c06\u8fd9\u4e9b\u670d\u52a1\u5668\u72b6\u6001\u79fb\u81f3 React Query\uff0c\u5219\u5269\u4f59\u7684\u5168\u5c40\u72b6\u6001\u5c06\u66f4\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const globalState = {\n  themeMode,\n  sidebarStatus,\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u901a\u8fc7\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"useMutation"),"\u7b49\u4e00\u4e9b Hook \u8c03\u7528\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5220\u9664\u7528\u4e8e\u7ba1\u7406\u670d\u52a1\u5668\u72b6\u6001\u7684\u6240\u6709\u6837\u677f\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectors"),(0,a.kt)("li",{parentName:"ul"},"Action Creators"),(0,a.kt)("li",{parentName:"ul"},"Middlewares"),(0,a.kt)("li",{parentName:"ul"},"Reducers"),(0,a.kt)("li",{parentName:"ul"},"Loading/Error/Result states"),(0,a.kt)("li",{parentName:"ul"},"Contexts")),(0,a.kt)("p",null,"\u5220\u9664\u6240\u6709\u8fd9\u4e9b\u5185\u5bb9\u540e\uff0c\u60a8\u53ef\u80fd\u4f1a\u95ee\u81ea\u5df1\uff1a\u201c\u5bf9\u4e8e\u8fd9\u4e2a\u5fae\u5c0f\u7684\u5168\u5c40\u72b6\u6001\uff0c\u7ee7\u7eed\u4f7f\u7528\u4e00\u4e2a\u5ba2\u6237\u7aef\u72b6\u6001\u7ba1\u7406\u5668",(0,a.kt)("strong",{parentName:"p"},"\u503c\u5f97"),"\u5417\uff1f\u201d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e00\u5207\u53d6\u51b3\u4e8e\u4f60\uff01")),(0,a.kt)("p",null,"React Query \u7684\u4f5c\u7528\u5f88\u660e\u663e\u3002\u5b83\u4ece\u60a8\u7684\u5e94\u7528\u4e2d\u5220\u9664\u4e86\u7528\u4e8e\u5f02\u6b65\u8fde\u63a5\u7684\u6837\u677f\u4ee3\u7801\uff0c\u5e76\u4ec5\u7528\u51e0\u884c\u4ee3\u7801\u66ff\u6362\u4e86\u5b83\u3002"),(0,a.kt)("p",null,"\u60a8\u8fd8\u7b49\u4ec0\u4e48\u5462\uff0c\u5feb\u53bb\u8bd5\u8bd5\u5427\uff01"))}u.isMDXComponent=!0}}]);