import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as i}from"./index-2fa589e3.js";import{C as d}from"./ColorInput-5137a913.js";import{g as p}from"./getColorBrightness-2de01791.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as a}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./convertStringToRgb-e978940f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const m=t=>1-p(t),o=t=>{const[r,c]=s.useState(t.color),n=s.useMemo(()=>m(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Color",value:r,onChange:c}),e.jsx(h,{label:"Darkness",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:n})})]}),e.jsx(i,{dark:!0,code:`
import { getColorDarkness } from "@baggie/core";

const color = "${r}";

const darkness = getColorDarkness(color);
// darkness = ${n}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function l(t){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolordarkness",children:"getColorDarkness"}),`
`,e.jsx(r.p,{children:"Get the perceived darkness of a color as percentage in decimal form."}),`
`,e.jsx(r.p,{children:"Returns a number from 0 to 1, 1 being the darkest and 0 being not dark at all."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"http://alienryderflex.com/hsp.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://alienryderflex.com/hsp.html"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The color to check."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{color:"#cccccc"})]})}function S(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(l,t)})):l(t)}export{S as default};
//# sourceMappingURL=getColorDarkness-cd537e38.js.map
