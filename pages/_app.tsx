import type { AppProps } from "next/app";
import { Fragment } from "react";
import DefaultHead from "../components/layout/DefaultHead";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <DefaultHead />
            <Component {...pageProps} />
        </Fragment>
    );
}
