(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./styleguide.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),s=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}n.default=function(e){var n=e.components;o(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:n},s.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"style-guide"}},"Style Guide"),s.a.createElement(r.MDXTag,{name:"p",components:n},"All values must be declared with ",s.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"const"),"."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nlet value = {}\n\n// GOOD\nconst value = {}\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Variables should be named in lower camel case."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst AddNumbers = x => y => x + y\n\n// GOOD\nconst addNumbers = x => y => x + y\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Expressions or Pipes and their arguments should be separated with a space. Arguments should be surrounded with parentheses. Further discussed at ",s.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/sanctuary-js/sanctuary/issues/438"}},"#438"),"."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nadd(1)(2)\n\n// GOOD\nadd (1) (2)\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Prefer String Templates"),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst func = x => `Value: ${x}`\n\n// GOOD\nconst func = $`Value: ${0}`\n\n// BAD\nconst func = ({ prop }) => `Prop: ${prop}`\n\n// GOOD\nconst func = $`Prop: ${'prop'}`\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Following Atomic Design principles, code should be broken down into Atoms. This maximizes reusability, testability, composability, and readability."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst getOrdersText = ifElse (({ length }) => length > 0) ($`${0} orders`) ($`No Orders`)\n\n// GOOD\nconst hasOrders = ({ length }) => length > 0\nconst getOrdersText = ifElse (hasOrders) ($`${0} orders`) ($`No Orders`)\n\n// GOOD\nconst hasOrders = ({ length }) => length > 0\nconst ifHasOrders = ifElse (hasOrders)\nconst getOrdersText = ifHasOrders ($`${0} orders`) ($`No Orders`)\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},s.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ifElse")," and the condition should be on the same line. Longer statements can be broken out into multiple lines. If it is long, consider breaking it down further."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nifElse\n  (lessThan0)\n  (Math.abs)\n  (Math.sqrt)\n\n// GOOD\nifElse (lessThan0) (Math.abs) (Math.sqrt)\n\n// GOOD\nifElse (lessThan0)\n  (Math.abs)\n  (Math.sqrt)\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Pipes must be multi-line."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst main = pipe ([ add ])\n\n// GOOD\nconst main = pipe ([\n  add\n])\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"Arrays must have a space after the opening bracket and before the closing bracket."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst array = [1, 2, 3]\n\n// GOOD\nconst array = [ 1, 2, 3 ]\n")),s.a.createElement(r.MDXTag,{name:"p",components:n},"No semi-colons."),s.a.createElement(r.MDXTag,{name:"pre",components:n},s.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"// BAD\nconst value = 888;\n\n// GOOD\nconst value = 888\n")))}}}]);