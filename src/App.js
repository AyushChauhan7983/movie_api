import React, { useEffect, useState } from "react";
import "./App.css";
import MenuExamplePointing from "./Navbar";
import CardExampleCard from "./Card";
import AddModal from "./AddModal";

function App() {
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([]);
  let [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://imdb-top-100-movies.p.rapidapi.com/";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "YOUR_API_KEY",
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMovies(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addMovie = (movie) => {
    setMovies([movie, ...movies]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const updateMovie = (id, updatedMovie) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, ...updatedMovie } : movie
      )
    );
    setCurrentMovie(null);
  };

  return (
    <div className="App">
      <MenuExamplePointing search={search} setSearch={setSearch} />
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <AddModal onAddMovie={addMovie} />
      </div>
      <div className="movie-container">
        {(search.length > 0 ? filteredMovies : movies).map((movie) => (
          <div className="movie-card" key={movie.id}>
            <CardExampleCard
              id={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
              year={movie.year}
              removeMovie={removeMovie}
              updateMovie={updateMovie}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
