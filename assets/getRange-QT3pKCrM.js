import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{b as u}from"./index-CJNtjuy4.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const h=r=>{const t=[...r].sort((a,i)=>a-i);return t[t.length-1]-t[0]||0},o=r=>{const[t,a]=d.useState(r.numbers.join(", ")),{numbers:i,range:l}=d.useMemo(()=>{const n=t.split(/\s*,\s*/).filter(s=>s.length).map(s=>s.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(s):NaN);return{numbers:n,range:h(n)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:n})=>a(n.value),spellCheck:!1})}),e.jsx(c,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(l)?"Error":l})})]}),e.jsx(u,{dark:!0,code:`
import { getRange } from "@baggie/core";

const numbers = [${i.join(", ")}];

const range = getRange(numbers);
// range = ${l}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{numbers:{defaultValue:null,description:"",name:"numbers",required:!0,type:{name:"number[]"}}}}}catch{}function m(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getrange",children:"getRange"}),`
`,e.jsx(t.p,{children:"Get the range from an array of numbers."}),`
`,e.jsx(t.p,{children:"This is the largest value minus the smallest value."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"numbers"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number[]"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{numbers:[40,4,15,23,42,5]})]})}function C(r={}){const{wrapper:t}=Object.assign({},p(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(m,r)})):m(r)}export{C as default};
