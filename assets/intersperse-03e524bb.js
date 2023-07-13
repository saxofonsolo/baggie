import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{b as m}from"./index-c5be8d33.js";import{I as h}from"./InputWrapper-088860b1.js";import{u as j}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-71f486ec.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const y=(r,...t)=>r.reduce((s,n,o,a)=>(s.push(n),o<a.length-1&&t.forEach((i,d)=>s.push(typeof i=="function"?i({previous:a[o],next:a[o+1],index:d}):i)),s),[]),c=r=>{const[t,s]=u.useState(r.array),[n,o]=u.useState(r.insertion),{splitArray:a,splitInsertion:i,output:d}=u.useMemo(()=>{const l=t.split(/\s*,\s*/).filter(p=>p!==""),x=n.split(/\s*,\s*/).filter(p=>p!==""),g=y(l,...x);return{splitArray:l,splitInsertion:x,output:g}},[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"Array",labelForId:"array-input",children:e.jsx("input",{id:"array-input",value:t,onChange:({target:l})=>s(l.value),spellCheck:!1})}),e.jsx(h,{label:"Insertion",labelForId:"insertion-input",children:e.jsx("input",{id:"insertion-input",value:n,onChange:({target:l})=>o(l.value),spellCheck:!1})}),e.jsx(h,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:e.jsx("code",{children:JSON.stringify(d)})})})]}),e.jsx(m,{dark:!0,code:`
import { intersperse } from "@baggie/core";

const array = ${JSON.stringify(a)};
const insertion = ${JSON.stringify(i.length===1?i[0]:i)};

const output = intersperse(array, ${i.length===1?"":"..."}insertion);
/*
output = ${JSON.stringify(d,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{array:{defaultValue:null,description:"",name:"array",required:!0,type:{name:"string"}},insertion:{defaultValue:null,description:"",name:"insertion",required:!0,type:{name:"string"}}}}}catch{}function F(r={}){const{wrapper:t}=Object.assign({},j(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},j(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"intersperse",children:"intersperse"}),`
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
`})]})}}export{F as default};
//# sourceMappingURL=intersperse-03e524bb.js.map
