(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3761],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,g=l["".concat(s,".").concat(f)]||l[f]||p[f]||i;return t?r.createElement(g,c(c({ref:n},d),{},{components:t})):r.createElement(g,c({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=l;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8305:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),c={id:"background-fetching-indicators",title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668"},a={unversionedId:"guides&concepts/background-fetching-indicators",id:"guides&concepts/background-fetching-indicators",isDocsHomePage:!1,title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668",description:"\u67e5\u8be2\u7684status === 'loading'\u72b6\u6001\u8db3\u4ee5\u663e\u793a\u67e5\u8be2\u7684\u521d\u59cb\u786c\u52a0\u8f7d\u72b6\u6001\uff0c\u4f46\u662f\u6709\u65f6\u60a8\u53ef\u80fd\u60f3\u663e\u793a\u4e00\u4e2a\u989d\u5916\u7684\u6307\u793a\u7b26\uff0c\u8868\u660e\u8be5\u67e5\u8be2\u6b63\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3002 \u4e3a\u6b64\uff0c\u8fd8\u4e3a\u60a8\u63d0\u4f9b\u4e86\u4e00\u4e2aisFetching\u7684\u5e03\u5c14\u503c\uff0c\u65e0\u8bbastatus\u53d8\u91cf\u7684\u72b6\u6001\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8868\u793a\u6570\u636e\u6b63\u5728\u83b7\u53d6\u4e2d\uff1a",source:"@site/docs/guides&concepts/background-fetching-indicators.md",sourceDirName:"guides&concepts",slug:"/guides&concepts/background-fetching-indicators",permalink:"/react-query-web-i18n/guides&concepts/background-fetching-indicators",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/guides&concepts/background-fetching-indicators.md",version:"current",lastUpdatedAt:1621249769,formattedLastUpdatedAt:"5/17/2021",frontMatter:{id:"background-fetching-indicators",title:"\u52a0\u8f7d\u72b6\u6001\u6307\u793a\u5668"},sidebar:"zhCN",previous:{title:"\u6709\u4f9d\u8d56\u7684\u67e5\u8be2",permalink:"/react-query-web-i18n/guides&concepts/dependent-queries"},next:{title:"\u7a97\u53e3\u7126\u70b9\u5f71\u54cd\u7684\u6570\u636e\u5237\u65b0",permalink:"/react-query-web-i18n/guides&concepts/window-focus-refetching"}},s=[{value:"\u663e\u793a\u5168\u5c40\u540e\u53f0\u52a0\u8f7d\u7684\u72b6\u6001",id:"\u663e\u793a\u5168\u5c40\u540e\u53f0\u52a0\u8f7d\u7684\u72b6\u6001",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u67e5\u8be2\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"status === 'loading'"),"\u72b6\u6001\u8db3\u4ee5\u663e\u793a\u67e5\u8be2\u7684\u521d\u59cb\u786c\u52a0\u8f7d\u72b6\u6001\uff0c\u4f46\u662f\u6709\u65f6\u60a8\u53ef\u80fd\u60f3\u663e\u793a\u4e00\u4e2a\u989d\u5916\u7684\u6307\u793a\u7b26\uff0c\u8868\u660e\u8be5\u67e5\u8be2\u6b63\u5728\u540e\u53f0\u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3002 \u4e3a\u6b64\uff0c\u8fd8\u4e3a\u60a8\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),"\u7684\u5e03\u5c14\u503c\uff0c\u65e0\u8bba",(0,i.kt)("inlineCode",{parentName:"p"},"status"),"\u53d8\u91cf\u7684\u72b6\u6001\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8868\u793a\u6570\u636e\u6b63\u5728\u83b7\u53d6\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Todos() {\n  const { status, data: todos, error, isFetching } = useQuery(\n    'todos',\n    fetchTodos,\n  )\n\n  return status === 'loading' ? (\n    <span>Loading...</span>\n  ) : status === 'error' ? (\n    <span>Error: {error.message}</span>\n  ) : (\n    <>\n      {isFetching ? <div>Refreshing...</div> : null}\n\n      <div>\n        {todos.map((todo) => (\n          <Todo todo={todo} />\n        ))}\n      </div>\n    </>\n  )\n}\n")),(0,i.kt)("h2",{id:"\u663e\u793a\u5168\u5c40\u540e\u53f0\u52a0\u8f7d\u7684\u72b6\u6001"},"\u663e\u793a\u5168\u5c40\u540e\u53f0\u52a0\u8f7d\u7684\u72b6\u6001"),(0,i.kt)("p",null,"\u9664\u4e86\u5355\u4e2a\u67e5\u8be2\u7684\u52a0\u8f7d\u72b6\u6001\u5916\uff0c\u5982\u679c\u8981\u5728\u4efb\u4f55\u67e5\u8be2\u6b63\u5728\u83b7\u53d6\u6570\u636e\u65f6\uff08\u5305\u62ec\u5728\u540e\u53f0\uff09\u663e\u793a\u4e00\u4e2a\u5168\u5c40\u7684\u52a0\u8f7d\u6307\u793a\u5668\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"useIsFetching"),"Hook\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useIsFetching } from 'react-query'\n\nfunction GlobalLoadingIndicator() {\n  const isFetching = useIsFetching()\n\n  return isFetching ? (\n    <div>Queries are fetching in the background...</div>\n  ) : null\n}\n")))}d.isMDXComponent=!0}}]);