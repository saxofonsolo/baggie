import{j as n}from"./jsx-runtime-T-AYSyta.js";import"./index-Q-IP07kC.js";import"./_commonjsHelpers-1J56E-h6.js";const d="_progressCircle_nulpy_6",a="_rounded_nulpy_18",i="_notRounded_nulpy_36",s={progressCircle:d,rounded:a,notRounded:i},l=({centerComponent:r,...e})=>n.jsx("div",{className:[s.progressCircle,e.roundedEdges?s.rounded:s.notRounded].join(" "),style:{"--percentage":e.value,"--size":typeof e.size=="number"?`${e.size}px`:e.size,"--width":typeof e.width=="number"?`${e.width}px`:e.width,"--color":e.color,"--bgcolor":e.bgColor},children:r?r(e):null}),g={component:l,args:{value:.25,size:100,width:15,color:"#900",bgColor:"#FC0",roundedEdges:!0,centerComponent:({value:r})=>n.jsxs("b",{children:[Math.round(r*100),"%"]})},argTypes:{value:{type:{required:!0},table:{type:{summary:"number"}}},size:{description:"CSS: `--progress-circle-size`<hr />",table:{type:{summary:["number","string"],detail:"number will be converted to pixels"},defaultValue:{summary:"150"}}},width:{description:"CSS: `--progress-circle-width`<hr />",table:{type:{summary:["number","string"],detail:"number will be converted to pixels"},defaultValue:{summary:"10"}}},color:{description:"CSS: `--progress-circle-color`<hr />",table:{type:{summary:"string"},defaultValue:{summary:'"#7f7f7f"'}}},bgColor:{description:"CSS: `--progress-circle-bgcolor`<hr />",table:{type:{summary:"string"},defaultValue:{summary:'"#7f7f7f33"'}}},roundedEdges:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},centerComponent:{table:{type:{summary:"(props) => React.ReactNode)"}}}},parameters:{docs:{description:{component:"Wrap this around inputs and select boxes to give them a label and a helper text."}}}},o={args:{}},t={args:{value:.25,size:void 0,width:void 0,color:void 0,bgColor:void 0,roundedEdges:void 0,centerComponent:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.25,
    size: undefined,
    width: undefined,
    color: undefined,
    bgColor: undefined,
    roundedEdges: undefined,
    centerComponent: undefined
  }
}`,...t.parameters?.docs?.source}}};const p=["WithEverything","DefaultValues"];export{t as DefaultValues,o as WithEverything,p as __namedExportsOrder,g as default};
