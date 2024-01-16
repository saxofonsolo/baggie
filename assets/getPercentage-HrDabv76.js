import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{b as E}from"./index-CJNtjuy4.js";import{g as F}from"./getPercentage-7-KOYYRi.js";import{I as d}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as m}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const o=n=>{const[t,f]=i.useState(n.part),[s,b]=i.useState(n.percentage),[l,y]=i.useState(n.whole),[c,w]=i.useState(!0),[P,$,v]=i.useMemo(()=>{const r=typeof t=="number",h=typeof s=="number",j=typeof l=="number",C=r&&`const part = ${t};`,_=h&&`const percentage = ${s};`,D=j&&`const whole = ${l};`,a=F({part:t,percentage:s,whole:l},c),p=(h?s:a)*(c?100:1),g=c?"":", false",S=!r&&`
const part = getPercentage({ percentage, whole }${g});
// part = ${a}

// ${p}% of ${l} is ${a}`,A=!h&&`
const percentage = getPercentage({ part, whole }${g});
// percentage = ${a}

// ${t} of ${l} is ${p}%`,I=!j&&`
const whole = getPercentage({ percentage, part }${g});
// whole = ${a}

// ${t} is ${p}% of ${a}`;return[[C,_,D].filter(x=>x).join(`
`),[S,A,I].filter(x=>x).join(`
`),a]},[t,s,l,c]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[typeof t=="number"&&e.jsx(d,{label:"Part",labelForId:"part-input",children:e.jsx("input",{id:"part-input",type:"number",value:t,onChange:({target:r})=>f(r.valueAsNumber||0)})}),typeof s=="number"&&e.jsx(d,{label:"Percentage",labelForId:"percentage-input",children:e.jsx("input",{id:"percentage-input",type:"number",step:.01,value:s,onChange:({target:r})=>b(r.valueAsNumber||0)})}),typeof l=="number"&&e.jsx(d,{label:"Whole",labelForId:"whole-input",children:e.jsx("input",{id:"whole-input",type:"number",value:l,onChange:({target:r})=>y(r.valueAsNumber||0)})}),e.jsx(d,{label:typeof t!="number"?"Part":typeof s!="number"?"Percentage":typeof l!="number"?"Whole":"",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:v})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>w(r=>!r)})," ","Percentage as decimal"]}),e.jsx(E,{dark:!0,code:`
import { getPercentage } from "@baggie/core";

${P}
${$}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{part:{defaultValue:null,description:"",name:"part",required:!1,type:{name:"number"}},whole:{defaultValue:null,description:"",name:"whole",required:!1,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}}}}}catch{}function u(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentage",children:"getPercentage"}),`
`,e.jsx(t.p,{children:"Perform calculations with percentage."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"properties"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left"}),e.jsx(t.td,{align:"left",children:"Two of the three properties must be defined. The third will be calculated."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentageAsDecimal"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"true"})}),e.jsx(t.td,{align:"left"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Property"}),e.jsx(t.th,{align:"left",children:"Type"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"part"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"whole"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"percentage"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(t.p,{children:["Calculate Z when ",e.jsx(t.strong,{children:"X is Y% of Z"})]}),`
`,e.jsx(o,{percentage:.1,part:5}),`
`,e.jsxs(t.p,{children:["Calculate Z when ",e.jsx(t.strong,{children:"X% of Y is Z"})]}),`
`,e.jsx(o,{percentage:.1,whole:50}),`
`,e.jsxs(t.p,{children:["Calculate Z when ",e.jsx(t.strong,{children:"X of Y is Z%"})]}),`
`,e.jsx(o,{part:5,whole:50})]})}function z(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(u,n)})):u(n)}export{z as default};
