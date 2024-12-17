import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import Listed from "../../assets/Listed.png";
function ApplyForListing() {
  return (
    <SectionLayout bg={`bg-secondary/20`}>
      <div className="py-4 flex flex-col sm:flex-row justify-between items-center sm:gap-2 tab:gap-0">
        <div className="w-full sml:w-1/2 tab:w-[40%]">
          <Title color={`text-primary`} align={`text-center sm:text-left`}>
            See your school listed?
          </Title>
          <div className="w-max m-auto sm:m-0 mt-4">
            <PrimaryButton addedClass={`my-2 m-auto sm:m-0`}>
              start my application
            </PrimaryButton>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 w-full sml:w-1/2 tab:w-[40%]">
          <img src={Listed} alt="illustration big ben" />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ApplyForListing;
