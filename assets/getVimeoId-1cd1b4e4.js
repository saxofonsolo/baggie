import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{b as p}from"./index-c495ba38.js";import{g as c}from"./getVimeoIdRegex-08f6d261.js";import{I as d}from"./InputWrapper-088860b1.js";import{u as a}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=r=>{const n=r.match(c());return n&&n.length>0?n[1]:void 0},i=r=>{const[n,s]=o.useState(r.input),t=o.useMemo(()=>h(n),[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[e.jsx(d,{label:"Input",labelForId:"input-input",children:e.jsx("textarea",{id:"input-input",value:n,onChange:({target:l})=>s(l.value),style:{width:"360px",maxWidth:"100%"},spellCheck:!1,rows:3})}),e.jsx(d,{label:"ID",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:t||"undefined"})})]}),e.jsx(p,{dark:!0,code:`
import { getVimeoId } from "@baggie/core";

const input = \`${n}\`;

const id = getVimeoId(input);
// id = ${t?`"${t}"`:"undefined"}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}}}}}catch{}function E(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getyoutubeid",children:"getYouTubeId"}),`
`,e.jsx(t.p,{children:"Get the Vimeo ID from a URL."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"input"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to get the Vimeo ID from."})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"The standard Vimeo URL:"}),`
`,e.jsx(i,{input:"https://vimeo.com/265700921"}),`
`,e.jsx(t.p,{children:"With other parameters:"}),`
`,e.jsx(i,{input:"https://vimeo.com/12434588?autoplay=1"}),`
`,e.jsx(t.p,{children:"The URL from embedded videos:"}),`
`,e.jsx(i,{input:"https://player.vimeo.com/video/12434588"})]})}}export{E as default};
//# sourceMappingURL=getVimeoId-1cd1b4e4.js.map
