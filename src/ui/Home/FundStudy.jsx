import PrimaryButton from "../../components/PrimaryButton";
import EarthBag from "../../assets/EarthBag.png";
import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
function FundStudy() {
  return (
    <SectionLayout bg={`bg-secondary/10`}>
      <div className="py2 sm:py-4 flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 tab:w-2/5">
          <Title
            padding={`py-0`}
            color={`text-primary`}
            align={`text-center sm:text-left`}
          >
            Fund your study
          </Title>
          <Title
            padding={`py-0`}
            color={`text-secondary`}
            align={`text-center sm:text-left`}
          >
            abroad dream.
          </Title>
          <div className="my-3 sm:mt-6">
            <PrimaryButton addedClass={`my-2 m-auto sm:m-0`}>
              Start My Application
            </PrimaryButton>
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-3/5">
          <img
            src={EarthBag}
            alt="Earth and bag image"
            className=" object-center scale-95"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default FundStudy;
