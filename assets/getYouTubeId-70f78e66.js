import{j as e}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{b as c}from"./index-90421cc8.js";import{g as p}from"./getYouTubeIdRegex-a248b03f.js";import{I as o}from"./InputWrapper-088860b1.js";import{u as a}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-a8184af9.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=r=>{const n=r.trim().match(p());return n&&n.length>1?n[1]:void 0},i=r=>{const[n,s]=d.useState(r.input),t=d.useMemo(()=>h(n),[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(o,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:n,onChange:({target:l})=>s(l.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsx(o,{label:"ID",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:t||"undefined"})})]}),e.jsx(c,{dark:!0,code:`
import { getYouTubeId } from "@baggie/core";

const input = \`${n}\`;

const id = getYouTubeId(input);
// id = ${t?`"${t}"`:"undefined"}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function Y(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeid",children:"getYouTubeId"}),`
`,e.jsx(t.p,{children:"Get the YouTube ID from a URL."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to get the YouTube ID from."})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"The standard YouTube URL:"}),`
`,e.jsx(i,{input:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),`
`,e.jsx(t.p,{children:"With other parameters:"}),`
`,e.jsx(i,{input:"https://www.youtube.com/watch?v=eDtGYygcPyw&ab_channel=Vincinator"}),`
`,e.jsx(t.p,{children:"The shortened URL:"}),`
`,e.jsx(i,{input:"https://youtu.be/N7-7HJCXx10"}),`
`,e.jsx(t.p,{children:"The URL from embedded videos:"}),`
`,e.jsx(i,{input:"https://www.youtube.com/embed/N7-7HJCXx10"})]})}}export{Y as default};
//# sourceMappingURL=getYouTubeId-70f78e66.js.map
