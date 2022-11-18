import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";
import FavoritesGrid from "./FavoritesGrid";

export interface FavoritesMenuProps {
    menuOpen: boolean;
    onMenuToggle: React.MouseEventHandler;
}

export default function FavoritesMenu(props: FavoritesMenuProps) {
    const context = useContext(GlobalContext);
    const menuID = "favorites-menu";

    return (
        <aside className={styles["faves"]}>
            {context.mobile && (
                <button
                    className={styles["faves__button"]}
                    aria-label="show your favorited comics"
                    aria-controls={menuID}
                    aria-expanded={props.menuOpen}
                    onClick={props.onMenuToggle}
                >
                    {props.menuOpen ? "Hide" : "Show"} Favorites
                    <FontAwesomeIcon icon={faBoltLightning} />
                </button>
            )}

            <FavoritesGrid
                id={menuID}
                menuOpen={props.menuOpen}
                onMenuToggle={props.onMenuToggle}
                ariaHidden={context.mobile ? !props.menuOpen : false}
            />
        </aside>
    );
}
