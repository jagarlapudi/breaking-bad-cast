import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CardGrid from "./components/character/CardGrid";
import Search from "./components/ui/Search";
import "./App.css";
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchApiData = async () => {
      const items = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      //set data to localstorage
      localStorage.setItem("breaking-bad-characters", JSON.stringify(items));
      setItems(items.data);
      setIsLoading(false);
    };
    //localstorage not available, then call API
    if (!localStorage.getItem("breaking-bad-characters")) {
      console.log("Loading Fresh Copy of Data from API");
      fetchApiData();
    } else {
      //console.log("Data Loading from LocalStorage");
      const getLocalStorageData = JSON.parse(
        localStorage.getItem("breaking-bad-characters")
      );
      const filteredData = getLocalStorageData.data.filter(
        (character) =>
          character.name.toLowerCase().search(query.toLowerCase()) !== -1
      );
      setItems(filteredData);
      setIsLoading(false);
    }
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CardGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
