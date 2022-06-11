import { useState } from 'react';
import './App.css'
import Bilans from './components/Bilans';
import Saldo from './components/Saldo';
import Transakcja from './components/Transakcja';
import Historia from './components/Historia';

function App() {
  const [historia, setHistoria] = useState([]);
  const [saldo, setSaldo] = useState({wplywy:0, wyplywy:0});
  const [bilans,SetBilans] = useState(0)

  return (
      <div className="App">
        <h1 className='title'>Expense Tracker</h1>   
        <Bilans bilans={bilans}></Bilans>
        <Saldo saldo={saldo}></Saldo>
        <h2 className='BottomBorder'>Historia</h2>
        <Historia historia={historia} />
        <h2 className='BottomBorder'>Dodaj transakcje</h2>
        <Transakcja setHistoria={setHistoria} setSaldo={setSaldo} SetBilans={SetBilans} ></Transakcja>
      </div>
  );
}

export default App;
