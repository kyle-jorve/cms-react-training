import styles from "../../styles/Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles["hero__title"]}>Comic Closet</h1>
        </section>
    );
}
