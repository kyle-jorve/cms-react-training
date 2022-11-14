import { Fragment } from "react";
import ComicsGrid from "../components/comic/ComicsGrid";
import data from "../hooks/comicsData";

export default function Home() {
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
                <ComicsGrid comics={data} />
            </div>
        </Fragment>
    );
}
