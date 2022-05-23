
export const ResetButton = ({ setNumber, setSolution, setError }) => {

  const handleReset = () => {
    setNumber('')
    setSolution('')
    setError('')
  }

  return (
    <button className='reset' onClick={handleReset}>Reset</button>
  )

}
