import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as d}from"./index-9f119f36.js";import{n as c,C as h}from"./ColorInput-5137a913.js";import{I as x}from"./InputWrapper-a637f81f.js";import{u as l}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";const o=t=>{const[r,a]=i.useState(t.hex),n=i.useMemo(()=>c(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"Hex color",value:r,onChange:a}),e.jsx(x,{label:"Normalized",labelForId:void 0,children:n||"undefined"})]}),e.jsx(d,{dark:!0,code:`
import { normalizeHexColor } from "@baggie/core";

const hex = "${r}";

const normalized = normalizeHexColor(hex);
// normalized = ${n?`"${n}"`:"undefined"}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function s(t){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"normalizehexcolor",children:"normalizeHexColor"}),`
`,e.jsx(r.p,{children:"Make sure a hex color is in lowercase with 6 to 8 hexadecimals."}),`
`,e.jsxs(r.p,{children:["A use case for this could be the HTML color input ",e.jsx(r.code,{children:'<input type="color" />'}),` which
requires its value to be in the format `,e.jsx(r.code,{children:"#rrggbb"}),` where rr, gg, bb are two-digit
hexadecimal numbers.`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{hex:"#FC0"})]})}function E(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{E as default};
//# sourceMappingURL=normalizeHexColor-328aac45.js.map
