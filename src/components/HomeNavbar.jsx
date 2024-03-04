import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const isLogged = true;
  return (
    <>
      <nav className="flex justify-between xl:justify-around items-center fixed sm:absolute h-[55px] w-full bg-black sm:bg-transparent px-2 xl:px-0 z-50">
        {window.innerWidth < 400 ? (
          <p
            className="rock-font text-5xl text-[#e50914] font-bold"
            style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
          >
            N
          </p>
        ) : (
          <p
            className="rock-font text-3xl sm:text-4xl md:text-5xl text-[#e50914] font-bold"
            style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
          >
            NUTFLUX
          </p>
        )}

        <div>
          {isLogged ? (
            <>
              <Link
                to="signout"
                className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 mr-5 xl:mr-8 rounded-sm"
              >
                Sign Out
              </Link>
              <Link
                to="edit-profile"
                className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 rounded-sm"
              >
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                to="signin"
                className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 mr-5 xl:mr-8 rounded-sm"
              >
                Sign In
              </Link>
              <Link
                to="signup"
                className="text-[13px] sm:text-base border border-[#e50914] px-3 py-1 rounded-sm bg-[#e50914] hover:bg-[#f11217]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
