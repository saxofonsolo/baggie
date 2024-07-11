import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as i}from"./index-BI7qbVC1.js";import{useMDXComponents as n}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"sharedproperties",children:"SharedProperties"}),`
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
`})]})}function f(r={}){const{wrapper:t}=Object.assign({},n(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{f as default};
