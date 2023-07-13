import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{b as d}from"./index-c495ba38.js";import{c as m}from"./countDecimals-090bf5ae.js";import{I as l}from"./InputWrapper-088860b1.js";import{u as o}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=r=>{const[n,s]=a.useState(r.defaultInput),t=a.useMemo(()=>m(n),[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(l,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:c})=>s(c.value)})}),e.jsx(l,{label:"Decimals",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:isNaN(t)?"Error":t})})]}),e.jsx(d,{dark:!0,code:`
import { countDecimals } from "@baggie/core";

const number = ${n};

const decimals = countDecimals(number);
// decimals = ${t}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function v(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"countdecimals",children:"countDecimals"}),`
`,e.jsx(t.p,{children:"Count the number of decimals in a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{defaultInput:1.0000000001})]})}}export{v as default};
//# sourceMappingURL=countDecimals-93fb6939.js.map
