import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{b as m}from"./index-CJNtjuy4.js";import{I as u}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as g}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const f=(r,...n)=>r.reduce((i,l,o,a)=>(i.push(l),o<a.length-1&&n.forEach((t,d)=>i.push(typeof t=="function"?t({previous:a[o],next:a[o+1],index:d}):t)),i),[]),c=r=>{const[n,i]=h.useState(r.array),[l,o]=h.useState(r.insertion),{splitArray:a,splitInsertion:t,output:d}=h.useMemo(()=>{const s=n.split(/\s*,\s*/).filter(p=>p!==""),x=l.split(/\s*,\s*/).filter(p=>p!==""),y=f(s,...x);return{splitArray:s,splitInsertion:x,output:y}},[n,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(u,{label:"Array",labelForId:"array-input",children:e.jsx("input",{id:"array-input",value:n,onChange:({target:s})=>i(s.value),spellCheck:!1})}),e.jsx(u,{label:"Insertion",labelForId:"insertion-input",children:e.jsx("input",{id:"insertion-input",value:l,onChange:({target:s})=>o(s.value),spellCheck:!1})}),e.jsx(u,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:e.jsx("code",{children:JSON.stringify(d)})})})]}),e.jsx(m,{dark:!0,code:`
import { intersperse } from "@baggie/core";

const array = ${JSON.stringify(a)};
const insertion = ${JSON.stringify(t.length===1?t[0]:t)};

const output = intersperse(array, ${t.length===1?"":"..."}insertion);
/*
output = ${JSON.stringify(d,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{array:{defaultValue:null,description:"",name:"array",required:!0,type:{name:"string"}},insertion:{defaultValue:null,description:"",name:"insertion",required:!0,type:{name:"string"}}}}}catch{}function j(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},g(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"intersperse",children:"intersperse"}),`
`,e.jsx(n.p,{children:"Insert new values between all existing values in an array."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"array"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"any[]"})}),e.jsx(n.td,{align:"center",children:"✔"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"insertion"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"...any[]"})}),e.jsx(n.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"With a single insertion:"}),`
`,e.jsx(c,{array:"a, b, c, d",insertion:"+"}),`
`,e.jsx(n.p,{children:"With multiple insertions:"}),`
`,e.jsx(c,{array:"a, b, c, d",insertion:"+, -"}),`
`,e.jsx(n.p,{children:"With a function:"}),`
`,e.jsx(m,{dark:!0,code:`
import { intersperse } from "@baggie/core";

const numbers = [10, 20, 30, 40];
const insertion = ({ previous, next }) => previous + (next - previous) / 2;

const newNumbers = intersperse(numbers, insertion);
// newNumbers = [10, 15, 20, 25, 30, 35, 40]
`})]})}function M(r={}){const{wrapper:n}=Object.assign({},g(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(j,r)})):j(r)}export{M as default};
