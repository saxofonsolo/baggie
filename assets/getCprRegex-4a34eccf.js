import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{b as p}from"./index-c5be8d33.js";import{g as o}from"./getCprRegex-19ad0575.js";import{I as l}from"./InputWrapper-088860b1.js";import{u as c}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-71f486ec.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=n=>{const[t,s]=a.useState(n.cprNumber),r=a.useMemo(()=>o().test(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"CPR number",labelForId:"cpr-input",children:e.jsx("input",{id:"cpr-input",value:t,onChange:({target:m})=>s(m.value),spellCheck:!1})}),e.jsx(p,{dark:!0,code:`
import { getCprRegex } from "@baggie/core";

const cprNumber = "${t}";

const isCprFormatValid = getCprRegex().test(cprNumber);
// isCprFormatValid = ${r?"true":"false"}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(p,{dark:!0,code:`new RegExp("${o().source}", "${o().flags}")`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{cprNumber:{defaultValue:null,description:"",name:"cprNumber",required:!0,type:{name:"string"}}}}}catch{}function N(n={}){const{wrapper:t}=Object.assign({},c(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcprregex",children:"getCprRegex"}),`
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
`,e.jsx(i,{cprNumber:"1706862134"})]})}}export{N as default};
//# sourceMappingURL=getCprRegex-4a34eccf.js.map
