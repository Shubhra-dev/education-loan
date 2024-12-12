import SectionLayout from "../SectionLayout";
import Heading1 from "../../components/Heading1";
import NumberCard from "./NumberCard";
function WhatWeAchive() {
  return (
    <SectionLayout
      bg={`bg-primary`}
      upperAddedClass={`relative rounded-[30px] overflow-hidden`}
    >
      <div className="absolute w-[150px] h-[150px] bg-white/70 top-[35%] -left-24 rounded-full blur-[50px]"></div>
      <div className="absolute w-[150px] h-[150px] bg-white/70 top-[35%] -right-24 rounded-full blur-[50px]"></div>
      <Heading1
        color={`text-secondary`}
        padding={`py-4 sm:py-8`}
        align={`text-center`}
      >
        What we’ve achieved together
      </Heading1>
      <div className="py-4 sm:py-8 flex flex-col sm:flex-row items-start justify-normal gap-8">
        <NumberCard
          heading={`100%`}
          detail={`digital loan application process`}
        />
        <NumberCard heading={`15,000+`} detail={`students funded`} />
        <NumberCard
          heading={`190+`}
          detail={`eligible countries of citizenship`}
        />
      </div>
      <div className="py-4 sm:py-8 flex flex-col sm:flex-row items-start justify-normal gap-8">
        <NumberCard
          heading={`400+`}
          detail={`U.S. and Canadian schools supported`}
        />
        <NumberCard
          heading={`91%`}
          detail={`of students indicate an MPOWER loan was instrumental in their ability to study abroad`}
        />
        <NumberCard
          heading={`45%`}
          detail={`of customers are first-generation college students`}
        />
      </div>
    </SectionLayout>
  );
}

export default WhatWeAchive;
