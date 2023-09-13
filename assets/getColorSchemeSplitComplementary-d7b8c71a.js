import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{b as x}from"./index-9f119f36.js";import{C as g}from"./ColorViewer-8fc72cbe.js";import{C as j}from"./ColorInput-5137a913.js";import{c as p}from"./convertHslToRgb-a60e269c.js";import{c as u}from"./convertRgbToHsl-ef3890c5.js";import{c as i}from"./convertRgbToHex-19fa32ed.js";import{c as f}from"./convertStringToRgb-e978940f.js";import{u as d}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const y=r=>{const e=typeof r=="string"?r:i(r),s=typeof r=="string"?f(r):r,{hue:n,saturation:o,lightness:l,alpha:a}=u(s);return[e,i(p({hue:(n+72)%360,saturation:o,lightness:l,alpha:a})),i(p({hue:(n+216)%360,saturation:o,lightness:l,alpha:a}))]},c=r=>{const[e,s]=m.useState(r.color),n=m.useMemo(()=>{try{return y(e)}catch{return[]}},[e]);return t.jsxs(t.Fragment,{children:[t.jsx(j,{label:"Color",value:e,onChange:s}),t.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(o=>t.jsx(g,{color:o},o))},e),t.jsx(x,{dark:!0,code:`
import { getColorSchemeSplitComplementary } from "@baggie/core";

const color = "${e}";

const scheme = getColorSchemeSplitComplementary(color);
/*
scheme = ${JSON.stringify(n,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function h(r){const e=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},d(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getcolorschemesplitcomplementary",children:"getColorSchemeSplitComplementary"}),`
`,t.jsx(e.p,{children:"Get a split complementary color scheme."}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{align:"left",children:"Parameter"}),t.jsx(e.th,{align:"left",children:"Type"}),t.jsx(e.th,{align:"center",children:"Required"}),t.jsx(e.th,{children:"Description"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{align:"left",children:t.jsx(e.strong,{children:"color"})}),t.jsx(e.td,{align:"left",children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{align:"center",children:"✔"}),t.jsx(e.td,{children:"The base color."})]})})]}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{color:"#ffcc00"})]})}function G(r={}){const{wrapper:e}=Object.assign({},d(),r.components);return e?t.jsx(e,Object.assign({},r,{children:t.jsx(h,r)})):h(r)}export{G as default};
//# sourceMappingURL=getColorSchemeSplitComplementary-d7b8c71a.js.map
