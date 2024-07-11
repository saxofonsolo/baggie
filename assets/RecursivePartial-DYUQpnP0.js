import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as o}from"./index-BI7qbVC1.js";import{useMDXComponents as i}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function n(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"recursivepartial",children:"RecursivePartial"}),`
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
`})]})}function g(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{g as default};
