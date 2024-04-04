import { NavLink } from "react-router-dom";

const UserFormNavbar = () => {
  return (
    <>
      <div className="flex items-center absolute w-full p-[10px] z-50">
        {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
          <NavLink
            to="/"
            className="rock-font text-5xl text-[#e50914] font-bold"
          >
            N
          </NavLink>
        ) : (
          <NavLink
            to="/"
            className="rock-font text-3xl sm:text-4xl md:text-5xl text-[#e50914] font-bold"
            style={{ textShadow: "2px 2px 0 black, -2px -2px 0 black" }}
          >
            NUTFLUX
          </NavLink>
        )}
      </div>
    </>
  );
};

export default UserFormNavbar;
