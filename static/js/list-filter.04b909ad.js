(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./list/filter.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js");function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;o(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"listfilter"}},"list/filter"),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"filter :: Function -> Iterable -> Array")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Takes a predicate and an ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Iterable")," and returns an ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Array")," of the same type containing the members of the given filterable which satisfy the given predicate."),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log'\nimport pipe from 'mojiscript/core/pipe'\nimport run from 'mojiscript/core/run'\nimport filter from 'mojiscript/list/filter'\n\nconst isEven = num => num % 2 === 0\n\nconst main = pipe ([\n  [ 1, 2, 3, 4, 5 ],\n  filter (isEven),\n  log\n])\n\nrun ({ main })\n//=> [ 2, 4 ]\n")),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),r.a.createElement(m.MDXTag,{name:"table",components:n},r.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"predicate"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Function")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Function takes and input and returns a ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Boolean"))),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"iterable"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Iterable")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Iterable")," to apply the predicate to.")))),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),r.a.createElement(m.MDXTag,{name:"p",components:n},"Returns an ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Array")," filtered by the ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"predicate"),"."))}}}]);