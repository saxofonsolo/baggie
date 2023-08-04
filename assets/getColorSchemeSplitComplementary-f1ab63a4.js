import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{b as d}from"./index-0081e355.js";import{C as x}from"./ColorViewer-02e72d7a.js";import{C as g}from"./ColorInput-5137a913.js";import{c as p}from"./convertHslToRgb-a60e269c.js";import{c as j}from"./convertRgbToHsl-ef3890c5.js";import{c as i}from"./convertRgbToHex-19fa32ed.js";import{c as u}from"./convertStringToRgb-e978940f.js";import{u as h}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./isHexColor-1bfe6e6b.js";import"./convertColorNameToHex-5b896379.js";import"./InputWrapper-a637f81f.js";import"./convertRangePosition-216b6387.js";import"./getPositionBetween-b33d92a2.js";import"./getPercentageBetween-4e287335.js";const f=r=>{const o=typeof r=="string"?r:i(r),n=typeof r=="string"?u(r):r,{hue:t,saturation:s,lightness:l,alpha:a}=j(n);return[o,i(p({hue:(t+72)%360,saturation:s,lightness:l,alpha:a})),i(p({hue:(t+216)%360,saturation:s,lightness:l,alpha:a}))]},c=r=>{const[o,n]=m.useState(r.color),t=m.useMemo(()=>{try{return f(o)}catch{return[]}},[o]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{label:"Color",value:o,onChange:n}),e.jsx("div",{style:{marginTop:"25px",display:"flex",flexWrap:"wrap",gap:"10px"},children:t.map(s=>e.jsx(x,{color:s},s))},o),e.jsx(d,{dark:!0,code:`
import { getColorSchemeSplitComplementary } from "@baggie/core";

const color = "${o}";

const scheme = getColorSchemeSplitComplementary(color);
/*
scheme = ${JSON.stringify(t,null,4)}
*/
`})]})};try{c.displayName="Example",c.__docgenInfo={description:"",displayName:"Example",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}function G(r={}){const{wrapper:o}=Object.assign({},h(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},h(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getcolorschemesplitcomplementary",children:"getColorSchemeSplitComplementary"}),`
`,e.jsx(t.p,{children:"Get a split complementary color scheme."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"color"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{children:"The base color."})]})})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{color:"#ffcc00"})]})}}export{G as default};
//# sourceMappingURL=getColorSchemeSplitComplementary-f1ab63a4.js.map
