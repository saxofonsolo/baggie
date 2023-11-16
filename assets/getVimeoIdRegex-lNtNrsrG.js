import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as s}from"./index-XmUqo-P7.js";import{g as n}from"./getVimeoIdRegex-CgJ37Ia2.js";import{I as d}from"./InputWrapper-7qBv-a2h.js";import{u as m}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const o=r=>{const[t,c]=i.useState(r.string),p=i.useMemo(()=>t.match(n()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:g})=>c(g.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(s,{dark:!0,code:`
import { getVimeoIdRegex } from "@baggie/core";

const string = "${t}";

const matchVimeoId = string.match(getVimeoIdRegex());
// matchVimeoId = ${JSON.stringify(p)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(s,{dark:!0,code:`new RegExp("${n().source}", "${n().flags}")`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function a(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getvimeoidregex",children:"getVimeoIdRegex"}),`
`,e.jsx(t.p,{children:"Returns regular expression for extracting the ID of a Vimeo video from a URL."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{string:"https://vimeo.com/265700921"})]})}function E(r={}){const{wrapper:t}=Object.assign({},m(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{E as default};
//# sourceMappingURL=getVimeoIdRegex-lNtNrsrG.js.map
