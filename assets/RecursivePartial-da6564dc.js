import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-0081e355.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"recursivepartial",children:"RecursivePartial"}),`
`,e.jsx(r.p,{children:"Make all properties of a type optional - recursively."}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{dark:!0,language:"ts",code:`
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
`})]})}}export{j as default};
//# sourceMappingURL=RecursivePartial-da6564dc.js.map
