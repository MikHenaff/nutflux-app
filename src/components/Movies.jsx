import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Movies = ({ name, url, moviesId }) => {
  const [movies, setMovies] = useState([]);
  const backdropBase = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + moviesId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + moviesId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl sm:text-2xl m-2">{name}</h3>
      <div className="relative flex items-center">
        <FaChevronLeft
          onClick={() => slideLeft()}
          size={20}
          className="hidden lg:block cursor-pointer mx-2"
          style={{ color: "#e50914" }}
        />
        <div
          id={"slider" + moviesId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies &&
            movies.map(
              (movie) =>
                movie.title &&
                movie.backdrop_path && (
                  <div
                    key={movie.id}
                    className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer m-2"
                  >
                    <img
                      src={`${backdropBase}${movie.backdrop_path}`}
                      alt={`${movie.title} backdrop`}
                      className="w-full h-auto block"
                    />
                    <p className="text-center pt-2 text-xs">{movie.title}</p>
                  </div>
                )
            )}
        </div>
        <FaChevronRight
          onClick={() => slideRight()}
          size={20}
          className="hidden lg:block cursor-pointer mx-2"
          style={{ color: "#e50914" }}
        />
      </div>
    </div>
  );
};

export default Movies;
