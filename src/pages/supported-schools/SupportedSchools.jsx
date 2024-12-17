import EligibleList from "./EligibleList";
import GlobalJourney from "./GlobalJourney";
import SupportedDegree from "./SupportedDegree";
import SchoolsTable from "./SchoolsTable";
import SupportedSchoolsHero from "./SupportedSchoolsHero";
import ApplyForListing from "./ApplyForListing";
import Testimonial from "../../ui/Home/Testimonial";
import FAQContainer from "../../ui/Home/FAQContainer";
import SectionLayout from "../../ui/SectionLayout";
import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";

function SupportedSchools() {
  return (
    <>
      <SupportedSchoolsHero />
      <GlobalJourney />
      <SupportedDegree />
      <EligibleList />
      <SchoolsTable />
      <ApplyForListing />
      <Testimonial />
      <SectionLayout>
        <div className="py-2 sm:py-4">
          <Heading1 color={`textColor1`} align={`text-center`}>
            Questions? We’re here to help
          </Heading1>
          <SubHeading
            color={`textColor1`}
            align={`text-center`}
            font={`font-normal`}
            padding={`pt-1 pb-8`}
          >
            Read our Frequently Asked Questions (FAQ) here:
          </SubHeading>
          <FAQContainer bg={`bg-secondary/10`} color={`textColor1`} />
        </div>
      </SectionLayout>
    </>
  );
}

export default SupportedSchools;
