import {  createContext, useState } from 'react';
import './App.css'
import Bilans from './components/Bilans';
import Saldo from './components/Saldo';
import Transakcja from './components/Transakcja';
import Historia from './components/Historia';
export const BilansContext = createContext();
function App() {
  const bilans = 200;
  const [historia, setHistoria] = useState([]);
  const [saldo, setSaldo] = useState({wplywy:0, wyplywy:0})

  return (
    <BilansContext.Provider value={bilans}>
      <div className="App">
        <h1 className='title'>Expense Tracker</h1>
        <Bilans historia={historia}></Bilans>
        <Saldo saldo={saldo}></Saldo>
        <h2 className='BottomBorder'>Historia</h2>
        <Historia historia={historia} />
        <h2 className='BottomBorder'>Dodaj transakcje</h2>
        <Transakcja setHistoria={setHistoria} setSaldo={setSaldo} ></Transakcja>
      </div>
    </BilansContext.Provider>
  );
}

export default App;
