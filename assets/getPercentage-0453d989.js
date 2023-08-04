import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{b as I}from"./index-2b4cce42.js";import{g as E}from"./getPercentage-4c125d06.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as m}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const o=s=>{const[n,d]=i.useState(s.part),[t,f]=i.useState(s.percentage),[l,b]=i.useState(s.whole),[c,y]=i.useState(!0),[w,P,$]=i.useMemo(()=>{const r=typeof n=="number",p=typeof t=="number",j=typeof l=="number",v=r&&`const part = ${n};`,C=p&&`const percentage = ${t};`,_=j&&`const whole = ${l};`,a=E({part:n,percentage:t,whole:l},c),g=(p?t:a)*(c?100:1),x=c?"":", false",D=!r&&`
const part = getPercentage({ percentage, whole }${x});
// part = ${a}

// ${g}% of ${l} is ${a}`,S=!p&&`
const percentage = getPercentage({ part, whole }${x});
// percentage = ${a}

// ${n} of ${l} is ${g}%`,A=!j&&`
const whole = getPercentage({ percentage, part }${x});
// whole = ${a}

// ${n} is ${g}% of ${a}`;return[[v,C,_].filter(u=>u).join(`
`),[D,S,A].filter(u=>u).join(`
`),a]},[n,t,l,c]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[typeof n=="number"&&e.jsx(h,{label:"Part",labelForId:"part-input",children:e.jsx("input",{id:"part-input",type:"number",value:n,onChange:({target:r})=>d(r.valueAsNumber||0)})}),typeof t=="number"&&e.jsx(h,{label:"Percentage",labelForId:"percentage-input",children:e.jsx("input",{id:"percentage-input",type:"number",step:.01,value:t,onChange:({target:r})=>f(r.valueAsNumber||0)})}),typeof l=="number"&&e.jsx(h,{label:"Whole",labelForId:"whole-input",children:e.jsx("input",{id:"whole-input",type:"number",value:l,onChange:({target:r})=>b(r.valueAsNumber||0)})}),e.jsx(h,{label:typeof n!="number"?"Part":typeof t!="number"?"Percentage":typeof l!="number"?"Whole":"",labelForId:void 0,children:e.jsx("div",{style:{padding:"5px 0"},children:$})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>y(r=>!r)})," ","Percentage as decimal"]}),e.jsx(I,{dark:!0,code:`
import { getPercentage } from "@baggie/core";

${w}
${P}
`})]})};try{o.displayName="Example",o.__docgenInfo={description:"",displayName:"Example",props:{part:{defaultValue:null,description:"",name:"part",required:!1,type:{name:"number"}},whole:{defaultValue:null,description:"",name:"whole",required:!1,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}}}}}catch{}function L(s={}){const{wrapper:n}=Object.assign({},m(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(d,{})})):d();function d(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},m(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getpercentage",children:"getPercentage"}),`
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
`,e.jsx(o,{part:5,whole:50})]})}}export{L as default};
//# sourceMappingURL=getPercentage-0453d989.js.map
