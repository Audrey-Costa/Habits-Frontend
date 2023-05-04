import './App.css';
import { Habit } from './components/Habits/Habit';

function App() {
  return (
    <>
      <Habit completed={1}/>
      <Habit completed={2}/>
      <Habit completed={3}/>
      <Habit completed={4}/>
    </>
  )
}

export default App
