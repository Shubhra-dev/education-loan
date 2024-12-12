import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
import AccentButton from "../../components/AccentButton";
function OurMission() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between py-2 sm:py-4">
        <div className="w-full sm:w-[35%]">
          <div className="flex flex-col sm:flex-row sm:gap-4 items-center justify-center sm:justify-normal">
            <Text color={`textColor1`} font={`font-semibold`}>
              Get to know about
            </Text>
            <div className="w-[90px] h-1.5 bg-secondary rounded-md"></div>
          </div>
          <Title
            color={`text-primary`}
            padding={`pt-2`}
            align={`text-center sm:text-left`}
          >
            Our mission is
          </Title>
          <Title
            color={`text-secondary`}
            padding={`pb-2`}
            align={`text-center sm:text-left`}
          >
            personal
          </Title>
        </div>
        <div className="w-full sm:w-[60%] tab:w-[55%]">
          <Text color={`textColor1`} align={`text-center sm:text-left`}>
            We’re a public benefit corporation founded by international students
            on a mission to help global citizens like you reach your goals. At
            MPOWER, we’ll help you succeed. We make loan decisions based on your
            future potential, rather than your past.
          </Text>
          <div className="py-2 w-max m-auto sm:m-0">
            <AccentButton noIcon={true} rounded={`rounded-full`}>
              about us
            </AccentButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default OurMission;
