import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{b as j}from"./index-2b4cce42.js";import{m as b}from"./mergeIntervals-da6ca95d.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as g}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./normalizeRanges-f9fde636.js";const f=(r,s,i=!0)=>b(s,i).reduce((n,{from:o,to:d})=>n>o&&n<d?[o,d].reduce((c,l)=>{const u=Math.abs(l-n),t=Math.abs(c-n);return u<=t?l:c}):n,r),p=r=>{const[s,i]=m.useState(r.number),[n,o]=m.useState(r.ranges),[d,c]=m.useState(!0),{realRanges:l,result:u}=m.useMemo(()=>{const t=n.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(a=>{try{return JSON.parse(a.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(a=>a&&(Array.isArray(a)&&a.length===2||typeof a=="object"&&typeof a.from=="number"&&typeof a.to=="number")),x=f(s,t,d);return{realRanges:t,result:x}},[s,n,d]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:s,onChange:({target:t})=>i(t.valueAsNumber||0),autoComplete:"off"})}),e.jsx(h,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:n,onChange:({target:t})=>o(t.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(h,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:u})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:d,onChange:()=>c(t=>!t)})," ","Combine equals"]}),e.jsx(j,{dark:!0,code:`
import { keepOutsideRange } from "@baggie/core";

const range${l.length===1?"":"s"} = ${l.length===1?JSON.stringify(l[0],null,4):JSON.stringify(l,null,4)};

const result = keepOutsideRange(${s}, range${l.length===1?"":"s"});
// result = ${u}
`})]})};try{p.displayName="Example",p.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function w(r={}){const{wrapper:s}=Object.assign({},g(),r.components);return s?e.jsx(s,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},g(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"keepoutsiderange",children:"keepOutsideRange"}),`
`,e.jsx(n.p,{children:"Make sure a number is outside the range of a minimum and maximum value."}),`
`,e.jsx(n.p,{children:`If the number is inside the range, the nearest accepted value will be
returned.`}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"}),e.jsx(n.th,{align:"left",children:"Default value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"}),e.jsx(n.td,{align:"left"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"ranges"})}),e.jsxs(n.td,{align:"left",children:["An ",e.jsx(n.code,{children:"Array"})," or single value of ",e.jsx(n.code,{children:"{ from: number; to: number }"})," or ",e.jsx(n.code,{children:"[number, number]"})]}),e.jsx(n.td,{align:"center",children:"✔"}),e.jsx(n.td,{align:"left"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"combineEquals"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{align:"center"}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Keep number outside a single range"}),`
`,e.jsx(p,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(n.p,{children:"Keep number outside multiple ranges"}),`
`,e.jsx(p,{number:10,ranges:`[0, 10]
[10, 20]
{ from: 25, to: 75 }`})]})}}export{w as default};
//# sourceMappingURL=keepOutsideRange-10baf9c0.js.map
