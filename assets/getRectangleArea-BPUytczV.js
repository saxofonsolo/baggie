import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as h}from"./index-XmUqo-P7.js";import{I as l}from"./InputWrapper-7qBv-a2h.js";import{u as c}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const u=(r,t)=>r*t,d=r=>{const[t,x]=i.useState(r.x),[n,p]=i.useState(r.y),a=i.useMemo(()=>u(t,n),[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"X",labelForId:"x-input",children:e.jsx("input",{id:"x-input",type:"number",value:t,onChange:({target:s})=>x(s.valueAsNumber)})}),e.jsx(l,{label:"Y",labelForId:"x-input",children:e.jsx("input",{id:"y-input",type:"number",value:n,onChange:({target:s})=>p(s.valueAsNumber)})}),e.jsx(l,{label:"Surface area",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsxs("div",{style:{aspectRatio:`${Math.abs(t)} / ${Math.abs(n)}`,background:"#FC0",width:Math.abs(t)>=Math.abs(n)?"150px":`${Math.abs(t)/Math.abs(n)*150}px`,height:Math.abs(t)<=Math.abs(n)?"150px":`${Math.abs(n)/Math.abs(t)*150}px`,marginTop:"20px",position:"relative",display:"inline-block",pointerEvents:"none",userSelect:"none",transition:"all .4s ease-out"},children:[e.jsx("div",{style:{position:"absolute",inset:"2px",background:`repeating-linear-gradient(
                            -45deg,
                            #900,
                            #900 2px,
                            #FC0 2px,
                            #FC0 8px
                        )`}})," "]}),e.jsx(h,{dark:!0,code:`
import { getRectangleArea } from "@baggie/core";

const x = ${t||0};
const y = ${n||0};

const surfaceArea = getRectangleArea(x, y);
// surfaceArea = ${a}
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}}}}}catch{}function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getrectanglearea",children:"getRectangleArea"}),`
`,e.jsx(t.p,{children:"Get the surface area of a rectangle."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"x"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"y"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{x:20,y:10})]})}function E(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{E as default};
//# sourceMappingURL=getRectangleArea-BPUytczV.js.map
