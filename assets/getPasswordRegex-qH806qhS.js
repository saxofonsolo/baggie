const l="!#$€%&§'()*+,./:;<=>?@[]\\^_`´{|}~¨-";function g(e){const a={...e,minLength:Math.max(0,typeof(e==null?void 0:e.minLength)=="number"?e.minLength:Math.min(8,(e==null?void 0:e.maxLength)||1/0)),minDigits:Math.max(0,typeof(e==null?void 0:e.minDigits)=="number"?e.minDigits:1,0),minLowercase:Math.max(0,typeof(e==null?void 0:e.minLowercase)=="number"?e.minLowercase:1,0),minUppercase:Math.max(0,typeof(e==null?void 0:e.minUppercase)=="number"?e.minUppercase:1,0),minSpecial:Math.max(0,typeof(e==null?void 0:e.minSpecial)=="number"?e.minSpecial:1,0),specialCharacters:(e==null?void 0:e.specialCharacters)||l,forbiddenCharacters:typeof(e==null?void 0:e.forbiddenCharacters)=="string"?e.forbiddenCharacters:"",allowUnicode:(e==null?void 0:e.allowUnicode)||!1},r=typeof a.maxLength=="number",c=a.allowUnicode?"\\p{Ll}":"[a-z]",m=a.allowUnicode?"\\p{Lu}":"[A-Z]",h=a.specialCharacters?a.specialCharacters.replace(/[\^\-\]\\]/g,"\\$&"):"";return new RegExp(`^${a.forbiddenCharacters?`(?!(?:.*[${a.forbiddenCharacters}].*){1,})`:""}(?=(.*${c}.*){${a.minLowercase},})(?=(.*${m}.*){${a.minUppercase},})(?=(.*\\d.*){${a.minDigits},})(?=(.*[${h}].*){${a.minSpecial},}).{${a.minLength},${r?Math.max(a.minLength,a.maxLength):""}}$`,a.allowUnicode?"u":"")}export{g,l as p};
