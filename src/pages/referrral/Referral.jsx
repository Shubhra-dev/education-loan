import HowItWorks from "./HowItWorks";
import ReferralForm from "./ReferralForm";
import ReferralHero from "./ReferralHero";
import Testimonial from "../../ui/Home/Testimonial";
import FAQBox from "../../ui/Home/FAQBox";

function Referral() {
  return (
    <>
      <ReferralHero />
      <ReferralForm />
      <HowItWorks />
      <Testimonial />
      <FAQBox />
    </>
  );
}

export default Referral;
