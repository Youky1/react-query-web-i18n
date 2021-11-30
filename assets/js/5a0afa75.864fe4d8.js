"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[8319],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"useMutation",title:"useMutation"},u=void 0,s={unversionedId:"reference/useMutation",id:"reference/useMutation",isDocsHomePage:!1,title:"useMutation",description:"`js",source:"@site/docs/reference/useMutation.md",sourceDirName:"reference",slug:"/reference/useMutation",permalink:"/react-query-web-i18n/reference/useMutation",editUrl:"https://github.com/cangSDARM/react-query-web-i18n/docs/reference/useMutation.md",version:"current",lastUpdatedAt:1638281731,formattedLastUpdatedAt:"11/30/2021",frontMatter:{id:"useMutation",title:"useMutation"}},m=[],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  data,\n  error,\n  isError,\n  isIdle,\n  isLoading,\n  isPaused,\n  isSuccess,\n  mutate,\n  mutateAsync,\n  reset,\n  status,\n} = useMutation(mutationFn, {\n  mutationKey,\n  onError,\n  onMutate,\n  onSettled,\n  onSuccess,\n  useErrorBoundary,\n  meta,\n});\n\nmutate(variables, {\n  onError,\n  onSettled,\n  onSuccess,\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutationFn: (variables: TVariables) => Promise<TData>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},"A function that performs an asynchronous task and returns a promise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables")," is an object that ",(0,i.kt)("inlineCode",{parentName:"li"},"mutate")," will pass to your ",(0,i.kt)("inlineCode",{parentName:"li"},"mutationFn")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutationKey: string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"A mutation key can be set to inherit defaults set with ",(0,i.kt)("inlineCode",{parentName:"li"},"queryClient.setMutationDefaults")," or to identify the mutation in the devtools."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onMutate: (variables: TVariables) => Promise<TContext | void> | TContext | void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive"),(0,i.kt)("li",{parentName:"ul"},"Useful to perform optimistic updates to a resource in hopes that the mutation succeeds"),(0,i.kt)("li",{parentName:"ul"},"The value returned from this function will be passed to both the ",(0,i.kt)("inlineCode",{parentName:"li"},"onError")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"onSettled")," functions in the event of a mutation failure and can be useful for rolling back optimistic updates."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSuccess: (data: TData, variables: TVariables, context?: TContext) => Promise<unknown> | void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire when the mutation is successful and will be passed the mutation's result."),(0,i.kt)("li",{parentName:"ul"},"If a promise is returned, it will be awaited and resolved before proceeding"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onError: (err: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire if the mutation encounters an error and will be passed the error."),(0,i.kt)("li",{parentName:"ul"},"If a promise is returned, it will be awaited and resolved before proceeding"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onSettled: (data: TData, error: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error"),(0,i.kt)("li",{parentName:"ul"},"If a promise is returned, it will be awaited and resolved before proceeding"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry: boolean | number | (failureCount: number, error: TError) => boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", failed mutations will not retry by default."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", failed mutations will retry infinitely."),(0,i.kt)("li",{parentName:"ul"},"If set to an ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),", failed mutations will retry until the failed mutations count meets that number."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryDelay: number | (retryAttempt: number, error: TError) => number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This function receives a ",(0,i.kt)("inlineCode",{parentName:"li"},"retryAttempt")," integer and the actual Error and returns the delay to apply before the next attempt in milliseconds."),(0,i.kt)("li",{parentName:"ul"},"A function like ",(0,i.kt)("inlineCode",{parentName:"li"},"attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)")," applies exponential backoff."),(0,i.kt)("li",{parentName:"ul"},"A function like ",(0,i.kt)("inlineCode",{parentName:"li"},"attempt => attempt * 1000")," applies linear backoff."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useErrorBoundary: undefined | boolean | (error: TError) => boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to the global query config's ",(0,i.kt)("inlineCode",{parentName:"li"},"useErrorBoundary")," value, which is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if you want mutation errors to be thrown in the render phase and propagate to the nearest error boundary"),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to disable the behavior of throwing errors to the error boundary."),(0,i.kt)("li",{parentName:"ul"},"If set to a function, it will be passed the error and should return a boolean indicating whether to show the error in an error boundary (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") or return the error as state (",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta: Record<string, unknown>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"If set, stores additional information on the mutation cache entry that can be used as needed. It will be accessible wherever the ",(0,i.kt)("inlineCode",{parentName:"li"},"mutation")," is available (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"onError"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"onSuccess")," functions of the ",(0,i.kt)("inlineCode",{parentName:"li"},"MutationCache"),").")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutate: (variables: TVariables, { onSuccess, onSettled, onError }) => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The mutation function you can call with variables to trigger the mutation and optionally override options passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"useMutation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables: TVariables"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional"),(0,i.kt)("li",{parentName:"ul"},"The variables object to pass to the ",(0,i.kt)("inlineCode",{parentName:"li"},"mutationFn"),"."))),(0,i.kt)("li",{parentName:"ul"},"Remaining options extend the same options described above in the ",(0,i.kt)("inlineCode",{parentName:"li"},"useMutation")," hook."),(0,i.kt)("li",{parentName:"ul"},"If you make multiple requests, ",(0,i.kt)("inlineCode",{parentName:"li"},"onSuccess")," will fire only after the latest call you've made."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutateAsync: (variables: TVariables, { onSuccess, onSettled, onError }) => Promise<TData>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"mutate")," but returns a promise which can be awaited."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status: string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idle")," initial status prior to the mutation function executing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loading")," if the mutation is currently executing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," if the last mutation attempt resulted in an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"success")," if the last mutation attempt was successful."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isIdle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isLoading"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"isError"),": boolean variables derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: undefined | unknown"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"The last successfully resolved data for the query."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error: null | TError"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The error object for the query, if an error was encountered."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reset: () => void"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A function to clean the mutation internal state (i.e., it resets the mutation to its initial state).")))))}d.isMDXComponent=!0}}]);