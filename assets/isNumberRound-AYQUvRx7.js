import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{b as x}from"./index-XmUqo-P7.js";import{i as h}from"./isNumberRound-4a_GecOl.js";import{I as i}from"./InputWrapper-7qBv-a2h.js";import{u as m}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const s=n=>{const[r,o]=a.useState(n.number),[t,u]=a.useState(n.maxDecimalPlaces),c=a.useMemo(()=>h(r,t),[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(i,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:r,onChange:({target:l})=>o(l.valueAsNumber)})}),e.jsx(i,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:t,onChange:({target:l})=>u(l.valueAsNumber)})}),e.jsx(i,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:c?"true":"false"})})]}),e.jsx(x,{dark:!0,code:`
import { isNumberRound } from "@baggie/core";

const number = ${r};
const maxDecimalPlaces = ${t};

const result = isNumberRound(number, maxDecimalPlaces);
// result = ${c?"true":"false"}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function d(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"isnumberround",children:"isNumberRound"}),`
`,e.jsx(r.p,{children:"Check if a number is rounded to the maximum desired amount of decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{align:"left",children:"Default value"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{align:"left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center"}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"0"})})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Check for ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(s,{number:13.37,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Check for ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(s,{number:13.3751,maxDecimalPlaces:3})]})}function M(n={}){const{wrapper:r}=Object.assign({},m(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{M as default};
//# sourceMappingURL=isNumberRound-AYQUvRx7.js.map
