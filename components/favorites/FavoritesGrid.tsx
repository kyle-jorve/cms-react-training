import { useContext } from "react";
import Image from "next/image";
import GlobalContext from "../../context/global-context";
import { FavoritesMenuProps } from "./FavoritesMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";

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
                                <div className={styles["faves__item"]} key={fav.id}>
                                    <button
                                        className={styles["faves__item-remove-button"]}
                                        aria-label="remove favorite"
                                        onClick={() => removeFavoriteHandler(fav.id)}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>

                                    <div className={styles["faves__item-img-cont"]}>
                                        <Image
                                            className={styles["faves__item-img"]}
                                            src={fav.thumbnail}
                                            fill
                                            alt={`${fav.itlte} cover iamge`}
                                            sizes="50px"
                                        />
                                    </div>

                                    <div className={styles["faves__item-content"]}>
                                        <h3 className={styles["faves__item-title"]}>{fav.title}</h3>

                                        {fav.issueNumber !== undefined && (
                                            <span className={styles["faves__item-detail"]}>
                                                Issue: {fav.issueNumber}
                                            </span>
                                        )}
                                    </div>
                                </div>
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
