import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as s}from"./index-CJNtjuy4.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-5P6ZPecu.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function i(n){const t=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usequerystate",children:"useQueryState"}),`
`,e.jsxs(t.p,{children:["A hook like ",e.jsx(t.code,{children:"useState"}),", but stored in the URL query string."]}),`
`,e.jsx(t.p,{children:`Storing the state in the URL query makes it possible to bookmark and share
links while keeping the state.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Be aware"}),` that you may experience problems, if you are running multiple
setter functions from different instances of this hook during the same
lifecycle. --- The last setter function to run in a lifecycle will overwrite
query params set by the previous setters.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"If you need something more flexible"}),", take a look at ",e.jsx(t.code,{children:"useQueryMapper"})," ",e.jsx(t.a,{href:"/?path=/docs/react-hooks-usequerymapper--docs",children:"here"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"key"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"defaultValue"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string  |  null"})}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"toggle"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"history"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"push" | "replace"'})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"replace"'})})]})]})]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"Basic usage"}),`
`,e.jsx(s,{dark:!0,code:`
import React from "react";
import { useQueryState } from "@baggie/react";

export const App = () => {
    const [size, setSize] = useQueryState("size");

    return (
        <article>
            <h2>Product name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <h3>Size</h3>
            <button
                className={size === "small" ? "active" : "inactive"}
                onClick={() => setSize("small")}
            >
                Small
            </button>
            <button
                className={size === "medium" ? "active" : "inactive"}
                onClick={() => setSize("medium")}
            >
                Medium
            </button>
            <button
                className={size === "large" ? "active" : "inactive"}
                onClick={() => setSize("large")}
            >
                Large
            </button>
        </article>
    );
};

`}),`
`,e.jsx(t.p,{children:"Advanced usage"}),`
`,e.jsx(s,{dark:!0,code:`
import React, { useCallback } from "react";
import { useQueryState } from "@baggie/react";

export const App = () => {
    const [size, setSize] = useQueryState("size", "small", { history: "push", toggle: true });
    const [color, setColor] = useQueryState("color", { history: "push" });
    const [amount, setAmount] = useQueryState("amount");

    const amountMinusOne = useCallback(() => {
        setAmount((prev) => {
            const previousAmount = parseInt(prev || "0");
            return Math.max(0, previousAmount - 1).toString();
        });
    }, [setAmount]);

    const amountPlusOne = useCallback(() => {
        setAmount((prev) => {
            const previousAmount = parseInt(prev || "0");
            return (previousAmount + 1).toString();
        });
    }, [setAmount]);

    return (
        <article>
            <h2>Product name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <h3>Size</h3>
            <button
                className={size === "small" ? "active" : "inactive"}
                onClick={() => setSize("small")}
            >
                Small
            </button>
            <button
                className={size === "medium" ? "active" : "inactive"}
                onClick={() => setSize("medium")}
            >
                Medium
            </button>
            <button
                className={size === "large" ? "active" : "inactive"}
                onClick={() => setSize("large")}
            >
                Large
            </button>

            <h3>Color</h3>
            <button
                className={color === "red" ? "active" : "inactive"}
                onClick={() => setColor("red", { toggle: true })}
            >
                Red
            </button>
            <button
                className={color === "green" ? "active" : "inactive"}
                onClick={() => setColor("green", { toggle: true })}
            >
                Green
            </button>

            <h3>Amount</h3>
            <button onClick={amountMinusOne}>
                -
            </button>
            <input
                value={amount || "0"}
                onChange={(event) => setAmount(event.target.value.trim())}
            />
            <button onClick={amountPlusOne}>
                +
            </button>
        </article>
    );
};

`})]})}function g(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{g as default};
