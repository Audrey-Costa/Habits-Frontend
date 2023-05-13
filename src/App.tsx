import './App.css';
import { Calendar } from './components/Calender/Calendar';
import { Header } from './components/Header/Header';

function App(): JSX.Element {
  return (
    <div className="window">
      <div className='container'>
        <Header />
        <Calendar />
      </div>
    </div>
  )
}

export default App
