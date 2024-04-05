import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as i}from"./index-y2kHJEFa.js";import{g as o}from"./getYouTubeIdRegex-F0LaWcdW.js";import{I as p}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as c}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const n=r=>{const[t,d]=s.useState(r.string),m=s.useMemo(()=>t.match(o()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:u})=>d(u.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(i,{dark:!0,code:`
import { getYouTubeIdRegex } from "@baggie/core";

const string = "${t}";

const matchYouTubeId = string.match(getYouTubeIdRegex());
// matchYouTubeId = ${JSON.stringify(m)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(i,{dark:!0,code:`new RegExp("${o().source}", "${o().flags}")`})]})};try{n.displayName="Example",n.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function a(r){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeidregex",children:"getYouTubeIdRegex"}),`
`,e.jsx(t.p,{children:`Returns regular expression for extracting the ID of a YouTube video from a
URL.`}),`
`,e.jsxs(t.p,{children:[`This works with both the URLs of normal links, embedded videos and the
shorter `,e.jsx(t.code,{children:"youtu.be/{ID}"})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{string:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})]})}function E(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{E as default};
