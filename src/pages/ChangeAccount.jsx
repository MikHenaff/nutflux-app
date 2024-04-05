import { useLocation } from "react-router-dom";
import UserForm from "../components/UserForm";
import BGimg from "../assets/img/nutflux-bg.jpg";

const ChangeAccount = () => {
  const location = useLocation();
  const isChangingCreds = location.state.isChangingCreds;
  const isDeletingAccount = location.state.isDeletingAccount;

  return (
    <>
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="flex flex-col justify-center w-full h-full">
          <div className="m-auto w-96">
            <h1 className="text-center text-2xl mt-16 mb-10">
              {isChangingCreds
                ? "Change Your Credentials"
                : isDeletingAccount
                ? "Delete Your Account"
                : ""}
            </h1>
            <UserForm
              isChangingCreds={isChangingCreds}
              isDeletingAccount={isDeletingAccount}
              content={
                isChangingCreds
                  ? "Save Changes"
                  : isDeletingAccount
                  ? "Delete Account"
                  : ""
              }
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen pt-24 sm:pt-0">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full hidden sm:block object-cover object-right"
          />
          <div
            className={`flex flex-col justify-around m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] sm:w-96 ${
              isDeletingAccount ? "sm:h-[40%]" : "sm:h-[60%]"
            } sm:bg-black/70 sm:p-10 rounded-sm`}
          >
            <h1 className="text-center text-2xl mb-10 sm:mb-0">
              {isChangingCreds
                ? "Change Your Credentials"
                : isDeletingAccount
                ? "Delete Your Account"
                : ""}
            </h1>
            <UserForm
              isChangingCreds={isChangingCreds}
              isDeletingAccount={isDeletingAccount}
              content={
                isChangingCreds
                  ? "Save Changes"
                  : isDeletingAccount
                  ? "Delete Account"
                  : ""
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeAccount;
