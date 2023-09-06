import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{b as m}from"./index-e3b36901.js";import{a as u}from"./addNumbers-491af948.js";import{I as p}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=r=>{const[n,s]=o.useState(r.defaultInput.join(", ")),{numbers:t,total:l}=o.useMemo(()=>{const a=n.split(/\s*,\s*/).filter(d=>d.length).map(d=>d.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(d):NaN);return{numbers:a,total:u(a)}},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(p,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:a})=>s(a.value),spellCheck:!1})}),e.jsx(p,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(l)?"Error":l})})]}),e.jsx(m,{dark:!0,code:`
import { addNumbers } from "@baggie/core";

const numbers = [${t.join(", ")}];

const total = addNumbers(numbers);
// total = ${l}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function C(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"addnumbers",children:"addNumbers"}),`
`,e.jsx(t.p,{children:"Add an array of numbers together."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"numbers"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number[]"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{defaultInput:[1,2,3,4,5,6,7,8,9]})]})}}export{C as default};
//# sourceMappingURL=addNumbers-3ccbd2f3.js.map
