import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as l}from"./index-9f119f36.js";import{C as h}from"./ColorInput-5137a913.js";import{c as a}from"./convertStringToRgb-e978940f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const s=t=>{const[r,c]=i.useState(t.hex),n=i.useMemo(()=>{try{return a(r)}catch{return}},[r]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(h,{label:"Hex",value:r,onChange:c})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx("table",{style:{margin:0},children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Red:"})}),e.jsx("td",{children:n?n.red:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Green:"})}),e.jsx("td",{children:n?n.green:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Blue:"})}),e.jsx("td",{children:n?n.blue:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Alpha:"})}),e.jsx("td",{children:n?n.alpha:""})]})]})})}),e.jsx(l,{dark:!0,code:`
import { convertStringToRgb } from "@baggie/core";

const hex = ${r?`"${r}"`:"undefined"};

const rgb = convertStringToRgb(hex);
/*
rgb = ${JSON.stringify(n,null,4)}
*/
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function o(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"convertstringtorgb",children:"convertStringToRgb"}),`
`,e.jsx(r.p,{children:"Convert a string (hex or rgb color) to an object with RGB color values."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{hex:"#ffcc00"})]})}function N(t={}){const{wrapper:r}=Object.assign({},d(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{N as default};
//# sourceMappingURL=convertStringToRgb-13802680.js.map
