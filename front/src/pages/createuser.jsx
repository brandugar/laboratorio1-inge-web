import Navbar from 'components/Navbar';
import React from 'react';

const createuser = () => (
  <div>
    <Navbar />
    <div className='grid place-items-center my-20'>
      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            {/* <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='correo'
            > */}
            Correo
            {/* </label> */}
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-mail'
              name='correo'
              type='email'
              placeholder='example@example.com'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            {/* <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='Empresa'
            > */}
            Empresa
            {/* </label> */}
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-Empresa'
              name='Empresa'
              type='text'
              placeholder='identificación'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            {/* <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='rol'
            > */}
            Rol
            {/* </label> */}
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-rol'
              name='rol'
              type='text'
              placeholder='Cuentanos'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            {/* <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='contraseña'
            > */}
            contraseña
            {/* </label> */}
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-cargo'
              name='contraseña'
              type='text'
              placeholder='*******'
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-2/3'>
            <button
              type='submit'
              className='shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            >
              Enviar registro
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default createuser;
