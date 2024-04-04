import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CineShowRow = ({ rowId, name, url }) => {
  const [cineShows, setCineShows] = useState([]);
  const [scrollArrowLeft, setScrollArrowLeft] = useState(false);
  const [scrollArrowRight, setScrollArrowRight] = useState(true);

  const backdropBase = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(url).then((response) => setCineShows(response.data.results));
  }, [url]);

  const slider = document.getElementById("slider" + rowId);

  const checkScroll = () => {
    const container = document.getElementById("container");
    const maxWidthScroll = slider.scrollWidth - container.offsetWidth;

    slider.scrollLeft <= 0
      ? setScrollArrowLeft(false)
      : setScrollArrowLeft(true);

    slider.scrollLeft >= maxWidthScroll
      ? setScrollArrowRight(false)
      : setScrollArrowRight(true);
  };

  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 750;
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl sm:text-2xl m-2">{name}</h3>
      <div id="container" className="relative flex items-center">
        <FaChevronLeft
          onClick={() => {
            slideLeft();
            checkScroll();
            setScrollArrowRight(true);
          }}
          size={20}
          className={`hidden lg:block ${
            scrollArrowLeft ? "lg:block" : "lg:hidden"
          } cursor-pointer mx-2`}
          style={{ color: "#e50914" }}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {cineShows &&
            cineShows.map(
              (cineShow) =>
                (cineShow.title || cineShow.name) &&
                cineShow.backdrop_path && (
                  <Link
                    to="../cine-desc"
                    state={{
                      id: cineShow.id,
                      row: rowId,
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
          onClick={() => {
            slideRight();
            checkScroll();
            setScrollArrowLeft(true);
          }}
          size={20}
          className={`hidden lg:block ${
            scrollArrowRight ? "lg:block" : "lg:hidden"
          } cursor-pointer mx-2`}
          style={{ color: "#e50914" }}
        />
      </div>
    </div>
  );
};

export default CineShowRow;
