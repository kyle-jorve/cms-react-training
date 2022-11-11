import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import DefaultHead from "../components/layout/DefaultHead";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <DefaultHead />
            <Component {...pageProps} />
        </Fragment>
    );
}
