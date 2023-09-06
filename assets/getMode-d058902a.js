import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{b as m}from"./index-e3b36901.js";import{I as l}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=o=>{const t={};let s=0,r=[];return o.forEach(n=>{t[n]=(t[n]||0)+1,s<t[n]?(s=t[n],r=[n]):s===t[n]&&r.push(n)}),{numbers:r,frequency:s}},a=o=>{const[t,s]=u.useState(o.defaultInput.join(", ")),{numbers:r,result:n}=u.useMemo(()=>{const i=t.split(/\s*,\s*/).filter(p=>p.length).map(p=>p.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(p):NaN);return{numbers:i,result:c(i)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:i})=>s(i.value)})}),e.jsx(l,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:n?`[${n.numbers.join(", ")}]`:"Error"})})]}),e.jsx(m,{dark:!0,code:`
import { getMode } from "@baggie/core";

const numbers = [${r.join(", ")}];

const result = getMode(numbers);
/*
result = ${JSON.stringify(n,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function v(o={}){const{wrapper:t}=Object.assign({},d(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},d(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getantimode",children:"getAntiMode"}),`
`,e.jsxs(r.p,{children:["Get the mode from an array of numbers.",e.jsx("br",{}),`
The mode is the most frequent value in a data set.`]}),`
`,e.jsx(r.p,{children:`There can be more than one mode if multiple values
are repeated an equal amount of times.`}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(a,{defaultInput:[8,8,-16,42,42,8,42]}),`
`,e.jsx(a,{defaultInput:[1,2,3]})]})}}export{v as default};
//# sourceMappingURL=getMode-d058902a.js.map
