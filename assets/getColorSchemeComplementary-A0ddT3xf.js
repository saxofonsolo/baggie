import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as d}from"./index-6Pv_FbVv.js";import{C as x}from"./ColorViewer-4nozgsQU.js";import{C as g}from"./ColorInput-p8BfKAZW.js";import{c as j}from"./convertHslToRgb-d-NiH81F.js";import{c as u}from"./convertRgbToHsl-ZqvJ4wqf.js";import{c as f}from"./convertStringToRgb-i6fsHOdH.js";import{c as l}from"./convertRgbToHex-k5LYStj_.js";import{u as m}from"./index-Dbo06S9W.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";import"./InputWrapper-7qBv-a2h.js";import"./convertRangePosition-p6LuDhj_.js";import"./getPositionBetween-RxTUMZ_D.js";import"./getPercentageBetween-h4plVkI6.js";const y=t=>{const e=typeof t=="string"?t:l(t),s=typeof t=="string"?f(t):t,{hue:n,saturation:o,lightness:p,alpha:h}=u(s);return[e,l(j({hue:(n+180)%360,saturation:o,lightness:p,alpha:h}))]},c=t=>{const[e,s]=i.useState(t.color),n=i.useMemo(()=>{try{return y(e)}catch{return[]}},[e]);return r.jsxs(r.Fragment,{children:[r.jsx(g,{label:"Color",value:e,onChange:s}),r.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>r.jsx(x,{color:o},o))},e),r.jsx(d,{dark:!0,code:`
import { getColorSchemeComplementary } from "@baggie/core";

const color = "${e}";

const scheme = getColorSchemeComplementary(color);
/*
scheme = ${JSON.stringify(n,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function a(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"getcolorschemecomplementary",children:"getColorSchemeComplementary"}),`
`,r.jsx(e.p,{children:"Get a complementary color scheme."}),`
`,r.jsx(e.p,{children:"The two colors are opposite each other on the color wheel."}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{align:"left",children:"Parameter"}),r.jsx(e.th,{align:"left",children:"Type"}),r.jsx(e.th,{align:"center",children:"Required"}),r.jsx(e.th,{children:"Description"})]})}),r.jsx(e.tbody,{children:r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"color"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The base color."})]})})]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(c,{color:"#ffcc00"})]})}function G(t={}){const{wrapper:e}=Object.assign({},m(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(a,t)})):a(t)}export{G as default};
//# sourceMappingURL=getColorSchemeComplementary-A0ddT3xf.js.map
