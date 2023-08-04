import{j as e}from"./jsx-runtime-4ca860c5.js";import{b as i}from"./index-9c98abcd.js";import{u as s}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"replacealltypes",children:"ReplaceAllTypes"}),`
`,e.jsx(r.p,{children:"Replace the type of all properties in an interface."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
import { ReplaceAllTypes } from "@baggie/core";

interface Car {
    model: string;
    diesel: boolean;
    wheels: number;
    doors: number;
}

type CarFunctions = ReplaceAllTypes<Car, () => string>;

// The type above matches the interface below

interface CarSpecificProperties {
    model: () => string;
    diesel: () => string;
    wheels: () => string;
    doors: () => string;
}
`})]})}}export{j as default};
//# sourceMappingURL=ReplaceAllTypes-c5b5a0fd.js.map
