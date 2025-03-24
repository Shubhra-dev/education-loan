function Profile({ active }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector 6661"
          d="M10.5 13.5C10.5 13.5 11.25 13.5 12 15C12 15 14.3824 11.25 16.5 10.5"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M9.75 16.5H4.94315C3.78412 16.5 2.86223 15.936 2.0345 15.1474C0.340023 13.5331 3.1221 12.243 4.18318 11.6112C6.56693 10.1918 9.5647 10.1322 12 11.4324"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Ellipse 1381"
          d="M12.375 4.875C12.375 6.73896 10.864 8.25 9 8.25C7.13604 8.25 5.625 6.73896 5.625 4.875C5.625 3.01104 7.13604 1.5 9 1.5C10.864 1.5 12.375 3.01104 12.375 4.875Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Profile;
