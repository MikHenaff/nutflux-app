import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import ModalAlert from "../components/ModalAlert";
import axios from "axios";
import urls from "../utils/urls";
import { GoPlus } from "react-icons/go";
import { MdPlaylistRemove } from "react-icons/md";

const CineDesc = () => {
  const [cineShow, setCineShow] = useState({});
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [videoKeys, setVideoKeys] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [error, setError] = useState(false);
  const { user } = UserAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const cineShowId = location.state.id;
  const cineShowRow = location.state.row;
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

  const videoLink = `https://www.yout-ube.com/watch?v=${videoKeys[0]}`;

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
    cineShowType === "movie"
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

  const runtime = `${
    (Math.floor(cineShow.runtime / 60) !== 0 &&
      Math.floor(cineShow.runtime / 60) + " h") ||
    ""
  } ${(cineShow.runtime % 60 !== 0 && (cineShow.runtime % 60) + " m") || ""}`;

  const cineShowRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    axios.get(cineShowUrl).then((response) => {
      setCineShow({ ...response.data, isSaved: false });
      const checkId = async () => {
        try {
          const docSnap = await getDoc(cineShowRef);
          if (docSnap.exists()) {
            docSnap.data().savedCineShows.map((res) => {
              if (res.id === response.data.id) {
                setCineShow({ ...response.data, isSaved: true });
              }
            });
          }
        } catch (error) {
          setError(true);
          setModalMessage(`${error.message}`);
          setModal(true);
        }
      };
      checkId();
      setGenre(response.data.genres[0].name);
      setCast(response.data.credits.cast);
      setCrew(response.data.credits.crew);
    });
  }, [cineShowUrl]);

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

  const saveCineShow = async () => {
    if (user) {
      setCineShow({ ...cineShow, isSaved: true });
      try {
        await updateDoc(cineShowRef, {
          savedCineShows: arrayUnion({
            id: cineShow.id,
            img: cineShow.backdrop_path,
            tagline: cineShow.tagline,
            title: cineShow.title || cineShow.name,
            type: cineShowType,
          }),
        });
      } catch (error) {
        setError(true);
        setModalMessage(`${error.message}`);
        setModal(true);
      }
      setModalMessage(
        `"${
          cineShow.title || cineShow.name
        }" has been successfully added to your list.`
      );
      setModal(true);
    } else {
      setModalMessage(
        `Please sign to add "${cineShow.title || cineShow.name}" to your list.`
      );
      setModal(true);
    }
  };

  const deleteCineShow = async () => {
    if (user) {
      try {
        setCineShow({ ...cineShow, isSaved: false });
        await updateDoc(cineShowRef, {
          savedCineShows: arrayRemove({
            id: cineShow.id,
            img: cineShow.backdrop_path,
            tagline: cineShow.tagline,
            title: cineShow.title || cineShow.name,
            type: cineShowListType || cineShowType,
          }),
        });
        setModalMessage(
          `"${
            cineShow.title || cineShow.name
          }" has been successfully removed from your list.`
        );
        setModal(true);
      } catch (error) {
        setError(true);
        setModalMessage(`${error.message}`);
        setModal(true);
      }
    } else {
      setModalMessage(
        `Please sign to remove "${
          cineShow.title || cineShow.name
        }" from your list.`
      );
      setModal(true);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative">
        <img
          src={`${backdropBase}${cineShow?.backdrop_path}`}
          alt={`${cineShow?.title || cineShow?.name} backdrop`}
          className={`w-full object-cover ${
            window.innerWidth > window.innerHeight && window.innerWidth < 900
              ? "h-full pt-[55px]"
              : "h-full sm:h-screen pt-[55px] sm:pt-0"
          }`}
        />
        <div
          className={`top-0 left-0 bg-gradient-to-r from-black/100 to-black/0
          h-full flex flex-col justify-center p-5 overflow-hidden ${
            window.innerWidth > window.innerHeight && window.innerWidth < 900
              ? "relative w-full items-center"
              : "relative sm:absolute w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3 items-center sm:items-start"
          }`}
        >
          <p
            className={`underline underline-offset-2 ${
              window.innerWidth > window.innerHeight && window.innerWidth < 900
                ? "text-2xl"
                : "text-2xl sm:text-4xl"
            }`}
          >
            {cineShow?.title || cineShow?.name}
          </p>
          <p className="pb-4">{cineShow?.tagline}</p>
          <p
            className={`text-[#999] pb-5 ${
              window.innerWidth > window.innerHeight && window.innerWidth < 900
                ? "text-sm"
                : "text-sm sm:text-base"
            }`}
          >
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
            {videoKeys.length > 0 && (
              <button
                className={`text-black bg-white border rounded-sm mr-3 ${
                  window.innerWidth > window.innerHeight &&
                  window.innerWidth < 900
                    ? "text-base px-3 py-1"
                    : "text-base sm:text-lg px-3 sm:px-5 py-1 sm:py-2"
                }`}
              >
                <a href={videoLink} target="_blank" rel="noreferrer">
                  Play
                </a>
              </button>
            )}
            {cineShow.isSaved ? (
              <button
                onClick={() => deleteCineShow()}
                className={`flex justify-center items-center border border-[#e50914] bg-[#e50914] hover:bg-[#f31217] rounded-sm px-3 ${
                  window.innerWidth > window.innerHeight &&
                  window.innerWidth < 900
                    ? "text-base py-1"
                    : "text-base sm:text-lg py-1 sm:py-2"
                }`}
              >
                <MdPlaylistRemove
                  className={`${
                    window.innerWidth > window.innerHeight &&
                    window.innerWidth < 900
                      ? "text-xl"
                      : "text-xl sm:text-3xl"
                  }`}
                />
              </button>
            ) : (
              <button
                onClick={() => saveCineShow()}
                className={`flex justify-center items-center border rounded-sm px-3 ${
                  window.innerWidth > window.innerHeight &&
                  window.innerWidth < 900
                    ? "text-base py-1"
                    : "text-base sm:text-lg py-1 sm:py-2"
                }`}
              >
                <GoPlus
                  className={`mr-1 ${
                    window.innerWidth > window.innerHeight &&
                    window.innerWidth < 900
                      ? "text-xl"
                      : "text-xl sm:text-3xl"
                  }`}
                />
                My List
              </button>
            )}
          </div>
          <p
            className={`mb-5 ${
              window.innerWidth > window.innerHeight && window.innerWidth < 900
                ? "text-base"
                : "text-base sm:text-xl"
            }`}
          >
            {cineShow?.overview}
          </p>
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
              onClick={() => {
                navigate("/");
              }}
              className="text-sm border rounded-sm px-3 py-2"
            >
              Go Back
            </button>
          </div>
        </div>
        {modal && (
          <ModalAlert
            message={modalMessage}
            closeModal={setModal}
            width={true}
            redColor={error ? true : false}
          />
        )}
      </div>
    </div>
  );
};

export default CineDesc;
