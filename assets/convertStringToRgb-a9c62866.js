import{j as e}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{b as c}from"./index-c5be8d33.js";import{C as l}from"./ColorInput-4c318f10.js";import{c as h}from"./convertStringToRgb-e978940f.js";import{u as d}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-71f486ec.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-088860b1.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const i=n=>{const[t,s]=o.useState(n.hex),r=o.useMemo(()=>{try{return h(t)}catch{return}},[t]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"10px"},children:e.jsx(l,{label:"Hex",value:t,onChange:s})}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx("table",{style:{margin:0},children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Red:"})}),e.jsx("td",{children:r?r.red:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Green:"})}),e.jsx("td",{children:r?r.green:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Blue:"})}),e.jsx("td",{children:r?r.blue:""})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Alpha:"})}),e.jsx("td",{children:r?r.alpha:""})]})]})})}),e.jsx(c,{dark:!0,code:`
import { convertStringToRgb } from "@baggie/core";

const hex = ${t?`"${t}"`:"undefined"};

const rgb = convertStringToRgb(hex);
/*
rgb = ${JSON.stringify(r,null,4)}
*/
`})]})};try{i.displayName="Example",i.__docgenInfo={description:"",displayName:"Example",props:{hex:{defaultValue:null,description:"",name:"hex",required:!0,type:{name:"string"}}}}}catch{}function N(n={}){const{wrapper:t}=Object.assign({},d(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,{})})):s();function s(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"convertstringtorgb",children:"convertStringToRgb"}),`
`,e.jsx(r.p,{children:"Convert a string (hex or rgb color) to an object with RGB color values."}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"hex"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{hex:"#ffcc00"})]})}}export{N as default};
//# sourceMappingURL=convertStringToRgb-a9c62866.js.map
