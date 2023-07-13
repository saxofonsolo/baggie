import{j as e}from"./jsx-runtime-94f6e698.js";import{b as o}from"./index-642316a4.js";import{u as i}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bf4e6f48.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function f(n={}){const{wrapper:a}=Object.assign({},i(),n.components);return a?e.jsx(a,Object.assign({},n,{children:e.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"replacetype",children:"ReplaceType"}),`
`,e.jsx(t.p,{children:"Replace one type with another - recursively."}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{dark:!0,language:"ts",code:`
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
`})]})}}export{f as default};
//# sourceMappingURL=ReplaceType-88e64771.js.map
