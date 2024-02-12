const formatDateToDayMonth = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export default formatDateToDayMonth;
