import{c as s}from"./convertStringToRgb-HS4K7Din.js";function c(e){try{const{red:r,green:t,blue:n}=typeof e=="string"?s(e):e;return Math.sqrt(.299*(r*r)+.587*(t*t)+.114*(n*n))/2.55/100}catch{return 0}}export{c as g};
