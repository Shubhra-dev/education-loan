import SubHeading from "../../components/SubHeading";
import Heading2 from "../../components/Heading2";
import BuildingOffice from "../../assets/BuildingOffice.svg";
import DatePicker from "react-datepicker";
function UniversityAndEnrollment({ portfolio, setPortfolio, setActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (portfolio.education_context === "") {
      alert("Please select an education context.");
      return;
    }
    setActive(4);
  };
  return (
    <div className="rounded-md bg-gray-100/30 border border-white w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
      <div className="bg-primary rounded-md w-full flex items-center gap-4 p-2">
        <div className="rounded-md bg-white px-2 py-2.5">
          <img src={BuildingOffice} alt="Building Office" />
        </div>
        <div>
          <Heading2
            padding={`py-0`}
            color={`text-white`}
            font={`font-poppins font-semibold leading-tight`}
          >
            University & Enrollment
          </Heading2>
          <SubHeading padding={`pt-1 sm:py-0`} color={`white leading-tight`}>
            Tell us about your university and enrollment status
          </SubHeading>
        </div>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="w-full mt-2">
          <SubHeading>University Name</SubHeading>
          <input
            type="text"
            name="university_name"
            value={portfolio.university_name}
            required
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                university_name: e.target.value,
              })
            }
            placeholder="eg.Harvard University"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>
        <div className="w-full mt-2">
          <SubHeading>Campus</SubHeading>
          <input
            type="text"
            name="campus"
            value={portfolio.campus}
            required
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                campus: e.target.value,
              })
            }
            placeholder="eg.Main Campus"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>
        <div className="w-full mt-2">
          <SubHeading>Enrollment Status</SubHeading>
          <select
            value={portfolio.enrollment_status}
            onChange={(e) =>
              setPortfolio({ ...portfolio, enrollment_status: e.target.value })
            }
            required
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          >
            <option value="">Select Enrollment Status</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="hybrid">Hybrid</option>
            <option value="distance-learning">Distance Learning</option>
          </select>
        </div>
        <div className="w-full mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <div className="w-full sm:w-1/2">
            <SubHeading>Class Start Date</SubHeading>
            <DatePicker
              selected={portfolio.class_start_date}
              required
              onChange={(date) =>
                setPortfolio({ ...portfolio, class_start_date: date })
              }
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText="Month/Year"
              className="bg-white w-full p-2 border-b-2 border-b-secondary"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <SubHeading>Expected Graduation</SubHeading>
            <DatePicker
              selected={portfolio.expected_graduation}
              onChange={(date) =>
                setPortfolio({ ...portfolio, expected_graduation: date })
              }
              showMonthYearPicker
              required
              dateFormat="MM/yyyy"
              placeholderText="Month/Year"
              className="bg-white w-full p-2 border-b-2 border-b-secondary"
            />
          </div>
        </div>
        <div className="w-full mt-4 flex items-center justify-between">
          <button
            onClick={() => setActive(2)}
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

export default UniversityAndEnrollment;
