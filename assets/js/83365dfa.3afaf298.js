(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6309],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(n),c=r,d=f["".concat(u,".").concat(c)]||f[c]||m[c]||i;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7408:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"useInfiniteQuery",title:"useInfiniteQuery"},o={unversionedId:"reference/useInfiniteQuery",id:"reference/useInfiniteQuery",isDocsHomePage:!1,title:"useInfiniteQuery",description:"`js",source:"@site/docs/reference/useInfiniteQuery.md",sourceDirName:"reference",slug:"/reference/useInfiniteQuery",permalink:"/react-query-web-i18n/reference/useInfiniteQuery",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/useInfiniteQuery.md",version:"current",lastUpdatedAt:1621249769,formattedLastUpdatedAt:"5/17/2021",frontMatter:{id:"useInfiniteQuery",title:"useInfiniteQuery"}},u=[],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  fetchNextPage,\n  fetchPreviousPage,\n  hasNextPage,\n  hasPreviousPage,\n  isFetchingNextPage,\n  isFetchingPreviousPage,\n  ...result\n} = useInfiniteQuery(queryKey, ({ pageParam = 1 }) => fetchPage(pageParam), {\n  ...options,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,\n  getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("p",null,"The options for ",(0,i.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery")," are identical to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"useQuery")," hook")," with the addition of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryFn: (context: QueryFunctionContext) => Promise<TData>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required, but only if no default query function has been defined")," ",(0,i.kt)("a",{parentName:"li",href:"/guides&concepts/default-query-function"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultQueryFn"))),(0,i.kt)("li",{parentName:"ul"},"The function that the query will use to request data."),(0,i.kt)("li",{parentName:"ul"},"Receives a ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryFunctionContext")," object with the following variables:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryKey: EnsuredQueryKey"),": the queryKey, guaranteed to be an Array"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageParam: unknown | undefined")))),(0,i.kt)("li",{parentName:"ul"},"Must return a promise that will either resolve data or throw an error."),(0,i.kt)("li",{parentName:"ul"},"Make sure you return the data ",(0,i.kt)("em",{parentName:"li"},"and")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"pageParam")," if needed for use in the props below."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getNextPageParam: (lastPage, allPages) => unknown | undefined"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When new data is received for this query, this function receives both the last page of the infinite list of data and the full array of all pages."),(0,i.kt)("li",{parentName:"ul"},"It should return a ",(0,i.kt)("strong",{parentName:"li"},"single variable")," that will be passed as the last optional parameter to your query function."),(0,i.kt)("li",{parentName:"ul"},"Return ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," to indicate there is no next page available."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam: (firstPage, allPages) => unknown | undefined"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When new data is received for this query, this function receives both the first page of the infinite list of data and the full array of all pages."),(0,i.kt)("li",{parentName:"ul"},"It should return a ",(0,i.kt)("strong",{parentName:"li"},"single variable")," that will be passed as the last optional parameter to your query function."),(0,i.kt)("li",{parentName:"ul"},"Return ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," to indicate there is no previous page available.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("p",null,"The returned properties for ",(0,i.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery")," are identical to the ",(0,i.kt)("a",{parentName:"p",href:"/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"useQuery")," hook"),", with the addition of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data.pages: TData[]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Array containing all pages."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data.pageParams: unknown[]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Array containing all page params."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetchingNextPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," while fetching the next page with ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetchingPreviousPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," while fetching the previous page with ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This function allows you to fetch the next "page" of results.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options.pageParam: unknown")," allows you to manually specify a page param instead of using ",(0,i.kt)("inlineCode",{parentName:"li"},"getNextPageParam"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<UseInfiniteQueryResult>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This function allows you to fetch the previous "page" of results.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options.pageParam: unknown")," allows you to manually specify a page param instead of using ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasNextPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if there is a next page to be fetched (known via the ",(0,i.kt)("inlineCode",{parentName:"li"},"getNextPageParam")," option)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasPreviousPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if there is a previous page to be fetched (known via the ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam")," option).")))))}s.isMDXComponent=!0}}]);