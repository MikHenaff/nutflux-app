import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Main from "../components/Main";
import axios from "axios";
import urls from "../utils/urls";
import BGimg from "../assets/img/nutflux-bg.jpg";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [homeScrollHeight, setHomeScrollHeight] = useState(null);
  const { user } = UserAuth();

  const homeRef = useRef(null);

  useLayoutEffect(() => {
    setHomeScrollHeight(
      Math.floor(homeRef.current?.getBoundingClientRect().height)
    );
  }, [homeScrollHeight]);

  const backdropBase = "https://image.tmdb.org/t/p/original/";
  const bgRandomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(urls.popularMovies)
      .then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div ref={homeRef}>
      {user ? (
        <div
          className={`w-full h-full ${window.innerWidth < 500 && "pt-[55px]"}`}
        >
          <div className="relative">
            <img
              src={`${backdropBase}${bgRandomMovie?.backdrop_path}`}
              alt={bgRandomMovie?.title}
              className="w-full max-h-[80vh] object-scale-down"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
              <div className="flex flex-col justify-center items-center w-full bg-gradient-to-t from-black/100 overflow-hidden">
                <p className="text-md sm:text-xl py-2">
                  {bgRandomMovie?.title}
                </p>
              </div>
            </div>
          </div>
          <Main pageHeight={homeScrollHeight} />
        </div>
      ) : (
        <div className="relative w-full h-screen">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-black/90 to-black/40 w-full h-full flex justify-center items-center">
            <div
              className={`flex flex-col items-center w-4/5 text-xl sm:text-2xl xl:text-3xl ${
                window.innerWidth > window.innerHeight &&
                window.innerWidth < 900
                  ? "mt-0"
                  : "-mt-40"
              } `}
            >
              <p className="text-3xl sm:text-5xl xl:text-6xl text-center font-bold pb-3 sm:pb-7">
                Unlimited movies, TV shows, and more
              </p>
              <p className="pb-3 sm:pb-7">Watch anywhere.</p>
              <p>Ready for binge-watching?</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
