import { Link } from "react-router-dom";
import Error404 from "../assets/img/lost-404-bg.jpg";

const ErrorPage404 = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className={`absolute w-full z-50 pt-1 sm:py-2 ${
          window.innerWidth > window.innerHeight && window.innerWidth < 900
            ? "bg-transparent"
            : "bg-black"
        }`}
      >
        <Link
          to="/"
          className={`rock-font text-[#e50914] font-bold ${
            window.innerWidth > window.innerHeight && window.innerWidth < 900
              ? "text-xl pl-2"
              : "text-xl sm:text-3xl pl-2 sm:pl-5"
          }`}
        >
          NUTFLUX
        </Link>
      </div>
      <img
        src={Error404}
        alt="background image"
        className="w-full h-full object-cover"
      />
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="m-auto absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-3xl my-5"
              style={{
                textShadow: "2px 2px 0 #00000080, -2px -2px 0 #00000080",
              }}
            >
              Lost your way?
            </h1>
            <div className="flex flex-col justify-center items-center w-4/5 text-lg">
              <p
                className="mb-2"
                style={{
                  textShadow: "1px 1px 0 #00000080, -1px -1px 0 #00000080",
                }}
              >
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.
              </p>
              <Link
                to="/"
                className="bg-white hover:bg-white/70 text-black rounded-sm px-6 py-2"
              >
                Nutflux Home
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-4/5 text-xl mb-5">
            <p className="text-3xl text-[#e50914]">| </p>
            <p className="ml-3">Error Code </p>
            <p className="ml-3 font-bold">NOPE-404</p>
          </div>
        </div>
      ) : (
        <div className="m-auto absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center">
          <div className="flex flex-col justify-center items-center -mt-10">
            <h1
              className="text-3xl sm:text-8xl mb-5 sm:mb-9"
              style={{
                textShadow: "2px 2px 0 #00000080, -2px -2px 0 #00000080",
              }}
            >
              Lost your way?
            </h1>
            <div className="flex flex-col justify-center items-center w-4/5 md:w-full text-lg sm:text-2xl">
              <p
                className="mb-6"
                style={{
                  textShadow: "1px 1px 0 #00000080, -1px -1px 0 #00000080",
                }}
              >
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.
              </p>
              <Link
                to="/"
                className="bg-white hover:bg-white/70 text-black rounded-sm px-6 py-2"
              >
                Nutflux Home
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-4/5 sm:w-full text-xl sm:text-3xl">
            <p className="text-3xl sm:text-6xl text-[#e50914]">| </p>
            <p className="ml-3">Error Code </p>
            <p className="ml-3 font-bold">NOPE-404</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage404;
