export default async function getData(req: any, res: any) {
    const md5 = require("js-md5");
    const timestamp = Date.now();
    const hash = md5(
        `${timestamp}${process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY}${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}`,
    );
    const dataLimit = 15;
    let api = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${dataLimit}`;
    let apiFilters = "";
    let filters;
    let response;
    let data;
    let returnData;

    if (req.query.filters) {
        filters = JSON.parse(req.query.filters);

        if (filters.characters) {
            apiFilters += `&characters=${filters.characters}`;
        }

        if (filters.creators) {
            apiFilters += `&creators=${filters.creators}`;
        }
    }

    if (req.query.page) {
        apiFilters += `&offset=${Number(req.query.page) * dataLimit}`;
    }

    response = await fetch(`${api}${apiFilters}`);

    if (!response.ok) {
        res.status(response.status).json({
            message: response.statusText,
        });

        console.log(`${response.status} ${response.statusText}`);
    } else {
        data = await response.json();

        returnData = data.data.results.map((result: any) => {
            return {
                id: result.id,
                title: result.title,
                thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
                issueNumber: result.issueNumber,
                publishDate: result.dates.find((d: any) => d.type === "onsaleDate").date,
                creators: result.creators.items,
            };
        });

        res.status(200).json({
            data: returnData,
            total: data.data.total,
        });
    }
}
