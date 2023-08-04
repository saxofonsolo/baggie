import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{b as d}from"./index-2b4cce42.js";import{g as c}from"./getMean-b7b6c0cb.js";import{I as m}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./addNumbers-491af948.js";const s=t=>{const[n,a]=u.useState(t.defaultInput.join(", ")),{numbers:r,result:p}=u.useMemo(()=>{const o=n.split(/\s*,\s*/).filter(i=>i.length).map(i=>i.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(i):NaN);return{numbers:o,result:c(o)}},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:n,onChange:({target:o})=>a(o.value)})}),e.jsx(m,{label:"Mean",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(p)?"Error":p})})]}),e.jsx(d,{dark:!0,code:`
import { getMean } from "@baggie/core";

const numbers = [${r.join(", ")}];

const mean = getMean(numbers);
// mean = ${p}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function C(t={}){const{wrapper:n}=Object.assign({},l(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,{})})):a();function a(){const r=Object.assign({h1:"h1",p:"p",h2:"h2"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getmean",children:"getMean"}),`
`,e.jsxs(r.p,{children:["Get the mean value of an array of numbers.",e.jsx("br",{}),`
This is what is most often referred to as "average".`]}),`
`,e.jsx(r.p,{children:"All the values are added together and divided by the amount of numbers."}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{defaultInput:[1,2,3]}),`
`,e.jsx(s,{defaultInput:[1,1,1]}),`
`,e.jsx(s,{defaultInput:[4,8,15,16,23,42]})]})}}export{C as default};
//# sourceMappingURL=getMean-e1945592.js.map
