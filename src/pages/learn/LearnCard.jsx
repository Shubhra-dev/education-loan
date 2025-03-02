import SubHeading from "../../components/SubHeading";

function LearnCard({ image, children, title }) {
  return (
    <div className={`w-full sm:w-[30%] px-2`}>
      <div className="mb-2 p-1 w-max m-auto">
        <img src={image} alt={"card image"} />
      </div>
      <SubHeading align={`text-center`} color={`secondary`}>
        {title}
      </SubHeading>
      {children}
    </div>
  );
}

export default LearnCard;
