import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{b as p}from"./index-CJNtjuy4.js";import{g as m}from"./getCprRegex--VbWKLVV.js";import{c as x}from"./convertToDate-NsEOptbZ.js";import{I as g}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as h}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const j=(r,t)=>{const s=typeof r=="string"?r:typeof r=="number"?String(r):r.value;if(!m().test(s)||!x(s.slice(0,4)+"19"+s.slice(4,6)))return!1;if(!(typeof t=="string"))return!0;const i=t.charAt(0).toLowerCase(),c=parseInt(s.slice(-1))%2;return!!(i==="f"&&!c||i==="m"&&c)},l=r=>{const[t,s]=a.useState(r.cprNumber),[n,i]=a.useState(""),o=a.useMemo(()=>j(t,n||void 0),[t,n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(g,{label:"CPR number",labelForId:"cpr-input",children:e.jsx("input",{id:"cpr-input",value:t,onChange:({target:c})=>s(c.value),spellCheck:!1})}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:n==="",onChange:()=>i(()=>"")})," ","Don't check gender"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:n==="f",onChange:()=>i(()=>"f")})," ","Female"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:n==="m",onChange:()=>i(()=>"m")})," ","Male"]})]}),e.jsx(p,{dark:!0,code:`
import { convertEmailsToLinks } from "@baggie/core";

const cprNumber = "${t}";
${n?`const gender = ${n?`"${n}"`:""};
`:""}
const isValid = isCprValid(cprNumber${n?", gender":""});
// isValid = ${o?"true":"false"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{cprNumber:{defaultValue:null,description:"",name:"cprNumber",required:!0,type:{name:"string"}}}}}catch{}function d(r){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"iscprvalid",children:"isCprValid"}),`
`,e.jsx(t.p,{children:"Check if a CPR number is valid."}),`
`,e.jsx(t.p,{children:`Works with the birthdate and the four control digits combined or separated
by a dash or whitespace.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["The CPR number is a ",e.jsx(t.strong,{children:"Danish civil registration ID"}),"."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"This also checks if the date is valid,"})," using JavaScript's Date object."]}),`
`]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"cprNumber"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string | number | HTMLInputElement"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"gender"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"f" | "female" | "m" | "male"'})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{cprNumber:"170686-1034"})]})}function R(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(d,r)})):d(r)}export{R as default};
