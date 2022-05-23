
import guessNumber from '../utils/guessNumber'


export const Form = ({ min, max, setSolution, number, setNumber, setError }) => {

  const handleSubmit = async e => {
    e.preventDefault()
    if (!number) return
    let result = await guessNumber(min, max, Number(number))
    if (result < min) {
      setError('Number not found.')
    }
    setSolution(result)
  }

  const handleChange = e => {
    setNumber(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Introduce un número entre {min} y {max}.</label>
      <input
        value={number}
        min={min}
        max={max}
        onChange={handleChange}
        type='number'
        required
        autoFocus
        placeholder='Escribe aquí. Ej. 96746'
      />
      <input type='submit' value='Enviar' />
    </form>
  )

}
