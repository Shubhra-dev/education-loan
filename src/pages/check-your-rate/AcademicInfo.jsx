import SubHeading from "../../components/SubHeading";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import GraduationCap from "../../assets/GraduationCap.svg";
import BookOpen from "../../assets/BookOpen.svg";
import University from "../../assets/University.svg";
function AcademicInfo({ portfolio, setPortfolio, setActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (portfolio.education_context === "") {
      alert("Please select an education context.");
      return;
    }
    setActive(3);
  };
  return (
    <div className="rounded-md bg-gray-100/30 border border-white w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
      <div className="bg-primary rounded-md w-full flex items-center gap-4 p-2">
        <div className="rounded-md bg-white px-2 py-2.5">
          <img src={GraduationCap} alt="Graduation cap" />
        </div>
        <div>
          <Heading2
            padding={`py-0`}
            color={`text-white`}
            font={`font-poppins font-semibold leading-tight`}
          >
            Academic Information
          </Heading2>
          <SubHeading padding={`pt-1 sm:py-0`} color={`white leading-tight`}>
            Tell us about your education plan
          </SubHeading>
        </div>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="w-full mt-2">
          <SubHeading>Program Level</SubHeading>
          <select
            value={portfolio.program_level}
            onChange={(e) =>
              setPortfolio({ ...portfolio, program_level: e.target.value })
            }
            required
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          >
            <option value="">Select Program Level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="post-graduate">Graduate</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Field Of Study</SubHeading>
          <select
            value={portfolio.field_of_study}
            onChange={(e) =>
              setPortfolio({ ...portfolio, field_of_study: e.target.value })
            }
            required
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          >
            <option value="">Select Field of Study</option>
            <option value="business">Business</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
            <option value="research">Research</option>
          </select>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Current or Previous GPA/CGPA</SubHeading>
          <input
            type="text"
            name="current_or_previous_gpa_or_cgpa"
            value={portfolio.current_or_previous_gpa_or_cgpa}
            required
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                current_or_previous_gpa_or_cgpa: e.target.value,
              })
            }
            placeholder="eg 3.50"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>

        <div className="w-full mt-2">
          <SubHeading>Education Context</SubHeading>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 tab:gap-8">
            <div
              className={`${
                portfolio.education_context === "domestic"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-full sm:w-1/2 flex items-center justify-center gap-3 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  education_context: "domestic",
                })
              }
            >
              <img src={BookOpen} alt="book open" />
              <Text font={`font-semibold`}>Domestic (Within Country)</Text>
            </div>
            <div
              className={`${
                portfolio.education_context === "international"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-full sm:w-1/2  flex items-center justify-center gap-3 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  education_context: "international",
                })
              }
            >
              <img src={University} alt="university" />
              <Text font={`font-semibold`}>International (Study Abroad)</Text>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 flex items-center justify-between">
          <button
            onClick={() => setActive(1)}
            type="button"
            className="hover:bg-secondary hover:text-white w-[30%] py-2 bg-white border border-secondary font-semibold text-secondary rounded-md"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-[30%] py-2 bg-gradient-to-l to-[#5A9BD4] from-[#1E3A5F] font-semibold text-white rounded-md"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default AcademicInfo;
