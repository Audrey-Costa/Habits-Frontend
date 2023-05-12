import './Habit.css'

interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps): JSX.Element {
  return (
    <div className='habit'></div>
  )
}
