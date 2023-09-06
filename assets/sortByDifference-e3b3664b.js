import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as j}from"./index-e3b36901.js";import{r as d}from"./index-76fb7be0.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as m}from"./index-a1cf9e47.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const g=(t,n,s)=>{const r=typeof s=="function"?s:a=>a,c=typeof t=="number"?t:r(t);return[...n].sort((a,o)=>Math.abs(c-r(a))-Math.abs(c-r(o)))},x=t=>{const[n,s]=d.useState(t.target),[r,c]=d.useState(t.numbers.join(", ")),{numbers:a,sorted:o}=d.useMemo(()=>{const i=r.split(/\s*,\s*/).filter(l=>l.length).map(l=>l.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(l):NaN);return{numbers:i,sorted:g(n,i)}},[n,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"Target",labelForId:"target-input",children:e.jsx("input",{id:"target-input",type:"number",value:n,onChange:({target:i})=>s(i.valueAsNumber)})}),e.jsx(h,{label:"Numbers",labelForId:"numbers-input",children:e.jsx("input",{id:"numbers-input",value:r,onChange:({target:i})=>c(i.value)})}),e.jsx(h,{label:"Sorted",labelForId:void 0,children:e.jsxs("div",{style:{padding:"5px 0"},children:["[",o.join(", "),"]"]})})]}),e.jsx(j,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = ${n};
const numbers = [${a.join(", ")}];

const sorted = sortByDifference(target, numbers);
// sorted = [${o.join(", ")}]
`})]})};try{x.displayName="Example",x.__docgenInfo={description:"",displayName:"Example",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"number"}},numbers:{defaultValue:null,description:"",name:"numbers",required:!0,type:{name:"number[]"}}}}}catch{}function v(t={}){const{wrapper:n}=Object.assign({},m(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"sortbydifference",children:"sortByDifference"}),`
`,e.jsx(r.p,{children:"Sort an array of numbers by their difference to a target number."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(r.p,{children:"If you are only working with numbers"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"target"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"array"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number[]"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.p,{children:"or if you are working with more complex data types"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"target"})}),e.jsxs(r.td,{align:"left",children:[e.jsx(r.code,{children:"T"})," or ",e.jsx(r.code,{children:"number"})]}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"array"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"T[]"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"getDifference"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"(item: T) => number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsxs(r.p,{children:["Sort an array of ",e.jsx(r.strong,{children:"numbers"})]}),`
`,e.jsx(x,{target:8,numbers:[5,10,15,20]}),`
`,e.jsxs(r.p,{children:["You can also sort things like an array of ",e.jsx(r.strong,{children:"objects"})]}),`
`,e.jsx(j,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = { price: 5 };
const objects = [{ price: 1 }, { price: 9 }, { price: 4 }];
const getDifference = (obj) => obj.price;

const sorted = sortByDifference(target, objects, getDifference);
// sorted = [{ price: 4 }, { price: 9 }, { price: 1 }]
`}),`
`,e.jsxs(r.p,{children:["... or an array of ",e.jsx(r.strong,{children:"arrays"})]}),`
`,e.jsx(j,{dark:!0,code:`
import { sortByDifference } from "@baggie/core";

const target = 10;
const arrays = [[1, 99, "8z"], [20, 4, "7a"], [6, 6, "6b"]];
const getDifference = (arr) => arr[1];

const sorted = sortByDifference(target, arrays, getDifference);
// sorted = [[6, 6, "6b"], [20, 4, "7a"], [1, 99, "8z"]]
`})]})}}export{v as default};
//# sourceMappingURL=sortByDifference-e3b3664b.js.map
