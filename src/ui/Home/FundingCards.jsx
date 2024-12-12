import SectionLayout from "../SectionLayout";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import CurrencyDollar from "../../icon/CurrencyDollar";
import Card from "./Card";
import Student from "../../icon/Student";
import ChartBar from "../../icon/ChartBar";
import Scroll from "../../icon/Scroll";
import GlobeHem from "../../icon/GlobeHem";
function FundingCards() {
  return (
    <SectionLayout>
      <Title align={`text-center`} padding={`py-0`} color={`text-primary`}>
        Funding for international students,
      </Title>
      <Title align={`text-center`} padding={`py-0`} color={`text-secondary`}>
        by international students
      </Title>
      <SubHeading
        align={`text-center`}
        color={`textColor1`}
        padding={`py-2`}
        font={`font-normal`}
      >
        NerdWallet named MPOWER Financing as the 2024 &quot;Best Student Loan
        for International Students&quot; because we&apos;re not only experts in
        international student loans and financing but we’ve been there – and now
        we want to be there for you. Here’s a look at what we offer students
        attending an eligible U.S. or Canadian college or university:
      </SubHeading>
      <div className="flex flex-wrap item-center justify-center pt-4 gap-8">
        <Card
          title={"Flexible funding options"}
          detail={`Fixed-rate loans from US$2,001 to US$100,000 total at competitive
        interest rates with up to 0.25% in interest rate discounts. Plus - we
        don’t mind if you have loans from other lenders; you can still apply for
        an MPOWER loan!`}
        >
          <CurrencyDollar />
        </Card>
        <Card
          title={"Powered by your future potential"}
          detail={`An independent student loan that doesn’t require a cosigner or collateral. Build U.S. credit history through on-time payments, and never face a prepayment penalty.`}
        >
          <Student />
        </Card>
        <Card
          title={"A reliably fast process"}
          detail={`From a quick approval process to a seamless disbursement, we have you covered. It’s fast from the start – in just 30 seconds you can see if you’re eligible to apply.`}
        >
          <ChartBar />
        </Card>
        <Card
          title={"Support along the way"}
          detail={`Free visa support letters, exclusive career strategy services and the potential for a conditional loan offer in a matter of days.`}
        >
          <Scroll />
        </Card>
        <Card
          width={`w-full sm:w-[35%]`}
          title={"Convenience that fits your lifestyle"}
          detail={`From start to finish the MPOWER loan process is fully digital. This means ease of access around the globe – regardless of your location.`}
        >
          <GlobeHem />
        </Card>
      </div>
    </SectionLayout>
  );
}

export default FundingCards;
