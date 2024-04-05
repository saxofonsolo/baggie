import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as i}from"./index-y2kHJEFa.js";import{g as n}from"./getCprRegex-4Shgq8eo.js";import{I as d}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as c}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const o=t=>{const[r,p]=s.useState(t.cprNumber),m=s.useMemo(()=>n().test(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"CPR number",labelForId:"cpr-input",children:e.jsx("input",{id:"cpr-input",value:r,onChange:({target:l})=>p(l.value),spellCheck:!1})}),e.jsx(i,{dark:!0,code:`
import { getCprRegex } from "@baggie/core";

const cprNumber = "${r}";

const isCprFormatValid = getCprRegex().test(cprNumber);
// isCprFormatValid = ${m?"true":"false"}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(i,{dark:!0,code:`new RegExp("${n().source}", "${n().flags}")`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{cprNumber:{defaultValue:null,description:"",name:"cprNumber",required:!0,type:{name:"string"}}}}}catch{}function a(t){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2"},c(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcprregex",children:"getCprRegex"}),`
`,e.jsx(r.p,{children:`A regular expression for validating the format of a Danish CPR number
(personal identification number).`}),`
`,e.jsx(r.p,{children:`Works with the birthdate and the four control digits combined or separated
by a dash or whitespace.`}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Be aware"}),` that this does not check if the CPR number is valid.
`,e.jsx(r.strong,{children:"It only checks if the format is correct."})]}),`
`,e.jsx(r.p,{children:"This makes it useful for the pattern attribute in an input field."}),`
`]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{cprNumber:"1706862134"})]})}function E(t={}){const{wrapper:r}=Object.assign({},c(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}export{E as default};
