import{j as r}from"./jsx-runtime-CKrituN3.js";import{b as a}from"./index-BI7qbVC1.js";import{useMDXComponents as n}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function t(o){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},n(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"nonemptyarray",children:"NonEmptyArray"}),`
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
`})]})}function j(o={}){const{wrapper:e}=Object.assign({},n(),o.components);return e?r.jsx(e,Object.assign({},o,{children:r.jsx(t,o)})):t(o)}export{j as default};
