import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{b as h}from"./index-6Pv_FbVv.js";import{I as l}from"./InputWrapper-7qBv-a2h.js";import{u as o}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const m=(n,t)=>t/n,s=n=>{const[t,p]=a.useState(n.speed),[r,u]=a.useState(n.distance),i=a.useMemo(()=>m(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Speed",labelForId:"speed-input",children:e.jsx("input",{id:"speed-input",type:"number",value:t,onChange:({target:d})=>p(d.valueAsNumber)})}),e.jsx(l,{label:"Distance",labelForId:"distance-input",children:e.jsx("input",{id:"distance-input",type:"number",value:r,onChange:({target:d})=>u(d.valueAsNumber)})}),e.jsx(l,{label:"Duration",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(i)?"Error":i})})]}),e.jsx(h,{dark:!0,code:`
import { getDuration } from "@baggie/core";

const speed = ${t};
const distance = ${r};

const duration = getDuration(speed, distance);
// duration = ${i}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{speed:{defaultValue:null,description:"",name:"speed",required:!0,type:{name:"number"}},distance:{defaultValue:null,description:"",name:"distance",required:!0,type:{name:"number"}}}}}catch{}function c(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getduration",children:"getDuration"}),`
`,e.jsx(t.p,{children:"Get the duration when supplying speed and distance."}),`
`,e.jsx(t.p,{children:`If the speed is 100 (meters per minute) and distance is 10 (meters),
then the duration will be 10 (minutes).`}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"speed"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"distance"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{speed:50,distance:100}),`
`,e.jsx(s,{speed:100,distance:100}),`
`,e.jsx(s,{speed:1,distance:100})]})}function N(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(c,n)})):c(n)}export{N as default};
//# sourceMappingURL=getDuration-cE9BF-fh.js.map
