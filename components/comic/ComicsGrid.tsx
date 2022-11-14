import { ComicProps } from "./Comic";
import Comic from "./Comic";
import styles from "../../styles/Comics.module.css";

type ComicsGridProps = {
    comics: ComicProps[];
};

export default function ComicsGrid(props: ComicsGridProps) {
    return (
        <section className={styles["comics-grid"]}>
            {!!props.comics.length &&
                props.comics.map((comic) => {
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
        </section>
    );
}
