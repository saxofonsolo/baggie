import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as C}from"./index-CJNtjuy4.js";import{C as w}from"./ColorViewer-4nozgsQU.js";import{C as g}from"./ColorInput-p8BfKAZW.js";import{c as u}from"./convertStringToRgb-i6fsHOdH.js";import{c as A}from"./convertRgbToHex-k5LYStj_.js";import{c as M}from"./clamp-WHVc-ins.js";import{I as _}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as f}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./isHexColor-CJQw1lzT.js";import"./convertColorNameToHex-vzDEJkbb.js";import"./convertRangePosition-p6LuDhj_.js";import"./getPositionBetween-RxTUMZ_D.js";import"./getPercentageBetween-h4plVkI6.js";const v=(r,t,a=.5)=>{const n=M(a,{min:0,max:1}),l=typeof r=="string"?u(r):r,o=typeof t=="string"?u(t):t,c=l.red/255,i=o.red/255,d=l.green/255,m=o.green/255,b=l.blue/255,x=o.blue/255,y=typeof l.alpha=="number"?l.alpha:1,p=typeof o.alpha=="number"?o.alpha:1;return A({red:Math.round((i+(c-i)*n)*255),green:Math.round((m+(d-m)*n)*255),blue:Math.round((x+(b-x)*n)*255),alpha:Math.round((p+(y-p)*n)*1e3)/1e3})},h=r=>{const[t,a]=s.useState(r.colorA),[n,l]=s.useState(r.colorB),[o,c]=s.useState(r.weight),i=s.useMemo(()=>v(t,n,o),[t,n,o]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(g,{label:"Color A",value:t,onChange:a}),e.jsx(g,{label:"Color B",value:n,onChange:l}),e.jsxs(_,{label:"Weight",labelForId:"weight-input",children:[e.jsx("input",{id:"weight-input",type:"range",value:o,min:0,max:1,step:.01,onChange:({target:d})=>c(d.valueAsNumber)})," ",o.toFixed(2)]})]}),e.jsx("div",{style:{marginTop:"25px"},children:e.jsx(w,{color:i})}),e.jsx(C,{dark:!0,code:`
import { mixColors } from "@baggie/core";

const colorA = "${t}";
const colorB = "${n}";
const weight = ${o};

const mixed = mixColors(colorA, colorB, weight);
// mixed = ${i?`"${i}"`:"undefined"}
`})]})};try{h.displayName="Example",h.__docgenInfo={description:"",displayName:"Example",props:{colorA:{defaultValue:null,description:"",name:"colorA",required:!0,type:{name:"string"}},colorB:{defaultValue:null,description:"",name:"colorB",required:!0,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!0,type:{name:"number"}}}}}catch{}function j(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},f(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"mixcolors",children:"mixColors"}),`
`,e.jsx(t.p,{children:"Mix two colors together."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"colorA"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"}),e.jsx(t.td,{children:"The base color"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"colorB"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"}),e.jsx(t.td,{children:"The other base color"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"weight"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"0.5"})}),e.jsxs(t.td,{children:["The weight as a decimal number.",e.jsx("br",{}),"A larger weight indicates that more of ",e.jsx(t.code,{children:"colorA"})," should be used, and a smaller weight indicates that more of ",e.jsx(t.code,{children:"colorB"})," should be used."]})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(h,{colorA:"#ff0000",colorB:"#ffff00",weight:.5})]})}function K(r={}){const{wrapper:t}=Object.assign({},f(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(j,r)})):j(r)}export{K as default};
