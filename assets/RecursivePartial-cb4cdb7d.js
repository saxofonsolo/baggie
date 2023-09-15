import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as o}from"./index-2fa589e3.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function n(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"recursivepartial",children:"RecursivePartial"}),`
`,e.jsx(r.p,{children:"Make all properties of a type optional - recursively."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
import { RecursivePartial } from "@baggie/core";

interface Styles {
    fontSizes: {
        small: number;
        large: number;
    };
    lineHeight: number;
}

type OptionalStyles = RecursivePartial<Styles>;

// The type above matches the interface below

interface Styles {
    fontSizes?: {
        small?: number;
        large?: number;
    };
    lineHeight?: number;
}
`})]})}function x(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{x as default};
//# sourceMappingURL=RecursivePartial-cb4cdb7d.js.map
