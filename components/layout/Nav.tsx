import { Fragment, useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../context/global-context";
import styles from "../../styles/Header.module.css";

export default function Nav() {
    const context = useContext(GlobalContext);
    const navButtonClasses = [
        styles["header__nav-button"],
        context.navOpen && styles["header__nav-button--active"],
    ].filter((c) => c);
    const navClasses = [styles["header__nav"], context.navOpen && styles["header__nav--active"]].filter((c) => c);

    return (
        <Fragment>
            {context.mobile && (
                <button
                    className={navButtonClasses.join(" ")}
                    aria-label="open mobile navigation menu"
                    aria-controls="header-nav"
                    aria-expanded="false"
                >
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}
            <nav className={navClasses.join(" ")} id="header-nav" aria-hidden={!context.navOpen}>
                <Link href="/" className={styles["header__nav-link"]}>
                    Home
                </Link>
                <a
                    className={styles["header__nav-link"]}
                    href="https://www.inprnt.com/frames/kylejorve/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Shop
                </a>
            </nav>
        </Fragment>
    );
}
