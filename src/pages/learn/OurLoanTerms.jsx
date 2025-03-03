import TermsIllustration from "../../assets/TermsIllustration.png";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
function OurLoanTerms() {
  return (
    <div className={`w-full bg-white flex justify-end`}>
      <div className={` smLap:px-0 smLap:w-[87%]`}>
        <div className="px-4 tab:px-0 my-14 tab:my-[100px] bg-primary py-6 tab:pr-[12%] flex justify-between items-center">
          <div className="w-full tab:w-[40%] tab:pl-8 pr-2 py-2">
            <div className="bg-[#f5f0ed] px-4 py-3 w-3/4 laptop:w-2/3 -mt-20">
              <Heading1
                align={`text-left leading-tight`}
                color={`text-primary`}
              >
                Our <br className="hidden tab:block" />
                <span className="text-secondary">loan terms</span>
              </Heading1>
            </div>
            <Text align={`text-left`} color={`white`} padding={`py-4`}>
              MPOWER student loans provide benefits beyond funding for every
              type of student:
            </Text>
            <ul className="list-disc list-inside text-white text-sm sm:text-base pb-4">
              <li>
                No fees paid out-of-pocket, pay nothing until your first
                interest-only loan payment
              </li>
              <li>
                Fund up to 100% of education expenses, including living expenses
                for schools in the U.S.
              </li>
              <li>
                Get visa support, career services, and build your U.S. credit
                history by making on-time payments
              </li>
            </ul>
          </div>
          <div className="hidden tab:block tab:w-[40%]">
            <img
              src={TermsIllustration}
              alt="Terms Illustration"
              className="-mb-[110px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLoanTerms;
