import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as i}from"./index-9f119f36.js";import{u as n}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"sharedproperties",children:"SharedProperties"}),`
`,e.jsx(t.p,{children:"Extract the shared properties from two types or interfaces."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
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
`})]})}function b(r={}){const{wrapper:t}=Object.assign({},n(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{b as default};
//# sourceMappingURL=SharedProperties-54730803.js.map
