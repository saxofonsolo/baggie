import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as p}from"./index-0081e355.js";import{n as m}from"./nonNumberFallback-1789432d.js";import{I as d}from"./InputWrapper-a637f81f.js";import{u}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const a=l=>{const[n,r]=s.useState(l.defaultInput),[t,o]=s.useState(l.defaultFallback),c=s.useMemo(()=>m(n,t),[n,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:i})=>r(i.value)})}),e.jsx(d,{label:"Fallback",labelForId:"fallback-input",children:e.jsx("input",{id:"fallback-input",value:t,type:"number",onChange:({target:i})=>o(i.valueAsNumber)})}),e.jsx(d,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:c})})]}),e.jsx(p,{dark:!0,code:`
import { nonNumberFallback } from "@baggie/core";

const input = ${isNaN(n)?`"${n}"`:n.trim()||"undefined"};
const fallback = ${t};

const output = nonNumberFallback(input, fallback);
// output = ${c}
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}},defaultFallback:{defaultValue:null,description:"",name:"defaultFallback",required:!0,type:{name:"number"}}}}}catch{}function E(l={}){const{wrapper:n}=Object.assign({},u(),l.components);return n?e.jsx(n,Object.assign({},l,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},u(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nonnumberfallback",children:"nonNumberFallback"}),`
`,e.jsx(t.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"any"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"fallback"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:"100",defaultFallback:-1}),`
`,e.jsx(a,{defaultInput:"lorem ipsum",defaultFallback:-1}),`
`,e.jsx(a,{defaultInput:"",defaultFallback:-1}),`
`,e.jsx(a,{defaultInput:"123abc",defaultFallback:-1})]})}}export{E as default};
//# sourceMappingURL=nonNumberFallback-eb38c12a.js.map
