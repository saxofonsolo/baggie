import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as i}from"./index-XmUqo-P7.js";import{u as n}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"sharedproperties",children:"SharedProperties"}),`
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
//# sourceMappingURL=SharedProperties-HNpz8mjp.js.map
