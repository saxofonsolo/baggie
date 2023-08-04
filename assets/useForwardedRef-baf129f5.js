import{j as e}from"./jsx-runtime-ffb262ed.js";import{b as o}from"./index-0081e355.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3849f53d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-ffc7e5ff.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function j(t={}){const{wrapper:r}=Object.assign({},a(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",strong:"strong",blockquote:"blockquote",code:"code",h2:"h2"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useforwardedref",children:"useForwardedRef"}),`
`,e.jsx(n.p,{children:"A hook to sync a forwarded ref with an internal ref."}),`
`,e.jsxs(n.p,{children:["This allows you to ",e.jsx(n.strong,{children:"use forwarded refs internally"})," in a component."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ESLint rule ",e.jsx(n.code,{children:"react-hooks/exhaustive-deps"}),` will tell you that
the ref returned by "useForwardedRef" is dynamic and necessary as a
dependency when used with `,e.jsx(n.code,{children:"useEffect"})," and ",e.jsx(n.code,{children:"useCallback"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"This is not true"}),`, as the ref is stable, but adding it as a dependency
will not cause any issues.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Using a forwarded ref inside a component"}),`
`,e.jsx(o,{dark:!0,code:`
import React, { forwardRef, useEffect } from "react";
import { useForwardedRef } from "@baggie/react";

interface Props {
    defaultValue: string;
    onChange: (newValue: string) => void;
}

export const CustomInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    // This is where the magic happens
    const inputRef = useForwardedRef(ref);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        // The ESLint rule react-hooks/exhaustive-deps will tell you that
        // the ref returned by "useForwardedRef" is dynamic and necessary as a dependency.
        // This is not true, as the ref is stable, but adding it as a dependency
        // will not cause any issues.
    }, [inputRef]);

    return (
        <input
            ref={inputRef}
            defaultValue={props.defaultValue}
            onChange={({ target }) => props.onChange(target.value)}
        />
    );
});

CustomInput.displayName = "CustomInput";
`}),`
`,e.jsx(n.p,{children:"Using a ref on the component above"}),`
`,e.jsx(o,{dark:!0,code:`
import React, { useRef, useState } from "react";
import { CustomInput } from "./components/CustomInput";

export const App = () => {
    const [inputValue, setInputValue] = useState("Lorem ipsum");
    const componentRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (componentRef.current) {
            console.log(componentRef.current.value());
        }
    }, []);

    return (
        <CustomInput
            ref={inputRef}
            defaultValue={inputValue}
            onChange={setInputValue}
        />
    );
});
`})]})}}export{j as default};
//# sourceMappingURL=useForwardedRef-baf129f5.js.map
