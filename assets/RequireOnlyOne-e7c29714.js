import{j as e}from"./jsx-runtime-4ca860c5.js";import{b as p}from"./index-9c98abcd.js";import{u as s}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function x(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireonlyone",children:"RequireOnlyOne"}),`
`,e.jsx(t.p,{children:"Require only one of the properties of an interface."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{dark:!0,language:"ts",code:`
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
`})]})}}export{x as default};
//# sourceMappingURL=RequireOnlyOne-e7c29714.js.map
