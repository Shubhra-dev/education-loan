import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";

function Card({ title, detail, children, width }) {
  return (
    <div className={`${width ? width : "w-full sm:w-[30%]"} px-2`}>
      <div className="mb-2 p-1 w-max m-auto rounded-full shadow-xl shadow-black/20 bg-accent/10">
        {children}
      </div>
      <SubHeading align={`text-center`} color={`textColor2`}>
        {title}
      </SubHeading>
      <Text align={`text-center`} color={`textColor1`}>
        {detail}
      </Text>
    </div>
  );
}

export default Card;
