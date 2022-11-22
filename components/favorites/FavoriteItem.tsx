import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Favorites.module.css";

type FaveItemProps = {
    id: number;
    thumbnail: string;
    title: string;
    issueNumber: number;
    removeFavorite: Function;
};

export default function FaveItem(props: FaveItemProps) {
    return (
        <div className={styles["faves__item"]}>
            <button
                className={styles["faves__item-remove-button"]}
                aria-label="remove favorite"
                onClick={() => props.removeFavorite(props.id)}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className={styles["faves__item-img-cont"]}>
                <Image
                    className={styles["faves__item-img"]}
                    src={props.thumbnail}
                    fill
                    alt={`${props.title} cover iamge`}
                    sizes="50px"
                />
            </div>

            <div className={styles["faves__item-content"]}>
                <h3 className={styles["faves__item-title"]}>{props.title}</h3>

                {props.issueNumber !== undefined && (
                    <span className={styles["faves__item-detail"]}>Issue: {props.issueNumber}</span>
                )}
            </div>
        </div>
    );
}
