import{j as e}from"./jsx-runtime-94f6e698.js";import{b as s}from"./index-c495ba38.js";import{u as n}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function g(t={}){const{wrapper:i}=Object.assign({},n(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"distinctproperties",children:"DistinctProperties"}),`
`,e.jsx(r.p,{children:"Extract the distinct properties from a type or interface by comparing it to another."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { DistinctProperties } from "@baggie/core";

interface Car {
    model: string;
    diesel: boolean;
    wheels: number;
    doors: number;
}

interface Bicycle {
    model: string;
    wheels: number;
    cargoBike: boolean;
}

type CarSpecificProperties = DistinctProperties<Car, Bicycle>;

// The type above matches the interface below

interface CarSpecificProperties {
    diesel: boolean;
    doors: number;
}
`})]})}}export{g as default};
//# sourceMappingURL=DistinctProperties-d9b67faf.js.map
