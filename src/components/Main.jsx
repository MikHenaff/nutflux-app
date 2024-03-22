import urls from "../utils/urls";
import CinemaLibrary from "./CinemaLibrary";

const Main = () => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-10 sm:my-14 lg:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        Movies
      </h2>
      <CinemaLibrary
        cineId="1"
        name="Popular on Nutflux"
        url={urls.popularMovies}
      />
      <CinemaLibrary cineId="2" name="Top Rated" url={urls.topRatedMovies} />
      <CinemaLibrary cineId="3" name="Horror" url={urls.horrorMovies} />
      <CinemaLibrary cineId="4" name="Sci-Fi" url={urls.scifiMovies} />
      <CinemaLibrary cineId="5" name="Animation" url={urls.animationMovies} />
      <CinemaLibrary
        cineId="6"
        name="Documentaries"
        url={urls.documentaryMovies}
      />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-14 sm:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        TV Shows
      </h2>
      <CinemaLibrary
        cineId="7"
        name="Trending on Nutflux"
        url={urls.trendingTVShows}
      />
      <CinemaLibrary cineId="8" name="Top Rated" url={urls.topRatedTVShows} />
      <CinemaLibrary
        cineId="9"
        name="Sci-Fi & Fantasy"
        url={urls.scififantasyTVShows}
      />
      <CinemaLibrary cineId="10" name="Crime" url={urls.crimeTVShows} />
      <CinemaLibrary cineId="11" name="Drama" url={urls.dramaTVShows} />
      <CinemaLibrary
        cineId="12"
        name="Documentaries"
        url={urls.documentaryTVShows}
      />
    </>
  );
};

export default Main;
