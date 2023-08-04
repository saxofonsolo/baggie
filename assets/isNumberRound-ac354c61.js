import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as i}from"./index-61bf1805.js";import{b as u}from"./index-9c98abcd.js";import{i as x}from"./isNumberRound-b59f1d4e.js";import{I as c}from"./InputWrapper-0059aa96.js";import{u as m}from"./index-e744116c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=n=>{const[t,s]=i.useState(n.number),[r,o]=i.useState(n.maxDecimalPlaces),d=i.useMemo(()=>x(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:t,onChange:({target:a})=>s(a.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:r,onChange:({target:a})=>o(a.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:d?"true":"false"})})]}),e.jsx(u,{dark:!0,code:`
import { isNumberRound } from "@baggie/core";

const number = ${t};
const maxDecimalPlaces = ${r};

const result = isNumberRound(number, maxDecimalPlaces);
// result = ${d?"true":"false"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function M(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"isnumberround",children:"isNumberRound"}),`
`,e.jsx(r.p,{children:"Check if a number is rounded to the maximum desired amount of decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{align:"left",children:"Default value"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{align:"left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center"}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"0"})})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Check for ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(l,{number:13.37,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Check for ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(l,{number:13.3751,maxDecimalPlaces:3})]})}}export{M as default};
//# sourceMappingURL=isNumberRound-ac354c61.js.map
