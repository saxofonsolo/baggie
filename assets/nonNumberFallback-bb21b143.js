import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as m}from"./index-9f119f36.js";import{n as x}from"./nonNumberFallback-b56fa823.js";import{I as s}from"./InputWrapper-a637f81f.js";import{u}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=n=>{const[t,o]=i.useState(n.defaultInput),[a,p]=i.useState(n.defaultFallback),d=i.useMemo(()=>x(t,a),[t,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(s,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:r})=>o(r.value)})}),e.jsx(s,{label:"Fallback",labelForId:"fallback-input",children:e.jsx("input",{id:"fallback-input",value:a,type:"number",onChange:({target:r})=>p(r.valueAsNumber)})}),e.jsx(s,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:d})})]}),e.jsx(m,{dark:!0,code:`
import { nonNumberFallback } from "@baggie/core";

const input = ${isNaN(t)?`"${t}"`:t.trim()||"undefined"};
const fallback = ${a};

const output = nonNumberFallback(input, fallback);
// output = ${d}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}},defaultFallback:{defaultValue:null,description:"",name:"defaultFallback",required:!0,type:{name:"number"}}}}}catch{}function c(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},u(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nonnumberfallback",children:"nonNumberFallback"}),`
`,e.jsx(t.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"any"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"fallback"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(l,{defaultInput:"100",defaultFallback:-1}),`
`,e.jsx(l,{defaultInput:"lorem ipsum",defaultFallback:-1}),`
`,e.jsx(l,{defaultInput:"",defaultFallback:-1}),`
`,e.jsx(l,{defaultInput:"123abc",defaultFallback:-1})]})}function E(n={}){const{wrapper:t}=Object.assign({},u(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(c,n)})):c(n)}export{E as default};
//# sourceMappingURL=nonNumberFallback-bb21b143.js.map
