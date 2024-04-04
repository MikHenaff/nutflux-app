import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import BGimg from "../assets/img/nutflux-bg.jpg";

const SignIn = () => {
  return (
    <>
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="flex flex-col justify-center w-full h-screen">
          <div className="m-auto w-96">
            <h1 className="text-3xl pb-4 md:pb-6 pt-8 md:pt-10">Sign In</h1>
            <UserForm content="Sign In" />
            <p className="text-center">
              <span className="text-[#9db9bb] pb-4">New to Nutflux?</span>{" "}
              <Link to="../signin" className="hover:underline">
                Sign Up now
              </Link>
              .
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen pt-24 sm:pt-0">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full hidden sm:block object-cover object-right"
          />
          <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] sm:w-96 sm:h-1/2 sm:bg-black/70 sm:p-10 rounded-sm">
            <h1 className="self-start text-3xl mb-9">Sign In</h1>
            <UserForm content="Sign In" />
            <p className="text-center pt-5 sm:pt-0 xl:pt-5">
              <span className="text-[#9db9bb]">New to Nutflux?</span>{" "}
              <Link to="../signup" className="hover:underline">
                Sign up now
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
