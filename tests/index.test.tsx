import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Detail from "../components/comics/Detail";

describe("Detail component", () => {
    it("renders all comic details correctly", () => {
        const testData = {
            issueNumber: 4,
            publishDate: "Neverbruary 39, 3013",
            creators: [
                {
                    resourceURI: "blah blah blah",
                    name: "Test Testerson",
                    role: "a guy",
                },
                {
                    resourceURI: "totally a real URL",
                    name: "Dumb Idiot",
                    role: "the dumbest idiot",
                },
                {
                    resourceURI: "definitely click on this",
                    name: "Buttercup McButtface",
                    role: "a person",
                },
            ],
        };

        render(
            <Detail
                issueNumber={testData.issueNumber}
                publishDate={testData.publishDate}
                creators={testData.creators}
            />,
        );

        expect(screen.getByTestId("issue-li")).toBeInTheDocument();
        expect(screen.getByTestId("publish-date-li")).toBeInTheDocument();
        expect(screen.getByTestId("creators-li")).toBeInTheDocument();
    });
});
