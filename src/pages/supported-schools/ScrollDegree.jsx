import SubHeading from "../../components/SubHeading";
import GraduateScroll from "../../icon/GraduateScroll";
function ScrollDegree({ name, itemAlign }) {
  return (
    <div
      className={`w-1/2 flex items-${
        itemAlign ? itemAlign : "center"
      } gap-3 py-1`}
    >
      <GraduateScroll />
      <SubHeading
        font={`font-normal leading-normal`}
        color={`white`}
        padding={`py-0`}
      >
        {name}
      </SubHeading>
    </div>
  );
}

export default ScrollDegree;
