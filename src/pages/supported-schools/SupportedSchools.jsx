import EligibleList from "./EligibleList";
import GlobalJourney from "./GlobalJourney";
import SupportedDegree from "./SupportedDegree";
import SchoolsTable from "./SchoolsTable";
import SupportedSchoolsHero from "./SupportedSchoolsHero";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import Listed from "../../assets/Listed.png";

function SupportedSchools() {
  return (
    <>
      <SupportedSchoolsHero />
      <GlobalJourney />
      <SupportedDegree />
      <EligibleList />
      <SchoolsTable />
      <SectionLayout bg={`bg-secondary/20`}>
        <div className="py-4 flex justify-between items-center">
          <div className="w-[40%]">
            <Title color={`text-primary`}>See your school listed?</Title>
            <div className="w-max mt-4">
              <PrimaryButton addedClass={`my-2 m-auto sm:m-0`}>
                start my application
              </PrimaryButton>
            </div>
          </div>
          <div className="w-[40%]">
            <img src={Listed} alt="illustration big ben" />
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default SupportedSchools;
