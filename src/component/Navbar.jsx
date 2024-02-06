const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center absolute w-full p-2 md:p-4 z-50">
        {window.innerWidth < 360 ? (
          <p
            className="rock-font text-6xl text-[#e50914] font-bold"
            style={{ textShadow: "1px 1px 0 black, -1px -1px 0 black" }}
          >
            N
          </p>
        ) : (
          <p
            className="rock-font text-3xl md:text-4xl text-[#e50914] font-bold"
            style={{ textShadow: "1px 1px 0 black, -1px -1px 0 black" }}
          >
            NUTFLUX
          </p>
        )}

        <div>
          <button className="mr-4 border border-white bg-black px-3 py-1 rounded-sm">
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

export default Navbar;
