import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as x}from"./index-CJNtjuy4.js";import{I as j}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const p=([r,...t],n)=>[r.toLocaleUpperCase(n==null?void 0:n.locale),...n!=null&&n.lowercaseRest?[...t].join("").toLocaleLowerCase(n==null?void 0:n.locale):t].join(""),a=r=>{const[t,n]=i.useState(r.defaultInput),[l,h]=i.useState(!1),o=i.useMemo(()=>p(t,{lowercaseRest:l}),[t,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(j,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:t,onChange:({target:s})=>n(s.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:1})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>h(s=>!s)}),"Lowercase rest"]})]}),e.jsx(x,{dark:!0,code:`
import { uppercaseFirstLetter } from "@baggie/core";

const input = \`${t.replace(/`/g,"\\`")}\`;

const output = uppercaseFirstLetter(input${l?", { lowercaseRest: true }":""});
/*
output = \`${o}\`
*/
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}}}}}catch{}function c(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"uppercasefirstletter",children:"uppercaseFirstLetter"}),`
`,e.jsx(t.p,{children:"Convert the first letter in a string to uppercase."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to manipulate."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:"The default locale is the host environment's current locale."})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"lowercaseRest"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{align:"left",children:"Convert the rest of the characters to lowercase."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"locale"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string | string[]"})}),e.jsx(t.td,{align:"left"}),e.jsx(t.td,{align:"left",children:"Where the substring starts."})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{defaultInput:"odit atque TEMPORA veritatis"})]})}function R(r={}){const{wrapper:t}=Object.assign({},d(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(c,r)})):c(r)}export{R as default};
