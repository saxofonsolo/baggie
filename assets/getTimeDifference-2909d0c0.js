import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{b as x}from"./index-2b4cce42.js";import{I as h}from"./InputWrapper-a637f81f.js";import{u as p}from"./index-a1cf9e47.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c7242bb1.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const u=(r,i)=>{let n=Math.abs(r-i);const t=n;n=Math.floor(n/1e3);const o=t-n*1e3,l=n%60;n=Math.floor(n/60);const a=n%60;n=Math.floor(n/60);const c=n%24;return n=Math.floor(n/24),{days:n,hours:c,minutes:a,seconds:l,milliseconds:o}},d=r=>{const[i,n]=s.useState(r.from||Date.now()),[t,o]=s.useState(r.to||Date.now()),l=s.useRef(),a=new Date(i).toISOString().replace(/\.[0-9]+Z$/,""),c=new Date(t).toISOString().replace(/\.[0-9]+Z$/,""),f=s.useMemo(()=>u(i,t),[i,t]);return s.useEffect(()=>{if(!r.to)return l.current=setInterval(()=>o(Date.now()),1e3),()=>clearInterval(l.current)},[r.to]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"From time",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"datetime-local",value:a,onChange:({target:m})=>n(m.valueAsNumber)})}),e.jsx(h,{label:"To time",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"datetime-local",value:c,readOnly:!r.to,onChange:({target:m})=>o(m.valueAsNumber)})})]}),e.jsx(x,{dark:!0,code:`
import { getTimeDifference } from "@baggie/core";

const fromTimestampMs = ${i}; // ${a}
const toTimestampMs = ${t}; // ${c}

const difference = getTimeDifference(fromTimestampMs, toTimestampMs);
/*
difference = ${JSON.stringify(f,null,4)}
*/
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!1,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"number"}}}}}catch{}function F(r={}){const{wrapper:i}=Object.assign({},p(),r.components);return i?e.jsx(i,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"gettimedifference",children:"getTimeDifference"}),`
`,e.jsx(t.p,{children:"Calculate the difference between two timestamps."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"fromTime"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"toTime"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"From page load to now."}),`
`,e.jsx(d,{}),`
`,e.jsx(t.p,{children:"From a defined time to another defined time."}),`
`,e.jsx(d,{from:1523607256543,to:1533906712955})]})}}export{F as default};
//# sourceMappingURL=getTimeDifference-2909d0c0.js.map
