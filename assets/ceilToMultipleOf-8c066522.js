import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{b as p}from"./index-c5be8d33.js";import{c}from"./ceilToMultipleOf-e8fdc71a.js";import{I as m}from"./InputWrapper-088860b1.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-71f486ec.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./toNearestMultipleOf.helper-fea0d4ad.js";import"./countDecimals-090bf5ae.js";const n=r=>{const[l,i]=u.useState(r.number),[t,a]=u.useState(r.multipleOf),s=u.useMemo(()=>c(l,t),[l,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:l,onChange:({target:o})=>i(o.valueAsNumber)})}),e.jsx(m,{label:"Multiple of",labelForId:"multiple-of-input",children:e.jsx("input",{id:"multiple-of-input",type:"number",value:t,onChange:({target:o})=>a(o.valueAsNumber)})}),e.jsx(m,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(p,{dark:!0,code:`
import { ceilToMultipleOf } from "@baggie/core";

const number = ${l};
const multipleOf = ${t};

const result = ceilToMultipleOf(number, multipleOf);
// result = ${s}
`})]})};try{n.displayName="Example",n.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},multipleOf:{defaultValue:null,description:"",name:"multipleOf",required:!0,type:{name:"number"}}}}}catch{}function F(r={}){const{wrapper:l}=Object.assign({},d(),r.components);return l?e.jsx(l,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"ceiltomultipleof",children:"ceilToMultipleOf"}),`
`,e.jsx(t.p,{children:"Round up a number to the next number multiple of X."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"number"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"multipleOf"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n,{number:13.345,multipleOf:5}),`
`,e.jsx(n,{number:11,multipleOf:10}),`
`,e.jsx(n,{number:-139.5,multipleOf:3})]})}}export{F as default};
//# sourceMappingURL=ceilToMultipleOf-8c066522.js.map
