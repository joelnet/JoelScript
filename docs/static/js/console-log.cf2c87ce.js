(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./console/log.mdx":function(e,n,o){"use strict";o.r(n);var a=o("./node_modules/react/index.js"),t=o.n(a),r=o("./node_modules/@mdx-js/tag/dist/index.js");function l(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}n.default=function(e){var n=e.components;l(e,["components"]);return t.a.createElement(r.MDXTag,{name:"wrapper",components:n},t.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"consolelog"}},"console/log"),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"log :: a -> a")),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"log")," sends value to ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"console.log")," and then returns the value."),t.a.createElement(r.MDXTag,{name:"pre",components:n},t.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log'\nimport pipe from 'mojiscript/core/pipe'\n\nconst main = pipe ([\n  log,\n  value => console.log (value) //=> \"Hello World!\"\n])\n\nmain ('Hello World!')\n")))}}}]);