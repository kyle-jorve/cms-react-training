import { Fragment, useContext, useState } from "react";
import { ComicProps } from "./Comic";
import Comic from "./Comic";
import FilterBar from "./FilterBar";
import FavoritesMenu from "../favorites/FavoritesMenu";
import Paginator from "./Paginator";
import GlobalContext from "../../context/global-context";
import styles from "../../styles/Comics.module.css";

type ComicsGridProps = {
    comics: ComicProps[];
};

export default function ComicsGrid(props: ComicsGridProps) {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [favoritesMenuOpen, setFavoritesMenuOpen] = useState(false);
    const context = useContext(GlobalContext);

    function filterMenuToggleHandler() {
        setFilterMenuOpen((prev) => {
            if (!prev) {
                setFavoritesMenuOpen(false);
            }

            return !prev;
        });
    }

    function favoritesMenuToggleHandler() {
        setFavoritesMenuOpen((prev) => {
            if (!prev) {
                setFilterMenuOpen(false);
            }

            return !prev;
        });
    }

    return (
        <section className={styles["comics"]}>
            {!!props.comics.length && (
                <Fragment>
                    {context.mobile ? (
                        <div className={styles["comics__header"]}>
                            <FilterBar onMenuToggle={filterMenuToggleHandler} menuOpen={filterMenuOpen} />
                            <FavoritesMenu onMenuToggle={favoritesMenuToggleHandler} menuOpen={favoritesMenuOpen} />
                        </div>
                    ) : (
                        <Fragment>
                            <FilterBar onMenuToggle={filterMenuToggleHandler} menuOpen={filterMenuOpen} />
                            <FavoritesMenu onMenuToggle={favoritesMenuToggleHandler} menuOpen={favoritesMenuOpen} />
                        </Fragment>
                    )}

                    <div className={styles["comics__grid"]}>
                        {props.comics.map((comic) => {
                            return (
                                <Comic
                                    key={comic.id}
                                    id={comic.id}
                                    title={comic.title}
                                    issueNumber={comic.issueNumber}
                                    publishDate={comic.publishDate}
                                    creators={comic.creators}
                                    thumbnail={comic.thumbnail}
                                />
                            );
                        })}
                    </div>

                    <Paginator />
                </Fragment>
            )}
        </section>
    );
}
