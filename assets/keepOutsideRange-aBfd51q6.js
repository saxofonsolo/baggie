import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as u}from"./index-4g5l5LRQ.js";import{b}from"./index-6Pv_FbVv.js";import{m as f}from"./mergeIntervals-0VEuZGY-.js";import{I as p}from"./InputWrapper-7qBv-a2h.js";import{u as x}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./normalizeRanges-jULD8Ur9.js";const y=(t,n,h=!0)=>f(n,h).reduce((s,{from:d,to:i})=>s>d&&s<i?[d,i].reduce((o,l)=>{const c=Math.abs(l-s),r=Math.abs(o-s);return c<=r?l:o}):s,t),m=t=>{const[n,h]=u.useState(t.number),[s,d]=u.useState(t.ranges),[i,o]=u.useState(!0),{realRanges:l,result:c}=u.useMemo(()=>{const r=s.replace(/][^[{]+/g,`]
`).replace(/}[^[{]+/g,`}
`).split(`
`).map(a=>{try{return JSON.parse(a.replace(/["`']/g,"").replace(/([a-z]+)/g,'"$1"'))}catch{return}}).filter(a=>a&&(Array.isArray(a)&&a.length===2||typeof a=="object"&&typeof a.from=="number"&&typeof a.to=="number")),j=y(n,r,i);return{realRanges:r,result:j}},[n,s,i]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(p,{label:"Number",labelForId:"number-input",children:e.jsx("input",{id:"number-input",type:"number",value:n,onChange:({target:r})=>h(r.valueAsNumber||0),autoComplete:"off"})}),e.jsx(p,{label:"Ranges",labelForId:"ranges-input",children:e.jsx("textarea",{id:"ranges-input",value:s,onChange:({target:r})=>d(r.value),style:{width:"100%",maxWidth:"360px"},autoComplete:"off",rows:3})}),e.jsx(p,{label:"Result",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:c})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:i,onChange:()=>o(r=>!r)})," ","Combine equals"]}),e.jsx(b,{dark:!0,code:`
import { keepOutsideRange } from "@baggie/core";

const range${l.length===1?"":"s"} = ${l.length===1?JSON.stringify(l[0],null,4):JSON.stringify(l,null,4)};

const result = keepOutsideRange(${n}, range${l.length===1?"":"s"});
// result = ${c}
`})]})};try{m.displayName="Example",m.__docgenInfo={description:"",displayName:"Example",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},ranges:{defaultValue:null,description:"",name:"ranges",required:!0,type:{name:"string"}}}}}catch{}function g(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},x(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"keepoutsiderange",children:"keepOutsideRange"}),`
`,e.jsx(n.p,{children:"Make sure a number is outside the range of a minimum and maximum value."}),`
`,e.jsx(n.p,{children:`If the number is inside the range, the nearest accepted value will be
returned.`}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Parameter"}),e.jsx(n.th,{align:"left",children:"Type"}),e.jsx(n.th,{align:"center",children:"Required"}),e.jsx(n.th,{align:"left",children:"Default value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"number"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{align:"center",children:"✔"}),e.jsx(n.td,{align:"left"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"ranges"})}),e.jsxs(n.td,{align:"left",children:["An ",e.jsx(n.code,{children:"Array"})," or single value of ",e.jsx(n.code,{children:"{ from: number; to: number }"})," or ",e.jsx(n.code,{children:"[number, number]"})]}),e.jsx(n.td,{align:"center",children:"✔"}),e.jsx(n.td,{align:"left"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:e.jsx(n.strong,{children:"combineEquals"})}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{align:"center"}),e.jsx(n.td,{align:"left",children:e.jsx(n.code,{children:"true"})})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Keep number outside a single range"}),`
`,e.jsx(m,{number:30,ranges:"{ from: 25, to: 75 }"}),`
`,e.jsx(n.p,{children:"Keep number outside multiple ranges"}),`
`,e.jsx(m,{number:10,ranges:`[0, 10]
[10, 20]
{ from: 25, to: 75 }`})]})}function w(t={}){const{wrapper:n}=Object.assign({},x(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(g,t)})):g(t)}export{w as default};
//# sourceMappingURL=keepOutsideRange-aBfd51q6.js.map
