import dayjs, { Dayjs } from "dayjs";

export function generateYearDaysUntilToday(): string[] {
  const startOfYear: Dayjs = dayjs().startOf("year");
  const today: Dayjs = dayjs();

  const dates = [];
  let compareDate = startOfYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate().toString());
    compareDate = compareDate.add(1, "day");
  }
  return dates;
}
