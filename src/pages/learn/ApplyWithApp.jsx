import SectionLayout from "../../ui/SectionLayout";
import ApplyImage from "../../assets/ApplyWithApp.png";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";

function ApplyWithApp() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row sm:gap-4 tab:gap-0 justify-center sm:justify-between items-center">
        <div className="w-full sm:w-[40%]">
          <img src={ApplyImage} alt="Apply With App" />
        </div>
        <div className="w-full sm:w-[60%] tab:w-[50%]">
          <Title align={`text-center sm:text-left`} color={`text-primary`}>
            Apply now with our{" "}
            <span className="text-secondary leading-relaxed">
              fastest application yet!
            </span>
          </Title>
          <div className="pt-6 w-max m-auto sm:m-0 sm:mt-2">
            <PrimaryButton>Check My Eligibility</PrimaryButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ApplyWithApp;
