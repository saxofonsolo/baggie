import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as i}from"./index-BI7qbVC1.js";import{useMDXComponents as n}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(r){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},n(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usekeyboardheight",children:"useKeyboardHeight"}),`
`,e.jsx(t.p,{children:"A hook that returns the height of the virtual/soft keyboard (on iOS and Android)."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"customProperty"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean | string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})}),e.jsxs(t.td,{align:"left",children:["Set to ",e.jsx(t.code,{children:"true"})," or a string to add a CSS custom property (CSS variable)"]})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"Using the keyboard height in React:"}),`
`,e.jsx(i,{dark:!0,code:`
import React from "react";
import { useKeyboardHeight } from "@baggie/react";

export const App = () => {
    const keyboardHeight = useKeyboardHeight();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                bottom: \`\${keyboardHeight}px\`,
            }}
        >
            ...
        </div>
    );
};

`}),`
`,e.jsx(t.p,{children:"Using the keyboard height in CSS:"}),`
`,e.jsx(i,{dark:!0,code:`
import React from "react";
import { useKeyboardHeight } from "@baggie/react";

export const App = () => {
    useKeyboardHeight(true);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                bottom: "var(--keyboard-height)",
            }}
        >
            ...
        </div>
    );
};

`})]})}function b(r={}){const{wrapper:t}=Object.assign({},n(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{b as default};