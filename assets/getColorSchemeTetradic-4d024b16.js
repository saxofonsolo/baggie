import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{b as x}from"./index-2fa589e3.js";import{C as g}from"./ColorViewer-8fc72cbe.js";import{C as j}from"./ColorInput-5137a913.js";import{c as l}from"./convertHslToRgb-a60e269c.js";import{c as u}from"./convertRgbToHsl-ef3890c5.js";import{c as s}from"./convertRgbToHex-19fa32ed.js";import{c as f}from"./convertStringToRgb-e978940f.js";import{u as p}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const b=t=>{const e=typeof t=="string"?t:s(t),c=typeof t=="string"?f(t):t,{hue:n,saturation:o,lightness:i,alpha:a}=u(c);return[e,s(l({hue:(n+90)%360,saturation:o,lightness:i,alpha:a})),s(l({hue:(n+180)%360,saturation:o,lightness:i,alpha:a})),s(l({hue:(n+270)%360,saturation:o,lightness:i,alpha:a}))]},d=t=>{const[e,c]=m.useState(t.color),n=m.useMemo(()=>{try{return b(e)}catch{return[]}},[e]);return r.jsxs(r.Fragment,{children:[r.jsx(j,{label:"Color",value:e,onChange:c}),r.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>r.jsx(g,{color:o},o))},e),r.jsx(x,{dark:!0,code:`
import { getColorSchemeTetradic } from "@baggie/core";

const color = "${e}";

const scheme = getColorSchemeTetradic(color);
/*
scheme = ${JSON.stringify(n,null,4)}
*/
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function h(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"getcolorschemetetradic",children:"getColorSchemeTetradic"}),`
`,r.jsx(e.p,{children:"Get a tetradic color scheme."}),`
`,r.jsx(e.p,{children:"The four colors are evenly spaced on the color wheel, 90 degrees apart from each other."}),`
`,r.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{align:"left",children:"Parameter"}),r.jsx(e.th,{align:"left",children:"Type"}),r.jsx(e.th,{align:"center",children:"Required"}),r.jsx(e.th,{children:"Description"})]})}),r.jsx(e.tbody,{children:r.jsxs(e.tr,{children:[r.jsx(e.td,{align:"left",children:r.jsx(e.strong,{children:"color"})}),r.jsx(e.td,{align:"left",children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{align:"center",children:"✔"}),r.jsx(e.td,{children:"The base color."})]})})]}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(d,{color:"#ffcc00"})]})}function G(t={}){const{wrapper:e}=Object.assign({},p(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(h,t)})):h(t)}export{G as default};
//# sourceMappingURL=getColorSchemeTetradic-4d024b16.js.map
