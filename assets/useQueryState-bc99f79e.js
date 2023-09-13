import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as s}from"./index-9f119f36.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dbfea40b.js";import"../sb-preview/runtime.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usequerystate",children:"useQueryState"}),`
`,e.jsxs(t.p,{children:["A hook like ",e.jsx(t.code,{children:"useState"}),", but stored in the URL query string."]}),`
`,e.jsx(t.p,{children:`Storing the state in the URL query makes it possible to bookmark and share
links while keeping the state.`}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"key"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"defaultValue"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"string  |  null"})}),e.jsx(t.td,{align:"center"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"toggle"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"false"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"history"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"push" | "replace"'})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"replace"'})})]})]})]}),`
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

`})]})}function j(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{j as default};
//# sourceMappingURL=useQueryState-bc99f79e.js.map
