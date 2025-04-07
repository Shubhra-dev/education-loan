import CongratsSide from "../../assets/CongratsSide.png";
import Congrats from "../../assets/Congrats.png";
import Text from "../../components/Text";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
function AcceptedScreen({ setActive, setPortfolio, initialState }) {
  const handleStartNewCheck = () => {
    setPortfolio(initialState);
    setActive(1);
  };
  return (
    <div className="mt-4 sm:mt-8 flex items-start justify-between">
      <div className="hidden tab:block w-[30%] pt-24">
        <img src={CongratsSide} alt="Personal info illustration" />
      </div>
      <div className="rounded-md bg-white/80 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
        <div className="flex items-center justify-center">
          <img
            src={Congrats}
            alt="graduation hat"
            className="scale-75 sm:scale-95"
          />
        </div>
        <div>
          <h1 className="text-center text-secondary text-6xl sm:text-8xl tab:text-9xl font-medium font-rage tab:font-argine leading-none [text-shadow:_4px_4px_6px_rgb(0_0_0_/_0.15)]">
            Congratulations
          </h1>
          <h3 className="text-center text-textColor2 font-semibold font-poppins text-xl sm:text-2xl tab:text-3xl pt-4">
            You are Eligible
          </h3>
          <Text align={`text-center`} font={`font-semibold`}>
            Based on the information provided, you are eligible for an education
            loan. Here are the loan options available to you:
          </Text>
        </div>
        <div className="mt-4 rounded-md">
          <div className="pt-5 px-4 pb-4 bg-[#0DA500]/10 rounded-t-md">
            <Heading2 color={`text-[#0DA500]`}>Education Loan</Heading2>
          </div>
          <div className="rounded-b-md bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <SubHeading color={`textColor3`}>Loan Amount:</SubHeading>
                <SubHeading color={`textColor3`}>Interest Rate:</SubHeading>
                <SubHeading color={`textColor3`}>Loan Term:</SubHeading>
              </div>
              <div>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  2,000,000
                </SubHeading>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  5.57%
                </SubHeading>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  10 years
                </SubHeading>
              </div>
            </div>
            <button className="w-full bg-[#0DA500] rounded-md mt-4">
              <SubHeading
                color={`white`}
                align={"text-center"}
                padding={`py-2`}
              >
                Apply Now
              </SubHeading>
            </button>
          </div>
        </div>
        <div className="mt-4 rounded-md">
          <div className="pt-5 px-4 pb-4 bg-secondary/10 rounded-t-md flex items-center justify-between">
            <Heading2 color={`text-secondary`}>
              Standard Education Loan
            </Heading2>
            <div className="bg-secondary/30 py-1 px-2 rounded-xl">
              <Text
                color={`secondary`}
                align={`text-center`}
                font={`font-semibold`}
              >
                Recommended
              </Text>
            </div>
          </div>
          <div className="rounded-b-md bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <SubHeading color={`textColor3`}>Loan Amount:</SubHeading>
                <SubHeading color={`textColor3`}>Interest Rate:</SubHeading>
                <SubHeading color={`textColor3`}>Loan Term:</SubHeading>
              </div>
              <div>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  2,000,000
                </SubHeading>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  5.57%
                </SubHeading>
                <SubHeading color={`textColor4`} align={`text-right`}>
                  10 years
                </SubHeading>
              </div>
            </div>
            <button className="w-full bg-white hover:bg-secondary/20 border border-secondary rounded-md mt-4">
              <SubHeading
                color={`secondary`}
                align={"text-center"}
                padding={`py-2`}
              >
                Learn More
              </SubHeading>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleStartNewCheck}
            className="rounded-md w-full py-2 text-center font-semibold bg-primary text-white"
          >
            Start New Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptedScreen;
