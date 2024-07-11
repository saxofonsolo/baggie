import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{b as h}from"./index-BI7qbVC1.js";import{I as l}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as o}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function m(n,t){return t/n}const r=n=>{const[t,p]=a.useState(n.speed),[s,u]=a.useState(n.distance),i=a.useMemo(()=>m(t,s),[t,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Speed",labelForId:"speed-input",children:e.jsx("input",{id:"speed-input",type:"number",value:t,onChange:({target:d})=>p(d.valueAsNumber)})}),e.jsx(l,{label:"Distance",labelForId:"distance-input",children:e.jsx("input",{id:"distance-input",type:"number",value:s,onChange:({target:d})=>u(d.valueAsNumber)})}),e.jsx(l,{label:"Duration",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(i)?"Error":i})})]}),e.jsx(h,{dark:!0,code:`
import { getDuration } from "@baggie/core";

const speed = ${t};
const distance = ${s};

const duration = getDuration(speed, distance);
// duration = ${i}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{speed:{defaultValue:null,description:"",name:"speed",required:!0,type:{name:"number"}},distance:{defaultValue:null,description:"",name:"distance",required:!0,type:{name:"number"}}}}}catch{}function c(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getduration",children:"getDuration"}),`
`,e.jsx(t.p,{children:"Get the duration when supplying speed and distance."}),`
`,e.jsx(t.p,{children:`If the speed is 100 (meters per minute) and distance is 10 (meters),
then the duration will be 10 (minutes).`}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"speed"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"distance"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{speed:50,distance:100}),`
`,e.jsx(r,{speed:100,distance:100}),`
`,e.jsx(r,{speed:1,distance:100})]})}function C(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(c,n)})):c(n)}export{C as default};
