import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import CineShowRow from "./CineShowRow";
import ListRow from "./ListRow";
import urls from "../utils/urls";

const Main = () => {
  const [list, setList] = useState([]);
  const { user } = UserAuth();

  const cineShowRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    const getList = async () => {
      let coll = [];
      try {
        const docSnap = await getDoc(cineShowRef);
        if (docSnap.exists()) {
          coll.push(docSnap.data().savedCineShows);
          setList(coll[0]);
        }
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
      <CineShowRow
        rowId="1"
        name="Popular on Nutflux"
        url={urls.popularMovies}
      />
      <CineShowRow rowId="2" name="Top Rated" url={urls.topRatedMovies} />
      <CineShowRow rowId="3" name="Horror" url={urls.horrorMovies} />
      <CineShowRow rowId="4" name="Sci-Fi" url={urls.scifiMovies} />
      <CineShowRow rowId="5" name="Animation" url={urls.animationMovies} />
      <CineShowRow
        rowId="6"
        name="Documentaries"
        url={urls.documentaryMovies}
      />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-2 my-14 sm:my-16 tracking-widest rock-font font-bold text-[#e50914]">
        TV Shows
      </h2>
      <CineShowRow
        rowId="7"
        name="Trending on Nutflux"
        url={urls.trendingTVShows}
      />
      <CineShowRow rowId="8" name="Top Rated" url={urls.topRatedTVShows} />
      <CineShowRow
        rowId="9"
        name="Sci-Fi & Fantasy"
        url={urls.scififantasyTVShows}
      />
      <CineShowRow rowId="10" name="Crime" url={urls.crimeTVShows} />
      <CineShowRow rowId="11" name="Drama" url={urls.dramaTVShows} />
      <CineShowRow
        rowId="12"
        name="Documentaries"
        url={urls.documentaryTVShows}
      />
    </>
  );
};

export default Main;
