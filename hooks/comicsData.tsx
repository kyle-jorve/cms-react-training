import { ComicProps } from "../components/comics/Comic";

const md5 = require("js-md5");
const timestamp = Date.now();
const privateKey = "8b0b77e9de2d9c2ef3b758bf067295ccf49cf23d";
const key = "25574eee910d7ebef6f7fa333a6a51d9";
const hash = md5(`${timestamp}${privateKey}${key}`);
const api = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${key}&hash=${hash}`;

export default function fetchData() {
    return fetch(api)
        .then((res) => {
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

            return res.json();
        })
        .then((data) => {
            let returnData: ComicProps[];

            data = data.data.results;

            returnData = data.map((result: any) => {
                return {
                    id: result.id,
                    title: result.title,
                    thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
                    issueNumber: result.issueNumber,
                    publishDate: result.dates.find((d: any) => d.type === "onsaleDate").date,
                    creators: result.creators.items,
                };
            });

            return returnData;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}
