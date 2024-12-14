import FundingCards from "./FundingCards";
import FundStudy from "./FundStudy";
import Hero from "./Hero";
import OurMission from "./OurMission";
import Supporting from "./Supporting";
import Testimonial from "./Testimonial";
import WhatWeAchive from "./WhatWeAchive";

function Home() {
  return (
    <>
      <Hero />
      <FundingCards />
      <WhatWeAchive />
      <OurMission />
      <Supporting />
      <Testimonial />
      <FundStudy />
    </>
  );
}

export default Home;
