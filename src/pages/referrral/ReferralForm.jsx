import Gradient102 from "../../assets/Gradient102.png";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import PrimaryButton from "../../components/PrimaryButton";
function ReferralForm() {
  return (
    <div
      className={`w-full rounded-[30px] py-4 bg-cover`}
      style={{ backgroundImage: `url(${Gradient102})` }}
    >
      <div
        className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-4 sm:py-8`}
      >
        <Heading1 color={`text-primary`} align={`text-center`}>
          Create your referral link and code
        </Heading1>
        <div className="w-full pt-4 sm:pt-6 pb-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-1/2">
            <Text color={`textColor1`} font={`font-semibold`}>
              Your Full Name <span className="text-red-500">*</span>
            </Text>
            <input
              type="text"
              className="w-full rounded-md p-2 bg-white"
              placeholder="Name"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Text color={`textColor1`} font={`font-semibold`}>
              Email<span className="text-red-500">*</span>
            </Text>
            <input
              type="email"
              className="w-full rounded-md p-2 bg-white"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-full pb-4">
          <Text color={`textColor1`} font={`font-semibold`}>
            Which country do you live in?
            <span className="text-red-500">*</span>
          </Text>
          <select
            name="country"
            className="w-full p-2 bg-white rounded-md text-textColor3"
          >
            <option value="">Select your country</option>
          </select>
        </div>
        <div className="w-full pb-4">
          <Text color={`textColor1`} font={`font-semibold`}>
            Which best describes you? Pick at least one.
            <span className="text-red-500">*</span>
          </Text>
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center text-base text-textColor1 py-1 gap-2">
            <div className="w-[48%] sm:w-1/4 flex items-center gap-2">
              <input type="checkbox" name="identifier" id="1" />
              <label htmlFor={"1"}>MPOWER customer</label>
            </div>
            <div className="w-[48%] sm:w-1/4 flex items-center gap-2">
              <input type="checkbox" name="identifier" id="2" />
              <label htmlFor={"2"}>International Student</label>
            </div>
            <div className="w-[48%] sm:w-1/4 flex items-center gap-2">
              <input type="checkbox" name="identifier" id="3" />
              <label htmlFor={"3"}>Working Professional</label>
            </div>
            <div className="w-[48%] sm:w-1/4 flex items-center gap-2">
              <input type="checkbox" name="identifier" id="4" />
              <label htmlFor={"4"}>Education/Finance Consultant</label>
            </div>
          </div>
          <div className="w-full flex gap-8 items-center text-base text-textColor1 sm:pt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="identifier" id="5" />
              <label htmlFor={"5"}>Others</label>
            </div>
            <input
              type="text"
              placeholder="Write Here..."
              className="p-2 rounded-md w-1/2"
            />
          </div>
        </div>
        <div className="pt-6 w-max m-auto">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default ReferralForm;
