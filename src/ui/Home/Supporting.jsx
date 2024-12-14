import SectionLayout from "../SectionLayout";
import HandDeposit from "../../icon/HandDeposit";
import Newspaper from "../../icon/Newspaper";
import Path from "../../icon/Path";
import RoundBorderCard from "./RoundBorderCard";
import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
function Supporting() {
  return (
    <SectionLayout>
      <div className="py-2 sm:py-4 w-full tab:w-5/6 tab:m-auto">
        <Heading1 align={`text-center leading-tight`} color={`text-primary`}>
          Supporting you through school
        </Heading1>
        <Heading1 align={`text-center`} color={`text-secondary`}>
          and beyond
        </Heading1>
        <SubHeading
          align={`text-center`}
          color={`textColor1`}
          font={`font-normal`}
          padding={`py-4`}
        >
          There’s more to making your international education journey a success
          than securing funding. MPOWER offers scholarships and loans along with
          additional services designed to meet the unique needs of students and
          graduates like you.
        </SubHeading>
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-normal gap-4 tab:gap-8">
        <RoundBorderCard text={`Get A Loan`} buttonText={`Apply Now`}>
          <HandDeposit />
        </RoundBorderCard>
        <RoundBorderCard
          text={`Resources and information for students`}
          buttonText={`Learn More`}
        >
          <Newspaper />
        </RoundBorderCard>
        <RoundBorderCard
          text={`Join our career services program exclusive for MPOWER borrowers: Path2Success`}
          buttonText={`Learn More`}
        >
          <Path />
        </RoundBorderCard>
      </div>
    </SectionLayout>
  );
}

export default Supporting;
