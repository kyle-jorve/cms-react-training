import React, { Fragment } from "react";
import ComicsGrid from "../components/comic/ComicsGrid";
import fetchData from "../hooks/comicsData";
import { ComicProps } from "../components/comic/Comic";

type HomeProps = {
    error?: boolean;
    comics?: ComicProps[];
};

export default function Home(props: HomeProps) {
    const isError = props.error || !props.comics?.length;

    return (
        <Fragment>
            <section className="hero">
                <h1 className="hero__title">Comic Closet</h1>
            </section>
            <div className="wrapper wrapper--intro">
                <h2 className="has-featured-flag">
                    <span className="featured-flag">New Comics!</span>
                    Coming Out Daily
                </h2>
                <p>
                    Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh
                    ultricies vehicula ut id elit.
                </p>
            </div>
            <div className="wrapper wrapper--content">
                {isError ? (
                    <p>An error occurred. Please try again or contact your administrator. 🙁</p>
                ) : !props.comics?.length ? (
                    <p>
                        <b>Loading...</b>
                    </p>
                ) : (
                    <ComicsGrid comics={props.comics} />
                )}
            </div>
        </Fragment>
    );
}

export async function getStaticProps() {
    const data: any = await fetchData();

    if (!data?.length) {
        return {
            props: {
                error: true,
            },
        };
    }

    return {
        props: {
            comics: data,
        },
    };
}
