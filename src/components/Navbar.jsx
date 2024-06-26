import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const HomeNavbar = () => {
  const { user } = UserAuth();

  return (
    <>
      <nav
        className={`z-20 flex justify-between xl:justify-around items-center fixed h-[55px] w-full px-2 xl:px-0 ${
          window.innerWidth < 500 ? "bg-black" : "bg-transparent"
        }`}
      >
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
          {window.location.pathname !== "/signup" &&
            window.location.pathname !== "/signin" &&
            window.location.pathname !== "/signout" &&
            window.location.pathname !== "/account" &&
            window.location.pathname !== "/change-account" &&
            (user ? (
              <>
                <div className="flex items-center">
                  <NavLink
                    to="../signout"
                    className="text-[13px] sm:text-base border border-[#888] bg-black hover:bg-[#212121] px-1 sm:px-3 py-1 mr-3 sm:mr-5 xl:mr-8 rounded-sm"
                  >
                    Sign Out
                  </NavLink>
                  <NavLink
                    to="../account"
                    className="text-[13px] sm:text-base border border-[#e50914] bg-[#e50914] hover:bg-[#f31217] px-1 sm:px-3 py-1 rounded-sm"
                  >
                    Account
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
            ))}
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
