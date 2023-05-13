import "./Calendar.css";
import { HabitsDay } from "../Habits/HabitsDay";
import { generateYearDaysUntilToday } from "../../utils/generateYearDaysUntilToday";

export function Calendar(): JSX.Element {
  const week: string[] = ["D", "S", "T", "Q", "Q", "S", "S"];

  const currentDays = generateYearDaysUntilToday();
  console.log(currentDays);
  const minDayHabits = 18 * 7;
  const disabledDays = minDayHabits - currentDays.length;

  return (
    <div className="calendar">
      <div>
        {week.map((day, index) => {
          return <div key={index}>{day}</div>;
        })}
      </div>
      <div>
        {currentDays.map((day) => {
          return <HabitsDay key={day}/>;
        })}
        {disabledDays > 0 &&
          Array.from({ length: disabledDays }).map((_, index) => {
            return (
              <div
                key={index}
                style={{ cursor: "not-allowed", opacity: 0.4 }}
              />
            );
          })}
      </div>
    </div>
  );
}
