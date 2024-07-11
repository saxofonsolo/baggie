import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as s}from"./index-BI7qbVC1.js";import{useMDXComponents as n}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function r(o){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},n(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireatleastone",children:"RequireAtLeastOne"}),`
`,e.jsx(t.p,{children:"Require at least one of the properties of an interface."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { RequireAtLeastOne } from "@baggie/core";

interface TestInterface {
    propA: string;
    propB: number;
}

type AtLeastOne = RequireAtLeastOne<TestInterface>;

// ✅ Good
const testObjectA: AtLeastOne = {
    propA: "...",
    propB: 123,
};

// ✅ Good
const testObjectB: AtLeastOne = {
    propA: "...",
};

// ✅ Good
const testObjectC: AtLeastOne = {
    propB: 123,
};

// ⛔️ TypeScript error
const testObjectD: AtLeastOne = {};
`})]})}function x(o={}){const{wrapper:t}=Object.assign({},n(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{x as default};
