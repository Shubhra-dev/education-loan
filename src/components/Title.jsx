function Title({ children, color, align, padding, leading }) {
  return (
    <h1
      className={`${color ? `${color}` : "text-titleColor"} ${
        align ? `${align}` : "text-left"
      } ${
        padding ? `${padding}` : "py-1"
      } text-[28px] sm:text-[35px] tab:text-[42px] laptop:text-5xl font-semibold font-poppins ${
        leading ? leading : "leading-tight tab:leading-normal"
      }`}
    >
      {children}
    </h1>
  );
}

export default Title;
