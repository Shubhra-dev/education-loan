import SubHeading from "../../components/SubHeading";
import DatePicker from "react-datepicker";
import Heading2 from "../../components/Heading2";
import UserList from "../../assets/UserList.svg";
function PersonalInfo({ portfolio, setPortfolio, setActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(2);
  };
  return (
    <div className="rounded-md bg-gray-100/30 border border-white w-full tab:w-[60%] p-2 sm:p-4 tab:p-8">
      <div className="bg-primary rounded-md w-full flex items-center gap-4 p-2">
        <div className="rounded-md bg-white px-2 py-2.5">
          <img src={UserList} alt="personal info" />
        </div>
        <div>
          <Heading2
            padding={`py-0`}
            color={`text-white`}
            font={`font-poppins font-semibold leading-tight`}
          >
            Personal Information
          </Heading2>
          <SubHeading padding={`py-0`} color={`white leading-tight`}>
            Tell us about yourself
          </SubHeading>
        </div>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 tab:gap-6">
          <div className="w-full sm:w-1/2">
            <SubHeading>First Name</SubHeading>
            <input
              type="text"
              name="first_name"
              value={portfolio.first_name}
              onChange={(e) =>
                setPortfolio({ ...portfolio, first_name: e.target.value })
              }
              required
              placeholder="First Name"
              className="bg-white w-full p-2 border-b-2 border-b-secondary"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <SubHeading>Last Name</SubHeading>
            <input
              type="text"
              name="last_name"
              value={portfolio.last_name}
              onChange={(e) =>
                setPortfolio({ ...portfolio, last_name: e.target.value })
              }
              required
              placeholder="Last Name"
              className="bg-white w-full p-2 border-b-2 border-b-secondary"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Email Address</SubHeading>
          <input
            type="email"
            name="email"
            required
            value={portfolio.email}
            onChange={(e) =>
              setPortfolio({ ...portfolio, email: e.target.value })
            }
            placeholder="name@example.com"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>
        <div className="w-full mt-2 relative">
          <SubHeading>Date of Birth</SubHeading>
          <DatePicker
            required
            selected={portfolio.date_of_birth}
            onChange={(date) =>
              setPortfolio({ ...portfolio, date_of_birth: date })
            }
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
          <div className="absolute top-[70%] right-3 transform -translate-y-1/2 pointer-events-none">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="elements">
                <path
                  id="Vector"
                  d="M17 1V3M5 1V3"
                  stroke="#444955"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M10.9955 12H11.0045M10.9955 16H11.0045M14.991 12H15M7 12H7.00897M7 16H7.00897"
                  stroke="#444955"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 4046"
                  d="M2.5 7H19.5"
                  stroke="#444955"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M1.5 11.2432C1.5 6.88594 1.5 4.70728 2.75212 3.35364C4.00424 2 6.01949 2 10.05 2H11.95C15.9805 2 17.9958 2 19.2479 3.35364C20.5 4.70728 20.5 6.88594 20.5 11.2432V11.7568C20.5 16.1141 20.5 18.2927 19.2479 19.6464C17.9958 21 15.9805 21 11.95 21H10.05C6.01949 21 4.00424 21 2.75212 19.6464C1.5 18.2927 1.5 16.1141 1.5 11.7568V11.2432Z"
                  stroke="#444955"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 4049"
                  d="M2 7H20"
                  stroke="#444955"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="w-full mt-2">
          <SubHeading>Citizenship</SubHeading>
          <input
            type="text"
            name="citizenship"
            value={portfolio.citizenship}
            onChange={(e) =>
              setPortfolio({ ...portfolio, citizenship: e.target.value })
            }
            required
            placeholder="eg.Bangladeshi"
            className="bg-white w-full p-2 border-b-2 border-b-secondary"
          />
        </div>
        <div className="w-full mt-4">
          <button className="w-full py-2 bg-gradient-to-l to-[#5A9BD4] from-[#1E3A5F] font-semibold text-white rounded-md">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
