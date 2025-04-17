import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import DegreeGroup from "../../assets/DegreeGroup.png";
import ScrollDegree from "./ScrollDegree";
function SupportedDegree() {
  return (
    <SectionLayout>
      <div className="py-2 sm:py-4 flex flex-col sm:flex-row justify-between gap:2 tab:gap-0">
        <div className="w-full sm:w-[55%] bg-primary rounded-md px-8 py-4">
          <Title color={`text-white`}>We support all degree types</Title>
          <Text color={`white`} padding={`py-4`}>
            Your academic goals are unique. That’s why we support the full range
            of degree types:
          </Text>
          <div className="flex items-center">
            <ScrollDegree name={`Master's`} />
            <ScrollDegree name={`J.D`} />
          </div>
          <div className="flex items-center">
            <ScrollDegree name={`MBA`} />
            <ScrollDegree name={`M.D`} />
          </div>
          <div className="flex items-center">
            <ScrollDegree name={`Ph.D`} />
            <ScrollDegree name={`D.D.S`} />
          </div>
          <div className="flex items-start">
            <ScrollDegree itemAlign={`start`} name={`Bachelor's`} />
            <ScrollDegree itemAlign={`start`} name={`Select Bootcamp`} />
          </div>
        </div>
        <div className="w-full sm:w-[45%] tab:col-span-3">
          <img
            src={DegreeGroup}
            alt="Celebrating Degree"
            className="sm:h-full"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default SupportedDegree;
