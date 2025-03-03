import EligibleFunding from "../../assets/EligibleFunding.png";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
function WhoEligible() {
  return (
    <div className={`w-full bg-white`}>
      <div className={`smLap:px-0 smLap:w-[87%]`}>
        <div className="px-4 tab:px-0 my-14 tab:my-[100px] bg-primary py-6 tab:pl-[12%] tab:pr-4 flex justify-between items-center">
          <div className="hidden tab:block tab:w-[40%]">
            <img
              src={EligibleFunding}
              alt="Eligible Funding Illustration"
              className="-mb-[110px]"
            />
          </div>
          <div className="w-full tab:w-[40%] p-2">
            <div className="bg-[#f5f0ed] px-4 py-3 laptop:w-2/3 -mt-20">
              <Heading1
                align={`text-left leading-tight`}
                color={`text-primary`}
              >
                Who’s eligible{" "}
                <span className="text-secondary">for funding?</span>
              </Heading1>
            </div>
            <Text align={`text-left`} color={`white`} padding={`py-4`}>
              You could be eligible for an MPOWER student loan if you’re:
            </Text>
            <ul className="list-disc list-inside text-white text-sm sm:text-base pb-4">
              <li>
                An undergraduate or graduate student within 2 years of
                graduating or about to begin a 1-year or 2-year program.
              </li>
              <li>
                An international student, DACA recipient, U.S. citizen, refugee,
                or asylum-seeker.
              </li>
              <li>
                Admitted to or attending one of our 400+ approved schools in the
                U.S. or Canada.
              </li>
            </ul>
            <div>
              <button className="px-10 py-3 rounded-full text-primary bg-white">
                Check My Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoEligible;
