import BGimg from "../assets/nutflux-bg.jpg";
import AccountForm from "../components/AccountForm";

const Account = () => {
  return (
    <>
      {window.innerWidth > window.innerHeight && window.innerWidth < 900 ? (
        <div className="flex flex-col justify-center w-full h-screen">
          <div className="m-auto w-96">
            <h1 className="text-3xl pb-4 md:pb-6 pt-8 md:pt-10">My Account</h1>
            <AccountForm content="Save Changes" />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen pt-24 sm:pt-0">
          <img
            src={BGimg}
            alt="background image"
            className="w-full h-full hidden sm:block object-cover object-right"
          />
          <div className="m-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-[90%] max-w-lg sm:w-96 sm:h-1/2 sm:bg-black/70 sm:p-10 rounded-sm">
            <h1 className="self-start text-3xl mb-16 sm:mb-9">My Account</h1>
            <AccountForm content="Save Changes" />
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
