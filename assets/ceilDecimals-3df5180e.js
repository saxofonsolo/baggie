import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as x}from"./index-2fa589e3.js";import{d as p}from"./decimalAdjust.helper-751506cc.js";import{I as c}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isNumberRound-b59f1d4e.js";const h=(r,n)=>p(r,n,Math.ceil),t=r=>{const[n,o]=i.useState(r.number),[l,u]=i.useState(r.maxDecimalPlaces),s=i.useMemo(()=>h(n,l),[n,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:a})=>o(a.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:l,onChange:({target:a})=>u(a.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(x,{dark:!0,code:`
import { ceilDecimals } from "@baggie/core";

const number = ${n};
const maxDecimalPlaces = ${l};

const result = ceilDecimals(number, maxDecimalPlaces);
// result = ${s}
`})]})};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function m(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ceildecimals",children:"ceilDecimals"}),`
`,e.jsx(n.p,{children:"Round up a number to the nearest decimal places."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"maxDecimalPlaces"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Round up to ",e.jsx(n.strong,{children:"two"})," decimals."]}),`
`,e.jsx(t,{number:13.345,maxDecimalPlaces:2}),`
`,e.jsxs(n.p,{children:["Round up to ",e.jsx(n.strong,{children:"three"})," decimals."]}),`
`,e.jsx(t,{number:13.1111,maxDecimalPlaces:3}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.strong,{children:"negative"})," decimal places."]}),`
`,e.jsx(t,{number:139.5,maxDecimalPlaces:-2})]})}function R(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(m,r)})):m(r)}export{R as default};
//# sourceMappingURL=ceilDecimals-3df5180e.js.map
