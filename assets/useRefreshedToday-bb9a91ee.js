import{j as e}from"./jsx-runtime-4ca860c5.js";import{b as r}from"./index-9c98abcd.js";import{u as n}from"./index-e744116c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8ea59d05.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-6a5bd4ef.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function l(a={}){const{wrapper:s}=Object.assign({},n(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(o,{})})):o();function o(){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},n(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"userefreshedtoday",children:"useRefreshedToday"}),`
`,e.jsx(t.p,{children:"A hook that helps you know if a component was refreshed today."}),`
`,e.jsx(t.p,{children:`This is useful in apps showing data that needs to change depending on the day.
Like the current opening hours of a restaurant.`}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"React (web):"}),`
`,e.jsx(r,{dark:!0,code:`
import React, { useCallback, useEffect, useState } from "react";
import { useRefreshedToday } from "@baggie/react";

export const StoreItem = () => {
    const [storeData, setStoreData] = useState();
    const { wasRefreshedToday, resetRefreshDate, updateRefreshDate } =
        useRefreshedToday();

    const getStoreData = useCallback(() => {
        updateRefreshDate();

        fetch(...)
            .then((newData) => {
                setStoreData(newData);
            })
            .catch(() => {
                resetRefreshDate();
            })
    }, []);

    useEffect(() => {
        getStoreData();

        const onFocus = () => {
            if (!wasRefreshedToday()) {
                // Component has not been refreshed today - do it now
                getStoreData();
            }
        };

        window.addEventListener("focus", onFocus);
        return () => window.removeEventListener("focus", onFocus);
    }, [getStoreData, wasRefreshedToday]);

    return (...);
};

`}),`
`,e.jsx(t.p,{children:"React Native:"}),`
`,e.jsx(r,{dark:!0,code:`
import React, { useCallback, useEffect, useState } from "react";
import { AppState } from "react-native";
import { useRefreshedToday } from "@baggie/react";

export const StoreItem = () => {
    const [storeData, setStoreData] = useState();
    const { wasRefreshedToday, resetRefreshDate, updateRefreshDate } =
        useRefreshedToday();

    const getStoreData = useCallback(() => {
        updateRefreshDate();

        fetch(...)
            .then((newData) => {
                setStoreData(newData);
            })
            .catch(() => {
                resetRefreshDate();
            })
    }, []);

    useEffect(() => {
        getStoreData();

        const onFocus = AppState.addEventListener("change", (status) => {
            if (status === "active" && !wasRefreshedToday()) {
                // Component has not been refreshed today - do it now
                getStoreData();
            }
        });
        return () => onFocus.remove();
    }, [getStoreData, wasRefreshedToday]);

    return (...);
};

`})]})}}export{l as default};
//# sourceMappingURL=useRefreshedToday-bb9a91ee.js.map
