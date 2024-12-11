function PrimaryButton({ children, width, letterCase, padding, addedClass }) {
  return (
    <button
      className={`${
        letterCase ? `${letterCase}` : "capitalize"
      } flex gap-2 items-center ${
        padding ? padding : "py-3 px-10"
      } text-white bg-gradient-to-t from-secondary to-primary ${
        width ? `${width}` : ""
      } rounded-[20px] text-sm sm:text-15[px] tab:text-base font-semibold ${
        addedClass ? `${addedClass}` : ""
      }`}
    >
      <p className="text-center w-full">{children}</p>
      {/* {!noIcon && <GoArrowDownRight className="font-semibold text-lg" />} */}
    </button>
  );
}

export default PrimaryButton;
