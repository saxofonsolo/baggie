import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as i}from"./index-2b4cce42.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"replacealltypes",children:"ReplaceAllTypes"}),`
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
//# sourceMappingURL=ReplaceAllTypes-219a757e.js.map
