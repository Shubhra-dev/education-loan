import EligibleList from "./EligibleList";
import GlobalJourney from "./GlobalJourney";
import SupportedDegree from "./SupportedDegree";
import SchoolsTable from "./SchoolsTable";
import SupportedSchoolsHero from "./SupportedSchoolsHero";
import ApplyForListing from "./ApplyForListing";
import Testimonial from "../../ui/Home/Testimonial";
import FAQBox from "../../ui/Home/FAQBox";

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
      <FAQBox />
    </>
  );
}

export default SupportedSchools;
