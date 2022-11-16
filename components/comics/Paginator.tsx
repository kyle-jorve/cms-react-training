import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Paginator.module.css";

export default function Paginator(props: React.PropsWithChildren) {
    return (
        <div className={styles["pager"]}>
            <button className={styles["pager__button"]} aria-label="go to previous page">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <span className={styles["pager__text"]}>test of test</span>

            <button className={styles["pager__button"]} aria-label="go to next page">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}
