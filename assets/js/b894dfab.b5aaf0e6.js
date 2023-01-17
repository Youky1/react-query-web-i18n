"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[1859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={id:"devtools",title:"\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177"},o=void 0,i={unversionedId:"getstarted/devtools",id:"getstarted/devtools",title:"\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177",description:"\u6b22\u547c\u5427\uff0c\u56e0\u4e3a React Query \u6709\u4e13\u7528\u7684\u5f00\u53d1\u5de5\u5177! \ud83e\udd73",source:"@site/react/getstarted/devtools.md",sourceDirName:"getstarted",slug:"/getstarted/devtools",permalink:"/react-query-web-i18n/react/getstarted/devtools",draft:!1,editUrl:"https://github.com/cangSDARM/react-query-web-i18n/blob/master/react/getstarted/devtools.md",tags:[],version:"current",lastUpdatedAt:1673945395,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"devtools",title:"\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177"},sidebar:"zhCN",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/react-query-web-i18n/react/getstarted/quick-start"},next:{title:"\u89c6\u9891\u6559\u7a0b",permalink:"/react-query-web-i18n/react/getstarted/videos&talks"}},p={},s=[{value:"\u5b89\u88c5\u548c\u5bfc\u5165\u5de5\u5177",id:"\u5b89\u88c5\u548c\u5bfc\u5165\u5de5\u5177",level:2},{value:"\u6d6e\u52a8\u6a21\u5f0f",id:"\u6d6e\u52a8\u6a21\u5f0f",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:3},{value:"\u5d4c\u5165\u6a21\u5f0f",id:"\u5d4c\u5165\u6a21\u5f0f",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879-1",level:3},{value:"\u751f\u4ea7\u6a21\u5f0f\u4e2d\u4f7f\u7528 devtools",id:"\u751f\u4ea7\u6a21\u5f0f\u4e2d\u4f7f\u7528-devtools",level:2},{value:"\u73b0\u4ee3\u7684\u6253\u5305\u5668",id:"\u73b0\u4ee3\u7684\u6253\u5305\u5668",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b22\u547c\u5427\uff0c\u56e0\u4e3a React Query \u6709\u4e13\u7528\u7684\u5f00\u53d1\u5de5\u5177! \ud83e\udd73"),(0,a.kt)("p",null,"\u5f53\u5f00\u59cb React Query \u65c5\u7a0b\u65f6\uff0c\u4f60\u4f1a\u5e0c\u671b\u8eab\u8fb9\u6709\u8fd9\u4e9b\u5f00\u53d1\u5de5\u5177\u3002\n\u5b83\u4eec\u6709\u52a9\u4e8e\u53ef\u89c6\u5316 React Query \u7684\u6240\u6709\u5185\u90e8\u5de5\u4f5c\u539f\u7406\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u4f60\u53d1\u73b0\u81ea\u5df1\u5904\u4e8e\u7d27\u8981\u5173\u5934\u65f6\uff0c\u8282\u7701\u4f60\u8c03\u8bd5\u7684\u65f6\u95f4!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u76ee\u524d",(0,a.kt)("strong",{parentName:"p"},"devtools \u8fd8\u4e0d\u652f\u6301 React Native"),"\u3002\u5982\u679c\u4f60\u60f3\u5e2e\u52a9\u6211\u4eec\u4f7f devtools \u53d8\u5f97\u5e73\u53f0\u65e0\u5173\uff0c\u8bf7\u8ba9\u6211\u4eec\u77e5\u9053!")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u548c\u5bfc\u5165\u5de5\u5177"},"\u5b89\u88c5\u548c\u5bfc\u5165\u5de5\u5177"),(0,a.kt)("p",null,"devtools \u5305\u73b0\u5728\u88ab\u62c6\u5206\u5f00\u6765\uff0c\u56e0\u6b64\u9700\u8981\u989d\u5916\u5b89\u88c5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @tanstack/react-query-devtools\n# or\n$ pnpm add @tanstack/react-query-devtools\n# or\n$ yarn add @tanstack/react-query-devtools\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u50cf\u8fd9\u6837\u5bfc\u5165\u5b83:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { ReactQueryDevtools } from "@tanstack/react-query-devtools";\n')),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV ==='production'"),"\u65f6\uff0cReact Query Devtools \u4e0d\u5305\u542b\u5728\u6253\u5305\u7ed3\u679c\u4e2d\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u624b\u52a8\u5728\u751f\u4ea7\u6784\u5efa\u671f\u95f4\u5c06\u5176\u6392\u9664\u3002"),(0,a.kt)("h2",{id:"\u6d6e\u52a8\u6a21\u5f0f"},"\u6d6e\u52a8\u6a21\u5f0f"),(0,a.kt)("p",null,"\u6d6e\u52a8\u6a21\u5f0f\u5c06 devtools \u4f5c\u4e3a\u4e00\u4e2a\u56fa\u5b9a\u7684\u6d6e\u52a8\u5143\u7d20\u6302\u8f7d\u5728\u5e94\u7528\u4e2d\uff0c\u5e76\u5728\u5c4f\u5e55\u4e00\u89d2\u63d0\u4f9b\u4e00\u4e2a\u5207\u6362\u6309\u94ae\u4ee5\u663e\u793a\u548c\u9690\u85cf devtools\u3002\u6b64\u5207\u6362\u72b6\u6001\u5c06\u5b58\u50a8\u5728 localStorage \u4e2d\u3002"),(0,a.kt)("p",null,"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u5c3d\u53ef\u80fd\u5730\u653e\u5728 React \u5e94\u7528\u7684\u9876\u90e8\u3002\u5b83\u79bb\u9875\u9762\u7684\u6839\u5143\u7d20\u8d8a\u8fd1\uff0c\u5b83\u5de5\u4f5c\u5f97\u8d8a\u597d!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ReactQueryDevtools } from "@tanstack/react-query-devtools";\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      {/* The rest of your application */}\n      <ReactQueryDevtools initialIsOpen={false} />\n    </QueryClientProvider>\n  );\n}\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialIsOpen: Boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u4f7f\u5f00\u53d1\u5de5\u5177\u9ed8\u8ba4\u4e3a\u6253\u5f00\uff0c\u5219\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"true")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"panelProps: PropsObject"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u8fd9\u4e2a\u7ed9\u9762\u677f\u6dfb\u52a0 props\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"className"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"style"),"(\u5408\u5e76\u548c\u8986\u76d6\u9ed8\u8ba4\u6837\u5f0f)\uff0c\u7b49\u7b49"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"closeButtonProps: PropsObject"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u8fd9\u4e2a\u5f80\u8c03\u8bd5\u9875\u9762\u7684\u5173\u95ed\u6309\u94ae\u6dfb\u52a0 props\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"className"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"style"),"(\u5408\u5e76\u548c\u8986\u76d6\u9ed8\u8ba4\u6837\u5f0f), ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick"),"(\u6269\u5c55\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f)\uff0c\u7b49\u7b49"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggleButtonProps: PropsObject"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u8fd9\u4e2a\u5f80\u8c03\u8bd5\u9875\u9762\u7684\u5207\u6362\u6309\u94ae\u6dfb\u52a0 props\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"className"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"style"),"(\u5408\u5e76\u548c\u8986\u76d6\u9ed8\u8ba4\u6837\u5f0f), ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick"),"(\u6269\u5c55\u9ed8\u8ba4\u5904\u7406\u7a0b\u5e8f)\uff0c\u7b49\u7b49"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom-left")),(0,a.kt)("li",{parentName:"ul"},"React Query \u5fbd\u6807\u7684\u4f4d\u7f6e\uff0c\u7528\u4e8e\u6253\u5f00\u548c\u5173\u95ed devtools \u9762\u677f"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'panelPosition?: "top" | "bottom" | "left" | "right"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom")),(0,a.kt)("li",{parentName:"ul"},"React Query devtools \u9762\u677f\u7684\u4f4d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context?: React.Context<QueryClient | undefined>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fd9\u4e2a\u6765\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 React Query \u4e0a\u4e0b\u6587\u3002\u5426\u5219\uff0c\u5c06\u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"defaultContext"))))),(0,a.kt)("h2",{id:"\u5d4c\u5165\u6a21\u5f0f"},"\u5d4c\u5165\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5d4c\u5165\u5f0f\u6a21\u5f0f\u4f1a\u5c06 devtools \u4f5c\u4e3a\u5e38\u89c4\u7ec4\u4ef6\u5d4c\u5165\u5230\u5e94\u7528\u4e2d\u3002\n\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u5176\u6837\u5f0f\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      {/* The rest of your application */}\n      <ReactQueryDevtoolsPanel style={styles} className={className} />\n    </QueryClientProvider>\n  );\n}\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e\u9879-1"},"\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\u6765\u8bbe\u7f6e\u5f00\u53d1\u5de5\u5177\u7684\u6837\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"style: StyleObject"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u6837\u5f0f\u8bbe\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"className: string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u6837\u5f0f\u914d\u7f6e\u7684 className \u5c5e\u6027"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showCloseButton?: boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u5728 devtools \u91cc\u663e\u793a\u5173\u95ed\u6309\u94ae"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"closeButtonProps: PropsObject"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed9\u5173\u95ed\u6309\u94ae\u6dfb\u52a0 props. \u4f8b\u5982\uff0c\u4f60\u60f3\u6539\u52a8 ",(0,a.kt)("inlineCode",{parentName:"li"},"className"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"style")," \u6765\u8986\u76d6\u9ed8\u8ba4\u7684\u6837\u5f0f, ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick")," \u66f4\u6539\u9ed8\u8ba4\u7684\u70b9\u51fb\u903b\u8f91, \u7b49.")))),(0,a.kt)("h2",{id:"\u751f\u4ea7\u6a21\u5f0f\u4e2d\u4f7f\u7528-devtools"},"\u751f\u4ea7\u6a21\u5f0f\u4e2d\u4f7f\u7528 devtools"),(0,a.kt)("p",null,"Devtools \u4f1a\u5728\u751f\u4ea7\u7f16\u8bd1\u9636\u6bb5\u88ab\u6392\u9664\u3002\n\u4f46\u662f\uff0c\u53ef\u4ee5\u901a\u8fc7\u61d2\u52a0\u8f7d\u6765\u5728\u751f\u4ea7\u6a21\u5f0f\u4e2d\u542f\u7528 devtools\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\nimport { Example } from "./Example";\n\nconst queryClient = new QueryClient();\n\nconst ReactQueryDevtoolsProduction = React.lazy(() =>\n  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(\n    (d) => ({\n      default: d.ReactQueryDevtools,\n    })\n  )\n);\n\nfunction App() {\n  const [showDevtools, setShowDevtools] = React.useState(false);\n\n  React.useEffect(() => {\n    // @ts-ignore\n    window.toggleDevtools = () => setShowDevtools((old) => !old);\n  }, []);\n\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Example />\n      <ReactQueryDevtools initialIsOpen />\n      {showDevtools && (\n        <React.Suspense fallback={null}>\n          <ReactQueryDevtoolsProduction />\n        </React.Suspense>\n      )}\n    </QueryClientProvider>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.toggleDevtools()")," \u5c06\u4e0b\u8f7d devtools \u7684\u6784\u5efa\u5305\uff0c\u7136\u540e\u5c55\u793a\u5b83\u4eec\u3002"),(0,a.kt)("h3",{id:"\u73b0\u4ee3\u7684\u6253\u5305\u5668"},"\u73b0\u4ee3\u7684\u6253\u5305\u5668"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6253\u5305\u5668\u652f\u6301\u5305\u5bfc\u51fa(package exports)\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const ReactQueryDevtoolsProduction = React.lazy(() =>\n  import("@tanstack/react-query-devtools/production").then((d) => ({\n    default: d.ReactQueryDevtools,\n  }))\n);\n')),(0,a.kt)("p",null,"\u5bf9\u5e94 TypeScript\uff0c\u4f60\u6216\u8bb8\u9700\u8981\u5728 tsconfig \u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleResolution: 'nodenext'"),"\uff0c\u8be5\u8bbe\u7f6e\u4ec5\u5728 TypeScript v4.7 \u53ca\u4ee5\u4e0a\u7248\u672c\u53ef\u7528\u3002"))}c.isMDXComponent=!0}}]);