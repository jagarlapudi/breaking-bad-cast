import React, { useState, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
const Search = ({ getQuery }) => {
  const [queryText, setQueryText] = useState("");

  const ChangeHandler = debounce((text) => {
    getQuery(text);
    setQueryText(text);
  }, 2000);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <section>
      <form className="search-form">
        <input
          ref={inputRef}
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
