import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as s}from"./index-BI7qbVC1.js";import{useMDXComponents as r}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(n){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireonlyone",children:"RequireOnlyOne"}),`
`,e.jsx(t.p,{children:"Require only one of the properties of an interface."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { RequireOnlyOne } from "@baggie/core";

interface TestInterface {
    propA: string;
    propB: number;
}

type OnlyOne = RequireOnlyOne<TestInterface>;

// ✅ Good
const testObjectA: OnlyOne = {
    propA: "...",
};

// ✅ Good
const testObjectC: OnlyOne = {
    propB: 123,
};

// ⛔️ TypeScript error
const testObjectD: OnlyOne = {
    propA: "...",
    propB: 123,
};

// ⛔️ TypeScript error
const testObjectD: OnlyOne = {};
`})]})}function d(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{d as default};