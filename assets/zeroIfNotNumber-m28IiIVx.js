import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import{b as u}from"./index-CJNtjuy4.js";import{n as c}from"./nonNumberFallback-KCIHPOTj.js";import{I as s}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const m=n=>c(n,0),r=n=>{const[e,l]=o.useState(n.defaultInput),i=o.useMemo(()=>m(e),[e]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(s,{label:"Input",labelForId:"input-input",children:t.jsx("input",{id:"input-input",value:e,onChange:({target:p})=>l(p.value)})}),t.jsx(s,{label:"Output",labelForId:void 0,children:t.jsx("div",{style:{padding:"5px 0"},children:i})})]}),t.jsx(u,{dark:!0,code:`
import { zeroIfNotNumber } from "@baggie/core";

const input = ${isNaN(e)?`"${e}"`:e.trim()||"undefined"};

const output = zeroIfNotNumber(input);
// output = ${i}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function a(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"zeroifnotnumber",children:"zeroIfNotNumber"}),`
`,t.jsx(e.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{align:"left",children:"Parameter"}),t.jsx(e.th,{align:"left",children:"Type"}),t.jsx(e.th,{align:"center",children:"Required"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"value"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"any"})}),t.jsx(e.td,{align:"center",children:"✔"})]})})]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(r,{defaultInput:"100"}),`
`,t.jsx(r,{defaultInput:"lorem ipsum"}),`
`,t.jsx(r,{defaultInput:""}),`
`,t.jsx(r,{defaultInput:"123abc"})]})}function F(n={}){const{wrapper:e}=Object.assign({},d(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(a,n)})):a(n)}export{F as default};
