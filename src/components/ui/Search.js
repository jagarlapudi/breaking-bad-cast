import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [queryText, setQueryText] = useState("");

  const ChangeHandler = (e) => {
    setQueryText(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <section>
      <form className="search-form">
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          autoFocus
          onChange={ChangeHandler}
        />
      </form>
    </section>
  );
};

export default Search;
