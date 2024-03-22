import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import BGimg from "../assets/nutflux-bg.jpg";

const SignOut = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={BGimg}
        alt="background image"
        className="w-full h-full hidden sm:block object-cover object-center"
      />
      <div className="sm:absolute sm:top-0 sm:left-0 sm:bg-black/70 w-full h-full flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center w-4/5 max-w-[1000px] -mt-40">
          <p className="text-center text-3xl mb-9">
            Are you sure you want to sign out?
          </p>
          <div className="flex w-4/5">
            <button
              onClick={handleSignOut}
              className="flex justify-center items-center w-full h-10 text-lg rounded-sm border mr-5 hover:bg-white hover:text-black"
            >
              Yes
            </button>
            <button
              onClick={() => history.back()}
              className="flex justify-center items-center w-full h-10 text-lg rounded-sm border hover:bg-white hover:text-black"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
