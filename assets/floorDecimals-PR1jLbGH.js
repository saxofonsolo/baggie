import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as u}from"./index-y2kHJEFa.js";import{d as p}from"./decimalAdjust.helper-LDlcWNJu.js";import{I as c}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as m}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isNumberRound-WzbutuCf.js";function h(n,r){return p(n,r,Math.floor)}const t=n=>{const[r,o]=i.useState(n.number),[l,x]=i.useState(n.maxDecimalPlaces),s=i.useMemo(()=>h(r,l),[r,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:r,onChange:({target:a})=>o(a.valueAsNumber)})}),e.jsx(c,{label:"Max decimal places",labelForId:"max-decimal-places-input",children:e.jsx("input",{id:"max-decimal-places-input",type:"number",value:l,onChange:({target:a})=>x(a.valueAsNumber)})}),e.jsx(c,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(s)?"Error":s})})]}),e.jsx(u,{dark:!0,code:`
import { floorDecimals } from "@baggie/core";

const number = ${r};
const maxDecimalPlaces = ${l};

const result = floorDecimals(number, maxDecimalPlaces);
// result = ${s}
`})]})};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},maxDecimalPlaces:{defaultValue:null,description:"",name:"maxDecimalPlaces",required:!0,type:{name:"number"}}}}}catch{}function d(n){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"floordecimals",children:"floorDecimals"}),`
`,e.jsx(r.p,{children:"Round down a number to the nearest decimal places."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"number"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"maxDecimalPlaces"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{align:"center",children:"✔"})]})]})]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(r.p,{children:["Round down to ",e.jsx(r.strong,{children:"two"})," decimals."]}),`
`,e.jsx(t,{number:13.345,maxDecimalPlaces:2}),`
`,e.jsxs(r.p,{children:["Round down to ",e.jsx(r.strong,{children:"three"})," decimals."]}),`
`,e.jsx(t,{number:13.1111,maxDecimalPlaces:3}),`
`,e.jsxs(r.p,{children:["With ",e.jsx(r.strong,{children:"negative"})," decimal places."]}),`
`,e.jsx(t,{number:139.5,maxDecimalPlaces:-2})]})}function w(n={}){const{wrapper:r}=Object.assign({},m(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{w as default};
