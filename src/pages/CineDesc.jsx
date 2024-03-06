import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import axios from "axios";
import urls from "../functions/urls";

const CineDesc = () => {
  const [cineShow, setCineShow] = useState({});
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const location = useLocation();
  const cineShowId = location.state.id;
  const cineShowType = location.state.type;
  const cineShowUrl =
    cineShowType < 7
      ? urls.baseMovieUrlById + cineShowId + urls.endUrlById
      : urls.baseTVShowUrlById + cineShowId + urls.endUrlById;

  let actors =
    cast && cast.length > 2
      ? cast
          .filter((actor, idx) => {
            if (idx < 3) return actor;
          })
          .map((actor) => actor.name)
          .join(", ")
      : cast && cast.length > 1
      ? cast
          .filter((actor, idx) => {
            if (idx < 2) return actor;
          })
          .map((actor) => actor.name)
          .join(", ")
      : cast && cast.length > 0
      ? cast.name
      : false;

  let directors =
    cineShowType < 7
      ? crew
          .filter((person) => person.job === "Director")
          .map((person) => person.name)
      : false;
  directors =
    directors && directors.length > 1
      ? directors.join(", ")
      : directors && directors.length > 0
      ? directors
      : false;

  let creators =
    cineShowType > 6
      ? cineShow.created_by?.map((creator) => creator.name)
      : false;
  creators =
    creators && creators.length > 1
      ? creators.join(", ")
      : creators && creators.length > 0
      ? creators
      : false;

  const backdropBase = "https://image.tmdb.org/t/p/original/";

  const runtime = `${Math.floor(cineShow.runtime / 60)} h ${
    cineShow.runtime % 60
  } m`;

  useEffect(() => {
    axios.get(cineShowUrl).then((response) => {
      setCineShow(response.data);
      setGenre(response.data.genres[0].name);
      setCast(response.data.credits.cast);
      setCrew(response.data.credits.crew);
    });
  }, [cineShowUrl]);

  const truncateOverview = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  return (
    <div>
      <div className="w-full h-full">
        <div className="relative">
          <img
            src={`${backdropBase}${cineShow?.backdrop_path}`}
            alt={cineShow?.title}
            className="w-full h-full object-cover"
          />
          <div
            className="sm:absolute top-0 left-0 bg-gradient-to-r from-black/100 to-black/0 w-full 
          h-full flex flex-col justify-center items-center sm:items-start p-5 overflow-hidden"
          >
            <p className="text-2xl sm:text-4xl pb-5">
              {cineShow?.title || cineShow?.name}
            </p>
            <p>{cineShow?.tagline}</p>
            <p className="text-sm sm:text-base text-[#999] pb-5">
              {cineShow?.release_date?.split("-")[0] ||
                cineShow?.first_air_date?.split("-")[0]}{" "}
              |{" "}
              {cineShow?.number_of_seasons !== undefined
                ? `${cineShow?.number_of_seasons} ${
                    cineShow?.number_of_seasons > 1 ? "seasons" : "season"
                  }`
                : runtime}{" "}
              | {genre}
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
                ? cineShow?.overview
                : truncateOverview(cineShow?.overview, 150)}
            </p>
            {actors && (
              <p className="flex">
                <span className="text-[#999]">Starring:&nbsp;</span>
                {actors}
              </p>
            )}
            {cineShowType < 7
              ? directors && (
                  <p>
                    <span className="text-[#999]">Directed by:&nbsp;</span>
                    {directors}
                  </p>
                )
              : creators && (
                  <p>
                    <span className="text-[#999]">Created by:&nbsp;</span>
                    {creators}
                  </p>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CineDesc;
