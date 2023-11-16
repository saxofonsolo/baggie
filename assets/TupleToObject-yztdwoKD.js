import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as n}from"./index-XmUqo-P7.js";import{u as a}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function r(o){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"tupletoobject",children:"TupleToObject"}),`
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
`,e.jsx(n,{dark:!0,language:"ts",code:`
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
`,e.jsx(n,{dark:!0,language:"ts",code:`
import { TupleToObject } from "@baggie/core";

type Tuple = [a: string, b: number, c: boolean];

type ObjectB = TupleToObject<Tuple, ["name", "age", "isAvailable"]>

// The type above matches the type below

type ObjectB {
    name: string;
    age: number;
    isAvailable: boolean;
}
`})]})}function d(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{d as default};
//# sourceMappingURL=TupleToObject-yztdwoKD.js.map
