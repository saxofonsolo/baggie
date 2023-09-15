import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as c}from"./index-2fa589e3.js";import{g as x}from"./getMean-b7b6c0cb.js";import{I as p}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./addNumbers-491af948.js";const r=n=>{const[t,m]=i.useState(n.defaultInput.join(", ")),{numbers:d,result:o}=i.useMemo(()=>{const a=t.split(/\s*,\s*/).filter(s=>s.length).map(s=>s.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(s):NaN);return{numbers:a,result:x(a)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(p,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:a})=>m(a.value)})}),e.jsx(p,{label:"Mean",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(o)?"Error":o})})]}),e.jsx(c,{dark:!0,code:`
import { getMean } from "@baggie/core";

const numbers = [${d.join(", ")}];

const mean = getMean(numbers);
// mean = ${o}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function u(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getmean",children:"getMean"}),`
`,e.jsxs(t.p,{children:["Get the mean value of an array of numbers.",e.jsx("br",{}),`
This is what is most often referred to as "average".`]}),`
`,e.jsx(t.p,{children:"All the values are added together and divided by the amount of numbers."}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{defaultInput:[1,2,3]}),`
`,e.jsx(r,{defaultInput:[1,1,1]}),`
`,e.jsx(r,{defaultInput:[4,8,15,16,23,42]})]})}function C(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(u,n)})):u(n)}export{C as default};
//# sourceMappingURL=getMean-ea87582b.js.map
