import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{b as m}from"./index-e3b36901.js";import{g as s}from"./getVimeoIdRegex-08f6d261.js";import{I as g}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=r=>{const[t,o]=a.useState(r.string),n=a.useMemo(()=>t.match(s()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:p})=>o(p.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(m,{dark:!0,code:`
import { getVimeoIdRegex } from "@baggie/core";

const string = "${t}";

const matchVimeoId = string.match(getVimeoIdRegex());
// matchVimeoId = ${JSON.stringify(n)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(m,{dark:!0,code:`new RegExp("${s().source}", "${s().flags}")`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function V(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,{})})):o();function o(){const n=Object.assign({h1:"h1",p:"p",h2:"h2"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getvimeoidregex",children:"getVimeoIdRegex"}),`
`,e.jsx(n.p,{children:"Returns regular expression for extracting the ID of a Vimeo video from a URL."}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{string:"https://vimeo.com/265700921"})]})}}export{V as default};
//# sourceMappingURL=getVimeoIdRegex-0cc49ee6.js.map
