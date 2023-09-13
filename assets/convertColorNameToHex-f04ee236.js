import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{b as d}from"./index-9f119f36.js";import{C as m}from"./ColorViewer-8fc72cbe.js";import{c as p,C as h}from"./convertColorNameToHex-5b896379.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";const s=r=>{const[o,i]=l.useState(r.colorName),n=l.useMemo(()=>p(o),[o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsxs(x,{label:"Color name",labelForId:"color-name-input",children:[e.jsx("input",{id:"color-name-input",value:o,onChange:({target:t})=>i(t.value),list:"color-names"}),e.jsx("datalist",{id:"color-names",children:Object.keys(h).map(t=>e.jsx("option",{children:t},t))})]})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(m,{color:n})}),e.jsx(d,{dark:!0,code:`
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
//# sourceMappingURL=convertColorNameToHex-f04ee236.js.map
