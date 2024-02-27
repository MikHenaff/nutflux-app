import { Link } from "react-router-dom";

const SignNavbar = () => {
  return (
    <>
      <div className="flex items-center absolute w-full p-[10px] z-50">
        {/*{window.innerWidth < 400 ? (
          <p
            className="rock-font text-6xl text-[#e50914] font-bold"
            style={{ textShadow: "1px 1px 0 black, -1px -1px 0 black" }}
          >
            N
          </p>
        ) : (*/}
        <Link
          to="/"
          className="rock-font text-3xl sm:text-4xl md:text-5xl text-[#e50914] font-bold"
          style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
        >
          NUTFLUX
        </Link>
        {/*)}*/}
      </div>
    </>
  );
};

export default SignNavbar;
