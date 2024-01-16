import{j as o}from"./jsx-runtime-T-AYSyta.js";import{H as d}from"./index-Ql3JdUw3.js";import"./index-Q-IP07kC.js";import"./_commonjsHelpers-1J56E-h6.js";const c=({condition:e,wrapper:t,wrapperFallback:i,children:a})=>e?t(a):i?i(a):a,u={component:c,args:{condition:!1,wrapper:e=>o.jsxs("div",{style:{border:"10px solid #1e3643"},children:[o.jsx("header",{style:{background:"#fbaf00",padding:"10px"},children:"Header"}),o.jsx("div",{style:{padding:"10px"},children:e}),o.jsx("footer",{style:{background:"#fbaf00",padding:"10px"},children:"Footer"})]}),wrapperFallback:e=>o.jsx("div",{style:{border:"10px solid #25bd59"},children:e}),children:d({length:3}).join(" ")},argTypes:{wrapper:{description:"Used if `condition` is **true**"},wrapperFallback:{description:"Used if `condition` is **false**"}},parameters:{docs:{description:{component:"A component that wraps your content in another component, but only if a condition is met."}}}},r={args:{condition:!0}},s={args:{condition:!1}},n={args:{condition:!1,wrapperFallback:void 0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    condition: true
  }
}`,...r.parameters?.docs?.source},description:{story:"If the condition for showing the wrapper is `true`",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    condition: false
  }
}`,...s.parameters?.docs?.source},description:{story:"If the condition for showing the wrapper is `false` and `wrapperFallback` is defined",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    condition: false,
    wrapperFallback: undefined
  }
}`,...n.parameters?.docs?.source},description:{story:"If the condition for showing the wrapper is `false` with no fallback",...n.parameters?.docs?.description}}};const g=["ConditionTrue","WithFallback","ConditionFalse"];export{n as ConditionFalse,r as ConditionTrue,s as WithFallback,g as __namedExportsOrder,u as default};
