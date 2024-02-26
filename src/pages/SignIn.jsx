import BGimg from "../assets/nutflux-bg.jpg";

const SignIn = () => {
  return (
    <>
      <div className="relative w-full h-screen pt-24 sm:pt-0">
        <img
          src={BGimg}
          alt="background image"
          className="w-full h-full hidden sm:block object-cover object-right"
        />
        <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] sm:w-96 sm:h-1/2 sm:bg-black/70 sm:p-10 rounded-sm">
          <h1 className="self-start text-3xl mb-9">Sign In</h1>
          <form className="flex flex-col justify-center h-3/5">
            <input
              type="email"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#9db9bb] mb-5 pl-2"
              placeholder="Email"
            />
            <input
              type="password"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#9db9bb] mb-5 pl-2"
              placeholder="Password"
            />
            <button className="h-12 rounded-sm bg-[#e50914] border border-[#e50914] mb-5">
              Sign In
            </button>
          </form>
          <p className="text-center pt-5 sm:pt-0 xl:pt-5">
            <span className="text-[#9db9bb]">New to Nutflux?</span>{" "}
            <a href="#" className="hover:underline">
              Sign up now
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
