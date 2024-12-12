import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function AccentButton({ children, noIcon, leftIcon, color, width, rounded }) {
  return (
    <button
      className={`capitalize flex gap-2 items-center py-2 px-10 ${
        color
          ? `text-${color} border-${color} hover:bg-${color}/20`
          : "text-secondary border-secondary hover:bg-secondary/20"
      } bg-white border-2  ${
        rounded ? rounded : "rounded-md"
      } text-sm sm:text-base font-semibold ${width ? width : ""}`}
    >
      {!noIcon && leftIcon && <GoArrowLeft className="font-semibold text-lg" />}
      <p>{children}</p>
      {!noIcon && !leftIcon && (
        <GoArrowRight className="font-semibold text-lg" />
      )}
    </button>
  );
}

export default AccentButton;
