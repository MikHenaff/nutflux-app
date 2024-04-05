import { Link } from "react-router-dom";
import BGimg from "../assets/img/nutflux-bg.jpg";

const Account = () => {
  return (
    <>
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="flex flex-col justify-center w-full h-full">
          <div className="m-auto w-96">
            <h1 className="text-center text-3xl mb-8 md:mb-12 mt-14 md:mt-16">
              Your Account
            </h1>
            <div className="flex flex-col items-center mb-8 md:mb-12">
              <h2 className="text-2xl underline mb-4">
                Change your credentials
              </h2>
              <p className="mb-5">
                You can choose to change your email address and/or your
                password.
              </p>
              <Link
                to="/change-account"
                state={{
                  isChangingCreds: true,
                  isDeletingAccount: false,
                }}
                className="z-50 px-2 py-1 rounded-sm hover:text-black border hover:border-white hover:bg-white"
              >
                Change Credentials
              </Link>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-12">
              <h2 className="text-2xl underline mb-4">Delete your account</h2>
              <p className="mb-5">
                If you choose to delete your account, all data relating to it
                will be deleted. There is no going back!{" "}
              </p>
              <Link
                to="/change-account"
                state={{
                  isDeletingAccount: true,
                  isChangingCreds: false,
                }}
                className="z-50 px-2 py-1 rounded-sm hover:text-[#e50914] border hover:border-[#e50914]"
              >
                Delete Account
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                to="../"
                className="flex w-2/3 h-8 justify-center items-center mb-5 bg-[#888] hover:bg-[#8f8f8f] text-[#0f0f0f]"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen pt-24 sm:pt-0">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full hidden sm:block object-cover object-right"
          />
          <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] max-w-lg sm:w-96 sm:h-[70%] sm:bg-black/70 sm:p-10 rounded-sm">
            <h1 className="text-4xl text-center mb-10 sm:mb-4">Your Account</h1>
            <div className="flex flex-col h-4/5 justify-evenly items-center">
              <div className="flex flex-col items-center mb-10 sm:mb-0">
                <h2 className="text-2xl underline mb-2">
                  Change your credentials
                </h2>
                <p className="mb-3">
                  You can choose to change your email address and/or your
                  password.
                </p>
                <Link
                  to="/change-account"
                  state={{
                    isChangingCreds: true,
                    isDeletingAccount: false,
                  }}
                  className="px-2 py-1 rounded-sm hover:text-black border hover:border-white hover:bg-white"
                >
                  Change Credentials
                </Link>
              </div>
              <div className="flex flex-col items-center mb-8 sm:mb-0 lg:mb-4">
                <h2 className="text-2xl underline mb-2">Delete your account</h2>
                <p className="mb-3">
                  If you choose to delete your account, all data relating to it
                  will be deleted. There is no going back!{" "}
                </p>
                <Link
                  to="/change-account"
                  state={{
                    isDeletingAccount: true,
                    isChangingCreds: false,
                  }}
                  className="px-2 py-1 rounded-sm hover:text-[#e50914] border hover:border-[#e50914]"
                >
                  Delete Account
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                to="../"
                className="flex w-2/3 h-8 justify-center items-center bg-[#888] hover:bg-[#8f8f8f] text-[#0f0f0f]"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
