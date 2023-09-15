import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-2fa589e3.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(n){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireonlyone",children:"RequireOnlyOne"}),`
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
//# sourceMappingURL=RequireOnlyOne-263c7a01.js.map
