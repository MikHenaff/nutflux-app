const ModalAlert = ({ message, handleModal, width, redColor, pageHeight }) => {
  return (
    <div
      className="absolute z-30 top-0 left-0 w-full bg-black/70 
      }"
      style={{
        height: pageHeight ? `${pageHeight}px` : "100%",
      }}
    >
      <div
        className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-fit flex flex-col justify-center items-center bg-stone-300 text-black p-10 border border-black/30 rounded-md ${
          width && "sm:w-fit"
        }`}
      >
        <p className={`text-lg mb-7 ${redColor && "text-[#e50914]"}`}>
          {message}
        </p>
        <button
          onClick={() => handleModal(false)}
          className="bg-white hover:bg-white/80 rounded-md px-6 py-2"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ModalAlert;
