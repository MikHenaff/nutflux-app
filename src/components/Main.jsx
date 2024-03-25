import urls from "../utils/urls";
import CinemaLibrary from "./CinemaLibrary";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ListRow from "./ListRow";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let coll = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          coll.push(doc.data().savedCineShows);
        });
        setList(coll[0]);
      } catch (e) {
        console.log(e.message);
      }
    };
    getList();
  }, []);

  return (
    <>
      {list && list.length > 0 && <ListRow list={list} name="My List" />}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-10 sm:my-14 lg:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        Movies
      </h2>
      <CinemaLibrary
        rowId="1"
        name="Popular on Nutflux"
        url={urls.popularMovies}
      />
      <CinemaLibrary rowId="2" name="Top Rated" url={urls.topRatedMovies} />
      <CinemaLibrary rowId="3" name="Horror" url={urls.horrorMovies} />
      <CinemaLibrary rowId="4" name="Sci-Fi" url={urls.scifiMovies} />
      <CinemaLibrary rowId="5" name="Animation" url={urls.animationMovies} />
      <CinemaLibrary
        rowId="6"
        name="Documentaries"
        url={urls.documentaryMovies}
      />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-14 sm:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        TV Shows
      </h2>
      <CinemaLibrary
        rowId="7"
        name="Trending on Nutflux"
        url={urls.trendingTVShows}
      />
      <CinemaLibrary rowId="8" name="Top Rated" url={urls.topRatedTVShows} />
      <CinemaLibrary
        rowId="9"
        name="Sci-Fi & Fantasy"
        url={urls.scififantasyTVShows}
      />
      <CinemaLibrary rowId="10" name="Crime" url={urls.crimeTVShows} />
      <CinemaLibrary rowId="11" name="Drama" url={urls.dramaTVShows} />
      <CinemaLibrary
        rowId="12"
        name="Documentaries"
        url={urls.documentaryTVShows}
      />
    </>
  );
};

export default Main;
