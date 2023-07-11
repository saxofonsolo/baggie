import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{b as u}from"./index-90421cc8.js";import{I as c}from"./InputWrapper-088860b1.js";import{u as o}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-a8184af9.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=(n,s)=>s/n,r=n=>{const[s,i]=l.useState(n.speed),[t,p]=l.useState(n.distance),d=l.useMemo(()=>h(s,t),[s,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Speed",labelForId:"speed-input",children:e.jsx("input",{id:"speed-input",type:"number",value:s,onChange:({target:a})=>i(a.valueAsNumber)})}),e.jsx(c,{label:"Distance",labelForId:"distance-input",children:e.jsx("input",{id:"distance-input",type:"number",value:t,onChange:({target:a})=>p(a.valueAsNumber)})}),e.jsx(c,{label:"Duration",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(d)?"Error":d})})]}),e.jsx(u,{dark:!0,code:`
import { getDuration } from "@baggie/core";

const speed = ${s};
const distance = ${t};

const duration = getDuration(speed, distance);
// duration = ${d}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{speed:{defaultValue:null,description:"",name:"speed",required:!0,type:{name:"number"}},distance:{defaultValue:null,description:"",name:"distance",required:!0,type:{name:"number"}}}}}catch{}function N(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getduration",children:"getDuration"}),`
`,e.jsx(t.p,{children:"Get the duration when supplying speed and distance."}),`
`,e.jsx(t.p,{children:`If the speed is 100 (meters per minute) and distance is 10 (meters),
then the duration will be 10 (minutes).`}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"speed"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"distance"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{speed:50,distance:100}),`
`,e.jsx(r,{speed:100,distance:100}),`
`,e.jsx(r,{speed:1,distance:100})]})}}export{N as default};
//# sourceMappingURL=getDuration-f1c4e947.js.map
