import React, { Fragment, useContext } from "react";
import GlobalContext from "../context/global-context";
import ComicsGrid from "../components/comics/ComicsGrid";
import Hero from "../components/layout/Hero";

export default function Home() {
    return (
        <Fragment>
            <Hero />
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
                <ComicsGrid />
            </div>
        </Fragment>
    );
}
