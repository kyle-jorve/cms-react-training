import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import styles from "../../styles/Comics.module.css";
import Detail from "./Detail";

export type ComicProps = {
    id: string;
    title: string;
    issue: string;
    published: string;
    creators: string[];
    image: string;
};

export default function Comic(props: ComicProps) {
    const [faved, setFaved] = useState(false);

    function buttonClickHandler() {
        setFaved((prev) => !prev);
    }

    return (
        <article className={styles["comic-item"]} id={props.id}>
            <div className={styles["comic-item__content"]}>
                <h3 className={styles["comic-item__title"]}>{props.title}</h3>

                <Detail issue={props.issue} published={props.published} creators={props.creators} />
            </div>

            <div className={styles["comic-item__image"]}>
                <Image src={props.image} fill alt={`${props.title} cover image`} />

                <Button id={props.id} title={props.title} favorited={faved} onClick={buttonClickHandler} />
            </div>
        </article>
    );
}
