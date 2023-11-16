import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{b as h}from"./index-XmUqo-P7.js";import{g}from"./getPositionBetween-RxTUMZ_D.js";import{I as a}from"./InputWrapper-7qBv-a2h.js";import{u as m}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const o=n=>{const[t,p]=l.useState(n.from),[i,u]=l.useState(n.to),[s,x]=l.useState(n.percentage),c=l.useMemo(()=>g(t,i,s),[t,i,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{label:"From",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"number",value:t,onChange:({target:r})=>p(r.valueAsNumber||0)})}),e.jsx(a,{label:"To",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"number",value:i,onChange:({target:r})=>u(r.valueAsNumber||0)})}),e.jsx(a,{label:"Percentage",labelForId:"percentage-input",children:e.jsx("input",{id:"percentage-input",type:"number",value:s,onChange:({target:r})=>x(r.valueAsNumber||0)})}),e.jsx(a,{label:"Position",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:c})})]}),e.jsx(h,{dark:!0,code:`
import { getPositionBetween } from "@baggie/core";

const from = ${t};
const to = ${i};
const percentage = ${s};

const position = getPositionBetween(from, to, percentage);
// position = ${c}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!0,type:{name:"number"}}}}}catch{}function d(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpositionbetween",children:"getPositionBetween"}),`
`,e.jsx(t.p,{children:"Get the position between two numbers from a percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"from"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"to"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentage"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o,{from:0,to:10,percentage:.5}),`
`,e.jsx(o,{from:10,to:20,percentage:.5}),`
`,e.jsx(o,{from:-1,to:1,percentage:.5})]})}function M(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{M as default};
//# sourceMappingURL=getPositionBetween-rLRMHmDV.js.map
