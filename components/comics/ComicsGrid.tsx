import { Fragment, useContext, useState } from "react";
import Comic, { ComicProps } from "./Comic";
import FilterBar from "./FilterBar";
import FavoritesMenu from "../favorites/FavoritesMenu";
import Paginator from "./Paginator";
import GlobalContext from "../../context/global-context";
import styles from "../../styles/Comics.module.css";

export default function ComicsGrid() {
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
            {context.loading ? (
                <p>
                    <b>Loading...</b>
                </p>
            ) : context.error ? (
                <p>An error occurred. Please try again or contact your administrator. 🙁</p>
            ) : !context.comics.length ? (
                <p>There are no comics that match your filters. 🙁</p>
            ) : (
                <Fragment>
                    <div className={styles["comics__grid"]}>
                        {context.comics.map((comic: ComicProps) => {
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
