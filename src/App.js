import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CardGrid from "./components/character/CardGrid";
import Search from "./components/ui/Search";
import "./app.css";
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchApiData = async () => {
      const items = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      //console.log(items);
      setItems(items.data);
      setIsLoading(false);
    };
    fetchApiData();
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
