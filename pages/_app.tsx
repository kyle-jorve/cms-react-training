import type { AppProps } from "next/app";
import DefaultHead from "../components/layout/DefaultHead";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { GlobalContextProvider } from "../context/global-context";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <DefaultHead />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </GlobalContextProvider>
    );
}
