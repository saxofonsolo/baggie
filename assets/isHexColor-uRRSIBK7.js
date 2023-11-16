import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import{b as c}from"./index-XmUqo-P7.js";import{C as d}from"./ColorViewer-4nozgsQU.js";import{C as p}from"./ColorInput-p8BfKAZW.js";import{i as x}from"./isHexColor-CJQw1lzT.js";import{I as h}from"./InputWrapper-7qBv-a2h.js";import{u as l}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./convertColorNameToHex-vzDEJkbb.js";const n=r=>{const[t,a]=o.useState(r.defaultInput),s=o.useMemo(()=>x(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(p,{label:"Input",value:t,onChange:a}),e.jsx(h,{label:"Is hex color",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:s?"true":"false"})})]}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(d,{color:t})}),e.jsx(c,{dark:!0,code:`
import { isHexColor } from "@baggie/core";

const input = "${t}";

const answer = isHexColor(input);
// answer = ${s?"true":"false"}
`})]})};try{n.displayName="Example",n.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function i(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"ishexcolor",children:"isHexColor"}),`
`,e.jsx(t.p,{children:"Check if a string is a hex color."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{children:"The color to check."})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{defaultInput:"#ffcc00"})]})}function D(r={}){const{wrapper:t}=Object.assign({},l(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(i,r)})):i(r)}export{D as default};
//# sourceMappingURL=isHexColor-uRRSIBK7.js.map
