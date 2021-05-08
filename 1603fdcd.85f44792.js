(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),s=function(e){var n=c.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return c.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return t?c.a.createElement(m,i(i({ref:n},u),{},{components:t})):c.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),c=t(7),o=(t(0),t(142)),a={id:"query-cancellation",title:"\u67e5\u8be2\u53d6\u6d88"},i={unversionedId:"guides&concepts/query-cancellation",id:"guides&concepts/query-cancellation",isDocsHomePage:!1,title:"\u67e5\u8be2\u53d6\u6d88",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u8fd4\u56de\u7684 Promise \u89e3\u6790\u4e4b\u524d\uff0c\u5378\u8f7d\u6216\u4e0d\u518d\u4f7f\u7528\u7684\u67e5\u8be2\u5c06\u88ab\u5ffd\u7565\u800c\u4e0d\u662f\u53d6\u6d88\u3002\u8fd9\u662f\u4e3a\u4ec0\u4e48\uff1f",source:"@site/docs/guides&concepts/query-cancellation.md",slug:"/guides&concepts/query-cancellation",permalink:"/react-query-web-i18n/guides&concepts/query-cancellation",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/query-cancellation.md",version:"current",lastUpdatedAt:1620443922,sidebar:"zhCN",previous:{title:"\u4e50\u89c2\u66f4\u65b0",permalink:"/react-query-web-i18n/guides&concepts/optimistic-updates"},next:{title:"\u6eda\u52a8\u6062\u590d",permalink:"/react-query-web-i18n/guides&concepts/scroll-restoration"}},l=[{value:"\u4f7f\u7528 <code>axios</code>",id:"\u4f7f\u7528-axios",children:[]},{value:"\u4f7f\u7528 <code>fetch</code>",id:"\u4f7f\u7528-fetch",children:[]},{value:"\u624b\u52a8\u53d6\u6d88",id:"\u624b\u52a8\u53d6\u6d88",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u8fd4\u56de\u7684 Promise \u89e3\u6790\u4e4b\u524d\uff0c\u5378\u8f7d\u6216\u4e0d\u518d\u4f7f\u7528\u7684\u67e5\u8be2\u5c06\u88ab\u5ffd\u7565\u800c\u4e0d\u662f\u53d6\u6d88\u3002\u8fd9\u662f\u4e3a\u4ec0\u4e48\uff1f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5927\u591a\u6570\u7a0b\u5e8f\u800c\u8a00\uff0c\u8fc7\u65f6\u7684\u67e5\u8be2\u53ef\u4ee5\u7b80\u5355\u7684\u5ffd\u7565\u6389"),Object(o.b)("li",{parentName:"ul"},"\u53d6\u6d88\u76f8\u5173\u7684 API \u53ef\u80fd\u4e0d\u662f\u5bf9\u6bcf\u4e2a\u67e5\u8be2\u51fd\u6570\u90fd\u53ef\u7528"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u53d6\u6d88\u76f8\u5173\u7684 API\uff0c\u5219\u5b83\u4eec\u5728\u7a0b\u5e8f/\u5e93\u4e4b\u95f4\u7684\u5b9e\u73b0\u65b9\u5f0f\u901a\u5e38\u4f1a\u6709\u6240\u4e0d\u540c\uff08\u4f8b\u5982\uff0cFetch\uff0cAxios \u548c XMLHttpRequest\uff09")),Object(o.b)("p",null,"\u4f46\u662f\u4e0d\u7528\u62c5\u5fc3\uff01\n\u5982\u679c\u60a8\u7684\u67e5\u8be2\u9700\u8981\u9ad8\u5e26\u5bbd\uff08high-bandwidth\uff09\u6216\u8005\u4e0b\u8f7d\u6210\u672c\u975e\u5e38\u4e4b\u9ad8\uff0c\u90a3\u4e48 React Query \u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u8fc7\u4ee4\u724c\uff08\u6216\u4e0e\u4e4b\u76f8\u5173\u7684\u4e1c\u897f\u7684 API\uff09\u6765\u53d6\u6d88\u67e5\u8be2\u7684\u8bf7\u6c42\uff08",Object(o.b)("strong",{parentName:"p"},"cancel")," query requests\uff09\u7684\u901a\u7528\u65b9\u6cd5\u3002\n\u8981\u4f7f\u7528\u8be5\u7279\u6027\uff0c\u8bf7\u5c06\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\u9644\u52a0\u5230\u76f8\u5173\u8bf7\u6c42\u8fd4\u56de\u7684 Promise \u4e0a\u3002\n\u5f53\u67e5\u8be2\u8fc7\u671f\u6216\u4e0d\u6d3b\u52a8\u65f6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"promise.cancel")," \u51fd\u6570\u5c06\u88ab\u8c03\u7528\uff08\u5982\u679c\u53ef\u7528\uff09\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528-axios"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"h2"},"axios")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { CancelToken } from 'axios'\n\nconst query = useQuery('todos', () => {\n  // \u4e3a\u6b64\u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 CancelToken \u6e90\n  const source = CancelToken.source()\n\n  const promise = axios.get('/todos', {\n    // \u4f20\u5165\u8be5\u6e90\u5230 cancelToken\n    cancelToken: source.token,\n  })\n\n  // \u5982\u679c React Query \u8c03\u7528 `promise.cancel` \u65b9\u6cd5\uff0c\u5219\u53d6\u6d88\u8bf7\u6c42\n  promise.cancel = () => {\n    source.cancel('Query was cancelled by React Query')\n  }\n\n  return promise\n})\n")),Object(o.b)("h2",{id:"\u4f7f\u7528-fetch"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"h2"},"fetch")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const query = useQuery('todos', () => {\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 AbortController \u5b9e\u4f8b\n  const controller = new AbortController()\n  // \u83b7\u53d6 abortController \u7684\u4fe1\u53f7(signal)\n  const signal = controller.signal\n\n  const promise = fetch('/todos', {\n    method: 'get',\n    // \u4f20\u5165\u4fe1\u53f7\n    signal,\n  })\n\n  // \u5982\u679c React Query \u8c03\u7528 `promise.cancel` \u65b9\u6cd5\uff0c\u5219\u53d6\u6d88\u8bf7\u6c42\n  promise.cancel = () => controller.abort()\n\n  return promise\n})\n")),Object(o.b)("h2",{id:"\u624b\u52a8\u53d6\u6d88"},"\u624b\u52a8\u53d6\u6d88"),Object(o.b)("p",null,"\u6709\u65f6\uff0c\u60a8\u60f3\u8981\u624b\u52a8\u53d6\u6d88\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u8bf7\u6c42\u9700\u8981\u5f88\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\uff0c\u5219\u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u5355\u51fb\u201c\u53d6\u6d88\u201d\u6309\u94ae\u6765\u505c\u6b62\u8bf7\u6c42\u3002\n\u4e3a\u6b64\uff0c\u60a8\u53ea\u9700\u8981\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"queryClient.cancelQueries(key)"),"\u3002\n\u5982\u679c ",Object(o.b)("inlineCode",{parentName:"p"},"promise.cancel")," \u53ef\u7528\uff0cReact Query \u5c06\u53d6\u6d88\u8bf7\u6c42\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const [queryKey] = useState('todos')\n\nconst query = useQuery(queryKey, () => {\n  const controller = new AbortController()\n  const signal = controller.signal\n\n  const promise = fetch('/todos', {\n    method: 'get',\n    signal,\n  })\n\n  // \u5982\u679c React Query \u8c03\u7528 `promise.cancel` \u65b9\u6cd5\uff0c\u5219\u53d6\u6d88\u8bf7\u6c42\n  promise.cancel = () => controller.abort()\n\n  return promise\n})\n\nconst queryClient = useQueryClient()\n\nreturn (\n  <button\n    onClick={(e) => {\n      e.preventDefault()\n      //\u53d6\u6d88\u8bf7\u6c42\n      queryClient.cancelQueries(queryKey)\n    }}\n  >\n    Cancel\n  </button>\n)\n")))}s.isMDXComponent=!0}}]);