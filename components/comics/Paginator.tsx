import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Paginator.module.css";

export default function Paginator() {
    const context = useContext(GlobalContext);
    const dataLimit = 15;
    const pageEnd = context.page * dataLimit + context.comics.length;
    const pageText = `${context.page === 0 ? "1" : context.page * dataLimit + 1}-${pageEnd}`;

    function setPageHandler(event: React.MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        const direction = target.dataset.dir;

        if (direction === "prev") {
            if (context.page === 0) return;

            context.setPage((prev: number) => prev - 1);
        }

        if (direction === "next") {
            if (pageEnd === context.total) return;

            context.setPage((prev: number) => prev + 1);
        }
    }

    return (
        <div className={styles["pager"]}>
            <button
                className={styles["pager__button"]}
                aria-label="go to previous page"
                onClick={setPageHandler}
                data-dir="prev"
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <span className={styles["pager__text"]}>
                {pageText} of {context.total}
            </span>

            <button
                className={styles["pager__button"]}
                aria-label="go to next page"
                onClick={setPageHandler}
                data-dir="next"
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}
