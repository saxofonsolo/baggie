import{j as e}from"./jsx-runtime-94f6e698.js";import{b as a}from"./index-c495ba38.js";import{u as s}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function O(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"requireatleastone",children:"RequireAtLeastOne"}),`
`,e.jsx(t.p,{children:"Require at least one of the properties of an interface."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
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
`})]})}}export{O as default};
//# sourceMappingURL=RequireAtLeastOne-6588f5c0.js.map
