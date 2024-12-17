import { useEffect, useState } from "react";
import { schoolsList } from "./schools";
import searchIcon from "../../assets/search.svg";
import SectionLayout from "../../ui/SectionLayout";
import Title from "../../components/Title";
import SmallText from "../../components/SmallText";
import ArrowLeft from "../../icon/ArrowLeft";
import ArrowRight from "../../icon/ArrowRight";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import PrimaryButton from "../../components/PrimaryButton";

const TableComponent = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Default rows per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [paginatedData, setPaginatedData] = useState([]);
  const [index, setIndex] = useState({});
  const totalPages = Math.ceil(schoolsList.length / entriesPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex =
      startIndex + entriesPerPage > schoolsList.length
        ? schoolsList.length
        : startIndex + entriesPerPage;
    setIndex({ start: startIndex, end: endIndex });
    setPaginatedData(schoolsList.slice(startIndex, endIndex));
  }, [currentPage, entriesPerPage, setPaginatedData]);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  function handlePageInput(e) {
    if (
      isNaN(e.target.value) ||
      e.target.value > totalPages ||
      e.target.value < 0
    ) {
      return;
    }
    setCurrentPage(e.target.value);
  }

  return (
    <SectionLayout>
      <div className="container mx-auto px-4 py-6">
        <Title color={`text-secondary`} align={`text-center`}>
          Find your
          <span className="text-primary"> MPOWER eligible school</span>
        </Title>
        <SubHeading color={`textColor1`} align={`text-center`} padding={`py-0`}>
          Search our list of eligible schools.
        </SubHeading>

        <div className="flex flex-col sm:flex-row justify-between items-center my-4 gap-4">
          <div className="flex items-center gap-2">
            <select
              id="entries"
              className="border rounded px-2 py-1 text-sm"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <SmallText color={`textColor1`}>entities per page</SmallText>
          </div>
          <div className="relative rounded-md">
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute top-2 left-2"
            />
            <input
              type="text"
              placeholder="Search School"
              className="pl-10 pr-2 py-2 w-full sm:w-64 rounded-md bg-secondary/20"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-md">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-primary">
                <th className="py-2 px-6 text-left rounded-l-md">
                  <Text color={`white`} font={`font-semibold`}>
                    School Name
                  </Text>
                </th>
                <th className="py-2 px-4 text-left">
                  <Text color={`white`} font={`font-semibold`}>
                    State
                  </Text>
                </th>
                <th className="py-2 px-4 text-left rounded-r-md">
                  <Text color={`white`} font={`font-semibold`}>
                    Country
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((school, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "" : "bg-secondary/20"} `}
                >
                  <td className="py-2 px-6">
                    <Text color={`textColor1`}>{school.name}</Text>
                  </td>
                  <td className="py-2 px-4">
                    <Text color={`textColor1`}>{school.state}</Text>
                  </td>
                  <td className="py-2 px-4">
                    <Text color={`textColor1`}>{school.country}</Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <div className="flex items-center gap-1">
              <SmallText>Page</SmallText>
              <input
                type="number"
                value={currentPage}
                onChange={handlePageInput}
                className="w-[45px] px-1 border border-gray-400 rounded"
              />
              <SmallText> of {totalPages}</SmallText>
            </div>
            <SmallText>
              Showing {index.start + 1} to {index.end} of {schoolsList.length}{" "}
              entries
            </SmallText>
          </div>
          <div className="flex items-center gap-2">
            <div
              onClick={handlePrev}
              className="cursor-pointer p-3 rounded-md border border-primary"
            >
              <ArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="cursor-pointer py-3 px-6 rounded-md bg-primary flex items-center gap-2"
            >
              <Text color={`white`} font={`font-semibold`} padding={`py-0`}>
                Next
              </Text>
              <ArrowRight />
            </div>
          </div>
          <div>
            <Text
              color={`secondary underline cursor-pointer`}
              font={`font-semibold`}
            >
              Download list of supported school
            </Text>
          </div>
        </div>
      </div>
      <div className="w-max m-auto mt-2">
        <PrimaryButton addedClass={`my-2 m-auto sm:m-0`}>
          apply now
        </PrimaryButton>
      </div>
    </SectionLayout>
  );
};

export default TableComponent;
