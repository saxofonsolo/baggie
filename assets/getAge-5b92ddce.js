import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{b as g}from"./index-2b4cce42.js";import{I as c}from"./InputWrapper-a637f81f.js";import{u as h}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const x=(n,r)=>{const a=r||new Date,e=new Date(n),i=a.getMonth()-e.getMonth();let s=a.getFullYear()-e.getFullYear();return(i<0||i===0&&a.getDate()<e.getDate())&&s--,s},l=n=>{const[r,a]=d.useState(n.birth),[e,i]=d.useState(n.death),s=new Date(r).toISOString().replace(/\.[0-9]+Z$/,""),m=e?new Date(e).toISOString().replace(/\.[0-9]+Z$/,""):"",p=d.useMemo(()=>x(r,e),[r,e]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(c,{label:"Birth",labelForId:"birth-input",children:t.jsx("input",{id:"birth-input",type:"datetime-local",value:s,onChange:({target:o})=>a(new Date(o.valueAsNumber))})}),t.jsx(c,{label:"To time",labelForId:"to-input",children:t.jsx("input",{id:"to-input",type:"datetime-local",value:m,onChange:({target:o})=>i(new Date(o.valueAsNumber))})})]}),t.jsx(g,{dark:!0,code:`
import { getAge } from "@baggie/core";

const birth = "${r.toDateString()}";
${e?`const death = "${e==null?void 0:e.toDateString()}";
`:""}
const age = getAge(birth${e?", death":""});
// age = ${p}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{birth:{defaultValue:null,description:"",name:"birth",required:!0,type:{name:"Date"}},death:{defaultValue:null,description:"",name:"death",required:!1,type:{name:"Date"}}}}}catch{}function M(n={}){const{wrapper:r}=Object.assign({},h(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},h(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getage",children:"getAge"}),`
`,t.jsx(e.p,{children:"Calculate someone's age given a date of birth and an optional date of death."}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Notice"})," that the time of day will be ignored."]}),`
`]}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{align:"left",children:"Parameter"}),t.jsx(e.th,{align:"left",children:"Type"}),t.jsx(e.th,{align:"center",children:"Required"}),t.jsx(e.th,{align:"left",children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"birth"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"Date"})}),t.jsx(e.td,{align:"center",children:"✔"}),t.jsx(e.td,{align:"left",children:"A timestamp in milliseconds."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"death"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"Date"})}),t.jsx(e.td,{align:"center"}),t.jsx(e.td,{align:"left",children:"A timestamp in milliseconds."})]})]})]}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.p,{children:"Only date of birth"}),`
`,t.jsx(l,{birth:new Date("1986-06-17")}),`
`,t.jsx(e.p,{children:"... also date of death"}),`
`,t.jsx(l,{birth:new Date("1986-06-17"),death:new Date("2023-06-17")})]})}}export{M as default};
//# sourceMappingURL=getAge-5b92ddce.js.map
