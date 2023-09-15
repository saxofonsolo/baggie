import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as p}from"./index-2fa589e3.js";import{g as h}from"./getYouTubeIdRegex-a248b03f.js";import{I as d}from"./InputWrapper-a637f81f.js";import{u as a}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=n=>{const t=n.trim().match(h());return t&&t.length>1?t[1]:void 0},r=n=>{const[t,l]=s.useState(n.input),i=s.useMemo(()=>u(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(d,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:t,onChange:({target:c})=>l(c.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsx(d,{label:"ID",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:i||"undefined"})})]}),e.jsx(p,{dark:!0,code:`
import { getYouTubeId } from "@baggie/core";

const input = \`${t}\`;

const id = getYouTubeId(input);
// id = ${i?`"${i}"`:"undefined"}
`})]})};try{r.displayName="Example",r.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function o(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeid",children:"getYouTubeId"}),`
`,e.jsx(t.p,{children:"Get the YouTube ID from a URL."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to get the YouTube ID from."})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"The standard YouTube URL:"}),`
`,e.jsx(r,{input:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),`
`,e.jsx(t.p,{children:"With other parameters:"}),`
`,e.jsx(r,{input:"https://www.youtube.com/watch?v=eDtGYygcPyw&ab_channel=Vincinator"}),`
`,e.jsx(t.p,{children:"The shortened URL:"}),`
`,e.jsx(r,{input:"https://youtu.be/N7-7HJCXx10"}),`
`,e.jsx(t.p,{children:"The URL from embedded videos:"}),`
`,e.jsx(r,{input:"https://www.youtube.com/embed/N7-7HJCXx10"})]})}function Y(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{Y as default};
//# sourceMappingURL=getYouTubeId-d0567166.js.map
