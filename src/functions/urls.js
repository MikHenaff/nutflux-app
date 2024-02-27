const key = "c881bed8d06b3a7601dfb67119e53e5b";

const urls = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  trendingMovies: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  onTheAirTVShows: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
  popularTVShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  topRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  trendingTVShows: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US&page=1`,
  //horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
  //scifiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878`,
  //animationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
  //documentaryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`,
  //scififantasyTVShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=first_air_date.desc&with_genres=10765`,
};

export default urls;

// Genres
// movies
// 27 horror
// 878 sci-fi
// 16 animation
// 99 documentary

// tv shows
// 10765 Sci-Fi & Fantasy ???
// 80 crime
// 18 drama
// 99 documentary
