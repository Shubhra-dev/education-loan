import ApplyWithApp from "./ApplyWithApp";
import FutureEarnings from "./FutureEarnings";
import LearnMoreHero from "./LearnMoreHero";
import OurLoanTerms from "./OurLoanTerms";
import WhoEligible from "./WhoEligible";
import Testimonial from "../../ui/Home/Testimonial";
import FAQBox from "../../ui/Home/FAQBox";

function LearnMore() {
  return (
    <>
      <LearnMoreHero />
      <FutureEarnings />
      <WhoEligible />
      <OurLoanTerms />
      <ApplyWithApp />
      <Testimonial />
      <FAQBox />
    </>
  );
}

export default LearnMore;
