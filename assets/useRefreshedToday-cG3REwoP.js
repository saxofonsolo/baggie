import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{b as s}from"./index-6Pv_FbVv.js";import{u as r}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-gHzccT4x.js";import"../sb-preview/runtime.js";import"./index-g30A4r-R.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function o(a){const t=Object.assign({h1:"h1",p:"p",h2:"h2"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"userefreshedtoday",children:"useRefreshedToday"}),`
`,e.jsx(t.p,{children:"A hook that helps you know if a component was refreshed today."}),`
`,e.jsx(t.p,{children:`This is useful in apps showing data that needs to change depending on the day.
Like the current opening hours of a restaurant.`}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.p,{children:"React (web):"}),`
`,e.jsx(s,{dark:!0,code:`
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
`,e.jsx(s,{dark:!0,code:`
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

`})]})}function R(a={}){const{wrapper:t}=Object.assign({},r(),a.components);return t?e.jsx(t,Object.assign({},a,{children:e.jsx(o,a)})):o(a)}export{R as default};
//# sourceMappingURL=useRefreshedToday-cG3REwoP.js.map
