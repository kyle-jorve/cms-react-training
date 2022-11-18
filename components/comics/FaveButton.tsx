import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Comics.module.css";

type ButtonProps = {
    title: string;
    favorited: boolean;
    onClick: React.MouseEventHandler;
};

export default function FaveButton(props: ButtonProps) {
    const ariaLabel = `${props.favorited ? "remove" : "save"} ${props.title} ${
        props.favorited ? "from " : "to"
    } your favorites`;
    const cssClasses = [styles["comic-item__button"], props.favorited && styles["comic-item__button--active"]].filter(
        (s) => s,
    );

    return (
        <button className={cssClasses.join(" ")} aria-label={ariaLabel} onClick={props.onClick}>
            <FontAwesomeIcon icon={faBoltLightning} />
        </button>
    );
}
