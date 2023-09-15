import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as p}from"./index-2fa589e3.js";import{n as c}from"./nonNumberFallback-b56fa823.js";import{I as o}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const m=n=>c(n,0),r=n=>{const[t,l]=s.useState(n.defaultInput),i=s.useMemo(()=>m(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(o,{label:"Input",labelForId:"input-input",children:e.jsx("input",{id:"input-input",value:t,onChange:({target:u})=>l(u.value)})}),e.jsx(o,{label:"Output",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:i})})]}),e.jsx(p,{dark:!0,code:`
import { zeroIfNotNumber } from "@baggie/core";

const input = ${isNaN(t)?`"${t}"`:t.trim()||"undefined"};

const output = zeroIfNotNumber(input);
// output = ${i}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function a(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"zeroifnotnumber",children:"zeroIfNotNumber"}),`
`,e.jsx(t.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"value"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"any"})}),e.jsx(t.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r,{defaultInput:"100"}),`
`,e.jsx(r,{defaultInput:"lorem ipsum"}),`
`,e.jsx(r,{defaultInput:""}),`
`,e.jsx(r,{defaultInput:"123abc"})]})}function z(n={}){const{wrapper:t}=Object.assign({},d(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{z as default};
//# sourceMappingURL=zeroIfNotNumber-1afee0ae.js.map
