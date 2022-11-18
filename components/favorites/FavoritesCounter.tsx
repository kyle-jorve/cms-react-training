import { useContext, useState } from "react";
import GlobalContext from "../../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";
import FavoritesGrid from "./FavoritesGrid";

export default function FavoritesCounter() {
    const [menuOpen, setMenuOpen] = useState(false);
    const context = useContext(GlobalContext);
    const menuID = "faves-counter-menu";

    return (
        <div className={styles["faves-counter"]}>
            <button
                className={styles["faves-counter__button"]}
                aria-label="show your favorites"
                aria-controls={menuID}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <FontAwesomeIcon icon={faBoltLightning} />
                <span className={styles["faves-counter__text"]}>My Favorites</span>
                <span>({context.faves.length})</span>
            </button>

            <FavoritesGrid
                id={menuID}
                menuOpen={menuOpen}
                ariaHidden={!menuOpen}
                onMenuToggle={() => setMenuOpen((prev) => !prev)}
            />
        </div>
    );
}
