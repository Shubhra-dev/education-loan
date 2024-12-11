function SlidersHorizontal({ color, width, stroke }) {
  return (
    <svg
      width={width ? width : "24"}
      height={width ? width : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SlidersHorizontal">
        <path
          id="Vector"
          d="M9.75 9.75C10.9926 9.75 12 8.74264 12 7.5C12 6.25736 10.9926 5.25 9.75 5.25C8.50736 5.25 7.5 6.25736 7.5 7.5C7.5 8.74264 8.50736 9.75 9.75 9.75Z"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M15.75 18.75C16.9926 18.75 18 17.7426 18 16.5C18 15.2574 16.9926 14.25 15.75 14.25C14.5074 14.25 13.5 15.2574 13.5 16.5C13.5 17.7426 14.5074 18.75 15.75 18.75Z"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M12 7.5H20.25"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M3.75 7.5H7.5"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M18 16.5H20.25"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_6"
          d="M3.75 16.5H13.5"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SlidersHorizontal;
