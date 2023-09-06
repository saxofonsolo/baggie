import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{b as p}from"./index-e3b36901.js";import{g as h}from"./getNewlineRegex-b3d53267.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as o}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=(r,n=!1)=>r.replace(h(!n),"<br />"),a=r=>{const[n,s]=l.useState(r.input),[t,c]=l.useState(!1),d=l.useMemo(()=>u(n,t),[n,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(x,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:n,onChange:({target:i})=>s(i.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>c(i=>!i)}),"Keep whitespace"]})]}),e.jsx(p,{dark:!0,code:`
import { convertNewlinesToBreaks } from "@baggie/core";

const string = \`${n}\`;
${t?`const keepWhitespace = true;
`:""}
const output = convertNewlinesToBreaks(string${t?", keepWhitespace":""});
// output = ${d}
`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function C(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"convertnewlinestobreaks",children:"convertNewlinesToBreaks"}),`
`,e.jsx(t.p,{children:"Replace new lines with break elements."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"keepWhitespace"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{input:`hello
    friend`})]})}}export{C as default};
//# sourceMappingURL=convertNewlinesToBreaks-b9b0df29.js.map
