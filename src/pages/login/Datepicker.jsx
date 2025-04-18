import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({
  date,
  setDate,
  dateFormat,
  name,
  rounded,
  placeholder,
  textColor,
  onChangeRaw,
  required,
}) => {
  return (
    <div className="relative">
      <DatePicker
        dateFormat={dateFormat}
        selected={date}
        name={name}
        required={required}
        onChange={(date) => setDate(date)}
        onChangeRaw={onChangeRaw}
        className={`w-full py-2 px-3 border ${
          rounded ? "rounded-md" : ""
        } border-textColor3 ${textColor ? textColor : ""}`}
        placeholderText={
          placeholder ? placeholder : "Date of Birth (dd/mm/yyyy)"
        }
      />
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
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
  );
};

export default Datepicker;
