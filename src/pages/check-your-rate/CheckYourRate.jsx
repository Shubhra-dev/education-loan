import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import SideBg from "../../assets/BgGradients.png";
import Illustration from "../../assets/PersonalInfo.png";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import UniversityAndEnrollment from "./UniversityAndEnrollment";
import LoanDetails from "./LoanDetails";
import AcceptedScreen from "./AcceptedScreen";
import RejectedScreen from "./RejectedScreen";
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  date_of_birth: null,
  citizenship: "",
  program_level: "",
  field_of_study: "",
  current_or_previous_gpa_or_cgpa: "",
  education_context: "",
  university_name: "",
  campus: "",
  enrollment_status: "",
  class_start_date: "",
  expected_graduation: "",
  requested_loan_amount: "",
  loan_purpose: "",
  preferred_loan_term: "",
  preferred_repayment_plan: "",
  is_applied_for_scholarship: true,
};
function CheckYourRate() {
  const [portfolio, setPortfolio] = useState(initialState);
  const [acceptedState, setAcceptedState] = useState({});
  const [rejectedState, setRejectedState] = useState({});
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  return (
    <div
      className="max-w-content mx-auto h-screen bg-gray-200 bg-no-repeat bg-center bg-cover overflow-y-scroll pb-4"
      style={{ backgroundImage: `url(${SideBg})` }}
    >
      <div className="relative h-[70px] bg-white shadow-md shadow-gray-300 py-2 z-50">
        <img
          src={Logo}
          alt="logo"
          className="w-max m-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto">
        {active < 5 && (
          <div className="mt-4 sm:mt-8 flex items-center justify-between">
            <div className="hidden tab:block w-[30%]">
              <img src={Illustration} alt="Personal info illustration" />
            </div>
            {active == 1 && (
              <PersonalInfo
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                setActive={setActive}
              />
            )}
            {active == 2 && (
              <AcademicInfo
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                setActive={setActive}
              />
            )}
            {active == 3 && (
              <UniversityAndEnrollment
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                setActive={setActive}
              />
            )}
            {active == 4 && (
              <LoanDetails
                setAcceptedState={setAcceptedState}
                setRejectedState={setRejectedState}
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                setActive={setActive}
              />
            )}
          </div>
        )}
        {active == 5 && (
          <AcceptedScreen
            portfolio={portfolio}
            acceptedState={acceptedState}
            setActive={setActive}
            setPortfolio={setPortfolio}
            initialState={initialState}
          />
        )}
        {active == 6 && (
          <RejectedScreen
            rejectedState={rejectedState}
            setActive={setActive}
            setPortfolio={setPortfolio}
            initialState={initialState}
          />
        )}
      </div>
    </div>
  );
}

export default CheckYourRate;
