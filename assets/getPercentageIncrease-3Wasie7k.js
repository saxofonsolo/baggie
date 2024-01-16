import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{b as j}from"./index-CJNtjuy4.js";import{I as d}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as h}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const u=(r,t,c=!0)=>(t-r)/r*(c?1:100)||0,i=r=>{const[t,c]=a.useState(r.from),[l,x]=a.useState(r.to),[n,p]=a.useState(!0),o=a.useMemo(()=>u(t,l,n),[t,l,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"From",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"number",value:t,onChange:({target:s})=>c(s.valueAsNumber||0)})}),e.jsx(d,{label:"To",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"number",value:l,onChange:({target:s})=>x(s.valueAsNumber||0)})}),e.jsx(d,{label:"Percentage",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:o})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>p(s=>!s)})," ","Percentage as decimal"]}),e.jsx(j,{dark:!0,code:`
import { setPercentageAsDecimal } from "@baggie/core";

const from = ${t};
const to = ${l};

const percentage = setPercentageAsDecimal(from, to${n?"":", false"});
// percentage = ${o}${n?` (${o*100}%)`:""}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}}}}}catch{}function m(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentageincrease",children:"getPercentageIncrease"}),`
`,e.jsx(t.p,{children:"Get the increase from one value to another in percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"from"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"to"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentageAsDecimal"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"true"})})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{from:10,to:100}),`
`,e.jsx(i,{from:100,to:10})]})}function E(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(m,r)})):m(r)}export{E as default};
