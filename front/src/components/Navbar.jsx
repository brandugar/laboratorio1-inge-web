import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
      <span className='font-semibold text-xl tracking-tight'>Vista Rol</span>
    </div>
    <div>
      <Link to='../createuser'>
        <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0'>
          Crear usuario
        </span>
      </Link>
      <Link to='../' className='ml-2'>
        <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0'>
          Cerrar sesion
        </span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
