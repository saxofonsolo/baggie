import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{b as x}from"./index-BI7qbVC1.js";import{d as p}from"./decimalAdjust.helper-DuFMcPbG.js";import{I as c}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as m}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isNumberRound-CpGoG9_2.js";function h(n,r){return p(n,r,Math.round)}const t=n=>{const[r,o]=i.useState(n.number),[s,u]=i.useState(n.maxDecimalPlaces),a=i.useMemo(()=>h(r,s),[r,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:r,onChange:({target:l})=>o(l.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:s,onChange:({target:l})=>u(l.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(x,{dark:!0,code:`
import { roundDecimals } from "@baggie/core";

const number = ${r};
const maxDecimalPlaces = ${s};

const result = roundDecimals(number, maxDecimalPlaces);
// result = ${a}
`})]})};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function d(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"rounddecimals",children:"roundDecimals"}),`
`,e.jsx(r.p,{children:"Round a number to the nearest decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(t,{number:13.3689,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(t,{number:-13.1124,maxDecimalPlaces:3}),`
`,e.jsxs(r.p,{children:["With ",e.jsx(r.strong,{children:"negative"})," decimal places."]}),`
`,e.jsx(t,{number:139.5,maxDecimalPlaces:-2})]})}function C(n={}){const{wrapper:r}=Object.assign({},m(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{C as default};
