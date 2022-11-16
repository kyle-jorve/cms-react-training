import Logo from "./Logo";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="/" className={styles["footer__logo"]}>
                <Logo />
            </Link>

            <p>
                <a>Privacy Policy</a> | <a>Terms of Service</a>
            </p>

            <p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
        </footer>
    );
}
