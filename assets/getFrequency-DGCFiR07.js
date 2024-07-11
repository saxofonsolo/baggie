import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{b as f}from"./index-BI7qbVC1.js";import{I as x}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as m}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function h(r,n){const s=new Map;return r.forEach(t=>s.set(t,s.has(t)?(s.get(t)||0)+1:1)),n?s:Array.from(s,([t,u])=>({value:t,frequency:u})).sort((t,u)=>t.frequency<u.frequency?-1:t.frequency>u.frequency?1:0)}const g=r=>`Map {
`+Array.from(r).reduce((n,[s,t])=>(n+=`    ${typeof s=="string"?`"${s}"`:JSON.parse(s)} => ${t},
`,n),"")+"}",a=r=>{const[n,s]=i.useState(r.defaultInput.join(", ")),[t,u]=i.useState(!1),{input:d,result:c}=i.useMemo(()=>{const p=n.split(/\s*,\s*/).filter(o=>o.length).map(o=>o.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(o):o);return{input:p,result:h(p,t)}},[n,t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(x,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:p})=>s(p.value)})})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>u(p=>!p)})," ","Return as Map object"]}),e.jsx(f,{dark:!0,code:`
import { getFrequency } from "@baggie/core";

const input = [${d.map(p=>typeof p=="string"?`"${p}"`:p).join(", ")}];

const result = getFrequency(input${t?", true":""});
/*
result = ${t?g(c):JSON.stringify(c,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function l(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getfrequency",children:"getFrequency"}),`
`,e.jsx(n.p,{children:"Get the frequency of each item in an array of numbers or strings."}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(a,{defaultInput:[8,8,8,-16,-16,42,42,42]}),`
`,e.jsx(a,{defaultInput:[1,2,"3c"]})]})}function O(r={}){const{wrapper:n}=Object.assign({},m(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(l,r)})):l(r)}export{O as default};