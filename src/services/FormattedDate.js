// Create a new Date object
export function dateFormatToMonthYear(date) {
  let newDate = new Date(date);

  // Extract the month and year
  let month = newDate.getMonth() + 1; // getMonth() returns 0 for January, so we add 1
  let year = newDate.getFullYear();

  // Format the month to always have two digits (e.g., "08" instead of "8")
  month = month < 10 ? "0" + month : month;

  // Output the formatted date
  let formattedDate = year + "-" + month;

  return formattedDate;
}
