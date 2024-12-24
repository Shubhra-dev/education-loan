import LogoWhite from "../assets/LogoWhite.png";
import SmallText from "../components/SmallText";
import Heading2 from "../components/Heading2";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import newsLetterBg from "../assets/newsLetterBg.png";
function Footer() {
  return (
    <div className="bg-primary mt-10 tab:mt-0 py-5 px-4 sm:px-0">
      <div
        className="tab:hidden w-full sm:w-[65%] m-auto bg-cover bg-no-repeat pt-4 pb-5 px-2 sm:px-6 rounded-md -mt-16 sm:-mt-20 mb-6"
        style={{ backgroundImage: `url(${newsLetterBg})` }}
      >
        <Heading2
          color={`text-white`}
          align={`text-center`}
          font={`font-semibold font-poppins leading-tight`}
          padding={`py-0`}
        >
          Subscribe Newsletter
        </Heading2>
        <SmallText color={`white`} align={`text-center`}>
          Want to know what we’re up to? Sign up for the newsletter and join out
          tribe
        </SmallText>
        <div className="flex items-center gap-2 pt-1 w-full">
          <input
            type="text"
            className="p-2 rounded-md w-3/4"
            placeholder="Email Address"
          />
          <button className="w-1/4 bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-4 sm:px-6 py-3 text-xs font-semibold text-textColor1 text-center">
            subscribe
          </button>
        </div>
      </div>
      <div>
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto flex flex-wrap sm:flex-nowrap items-center justify-between">
          <div className="w-full sm:w-[40%] tab:w-1/4 mb-2 sm:mb-0">
            <img src={LogoWhite} alt="logo" className="w-max m-auto sm:m-0" />
            <SmallText
              color={`white`}
              padding={`py-2 leading-tight`}
              align={`text-center sm:text-left`}
            >
              Lorem ipsum dolor sit amet consectetur. Sem in faucibus habitasse
              netus quis facilisis vitae blandit duis. Nunc pulvinar elit
              fermentum amet tellus et mi ac fringilla.
            </SmallText>
          </div>
          <div className="w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              get a loan
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white`}>Apply Now</SmallText>
              <SmallText color={`white`}>School We Support</SmallText>
              <SmallText color={`white`}>Refer A Friend</SmallText>
              <SmallText color={`white`}>Learn More</SmallText>
            </div>
          </div>
          <div className="w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              about fintech
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white`}>Blog</SmallText>
              <SmallText color={`white`}>FAQ</SmallText>
              <SmallText color={`white`}>About Us</SmallText>
              <SmallText color={`white`}>Contact Us</SmallText>
            </div>
          </div>
          <div className="w-[35%] hidden tab:block">
            <Heading2
              color={`text-white`}
              font={`font-semibold font-poppins leading-tight`}
            >
              Subscribe Newsletter
            </Heading2>
            <SmallText color={`white`}>
              Want to know what we’re up to? Sign up for the newsletter and join
              out tribe
            </SmallText>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                className="p-2 rounded-md w-2/3"
                placeholder="Email Address"
              />
              <button className="bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-6 py-3 text-xs font-semibold text-textColor1">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-t-secondary">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto flex items-center justify-between pt-2.5">
          <div className="flex items-center gap-5">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src={instagramIcon}
              alt="instagram icon"
              className="cursor-pointer"
            />
            <img
              src={linkedInIcon}
              alt="linkedIn icon"
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <SmallText
              color={`white`}
              align={`text-left pr-3 sm:pr-5 border-r border-r-white/50`}
              padding={`py-0`}
            >
              © 2025 Fintech
            </SmallText>
            <SmallText
              color={`white`}
              align={`text-left pr-5 border-r border-r-white/50`}
              padding={`py-0`}
            >
              Terms
            </SmallText>
            <SmallText color={`white`}>Privacy</SmallText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
