import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-e3b36901.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function f(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"sharedproperties",children:"SharedProperties"}),`
`,e.jsx(t.p,{children:"Extract the shared properties from two types or interfaces."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
import { SharedProperties } from "@baggie/core";

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

type CarAndBicycleProperties = SharedProperties<Car, Bicycle>;

// The type above matches the interface below

interface CarAndBicycleProperties {
    model: string;
    wheels: number;
}
`})]})}}export{f as default};
//# sourceMappingURL=SharedProperties-ef767320.js.map
