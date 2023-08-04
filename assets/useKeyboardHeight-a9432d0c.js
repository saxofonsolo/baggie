import{j as e}from"./jsx-runtime-4ca860c5.js";import{b as n}from"./index-9c98abcd.js";import{u as s}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function u(r={}){const{wrapper:o}=Object.assign({},s(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},s(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usekeyboardheight",children:"useKeyboardHeight"}),`
`,e.jsx(t.p,{children:"A hook that returns the height of the virtual/soft keyboard (on iOS and Android)."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"}),e.jsx(t.th,{align:"left",children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"customProperty"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean | string"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})}),e.jsxs(t.td,{align:"left",children:["Set to ",e.jsx(t.code,{children:"true"})," or a string to add a CSS custom property (CSS variable)"]})]})})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"Using the keyboard height in React:"}),`
`,e.jsx(n,{dark:!0,code:`
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
`,e.jsx(n,{dark:!0,code:`
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

`})]})}}export{u as default};
//# sourceMappingURL=useKeyboardHeight-a9432d0c.js.map
