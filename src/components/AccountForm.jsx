import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const AccountForm = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (window.location.pathname === "/signup") {
        await signUp(email, password);
        navigate("/");
      } else if (window.location.pathname === "/signin") {
        await signIn(email, password);
        navigate("/");
      } else if (window.location.pathname === "/account") {
        await signIn(email, password);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="text-[#e50914]">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center h-3/5"
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="h-12 rounded-sm bg-[#0f0f0f] border border-[#888] mb-5 pl-2"
          placeholder="Password"
          autoComplete="current-password"
        />
        <div className="flex w-full justify-around">
          <button className="w-1/2 h-8 rounded-sm bg-[#888] hover:bg-[#8f8f8f] text-[#0f0f0f] mr-2 mb-5">
            <Link to="../">Cancel</Link>
          </button>
          <button className="w-1/2 h-8 rounded-sm bg-[#e50914] hover:bg-[#f31217] ml-2 mb-5">
            {content}
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountForm;
