import { useContext } from "react";
import GlobalContext from "../../context/global-context";
import { FavoritesMenuProps } from "./FavoritesMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";
import FaveItem from "./FavoriteItem";

interface FavoritesGridProps extends FavoritesMenuProps {
    ariaHidden: boolean;
    id: string;
}

export default function FavoritesGrid(props: FavoritesGridProps) {
    const context = useContext(GlobalContext);
    const menuClasses = [styles["faves__menu"], props.menuOpen && styles["faves__menu--active"]].filter((c) => c);

    function removeFavoriteHandler(id: number) {
        context.updateFavesHandler(
            {
                id,
            },
            true,
        );
    }

    return (
        <div className={menuClasses.join(" ")} id={props.id} aria-hidden={props.ariaHidden}>
            <div className={styles["faves__menu-inner"]}>
                <h2 className={styles["faves__title"]}>
                    <FontAwesomeIcon icon={faBoltLightning} /> Favorites
                </h2>

                <div className={styles["faves__grid"]}>
                    {!!context.faves.length ? (
                        context.faves.map((fav: any) => {
                            return (
                                <FaveItem
                                    key={fav.id}
                                    id={fav.id}
                                    thumbnail={fav.thumbnail}
                                    title={fav.title}
                                    issueNumber={fav.issueNumber}
                                    removeFavorite={removeFavoriteHandler}
                                />
                            );
                        })
                    ) : (
                        <p>You don&apos;t have any favorites yet! 🙁</p>
                    )}
                </div>
            </div>

            <button className={styles["faves__close-button"]} onClick={props.onMenuToggle}>
                Hide Favorites <FontAwesomeIcon icon={faBoltLightning} />
            </button>
        </div>
    );
}
