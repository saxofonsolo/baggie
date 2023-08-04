import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as a}from"./index-0081e355.js";import{C as c}from"./ColorViewer-02e72d7a.js";import{C as d}from"./ColorInput-5137a913.js";import{i as p}from"./isHexColor-1bfe6e6b.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./convertColorNameToHex-5b896379.js";const o=n=>{const[r,s]=i.useState(n.defaultInput),t=i.useMemo(()=>p(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Input",value:r,onChange:s}),e.jsx(x,{label:"Is hex color",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:t?"true":"false"})})]}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(c,{color:r})}),e.jsx(a,{dark:!0,code:`
import { isHexColor } from "@baggie/core";

const input = "${r}";

const answer = isHexColor(input);
// answer = ${t?"true":"false"}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function D(n={}){const{wrapper:r}=Object.assign({},l(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"ishexcolor",children:"isHexColor"}),`
`,e.jsx(t.p,{children:"Check if a string is a hex color."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{children:"The color to check."})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{defaultInput:"#ffcc00"})]})}}export{D as default};
//# sourceMappingURL=isHexColor-8bfb83a7.js.map
