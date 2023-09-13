import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as n}from"./index-9f119f36.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"distinctproperties",children:"DistinctProperties"}),`
`,e.jsx(r.p,{children:"Extract the distinct properties from a type or interface by comparing it to another."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{dark:!0,language:"ts",code:`
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
`})]})}function f(t={}){const{wrapper:r}=Object.assign({},o(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{f as default};
//# sourceMappingURL=DistinctProperties-b80abee1.js.map
