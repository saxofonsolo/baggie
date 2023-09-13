import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as E}from"./index-9f119f36.js";import{g as F}from"./getPercentage-4c125d06.js";import{I as d}from"./InputWrapper-a637f81f.js";import{u as m}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const o=n=>{const[t,f]=i.useState(n.part),[s,b]=i.useState(n.percentage),[l,y]=i.useState(n.whole),[c,w]=i.useState(!0),[P,$,v]=i.useMemo(()=>{const r=typeof t=="number",h=typeof s=="number",u=typeof l=="number",C=r&&`const part = ${t};`,_=h&&`const percentage = ${s};`,D=u&&`const whole = ${l};`,a=F({part:t,percentage:s,whole:l},c),p=(h?s:a)*(c?100:1),g=c?"":", false",S=!r&&`
const part = getPercentage({ percentage, whole }${g});
// part = ${a}

// ${p}% of ${l} is ${a}`,A=!h&&`
const percentage = getPercentage({ part, whole }${g});
// percentage = ${a}

// ${t} of ${l} is ${p}%`,I=!u&&`
const whole = getPercentage({ percentage, part }${g});
// whole = ${a}

// ${t} is ${p}% of ${a}`;return[[C,_,D].filter(x=>x).join(`
`),[S,A,I].filter(x=>x).join(`
`),a]},[t,s,l,c]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[typeof t=="number"&&e.jsx(d,{label:"Part",labelForId:"part-input",children:e.jsx("input",{id:"part-input",type:"number",value:t,onChange:({target:r})=>f(r.valueAsNumber||0)})}),typeof s=="number"&&e.jsx(d,{label:"Percentage",labelForId:"percentage-input",children:e.jsx("input",{id:"percentage-input",type:"number",step:.01,value:s,onChange:({target:r})=>b(r.valueAsNumber||0)})}),typeof l=="number"&&e.jsx(d,{label:"Whole",labelForId:"whole-input",children:e.jsx("input",{id:"whole-input",type:"number",value:l,onChange:({target:r})=>y(r.valueAsNumber||0)})}),e.jsx(d,{label:typeof t!="number"?"Part":typeof s!="number"?"Percentage":typeof l!="number"?"Whole":"",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:v})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>w(r=>!r)})," ","Percentage as decimal"]}),e.jsx(E,{dark:!0,code:`
import { getPercentage } from "@baggie/core";

${P}
${$}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{part:{defaultValue:null,description:"",name:"part",required:!1,type:{name:"number"}},whole:{defaultValue:null,description:"",name:"whole",required:!1,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}}}}}catch{}function j(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentage",children:"getPercentage"}),`
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
`,e.jsx(o,{part:5,whole:50})]})}function L(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(j,n)})):j(n)}export{L as default};
//# sourceMappingURL=getPercentage-cf451d92.js.map
