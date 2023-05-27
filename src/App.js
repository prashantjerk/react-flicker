import React, { useState, useEffect } from "react";
import "./App.css";
import "./Components/Search.css";
import "./Components/utils.css";
import SearchIcon from "@mui/icons-material/Search";
import Feed from "./Components/Feed";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const API = "http://www.omdbapi.com/?apikey=83c91151&";

  const getMovie = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="app">
      <div className="search flex ai-center">
        <input
          type="text"
          value={search}
          placeholder="Enter a movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon onClick={() => getMovie(search)} />
      </div>
      <Feed movies={movies} key={movies.Title} />
    </div>
  );
}

export default App;
