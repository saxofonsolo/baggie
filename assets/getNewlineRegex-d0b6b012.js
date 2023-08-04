import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{b as c}from"./index-0081e355.js";import{g as a}from"./getNewlineRegex-b3d53267.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const o=r=>{const[n,s]=l.useState(r.string),[t,p]=l.useState(!1),h=l.useMemo(()=>n.replace(a(t),"-"),[n,t]);return e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:n,onChange:({target:i})=>s(i.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:()=>p(i=>!i)})," ","Include whitespace"]}),e.jsx(c,{dark:!0,code:`
import { getNewlineRegex } from "@baggie/core";

const string = \`${n}\`;

const newString = string.replace(getNewlineRegex(${t?"true":""}), "-");
// newString = \`${h}\`
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(c,{dark:!0,code:`new RegExp("${a(t).source}", "${a(t).flags}")`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function I(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getnewlineregex",children:"getNewlineRegex"}),`
`,e.jsx(t.p,{children:"Returns a regular expression for finding newlines."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"includeWhitespace"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{string:`Line 1
 Line 2
  Line 3`})]})}}export{I as default};
//# sourceMappingURL=getNewlineRegex-d0b6b012.js.map
