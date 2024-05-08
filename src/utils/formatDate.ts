export const formatDate = (utcDateString: string) => {
  const regex = /^[A-Z][a-z]{2}, \d{2} [A-Z][a-z]{2} \d{4}/;
  const extractedDateString = utcDateString.match(regex);
  const formattedDateString = extractedDateString ? extractedDateString[0] : "Invalid date";
  return formattedDateString;
};