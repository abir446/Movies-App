import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Movie from "./Components/Movie";

const App = () => {
  const [searched, setSeached] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [img, setImg] = useState("");
  const [title, SetTitle] = useState("");
  const [released, setReleased] = useState("");
  const [rating, setRating] = useState({ source: "", value: 0 });
  const [director, setDirector] = useState("");
  const [awards, setAwards] = useState("");
  const [country, setCountry] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const handleSearch = () => {
    if (searchInput) {
      setSeached(!searched);
      axios
        .get("https://www.omdbapi.com/?t=" + searchInput + "&apikey=f1a3e243")
        .then((res) => {
          setImg(res.data.Poster);
          SetTitle(res.data.Title);
          setReleased(res.data.Released);
          setRating({
            source: res.data.Ratings[0].Source,
            value: res.data.Ratings[0].Value,
          });
          setDirector(res.data.Director);
          setAwards(res.data.Awards);
          setCountry(res.data.Country);
        })
        .catch((er) => {
          console.error(er);
          setIsCorrect(false);
        });
    }
  };

  return (
    <div className="container flex flex-col hover:bg-[#8383f133] bg-[#7474ca33] my-10 shadow shadow-md hover:shadow-2xl rounded-lg items-center justify-center mx-auto h-[80vh]">
      <h1 className="text-3xl font-semibold mb-3 text-black">
        SEARCH ANY MOVIE
      </h1>
      <div className="flex gap-3">
        {!searched && (
          <TextField
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
            id="outlined-basic"
            label="Movie Name"
            variant="outlined"
            color="secondary"
          />
        )}
        <Button onClick={handleSearch} color="secondary" variant="outlined">
          Search
        </Button>
      </div>
      {searched && isCorrect && searchInput && (
        <Movie
          country={country}
          awards={awards}
          director={director}
          source={rating.source}
          rated={rating.value}
          released={released}
          title={title}
          img={img}
        />
      )}
    </div>
  );
};

export default App;
