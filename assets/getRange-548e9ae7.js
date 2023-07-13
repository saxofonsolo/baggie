import{j as e}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{b as m}from"./index-c495ba38.js";import{I as c}from"./InputWrapper-088860b1.js";import{u as p}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=n=>{const r=[...n].sort((s,t)=>s-t);return r[r.length-1]-r[0]||0},o=n=>{const[r,s]=d.useState(n.numbers.join(", ")),{numbers:t,range:l}=d.useMemo(()=>{const a=r.split(/\s*,\s*/).filter(i=>i.length).map(i=>i.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(i):NaN);return{numbers:a,range:u(a)}},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:r,onChange:({target:a})=>s(a.value),spellCheck:!1})}),e.jsx(c,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(l)?"Error":l})})]}),e.jsx(m,{dark:!0,code:`
import { getRange } from "@baggie/core";

const numbers = [${t.join(", ")}];

const range = getRange(numbers);
// range = ${l}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{numbers:{defaultValue:null,description:"",name:"numbers",required:!0,type:{name:"number[]"}}}}}catch{}function R(n={}){const{wrapper:r}=Object.assign({},p(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getrange",children:"getRange"}),`
`,e.jsx(t.p,{children:"Get the range from an array of numbers."}),`
`,e.jsx(t.p,{children:"This is the largest value minus the smallest value."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"numbers"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number[]"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{numbers:[40,4,15,23,42,5]})]})}}export{R as default};
//# sourceMappingURL=getRange-548e9ae7.js.map
