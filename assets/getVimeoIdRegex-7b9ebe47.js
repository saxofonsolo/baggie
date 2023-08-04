import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as a}from"./index-61bf1805.js";import{b as m}from"./index-9c98abcd.js";import{g as i}from"./getVimeoIdRegex-08f6d261.js";import{I as g}from"./InputWrapper-0059aa96.js";import{u as c}from"./index-e744116c.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const s=r=>{const[t,o]=a.useState(r.string),n=a.useMemo(()=>t.match(i()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:p})=>o(p.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(m,{dark:!0,code:`
import { getVimeoIdRegex } from "@baggie/core";

const string = "${t}";

const matchVimeoId = string.match(getVimeoIdRegex());
// matchVimeoId = ${JSON.stringify(n)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(m,{dark:!0,code:`new RegExp("${i().source}", "${i().flags}")`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function E(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getvimeoidregex",children:"getVimeoIdRegex"}),`
`,e.jsx(n.p,{children:"Returns regular expression for extracting the ID of a Vimeo video from a URL."}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{string:"https://vimeo.com/265700921"})]})}}export{E as default};
//# sourceMappingURL=getVimeoIdRegex-7b9ebe47.js.map
