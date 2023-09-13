import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as h}from"./index-9f119f36.js";import{g as x}from"./getNewlineRegex-b3d53267.js";import{I as u}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const j=(n,t=!1)=>n.replace(x(!t),"<br />"),l=n=>{const[t,o]=i.useState(n.input),[r,d]=i.useState(!1),p=i.useMemo(()=>j(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(u,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:t,onChange:({target:s})=>o(s.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>d(s=>!s)}),"Keep whitespace"]})]}),e.jsx(h,{dark:!0,code:`
import { convertNewlinesToBreaks } from "@baggie/core";

const string = \`${t}\`;
${r?`const keepWhitespace = true;
`:""}
const output = convertNewlinesToBreaks(string${r?", keepWhitespace":""});
// output = ${p}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function a(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"convertnewlinestobreaks",children:"convertNewlinesToBreaks"}),`
`,e.jsx(t.p,{children:"Replace new lines with break elements."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"keepWhitespace"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{input:`hello
    friend`})]})}function E(n={}){const{wrapper:t}=Object.assign({},c(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{E as default};
//# sourceMappingURL=convertNewlinesToBreaks-1306879b.js.map
