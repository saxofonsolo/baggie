import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{b as x}from"./index-y2kHJEFa.js";import{C as g}from"./ColorViewer-xEqVjGzH.js";import{C as j}from"./ColorInput-Z46B9PCr.js";import{c as d}from"./convertHslToRgb-tXKaEa1P.js";import{c as u}from"./convertRgbToHsl-Uw_QpASn.js";import{c as s}from"./convertRgbToHex-JYaegdpm.js";import{c as f}from"./convertStringToRgb-HS4K7Din.js";import{useMDXComponents as p}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isHexColor-f2GhCywa.js";import"./convertColorNameToHex-Eu416-Cb.js";import"./InputWrapper-7qBv-a2h.js";import"./convertRangePosition-QyZFLCoG.js";import"./getPositionBetween-svJm219E.js";import"./getPercentageBetween-j7u-9asU.js";function b(t){const e=typeof t=="string"?t:s(t),i=typeof t=="string"?f(t):t,{hue:n,saturation:o,lightness:a,alpha:l}=u(i);return[e,s(d({hue:(n+120)%360,saturation:o,lightness:a,alpha:l})),s(d({hue:(n+240)%360,saturation:o,lightness:a,alpha:l}))]}const c=t=>{const[e,i]=m.useState(t.color),n=m.useMemo(()=>{try{return b(e)}catch{return[]}},[e]);return r.jsxs(r.Fragment,{children:[r.jsx(j,{label:"Color",value:e,onChange:i}),r.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>r.jsx(g,{color:o},o))},e),r.jsx(x,{dark:!0,code:`
import { getColorSchemeTriadic } from "@baggie/core";

const color = "${e}";

const scheme = getColorSchemeTriadic(color);
/*
scheme = ${JSON.stringify(n,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function h(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"getcolorschemetriadic",children:"getColorSchemeTriadic"}),`
`,r.jsx(e.p,{children:"Get a triadic color scheme."}),`
`,r.jsx(e.p,{children:"The three colors are evenly spaced on the color wheel, 120 degrees apart from each other."}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{align:"left",children:"Parameter"}),r.jsx(e.th,{align:"left",children:"Type"}),r.jsx(e.th,{align:"center",children:"Required"}),r.jsx(e.th,{children:"Description"})]})}),r.jsx(e.tbody,{children:r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"color"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The base color."})]})})]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(c,{color:"#ffcc00"})]})}function J(t={}){const{wrapper:e}=Object.assign({},p(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(h,t)})):h(t)}export{J as default};
