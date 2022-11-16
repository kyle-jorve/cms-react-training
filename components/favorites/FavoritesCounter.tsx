import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";

export default function FavoritesCounter() {
    return (
        <button className={styles["faves-counter"]} aria-label="show your favorites">
            <FontAwesomeIcon icon={faBoltLightning} />
            <span className={styles["faves-counter__text"]}>My Favorites</span>
            <span>(3)</span>
        </button>
    );
}
