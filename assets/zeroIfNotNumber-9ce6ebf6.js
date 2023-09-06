import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{b as p}from"./index-e3b36901.js";import{n as u}from"./nonNumberFallback-b56fa823.js";import{I as a}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=r=>u(r,0),s=r=>{const[n,i]=o.useState(r.defaultInput),t=o.useMemo(()=>c(n),[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:l})=>i(l.value)})}),e.jsx(a,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:t})})]}),e.jsx(p,{dark:!0,code:`
import { zeroIfNotNumber } from "@baggie/core";

const input = ${isNaN(n)?`"${n}"`:n.trim()||"undefined"};

const output = zeroIfNotNumber(input);
// output = ${t}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function E(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"zeroifnotnumber",children:"zeroIfNotNumber"}),`
`,e.jsx(t.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"any"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{defaultInput:"100"}),`
`,e.jsx(s,{defaultInput:"lorem ipsum"}),`
`,e.jsx(s,{defaultInput:""}),`
`,e.jsx(s,{defaultInput:"123abc"})]})}}export{E as default};
//# sourceMappingURL=zeroIfNotNumber-9ce6ebf6.js.map
