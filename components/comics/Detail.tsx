import { ComicDeets } from "./Comic";
import styles from "../../styles/Comics.module.css";

export default function Detail(props: ComicDeets) {
    return (
        <ul className={styles["comic-item__detail-list"]}>
            {props.issueNumber !== undefined && (
                <li data-testid="issue-li">
                    <strong>Issue:</strong> {props.issueNumber}
                </li>
            )}
            {!!props.publishDate && (
                <li data-testid="publish-date-li">
                    <strong>Published:</strong> {props.publishDate}
                </li>
            )}
            {!!props.creators?.length && (
                <li data-testid="creators-li">
                    <strong>Creators:</strong>{" "}
                    {props.creators
                        .map((c) => c.name)
                        .filter((c) => c)
                        .join(", ")}
                </li>
            )}
        </ul>
    );
}
