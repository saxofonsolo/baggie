import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-e3b36901.js";import{u as n}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function x(t={}){const{wrapper:i}=Object.assign({},n(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"distinctproperties",children:"DistinctProperties"}),`
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
`})]})}}export{x as default};
//# sourceMappingURL=DistinctProperties-eefbb864.js.map
