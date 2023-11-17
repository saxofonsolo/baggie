import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as o}from"./index-6Pv_FbVv.js";import{u as i}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function n(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"recursivepartial",children:"RecursivePartial"}),`
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
//# sourceMappingURL=RecursivePartial-q3mAryGd.js.map
