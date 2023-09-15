import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as f}from"./index-2fa589e3.js";import{r as o}from"./index-76fb7be0.js";import{I as m}from"./InputWrapper-a637f81f.js";import{T as y}from"./TextareaWithHighlights-d527524d.js";import{u as b}from"./index-a1cf9e47.js";import"./iframe-862c386b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const v=(r,t,l,n)=>{const j=typeof l>"u"?void 0:l<1?l-1:l,s=new RegExp("&#?[a-z0-9]+;|<[a-z]+[^>]*\\/>|<[a-z]+[^>]*>.?|.<\\/[a-z]+>|.?","gi"),u=r.match(s),d=u.slice(t,j).join(""),x=((n==null?void 0:n.document)||document).createElement("div");x.innerHTML=d;const a=x.innerHTML,c=n!=null&&n.verbose?u.slice(0,t).join("").length:0;return n!=null&&n.verbose?{output:a,realIndexStart:c,realIndexEnd:c+d.length}:a},h=r=>{const[t,l]=o.useState(r.defaultInput),[n,j]=o.useState(r.start),[s,u]=o.useState(r.end),[d,x]=o.useState(!1),{output:a,realIndexStart:c,realIndexEnd:g}=o.useMemo(()=>v(t,n,s,{verbose:!0}),[t,n,s]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(m,{label:"Input",labelForId:"input-input",children:e.jsx("div",{style:{position:"relative"},children:e.jsx(y,{id:"input-input",value:t,onChange:({target:i})=>l(i.value),style:{width:"100%",maxWidth:"360px"},highlights:[c,g],spellCheck:!1,rows:3})})}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(m,{label:"Index start",labelForId:"start-input",children:e.jsx("input",{id:"start-input",type:"number",value:n,onChange:({target:i})=>j(i.valueAsNumber)})}),e.jsx(m,{label:"Index end",labelForId:"end-input",children:e.jsx("input",{id:"end-input",type:"number",value:s,onChange:({target:i})=>u(i.valueAsNumber)})})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:d,onChange:()=>x(i=>!i)}),"Verbose"]})]}),e.jsx(f,{dark:!0,code:`
import { substringHtmlSafe } from "@baggie/core";

const input = \`${t.replace(/`/g,"\\`")}\`;

const indexStart = ${n||0};
const indexEnd = ${isNaN(s)?"undefined":s};

const output = substringHtmlSafe(input, indexStart, indexEnd);
/*
${d?`output = ${JSON.stringify({output:a,realIndexStart:c,realIndexEnd:g},null,4)}`:`output = \`${a}\``}
*/
`})]})};try{h.displayName="Example",h.__docgenInfo={description:"",displayName:"Example",props:{defaultInput:{defaultValue:null,description:"",name:"defaultInput",required:!0,type:{name:"string"}},start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"number"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"number"}}}}}catch{}function p(r){const t=Object.assign({h1:"h1",p:"p",strong:"strong",blockquote:"blockquote",h2:"h2",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},b(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"substringhtmlsafe",children:"substringHtmlSafe"}),`
`,e.jsxs(t.p,{children:[`Get part of a string between the start and end indexes, or to the end of the
string. `,e.jsx(t.strong,{children:`HTML entities are each counted as one character, and HTML tags are
ignored.`})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"HTML entities begin with an ampersand (&) and ends with a semicolon (;)."}),`
`,e.jsx(t.p,{children:`They are frequently used to display characters that reserved by HTML,
invisible or difficult to type.`}),`
`]}),`
`,e.jsx(t.h2,{id:"notice",children:"Notice"}),`
`,e.jsxs(t.p,{children:["If you're using this in an environment without a document (like ",e.jsx(t.strong,{children:"NodeJS"}),`),
`,e.jsx(t.a,{href:"#nodejs",children:"see this example"}),"."]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"The string to shorten."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"indexStart"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{align:"center",children:"✔"}),e.jsx(t.td,{align:"left",children:"Where the substring starts."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"indexEnd"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"number | undefined"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left",children:"Where the substring ends (not included)."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"}),e.jsx(t.td,{align:"left"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"document"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"Document"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"window.document"})}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"verbose"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{align:"left",children:"Enable verbose return value."})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(h,{defaultInput:"lorem &amp; <b>ipsum</b> dolor sit amet",start:0,end:12}),`
`,e.jsx(h,{defaultInput:"lorem &amp; <b>ipsum</b> dolor sit amet",start:7,end:-2}),`
`,e.jsx(h,{defaultInput:"<b>sit</b> & amet",start:1,end:5}),`
`,e.jsx(t.h2,{id:"nodejs",children:"NodeJS"}),`
`,e.jsxs(t.p,{children:["This tool creates a temporary ",e.jsx(t.code,{children:"<div />"}),` element, which the substring is inserted
into, in order to close unclosed HTML tags.`]}),`
`,e.jsxs(t.p,{children:["If you're using this in an environment without a document (like ",e.jsx(t.strong,{children:"NodeJS"}),`), you
must supply a document (e.g. `,e.jsx(t.a,{href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"nofollow noopener noreferrer",children:"jsdom"}),")."]}),`
`,e.jsx(f,{dark:!0,code:`
import { substringHtmlSafe } from "@baggie/core";
import { JSDOM } from jsdom";

const { window } = new JSDOM("<!DOCTYPE html>");

const input = "<div>...</div>";
const indexStart = 0;
const indexEnd = 125;

const substring = substringHtmlSafe(input, indexStart, indexEnd, {
    document: window.document,
});
`})]})}function q(r={}){const{wrapper:t}=Object.assign({},b(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(p,r)})):p(r)}export{q as default};
//# sourceMappingURL=substringHtmlSafe-dc514d17.js.map
