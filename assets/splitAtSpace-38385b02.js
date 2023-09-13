import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{b as x}from"./index-9f119f36.js";import{I as d}from"./InputWrapper-a637f81f.js";import{u as p}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const m=(n,t)=>{const r=n.trim(),s=Math.max(t,1),a=new RegExp(`[\\S]{${s},}|([\\S].{0,${s-1}}(?!\\S))`,"g");return r.match(a)||[r]},i=n=>{const[t,r]=c.useState(n.string),[s,a]=c.useState(n.nearestIndex),u=c.useMemo(()=>m(t,s),[t,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(d,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:l})=>r(l.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(d,{label:"Nearest index",labelForId:"nearest-index-input",children:e.jsx("input",{id:"nearest-index-input",value:s,type:"number",onChange:({target:l})=>a(l.valueAsNumber)})})]}),e.jsx(x,{dark:!0,code:`
import { splitAtSpace } from "@baggie/core";

const string = \`${t.replace(/`/g,"\\`")}\`;
const nearestIndex = ${s};

const output = splitAtSpace(input, nearestIndex);
/*
output = ${JSON.stringify(u,null,4)}
*/
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}},nearestIndex:{defaultValue:null,description:"",name:"nearestIndex",required:!0,type:{name:"number"}}}}}catch{}function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"splitatspace",children:"splitAtSpace"}),`
`,e.jsx(t.p,{children:"Split a string at the nearest previous whitespace to a given a index."}),`
`,e.jsx(t.p,{children:"Words will not get split."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to split."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"nearestIndex"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"Split at the nearest previous whitespace to this index."})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{string:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis sapien, pellentesque pulvinar scelerisque sit amet, iaculis ac sem. Pellentesque lacus nisi, sagittis eget felis at, elementum accumsan tortor.",nearestIndex:80}),`
`,e.jsx(i,{string:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis sapien, pellentesque pulvinar scelerisque sit amet, iaculis ac sem. Pellentesque lacus nisi, sagittis eget felis at, elementum accumsan tortor.",nearestIndex:10})]})}function C(n={}){const{wrapper:t}=Object.assign({},p(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{C as default};
//# sourceMappingURL=splitAtSpace-38385b02.js.map
