import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{b as p}from"./index-2b4cce42.js";import{n as u}from"./nonNumberFallback-1789432d.js";import{I as a}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=r=>u(r,0),i=r=>{const[n,s]=o.useState(r.defaultInput),e=o.useMemo(()=>c(n),[n]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(a,{label:"Input",labelForId:"input-input",children:t.jsx("input",{id:"input-input",value:n,onChange:({target:l})=>s(l.value)})}),t.jsx(a,{label:"Output",labelForId:void 0,children:t.jsx("div",{style:{padding:"5px 0"},children:e})})]}),t.jsx(p,{dark:!0,code:`
import { zeroIfNotNumber } from "@baggie/core";

const input = ${isNaN(n)?`"${n}"`:n.trim()||"undefined"};

const output = zeroIfNotNumber(input);
// output = ${e}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function z(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?t.jsx(n,Object.assign({},r,{children:t.jsx(s,{})})):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"zeroifnotnumber",children:"zeroIfNotNumber"}),`
`,t.jsx(e.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{align:"left",children:"Parameter"}),t.jsx(e.th,{align:"left",children:"Type"}),t.jsx(e.th,{align:"center",children:"Required"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"value"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"any"})}),t.jsx(e.td,{align:"center",children:"✔"})]})})]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(i,{defaultInput:"100"}),`
`,t.jsx(i,{defaultInput:"lorem ipsum"}),`
`,t.jsx(i,{defaultInput:""}),`
`,t.jsx(i,{defaultInput:"123abc"})]})}}export{z as default};
//# sourceMappingURL=zeroIfNotNumber-67376bd3.js.map
