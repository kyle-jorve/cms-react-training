import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import styles from "../../styles/Comics.module.css";
import Detail from "./Detail";

export type Creator = {
    resourceURI: string;
    name: string;
    role: string;
};

export interface ComicDeets {
    issueNumber: number;
    publishDate: string;
    creators: Creator[];
}

export interface ComicProps extends ComicDeets {
    id: number;
    title: string;
    thumbnail: string;
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function Comic(props: ComicProps) {
    const [faved, setFaved] = useState(false);
    const publishDate = new Date(props.publishDate);
    const publishDateString = `${
        months[publishDate.getMonth()]
    } ${publishDate.getDate()}, ${publishDate.getFullYear()}`;

    function buttonClickHandler() {
        setFaved((prev) => !prev);
    }

    return (
        <article className={styles["comic-item"]} id={props.id.toString()}>
            <div>
                <h3>{props.title}</h3>

                <Detail issueNumber={props.issueNumber} publishDate={publishDateString} creators={props.creators} />
            </div>

            <div className={styles["comic-item__image-content"]}>
                <Image
                    src={props.thumbnail}
                    fill
                    alt={`${props.title} cover image`}
                    className={styles["comic-item__image"]}
                    sizes="(min-width: 1360px) 203px
                    (min-width: 1238px) 16.67vw
                    (min-width: 1035px) 20vw
                    (min-width: 832px) 25vw
                    (min-width: 640px) 33.33vw
                    40vw"
                />

                <Button id={props.id} title={props.title} favorited={faved} onClick={buttonClickHandler} />
            </div>
        </article>
    );
}
