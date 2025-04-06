import SubHeading from "../../components/SubHeading";
import Heading2 from "../../components/Heading2";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import SealPercent from "../../assets/SealPercent.svg";
function LoanDetails({ portfolio, setPortfolio, setActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (portfolio.preferred_loan_term === "") {
      alert("Please select an education context.");
      return;
    }
    setActive(3);
  };
  return (
    <div className="rounded-md bg-gray-100/30 border border-white w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
      <div className="bg-primary rounded-md w-full flex items-center gap-4 p-2">
        <div className="rounded-md bg-white px-2 py-2.5">
          <img src={SealPercent} alt="Seal Percent" />
        </div>
        <div>
          <Heading2
            padding={`py-0`}
            color={`text-white`}
            font={`font-poppins font-semibold leading-tight`}
          >
            Loan Details
          </Heading2>
          <SubHeading padding={`pt-1 sm:py-0`} color={`white leading-tight`}>
            Tell us about your loan requirements
          </SubHeading>
        </div>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="w-full mt-2">
          <SubHeading>Requested Loan Amount (BDT)</SubHeading>
          <input
            type="text"
            name="requested_loan_amount"
            value={portfolio.requested_loan_amount}
            required
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                requested_loan_amount: e.target.value,
              })
            }
            placeholder="e.g.150000"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>
        <div className="w-full mt-2">
          <SubHeading>Loan Purpose</SubHeading>
          <select
            value={portfolio.loan_purpose}
            onChange={(e) =>
              setPortfolio({ ...portfolio, loan_purpose: e.target.value })
            }
            required
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          >
            <option value="">Select your purpose</option>
            <option value="tuition">Tuition Fees</option>
            <option value="living_expenses">Living Expenses</option>
            <option value="books_supplies">Books & Supplies</option>
            <option value="travel">Travel Expenses</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Preferred Loan Term</SubHeading>
          <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4">
            <div
              className={`${
                portfolio.preferred_loan_term === "5 years"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-[48%] sm:w-1/4 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  preferred_loan_term: "5 years",
                })
              }
            >
              <SubTitle align={`text-center`} padding={"py-0"}>
                5
              </SubTitle>
              <Text
                font={`font-semibold`}
                align={`text-center`}
                padding={"py-0"}
                color={`textColor3`}
              >
                Years
              </Text>
            </div>
            <div
              className={`${
                portfolio.preferred_loan_term === "10 years"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-[48%] sm:w-1/4 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  preferred_loan_term: "10 years",
                })
              }
            >
              <SubTitle align={`text-center`} padding={"py-0"}>
                10
              </SubTitle>
              <Text
                font={`font-semibold`}
                align={`text-center`}
                padding={"py-0"}
                color={`textColor3`}
              >
                Years
              </Text>
            </div>
            <div
              className={`${
                portfolio.preferred_loan_term === "15 years"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-[48%] sm:w-1/4 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  preferred_loan_term: "15 years",
                })
              }
            >
              <SubTitle align={`text-center`} padding={"py-0"}>
                15
              </SubTitle>
              <Text
                font={`font-semibold`}
                align={`text-center`}
                padding={"py-0"}
                color={`textColor3`}
              >
                Years
              </Text>
            </div>
            <div
              className={`${
                portfolio.preferred_loan_term === "20 years"
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } p-3 rounded-md w-[48%] sm:w-1/4 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  preferred_loan_term: "20 years",
                })
              }
            >
              <SubTitle align={`text-center`} padding={"py-0"}>
                20
              </SubTitle>
              <Text
                font={`font-semibold`}
                align={`text-center`}
                padding={"py-0"}
                color={`textColor3`}
              >
                Years
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Preferred Repayment Plan</SubHeading>
          <select
            value={portfolio.preferred_repayment_plan}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                preferred_repayment_plan: e.target.value,
              })
            }
            required
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          >
            <option value="">Select Repayment Plan</option>
            <option value="interest_only">Interest Only</option>
            <option value="principal_and_interest">Principal & Interest</option>
            <option value="deferred">Deferred</option>
            <option value="income_based">Income Based</option>
          </select>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Have you applied for scholarship or grants</SubHeading>
          <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4">
            <div
              className={`${
                portfolio.is_applied_for_scholarship
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } py-2 rounded-md w-full sm:w-1/2 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  is_applied_for_scholarship: true,
                })
              }
            >
              <Text
                padding={`py-0`}
                font={`font-semibold`}
                align={`text-center`}
              >
                Yes
              </Text>
            </div>
            <div
              className={`${
                !portfolio.is_applied_for_scholarship
                  ? "bg-secondary border border-white"
                  : "bg-white border-b-2 border-b-secondary"
              } py-2 rounded-md w-full sm:w-1/2 cursor-pointer`}
              onClick={() =>
                setPortfolio({
                  ...portfolio,
                  is_applied_for_scholarship: false,
                })
              }
            >
              <Text
                padding={`py-0`}
                font={`font-semibold`}
                align={`text-center`}
              >
                No
              </Text>
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

export default LoanDetails;
