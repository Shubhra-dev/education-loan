import GetLoanHero from "../../assets/GetLoanHero.png";
import GradHat from "../../assets/GradHat.png";
import GradHatIcon from "../../assets/GradHat.svg";
import PrimaryButton from "../../components/PrimaryButton";
import SubHeading from "../../components/SubHeading";
import Title from "../../components/Title";
function SupportedSchoolsHero() {
  return (
    <div
      className="w-[98%] relative my-3 m-auto rounded-3xl bg-cover bg-center p-8 sm:p-10 tab:p-16 h-[400px] tab:h-[500px] flex items-end"
      style={{ backgroundImage: `url(${GetLoanHero})` }}
    >
      <img
        src={GradHat}
        alt="graduation hat"
        className="absolute top-0 right-0 hidden tab:block"
      />
      <img
        src={GradHatIcon}
        alt="graduation hat"
        className="absolute top-0 right-0 tab:hidden"
      />
      <div className="sm:w-5/6 tab:w-3/5 mx-auto relative">
        <Title align={`text-center`} color={`text-white`}>
          MPOWER’s eligible network of schools in the U.S. and Canada
        </Title>
        <SubHeading
          align={`text-center`}
          color={`white`}
          font={`font-normal`}
          padding={`py-2`}
        >
          Students at the top 400+ colleges and universities in North America
          are eligible for MPOWER loans.
        </SubHeading>
        <div className="pt-6 w-max m-auto">
          <PrimaryButton bg={`bg-white`} textColor={`text-primary`}>
            Find my School
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default SupportedSchoolsHero;
