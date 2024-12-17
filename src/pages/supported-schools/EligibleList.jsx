import AccentButton from "../../components/AccentButton";
import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";

function EligibleList() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between py-2 sm:py-4">
        <div className="w-full sm:w-[35%]">
          <div className="flex flex-col sm:flex-row sm:gap-4 items-center justify-center sm:justify-normal">
            <Text color={`textColor1`} font={`font-semibold`}>
              Which schools
            </Text>
            <div className="w-[90px] h-1.5 bg-secondary rounded-md"></div>
          </div>
          <Title
            color={`text-primary`}
            padding={`pt-2`}
            align={`text-center sm:text-left`}
          >
            make the
          </Title>
          <Title
            color={`text-secondary`}
            padding={`pb-2`}
            align={`text-center sm:text-left`}
          >
            eligible list?
          </Title>
        </div>
        <div className="w-full sm:w-[60%] tab:w-[55%]">
          <Text color={`textColor1`} align={`text-center sm:text-left`}>
            We use a proprietary algorithm to continuously evaluate all
            accredited colleges and universities in the U.S. and Canada on
            factors like graduation rate, employment rate, and alumni earnings.
          </Text>
          <div className="py-2 w-max m-auto sm:m-0">
            <AccentButton noIcon={true} rounded={`rounded-2xl`}>
              about us
            </AccentButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default EligibleList;
