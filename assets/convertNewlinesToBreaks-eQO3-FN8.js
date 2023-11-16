import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as h}from"./index-XmUqo-P7.js";import{g as x}from"./getNewlineRegex--zr_Z5zT.js";import{I as u}from"./InputWrapper-7qBv-a2h.js";import{u as c}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const j=(n,t=!1)=>n.replace(x(!t),"<br />"),l=n=>{const[t,o]=i.useState(n.input),[r,d]=i.useState(!1),p=i.useMemo(()=>j(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(u,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:t,onChange:({target:s})=>o(s.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>d(s=>!s)}),"Keep whitespace"]})]}),e.jsx(h,{dark:!0,code:`
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
//# sourceMappingURL=convertNewlinesToBreaks-eQO3-FN8.js.map
