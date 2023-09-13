import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{b as p}from"./index-9f119f36.js";import{c as x}from"./ceilToMultipleOf-e8fdc71a.js";import{I as o}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./toNearestMultipleOf.helper-fea0d4ad.js";import"./countDecimals-090bf5ae.js";const l=r=>{const[t,a]=u.useState(r.number),[n,c]=u.useState(r.multipleOf),i=u.useMemo(()=>x(t,n),[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(o,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:s})=>a(s.valueAsNumber)})}),e.jsx(o,{label:"Multiple of",labelForId:"multiple-of-input",children:e.jsx("input",{id:"multiple-of-input",type:"number",value:n,onChange:({target:s})=>c(s.valueAsNumber)})}),e.jsx(o,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(i)?"Error":i})})]}),e.jsx(p,{dark:!0,code:`
import { ceilToMultipleOf } from "@baggie/core";

const number = ${t};
const multipleOf = ${n};

const result = ceilToMultipleOf(number, multipleOf);
// result = ${i}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},multipleOf:{defaultValue:null,description:"",name:"multipleOf",required:!0,type:{name:"number"}}}}}catch{}function m(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"ceiltomultipleof",children:"ceilToMultipleOf"}),`
`,e.jsx(t.p,{children:"Round up a number to the next number multiple of X."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"number"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"multipleOf"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(l,{number:13.345,multipleOf:5}),`
`,e.jsx(l,{number:11,multipleOf:10}),`
`,e.jsx(l,{number:-139.5,multipleOf:3})]})}function F(r={}){const{wrapper:t}=Object.assign({},d(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(m,r)})):m(r)}export{F as default};
//# sourceMappingURL=ceilToMultipleOf-62b34fec.js.map
