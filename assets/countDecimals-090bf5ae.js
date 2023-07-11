const e=t=>{const r=typeof t=="string",s=r?t:t.toString(),o=r?parseInt(t,10):t;if(s.indexOf("e-")>-1){const n=s.split("e-");return parseInt(n[1],10)}if(Math.floor(o)!==t){const n=s.split(".");return n.length===2?n[1].length:0}return 0};export{e as c};
//# sourceMappingURL=countDecimals-090bf5ae.js.map
