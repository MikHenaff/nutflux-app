import BGimg from "../assets/nutflux-bg.jpg";

const Home = () => {
  const isLogged = false;
  return (
    <>
      {isLogged ? (
        <div className="relative w-full h-screen">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-1/3 object-cover object-left	"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-black/90 to-black/40 w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center w-4/5 text-xl sm:text-2xl xl:text-3xl -mt-40">
              <p className="text-3xl sm:text-5xl xl:text-6xl text-center font-bold pb-3 sm:pb-7">
                Unlimited movies, TV shows, and more
              </p>
              <p className="pb-3 sm:pb-7">Watch anywhere.</p>
              <p>Ready for binge-watching?</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full object-cover object-left	"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-black/90 to-black/40 w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center w-4/5 text-xl sm:text-2xl xl:text-3xl -mt-40">
              <p className="text-3xl sm:text-5xl xl:text-6xl text-center font-bold pb-3 sm:pb-7">
                Unlimited movies, TV shows, and more
              </p>
              <p className="pb-3 sm:pb-7">Watch anywhere.</p>
              <p>Ready for binge-watching?</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
