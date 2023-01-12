import Image from "next/image";
import heroBgImage from '../../public/images/hero-photo@2x.jpg';
import styles from "../../styles/Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles["hero__title"]}>Comic Closet</h1>

            <Image
                className={styles['hero__bg-img']}
                src={heroBgImage}
                fill
                alt=""
                aria-hidden="true"
            />
        </section>
    );
}
