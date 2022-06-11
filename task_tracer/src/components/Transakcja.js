import React, { useState } from 'react'

function Transakcja({ setHistoria, setSaldo, SetBilans }) {
  const [name, SetName] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHistoria((historia) => [...historia, { name: name, value: number }]);
    SetBilans(previous => previous + number)
    if (number < 0) {
      setSaldo(previousState => {
        return { ...previousState, wyplywy: number + previousState.wyplywy }
      })
    } else {
      setSaldo(previousState => {
        return { ...previousState, wplywy: number + previousState.wplywy }
      })
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Rodzaj transakcji</h3>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Enter text'
            value={name || ""}
            onChange={(e) => SetName(e.target.value)}
          />
        </label>
        <label>
          <h3>Użyte środki<br />Z znakiem - jeśli pobierasz kwote</h3>
          <input
            className='input'
            type='number'
            placeholder='Podaj kwote'
            name='value'
            value={number || ''}
            onChange={(e) => setNumber(e.target.valueAsNumber)}
          />
        </label>
        <br />
        <input className='submit' type={'submit'} />
      </form>
    </>
  )
}

export default Transakcja