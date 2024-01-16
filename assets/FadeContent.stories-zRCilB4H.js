import{j as W}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const C={top:"bottom",bottom:"top",left:"right",right:"left"},n=({children:s,direction:q,width:e})=>{const w=C[q],j=typeof e>"u"?"100%":typeof e=="string"?e:`${e}px`,k={width:"100%",maskImage:`linear-gradient(to ${w}, #0000, #000 ${j})`};return W.jsx("div",{style:k,children:s})};try{n.displayName="FadeContent",n.__docgenInfo={description:"",displayName:"FadeContent",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}}}}}catch{}const T={component:n,args:{direction:"right",children:W.jsx("div",{style:{minHeight:"50px",padding:"10px",background:"black",color:"white"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae consequuntur cum, cupiditate debitis delectus distinctio ea exercitationem fugit harum hic magni nemo omnis quisquam recusandae rem sapiente soluta unde!"})},argTypes:{direction:{type:"string"},width:{table:{type:{summary:["number","string"],detail:"number will be converted to pixels"},defaultValue:{summary:'"100%"'}}},children:{control:"none"}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},t={args:{direction:"right"}},r={args:{direction:"left"}},o={args:{direction:"top"}},a={args:{direction:"bottom"}},i={args:{direction:"right",width:30}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: "right"
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: "left"
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    direction: "top"
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,y,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    direction: "bottom"
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var _,v,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    direction: "right",
    width: 30
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const V=["Right","Left","Top","Bottom","WithWidth"];export{a as Bottom,r as Left,t as Right,o as Top,i as WithWidth,V as __namedExportsOrder,T as default};
