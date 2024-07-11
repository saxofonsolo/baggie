import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as h}from"./index-BI7qbVC1.js";import{r as l}from"./index-CBqU2yxZ.js";import{I as d}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as m}from"./index-C-_6Vi3R.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function u(t,r,x){const n=i=>i,a=typeof t=="number"?t:n(t);return[...r].sort((i,c)=>Math.abs(a-n(i))-Math.abs(a-n(c)))}const j=t=>{const[r,x]=l.useState(t.target),[n,a]=l.useState(t.numbers.join(", ")),{numbers:i,sorted:c}=l.useMemo(()=>{const s=n.split(/\s*,\s*/).filter(o=>o.length).map(o=>o.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(o):NaN);return{numbers:s,sorted:u(r,s)}},[r,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Target",labelForId:"target-input",children:e.jsx("input",{id:"target-input",type:"number",value:r,onChange:({target:s})=>x(s.valueAsNumber)})}),e.jsx(d,{label:"Numbers",labelForId:"numbers-input",children:e.jsx("input",{id:"numbers-input",value:n,onChange:({target:s})=>a(s.value)})}),e.jsx(d,{label:"Sorted",labelForId:void 0,children:e.jsxs("div",{style:{padding:"5px 0"},children:["[",c.join(", "),"]"]})})]}),e.jsx(h,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = ${r};
const numbers = [${i.join(", ")}];

const sorted = sortByDifference(target, numbers);
// sorted = [${c.join(", ")}]
`})]})};try{j.displayName="Example",j.__docgenInfo={description:"",displayName:"Example",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"number"}},numbers:{defaultValue:null,description:"",name:"numbers",required:!0,type:{name:"number[]"}}}}}catch{}function g(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"sortbydifference",children:"sortByDifference"}),`
`,e.jsx(r.p,{children:"Sort an array of numbers by their difference to a target number."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(r.p,{children:"If you are only working with numbers"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"target"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"array"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number[]"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.p,{children:"or if you are working with more complex data types"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"target"})}),e.jsxs(r.td,{align:"left",children:[e.jsx(r.code,{children:"T"})," or ",e.jsx(r.code,{children:"number"})]}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"array"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"T[]"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"getDifference"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"(item: T) => number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsxs(r.p,{children:["Sort an array of ",e.jsx(r.strong,{children:"numbers"})]}),`
`,e.jsx(j,{target:8,numbers:[5,10,15,20]}),`
`,e.jsxs(r.p,{children:["You can also sort things like an array of ",e.jsx(r.strong,{children:"objects"})]}),`
`,e.jsx(h,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = { price: 5 };
const objects = [{ price: 1 }, { price: 9 }, { price: 4 }];
const getDifference = (obj) => obj.price;

const sorted = sortByDifference(target, objects, getDifference);
// sorted = [{ price: 4 }, { price: 9 }, { price: 1 }]
`}),`
`,e.jsxs(r.p,{children:["... or an array of ",e.jsx(r.strong,{children:"arrays"})]}),`
`,e.jsx(h,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = 10;
const arrays = [[1, 99, "8z"], [20, 4, "7a"], [6, 6, "6b"]];
const getDifference = (arr) => arr[1];

const sorted = sortByDifference(target, arrays, getDifference);
// sorted = [[6, 6, "6b"], [20, 4, "7a"], [1, 99, "8z"]]
`})]})}function S(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(g,t)})):g(t)}export{S as default};
