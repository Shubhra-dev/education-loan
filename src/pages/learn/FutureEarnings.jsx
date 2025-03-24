import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
import LowRates from "../../assets/LowRates.png";
import FitLife from "../../assets/FitLife.png";
import Benifits from "../../assets/Benifits.png";
import LearnCard from "./LearnCard";
import PrimaryButton from "../../components/PrimaryButton";

function FutureEarnings() {
  return (
    <SectionLayout bg={`bg-secondary/10`}>
      <Heading1 align={`text-center`} padding={`py-0`} color={`text-primary`}>
        A loan based on{" "}
        <span className="text-secondary">your future earnings</span>
      </Heading1>
      <SubHeading
        align={`text-center tab:w-4/5 m-auto`}
        color={`textColor1`}
        padding={`py-4`}
        font={`font-normal`}
      >
        An international student loan with us is an easy and affordable way to
        fund your education on your own. Our loans help support your
        independence since we never require a cosigner or collateral.
      </SubHeading>
      <div className="flex flex-wrap item-center justify-center pt-4 gap-6">
        <LearnCard image={LowRates} title={"Rely on low rates and high limits"}>
          <ul className="w-full list-inside list-disc px-2 pt-2 text-sm sm:text-base">
            <li>Loans from US$2,001 to US$100,000</li>
            <li>
              Fixed and competitive interest rates that will never increase
            </li>
            <li>
              Rates as low as 9.99% (10.89% APR)* for the fall 2025 semester -
              limited time only!
            </li>
          </ul>
        </LearnCard>
        <LearnCard image={FitLife} title={"Loans that fit your life"}>
          <ul className="w-full list-inside list-disc px-2 pt-2 text-base">
            <li>Quick conditional loan offer</li>
            <li>No prepayment penalty</li>
            <li>Students supported at 400+ U.S. and Canadian schools</li>
          </ul>
        </LearnCard>
        <LearnCard image={Benifits} title={"Benefits to help you succeed"}>
          <ul className="w-full list-inside list-disc px-2 pt-2 text-base">
            <li>A free visa support letter and visa prep course</li>
            <li>
              A job search tool, resume builder and F-1 eligible job directory
            </li>
            <li>A prequalified U.S. credit card and bank account</li>
          </ul>
        </LearnCard>
      </div>
      <div className="pt-6 w-max m-auto my-4">
        <PrimaryButton>Apply Now</PrimaryButton>
      </div>
      <p className="text-center sm:w-4/5 m-auto text-xs sm:text-sm text-textColor4 pt-8">
        *Rates as low as 9.99% (10.89% APR) available only for the fall 2025
        semester and you must submit your application by December 31, 2024. This
        interest rate and APR includes a 0.25% discount for automatic recurring
        payments and a 0.75% discount from our limited-time early planner
        promotion.
      </p>
    </SectionLayout>
  );
}

export default FutureEarnings;
