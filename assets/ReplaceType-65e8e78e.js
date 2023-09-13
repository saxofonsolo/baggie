import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as i}from"./index-9f119f36.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function a(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"replacetype",children:"ReplaceType"}),`
`,e.jsx(t.p,{children:"Replace one type with another - recursively."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{dark:!0,language:"ts",code:`
import { ReplaceType } from "@baggie/core";

interface Dictionary {
    title: string;
    amount: number;
    common: {
        ok: string;
        cancel: string;
    };
    screen1: {
        header: {
            text: string;
            quantity: number;
        };
    };
}

// Valid object

const dictionary: Dictionary = {
    title: "Headline",
    amount: 1,
    common: {
        ok: "Okay",
        cancel: "Cancel",
    },
    screen1: {
        header: {
            text: "Just a text",
            quantity: 9,
        },
    },
};

// Modify the Dictionary type to accept a function instead of strings

type Translations = ReplaceType<Dictionary, string, (language: "en" | "da") => string>;

// The type above matches the interface below

interface Translations {
    title: (language: "en" | "da") => string;
    amount: number;
    common: {
        ok: (language: "en" | "da") => string;
        cancel: (language: "en" | "da") => string;
    };
    screen1: {
        header: {
            text: (language: "en" | "da") => string;
            quantity: number;
        };
    };
}

// Valid object

const translations: Translations = {
    title: (language) => language === "da" ? "Overskrift" : "Headline",
    amount: 1,
    common: {
        ok: (language) => language === "da" ? "Fint" : "Okay",
        cancel: (language) => language === "da" ? "Annuller" : "Cancel",
    },
    screen1: {
        header: {
            text: (language) => language === "da" ? "Bare en tekst" : "Just a text",
            quantity: 9,
        },
    },
};
`})]})}function h(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{h as default};
//# sourceMappingURL=ReplaceType-65e8e78e.js.map
