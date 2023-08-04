import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as a}from"./index-2b4cce42.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function x(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tupletoobject",children:"TupleToObject"}),`
`,e.jsx(t.p,{children:"Convert tuple to object."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"A tuple is an array where the order and types are important."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Be aware:"}),` In TypeScript, tuples may have names (like arguments in a function) but those cannot be extracted,
so you will have to supply them manually.`]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/a/69713319/1446188",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/a/69713319/1446188"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
import { TupleToObject } from "@baggie/core";

type Tuple = [a: string, b: number, c: boolean];

type ObjectA = TupleToObject<Tuple, ["a", "b", "c"]>

// The type above matches the type below

type ObjectA {
    a: string;
    b: number;
    c: boolean;
}
`}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
import { TupleToObject } from "@baggie/core";

type Tuple = [a: string, b: number, c: boolean];

type ObjectB = TupleToObject<Tuple, ["name", "age", "isAvailable"]>

// The type above matches the type below

type ObjectB {
    name: string;
    age: number;
    isAvailable: boolean;
}
`})]})}}export{x as default};
//# sourceMappingURL=TupleToObject-152b8a50.js.map
