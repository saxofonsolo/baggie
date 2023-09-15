import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{b as x}from"./index-2fa589e3.js";import{n as j}from"./normalizeRanges-f9fde636.js";import{I as u}from"./InputWrapper-a637f81f.js";import{u as p}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const f=(r,n)=>j(n).reduce((o,{from:a,to:c})=>o||r>=a&&r<=c,!1),l=r=>{const[n,o]=d.useState(r.number),[a,c]=d.useState(r.ranges),{realRanges:i,result:m}=d.useMemo(()=>{const s=a.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(t=>{try{return JSON.parse(t.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(t=>t&&(Array.isArray(t)&&t.length===2||typeof t=="object"&&typeof t.from=="number"&&typeof t.to=="number")),g=f(n,s);return{realRanges:s,result:g}},[n,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(u,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:s})=>o(s.valueAsNumber||0),autoComplete:"off"})}),e.jsx(u,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:a,onChange:({target:s})=>c(s.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(u,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:m?"true":"false"})})]}),e.jsx(x,{dark:!0,code:`
import { isInRange } from "@baggie/core";

const range${i.length===1?"":"s"} = ${i.length===1?JSON.stringify(i[0],null,4):JSON.stringify(i,null,4)};

const result = isInRange(${n}, range${i.length===1?"":"s"});
// result = ${m?"true":"false"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function h(r){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isinrange",children:"isInRange"}),`
`,e.jsx(n.p,{children:"Check if a number is within the range of a minimum and maximum value."}),`
`,e.jsxs(n.p,{children:[`The function accepts multiple ranges to check the number against, and
returns `,e.jsx(n.code,{children:"true"}),` if the number is within the bounds of at least one of
the ranges.`]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"ranges"})}),e.jsxs(n.td,{align:"left",children:["An ",e.jsx(n.code,{children:"Array"})," or single value of ",e.jsx(n.code,{children:"{ from: number; to: number }"})," or ",e.jsx(n.code,{children:"[number, number]"})]}),e.jsx(n.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Check against a single range"}),`
`,e.jsx(l,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(n.p,{children:"Check against multiple ranges"}),`
`,e.jsx(l,{number:1,ranges:`[1, 2]
[10, 20]
{ from: 25, to: 75 }`})]})}function w(r={}){const{wrapper:n}=Object.assign({},p(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(h,r)})):h(r)}export{w as default};
//# sourceMappingURL=isInRange-11d0f0ab.js.map
