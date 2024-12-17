import SectionLayout from "../../ui/SectionLayout";
import Character from "../../assets/Character.png";
import Title from "../../components/Title";
import Text from "../../components/Text";
import AccentButton from "../../components/AccentButton";
function GlobalJourney() {
  return (
    <SectionLayout>
      <div className="py-2 sm:py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-[40%] tab:w-[35%]">
          <img
            src={Character}
            alt="avatar full"
            className="scale-90 sm:scale-100"
          />
        </div>
        <div className="w-full sm:w-[55%]">
          <Title
            align={`text-center sm:text-left`}
            padding={`py-0`}
            color={`text-secondary`}
          >
            Begin your global journey
          </Title>
          <Title
            align={`text-center sm:text-left`}
            padding={`py-0`}
            color={`text-primary`}
          >
            apply today
          </Title>
          <div className="w-[130px] h-1.5 bg-secondary rounded-md mt-2 sm:mt-4 m-auto sm:m-0"></div>
          <Text
            align={`text-center sm:text-left`}
            color={`textColor1`}
            padding={`py-3`}
          >
            MPOWER schools offer the best outcomes for global citizens, based on
            graduation rates, postgraduation employment rates, and alumni
            earnings. Our lightning-speed application lets you apply faster than
            ever and start your journey at these top schools.
          </Text>
          <div className="py-2 w-max m-auto sm:m-0">
            <AccentButton noIcon={true} rounded={`rounded-2xl`}>
              apply now
            </AccentButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default GlobalJourney;
