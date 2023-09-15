import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as i}from"./index-2fa589e3.js";import{g as n}from"./getYouTubeIdRegex-a248b03f.js";import{I as p}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const o=r=>{const[t,d]=s.useState(r.string),u=s.useMemo(()=>t.match(n()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:m})=>d(m.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(i,{dark:!0,code:`
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
//# sourceMappingURL=getYouTubeIdRegex-e4128277.js.map
