const SignNavbar = () => {
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
      </div>
    </>
  );
};

export default SignNavbar;
