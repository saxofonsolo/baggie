import{j as r}from"./jsx-runtime-94f6e698.js";import{b as s}from"./index-c495ba38.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function b(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?r.jsx(t,Object.assign({},o,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},a(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"nonemptyarray",children:"NonEmptyArray"}),`
`,r.jsx(e.p,{children:"Require an array to have at least one value."}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["This type comes from here: ",r.jsx(e.a,{href:"https://stackoverflow.com/a/56006703/1446188",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/56006703/1446188"})]}),`
`]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(s,{dark:!0,language:"ts",code:`
import { NonEmptyArray } from "@baggie/core";

type ArrayWithNumbers = NonEmptyArray<number>;

// ✅ Good
const arr: ArrayWithNumbers = [1, 2, 3];

// ✅ Good
const arr: ArrayWithNumbers = [1];

// ⛔️ TypeScript error
const arr: ArrayWithNumbers = [];
`})]})}}export{b as default};
//# sourceMappingURL=NonEmptyArray-46c90ebf.js.map
