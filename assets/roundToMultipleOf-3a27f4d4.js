import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{b as x}from"./index-2fa589e3.js";import{t as h}from"./toNearestMultipleOf.helper-fea0d4ad.js";import{I as u}from"./InputWrapper-a637f81f.js";import{u as a}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./countDecimals-090bf5ae.js";const m=(r,t)=>h(r,t,Math.round,m),n=r=>{const[t,p]=o.useState(r.number),[l,c]=o.useState(r.multipleOf),i=o.useMemo(()=>m(t,l),[t,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(u,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:s})=>p(s.valueAsNumber)})}),e.jsx(u,{label:"Multiple of",labelForId:"multiple-of-input",children:e.jsx("input",{id:"multiple-of-input",type:"number",value:l,onChange:({target:s})=>c(s.valueAsNumber)})}),e.jsx(u,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(i)?"Error":i})})]}),e.jsx(x,{dark:!0,code:`
import { roundToMultipleOf } from "@baggie/core";

const number = ${t};
const multipleOf = ${l};

const result = roundToMultipleOf(number, multipleOf);
// result = ${i}
`})]})};try{n.displayName="Example",n.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},multipleOf:{defaultValue:null,description:"",name:"multipleOf",required:!0,type:{name:"number"}}}}}catch{}function d(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"roundtomultipleof",children:"roundToMultipleOf"}),`
`,e.jsx(t.p,{children:"Round a number to the next number multiple of X."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"number"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"multipleOf"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n,{number:13.345,multipleOf:5}),`
`,e.jsx(n,{number:11,multipleOf:10}),`
`,e.jsx(n,{number:-139.5,multipleOf:3})]})}function F(r={}){const{wrapper:t}=Object.assign({},a(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(d,r)})):d(r)}export{F as default};
//# sourceMappingURL=roundToMultipleOf-3a27f4d4.js.map
