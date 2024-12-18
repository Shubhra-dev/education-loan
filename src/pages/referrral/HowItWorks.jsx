import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import Invite from "../../assets/Invite.png";
import Submit from "../../assets/Submit.png";
import Share from "../../assets/Share.png";
import SubTitle from "../../components/SubTitle";
function HowItWorks() {
  return (
    <SectionLayout>
      <div className="py-4 flex flex-col tab:flex-row items-center justify-between">
        <div className="w-full tab:w-[25%]">
          <div className="flex flex-col tab:flex-row gap-2 tab::gap-4 items-center justify-center sm:justify-normal">
            <h3 className={`text-[25px] font-semibold`}>Working flow</h3>
            <div className="w-[90px] h-1.5 bg-secondary rounded-md"></div>
          </div>
          <Title
            color={`text-primary`}
            padding={`py-2 tab:py-0`}
            align={`text-center tab:text-left`}
          >
            Here’s how <span className="text-secondary">it works</span>
          </Title>
          <Text
            color={`text-color1`}
            padding={`py-2`}
            align={`text-center tab:text-left`}
          >
            Anyone can make a referral. Earn US$300 in rewards when the friend
            you refer accepts their loan terms and submits their visa document.
          </Text>
        </div>
        <div className="w-full tab:w-[60%]  px-4 tab:px-0 pt-4 sm:pt-0">
          <div className="flex items-center gap-6 sm:gap-8 tab:gap-10 ">
            <img src={Invite} alt="invite image" />
            <div>
              <SubTitle
                color={`text-primary font-poppins leading-snug`}
                padding="py-0"
              >
                Invite your friend to apply
              </SubTitle>
              <Text padding={`py-0`}>
                You can get your unique link and code to share in less than a
                minute
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:gap-8 tab:gap-10 py-8 tab:py-10">
            <img src={Submit} alt="submit image" />
            <div>
              <SubTitle
                color={`text-primary font-poppins leading-snug`}
                padding="py-0"
              >
                They submit an application
              </SubTitle>
              <Text padding={`py-0`}>
                Using the unique link or code let us know who to reward for the
                referral.
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:gap-8 tab:gap-10">
            <img src={Share} alt="share image" />
            <div>
              <SubTitle
                color={`text-primary font-poppins leading-snug`}
                padding="py-0"
              >
                You both share the success
              </SubTitle>
              <Text padding={`py-0`}>
                You get US $300 when the friend you refer accepts their loan
                terms and submits their visa documents, and your friend earns a
                US $100 reward once the school receives the fund.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowItWorks;
