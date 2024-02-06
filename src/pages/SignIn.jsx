//import BGimg from "../assets/nutflux-bg.jpg";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen w-full pt-24">
        {/*<img src={BGimg} alt="background image" />*/}
        <div className="w-[90%]">
          <h1 className="self-start text-3xl mb-9">Sign In</h1>
          <form className="flex flex-col justify-center">
            <input
              type="email"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#5e5e5e] mb-5 pl-2"
              placeholder="Email"
            />
            <input
              type="password"
              className="h-12 rounded-sm bg-[#0f0f0f] border border-[#5e5e5e] mb-5 pl-2"
              placeholder="Password"
            />
            <button className="h-12 rounded-sm bg-[#e50914] border border-[#e50914] mb-5">
              Sign In
            </button>
          </form>
        </div>
        <p>
          <span className="text-[#5e5e5e]">New to Nutflux?</span>{" "}
          <a href="#" className="hover:underline">
            Sign up now
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default SignIn;
