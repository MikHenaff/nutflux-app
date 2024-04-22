import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const List = ({ list, name }) => {
  const [scrollArrowLeft, setScrollArrowLeft] = useState(false);
  const [scrollArrowRight, setScrollArrowRight] = useState(false);
  const backdropBase = "https://image.tmdb.org/t/p/w500/";

  const checkScroll = () => {
    const slider = document.getElementById("slider");
    const container = document.getElementById("container");
    const maxWidthScroll = slider.scrollWidth - container.offsetWidth;

    slider.scrollLeft <= 0
      ? setScrollArrowLeft(false)
      : setScrollArrowLeft(true);

    maxWidthScroll > 0 ? setScrollArrowRight(true) : setScrollArrowRight(false);

    slider.scrollLeft >= maxWidthScroll
      ? setScrollArrowRight(false)
      : setScrollArrowRight(true);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const slider = document.getElementById("slider");

  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 750;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 750;
  };

  return (
    <div className="my-10">
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
          id="slider"
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {list &&
            list.map(
              (cineShow) =>
                (cineShow.title || cineShow.name) &&
                cineShow.img && (
                  <Link
                    to="../cine-desc"
                    state={{
                      id: cineShow.id,
                      type: cineShow.type,
                    }}
                    key={cineShow.id}
                    className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer m-2"
                  >
                    <img
                      src={`${backdropBase}${cineShow.img}`}
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
          } cursor-pointer mx-2 `}
          style={{ color: "#e50914" }}
        />
      </div>
    </div>
  );
};

export default List;
