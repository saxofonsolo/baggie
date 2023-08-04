import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{b as u}from"./index-2b4cce42.js";import{m as x}from"./mergeIntervals-da6ca95d.js";import{I as m}from"./InputWrapper-a637f81f.js";import{u as p}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./normalizeRanges-f9fde636.js";const i=t=>{const[s,a]=d.useState(t.ranges),[r,g]=d.useState(!0),{realRanges:o,result:c}=d.useMemo(()=>{const l=s.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(n=>{try{return JSON.parse(n.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(n=>n&&(Array.isArray(n)&&n.length===2||typeof n=="object"&&typeof n.from=="number"&&typeof n.to=="number")),h=x(l,r);return{realRanges:l,result:h}},[s,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:s,onChange:({target:l})=>a(l.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(m,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:JSON.stringify(c)})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>g(l=>!l)})," ","Combine equals"]}),e.jsx(u,{dark:!0,code:`
import { mergeIntervals } from "@baggie/core";

const ranges = ${o.length===1?JSON.stringify(o[0],null,4):JSON.stringify(o,null,4)};

const result = mergeIntervals(ranges);
/*
result = ${JSON.stringify(c,null,4)}
*/
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function J(t={}){const{wrapper:s}=Object.assign({},p(),t.components);return s?e.jsx(s,Object.assign({},t,{children:e.jsx(a,{})})):a();function a(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"mergeintervals",children:"mergeIntervals"}),`
`,e.jsx(r.p,{children:"Merge and combine overlapping intervals."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{align:"left",children:"Default value"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"ranges"})}),e.jsxs(r.td,{align:"left",children:["An ",e.jsx(r.code,{children:"Array"})," or single value of ",e.jsx(r.code,{children:"{ from: number; to: number }"})," or ",e.jsx(r.code,{children:"[number, number]"})]}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{align:"left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"combineEquals"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{align:"center"}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"true"})})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.p,{children:"Keep number outside a single range"}),`
`,e.jsx(i,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(r.p,{children:"Keep number outside multiple ranges"}),`
`,e.jsx(i,{number:10,ranges:`[0, 10]
[10, 20]
{ from: 25, to: 75 }`})]})}}export{J as default};
//# sourceMappingURL=mergeIntervals-3f19ec94.js.map
