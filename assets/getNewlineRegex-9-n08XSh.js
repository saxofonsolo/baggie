import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as c}from"./index-XmUqo-P7.js";import{g as l}from"./getNewlineRegex--zr_Z5zT.js";import{I as g}from"./InputWrapper-7qBv-a2h.js";import{u as d}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const a=n=>{const[t,h]=i.useState(n.string),[r,p]=i.useState(!1),x=i.useMemo(()=>t.replace(l(r),"-"),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:s})=>h(s.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>p(s=>!s)})," ","Include whitespace"]}),e.jsx(c,{dark:!0,code:`
import { getNewlineRegex } from "@baggie/core";

const string = \`${t}\`;

const newString = string.replace(getNewlineRegex(${r?"true":""}), "-");
// newString = \`${x}\`
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(c,{dark:!0,code:`new RegExp("${l(r).source}", "${l(r).flags}")`})]})};try{a.displayName="Example",a.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getnewlineregex",children:"getNewlineRegex"}),`
`,e.jsx(t.p,{children:"Returns a regular expression for finding newlines."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"includeWhitespace"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{string:`Line 1
 Line 2
  Line 3`})]})}function I(n={}){const{wrapper:t}=Object.assign({},d(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{I as default};
//# sourceMappingURL=getNewlineRegex-9-n08XSh.js.map
