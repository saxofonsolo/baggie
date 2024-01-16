import{j as a}from"./jsx-runtime-T-AYSyta.js";import"./index-Q-IP07kC.js";import"./_commonjsHelpers-1J56E-h6.js";const u={top:"bottom",bottom:"top",left:"right",right:"left"},g=({children:n,direction:c,width:e})=>{const d=u[c],m=typeof e>"u"?"100%":typeof e=="string"?e:`${e}px`,p={width:"100%",maskImage:`linear-gradient(to ${d}, #0000, #000 ${m})`};return a.jsx("div",{style:p,children:n})},b={component:g,args:{direction:"right",children:a.jsx("div",{style:{minHeight:"50px",padding:"10px",background:"black",color:"white"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequuntur cum, cupiditate debitis delectus distinctio ea exercitationem fugit harum hic magni nemo omnis quisquam recusandae rem sapiente soluta unde!"})},argTypes:{direction:{type:"string"},width:{table:{type:{summary:["number","string"],detail:"number will be converted to pixels"},defaultValue:{summary:'"100%"'}}},children:{control:"none"}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},t={args:{direction:"right"}},r={args:{direction:"left"}},o={args:{direction:"top"}},i={args:{direction:"bottom"}},s={args:{direction:"right",width:30}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "left"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "top"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "bottom"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    width: 30
  }
}`,...s.parameters?.docs?.source}}};const x=["Right","Left","Top","Bottom","WithWidth"];export{i as Bottom,r as Left,t as Right,o as Top,s as WithWidth,x as __namedExportsOrder,b as default};
