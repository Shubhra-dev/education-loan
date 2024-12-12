import HeroImg from "../../assets/Hero.png";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
function Hero() {
  return (
    <div className="w-full py-6">
      <div className="w-full px-6 sm:px-4 tab:px-0 tab:w-5/6 m-auto laptop:w-3/4 flex flex-wrap sm:flex-nowrap items-center justify-between">
        <div className="w-full sm:w-[45%] tab:w-[35%]">
          <img src={HeroImg} alt="hero image" />
        </div>
        <div className="w-full sm:w-[55%]">
          <Title
            align={`text-center sm:text-left`}
            color={`text-secondary`}
            padding={`py-0`}
          >
            Fund your education.
          </Title>
          <Title
            align={`text-center sm:text-left`}
            color={`text-primary`}
            padding={`py-0`}
          >
            Live your dream.
          </Title>
          <SubHeading
            align={`text-center sm:text-left`}
            color={`textColor1`}
            padding={`py-4`}
            font={`font-normal`}
          >
            Don&apos;t miss out! Lock in rates as low as 9.99% (10.89% APR)* for
            the fall 2025 semester with our lightning-fast application. Limited
            time offer – apply today!
          </SubHeading>
          <PrimaryButton addedClass={`my-2 m-auto sm:m-0`}>
            get started
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
