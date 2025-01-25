import { useState, useRef } from 'react'
import './App.css'
import random from './components/Random'

function App() {
  const [password, setPassword] = useState()
  const lengthRef = useRef()

  const generatePassword = (length) => {
    
    let tempPassword = '';
    for (let i =0; i<length; i++){

      let capital = false;
      let letter;
      let password;

      if (random(0, 1) === 1){
        capital = true
      }

      if (capital){
        letter = String.fromCharCode(random(65, 90))
      }

      else if (!capital){
        letter = String.fromCharCode(random(97, 122))
      }
      password += letter;

    }
    setPassword(password);
  }

  const handleNumbers = (e) => {
    setNumbers(e.target.checked)
  }

  const handleSymbols = (e) => {
    setSymbols(e.target.checked)
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Need a password? We will generate one just for you</h1>
        <p>Here you go, the most secure password in world:</p>
      </div>
      <div className="output">
        <h3>{password}</h3>
      </div>
      <form className="parameters" onSubmit={(e) => {
        e.preventDefault()
        let input = lengthRef.current.value
        if (input < 8)
          input = 8
        else if (input > 64){
          input = 64
        }
        generatePassword(parseInt(input))

      }}>
        <label htmlFor="length">Length</label>
        <input className='inputas' type="number" name='length' ref={lengthRef}/>

        <label htmlFor="numbers">Numbers</label>
        <input className='inputas' type="checkbox" name="numbers" onChange={handleNumbers} />

        <label htmlFor="symbols">Symbols</label>
        <input className='inputas' type="checkbox" name="symbols" id="" onChange={handleSymbols}/>
        <button className='inputas'>Generate</button>
        </form>
    </div>
  )
}

export default App
