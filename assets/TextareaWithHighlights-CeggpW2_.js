import{r as l,R as u}from"./index-CBqU2yxZ.js";function V(o,a=null){const g=l.useRef(a);return l.useEffect(()=>{if(o)if(typeof o=="function"){o(g.current);return}else o.current=g.current}),g}const _=(o,a)=>l.useMemo(()=>{if(!a)return[];const{ranges:g,regexes:i,strings:p}=(Array.isArray(a)?typeof a[0]=="number"?[a]:a:[a]).reduce((e,t)=>(typeof t=="string"?e.strings.push(t):Array.isArray(t)&&typeof t[0]=="number"&&typeof t[1]=="number"?e.ranges.push(t):t instanceof RegExp&&e.regexes.push(t),e),{ranges:[],regexes:[],strings:[]});if(!g.length&&!i.length&&!p.length)return[];const f=[];for(let e=0;e<p.length;e++){let t=-1;for(;(t=o.indexOf(p[e],t+1))>=0;)f.push([t,t+p[e].length])}const m=[];for(let e=0;e<i.length;e++){const t=[];if(i[e].global){let s=-1,c;for(;(c=i[e].exec(o))!==null&&(!t.length||c.index>t[s][0]);)t.push([c.index,c.index+c[0].length]),s++}else{const s=i[e].exec(o);s&&t.push([s.index,s.index+s[0].length])}m.push(...t)}const y=[...g,...f,...m];if(!y.length)return[];const h=y.sort((e,t)=>e[0]-t[0]),r=[h[0]];for(let e=1;e<h.length;e++){const[t,s]=h[e],c=r[r.length-1];c[1]>=t?c[1]=Math.max(c[1],s):r.push(h[e])}return[o.slice(0,r[0][0]),...r.map(([e,t],s)=>u.createElement(u.Fragment,{key:`${e}:${t}`},u.createElement("mark",null,o.slice(e,t)),r[s+1]?o.slice(t,r[s+1][0]):void 0))]},[o,a]);(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`._highlightArea_4i7ca_1 {
  border-color: transparent !important;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: transparent !important;
  display: inline-block;
  font-family: monospace;
  letter-spacing: normal;
  line-height: normal;
  overflow: hidden !important;
  overflow-wrap: break-word;
  padding: 2px;
  pointer-events: none !important;
  position: absolute !important;
  -webkit-rtl-ordering: logical;
  text-align: start;
  text-indent: 0;
  text-transform: none;
  white-space: pre-wrap;
  word-spacing: normal;
  writing-mode: horizontal-tb;
  z-index: 1 !important;
}
._highlightArea_4i7ca_1 mark {
  color: inherit !important;
  word-wrap: inherit !important;
}`)),document.head.appendChild(o)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();const v="_highlightArea_4i7ca_1",A={highlightArea:v},S=l.forwardRef(({highlights:o,onChange:a,onScroll:g,...i},p)=>{var w,k;const[f,m]=l.useState(String(i.value||i.defaultValue||"")),[y,h]=l.useState(),r=l.useRef(null),e=V(p),t=_(f,o),s=l.useCallback(n=>{m(n.target.value),a&&a(n)},[a]),c=l.useCallback(n=>{if(r!=null&&r.current){const d=n.target;r.current.scrollLeft=d.scrollLeft,r.current.scrollTop=d.scrollTop}g&&g(n)},[g]),x=l.useCallback(n=>{if(r!=null&&r.current&&n){const d=n.borderBoxSize[0].inlineSize,z=n.borderBoxSize[0].blockSize;r.current.style.width=`${d}px`,r.current.style.height=`${z}px`}},[]),b=l.useCallback(()=>{const n=window.getComputedStyle(e.current),d={font:n.getPropertyValue("font"),letterSpacing:n.getPropertyValue("letter-spacing"),whiteSpace:n.getPropertyValue("white-space"),padding:n.getPropertyValue("padding"),border:n.getPropertyValue("border"),wordWrap:n.getPropertyValue("word-wrap"),verticalAlign:n.getPropertyValue("vertical-align"),textIndent:n.getPropertyValue("text-indent")};h(d)},[e]);return l.useEffect(()=>{if(e.current){b();const n=new ResizeObserver(d=>x(d[0]));return n.observe(e.current),()=>{n.disconnect()}}},[e,x,b]),u.createElement(u.Fragment,null,u.createElement("span",{ref:r,style:{...i.style,...y,backgroundColor:((w=i.style)==null?void 0:w.backgroundColor)||"#fff",background:(k=i.style)==null?void 0:k.background},className:A.highlightArea,"aria-hidden":!0},t),u.createElement("textarea",{ref:e,onChange:s,onScroll:c,...i,style:{...i.style,background:"transparent",position:"relative",zIndex:1}}))});S.displayName="TextareaWithHighlights";S.__docgenInfo={description:"",methods:[],displayName:"TextareaWithHighlights"};export{S as T};
