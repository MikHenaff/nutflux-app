const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center absolute w-full p-4 z-50">
        {window.innerWidth < 360 ? (
          <p className="rock-font text-6xl text-[#e50914] font-bold">N</p>
        ) : (
          <p className="rock-font text-3xl md:text-4xl text-[#e50914] font-bold">
            NUTFLUX
          </p>
        )}

        <div>
          <button className="mr-4">Sign In</button>
          <button className="px-4 py-2 rounded bg-[#e50914]">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
