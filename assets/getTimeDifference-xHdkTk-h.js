import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{b as u}from"./index-y2kHJEFa.js";import{I as h}from"./InputWrapper-7qBv-a2h.js";import{useMDXComponents as x}from"./index-_VGcpBFS.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-WFQdlcL_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function j(r,t){let n=Math.abs(r-t);const i=n;n=Math.floor(n/1e3);const o=i-n*1e3,l=n%60;n=Math.floor(n/60);const a=n%60;n=Math.floor(n/60);const c=n%24;return n=Math.floor(n/24),{days:n,hours:c,minutes:a,seconds:l,milliseconds:o}}const d=r=>{const[t,n]=s.useState(r.from||Date.now()),[i,o]=s.useState(r.to||Date.now()),l=s.useRef(),a=new Date(t).toISOString().replace(/\.[0-9]+Z$/,""),c=new Date(i).toISOString().replace(/\.[0-9]+Z$/,""),f=s.useMemo(()=>j(t,i),[t,i]);return s.useEffect(()=>{if(!r.to)return l.current=setInterval(()=>o(Date.now()),1e3),()=>clearInterval(l.current)},[r.to]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(h,{label:"From time",labelForId:"from-input",children:e.jsx("input",{id:"from-input",type:"datetime-local",value:a,onChange:({target:m})=>n(m.valueAsNumber)})}),e.jsx(h,{label:"To time",labelForId:"to-input",children:e.jsx("input",{id:"to-input",type:"datetime-local",value:c,readOnly:!r.to,onChange:({target:m})=>o(m.valueAsNumber)})})]}),e.jsx(u,{dark:!0,code:`
import { getTimeDifference } from "@baggie/core";

const fromTimestampMs = ${t}; // ${a}
const toTimestampMs = ${i}; // ${c}

const difference = getTimeDifference(fromTimestampMs, toTimestampMs);
/*
difference = ${JSON.stringify(f,null,4)}
*/
`})]})};try{d.displayName="Example",d.__docgenInfo={description:"",displayName:"Example",props:{from:{defaultValue:null,description:"",name:"from",required:!1,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"number"}}}}}catch{}function p(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},x(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"gettimedifference",children:"getTimeDifference"}),`
`,e.jsx(t.p,{children:"Calculate the difference between two timestamps."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"fromTime"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"toTime"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"A timestamp in milliseconds."})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"From page load to now."}),`
`,e.jsx(d,{}),`
`,e.jsx(t.p,{children:"From a defined time to another defined time."}),`
`,e.jsx(d,{from:1523607256543,to:1533906712955})]})}function E(r={}){const{wrapper:t}=Object.assign({},x(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(p,r)})):p(r)}export{E as default};
