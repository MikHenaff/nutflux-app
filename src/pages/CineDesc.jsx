import { useEffect, useState } from "react";
import axios from "axios";
import urls from "../functions/urls";
import { GoPlus } from "react-icons/go";
import { useLocation } from "react-router-dom";

const CineDesc = () => {
  const location = useLocation();
  const cineShowId = location.state.id;
  const cineShowType = location.state.type;
  const cineShowUrl =
    cineShowType < 7
      ? urls.baseMovieUrlById + cineShowId + urls.endUrlById
      : urls.baseTVShowUrlById + cineShowId + urls.endUrlById;
  const [cineShow, setCineShow] = useState({});
  console.log(cineShow);
  const backdropBase = "https://image.tmdb.org/t/p/original/";
  //let genres;
  //for (let i = 0; i < cineShow?.genres?.length; i++) {
  //  genres.push(cineShow?.genres[i].name);
  //}
  //const genre = genres[0];

  //const genre = cineShow?.genres.map((genre) => genre.name);
  //console.log(cineShow.genres[0].name);

  //const genre = cineShow?.genres[0]?.name;
  //console.log(cineShow.genres[0].name);
  const runtime = `${Math.floor(cineShow.runtime / 60)} h ${
    cineShow.runtime % 60
  } m`;

  useEffect(() => {
    axios.get(cineShowUrl).then((response) => {
      setCineShow(response.data);
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
            //src={`${backdropBase}${cineShow?.backdrop_path}`}
            src={`${backdropBase}${cineShow?.backdrop_path}`}
            alt={cineShow?.title}
            className="w-full h-full object-cover"
          />
          <div className="sm:absolute top-0 left-0 bg-gradient-to-r from-black/100 w-full sm:w-2/3 lg:w-2/5 h-full flex flex-col justify-center items-center sm:items-start p-5 overflow-hidden">
            {/*<p className="text-2xl sm:text-4xl pb-5">{cineShow?.title}</p>*/}
            <p className="text-2xl sm:text-4xl pb-5">
              {cineShow?.title || cineShow?.name}
            </p>
            <p>{cineShow?.tagline}</p>
            <p className="text-sm sm:text-base text-[#ccc] pb-5">
              {cineShow?.release_date?.split("-")[0] ||
                cineShow?.first_air_date?.split("-")[0]}{" "}
              |{" "}
              {cineShow?.number_of_seasons !== undefined
                ? `${cineShow?.number_of_seasons} ${
                    cineShow?.number_of_seasons > 1 ? "seasons" : "season"
                  }`
                : runtime}{" "}
              {/*| {cineShow?.genres[0].name}*/}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CineDesc;
