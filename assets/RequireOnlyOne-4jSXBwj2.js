import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as s}from"./index-XmUqo-P7.js";import{u as r}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function o(n){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireonlyone",children:"RequireOnlyOne"}),`
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
`})]})}function j(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{j as default};
//# sourceMappingURL=RequireOnlyOne-4jSXBwj2.js.map
