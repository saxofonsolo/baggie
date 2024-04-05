import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import{b as x}from"./index-y2kHJEFa.js";import{m as j}from"./mergeIntervals-oG_OIwaV.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./normalizeRanges-Tq3FrBIg.js";const l=n=>{const[r,g]=o.useState(n.ranges),[a,h]=o.useState(!0),{realRanges:i,result:d}=o.useMemo(()=>{const s=r.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(t=>{try{return JSON.parse(t.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(t=>t&&(Array.isArray(t)&&t.length===2||typeof t=="object"&&typeof t.from=="number"&&typeof t.to=="number")),u=j(s,a);return{realRanges:s,result:u}},[r,a]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:r,onChange:({target:s})=>g(s.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:JSON.stringify(d)})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>h(s=>!s)})," ","Combine equals"]}),e.jsx(x,{dark:!0,code:`
import { mergeIntervals } from "@baggie/core";

const ranges = ${i.length===1?JSON.stringify(i[0],null,4):JSON.stringify(i,null,4)};

const result = mergeIntervals(ranges);
/*
result = ${JSON.stringify(d,null,4)}
*/
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function m(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"mergeintervals",children:"mergeIntervals"}),`
`,e.jsx(r.p,{children:"Merge and combine overlapping intervals."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{align:"left",children:"Default value"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"ranges"})}),e.jsxs(r.td,{align:"left",children:["An ",e.jsx(r.code,{children:"Array"})," or single value of ",e.jsx(r.code,{children:"{ from: number; to: number }"})," or ",e.jsx(r.code,{children:"[number, number]"})]}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{align:"left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"combineEquals"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{align:"center"}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"true"})})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.p,{children:"Keep number outside a single range"}),`
`,e.jsx(l,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(r.p,{children:"Keep number outside multiple ranges"}),`
`,e.jsx(l,{number:10,ranges:`[0, 10]
[10, 20]
{ from: 25, to: 75 }`})]})}function A(n={}){const{wrapper:r}=Object.assign({},p(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(m,n)})):m(n)}export{A as default};
