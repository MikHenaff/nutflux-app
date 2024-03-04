const ProfileForm = () => {
  return (
    <form className="flex flex-col justify-center h-4/5">
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
    </form>
  );
};

export default ProfileForm;
