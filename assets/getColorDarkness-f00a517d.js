import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{b as a}from"./index-90421cc8.js";import{C as c}from"./ColorInput-4c318f10.js";import{g as d}from"./getColorBrightness-2de01791.js";import{I as p}from"./InputWrapper-088860b1.js";import{u as i}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-a8184af9.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./convertStringToRgb-e978940f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const h=t=>1-d(t),s=t=>{const[o,n]=l.useState(t.color),r=l.useMemo(()=>h(o),[o]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Color",value:o,onChange:n}),e.jsx(p,{label:"Darkness",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:r})})]}),e.jsx(a,{dark:!0,code:`
import { getColorDarkness } from "@baggie/core";

const color = "${o}";

const darkness = getColorDarkness(color);
// darkness = ${r}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function S(t={}){const{wrapper:o}=Object.assign({},i(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolordarkness",children:"getColorDarkness"}),`
`,e.jsx(r.p,{children:"Get the perceived darkness of a color as percentage in decimal form."}),`
`,e.jsx(r.p,{children:"Returns a number from 0 to 1, 1 being the darkest and 0 being not dark at all."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"http://alienryderflex.com/hsp.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://alienryderflex.com/hsp.html"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The color to check."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{color:"#cccccc"})]})}}export{S as default};
//# sourceMappingURL=getColorDarkness-f00a517d.js.map
