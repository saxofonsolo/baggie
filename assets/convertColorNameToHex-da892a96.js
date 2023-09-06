import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{b as i}from"./index-e3b36901.js";import{C as d}from"./ColorViewer-02e72d7a.js";import{c as m,C as p}from"./convertColorNameToHex-5b896379.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as c}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5d3edef.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";const l=t=>{const[r,n]=a.useState(t.colorName),o=a.useMemo(()=>m(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsxs(h,{label:"Color name",labelForId:"color-name-input",children:[e.jsx("input",{id:"color-name-input",value:r,onChange:({target:s})=>n(s.value),list:"color-names"}),e.jsx("datalist",{id:"color-names",children:Object.keys(p).map(s=>e.jsx("option",{children:s},s))})]})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(d,{color:o})}),e.jsx(i,{dark:!0,code:`
import { convertColorNameToHex } from "@baggie/core";

const colorName = "${r}";

const hex = convertColorNameToHex(colorName);
// hex = ${o?`"${o}"`:"undefined"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{colorName:{defaultValue:null,description:"",name:"colorName",required:!0,type:{name:"string"}}}}}catch{}function M(t={}){const{wrapper:r}=Object.assign({},c(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,{})})):n();function n(){const o=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},c(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"convertcolornametohex",children:"convertColorNameToHex"}),`
`,e.jsx(o.p,{children:"Convert a color name to a hex color."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["See ",e.jsx(o.a,{href:"https://www.w3schools.com/colors/colors_names.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.w3schools.com/colors/colors_names.asp"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{align:"left",children:"Parameter"}),e.jsx(o.th,{align:"left",children:"Type"}),e.jsx(o.th,{align:"center",children:"Required"})]})}),e.jsx(o.tbody,{children:e.jsxs(o.tr,{children:[e.jsx(o.td,{align:"left",children:e.jsx(o.strong,{children:"name"})}),e.jsx(o.td,{align:"left",children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{colorName:"orange"})]})}}export{M as default};
//# sourceMappingURL=convertColorNameToHex-da892a96.js.map
