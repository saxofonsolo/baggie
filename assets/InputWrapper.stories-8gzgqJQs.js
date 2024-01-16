import{j as r}from"./jsx-runtime-T-AYSyta.js";import{a as l,Z as d,H as c}from"./index-Ql3JdUw3.js";import"./index-Q-IP07kC.js";import"./_commonjsHelpers-1J56E-h6.js";const h="_wrapper_1lq77_1",p="_header_1lq77_7",b="_label_1lq77_14",g="_labelRight_1lq77_19",m="_inputWrapper_1lq77_25",u="_helperText_1lq77_29",x="_invalid_1lq77_33",a={wrapper:h,header:p,label:b,labelRight:g,inputWrapper:m,helperText:u,invalid:x},_=e=>r.jsxs("div",{className:a.wrapper,children:[(e.label||e.labelRight)&&r.jsxs("div",{className:a.header,children:[e.label&&r.jsx("label",{htmlFor:e.labelForId,className:a.label,children:e.label}),e.labelRight&&r.jsx("div",{className:a.labelRight,children:e.labelRight})]}),r.jsx("div",{className:a.inputWrapper,children:e.children}),e.helperText&&r.jsx("div",{className:[a.helperText,e.invalid&&a.invalid].join(" "),children:e.helperText})]}),y={component:_,args:{label:"",labelForId:"input-id",helperText:"",labelRight:"",invalid:!1,children:r.jsx("input",{readOnly:!0,placeholder:"Input",style:{width:"100%",boxSizing:"border-box"}})},argTypes:{label:{type:"string"},labelForId:{description:"**All inputs with a label should have an ID**, which also goes in the `for` attribute of the label in order to connect them.<br />If you can't think of one, use React's `useId()`"},helperText:{type:"string"},labelRight:{type:"string"},children:{control:"none"}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},t={args:{label:l(),labelRight:d(),helperText:c()}},n={args:{label:l()}},s={args:{label:l(),helperText:c()}},i={args:{label:l(),helperText:c(),invalid:!0}},o={args:{label:l(),labelRight:d()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    labelRight: randDatabaseType(),
    helperText: randSentence()
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: randDatabase()
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    helperText: randSentence()
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    helperText: randSentence(),
    invalid: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    labelRight: randDatabaseType()
  }
}`,...o.parameters?.docs?.source}}};const j=["WithEverything","WithLabel","WithHelperText","Invalid","WithLabelRight"];export{i as Invalid,t as WithEverything,s as WithHelperText,n as WithLabel,o as WithLabelRight,j as __namedExportsOrder,y as default};
