import React, { useRef, useContext } from "react";
import GlobalContext from "../../context/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Filters.module.css";

const characterFilters = [
    {
        name: "Iron Man",
        id: 1009368,
    },
    {
        name: "Captain America",
        id: 1009220,
    },
    {
        name: "Thor",
        id: 1009664,
    },
    {
        name: "Deadpool",
        id: 1009268,
    },
    {
        name: "Scarlet Witch",
        id: 1009562,
    },
    {
        name: "Black Widow",
        id: 1009189,
    },
    {
        name: "Wasp",
        id: 1009707,
    },
    {
        name: "Gamora",
        id: 1010763,
    },
];

const creatorFilters = [
    {
        name: "Kate Leth",
        id: 12787,
    },
    {
        name: "Brian Michael Bendis",
        id: 24,
    },
    {
        name: "Stan Lee",
        id: 30,
    },
    {
        name: "Steve Ditko",
        id: 32,
    },
    {
        name: "Jack Kirby",
        id: 196,
    },
];

type FilterBarProps = {
    menuOpen: boolean;
    onMenuToggle: React.MouseEventHandler;
};

export default function FilterBar(props: FilterBarProps) {
    const context = useContext(GlobalContext);
    const characterField = useRef() as React.MutableRefObject<HTMLDivElement>;
    const creatorField = useRef() as React.MutableRefObject<HTMLDivElement>;
    const menuClasses = [styles["filters__menu"], props.menuOpen && styles["filters__menu--active"]].filter((c) => c);

    function changeHandler(event: React.ChangeEvent) {
        const target = event.currentTarget as HTMLSelectElement;
        const id = target.id;
        const value = target.value;

        if (!value || !value.trim().length) {
            if (id === "character-filter") characterField.current!.classList.remove("active");

            if (id === "creator-filter") creatorField.current!.classList.remove("active");

            return;
        }

        if (id === "character-filter") characterField.current!.classList.add("active");

        if (id === "creator-filter") creatorField.current!.classList.add("active");
    }

    return (
        <header className={styles["filters"]}>
            {context.mobile ? (
                <button
                    className={styles["filters__filter-button"]}
                    aria-label="expand filter menu"
                    aria-controls="filter-menu"
                    aria-expanded={props.menuOpen}
                    onClick={props.onMenuToggle}
                >
                    Filter
                    <FontAwesomeIcon icon={faFilter} />
                </button>
            ) : (
                "Filter by:"
            )}

            <div className={menuClasses.join(" ")} id="filter-menu" aria-hidden={!props.menuOpen}>
                <div className={"field"} ref={characterField}>
                    <label htmlFor="character-filter">Character</label>
                    <select id="character-filter" onChange={changeHandler}>
                        <option value=""></option>
                        {characterFilters.map((ch) => {
                            return (
                                <option key={ch.id} value={ch.id}>
                                    {ch.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={"field"} ref={creatorField}>
                    <label htmlFor="creator-filter">Creator</label>
                    <select id="creator-filter" onChange={changeHandler}>
                        <option value=""></option>
                        {creatorFilters.map((cr) => {
                            return (
                                <option key={cr.id} value={cr.id}>
                                    {cr.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </header>
    );
}
