import { Link } from "react-router-dom";

const AccountForm = ({ content }) => {
  return (
    <form className="flex flex-col justify-center h-3/5">
      <input
        type="email"
        className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
        placeholder="Email"
      />
      <input
        type="password"
        className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
        placeholder="Password"
      />
      <div className="flex w-full justify-around">
        <button className="w-1/2 h-8 rounded-sm bg-[#888] hover:bg-[#8f8f8f] text-[#0f0f0f] mr-2 mb-5">
          <Link to="../">Cancel</Link>
        </button>
        <button className="w-1/2 h-8 rounded-sm bg-[#e50914] hover:bg-[#f31217] ml-2 mb-5">
          <Link>{content}</Link>
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
