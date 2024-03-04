import Movies from "./Movies";
import TVShows from "./TVShows";
import urls from "../functions/urls";
import MoviesAndTVShows from "./MoviesAndTVShows";

const Main = () => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-10 sm:my-14 lg:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        Movies
      </h2>
      {/*<Movies moviesId="1" name="Popular on Nutflux" url={urls.popularMovies} />
      <Movies moviesId="2" name="Top Rated" url={urls.topRatedMovies} />
      <Movies moviesId="3" name="Horror" url={urls.horrorMovies} />
      <Movies moviesId="4" name="Sci-Fi" url={urls.scifiMovies} />
      <Movies moviesId="5" name="Animation" url={urls.animationMovies} />
      <Movies moviesId="6" name="Documentaries" url={urls.documentaryMovies} />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-14 sm:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        TV Shows
      </h2>
      <TVShows
        tvShowsId="7"
        name="Trending on Nutflux"
        url={urls.trendingTVShows}
      />
      <TVShows tvShowsId="8" name="Top Rated" url={urls.topRatedTVShows} />
      <TVShows
        tvShowsId="9"
        name="Sci-Fi & Fantasy"
        url={urls.scififantasyTVShows}
      />
      <TVShows tvShowsId="10" name="Crime" url={urls.crimeTVShows} />
      <TVShows tvShowsId="11" name="Drama" url={urls.dramaTVShows} />
      <TVShows
        tvShowsId="12"
        name="Documentaries"
        url={urls.documentaryTVShows}
      />*/}
      <MoviesAndTVShows
        moviesId="1"
        name="Popular on Nutflux"
        url={urls.popularMovies}
      />
      <MoviesAndTVShows
        moviesId="2"
        name="Top Rated"
        url={urls.topRatedMovies}
      />
      <MoviesAndTVShows moviesId="3" name="Horror" url={urls.horrorMovies} />
      <MoviesAndTVShows moviesId="4" name="Sci-Fi" url={urls.scifiMovies} />
      <MoviesAndTVShows
        moviesId="5"
        name="Animation"
        url={urls.animationMovies}
      />
      <MoviesAndTVShows
        moviesId="6"
        name="Documentaries"
        url={urls.documentaryMovies}
      />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-14 sm:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        TV Shows
      </h2>
      <MoviesAndTVShows
        moviesId="7"
        name="Trending on Nutflux"
        url={urls.trendingTVShows}
      />
      <MoviesAndTVShows
        moviesId="8"
        name="Top Rated"
        url={urls.topRatedTVShows}
      />
      <MoviesAndTVShows
        moviesId="9"
        name="Sci-Fi & Fantasy"
        url={urls.scififantasyTVShows}
      />
      <MoviesAndTVShows moviesId="10" name="Crime" url={urls.crimeTVShows} />
      <MoviesAndTVShows moviesId="11" name="Drama" url={urls.dramaTVShows} />
      <MoviesAndTVShows
        moviesId="12"
        name="Documentaries"
        url={urls.documentaryTVShows}
      />
    </>
  );
};

export default Main;
