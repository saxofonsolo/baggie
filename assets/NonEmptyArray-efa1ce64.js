import{j as r}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-e3b36901.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?r.jsx(t,Object.assign({},o,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},a(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"nonemptyarray",children:"NonEmptyArray"}),`
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
`})]})}}export{j as default};
//# sourceMappingURL=NonEmptyArray-efa1ce64.js.map
