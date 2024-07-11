import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as i}from"./index-BI7qbVC1.js";import{useMDXComponents as r}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function a(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"replacetype",children:"ReplaceType"}),`
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
`})]})}function x(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(a,n)})):a(n)}export{x as default};
