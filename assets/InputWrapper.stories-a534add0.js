import{j as r}from"./jsx-runtime-ffb262ed.js";import{a as l,Z as q,H as p}from"./index-5e020d00.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const N="_wrapper_1lq77_1",j="_header_1lq77_7",S="_label_1lq77_14",D="_labelRight_1lq77_19",w="_inputWrapper_1lq77_25",F="_helperText_1lq77_29",V="_invalid_1lq77_33",a={wrapper:N,header:j,label:S,labelRight:D,inputWrapper:w,helperText:F,invalid:V},d=e=>r.jsxs("div",{className:a.wrapper,children:[(e.label||e.labelRight)&&r.jsxs("div",{className:a.header,children:[e.label&&r.jsx("label",{htmlFor:e.labelForId,className:a.label,children:e.label}),e.labelRight&&r.jsx("div",{className:a.labelRight,children:e.labelRight})]}),r.jsx("div",{className:a.inputWrapper,children:e.children}),e.helperText&&r.jsx("div",{className:[a.helperText,e.invalid&&a.invalid].join(" "),children:e.helperText})]});try{d.displayName="InputWrapper",d.__docgenInfo={description:"",displayName:"InputWrapper",props:{helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},labelRight:{defaultValue:null,description:"",name:"labelRight",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelForId:{defaultValue:null,description:"",name:"labelForId",required:!1,type:{name:"string"}}}}}catch{}const Z={component:d,args:{label:"",labelForId:"input-id",helperText:"",labelRight:"",invalid:!1,children:r.jsx("input",{readOnly:!0,placeholder:"Input",style:{width:"100%",boxSizing:"border-box"}})},argTypes:{label:{type:"string"},labelForId:{description:"**All inputs with a label should have an ID**, which also goes in the `for` attribute of the label in order to connect them.<br />If you can't think of one, use React's `useId()`"},helperText:{type:"string"},labelRight:{type:"string"},children:{control:"none"}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},t={args:{label:l(),labelRight:q(),helperText:p()}},n={args:{label:l()}},s={args:{label:l(),helperText:p()}},i={args:{label:l(),helperText:p(),invalid:!0}},o={args:{label:l(),labelRight:q()}};var c,h,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    labelRight: randDatabaseType(),
    helperText: randSentence()
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: randDatabase()
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,_,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    helperText: randSentence()
  }
}`,...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var v,T,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    helperText: randSentence(),
    invalid: true
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,W,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    labelRight: randDatabaseType()
  }
}`,...(I=(W=o.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const k=["WithEverything","WithLabel","WithHelperText","Invalid","WithLabelRight"];export{i as Invalid,t as WithEverything,s as WithHelperText,n as WithLabel,o as WithLabelRight,k as __namedExportsOrder,Z as default};
//# sourceMappingURL=InputWrapper.stories-a534add0.js.map
