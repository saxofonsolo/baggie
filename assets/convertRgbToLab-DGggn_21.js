function b({red:h,green:w,blue:M,alpha:r=1}){let e=h/255,o=w/255,a=M/255,l,t,p;return e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,l=(e*.4124+o*.3576+a*.1805)/.95047,t=e*.2126+o*.7152+a*.0722,p=(e*.0193+o*.1192+a*.9505)/1.08883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,p=p>.008856?Math.pow(p,1/3):7.787*p+16/116,{l:(116*t-16)/100,a:500*(l-t),b:200*(t-p),alpha:r}}export{b as c};