
import { useState } from 'react'

import { Explanation } from './components/Explanation'
import { ResetButton } from './components/ResetButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Form } from './components/Form'

import './App.css'


function App() {

  //Default values//
  const min = 1
  const max = 10000000000

  const [number, setNumber] = useState(null)
  const [error, setError] = useState('')
  const [solution, setSolution] = useState('')


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
            <ResetButton
              setSolution={setSolution}
              setError={setError}
              setNumber={setNumber}
            />
          </>
        }
        {error &&
          <>
            <span className='error'>{error}</span>
          </>}
      </main>
      <Footer />
    </div>
  )
}

export default App
