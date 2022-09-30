"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[9471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,N=d["".concat(u,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(N,r(r({ref:t},s),{},{components:n})):a.createElement(N,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={id:"useQuery",title:"useQuery"},r=void 0,o={unversionedId:"reference/useQuery",id:"version-v3/reference/useQuery",title:"useQuery",description:"Options",source:"@site/versioned_docs/version-v3/reference/useQuery.md",sourceDirName:"reference",slug:"/reference/useQuery",permalink:"/react-query-web-i18n/v3/reference/useQuery",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/versioned_docs/version-v3/reference/useQuery.md",tags:[],version:"v3",lastUpdatedAt:1664524864,formattedLastUpdatedAt:"9/30/2022",frontMatter:{id:"useQuery",title:"useQuery"}},u={},p=[],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  data,\n  dataUpdatedAt,\n  error,\n  errorUpdatedAt,\n  failureCount,\n  isError,\n  isFetched,\n  isFetchedAfterMount,\n  isFetching,\n  isIdle,\n  isLoading,\n  isLoadingError,\n  isPlaceholderData,\n  isPreviousData,\n  isRefetchError,\n  isStale,\n  isSuccess,\n  refetch,\n  remove,\n  status,\n} = useQuery(queryKey, queryFn?, {\n  cacheTime,\n  enabled,\n  initialData,\n  initialDataUpdatedAt\n  isDataEqual,\n  keepPreviousData,\n  meta,\n  notifyOnChangeProps,\n  notifyOnChangePropsExclusions,\n  onError,\n  onSettled,\n  onSuccess,\n  placeholderData,\n  queryKeyHashFn,\n  refetchInterval,\n  refetchIntervalInBackground,\n  refetchOnMount,\n  refetchOnReconnect,\n  refetchOnWindowFocus,\n  retry,\n  retryOnMount,\n  retryDelay,\n  select,\n  staleTime,\n  structuralSharing,\n  suspense,\n  useErrorBoundary,\n})\n\n// or using the object syntax\n\nconst result = useQuery({\n  queryKey,\n  queryFn,\n  enabled,\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryKey: string | unknown[]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},"The query key to use for this query."),(0,i.kt)("li",{parentName:"ul"},"The query key will be hashed into a stable hash. See ",(0,i.kt)("a",{parentName:"li",href:"../guides&concepts/query-keys"},"Query Keys")," for more information."),(0,i.kt)("li",{parentName:"ul"},"The query will automatically update when this key changes (as long as ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," is not set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryFn: (context: QueryFunctionContext) => Promise<TData>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required, but only if no default query function has been defined")," See ",(0,i.kt)("a",{parentName:"li",href:"../guides&concepts/default-query-function"},"Default Query Function")," for more information."),(0,i.kt)("li",{parentName:"ul"},"The function that the query will use to request data."),(0,i.kt)("li",{parentName:"ul"},"Receives a ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryFunctionContext")," object with the following variables:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryKey: EnsuredQueryKey"),": the queryKey, guaranteed to be an Array"))),(0,i.kt)("li",{parentName:"ul"},"Must return a promise that will either resolve data or throw an error."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to disable this query from automatically running."),(0,i.kt)("li",{parentName:"ul"},"Can be used for ",(0,i.kt)("a",{parentName:"li",href:"../guides&concepts/dependent-queries"},"Dependent Queries"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry: boolean | number | (failureCount: number, error: TError) => boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", failed queries will not retry by default."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", failed queries will retry infinitely."),(0,i.kt)("li",{parentName:"ul"},"If set to a ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", failed queries will retry until the failed query count meets that number."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryOnMount: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the query will not be retried on mount if it contains an error. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryDelay: number | (retryAttempt: number, error: TError) => number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This function receives a ",(0,i.kt)("inlineCode",{parentName:"li"},"retryAttempt")," integer and the actual Error and returns the delay to apply before the next attempt in milliseconds."),(0,i.kt)("li",{parentName:"ul"},"A function like ",(0,i.kt)("inlineCode",{parentName:"li"},"attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)")," applies exponential backoff."),(0,i.kt)("li",{parentName:"ul"},"A function like ",(0,i.kt)("inlineCode",{parentName:"li"},"attempt => attempt * 1000")," applies linear backoff."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staleTime: number | Infinity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},"The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),", the data will never be considered stale"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheTime: number | Infinity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"5 * 60 * 1000")," (5 minutes)"),(0,i.kt)("li",{parentName:"ul"},"The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different cache times are specified, the longest one will be used."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),", will disable garbage collection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryKeyHashFn: (queryKey: QueryKey) => string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If specified, this function is used to hash the ",(0,i.kt)("inlineCode",{parentName:"li"},"queryKey")," to a string."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetchInterval: number | false | ((data: TData | undefined, query: Query) => number | false)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set to a number, all queries will continuously refetch at this frequency in milliseconds"),(0,i.kt)("li",{parentName:"ul"},"If set to a function, the function will be executed with the latest data and query to compute a frequency"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetchIntervalInBackground: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", queries that are set to continuously refetch with a ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchInterval")," will continue to refetch while their tab/window is in the background"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'refetchOnMount: boolean | "always" | ((query: Query) => boolean | "always")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the query will refetch on mount if the data is stale."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the query will not refetch on mount."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"always"'),", the query will always refetch on mount."),(0,i.kt)("li",{parentName:"ul"},"If set to a function, the function will be executed with the query to compute the value"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the query will refetch on window focus if the data is stale."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the query will not refetch on window focus."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"always"'),", the query will always refetch on window focus."),(0,i.kt)("li",{parentName:"ul"},"If set to a function, the function will be executed with the query to compute the value"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'refetchOnReconnect: boolean | "always" | ((query: Query) => boolean | "always")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the query will refetch on reconnect if the data is stale."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", the query will not refetch on reconnect."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"always"'),", the query will always refetch on reconnect."),(0,i.kt)("li",{parentName:"ul"},"If set to a function, the function will be executed with the query to compute the value"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'notifyOnChangeProps: string[] | "tracked"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, the component will only re-render if any of the listed properties change."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"['data', 'error']")," for example, the component will only re-render when the ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," properties change."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"tracked"'),", access to properties will be tracked, and the component will only re-render when one of the tracked properties change."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notifyOnChangePropsExclusions: string[]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, the component will not re-render if any of the listed properties change."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"['isStale']")," for example, the component will not re-render when the ",(0,i.kt)("inlineCode",{parentName:"li"},"isStale")," property changes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSuccess: (data: TData) => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire any time the query successfully fetches new data or the cache is updated via ",(0,i.kt)("inlineCode",{parentName:"li"},"setQueryData"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onError: (error: TError) => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire if the query encounters an error and will be passed the error."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSettled: (data?: TData, error?: TError) => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire any time the query is either successfully fetched or errors and be passed either the data or error"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"select: (data: TData) => unknown"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This option can be used to transform or select a part of the data returned by the query function."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suspense: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," to enable suspense mode."),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," will suspend when ",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'loading'")),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," will throw runtime errors when ",(0,i.kt)("inlineCode",{parentName:"li"},"status === 'error'")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialData: TData | () => TData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, this value will be used as the initial data for the query cache (as long as the query hasn't been created or cached yet)"),(0,i.kt)("li",{parentName:"ul"},"If set to a function, the function will be called ",(0,i.kt)("strong",{parentName:"li"},"once")," during the shared/root query initialization, and be expected to synchronously return the initialData"),(0,i.kt)("li",{parentName:"ul"},"Initial data is considered stale by default unless a ",(0,i.kt)("inlineCode",{parentName:"li"},"staleTime")," has been set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialData")," ",(0,i.kt)("strong",{parentName:"li"},"is persisted")," to the cache"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialDataUpdatedAt: number | (() => number | undefined)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, this value will be used as the time (in milliseconds) of when the ",(0,i.kt)("inlineCode",{parentName:"li"},"initialData")," itself was last updated."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholderData: TData | () => TData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, this value will be used as the placeholder data for this particular query observer while the query is still in the ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," data and no initialData has been provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholderData")," is ",(0,i.kt)("strong",{parentName:"li"},"not persisted")," to the cache"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keepPreviousData: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"If set, any previous ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," will be kept when fetching new data because the query key changed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"structuralSharing: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", structural sharing between query results will be disabled."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useErrorBoundary: undefined | boolean | (error: TError, query: Query) => boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to the global query config's ",(0,i.kt)("inlineCode",{parentName:"li"},"useErrorBoundary")," value, which is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if you want errors to be thrown in the render phase and propagate to the nearest error boundary"),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to disable ",(0,i.kt)("inlineCode",{parentName:"li"},"suspense"),"'s default behavior of throwing errors to the error boundary."),(0,i.kt)("li",{parentName:"ul"},"If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") or return the error as state (",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta: Record<string, unknown>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, stores additional information on the query cache entry that can be used as needed. It will be accessible wherever the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is available, and is also part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryFunctionContext")," provided to the ",(0,i.kt)("inlineCode",{parentName:"li"},"queryFn"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status: String"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idle")," if the query is idle. This only happens if a query is initialized with ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled: false")," and no initial data is available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading"),' if the query is in a "hard" loading state. This means there is no cached data and the query is currently fetching, eg ',(0,i.kt)("inlineCode",{parentName:"li"},"isFetching === true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," if the query attempt resulted in an error. The corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," property has the error received from the attempted fetch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"success")," if the query has received a response with no errors and is ready to display its data. The corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," property on the query is the data received from the successful fetch or if the query's ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," property is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," and has not been fetched yet ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," is the first ",(0,i.kt)("inlineCode",{parentName:"li"},"initialData")," supplied to the query on initialization."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isIdle: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable above, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isLoading: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable above, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable above, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isError: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable above, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isLoadingError: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the query failed while fetching for the first time."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isRefetchError: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the query failed while refetching."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: TData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,i.kt)("li",{parentName:"ul"},"The last successfully resolved data for the query."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataUpdatedAt: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The timestamp for when the query most recently returned the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," as ",(0,i.kt)("inlineCode",{parentName:"li"},'"success"'),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error: null | TError"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"The error object for the query, if an error was thrown."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errorUpdatedAt: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The timestamp for when the query most recently returned the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," as ",(0,i.kt)("inlineCode",{parentName:"li"},'"error"'),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isStale: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the data in the cache is invalidated or if the data is older than the given ",(0,i.kt)("inlineCode",{parentName:"li"},"staleTime"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPlaceholderData: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the data shown is the placeholder data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPreviousData: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"keepPreviousData")," is set and data from the previous query is returned."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetched: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the query has been fetched."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetchedAfterMount: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the query has been fetched after the component mounted."),(0,i.kt)("li",{parentName:"ul"},"This property can be used to not show any previously cached data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetching: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," whenever a request is in-flight, which includes initial ",(0,i.kt)("inlineCode",{parentName:"li"},"loading")," as well as background refetches."),(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the query is currently fetching, including background fetching."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"failureCount: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The failure count for the query."),(0,i.kt)("li",{parentName:"ul"},"Incremented every time the query fails."),(0,i.kt)("li",{parentName:"ul"},"Reset to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," when the query succeeds."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errorUpdateCount: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The sum of all errors."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A function to manually refetch the query."),(0,i.kt)("li",{parentName:"ul"},"If the query errors, the error will only be logged. If you want an error to be thrown, pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"throwOnError: true")," option"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"cancelRefetch")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", then the current request will be cancelled before a new request is made"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove: () => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A function to remove the query from the cache.")))))}m.isMDXComponent=!0}}]);