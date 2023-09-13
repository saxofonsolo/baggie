import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as n}from"./index-76fb7be0.js";import{b as p}from"./index-9f119f36.js";import{I as a}from"./InputWrapper-a637f81f.js";import{u as o}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=t=>Math.PI*t*t,s=t=>{const[r,l]=n.useState(t.radius),i=n.useMemo(()=>u(r||0),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(a,{label:"Radius",labelForId:"radius-input",children:e.jsx("input",{id:"radius-input",type:"number",value:r,onChange:({target:c})=>l(c.valueAsNumber)})}),e.jsx(a,{label:"Surface area",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(i)?"Error":i})})]}),e.jsxs("div",{style:{aspectRatio:1,background:"#FC0",marginTop:"20px",borderRadius:"50%",position:"relative",display:"inline-grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",pointerEvents:"none",userSelect:"none",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:"2px",borderRadius:"50%",background:`repeating-linear-gradient(
                            -45deg,
                            #900,
                            #900 2px,
                            #FC0 2px,
                            #FC0 8px
                        )`}}),e.jsx("div",{}),e.jsx("div",{style:{top:"-0.75em",position:"relative",borderBottom:"1px solid #900"},children:e.jsxs("div",{style:{lineHeight:"1.5em",padding:"0 10px",background:"#FC0"},children:["r = ",r||0]})})]}),e.jsx(p,{dark:!0,code:`
import { getCircleArea } from "@baggie/core";

const radius = ${r||0};

const surfaceArea = getCircleArea(radius);
// surfaceArea = ${i}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}}}}}catch{}function d(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcirclearea",children:"getCircleArea"}),`
`,e.jsx(r.p,{children:"Get the surface area of a circle from its radius."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"radius"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{radius:10})]})}function A(t={}){const{wrapper:r}=Object.assign({},o(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(d,t)})):d(t)}export{A as default};
//# sourceMappingURL=getCircleArea-62e43209.js.map
