import { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TVShows = ({ name, url, tvShowsId }) => {
  const [tvShows, setTvShows] = useState([]);
  const backdropBase = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(url).then((response) => setTvShows(response.data.results));
  }, [url]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + tvShowsId);
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + tvShowsId);
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
          id={"slider" + tvShowsId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {tvShows &&
            tvShows.map(
              (tvShow) =>
                tvShow.name &&
                tvShow.backdrop_path && (
                  <div
                    key={tvShow.id}
                    className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer m-2"
                  >
                    <img
                      src={`${backdropBase}${tvShow.backdrop_path}`}
                      alt={`${tvShow.name} backdrop`}
                      className="w-full h-auto block"
                    />
                    <p className="text-center pt-2 text-xs sm:text-sm overflow-hidden">
                      {tvShow.name}
                    </p>
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

export default TVShows;
