import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as f}from"./index-2fa589e3.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as m}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=(r,n)=>{const s=new Map;return r.forEach(t=>s.set(t,s.has(t)?(s.get(t)||0)+1:1)),n?s:Array.from(s,([t,u])=>({value:t,frequency:u})).sort((t,u)=>t.frequency<u.frequency?-1:t.frequency>u.frequency?1:0)},g=r=>`Map {
`+Array.from(r).reduce((n,[s,t])=>(n+=`    ${typeof s=="string"?`"${s}"`:JSON.parse(s)} => ${t},
`,n),"")+"}",o=r=>{const[n,s]=i.useState(r.defaultInput.join(", ")),[t,u]=i.useState(!1),{input:d,result:c}=i.useMemo(()=>{const p=n.split(/\s*,\s*/).filter(a=>a.length).map(a=>a.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(a):a);return{input:p,result:h(p,t)}},[n,t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(x,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:p})=>s(p.value)})})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>u(p=>!p)})," ","Return as Map object"]}),e.jsx(f,{dark:!0,code:`
import { getFrequency } from "@baggie/core";

const input = [${d.map(p=>typeof p=="string"?`"${p}"`:p).join(", ")}];

const result = getFrequency(input${t?", true":""});
/*
result = ${t?g(c):JSON.stringify(c,null,4)}
*/
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function l(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getfrequency",children:"getFrequency"}),`
`,e.jsx(n.p,{children:"Get the frequency of each item in an array of numbers or strings."}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(o,{defaultInput:[8,8,8,-16,-16,42,42,42]}),`
`,e.jsx(o,{defaultInput:[1,2,"3c"]})]})}function C(r={}){const{wrapper:n}=Object.assign({},m(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(l,r)})):l(r)}export{C as default};
//# sourceMappingURL=getFrequency-5d7c9f8e.js.map
