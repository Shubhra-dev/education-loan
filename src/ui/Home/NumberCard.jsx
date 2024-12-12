import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
function NumberCard({ heading, detail }) {
  return (
    <div className="w-full sm:w-[33%]">
      <Heading1 color={`text-secondary`} align={`text-center`}>
        {heading}
      </Heading1>
      <Text align={`text-center`} font={`font-semibold`} color={`white`}>
        {detail}
      </Text>
    </div>
  );
}

export default NumberCard;
