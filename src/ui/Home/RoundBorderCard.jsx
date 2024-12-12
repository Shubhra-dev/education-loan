import SubHeading from "../../components/SubHeading";

import AccentButton from "../../components/AccentButton";
function RoundBorderCard({ children, text, buttonText }) {
  return (
    <div className="w-full sm:w-1/3">
      <div className="p-2 border-[8px] border-primary rounded-full bg-secondary w-max m-auto">
        {children}
      </div>
      <SubHeading align={`text-center`} color={`textColor1`} padding={`pt-2`}>
        {text}
      </SubHeading>
      <div className="w-max m-auto pt-4">
        <AccentButton noIcon={true}>{buttonText}</AccentButton>
      </div>
    </div>
  );
}

export default RoundBorderCard;
