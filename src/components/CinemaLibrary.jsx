import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CinemaLibrary = ({ cineId, name, url }) => {
  const [cineShows, setCineShows] = useState([]);
  const backdropBase = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(url).then((response) => setCineShows(response.data.results));
  }, [url]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + cineId);
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + cineId);
    slider.scrollLeft = slider.scrollLeft + 750;
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
          id={"slider" + cineId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {cineShows &&
            cineShows.map(
              (cineShow) =>
                (cineShow.title || cineShow.name) &&
                cineShow.backdrop_path && (
                  <Link
                    to="../cine-desc"
                    //state={{
                    //  title: `${cineShow.title || cineShow.name}`,
                    //  backdrop_path: `${cineShow.backdrop_path}`,
                    //}}
                    state={{
                      id: cineShow.id,
                      type: cineId,
                    }}
                    key={cineShow.id}
                    className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer m-2"
                  >
                    <img
                      src={`${backdropBase}${cineShow.backdrop_path}`}
                      alt={`${cineShow.title || cineShow.name} backdrop`}
                      className="w-full h-auto block"
                    />
                    <p className="text-center pt-2 text-xs sm:text-sm overflow-hidden">
                      {cineShow.title || cineShow.name}
                    </p>
                  </Link>
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

export default CinemaLibrary;
