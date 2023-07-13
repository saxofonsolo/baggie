import{j as e}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{b as a}from"./index-c495ba38.js";import{n as d,C as c}from"./ColorInput-4c318f10.js";import{I as h}from"./InputWrapper-088860b1.js";import{u as l}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";const i=n=>{const[t,o]=s.useState(n.hex),r=s.useMemo(()=>d(t),[t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Hex color",value:t,onChange:o}),e.jsx(h,{label:"Normalized",labelForId:void 0,children:r||"undefined"})]}),e.jsx(a,{dark:!0,code:`
import { normalizeHexColor } from "@baggie/core";

const hex = "${t}";

const normalized = normalizeHexColor(hex);
// normalized = ${r?`"${r}"`:"undefined"}
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function E(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"normalizehexcolor",children:"normalizeHexColor"}),`
`,e.jsx(r.p,{children:"Make sure a hex color is in lowercase with 6 to 8 hexadecimals."}),`
`,e.jsxs(r.p,{children:["A use case for this could be the HTML color input ",e.jsx(r.code,{children:'<input type="color" />'}),` which
requires its value to be in the format `,e.jsx(r.code,{children:"#rrggbb"}),` where rr, gg, bb are two-digit
hexadecimal numbers.`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{hex:"#FC0"})]})}}export{E as default};
//# sourceMappingURL=normalizeHexColor-6a54ceed.js.map
