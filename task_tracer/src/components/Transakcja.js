import React,{ useState }  from 'react'

function Transakcja({setHistoria,setSaldo}) {
  const [inputs, setInputs] = useState({
    name: '', 
    value: 0 
  });

  const handleChange = (e) => {
    setInputs(values => ({...values,  [e.target.name]: e.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setHistoria((historia)=>[...historia,{name: inputs.name, value: inputs.value}]);
    if(inputs.value<0){
      //setSaldo((saldo) => [...saldo,{wyplywy: inputs.value}])
      setSaldo(previousState => {
        return { ...previousState, wyplywy: inputs.value  }
      })
    }else{
      setSaldo(previousState => {
        return { ...previousState, wplywy: inputs.value }
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
          name = 'name' 
          placeholder='Enter text' 
          value={inputs.name || ""} 
          onChange={handleChange}
          />
        </label>
        <label>
        <h3>Użyte środki<br />Z znakiem - jeśli pobierasz kwote</h3>
          <input 
          className='input' 
          type='number'
          placeholder='Podaj kwote'
          name='value'
          onChange={handleChange}
          />
        </label>
        <br />
        <input className='submit' type={'submit'} />
      </form>
    </>
  )
}

export default Transakcja