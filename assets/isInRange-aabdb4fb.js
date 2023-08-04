import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{b as g}from"./index-2b4cce42.js";import{n as x}from"./normalizeRanges-f9fde636.js";import{I as u}from"./InputWrapper-a637f81f.js";import{u as h}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=(r,t)=>x(t).reduce((a,{from:n,to:c})=>a||r>=n&&r<=c,!1),o=r=>{const[t,a]=d.useState(r.number),[n,c]=d.useState(r.ranges),{realRanges:l,result:m}=d.useMemo(()=>{const i=n.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(s=>{try{return JSON.parse(s.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(s=>s&&(Array.isArray(s)&&s.length===2||typeof s=="object"&&typeof s.from=="number"&&typeof s.to=="number")),p=j(t,i);return{realRanges:i,result:p}},[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(u,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:i})=>a(i.valueAsNumber||0),autoComplete:"off"})}),e.jsx(u,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:n,onChange:({target:i})=>c(i.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(u,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:m?"true":"false"})})]}),e.jsx(g,{dark:!0,code:`
import { isInRange } from "@baggie/core";

const range${l.length===1?"":"s"} = ${l.length===1?JSON.stringify(l[0],null,4):JSON.stringify(l,null,4)};

const result = isInRange(${t}, range${l.length===1?"":"s"});
// result = ${m?"true":"false"}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function w(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(a,{})})):a();function a(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isinrange",children:"isInRange"}),`
`,e.jsx(n.p,{children:"Check if a number is within the range of a minimum and maximum value."}),`
`,e.jsxs(n.p,{children:[`The function accepts multiple ranges to check the number against, and
returns `,e.jsx(n.code,{children:"true"}),` if the number is within the bounds of at least one of
the ranges.`]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"ranges"})}),e.jsxs(n.td,{align:"left",children:["An ",e.jsx(n.code,{children:"Array"})," or single value of ",e.jsx(n.code,{children:"{ from: number; to: number }"})," or ",e.jsx(n.code,{children:"[number, number]"})]}),e.jsx(n.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Check against a single range"}),`
`,e.jsx(o,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(n.p,{children:"Check against multiple ranges"}),`
`,e.jsx(o,{number:1,ranges:`[1, 2]
[10, 20]
{ from: 25, to: 75 }`})]})}}export{w as default};
//# sourceMappingURL=isInRange-aabdb4fb.js.map
