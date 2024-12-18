import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../SectionLayout";
import FAQContainer from "./FAQContainer";

function FAQBox() {
  return (
    <SectionLayout>
      <div className="py-2 sm:py-4">
        <Heading1 color={`textColor1`} align={`text-center`}>
          Questions? We’re here to help
        </Heading1>
        <SubHeading
          color={`textColor1`}
          align={`text-center`}
          font={`font-normal`}
          padding={`pt-1 pb-8`}
        >
          Read our Frequently Asked Questions (FAQ) here:
        </SubHeading>
        <FAQContainer bg={`bg-secondary/10`} color={`textColor1`} />
      </div>
    </SectionLayout>
  );
}

export default FAQBox;
