import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{b as x}from"./index-BI7qbVC1.js";import{d as p}from"./decimalAdjust.helper-DuFMcPbG.js";import{I as c}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as d}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isNumberRound-CpGoG9_2.js";function h(n,r){return p(n,r,Math.ceil)}const t=n=>{const[r,o]=i.useState(n.number),[l,u]=i.useState(n.maxDecimalPlaces),s=i.useMemo(()=>h(r,l),[r,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:r,onChange:({target:a})=>o(a.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:l,onChange:({target:a})=>u(a.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(x,{dark:!0,code:`
import { ceilDecimals } from "@baggie/core";

const number = ${r};
const maxDecimalPlaces = ${l};

const result = ceilDecimals(number, maxDecimalPlaces);
// result = ${s}
`})]})};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function m(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"ceildecimals",children:"ceilDecimals"}),`
`,e.jsx(r.p,{children:"Round up a number to the nearest decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Round up to ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(t,{number:13.345,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Round up to ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(t,{number:13.1111,maxDecimalPlaces:3}),`
`,e.jsxs(r.p,{children:["With ",e.jsx(r.strong,{children:"negative"})," decimal places."]}),`
`,e.jsx(t,{number:139.5,maxDecimalPlaces:-2})]})}function C(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(m,n)})):m(n)}export{C as default};
