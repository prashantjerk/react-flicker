import React, { useState, useEffect } from "react";
import "./App.css";
import "./Components/Search.css";
import "./Components/utils.css";
import SearchIcon from "@mui/icons-material/Search";
import Feed from "./Components/Feed";

function App() {
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState([
    {
      Title: "Forrest Gump",
      Year: "1994",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman Begins",
      Year: "2005",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spiderman",
      Year: "2012",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg",
    },
    {
      Title: "Avatar: The Way of Water",
      Year: "2022",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
    },
  ]);

  const API = "http://www.omdbapi.com/?apikey=83c91151&";
  const getMovie = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    if (movies.length === 0) {
      getMovie();
    }
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getMovie(search);
    }
  };

  return (
    <div className="app">
      <div className="search flex ai-center">
        <input
          type="text"
          value={search}
          placeholder="Enter a movie"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <SearchIcon onClick={() => getMovie(search)} />
      </div>
      <Feed movies={movies} key={movies} />
    </div>
  );
}

export default App;
