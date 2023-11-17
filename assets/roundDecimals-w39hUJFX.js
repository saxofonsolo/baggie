import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as x}from"./index-6Pv_FbVv.js";import{d as p}from"./decimalAdjust.helper-u7QKeHof.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{u as m}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./isNumberRound-4a_GecOl.js";const h=(r,n)=>p(r,n,Math.round),t=r=>{const[n,o]=i.useState(r.number),[s,u]=i.useState(r.maxDecimalPlaces),a=i.useMemo(()=>h(n,s),[n,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:l})=>o(l.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:s,onChange:({target:l})=>u(l.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(a)?"Error":a})})]}),e.jsx(x,{dark:!0,code:`
import { roundDecimals } from "@baggie/core";

const number = ${n};
const maxDecimalPlaces = ${s};

const result = roundDecimals(number, maxDecimalPlaces);
// result = ${a}
`})]})};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function d(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"rounddecimals",children:"roundDecimals"}),`
`,e.jsx(n.p,{children:"Round a number to the nearest decimal places."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"maxDecimalPlaces"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Round to ",e.jsx(n.strong,{children:"two"})," decimals."]}),`
`,e.jsx(t,{number:13.3689,maxDecimalPlaces:2}),`
`,e.jsxs(n.p,{children:["Round to ",e.jsx(n.strong,{children:"three"})," decimals."]}),`
`,e.jsx(t,{number:-13.1124,maxDecimalPlaces:3}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.strong,{children:"negative"})," decimal places."]}),`
`,e.jsx(t,{number:139.5,maxDecimalPlaces:-2})]})}function R(r={}){const{wrapper:n}=Object.assign({},m(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(d,r)})):d(r)}export{R as default};
//# sourceMappingURL=roundDecimals-w39hUJFX.js.map
