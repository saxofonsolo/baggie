import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as l}from"./index-XmUqo-P7.js";import{u as r}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-aAGjdgm-.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function s(n){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"usequerymapper",children:"useQueryMapper"}),`
`,e.jsxs(t.p,{children:["A hook like ",e.jsx(t.code,{children:"useState"}),", but stored in the URL query string."]}),`
`,e.jsx(t.p,{children:`Storing the state in the URL query makes it possible to bookmark and share
links while keeping the state.`}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"T"})," is a generic type - it can be whatever you want"]}),`
`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Parameter"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"center",children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"valueToParams"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"(value: T) => [key: string, value: string][]"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"paramsToValue"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"(params: [key: string, value: string][]) => T"})}),e.jsx(t.td,{align:"center",children:"✔"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"options"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"object"})}),e.jsx(t.td,{align:"center"})]})]})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{align:"left",children:"Option"}),e.jsx(t.th,{align:"left",children:"Type"}),e.jsx(t.th,{align:"left",children:"Default value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"defaultValue"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:"T"})}),e.jsx(t.td,{align:"left"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{align:"left",children:e.jsx(t.strong,{children:"history"})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"push" | "replace"'})}),e.jsx(t.td,{align:"left",children:e.jsx(t.code,{children:'"replace"'})})]})]})]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{dark:!0,code:`
import React, { useCallback } from "react";
import { QueryMapperParams, useQueryMapper } from "@baggie/react";

type Selections = {
    size: "small" | "medium" | "large";
    color: string;
    amount: number;
}

function valueToParams(value: Selections): QueryMapperParams {
    return Object.entries(value);
}

function paramsToValue(params: QueryMapperParams): Selections {
    return {
      size: params.find(([key, value]) => key === "size")?.[1] as Selections["size"],
      color: params.find(([key, value]) => key === "color")?.[1],
      amount: parseInt(params.find(([key, value]) => key === "amount")?.[1]) || 0,
    };
}

export const App = () => {
    const [selections, setSelections] = useQueryMapper(valueToParams, paramsToValue);

    const amountMinusOne = useCallback(() => {
        setSelections((prev) => {
            const previousAmount = prev.amount || 0;
            const newAmount = Math.max(0, previousAmount - 1);
            return { ...prev, amount: newAmount };
        });
    }, [setSelections]);

    const amountPlusOne = useCallback(() => {
        setSelections((prev) => {
          const previousAmount = prev.amount || 0;
          const newAmount = previousAmount + 1;
          return { ...prev, amount: newAmount };
      });
    }, [setSelections]);

    return (
        <article>
            <h2>Product name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <h3>Size</h3>
            <button
                style={{ fontWeight: selections.size === "small" ? "bold" : "normal" }}
                onClick={() => setSelections((prev) => ({ ...prev, size: "small" }))}
            >
                Small
            </button>
            <button
                style={{ fontWeight: selections.size === "medium" ? "bold" : "normal" }}
                onClick={() => setSelections((prev) => ({ ...prev, size: "medium" }))}
            >
                Medium
            </button>
            <button
                style={{ fontWeight: selections.size === "large" ? "bold" : "normal" }}
                onClick={() => setSelections((prev) => ({ ...prev, size: "large" }))}
            >
                Large
            </button>

            <h3>Color</h3>
            <button
                style={{ fontWeight: selections.color === "red" ? "bold" : "normal" }}
                onClick={() => setSelections((prev) => ({ ...prev, color: "red" }))}
            >
                Red
            </button>
            <button
                style={{ fontWeight: selections.color === "green" ? "bold" : "normal" }}
                onClick={() => setSelections((prev) => ({ ...prev, color: "green" }))}
            >
                Green
            </button>

            <h3>Amount</h3>
            <button onClick={amountMinusOne}>
                -
            </button>
            <input
                value={selections.amount}
                onChange={(event) => setSelections((prev) => ({ ...prev, amount: parseInt(event.target.value) }))}
            />
            <button onClick={amountPlusOne}>
                +
            </button>

            <h3>Reset</h3>
            <button onClick={() => setSelections({ size: null, color: null, amount: null })}>
                Reset selections
            </button>
        </article>
    );
};

`})]})}function j(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{j as default};
//# sourceMappingURL=useQueryMapper-52Px14cY.js.map
