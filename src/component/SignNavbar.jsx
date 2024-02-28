import { Link } from "react-router-dom";

const SignNavbar = () => {
  return (
    <>
      <div className="flex items-center absolute w-full p-[10px] z-50">
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
