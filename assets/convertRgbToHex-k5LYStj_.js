const i=({red:e,green:n,blue:r,alpha:o})=>{const t=typeof o=="number",c=t?o:1;return`#${[`0${e.toString(16)}`.slice(-2),`0${n.toString(16)}`.slice(-2),`0${r.toString(16)}`.slice(-2),t&&o<1?`0${Math.round(c*255).toString(16)}`.slice(-2):""].join("")}`};export{i as c};
//# sourceMappingURL=convertRgbToHex-k5LYStj_.js.map
