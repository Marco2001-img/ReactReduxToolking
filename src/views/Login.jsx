import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
    <h1 className='text-4xl font-black'>Crea Tu Cuenta</h1>
    <p>Llena el formula </p>

    <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
      <form action="">
        <div className='mb-4'>
          <label 
          className='text-slate-800'
          >
            Email
          </label>
          <input 
          type="email"
          id='email'
          className='mt-2 block p-3 bg-gray-50 w-full'
          name='email'
          placeholder='Tu Email'
          />
        </div>

        <div className='mb-4'>
          <label 
          className='text-slate-800'
          >
            Contraseña
          </label>
          <input 
          type="password"
          id='email'
          className='mt-2 block p-3 bg-gray-50 w-full'
          name='password'
          placeholder='Contraseña'
          />
        </div>

        <input 
        type="submit"
        value="Crear Cuenta"
        className='bg-indigo-800 hover:bg-indigo-900 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
         />
      </form>
    </div>

    <nav>
        <Link to="/auth/register">
        No Tienes cuenta, crea una cuenta
        </Link>
      </nav>
  </div>
  )
}
