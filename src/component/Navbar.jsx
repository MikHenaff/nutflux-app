const HomeNavbar = () => {
  return (
    <>
      <div className="flex justify-between xl:justify-around items-center absolute w-full p-5 xl:px-0 z-50">
        {window.innerWidth < 400 ? (
          <p
            className="rock-font text-6xl text-[#e50914] font-bold"
            style={{ textShadow: "1px 1px 0 black, -1px -1px 0 black" }}
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
          <button className="mr-5 xl:mr-8 border border-white bg-black px-3 py-1 rounded-sm">
            Sign In
          </button>
          <button className="border border-[#e50914] px-3 py-1 rounded-sm bg-[#e50914]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
