import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as m}from"./index-CJNtjuy4.js";import{c as f}from"./convertToDate-NsEOptbZ.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as j}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const l=n=>{const[t,d]=i.useState(n.date),[a,u]=i.useState(n.zeroBasedMonth||!1),[s,p]=i.useState(n.monthBeforeDay||!1),h=i.useMemo(()=>f(t,{zeroBasedMonth:a,monthBeforeDay:s}),[t,a,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[typeof t=="string"?e.jsx(c,{label:"Date",labelForId:"date",children:e.jsx("input",{id:"date-input",value:t,onChange:({target:r})=>d(r.value),spellCheck:!1})}):e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Day",labelForId:"day",children:e.jsx("input",{id:"day-input",type:"number",value:t.day,onChange:({target:r})=>d(o=>({...o,day:r.valueAsNumber}))})}),e.jsx(c,{label:"Month",labelForId:"month",children:e.jsx("input",{id:"month-input",type:"number",value:t.month,onChange:({target:r})=>d(o=>({...o,month:r.valueAsNumber}))})}),e.jsx(c,{label:"Year",labelForId:"year",children:e.jsx("input",{id:"year-input",type:"number",value:t.year,onChange:({target:r})=>d(o=>({...o,year:r.valueAsNumber}))})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>u(r=>!r)})," ","Zero based month"]}),typeof t=="string"&&e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>p(r=>!r)})," ","Month before date"]})]}),e.jsx(m,{dark:!0,code:`
import { convertToDate } from "@baggie/core";

const date = ${typeof t=="string"?`"${t}"`:JSON.stringify(t,null,4)};
${s||a?`const options = {
${s?`    monthBeforeDay: true,
`:""}${a?`    zeroBasedMonth: true,
`:""}};
`:""}
const returnedDate = convertToDate(date${s||a?", options":""});
// ${h?`returnedDate.toISOString() = "${h.toISOString()}"`:"returnedDate = undefined"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string | DateObj"}},zeroBasedMonth:{defaultValue:null,description:"",name:"zeroBasedMonth",required:!1,type:{name:"boolean"}},monthBeforeDay:{defaultValue:null,description:"",name:"monthBeforeDay",required:!1,type:{name:"boolean"}}}}}catch{}function x(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},j(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"converttodate",children:"convertToDate"}),`
`,e.jsx(t.p,{children:"Convert a string (or an object) to a date."}),`
`,e.jsxs(t.p,{children:["Returns ",e.jsx(t.code,{children:"undefined"})," if given an invalid date."]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"date"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string | { day: number; month: number; year: number }"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"zeroBasedMonth"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"monthBeforeDay"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{date:"17. 6. 1986"}),`
`,e.jsx(l,{date:{day:17,month:6,year:1986}}),`
`,e.jsx(l,{date:"31-12-1986",zeroBasedMonth:!0}),`
`,e.jsx(l,{date:"06/17/1986",monthBeforeDay:!0})]})}function z(n={}){const{wrapper:t}=Object.assign({},j(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(x,n)})):x(n)}export{z as default};
