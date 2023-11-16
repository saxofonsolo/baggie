import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as a}from"./index-XmUqo-P7.js";import{C as d}from"./ColorInput-p8BfKAZW.js";import{g as h}from"./getColorBrightness-FiLTyx4h.js";import{I as p}from"./InputWrapper-7qBv-a2h.js";import{u as l}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";import"./convertStringToRgb-i6fsHOdH.js";import"./convertRangePosition-p6LuDhj_.js";import"./getPositionBetween-RxTUMZ_D.js";import"./getPercentageBetween-h4plVkI6.js";const o=t=>{const[r,c]=s.useState(t.color),n=s.useMemo(()=>h(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(d,{label:"Color",value:r,onChange:c}),e.jsx(p,{label:"Brightness",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:n})})]}),e.jsx(a,{dark:!0,code:`
import { getColorBrightness } from "@baggie/core";

const color = "${r}";

const brightness = getColorBrightness(color);
// brightness = ${n}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function i(t){const r=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"getcolorbrightness",children:"getColorBrightness"}),`
`,e.jsx(r.p,{children:"Get the perceived brightness of a color as percentage in decimal form."}),`
`,e.jsx(r.p,{children:"Returns a number from 0 to 1, 1 being the brightest and 0 being not bright at all."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["See ",e.jsx(r.a,{href:"http://alienryderflex.com/hsp.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://alienryderflex.com/hsp.html"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{align:"left",children:"Parameter"}),e.jsx(r.th,{align:"left",children:"Type"}),e.jsx(r.th,{align:"center",children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{align:"left",children:e.jsx(r.strong,{children:"color"})}),e.jsx(r.td,{align:"left",children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{align:"center",children:"✔"}),e.jsx(r.td,{children:"The color to check."})]})})]}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{color:"#cccccc"})]})}function O(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{O as default};
//# sourceMappingURL=getColorBrightness-GocDhAaP.js.map
