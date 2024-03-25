import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { GoPlus } from "react-icons/go";
import { MdPlaylistRemove } from "react-icons/md";
import axios from "axios";
import urls from "../utils/urls";

const CineDesc = () => {
  const [cineShow, setCineShow] = useState({});
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [videoKeys, setVideoKeys] = useState([]);
  const { user } = UserAuth();

  //console.log(cineShow);

  const location = useLocation();
  const cineShowId = location.state.id;
  const cineShowRow = location.state.row;
  const cineShowList = location.state.list;
  const cineShowListType = location.state.type;
  const cineShowType = cineShowRow < 7 ? "movie" : "tvshow";

  const cineShowUrl =
    cineShowType === "movie" || cineShowListType === "movie"
      ? urls.baseMovieUrlById + cineShowId + urls.endUrlById
      : urls.baseTVShowUrlById + cineShowId + urls.endUrlById;

  const videoUrl =
    cineShowType === "movie" || cineShowListType === "movie"
      ? urls.baseMovieUrlById + cineShowId + urls.endVideoUrl
      : urls.baseTVShowUrlById + cineShowId + urls.endVideoUrl;

  //const videoLink = `https://www.yout-ube.com/watch?v=${videoKeys[0]}`;

  let actors =
    cast && cast.length > 2
      ? cast
          .filter((actor, idx) => {
            if (idx < 3) return actor;
          })
          .map((actor) => actor.name)
          .join(", ")
      : cast && cast.length > 1
      ? cast
          .filter((actor, idx) => {
            if (idx < 2) return actor;
          })
          .map((actor) => actor.name)
          .join(", ")
      : cast && cast.length > 0
      ? cast.name
      : false;

  let directors =
    cineShowRow === "movie"
      ? crew
          .filter((person) => person.job === "Director")
          .map((person) => person.name)
      : false;
  directors =
    directors && directors.length > 1
      ? directors.join(", ")
      : directors && directors.length > 0
      ? directors
      : false;

  let creators =
    cineShowType === "tvshow"
      ? cineShow.created_by?.map((creator) => creator.name)
      : false;
  creators =
    creators && creators.length > 1
      ? creators.join(", ")
      : creators && creators.length > 0
      ? creators
      : false;

  const backdropBase = "https://image.tmdb.org/t/p/original/";

  const runtime = `${Math.floor(cineShow.runtime / 60)} h ${
    cineShow.runtime % 60
  } m`;

  useEffect(() => {
    axios.get(cineShowUrl).then((response) => {
      cineShowList &&
        cineShowList.map((res) => {
          if (res.id === response.data.id) {
            console.log("same id");
          } else {
            console.log("not same id");
          }
        });
      setCineShow(response.data);
      setGenre(response.data.genres[0].name);
      setCast(response.data.credits.cast);
      setCrew(response.data.credits.crew);
    });
  }, [cineShowUrl, cineShowList]);

  useEffect(() => {
    const playVideo = async () => {
      setVideoKeys([]);
      const response = await axios.get(videoUrl);
      const results = await response.data.results;
      setVideoKeys(
        results
          .filter((res) => {
            if (
              res.site === "YouTube" &&
              res.official === true &&
              res.type === "Trailer"
            )
              return res;
          })
          .map((res) => res.key)
      );
    };
    playVideo();
  }, [videoUrl]);

  const cineShowRef = doc(db, "users", `${user?.email}`);

  const saveCineShow = async () => {
    if (user) {
      setCineShow({ ...cineShow, isSaved: true });
      await updateDoc(cineShowRef, {
        savedCineShows: arrayUnion({
          id: cineShow.id,
          title: cineShow.title || cineShow.name,
          type: cineShowType,
          tagline: cineShow.tagline,
          img: cineShow.backdrop_path,
        }),
      });
      alert(
        `"${
          cineShow.title || cineShow.name
        }" has been successfully added to your list`
      );
    } else {
      alert(
        `Please sign to add "${cineShow.title || cineShow.name}" to your list`
      );
    }
  };

  const deleteCineShow = async () => {
    if (user) {
      try {
        await updateDoc(cineShowRef, {
          savedCineShows: arrayRemove({
            id: cineShow.id,
            title: cineShow.title || cineShow.name,
            type: cineShowType,
            tagline: cineShow.tagline,
            img: cineShow.backdrop_path,
          }),
        });
        setCineShow({ ...cineShow, isSaved: false });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      alert(
        `Please sign to remove "${
          cineShow.title || cineShow.name
        }" from your list`
      );
    }
  };

  return (
    <div>
      <div className="w-full h-full pt-[55px]">
        <div className="relative">
          <img
            src={`${backdropBase}${cineShow?.backdrop_path}`}
            alt={`${cineShow?.title || cineShow?.name} backdrop`}
            className="w-full h-full sm:h-[calc(100vh-55px)] object-cover"
          />
          <div
            className="sm:absolute top-0 left-0 bg-gradient-to-r from-black/100 to-black/0 w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3
          h-full flex flex-col justify-center items-center sm:items-start p-5 overflow-hidden"
          >
            <p className="text-2xl sm:text-4xl underline underline-offset-2">
              {cineShow?.title || cineShow?.name}
            </p>
            <p className="pb-4">{cineShow?.tagline}</p>
            <p className="text-sm sm:text-base text-[#999] pb-5">
              {cineShow?.release_date?.split("-")[0] ||
                cineShow?.first_air_date?.split("-")[0]}{" "}
              |{" "}
              {cineShow?.number_of_seasons !== undefined
                ? `${cineShow?.number_of_seasons} ${
                    cineShow?.number_of_seasons > 1 ? "seasons" : "season"
                  }`
                : runtime}{" "}
              | {genre}
            </p>
            <div className="flex pb-5">
              {/*{videoKeys.length > 0 && (*/}
              {/*//<button className="sm:text-lg text-black bg-white border rounded-sm px-3 sm:px-5 py-1 sm:py-2 mr-3">
                //  <a href={videoLink} target="_blank" rel="noreferrer">
                //    Play
                //  </a>
                //</button>*/}
              {/*)}*/}
              {cineShow.isSaved ? (
                <button
                  onClick={() => deleteCineShow()}
                  className="flex justify-center items-center sm:text-lg border border-[#e50914] bg-[#e50914] hover:bg-[#f31217] rounded-sm px-3 py-1 sm:py-2"
                >
                  <MdPlaylistRemove className="text-xl sm:text-3xl" />
                  {/*Sup from My List*/}
                </button>
              ) : (
                <button
                  onClick={() => saveCineShow()}
                  className="flex justify-center items-center sm:text-lg border rounded-sm px-3 py-1 sm:py-2"
                >
                  <GoPlus className="text-xl sm:text-3xl mr-1" />
                  My List
                </button>
              )}
            </div>
            <p className="sm:text-xl mb-5">{cineShow?.overview}</p>
            <div className="flex flex-col pb-5">
              {actors && (
                <p>
                  <span className="text-[#999]">Starring:&nbsp;</span>
                  {actors}
                </p>
              )}
              {cineShowRow < 7
                ? directors && (
                    <p>
                      <span className="text-[#999]">Directed by:&nbsp;</span>
                      {directors}
                    </p>
                  )
                : creators && (
                    <p>
                      <span className="text-[#999]">Created by:&nbsp;</span>
                      {creators}
                    </p>
                  )}
            </div>
            <div>
              <button
                onClick={() => history.back()}
                className="text-sm border rounded-sm px-3 py-2"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CineDesc;
