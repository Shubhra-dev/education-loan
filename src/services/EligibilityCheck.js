import { dateFormatToMonthYear } from "./FormattedDate";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
export async function checkEligibility(token, portfolio) {
  myHeaders.append("Authorization", `Bearer ${token}`);
  portfolio = {
    ...portfolio,
    class_start_date: dateFormatToMonthYear(portfolio.class_start_date),
    expected_graduation: dateFormatToMonthYear(portfolio.expected_graduation),
  };
  console.log(portfolio);
  const raw = JSON.stringify(portfolio);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/dashboard/loan-portfolios/eigibility-checker",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error checking eligibility");
  }
}
