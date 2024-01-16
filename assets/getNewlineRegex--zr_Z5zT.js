const r=(n=!1)=>{const e=n?"[^\\S\\r\\n]*":"";return new RegExp(`${e}(\r
|\r|
)${e}`,"g")};export{r as g};
