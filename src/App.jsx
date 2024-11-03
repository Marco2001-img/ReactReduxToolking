import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumeroDos, setNumeroUno, setResultado } from './slice/OpSlice'
export default function App() {
  const dispatch = useDispatch()
  const numero1 = useSelector((state) => state.suma.numeroUNo)
  const numero2 = useSelector((state) => state.suma.numeroDos)
  const resultado = useSelector((state) => state.suma.resultado)

  const onChangeNumero1 = (e) => {
    dispatch(setNumeroUno(Number(e.target.value)))
  }

  const onChangeNumero2 = (e) => {
    dispatch(setNumeroDos(Number(e.target.value)))
  }

  const ResultadoSuma = () => {
    dispatch(setResultado())
  }
  

  return (
    <div>
      <h1>Suma</h1>

      <input 
      type="text"
      value={numero1}
      placeholder='Numero 1'
      onChange={onChangeNumero1}
      />  

      <input 
      type="text"
      value={numero2}
      placeholder='Numero 2'
      onChange={onChangeNumero2}
      />

      <button
      onClick={ResultadoSuma}
      >Sumar</button>

      <p>Total: {resultado}</p>
    </div>
  )
}
