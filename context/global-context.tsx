import React, { useState, useEffect, useCallback } from "react";
import { ComicProps } from "../components/comics/Comic";

type GlobalContextType = {
    [prop: string]: any;
};

export type FaveType = {
    id: number;
    title?: string;
    issueNumber?: number;
    thumbnail?: string;
};

type FiltersType = {
    characters?: number | null;
    creators?: number | null;
};

const breakpoint = 1024;
const resizeEvents = ["resize", "orientationchange"];
const GlobalContext = React.createContext<GlobalContextType>({
    mobile: true,
    navOpen: false,
    faves: [],
});

export function GlobalContextProvider(props: React.PropsWithChildren) {
    const [comics, setComics] = useState<ComicProps[]>([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [mobile, setMobile] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const [faves, setFaves] = useState<FaveType[]>([]);
    const [filters, setFilters] = useState<string>("{}");
    const storageKey = "faves";

    const resizeHandler = useCallback(() => {
        if (window.innerWidth >= breakpoint) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, []);

    function navToggleHandler() {
        setNavOpen((prev) => !prev);
    }

    useEffect(() => {
        const filtersObj = JSON.parse(filters);
        const fetchFilters = Object.keys(filtersObj).length ? `?filters=${filters}` : "";
        const pageQuery = `${fetchFilters.length ? "&" : "?"}page=${page}`;

        setLoading(true);

        // get comics data
        fetch(`/api/marvel${fetchFilters}${pageQuery}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }

                return res.json();
            })
            .then((data) => {
                setComics(data.data);
                setTotal(data.total);
                setLoading(false);
                setError(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, [filters, page]);

    useEffect(() => {
        let storedFaves: any = localStorage.getItem(storageKey);

        // handle resize
        resizeHandler();

        resizeEvents.forEach((ev) => window.addEventListener(ev, resizeHandler));

        // populate the favorites if there are any in local storage
        if (storedFaves) {
            storedFaves = JSON.parse(storedFaves);

            setFaves(storedFaves);
        }

        return () => {
            resizeEvents.forEach((ev) => window.removeEventListener(ev, resizeHandler));
        };
    }, [resizeHandler]);

    function updateFaves(fav: FaveType) {
        setFaves((prev: any) => {
            const faved = faves.some((el: any) => el.id === fav.id);
            let currentFaves = prev.slice();

            // remove favorite
            if (faved) {
                currentFaves.splice(
                    currentFaves.findIndex((el: any) => el.id === fav.id),
                    1,
                );
            }
            // add favorite
            else {
                currentFaves.push({
                    id: fav.id,
                    title: fav.title,
                    issueNumber: fav.issueNumber,
                    thumbnail: fav.thumbnail,
                });
            }

            localStorage.setItem(storageKey, JSON.stringify(currentFaves));

            return currentFaves;
        });
    }

    function updateFavesHandler(props: FaveType, remove = false) {
        if (remove) {
            updateFaves(props);
        } else if (faves.length === 10) {
            alert(`You've reached the max of 10 favorites.`);
            return;
        } else {
            updateFaves(props);
        }
    }

    function updateFiltersHandler(filter: FiltersType) {
        setFilters((prev) => {
            let returnFilter = JSON.parse(prev);

            if (filter.characters !== undefined) {
                returnFilter.characters = filter.characters;
            } else if (filter.creators !== undefined) {
                returnFilter.creators = filter.creators;
            }

            return JSON.stringify(returnFilter);
        });

        setPage(0);
    }

    return (
        <GlobalContext.Provider
            value={{
                comics,
                error,
                faves,
                filters,
                loading,
                mobile,
                navOpen,
                page,
                total,
                navToggleHandler,
                updateFavesHandler,
                updateFiltersHandler,
                setPage,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
