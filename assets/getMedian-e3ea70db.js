import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{b as c}from"./index-9f119f36.js";import{g as h}from"./getMean-b7b6c0cb.js";import{I as m}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./addNumbers-491af948.js";const x=n=>{const t=n.length,s=Math.floor(t/2),o=[...n].sort((a,r)=>a-r);return t?t%2?o[s]:h([o[s-1],o[s]]):0},i=n=>{const[t,s]=u.useState(n.defaultInput.join(", ")),{numbers:o,result:a}=u.useMemo(()=>{const r=t.split(/\s*,\s*/).filter(p=>p.length).map(p=>p.match(/^-?[0-9]*\.?[0-9]*$/)?parseFloat(p):NaN);return{numbers:r,result:x(r)}},[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:r})=>s(r.value)})}),e.jsx(m,{label:"Median",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(c,{dark:!0,code:`
import { getMedian } from "@baggie/core";

const numbers = [${o.join(", ")}];

const median = getMedian(numbers);
// median = ${a}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"number[]"}}}}}catch{}function d(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getmedian",children:"getMedian"}),`
`,e.jsx(t.p,{children:"Get the median from an array of numbers."}),`
`,e.jsx(t.p,{children:`The median is the middle value or, if two middle values,
the mean of those two with the numbers in ascending order.`}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{defaultInput:[1,2,3]}),`
`,e.jsx(i,{defaultInput:[1,1,1]}),`
`,e.jsx(i,{defaultInput:[4,8,15,16,23,42]})]})}function w(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{w as default};
//# sourceMappingURL=getMedian-e3ea70db.js.map
