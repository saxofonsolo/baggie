import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{b as a}from"./index-6Pv_FbVv.js";import{u as n}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function t(o){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},n(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"nonemptyarray",children:"NonEmptyArray"}),`
`,r.jsx(e.p,{children:"Require an array to have at least one value."}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["This type comes from here: ",r.jsx(e.a,{href:"https://stackoverflow.com/a/56006703/1446188",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/56006703/1446188"})]}),`
`]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(a,{dark:!0,language:"ts",code:`
import { NonEmptyArray } from "@baggie/core";

type ArrayWithNumbers = NonEmptyArray<number>;

// ✅ Good
const arr: ArrayWithNumbers = [1, 2, 3];

// ✅ Good
const arr: ArrayWithNumbers = [1];

// ⛔️ TypeScript error
const arr: ArrayWithNumbers = [];
`})]})}function x(o={}){const{wrapper:e}=Object.assign({},n(),o.components);return e?r.jsx(e,Object.assign({},o,{children:r.jsx(t,o)})):t(o)}export{x as default};
//# sourceMappingURL=NonEmptyArray-AQwObGcM.js.map
