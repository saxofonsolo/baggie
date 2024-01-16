import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{b as x}from"./index-CJNtjuy4.js";import{d as p}from"./decimalAdjust.helper-u7QKeHof.js";import{I as i}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as m}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isNumberRound-4a_GecOl.js";const h=(n,r)=>p(n,r,Math.trunc),a=n=>{const[r,o]=c.useState(n.number),[t,u]=c.useState(n.maxDecimalPlaces),s=c.useMemo(()=>h(r,t),[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(i,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:r,onChange:({target:l})=>o(l.valueAsNumber)})}),e.jsx(i,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:t,onChange:({target:l})=>u(l.valueAsNumber)})}),e.jsx(i,{label:"Truncated",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(x,{dark:!0,code:`
import { truncDecimals } from "@baggie/core";

const number = ${r};
const maxDecimalPlaces = ${t};

const truncated = truncDecimals(number, maxDecimalPlaces);
// truncated = ${s}
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function d(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"truncdecimals",children:"truncDecimals"}),`
`,e.jsx(r.p,{children:"Truncate a number to the nearest decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(a,{number:13.3689,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Round to ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(a,{number:-13.1124,maxDecimalPlaces:3})]})}function F(n={}){const{wrapper:r}=Object.assign({},m(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{F as default};
