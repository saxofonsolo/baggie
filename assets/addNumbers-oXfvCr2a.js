import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as u}from"./index-CJNtjuy4.js";import{a as h}from"./addNumbers-ln62UkCS.js";import{I as l}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const d=r=>{const[t,c]=i.useState(r.defaultInput.join(", ")),{numbers:m,total:a}=i.useMemo(()=>{const n=t.split(/\s*,\s*/).filter(s=>s.length).map(s=>s.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(s):NaN);return{numbers:n,total:h(n)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:n})=>c(n.value),spellCheck:!1})}),e.jsx(l,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(u,{dark:!0,code:`
import { addNumbers } from "@baggie/core";

const numbers = [${m.join(", ")}];

const total = addNumbers(numbers);
// total = ${a}
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"addnumbers",children:"addNumbers"}),`
`,e.jsx(t.p,{children:"Add an array of numbers together."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"numbers"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number[]"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{defaultInput:[1,2,3,4,5,6,7,8,9]})]})}function M(r={}){const{wrapper:t}=Object.assign({},p(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{M as default};
