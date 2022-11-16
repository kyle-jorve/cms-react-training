import React, { useState, useEffect, useCallback } from "react";

type GlobalContextType = {
    [prop: string]: any;
};

const breakpoint = 1024;
const resizeEvents = ["resize", "orientationchange"];
const GlobalContext = React.createContext<GlobalContextType>({
    mobile: true,
    navOpen: false,
});

export function GlobalContextProvider(props: React.PropsWithChildren) {
    const [mobile, setMobile] = useState(true);
    const [navOpen, setNavOpen] = useState(false);

    const resizeHandler = useCallback(() => {
        if (window.innerWidth >= breakpoint) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, []);

    function navToggleHandler() {
        setNavOpen((prev) => !prev);
    }

    useEffect(() => {
        resizeHandler();

        resizeEvents.forEach((ev) => window.addEventListener(ev, resizeHandler));

        return () => {
            resizeEvents.forEach((ev) => window.removeEventListener(ev, resizeHandler));
        };
    }, [resizeHandler]);

    return (
        <GlobalContext.Provider
            value={{
                mobile,
                navOpen,
                navToggleHandler,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
