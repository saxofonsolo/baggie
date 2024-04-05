import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{b as x}from"./index-y2kHJEFa.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as m}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function j(r,t){const i=t||new Date,n=new Date(r),a=i.getMonth()-n.getMonth();let l=i.getFullYear()-n.getFullYear();return(a<0||a===0&&i.getDate()<n.getDate())&&l--,l}const s=r=>{const[t,i]=d.useState(r.birth),[n,a]=d.useState(r.death),l=new Date(t).toISOString().replace(/\.[0-9]+Z$/,""),g=n?new Date(n).toISOString().replace(/\.[0-9]+Z$/,""):"",p=d.useMemo(()=>j(t,n),[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Birth",labelForId:"birth-input",children:e.jsx("input",{id:"birth-input",type:"datetime-local",value:l,onChange:({target:o})=>i(new Date(o.valueAsNumber))})}),e.jsx(c,{label:"To time",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"datetime-local",value:g,onChange:({target:o})=>a(new Date(o.valueAsNumber))})})]}),e.jsx(x,{dark:!0,code:`
import { getAge } from "@baggie/core";

const birth = "${t.toDateString()}";
${n?`const death = "${n==null?void 0:n.toDateString()}";
`:""}
const age = getAge(birth${n?", death":""});
// age = ${p}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{birth:{defaultValue:null,description:"",name:"birth",required:!0,type:{name:"Date"}},death:{defaultValue:null,description:"",name:"death",required:!1,type:{name:"Date"}}}}}catch{}function h(r){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getage",children:"getAge"}),`
`,e.jsx(t.p,{children:"Calculate someone's age given a date of birth and an optional date of death."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Notice"})," that the time of day will be ignored."]}),`
`]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"birth"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"Date"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"death"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"Date"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"Only date of birth"}),`
`,e.jsx(s,{birth:new Date("1986-06-17")}),`
`,e.jsx(t.p,{children:"... also date of death"}),`
`,e.jsx(s,{birth:new Date("1986-06-17"),death:new Date("2023-06-17")})]})}function $(r={}){const{wrapper:t}=Object.assign({},m(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(h,r)})):h(r)}export{$ as default};
