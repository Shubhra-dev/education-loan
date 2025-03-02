import SectionLayout from "../../ui/SectionLayout";
import LearnMore from "../../assets/LearnMore.png";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
function LearnMoreHero() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4">
        <div className="w-full sm:w-[50%]">
          <Title
            color={`text-secondary`}
            padding={`pb-4`}
            align={`text-center sm:text-left`}
          >
            Funds to achieve your
            <span className="text-primary"> study abroad dreams</span>
          </Title>
          <SubHeading
            color={`textColor1`}
            font={`font-normal`}
            align={`text-center sm:text-left`}
          >
            Lock in our lowest rate of the year at 9.99% (10.89% APR)* for the
            fall 2025 semester! Apply by December 31, 2024 for a loan to study
            in the U.S. or Canada with our fastest application to date.
          </SubHeading>
          <div className="pt-6 w-max m-auto sm:m-0 sm:mt-4">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-[50%] tab:w-[40%]">
          <img
            src={LearnMore}
            alt="LearnMore Illustration"
            className="scale-90 sm:scale-100"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default LearnMoreHero;
