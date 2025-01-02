import Fuse from "fuse.js";
import { useState } from "react";
import BlogSearchRecord from "./BlogSearchRecord";

export default function FuzzySearch({ data, keys }) {
  const [query, setQuery] = useState("");
  const options = {
    keys: keys,
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  };

  const records =
    query === ""
      ? data
      : new Fuse(data, options)
          .search(query)
          .map((result) => result.item)
          .slice(0, 10);

  return (
    <>
      <div class="search-wrapper">
        <input
          id="search"
          type="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          aria-hidden="true"
          class="search-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"></path>
        </svg>
      </div>
      {records.map((e, i) => (
        <BlogSearchRecord key={i.toString()} {...e} />
      ))}
    </>
  );
}
