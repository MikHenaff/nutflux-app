import { useEffect, useState } from "react";
import axios from "axios";
import urls from "../functions/urls";
import { GoPlus } from "react-icons/go";

const MovieDesc = () => {
  const [movie, setMovie] = useState([]);
  const backdropBase = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(urls.popularMovies)
      .then((response) => setMovie(response.data.results[2]));
  }, []);

  const truncateOverview = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  return (
    <div>
      <div className="w-full h-full">
        <div className="relative">
          <img
            src={`${backdropBase}${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
          <div className="sm:absolute top-0 left-0 bg-gradient-to-r from-black/100 w-full sm:w-2/3 lg:w-2/5 h-full flex flex-col justify-center items-center sm:items-start p-5 overflow-hidden">
            <p className="text-2xl sm:text-4xl pb-5">{movie?.title}</p>
            <p className="text-sm sm:text-base text-[#ccc] pb-5">
              Released: {movie?.release_date}
            </p>
            <div className="flex pb-5">
              <button className="sm:text-lg text-black bg-white border rounded-sm px-3 sm:px-5 py-1 sm:py-2 mr-3">
                Play
              </button>
              <button className="flex justify-center items-center sm:text-lg border rounded-sm px-3 py-1 sm:py-2">
                <GoPlus className="text-xl sm:text-3xl mr-1" />
                My List
              </button>
            </div>
            <p className="sm:text-2xl">
              {window.innerWidth < 760
                ? movie?.overview
                : truncateOverview(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
