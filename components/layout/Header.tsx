import { useContext } from "react";
import GlobalContext from "../../context/global-context";
import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "../../styles/Header.module.css";
import FavoritesCounter from "../favorites/FavoritesCounter";

export default function Header() {
    const context = useContext(GlobalContext);

    return (
        <header className={`${styles.header}${context.navOpen ? ` ${styles["header--nav-open"]}` : ""}`}>
            <div className={styles["header__inner"]}>
                <Link href="/" className={styles["header__logo"]}>
                    <Logo />
                </Link>

                <div className={styles["header__actions-col"]}>
                    <Nav />
                    <FavoritesCounter />
                </div>
            </div>
        </header>
    );
}
