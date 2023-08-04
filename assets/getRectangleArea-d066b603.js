import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as l}from"./index-61bf1805.js";import{b as p}from"./index-9c98abcd.js";import{I as d}from"./InputWrapper-0059aa96.js";import{u as c}from"./index-e744116c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=(n,r)=>n*r,o=n=>{const[r,a]=l.useState(n.x),[t,x]=l.useState(n.y),s=l.useMemo(()=>h(r,t),[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"X",labelForId:"x-input",children:e.jsx("input",{id:"x-input",type:"number",value:r,onChange:({target:i})=>a(i.valueAsNumber)})}),e.jsx(d,{label:"Y",labelForId:"x-input",children:e.jsx("input",{id:"y-input",type:"number",value:t,onChange:({target:i})=>x(i.valueAsNumber)})}),e.jsx(d,{label:"Surface area",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsxs("div",{style:{aspectRatio:`${Math.abs(r)} / ${Math.abs(t)}`,background:"#FC0",width:Math.abs(r)>=Math.abs(t)?"150px":`${Math.abs(r)/Math.abs(t)*150}px`,height:Math.abs(r)<=Math.abs(t)?"150px":`${Math.abs(t)/Math.abs(r)*150}px`,marginTop:"20px",position:"relative",display:"inline-block",pointerEvents:"none",userSelect:"none",transition:"all .4s ease-out"},children:[e.jsx("div",{style:{position:"absolute",inset:"2px",background:`repeating-linear-gradient(
                            -45deg,
                            #900,
                            #900 2px,
                            #FC0 2px,
                            #FC0 8px
                        )`}})," "]}),e.jsx(p,{dark:!0,code:`
import { getRectangleArea } from "@baggie/core";

const x = ${r||0};
const y = ${t||0};

const surfaceArea = getRectangleArea(x, y);
// surfaceArea = ${s}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}}}}}catch{}function E(n={}){const{wrapper:r}=Object.assign({},c(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(a,{})})):a();function a(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getrectanglearea",children:"getRectangleArea"}),`
`,e.jsx(t.p,{children:"Get the surface area of a rectangle."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"x"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"y"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{x:20,y:10})]})}}export{E as default};
//# sourceMappingURL=getRectangleArea-d066b603.js.map
