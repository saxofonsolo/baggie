import{j as e}from"./jsx-runtime-4ca860c5.js";import{b as n}from"./index-9c98abcd.js";import{u as s}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(p,{})})):p();function p(){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",strong:"strong"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"requireatleastspecific",children:"RequireAtLeastSpecific"}),`
`,e.jsx(r.p,{children:"Require at least one specific property of an interface."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["This type comes from here: ",e.jsx(r.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Require at least ",e.jsx(r.strong,{children:"one specific property"})]}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`
import { RequireAtLeastSpecific } from "@baggie/core";

interface TestInterface {
    propA: string;
    propB: number;
    propC: boolean;
}

type AtLeastPropA = RequireAtLeastSpecific<TestInterface, "propA">;

// The type above matches the interface below

interface AtLeastPropA {
    propA: string;
    propB?: number;
    propC?: boolean;
}
`}),`
`,e.jsxs(r.p,{children:["Require at least ",e.jsx(r.strong,{children:"multiple specific properties"})]}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`
import { RequireAtLeastSpecific } from "@baggie/core";

interface TestInterface {
    propA: string;
    propB: number;
    propC: boolean;
    propD: string;
    propE?: number;
}

type AtLeastMultiple = RequireAtLeastSpecific<TestInterface, "propA" | "propC>;

// The type above matches the interface below

interface AtLeastMultiple {
    propA: string;
    propB?: number;
    propC: boolean;
    propD?: string;
    propE?: number;
}
`})]})}}export{d as default};
//# sourceMappingURL=RequireAtLeastSpecific-a200dc57.js.map
