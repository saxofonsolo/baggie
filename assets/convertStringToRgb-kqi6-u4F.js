import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as l}from"./index-XmUqo-P7.js";import{C as h}from"./ColorInput-p8BfKAZW.js";import{c as a}from"./convertStringToRgb-i6fsHOdH.js";import{u as d}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";import"./InputWrapper-7qBv-a2h.js";import"./convertRangePosition-p6LuDhj_.js";import"./getPositionBetween-RxTUMZ_D.js";import"./getPercentageBetween-h4plVkI6.js";const s=t=>{const[r,c]=i.useState(t.hex),n=i.useMemo(()=>{try{return a(r)}catch{return}},[r]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(h,{label:"Hex",value:r,onChange:c})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx("table",{style:{margin:0},children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Red:"})}),e.jsx("td",{children:n?n.red:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Green:"})}),e.jsx("td",{children:n?n.green:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Blue:"})}),e.jsx("td",{children:n?n.blue:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Alpha:"})}),e.jsx("td",{children:n?n.alpha:""})]})]})})}),e.jsx(l,{dark:!0,code:`
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
//# sourceMappingURL=convertStringToRgb-kqi6-u4F.js.map
