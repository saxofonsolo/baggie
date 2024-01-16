import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as d}from"./index-CJNtjuy4.js";import{n as c,C as h}from"./ColorInput-p8BfKAZW.js";import{I as x}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as l}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";const o=t=>{const[r,a]=i.useState(t.hex),n=i.useMemo(()=>c(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"Hex color",value:r,onChange:a}),e.jsx(x,{label:"Normalized",labelForId:void 0,children:n||"undefined"})]}),e.jsx(d,{dark:!0,code:`
import { normalizeHexColor } from "@baggie/core";

const hex = "${r}";

const normalized = normalizeHexColor(hex);
// normalized = ${n?`"${n}"`:"undefined"}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function s(t){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"normalizehexcolor",children:"normalizeHexColor"}),`
`,e.jsx(r.p,{children:"Make sure a hex color is in lowercase with 6 to 8 hexadecimals."}),`
`,e.jsxs(r.p,{children:["A use case for this could be the HTML color input ",e.jsx(r.code,{children:'<input type="color" />'}),` which
requires its value to be in the format `,e.jsx(r.code,{children:"#rrggbb"}),` where rr, gg, bb are two-digit
hexadecimal numbers.`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{hex:"#FC0"})]})}function I(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{I as default};
