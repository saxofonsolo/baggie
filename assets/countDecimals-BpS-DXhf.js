import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{b as m}from"./index-BI7qbVC1.js";import{c as p}from"./countDecimals-DESv5tdo.js";import{I as a}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as o}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const s=n=>{const[t,c]=i.useState(n.defaultInput),r=i.useMemo(()=>p(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:d})=>c(d.value)})}),e.jsx(a,{label:"Decimals",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(r)?"Error":r})})]}),e.jsx(m,{dark:!0,code:`
import { countDecimals } from "@baggie/core";

const number = ${t};

const decimals = countDecimals(number);
// decimals = ${r}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function l(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"countdecimals",children:"countDecimals"}),`
`,e.jsx(t.p,{children:"Count the number of decimals in a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{defaultInput:1.0000000001})]})}function C(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(l,n)})):l(n)}export{C as default};
