import{j as t}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{b as p}from"./index-c495ba38.js";import{I as a}from"./InputWrapper-088860b1.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=n=>typeof n=="number"?n:typeof n=="string"&&parseFloat(n)||0,s=n=>{const[r,i]=o.useState(n.defaultInput),e=o.useMemo(()=>u(r),[r]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(a,{label:"Input",labelForId:"input-input",children:t.jsx("input",{id:"input-input",value:r,onChange:({target:l})=>i(l.value)})}),t.jsx(a,{label:"Output",labelForId:void 0,children:t.jsx("div",{style:{padding:"5px 0"},children:e})})]}),t.jsx(p,{dark:!0,code:`
import { zeroIfNotNumber } from "@baggie/core";

const input = ${isNaN(r)?`"${r}"`:r.trim()||"undefined"};

const output = zeroIfNotNumber(input);
// output = ${e}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function E(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"zeroifnotnumber",children:"zeroIfNotNumber"}),`
`,t.jsx(e.p,{children:"Return 0 if input is not and can't be converted into a number."}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{align:"left",children:"Parameter"}),t.jsx(e.th,{align:"left",children:"Type"}),t.jsx(e.th,{align:"center",children:"Required"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"value"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"any"})}),t.jsx(e.td,{align:"center",children:"✔"})]})})]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(s,{defaultInput:"100"}),`
`,t.jsx(s,{defaultInput:"lorem ipsum"}),`
`,t.jsx(s,{defaultInput:""}),`
`,t.jsx(s,{defaultInput:"123abc"})]})}}export{E as default};
//# sourceMappingURL=zeroIfNotNumber-120a2a51.js.map
