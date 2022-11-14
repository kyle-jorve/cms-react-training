import { ComicDeets } from "./Comic";
import styles from "../../styles/Comics.module.css";

export default function Detail(props: ComicDeets) {
    return (
        <ul className={styles["comic-item__detail-list"]}>
            <li>
                <strong>Issue:</strong> {props.issueNumber}
            </li>

            <li>
                <strong>Published:</strong> {props.publishDate}
            </li>

            <li>
                <strong>Creators:</strong> {props.creators.map((c) => c.name).join(", ")}
            </li>
        </ul>
    );
}
