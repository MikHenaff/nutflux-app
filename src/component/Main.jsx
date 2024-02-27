import { useEffect, useState } from "react";
import axios from "axios";
import urls from "../functions/urls";
import Movies from "./Movies";
import TVShows from "./TVShows";

const Main = () => {
  //const [movies, setMovies] = useState({});
  //const backdropBase = "https://image.tmdb.org/t/p/w500/";

  //useEffect(() => {
  //  axios
  //    .get(urls.scififantasyTVShows)
  //    .then((response) =>
  //      setMovies({ ...movies, scififantasyTVShows: response.data.results })
  //    );

  //}, [movies]);
  //  useEffect(() => {
  //    axios.get(urls.popularMoviesUrl).then((response) => setMovies(response));
  //  }, []);
  //  console.log(movies);

  //useEffect(() => {
  //  async function fetchMovies() {
  //    const response = await fetch(
  //      "https://api.themoviedb.org/3/movie/550?api_key=c881bed8d06b3a7601dfb67119e53e5b"
  //    );
  //    const data = await response.json;
  //    console.log(data.data);
  //  }
  //  fetchMovies();
  //}, []);

  return (
    <>
      {/*{movies &&
        movies.scififantasyTVShows.map((movie) => (
          <div key={movie.id}>
            <p>{movie.name}</p>
            <img src={`${backdropBase}${movie.backdrop_path}`} alt="" />
          </div>
        ))}*/}
      <Movies moviesId="1" name="Top Rated Movies" url={urls.topRatedMovies} />
      <Movies moviesId="2" name="Popular Movies" url={urls.popularMovies} />
      <Movies moviesId="3" name="Upcoming Movies" url={urls.upcomingMovies} />
      <Movies moviesId="4" name="Trending Movies" url={urls.trendingMovies} />
      <TVShows name="On The Air TV Shows" url={urls.onTheAirTVShows} />
      <TVShows name="Popular TV Shows" url={urls.popularTVShows} />
      <TVShows name="Top Rated TV Shows" url={urls.topRatedTVShows} />
      <TVShows name="Trending TV Shows" url={urls.trendingTVShows} />
    </>
  );
};

export default Main;

// movie.name pour tv shows, movie.title pour movies

//  popularMovies
//  topRatedMovies
//  upcomingMovies
//  trendingMovies
//  onTheAirTVShows
//  popularTVShows
//  topRatedTVShows
//  trendingTVShows
