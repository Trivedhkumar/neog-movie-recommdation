import { useState } from "react";
import "./styles.css";

export default function App() {
  const thrillerMovies = [
    {
      name: "Don't Worry Darling ",
      rating: "6.3"
    },
    {
      name: "Barbarian",
      rating: "7.6"
    },
    {
      name: "Fall",
      rating: "6.4"
    },
    {
      name: "Nope",
      rating: "7.0"
    },
    {
      name: "Where the Crawdads Sing",
      rating: "7.1"
    }
  ];
  const dramaMovies = [
    {
      name: "Pearl",
      rating: "7.5"
    },
    {
      name: "X",
      rating: "6.6"
    },
    {
      name: "The Invitation",
      rating: "5.2"
    },
    {
      name: "Speak No Evil",
      rating: "6.6"
    },
    {
      name: "Goodnight Mommy",
      rating: "5.6"
    }
  ];
  const warMovies = [
    {
      name: "Medieval",
      rating: "6.5"
    },
    {
      name: "All Quiet on the Western Front",
      rating: "7.7"
    },
    {
      name: "1917",
      rating: "8.2"
    },
    {
      name: "Wonder Woman",
      rating: "7.4"
    },
    {
      name: "Dunkirk",
      rating: "7.8"
    }
  ];
  const movieData = {
    Thrillers: thrillerMovies,
    Drama: dramaMovies,
    War: warMovies
  };
  const [activemovieData, setActiveMovieData] = useState(thrillerMovies);
  const [activeBtn, setActiveBtn] = useState(0);
  const handleClick = (movieType, index) => {
    setActiveBtn(index);
    setActiveMovieData(movieData[movieType]);
  };
  const movieTypes = Object.keys(movieData);
  return (
    <div>
      <div className="App">
        <h3>🎞 Good Movies</h3>
        <p>checkout the good movies, pick a genere to get started</p>
        <div className="mt-1">
          {movieTypes.map((el, i) => (
            <span
              onClick={() => handleClick(el, i)}
              key={i}
              className={`main-box ${activeBtn === i ? "primary-btn" : ""}`}
            >
              {el}
            </span>
          ))}
          <hr className="mt-1" />
        </div>
      </div>
      <div>
        {activemovieData.map((type, i) => (
          <div className="box">
            <p>{`Title - ${type?.name}`} </p>
            <p>
              Rating - <span>{`${type?.rating}⭐`}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
