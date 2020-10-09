import React, { useState } from "react";
import debounce from "lodash/debounce";
const Search = ({ getQuery }) => {
  const [queryText, setQueryText] = useState("");

  const ChangeHandler = debounce((text) => {
    setQueryText(text);
    getQuery(text);
  }, 2000);
  return (
    <section>
      <form className="search-form">
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          autoFocus
          onChange={(e) => ChangeHandler(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
