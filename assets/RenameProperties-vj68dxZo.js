import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as a}from"./index-CJNtjuy4.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function n(r){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"renameproperties",children:"RenameProperties"}),`
`,e.jsx(t.p,{children:"Rename properties in an interface."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This type comes from here: ",e.jsx(t.a,{href:"https://stackoverflow.com/q/59071058/1446188",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://stackoverflow.com/q/59071058/1446188"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{dark:!0,language:"ts",code:`
import { RenameProperties } from "@baggie/core";

interface Product {
    no: number;
    name: string;
    sale: boolean;
    amount?: number;
}

type NewProduct = RenameProperties<Product, {
    no: "productNumber",
    sale: "isOnSale",
    amount: "quantity",
}>;

// The type above matches the interface below

interface NewProduct {
    productNumber: number;
    name: string;
    isOnSale: boolean;
    quantity?: number;
}
`})]})}function x(r={}){const{wrapper:t}=Object.assign({},o(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(n,r)})):n(r)}export{x as default};
