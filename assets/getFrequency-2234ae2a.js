import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as d}from"./index-e3b36901.js";import{I as f}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const x=(s,r)=>{const n=new Map;return s.forEach(e=>n.set(e,n.has(e)?(n.get(e)||0)+1:1)),r?n:Array.from(n,([e,u])=>({value:e,frequency:u})).sort((e,u)=>e.frequency<u.frequency?-1:e.frequency>u.frequency?1:0)},h=s=>`Map {
`+Array.from(s).reduce((r,[n,e])=>(r+=`    ${typeof n=="string"?`"${n}"`:JSON.parse(n)} => ${e},
`,r),"")+"}",o=s=>{const[r,n]=i.useState(s.defaultInput.join(", ")),[e,u]=i.useState(!1),{input:m,result:c}=i.useMemo(()=>{const p=r.split(/\s*,\s*/).filter(a=>a.length).map(a=>a.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(a):a);return{input:p,result:x(p,e)}},[r,e]);return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{display:"flex",gap:"10px"},children:t.jsx(f,{label:"Input",labelForId:"input-input",children:t.jsx("input",{id:"input-input",value:r,onChange:({target:p})=>n(p.value)})})}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:e,onChange:()=>u(p=>!p)})," ","Return as Map object"]}),t.jsx(d,{dark:!0,code:`
import { getFrequency } from "@baggie/core";

const input = [${m.map(p=>typeof p=="string"?`"${p}"`:p).join(", ")}];

const result = getFrequency(input${e?", true":""});
/*
result = ${e?h(c):JSON.stringify(c,null,4)}
*/
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function S(s={}){const{wrapper:r}=Object.assign({},l(),s.components);return r?t.jsx(r,Object.assign({},s,{children:t.jsx(n,{})})):n();function n(){const e=Object.assign({h1:"h1",p:"p",h2:"h2"},l(),s.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getfrequency",children:"getFrequency"}),`
`,t.jsx(e.p,{children:"Get the frequency of each item in an array of numbers or strings."}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(o,{defaultInput:[1,2,2,3,3,3]}),`
`,t.jsx(o,{defaultInput:[8,8,8,-16,-16,42,42,42]}),`
`,t.jsx(o,{defaultInput:[1,2,"3c"]})]})}}export{S as default};
//# sourceMappingURL=getFrequency-2234ae2a.js.map
