import SectionLayout from "../../ui/SectionLayout";
import Referal from "../../assets/Referral.png";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
function ReferralHero() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4">
        <div className="w-full sm:w-[50%] tab:w-[40%]">
          <img
            src={Referal}
            alt="Referral Illustration"
            className="scale-90 sm:scale-100"
          />
        </div>
        <div className="w-full sm:w-[50%]">
          <Title
            color={`text-secondary`}
            padding={`pb-4`}
            align={`text-center sm:text-left`}
          >
            Refer, Reward,
            <span className="text-primary"> Repeat!</span>
          </Title>
          <SubHeading
            color={`textColor1`}
            font={`font-normal`}
            align={`text-center sm:text-left`}
          >
            The path to study abroad is Better Together with friends and family!
          </SubHeading>
          <SubHeading
            color={`textColor1`}
            font={`font-normal`}
            padding={`py-2`}
            align={`text-center sm:text-left`}
          >
            Earn US$300 for helping a friend fund their dreams.
          </SubHeading>
          <div className="pt-6 w-max m-auto sm:m-0 sm:mt-4">
            <PrimaryButton>Refer A Friend</PrimaryButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ReferralHero;
