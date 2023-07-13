import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{b as x}from"./index-642316a4.js";import{g as h}from"./getPositionBetween-b33d92a2.js";import{I as c}from"./InputWrapper-088860b1.js";import{u as p}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bf4e6f48.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=n=>{const[r,s]=a.useState(n.from),[t,m]=a.useState(n.to),[l,u]=a.useState(n.percentage),d=a.useMemo(()=>h(r,t,l),[r,t,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"From",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"number",value:r,onChange:({target:o})=>s(o.valueAsNumber||0)})}),e.jsx(c,{label:"To",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"number",value:t,onChange:({target:o})=>m(o.valueAsNumber||0)})}),e.jsx(c,{label:"Percentage",labelForId:"percentage-input",children:e.jsx("input",{id:"percentage-input",type:"number",value:l,onChange:({target:o})=>u(o.valueAsNumber||0)})}),e.jsx(c,{label:"Position",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:d})})]}),e.jsx(x,{dark:!0,code:`
import { getPositionBetween } from "@baggie/core";

const from = ${r};
const to = ${t};
const percentage = ${l};

const position = getPositionBetween(from, to, percentage);
// position = ${d}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!0,type:{name:"number"}}}}}catch{}function M(n={}){const{wrapper:r}=Object.assign({},p(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpositionbetween",children:"getPositionBetween"}),`
`,e.jsx(t.p,{children:"Get the position between two numbers from a percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"from"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"to"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentage"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{from:0,to:10,percentage:.5}),`
`,e.jsx(i,{from:10,to:20,percentage:.5}),`
`,e.jsx(i,{from:-1,to:1,percentage:.5})]})}}export{M as default};
//# sourceMappingURL=getPositionBetween-d473b0fa.js.map
