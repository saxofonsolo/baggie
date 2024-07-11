import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as o}from"./index-BI7qbVC1.js";import{useMDXComponents as r}from"./index-C-_6Vi3R.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BzcpQEgg.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D2DNihGs.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function s(a){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"userefreshedtoday",children:"useRefreshedToday"}),`
`,e.jsx(t.p,{children:"A hook that helps you know if a component was refreshed today."}),`
`,e.jsx(t.p,{children:`This is useful in apps showing data that needs to change depending on the day.
Like the current opening hours of a restaurant.`}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"React (web):"}),`
`,e.jsx(o,{dark:!0,code:`
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
`,e.jsx(o,{dark:!0,code:`
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

`})]})}function g(a={}){const{wrapper:t}=Object.assign({},r(),a.components);return t?e.jsx(t,Object.assign({},a,{children:e.jsx(s,a)})):s(a)}export{g as default};
