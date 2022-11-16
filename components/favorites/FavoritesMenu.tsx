import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";

type FavoritesMenuProps = {
    menuOpen: boolean;
    onMenuToggle: React.MouseEventHandler;
};

export default function FavoritesMenu(props: FavoritesMenuProps) {
    const context = useContext(GlobalContext);
    const menuClasses = [styles["faves__menu"], props.menuOpen && styles["faves__menu--active"]].filter((c) => c);

    return (
        <aside className={styles["faves"]}>
            {context.mobile && (
                <button
                    className={styles["faves__button"]}
                    aria-label="show your favorited comics"
                    aria-controls="favorites-menu"
                    aria-expanded={props.menuOpen}
                    onClick={props.onMenuToggle}
                >
                    {props.menuOpen ? "Hide" : "Show"} Favorites
                    <FontAwesomeIcon icon={faBoltLightning} />
                </button>
            )}

            <div className={menuClasses.join(" ")} id="favorites-menu">
                <div className={styles["faves__menu-inner"]}>
                    <h2 className={styles["faves__title"]}>Favorites</h2>

                    <div className={styles["faves__grid"]}>
                        <p>You don&apos;t have any favorites yet! 🙁</p>
                    </div>
                </div>

                <button className={styles["faves__close-button"]} onClick={props.onMenuToggle}>
                    Hide Favorites <FontAwesomeIcon icon={faBoltLightning} />
                </button>
            </div>
        </aside>
    );
}
