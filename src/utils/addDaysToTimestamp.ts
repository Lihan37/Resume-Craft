function addDaysToTimestamp(timestamp: number, daysToAdd: number): string {
  const date = new Date(timestamp);

  date.setDate(date.getDate() + daysToAdd);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
  }).format(date);

  return formattedDate;
}

export default addDaysToTimestamp;
