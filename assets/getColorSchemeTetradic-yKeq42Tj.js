import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{b as x}from"./index-CJNtjuy4.js";import{C as g}from"./ColorViewer-4nozgsQU.js";import{C as j}from"./ColorInput-p8BfKAZW.js";import{c as l}from"./convertHslToRgb-d-NiH81F.js";import{c as u}from"./convertRgbToHsl-ZqvJ4wqf.js";import{c as s}from"./convertRgbToHex-k5LYStj_.js";import{c as f}from"./convertStringToRgb-i6fsHOdH.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";import"./InputWrapper-7qBv-a2h.js";import"./convertRangePosition-p6LuDhj_.js";import"./getPositionBetween-RxTUMZ_D.js";import"./getPercentageBetween-h4plVkI6.js";const b=t=>{const e=typeof t=="string"?t:s(t),c=typeof t=="string"?f(t):t,{hue:n,saturation:o,lightness:i,alpha:a}=u(c);return[e,s(l({hue:(n+90)%360,saturation:o,lightness:i,alpha:a})),s(l({hue:(n+180)%360,saturation:o,lightness:i,alpha:a})),s(l({hue:(n+270)%360,saturation:o,lightness:i,alpha:a}))]},m=t=>{const[e,c]=d.useState(t.color),n=d.useMemo(()=>{try{return b(e)}catch{return[]}},[e]);return r.jsxs(r.Fragment,{children:[r.jsx(j,{label:"Color",value:e,onChange:c}),r.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>r.jsx(g,{color:o},o))},e),r.jsx(x,{dark:!0,code:`
import { getColorSchemeTetradic } from "@baggie/core";

const color = "${e}";

const scheme = getColorSchemeTetradic(color);
/*
scheme = ${JSON.stringify(n,null,4)}
*/
`})]})};try{m.displayName="Example",m.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function h(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"getcolorschemetetradic",children:"getColorSchemeTetradic"}),`
`,r.jsx(e.p,{children:"Get a tetradic color scheme."}),`
`,r.jsx(e.p,{children:"The four colors are evenly spaced on the color wheel, 90 degrees apart from each other."}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{align:"left",children:"Parameter"}),r.jsx(e.th,{align:"left",children:"Type"}),r.jsx(e.th,{align:"center",children:"Required"}),r.jsx(e.th,{children:"Description"})]})}),r.jsx(e.tbody,{children:r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"color"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The base color."})]})})]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(m,{color:"#ffcc00"})]})}function J(t={}){const{wrapper:e}=Object.assign({},p(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(h,t)})):h(t)}export{J as default};
