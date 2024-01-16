import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as n}from"./index-CJNtjuy4.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function i(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"distinctproperties",children:"DistinctProperties"}),`
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
`})]})}function x(t={}){const{wrapper:r}=Object.assign({},o(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{x as default};
