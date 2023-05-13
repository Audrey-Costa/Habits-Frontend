import "./HabitsDay.css";

interface HabitsDayProps {
  completed?: number;
}

export function HabitsDay(props: HabitsDayProps): JSX.Element {
  return <div className="habit"></div>;
}
