import{j as e}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{b as c}from"./index-21461081.js";import{g as s}from"./getYouTubeIdRegex-a248b03f.js";import{I as m}from"./InputWrapper-088860b1.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bde67206.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const i=o=>{const[t,n]=a.useState(o.string),r=a.useMemo(()=>t.match(s()),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(m,{label:"String",labelForId:"string-input",children:e.jsx("textarea",{id:"string-input",value:t,onChange:({target:u})=>n(u.value),style:{width:"100%",maxWidth:"360px"},spellCheck:!1,rows:3})}),e.jsx(c,{dark:!0,code:`
import { getYouTubeIdRegex } from "@baggie/core";

const string = "${t}";

const matchYouTubeId = string.match(getYouTubeIdRegex());
// matchYouTubeId = ${JSON.stringify(r)}
`}),e.jsx("b",{children:"The returned regex:"}),e.jsx(c,{dark:!0,code:`new RegExp("${s().source}", "${s().flags}")`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}}}}}catch{}function T(o={}){const{wrapper:t}=Object.assign({},d(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},d(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getyoutubeidregex",children:"getYouTubeIdRegex"}),`
`,e.jsx(r.p,{children:`Returns regular expression for extracting the ID of a YouTube video from a
URL.`}),`
`,e.jsxs(r.p,{children:[`This works with both the URLs of normal links, embedded videos and the
shorter `,e.jsx(r.code,{children:"youtu.be/{ID}"})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{string:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})]})}}export{T as default};
//# sourceMappingURL=getYouTubeIdRegex-2f54977c.js.map
