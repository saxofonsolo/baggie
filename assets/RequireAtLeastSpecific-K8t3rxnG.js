import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as o}from"./index-CJNtjuy4.js";import{useMDXComponents as n}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function p(t){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",strong:"strong"},n(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"requireatleastspecific",children:"RequireAtLeastSpecific"}),`
`,e.jsx(r.p,{children:"Require at least one specific property of an interface."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["This type comes from here: ",e.jsx(r.a,{href:"https://stackoverflow.com/a/49725198",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/49725198"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Require at least ",e.jsx(r.strong,{children:"one specific property"})]}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
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
`,e.jsx(o,{dark:!0,language:"ts",code:`
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
`})]})}function x(t={}){const{wrapper:r}=Object.assign({},n(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(p,t)})):p(t)}export{x as default};
