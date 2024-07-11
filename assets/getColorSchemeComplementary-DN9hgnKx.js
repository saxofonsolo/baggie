import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{b as d}from"./index-BI7qbVC1.js";import{C as x}from"./ColorViewer-DHDYuLFP.js";import{C as g}from"./ColorInput-CJPpmj9L.js";import{c as j}from"./convertHslToRgb-lPsDMK_B.js";import{c as u}from"./convertRgbToHsl-DVL_qaM7.js";import{c as f}from"./convertStringToRgb-Df1BISe4.js";import{c as l}from"./convertRgbToHex-48Pc8mUD.js";import{useMDXComponents as m}from"./index-C-_6Vi3R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./isHexColor-BZesSPd8.js";import"./convertColorNameToHex-HtEsaZ45.js";import"./InputWrapper-BoKUP5ds.js";import"./convertRangePosition-DHvMMI-c.js";import"./getPositionBetween-Cdl0xhKh.js";import"./getPercentageBetween-CTnJbUxy.js";function y(t){const e=typeof t=="string"?t:l(t),s=typeof t=="string"?f(t):t,{hue:n,saturation:o,lightness:p,alpha:h}=u(s);return[e,l(j({hue:(n+180)%360,saturation:o,lightness:p,alpha:h}))]}const c=t=>{const[e,s]=i.useState(t.color),n=i.useMemo(()=>{try{return y(e)}catch{return[]}},[e]);return r.jsxs(r.Fragment,{children:[r.jsx(g,{label:"Color",value:e,onChange:s}),r.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>r.jsx(x,{color:o},o))},e),r.jsx(d,{dark:!0,code:`
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
`,r.jsx(c,{color:"#ffcc00"})]})}function J(t={}){const{wrapper:e}=Object.assign({},m(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(a,t)})):a(t)}export{J as default};
