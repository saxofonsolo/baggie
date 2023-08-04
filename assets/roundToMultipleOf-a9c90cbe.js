import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{b as c}from"./index-9c98abcd.js";import{t as x}from"./toNearestMultipleOf.helper-fea0d4ad.js";import{I as d}from"./InputWrapper-0059aa96.js";import{u as a}from"./index-e744116c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./countDecimals-090bf5ae.js";const m=(r,n)=>x(r,n,Math.round,m),l=r=>{const[n,i]=u.useState(r.number),[t,p]=u.useState(r.multipleOf),s=u.useMemo(()=>m(n,t),[n,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:o})=>i(o.valueAsNumber)})}),e.jsx(d,{label:"Multiple of",labelForId:"multiple-of-input",children:e.jsx("input",{id:"multiple-of-input",type:"number",value:t,onChange:({target:o})=>p(o.valueAsNumber)})}),e.jsx(d,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(c,{dark:!0,code:`
import { roundToMultipleOf } from "@baggie/core";

const number = ${n};
const multipleOf = ${t};

const result = roundToMultipleOf(number, multipleOf);
// result = ${s}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},multipleOf:{defaultValue:null,description:"",name:"multipleOf",required:!0,type:{name:"number"}}}}}catch{}function F(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"roundtomultipleof",children:"roundToMultipleOf"}),`
`,e.jsx(t.p,{children:"Round a number to the next number multiple of X."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"number"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"multipleOf"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(l,{number:13.345,multipleOf:5}),`
`,e.jsx(l,{number:11,multipleOf:10}),`
`,e.jsx(l,{number:-139.5,multipleOf:3})]})}}export{F as default};
//# sourceMappingURL=roundToMultipleOf-a9c90cbe.js.map
