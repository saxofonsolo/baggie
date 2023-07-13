import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{b as p}from"./index-c5be8d33.js";import{g as h}from"./getCprRegex-19ad0575.js";import{c as m}from"./convertToDate-ae66aed6.js";import{I as x}from"./InputWrapper-088860b1.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-71f486ec.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=(r,n)=>{const s=typeof r=="string"?r:typeof r=="number"?String(r):r.value;if(!h().test(s)||!m(s.slice(0,4)+"19"+s.slice(4,6)))return!1;if(!(typeof n=="string"))return!0;const i=n.charAt(0).toLowerCase(),c=parseInt(s.slice(-1))%2;return!!(i==="f"&&!c||i==="m"&&c)},l=r=>{const[n,s]=a.useState(r.cprNumber),[t,i]=a.useState(""),o=a.useMemo(()=>u(n,t||void 0),[n,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(x,{label:"CPR number",labelForId:"cpr-input",children:e.jsx("input",{id:"cpr-input",value:n,onChange:({target:c})=>s(c.value),spellCheck:!1})}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:t==="",onChange:()=>i(()=>"")})," ","Don't check gender"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:t==="f",onChange:()=>i(()=>"f")})," ","Female"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",checked:t==="m",onChange:()=>i(()=>"m")})," ","Male"]})]}),e.jsx(p,{dark:!0,code:`
import { convertEmailsToLinks } from "@baggie/core";

const cprNumber = "${n}";
${t?`const gender = ${t?`"${t}"`:""};
`:""}
const isValid = isCprValid(cprNumber${t?", gender":""});
// isValid = ${o?"true":"false"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{cprNumber:{defaultValue:null,description:"",name:"cprNumber",required:!0,type:{name:"string"}}}}}catch{}function q(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"iscprvalid",children:"isCprValid"}),`
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
`,e.jsx(l,{cprNumber:"170686-1034"})]})}}export{q as default};
//# sourceMappingURL=isCprValid-0025af4d.js.map
