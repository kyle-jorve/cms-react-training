import styles from "../../styles/Comics.module.css";

type DetailProps = {
    issue: string;
    published: string;
    creators: string[];
};

export default function Detail(props: DetailProps) {
    return (
        <dl className={styles["comic-item__detail-list"]}>
            <dt>Issue:</dt>
            <dd>{props.issue}</dd>

            <dt>Published:</dt>
            <dd>{props.published}</dd>

            <dt>Creators:</dt>
            <dd>{props.creators.join(", ")}</dd>
        </dl>
    );
}
