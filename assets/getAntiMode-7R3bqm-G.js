import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as p}from"./index-4g5l5LRQ.js";import{b as c}from"./index-CJNtjuy4.js";import{I as l}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const f=s=>{const r=s.reduce((n,t)=>(typeof n[t]>"u"?n[t]={value:t,frequency:1}:n[t].frequency+=1,n),{});return Object.values(r).map(({value:n,frequency:t})=>({value:n,frequency:t})).sort((n,t)=>n.frequency<t.frequency?-1:n.frequency>t.frequency?1:0).filter((n,t,u)=>n.frequency===u[0].frequency).reduce((n,t)=>({numbers:[...n.numbers,t.value],frequency:t.frequency}),{numbers:[],frequency:0})},a=s=>{const[r,n]=p.useState(s.defaultInput.join(", ")),{numbers:t,result:u}=p.useMemo(()=>{const i=r.split(/\s*,\s*/).filter(o=>o.length).map(o=>o.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(o):NaN);return{numbers:i,result:f(i)}},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:r,onChange:({target:i})=>n(i.value)})}),e.jsx(l,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:u?`[${u.numbers.join(", ")}]`:"Error"})})]}),e.jsx(c,{dark:!0,code:`
import { getAntiMode } from "@baggie/core";

const numbers = [${t.join(", ")}];

const result = getAntiMode(numbers);
/*
result = ${JSON.stringify(u,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function m(s){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getantimode",children:"getAntiMode"}),`
`,e.jsxs(r.p,{children:["Get the anti mode from an array of numbers.",e.jsx("br",{}),`
The anti mode is the least frequent value in a data set.`]}),`
`,e.jsx(r.p,{children:`There can be more than one anti mode if multiple values
are repeated an equal amount of times.`}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(a,{defaultInput:[8,8,8,-16,-16,42,42,42]}),`
`,e.jsx(a,{defaultInput:[1,2,3]})]})}function O(s={}){const{wrapper:r}=Object.assign({},d(),s.components);return r?e.jsx(r,Object.assign({},s,{children:e.jsx(m,s)})):m(s)}export{O as default};
