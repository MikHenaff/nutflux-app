import { UserAuth } from "../context/AuthContext";
import { Link, NavLink } from "react-router-dom";

const HomeNavbar = () => {
  const { user } = UserAuth();
  return (
    <>
      <nav className="flex justify-between xl:justify-around items-center fixed sm:absolute h-[55px] w-full bg-black sm:bg-transparent px-2 xl:px-0 z-50">
        {window.innerWidth < 500 ? (
          <Link
            to="/"
            className="rock-font text-5xl text-[#e50914] font-bold"
            style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
          >
            N
          </Link>
        ) : (
          <Link
            to="/"
            className="rock-font text-3xl sm:text-4xl md:text-5xl text-[#e50914] font-bold"
            style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
          >
            NUTFLUX
          </Link>
        )}

        <div>
          {user ? (
            <>
              <div className="flex items-center">
                <NavLink
                  to="../account"
                  className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 mr-3 sm:mr-5 xl:mr-8 rounded-sm"
                >
                  My List
                </NavLink>
                <NavLink
                  to="../signout"
                  className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 mr-3 sm:mr-5 xl:mr-8 rounded-sm"
                >
                  Sign Out
                </NavLink>
                <NavLink
                  to="../delete-account"
                  className="text-[13px] sm:text-base border border-[#e50914] bg-[#e50914] hover:bg-[#f31217] px-3 py-1 rounded-sm"
                >
                  Delete Account
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="signin"
                className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-3 py-1 mr-5 xl:mr-8 rounded-sm"
              >
                Sign In
              </NavLink>
              <NavLink
                to="signup"
                className="text-[13px] sm:text-base border border-[#e50914] px-3 py-1 rounded-sm bg-[#e50914] hover:bg-[#f31217]"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
