import { Link } from "react-router-dom";
import BGimg from "../assets/nutflux-bg.jpg";
import AccountForm from "../components/AccountForm";

const SignUp = () => {
  return (
    <>
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="flex flex-col justify-center w-full h-screen">
          <div className="m-auto w-96">
            <h1 className="text-3xl pb-4 md:pb-6 pt-8 md:pt-10">Sign Up</h1>
            <AccountForm content="Sign Up" />
            <p className="text-center">
              <span className="text-[#9db9bb] pb-4">Already a member?</span>{" "}
              <Link to="../signin" className="hover:underline">
                Sign in now
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
          <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] sm:w-96 sm:h-fit sm:bg-black/70 sm:p-10 rounded-sm">
            <h1 className="self-start text-3xl mb-9">Sign Up</h1>
            <AccountForm content="Sign Up" />
            <p className="text-center pt-4">
              <span className="text-[#9db9bb]">Already a member?</span>{" "}
              <Link to="../signin" className="hover:underline">
                Sign in now
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
