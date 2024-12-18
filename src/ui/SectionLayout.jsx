function SectionLayout({ children, bg, padding, upperAddedClass }) {
  return (
    <div
      className={`w-full ${bg ? bg : "bg-white"} ${
        upperAddedClass ? upperAddedClass : ""
      }`}
    >
      <div
        className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto ${
          padding ? padding : "py-4 sm:py-8"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;
