import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{b as l}from"./index-CJNtjuy4.js";import{g as i}from"./getTagsRegex-n2Yj5YrD.js";import{I as x}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const o=r=>{const[t,g]=a.useState(r.string),[n,p]=a.useState(!1),h=a.useMemo(()=>t.match(i(n)),[t,n]);return e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:s})=>g(s.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>p(s=>!s)})," ","Group sequential tags"]}),e.jsx(l,{dark:!0,code:`
import { getTagsRegex } from "@baggie/core";

const string = "${t}";

const tags = string.match(getTagsRegex(${n?"true":""}));
// tags = ${JSON.stringify(h)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(l,{dark:!0,code:`new RegExp("${i(n).source}", "${i(n).flags}")`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function c(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"gettagsregex",children:"getTagsRegex"}),`
`,e.jsx(t.p,{children:"Returns a regular expression for matching all HTML and XML tags in a string."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"groupSequentialTags"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{string:"<p><b>Bold move.</b><br/>Paragraph.</p><!-- comment --> :)"})]})}function k(r={}){const{wrapper:t}=Object.assign({},d(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(c,r)})):c(r)}export{k as default};
