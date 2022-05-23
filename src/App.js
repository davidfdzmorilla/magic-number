
import { useState } from 'react'
import './App.css'
import { Explanation } from './components/Explanation'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Header } from './components/Header'

function App() {

  const min = 1
  const max = 10000000000

  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const [solution, setSolution] = useState('')

  const handleReset = () => {
    setNumber('')
    setSolution('')
    setError('')
  }


  return (
    <div className="App">
      <Header />
      <main>
        <Explanation />
        <Form
          min={min}
          max={max}
          setSolution={setSolution}
          number={number}
          setNumber={setNumber}
          setError={setError}
        />
        {solution && solution > 0 &&
          <>
            <span className='solution'>{solution}</span>
            <button className='reset' onClick={handleReset}>Reset</button>
          </>
        }
        {error &&
          <>
            <span className='error'>{error}</span>
            <button className='reset' onClick={handleReset}>Reset</button>
          </>}
      </main>
      <Footer />
    </div>
  )
}

export default App
