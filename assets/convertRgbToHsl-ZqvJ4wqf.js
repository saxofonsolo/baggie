const b=({red:r,green:f,blue:h,alpha:l=1})=>{const s=r/255,n=f/255,e=h/255,o=Math.max(s,n,e),a=Math.min(s,n,e),i=(o+a)/2,t=o-a,m=t===0?0:t/(1-Math.abs(2*i-1));let c=0;return t&&(o===s?c=(n-e)/t%6:o===n?c=(e-s)/t+2:o===e&&(c=(s-n)/t+4),c*=60),{hue:c,saturation:m,lightness:i,alpha:l}};export{b as c};
