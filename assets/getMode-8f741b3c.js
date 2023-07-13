import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{b as d}from"./index-642316a4.js";import{I as l}from"./InputWrapper-088860b1.js";import{u as m}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bf4e6f48.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=o=>{const t={};let s=0,r=[];return o.forEach(n=>{t[n]=(t[n]||0)+1,s<t[n]?(s=t[n],r=[n]):s===t[n]&&r.push(n)}),{numbers:r,frequency:s}},a=o=>{const[t,s]=u.useState(o.defaultInput.join(", ")),{numbers:r,result:n}=u.useMemo(()=>{const i=t.split(/\s*,\s*/).filter(p=>p.length).map(p=>p.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(p):NaN);return{numbers:i,result:c(i)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:i})=>s(i.value)})}),e.jsx(l,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:n?`[${n.numbers.join(", ")}]`:"Error"})})]}),e.jsx(d,{dark:!0,code:`
import { getMode } from "@baggie/core";

const numbers = [${r.join(", ")}];

const result = getMode(numbers);
/*
result = ${JSON.stringify(n,null,4)}
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function F(o={}){const{wrapper:t}=Object.assign({},m(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},m(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getantimode",children:"getAntiMode"}),`
`,e.jsxs(r.p,{children:["Get the mode from an array of numbers.",e.jsx("br",{}),`
The mode is the most frequent value in a data set.`]}),`
`,e.jsx(r.p,{children:`There can be more than one mode if multiple values
are repeated an equal amount of times.`}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{defaultInput:[1,2,2,3,3,3]}),`
`,e.jsx(a,{defaultInput:[8,8,-16,42,42,8,42]}),`
`,e.jsx(a,{defaultInput:[1,2,3]})]})}}export{F as default};
//# sourceMappingURL=getMode-8f741b3c.js.map
