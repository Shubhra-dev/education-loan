import { useState } from "react";
import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";
import SectionLayout from "../SectionLayout";
import Heading1 from "../../components/Heading1";
import Quote from "../../icon/Quote";
import Next from "../../icon/Next";
import Prev from "../../icon/Prev";
import TestimoniImage from "../../assets/Testimonial.png";

const testimonials = [
  {
    id: 1,
    name: "Abidur Rahman1",
    country: "Bangladesh",
    message:
      "Loremsectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Abidur Rahman2",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tiniat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Abidur Rahman3",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Abidur Rahman5",
    country: "Bangladesh",
    message:
      "Lorem ipsumempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Abidur Rahman4",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Laoreet nunc commodo adipiscing condimentum et porta at volutpat. Vitae nunc habitant faucibus magna. Nulla a parturient donec pulvinar libero viverra. Vel id egestas mi feugiat at ac quis magna.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");

  const handlePrev = () => {
    triggerAnimation();
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 500); // Match animation duration
    setAnimationDirection("left"); // Set animation direction
  };

  const handleNext = () => {
    triggerAnimation();
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Match animation duration
    setAnimationDirection("right"); // Set animation direction
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Reset animation after duration
  };

  return (
    <SectionLayout>
      <Heading1
        color={`primary`}
        padding={`py-2`}
        align={`text-center sm:text-left`}
      >
        What Our Students say
      </Heading1>
      <div className="m-auto sm:m-0 h-1.5 w-[130px] bg-secondary rounded-md py-1"></div>
      <div className="flex items-center gap-8 h-[270px] sm:h-[250px] tab:h-[280px] mt-3 sm:mt-6">
        <div className="w-full tab:w-3/5 mt-4 p-3 sm:p-6 bg-[#f5f0ed] rounded-md h-full">
          <span className="relative inline-block h-[70%]">
            <span className="absolute left-0 top-0">
              <Quote />
            </span>
            <span
              className={`ml-12 leading-[1.75] sm:leading-normal text-textColor1 text-left py-1 text-base sm:text-lg tab:text-xl font-normal ${
                isAnimating ? `slide-${animationDirection}` : ""
              }`}
            >
              {testimonials[currentIndex].message}
            </span>
          </span>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt="student photo"
                className="w-[60px] h-[60px] rounded-full object-center"
              />
              <div>
                <SubHeading padding={`py-0 leading-tight`}>
                  {testimonials[currentIndex].name}
                </SubHeading>
                <SmallText padding={`py-0 leading-tight`}>
                  {testimonials[currentIndex].country}
                </SmallText>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div
                onClick={handlePrev}
                className="bg-primary py-2 px-2.5 rounded-[5px]"
              >
                <Prev />
              </div>
              <div
                onClick={handleNext}
                className="bg-primary py-2 px-2.5 rounded-[5px]"
              >
                <Next />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden tab:block tab:w-2/5">
          <img
            src={TestimoniImage}
            alt="Testimonil image"
            className="object-center"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Testimonial;
