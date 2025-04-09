import NotEligible from "../../assets/NotEligible.png";
import NotEligibleHat from "../../assets/NotEligibleHat.png";
import Text from "../../components/Text";
import Heading2 from "../../components/Heading2";
import SubHeading from "../../components/SubHeading";
function RejectedScreen({
  setActive,
  setPortfolio,
  initialState,
  rejectedState,
}) {
  const handleStartNewCheck = () => {
    setPortfolio(initialState);
    setActive(1);
  };
  return (
    <div className="mt-4 sm:mt-8 flex items-start justify-between">
      <div className="hidden tab:block w-[30%] pt-24">
        <img src={NotEligible} alt="Not Eligible illustration" />
      </div>
      <div className="rounded-md bg-white/80 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
        <div className="flex items-center justify-center">
          <img
            src={NotEligibleHat}
            alt="NotEligible hat"
            className="scale-75 sm:scale-95"
          />
        </div>
        <div>
          <h1 className="py-1 text-center text-accent text-2xl sm:text-3xl tab:text-4xl font-semibold font-poppins ">
            {rejectedState.title}
          </h1>

          <Text align={`text-center`} font={`font-semibold`}>
            {rejectedState.text}
          </Text>
        </div>
        <div className="mt-4 rounded-md bg-white p-5">
          <Heading2 color={`text-accent`} align={`text-center `}>
            {rejectedState.suggestion_title}
          </Heading2>

          <Text color={`textColor3`} align={`text-center`} padding={`py-4`}>
            {rejectedState.suggestion_text}
          </Text>

          <button className="w-full bg-gradient-to-r from-[#FF6B00] to-[#803600] rounded-md mt-4">
            <SubHeading color={`white`} align={"text-center"} padding={`py-2`}>
              Contact Support
            </SubHeading>
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={handleStartNewCheck}
            className="rounded-md w-full py-2 text-center font-semibold bg-primary text-white"
          >
            <SubHeading color={`white`} align={"text-center"} padding={`py-0`}>
              Start New Check
            </SubHeading>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RejectedScreen;
//
