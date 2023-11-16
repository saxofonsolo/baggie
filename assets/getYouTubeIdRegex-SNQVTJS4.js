import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as i}from"./index-XmUqo-P7.js";import{g as n}from"./getYouTubeIdRegex-isA09xAC.js";import{I as p}from"./InputWrapper-7qBv-a2h.js";import{u as c}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const o=r=>{const[t,d]=s.useState(r.string),u=s.useMemo(()=>t.match(n()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:m})=>d(m.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(i,{dark:!0,code:`
import { getYouTubeIdRegex } from "@baggie/core";

const string = "${t}";

const matchYouTubeId = string.match(getYouTubeIdRegex());
// matchYouTubeId = ${JSON.stringify(u)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(i,{dark:!0,code:`new RegExp("${n().source}", "${n().flags}")`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function a(r){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeidregex",children:"getYouTubeIdRegex"}),`
`,e.jsx(t.p,{children:`Returns regular expression for extracting the ID of a YouTube video from a
URL.`}),`
`,e.jsxs(t.p,{children:[`This works with both the URLs of normal links, embedded videos and the
shorter `,e.jsx(t.code,{children:"youtu.be/{ID}"})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{string:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})]})}function T(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{T as default};
//# sourceMappingURL=getYouTubeIdRegex-SNQVTJS4.js.map
