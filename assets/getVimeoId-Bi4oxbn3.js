import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{b as c}from"./index-BI7qbVC1.js";import{g as h}from"./getVimeoIdRegex-C-LBorAf.js";import{I as o}from"./InputWrapper-BoKUP5ds.js";import{useMDXComponents as a}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function m(n){const t=n.match(h());return t&&t.length>0?t[1]:void 0}const i=n=>{const[t,l]=s.useState(n.input),r=s.useMemo(()=>m(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(o,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:t,onChange:({target:p})=>l(p.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsx(o,{label:"ID",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:r||"undefined"})})]}),e.jsx(c,{dark:!0,code:`
import { getVimeoId } from "@baggie/core";

const input = \`${t}\`;

const id = getVimeoId(input);
// id = ${r?`"${r}"`:"undefined"}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function d(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeid",children:"getYouTubeId"}),`
`,e.jsx(t.p,{children:"Get the Vimeo ID from a URL."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to get the Vimeo ID from."})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"The standard Vimeo URL:"}),`
`,e.jsx(i,{input:"https://vimeo.com/265700921"}),`
`,e.jsx(t.p,{children:"With other parameters:"}),`
`,e.jsx(i,{input:"https://vimeo.com/12434588?autoplay=1"}),`
`,e.jsx(t.p,{children:"The URL from embedded videos:"}),`
`,e.jsx(i,{input:"https://player.vimeo.com/video/12434588"})]})}function R(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{R as default};
