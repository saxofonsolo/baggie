import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{b as p}from"./index-c495ba38.js";import{C as m}from"./ColorViewer-bde42da6.js";import{C as c}from"./ColorInput-4c318f10.js";import{c as d}from"./convertStringToRgb-e978940f.js";import{c as x}from"./convertRgbToHex-19fa32ed.js";import{g as u}from"./getMean-b7b6c0cb.js";import{u as a}from"./index-1d576ef5.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-61356754.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-088860b1.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";import"./addNumbers-491af948.js";const g=(o,t)=>{try{const n=typeof o=="string"?d(o):o,r=typeof t=="string"?d(t):t;return x({red:Math.round(n.red*r.red/255),green:Math.round(n.green*r.green/255),blue:Math.round(n.blue*r.blue/255),alpha:Math.min(u([n.alpha||1,r.alpha||1]),1)})}catch{return}},s=o=>{const[t,n]=i.useState(o.colorA),[r,h]=i.useState(o.colorB),l=i.useMemo(()=>g(t,r),[t,r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(c,{label:"Color A",value:t,onChange:n}),e.jsx(c,{label:"Color B",value:r,onChange:h})]}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(m,{color:l})}),e.jsx(p,{dark:!0,code:`
import { multiplyColors } from "@baggie/core";

const colorA = "${t}";
const colorB = "${r}";

const mixed = multiplyColors(colorA, colorB);
// mixed = ${l?`"${l}"`:"undefined"}
`})]})};try{s.displayName="Example",s.__docgenInfo={description:"",displayName:"Example",props:{colorA:{defaultValue:null,description:"",name:"colorA",required:!0,type:{name:"string"}},colorB:{defaultValue:null,description:"",name:"colorB",required:!0,type:{name:"string"}}}}}catch{}function I(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"multiplycolors",children:"multiplyColors"}),`
`,e.jsx(r.p,{children:"Blend two colors together with the multiply mode."}),`
`,e.jsxs(r.p,{children:[`The result will be darker, since we're working with an additive color model (RGB).
This function is the opposite of `,e.jsx(r.code,{children:"screenColors()"}),"."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Blend_modes",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://en.wikipedia.org/wiki/Blend_modes"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"colorA"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The base color"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"colorB"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The other base color"})]})]})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{colorA:"#ff0000",colorB:"#808080"})]})}}export{I as default};
//# sourceMappingURL=multiplyColors-6e570d6a.js.map
