import { Fragment, useEffect, useState } from "react";
import ComicsGrid from "../components/comic/ComicsGrid";
import { ComicProps } from "../components/comic/Comic";
import useFetchData from "../hooks/comicsData";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const getData = useFetchData;

    useEffect(() => {
        getData(
            (res: any) => {
                setData(res);
                setLoading(false);
            },
            () => setError(true),
        );
    }, [getData]);

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
                {loading ? (
                    <p>
                        <b>Loading...</b>
                    </p>
                ) : error ? (
                    <p>An error occurred. Please try again or contact your administrator. 🙁</p>
                ) : (
                    <ComicsGrid comics={data} />
                )}
            </div>
        </Fragment>
    );
}
