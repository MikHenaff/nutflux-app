import { useEffect, useState } from "react";
import axios from "axios";

const TVShows = ({ name, url }) => {
  const [tvShows, setTvShows] = useState([]);
  const backdropBase = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get(url).then((response) => setTvShows(response.data.results));
  }, [url]);
  console.log(tvShows);
  return (
    <div>
      <h2>{name}</h2>
      {tvShows &&
        tvShows.map(
          (tvShow) =>
            tvShow.name &&
            tvShow.backdrop_path && (
              <div key={tvShow.id}>
                <p>{tvShow.name}</p>
                <img src={`${backdropBase}${tvShow.backdrop_path}`} alt="" />
              </div>
            )
        )}
    </div>
  );
};

export default TVShows;
