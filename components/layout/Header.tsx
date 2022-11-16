import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "../../styles/Header.module.css";
import FavoritesCounter from "../favorites/FavoritesCounter";

export default function Header() {
    return (
        <header className={styles.header}>
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
