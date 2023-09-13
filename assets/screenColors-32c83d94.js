import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as m}from"./index-9f119f36.js";import{C as x}from"./ColorViewer-8fc72cbe.js";import{C as c}from"./ColorInput-5137a913.js";import{c as d}from"./convertStringToRgb-e978940f.js";import{c as g}from"./convertRgbToHex-19fa32ed.js";import{g as j}from"./getMean-b7b6c0cb.js";import{u as h}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";import"./addNumbers-491af948.js";const u=(o,r)=>{try{const n=typeof o=="string"?d(o):o,t=typeof r=="string"?d(r):r;return g({red:Math.round(1-(1-n.red)*(1-t.red)),green:Math.round(1-(1-n.green)*(1-t.green)),blue:Math.round(1-(1-n.blue)*(1-t.blue)),alpha:Math.min(j([n.alpha||1,t.alpha||1]),1)})}catch{return}},l=o=>{const[r,n]=i.useState(o.colorA),[t,p]=i.useState(o.colorB),s=i.useMemo(()=>u(r,t),[r,t]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Color A",value:r,onChange:n}),e.jsx(c,{label:"Color B",value:t,onChange:p})]}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(x,{color:s})}),e.jsx(m,{dark:!0,code:`
import { screenColors } from "@baggie/core";

const colorA = "${r}";
const colorB = "${t}";

const mixed = screenColors(colorA, colorB);
// mixed = ${s?`"${s}"`:"undefined"}
`})]})};try{l.displayName="Example",l.__docgenInfo={description:"",displayName:"Example",props:{colorA:{defaultValue:null,description:"",name:"colorA",required:!0,type:{name:"string"}},colorB:{defaultValue:null,description:"",name:"colorB",required:!0,type:{name:"string"}}}}}catch{}function a(o){const r=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},h(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"screencolors",children:"screenColors"}),`
`,e.jsx(r.p,{children:"Blend two colors together with the screen mode."}),`
`,e.jsxs(r.p,{children:[`The result will be lighter, since we're working with an additive color model (RGB).
This function is the opposite of `,e.jsx(r.code,{children:"multiplyColors()"}),"."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Blend_modes",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://en.wikipedia.org/wiki/Blend_modes"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"colorA"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The base color"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"colorB"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The other base color"})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{colorA:"#ff0000",colorB:"#00ff00"})]})}function I(o={}){const{wrapper:r}=Object.assign({},h(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(a,o)})):a(o)}export{I as default};
//# sourceMappingURL=screenColors-32c83d94.js.map
