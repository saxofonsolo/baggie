function y(r){return(!Array.isArray(r)||typeof r[0]=="number"?[r]:r).map(o=>Array.isArray(o)?{from:o[0],to:o[1]}:o)}export{y as n};
