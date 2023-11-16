import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{b as u}from"./index-XmUqo-P7.js";import{a as h}from"./addNumbers-ln62UkCS.js";import{I as i}from"./InputWrapper-7qBv-a2h.js";import{u as c}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const d=r=>{const[t,p]=l.useState(r.defaultInput.join(", ")),{numbers:m,total:a}=l.useMemo(()=>{const n=t.split(/\s*,\s*/).filter(s=>s.length).map(s=>s.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(s):NaN);return{numbers:n,total:h(n)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(i,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:n})=>p(n.value),spellCheck:!1})}),e.jsx(i,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(u,{dark:!0,code:`
import { addNumbers } from "@baggie/core";

const numbers = [${m.join(", ")}];

const total = addNumbers(numbers);
// total = ${a}
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"addnumbers",children:"addNumbers"}),`
`,e.jsx(t.p,{children:"Add an array of numbers together."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"numbers"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number[]"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{defaultInput:[1,2,3,4,5,6,7,8,9]})]})}function F(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{F as default};
//# sourceMappingURL=addNumbers-dbru8Ck-.js.map
