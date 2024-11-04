import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumeroDos, setNumeroUno, setRectanguloArea, setRectanguloPerimetro } from './slice/OpSlice'

export default function App() {
  const dispatch = useDispatch()
  const [seleccion, setSeleccion] = useState('')
  const valor1 = useSelector((state) => state.ap.numeroUno)
  const valor2 = useSelector((state) => state.ap.numeroDos)
  const areaRectan = useSelector((state) => state.ap.AreaRectangulo)
  const perimetroRectan = useSelector((state) => state.ap.PerimetroRectangulo)

  const handleSeleccionarOnChange = (event) =>{
    setSeleccion(event.target.value)
  }

  const handleOnChangeNumeroUno = (e) =>{
    dispatch(setNumeroUno(Number(e.target.value)))
  }

  const handleOnChangeNumeroDos = (e) => {
    dispatch(setNumeroDos(Number(e.target.value)))
  }

  const handleResultadoRectangulo =() =>{
    dispatch(setRectanguloArea())
    dispatch(setRectanguloPerimetro())
  }

  return (
    <div>
      <h1>Figuras Geometricas</h1>

      <input 
      type="text"
      value={valor1}
      onChange={handleOnChangeNumeroUno}
      placeholder='numero 1'
      />

      <input 
      type="text"
      value={valor2}
      onChange={handleOnChangeNumeroDos}
      placeholder='Numero 2'
      />

    <select onChange={handleSeleccionarOnChange} value={seleccion}>
      <option value="1">Cuadrado</option>
      <option value="2">Rectangulo</option>
      <option value="3">Circulo</option>
    </select>

    <button
    onClick={handleResultadoRectangulo}
    >
      Operacion
    </button>

    <p>Resultado Area: {areaRectan}</p>
    <p>Resultado Permitro: {perimetroRectan}</p>
    </div>
  )
}
