import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{b as h}from"./index-CJNtjuy4.js";import{g as j}from"./getPercentageBetween-h4plVkI6.js";import{I as a}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as m}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const i=n=>{const[t,p]=l.useState(n.from),[o,u]=l.useState(n.to),[s,x]=l.useState(n.position),d=l.useMemo(()=>j(s,{from:t,to:o}),[t,o,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{label:"Position",labelForId:"position-input",children:e.jsx("input",{id:"position-input",type:"number",value:s,onChange:({target:r})=>x(r.valueAsNumber||0)})}),e.jsx(a,{label:"From",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"number",value:t,onChange:({target:r})=>p(r.valueAsNumber||0)})}),e.jsx(a,{label:"To",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"number",value:o,onChange:({target:r})=>u(r.valueAsNumber||0)})}),e.jsx(a,{label:"Percentage",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:d})})]}),e.jsx(h,{dark:!0,code:`
import { getPercentageBetween } from "@baggie/core";

const percentage = getPercentageBetween(${s}, { from: ${t}, to: ${o} });
// percentage = ${d}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"number"}}}}}catch{}function c(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentagebetween",children:"getPercentageBetween"}),`
`,e.jsx(t.p,{children:"Get the position between two numbers as a percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"position"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"interval"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"{ from: number; to: number }"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentageAsDecimal"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"true"})})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{from:0,to:10,position:5}),`
`,e.jsx(i,{from:10,to:20,position:20}),`
`,e.jsx(i,{from:-1,to:1,position:0})]})}function M(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(c,n)})):c(n)}export{M as default};
