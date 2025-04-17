import { formatDateToYYYYMMDD } from "./dateFunctions";
import { dateFormatToMonthYear } from "./FormattedDate";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

export async function checkRateSubmit(data, userToken) {
  myHeaders.append("Authorization", `Bearer ${userToken}`);
  data = {
    ...data,
    date_of_birth: formatDateToYYYYMMDD(data.date_of_birth),
    class_start_date: dateFormatToMonthYear(data.class_start_date),
    expected_graduation: dateFormatToMonthYear(data.expected_graduation),
  };
  const raw = JSON.stringify({ ...data });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://admin.ed.abidurrahman.com/api/client-panel/dashboard/loan-portfolios/submit",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
