import{j as l}from"./jsx-runtime-CKrituN3.js";import{t as r,e as q,H as c}from"./index-BmGO6HUz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const N="_wrapper_1lq77_1",j="_header_1lq77_7",S="_label_1lq77_14",D="_labelRight_1lq77_19",w="_inputWrapper_1lq77_25",F="_helperText_1lq77_29",V="_invalid_1lq77_33",a={wrapper:N,header:j,label:S,labelRight:D,inputWrapper:w,helperText:F,invalid:V},o=e=>l.jsxs("div",{className:a.wrapper,children:[(e.label||e.labelRight)&&l.jsxs("div",{className:a.header,children:[e.label&&l.jsx("label",{htmlFor:e.labelForId,className:a.label,children:e.label}),e.labelRight&&l.jsx("div",{className:a.labelRight,children:e.labelRight})]}),l.jsx("div",{className:a.inputWrapper,children:e.children}),e.helperText&&l.jsx("div",{className:[a.helperText,e.invalid&&a.invalid].join(" "),children:e.helperText})]});try{o.displayName="InputWrapper",o.__docgenInfo={description:"",displayName:"InputWrapper",props:{helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},labelRight:{defaultValue:null,description:"",name:"labelRight",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelForId:{defaultValue:null,description:"",name:"labelForId",required:!1,type:{name:"string"}}}}}catch{}const k={component:o,args:{label:"",labelForId:"input-id",helperText:"",labelRight:"",invalid:!1,children:l.jsx("input",{readOnly:!0,placeholder:"Input",style:{width:"100%",boxSizing:"border-box"}})},argTypes:{label:{type:"string"},labelForId:{description:"**All inputs with a label should have an ID**, which also goes in the `for` attribute of the label in order to connect them.<br />If you can't think of one, use React's `useId()`"},helperText:{type:"string"},labelRight:{type:"string"},children:{control:"none"}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},t={args:{label:r(),labelRight:q(),helperText:c()}},n={args:{label:r()}},s={args:{label:r(),helperText:c()}},i={args:{label:r(),helperText:c(),invalid:!0}},d={args:{label:r(),labelRight:q()}};var p,h,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var v,T,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    helperText: randSentence(),
    invalid: true
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var y,W,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: randDatabase(),
    labelRight: randDatabaseType()
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const z=["WithEverything","WithLabel","WithHelperText","Invalid","WithLabelRight"];export{i as Invalid,t as WithEverything,s as WithHelperText,n as WithLabel,d as WithLabelRight,z as __namedExportsOrder,k as default};
