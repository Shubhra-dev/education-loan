import Hero from "../../assets/Hero.png";
import Title from "../../components/Title";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
function Home() {
  return (
    <div className="w-full py-6">
      <div className="w-5/6 m-auto laptop:w-3/4 flex items-center justify-between">
        <div className="w-[35%]">
          <img src={Hero} alt="hero image" />
        </div>
        <div className="w-[55%]">
          <Title color={`text-secondary`} padding={`py-0`}>
            Fund your education.
          </Title>
          <Title color={`text-primary`} padding={`py-0`}>
            Live your dream.
          </Title>
          <SubHeading
            color={`textColor1`}
            padding={`py-4`}
            font={`font-normal`}
          >
            Don&apos;t miss out! Lock in rates as low as 9.99% (10.89% APR)* for
            the fall 2025 semester with our lightning-fast application. Limited
            time offer – apply today!
          </SubHeading>
          <PrimaryButton addedClass={`my-2`}>get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
