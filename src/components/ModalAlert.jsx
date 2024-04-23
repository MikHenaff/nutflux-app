const ModalAlert = ({ message, closeModal, width, redColor }) => {
  return (
    <div
      className={`absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-[90%] ${
        width && "sm:w-fit"
      } h-fit flex flex-col justify-center items-center bg-stone-300 text-black p-10 border border-black/30 rounded-md`}
    >
      <p className={`text-lg mb-7 ${redColor && "text-[#e50914]"}`}>
        {message}
      </p>
      <button
        onClick={() => closeModal(false)}
        className="bg-white hover:bg-white/80 rounded-md px-6 py-2"
      >
        OK
      </button>
    </div>
  );
};

export default ModalAlert;
