import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{b as d}from"./index-XmUqo-P7.js";import{C as m}from"./ColorViewer-4nozgsQU.js";import{c as p,C as h}from"./convertColorNameToHex-vzDEJkbb.js";import{I as x}from"./InputWrapper-7qBv-a2h.js";import{u as c}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";const s=r=>{const[o,i]=l.useState(r.colorName),n=l.useMemo(()=>p(o),[o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsxs(x,{label:"Color name",labelForId:"color-name-input",children:[e.jsx("input",{id:"color-name-input",value:o,onChange:({target:t})=>i(t.value),list:"color-names"}),e.jsx("datalist",{id:"color-names",children:Object.keys(h).map(t=>e.jsx("option",{children:t},t))})]})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(m,{color:n})}),e.jsx(d,{dark:!0,code:`
import { convertColorNameToHex } from "@baggie/core";

const colorName = "${o}";

const hex = convertColorNameToHex(colorName);
// hex = ${n?`"${n}"`:"undefined"}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{colorName:{defaultValue:null,description:"",name:"colorName",required:!0,type:{name:"string"}}}}}catch{}function a(r){const o=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"convertcolornametohex",children:"convertColorNameToHex"}),`
`,e.jsx(o.p,{children:"Convert a color name to a hex color."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["See ",e.jsx(o.a,{href:"https://www.w3schools.com/colors/colors_names.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.w3schools.com/colors/colors_names.asp"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{align:"left",children:"Parameter"}),e.jsx(o.th,{align:"left",children:"Type"}),e.jsx(o.th,{align:"center",children:"Required"})]})}),e.jsx(o.tbody,{children:e.jsxs(o.tr,{children:[e.jsx(o.td,{align:"left",children:e.jsx(o.strong,{children:"name"})}),e.jsx(o.td,{align:"left",children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{colorName:"orange"})]})}function O(r={}){const{wrapper:o}=Object.assign({},c(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(a,r)})):a(r)}export{O as default};
//# sourceMappingURL=convertColorNameToHex-tvNmFogA.js.map
