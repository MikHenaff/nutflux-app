import { Link } from "react-router-dom";
import BGimg from "../assets/nutflux-bg.jpg";
import ProfileForm from "../components/ProfileForm";

const EditProfile = () => {
  return (
    <>
      <div className="relative w-full h-screen pt-24 sm:pt-0">
        <img
          src={BGimg}
          alt="background image"
          className="w-full h-full hidden sm:block object-cover object-right"
        />
        <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] max-w-lg sm:w-96 sm:h-1/2 sm:bg-black/70 sm:p-10 rounded-sm">
          <h1 className="self-start text-3xl mb-16 sm:mb-9">Your Profile</h1>
          {/*<form className="flex flex-col justify-center h-4/5">
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
            <div className="flex w-full justify-around">
              <button className="w-1/2 h-12 rounded-sm bg-[#9db9bb] text-[#0f0f0f] mr-2 mb-5">
                Cancel
              </button>
              <button className="w-1/2 h-12 rounded-sm bg-[#e50914] ml-2 mb-5">
                Save Changes
              </button>
            </div>
          </form>*/}
          <ProfileForm />
          {/*<p className="text-center pt-5 sm:pt-0 xl:pt-5">
            <span className="text-[#9db9bb]">Already a member?</span>{" "}
            <Link to="../signin" className="hover:underline">
              Sign in now
            </Link>
            .
          </p>*/}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
