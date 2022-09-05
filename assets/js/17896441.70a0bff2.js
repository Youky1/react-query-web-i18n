"use strict";(self.webpackChunkreact_query_web_i18n=self.webpackChunkreact_query_web_i18n||[]).push([[7918],{2044:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(7294),l=a(6010),s=a(7462),i=a(5999),r=a(9960);function c(e){const{permalink:t,title:a,subLabel:l}=e;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,s.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,s.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(2263),m=a(5551),u=a(650);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.Z)(),{pluginId:i}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,u.J)(i),{latestDocSuggestion:c,latestVersionSuggestion:o}=(0,m.Jo)(i),v=c??(E=o).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:o.label,to:v.path,onClick:()=>r(o.name)})))}function g(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(1217);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const L="iconEdit_dcUD";function Z(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(Z,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(7774);const C="tags_XVD_",y="tag_JSN8";function w(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(C,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:y},n.createElement(T.Z,{name:t,permalink:a}))}))))}const M="lastUpdated_foO9";function A(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(w,e)))}function x(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",M)},(a||s)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function H(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:c,tags:o}=a,d=o.length>0,m=!!(s||i||c);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(A,{tags:o}),m&&n.createElement(x,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:c,formattedLastUpdatedAt:r})):null}function B(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(B,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function D(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:c,...o}=e;const d=(0,u.LU)(),m=r??d.tableOfContents.minHeadingLevel,v=c??d.tableOfContents.maxHeadingLevel,b=(0,u.b9)({toc:t,minHeadingLevel:m,maxHeadingLevel:v}),h=(0,n.useMemo)((()=>{if(l&&i)return{linkClassName:l,linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:v}}),[l,i,m,v]);return(0,u.Si)(h),n.createElement(B,(0,s.Z)({toc:b,className:a,linkClassName:l},o))}const V="tableOfContents_cNA8";function I(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.Z)(V,"thin-scrollbar",t)},n.createElement(D,(0,s.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}const S="tocCollapsible_jdIR",O="tocCollapsibleButton_Fzxq",F="tocCollapsibleContent_MpvI",R="tocCollapsibleExpanded_laf4";function q(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:o}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(S,{[R]:!c},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",O),onClick:o},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:F,collapsed:c},n.createElement(D,{toc:t,minHeadingLevel:s,maxHeadingLevel:r})))}var z=a(9649);const P="docItemContainer_vinB",J="docItemCol_DM6M",Q="tocMobile_TmEX",W="breadcrumbsContainer_Xlws",X="breadcrumbsItemLink_e5ie";var j=a(4996);function $(e){let{children:t,href:a}=e;const s=(0,l.Z)("breadcrumbs__link",X);return a?n.createElement(r.Z,{className:s,href:a},t):n.createElement("span",{className:s},t)}function G(e){let{children:t,active:a}=e;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function K(){const e=(0,j.Z)("/");return n.createElement(G,null,n.createElement($,{href:e},"\ud83c\udfe0"))}function Y(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,W),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(K,null),e.map(((t,a)=>n.createElement(G,{key:a,active:a===e.length-1},n.createElement($,{href:t.href},t.label)))))):null}function ee(e){const{content:t}=e,{metadata:a,frontMatter:s,assets:i}=t,{keywords:r,hide_title:c,hide_table_of_contents:d,toc_min_heading_level:m,toc_max_heading_level:v}=s,{description:b,title:h}=a,E=i.image??s.image,N=!c&&void 0===t.contentTitle,_=(0,u.iP)(),k=!d&&t.toc&&t.toc.length>0,L=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:h,description:b,keywords:r,image:E}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[J]:!d})},n.createElement(g,null),n.createElement("div",{className:P},n.createElement("article",null,n.createElement(Y,null),n.createElement(p,null),k&&n.createElement(q,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:v,className:(0,l.Z)(u.kM.docs.docTocMobile,Q)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},h)),n.createElement(t,null)),n.createElement(H,e)),n.createElement(o,{previous:a.previous,next:a.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(I,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:v,className:u.kM.docs.docTocDesktop}))))}},9649:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),i=a(5999),r=a(650);const c="anchorWithStickyNavbar_mojV",o="anchorWithHideOnScrollNavbar_R0VQ";function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[o]:m,[c]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)}function m(e){let{as:t,...a}=e;return"h1"===t?l.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):l.createElement(d,(0,n.Z)({as:t},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),s=a(9960);const i="tag_hD8n",r="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){const{permalink:t,name:a,count:o}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(i,{[r]:!o,[c]:o})},a,o&&n.createElement("span",null,o))}}}]);