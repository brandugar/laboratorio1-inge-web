import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const email = e.target.elements.email?.value;

    const options = {
      method: 'POST',
      url: 'https://software-tracking.herokuapp.com/auth',
      data: { email },
    };

    try {
      const response = await axios.request(options);
      if (response?.status === 200) {
        localStorage.setItem('user', JSON.stringify(response));
        if (response.data.content.role === 'Administrador') {
          console.log(response.data.content.role);
          navigate('/adm');
        }
        if (response.data.content.role === 'Desarrollador') {
          navigate('');
        }
        if (response.data.content.role === 'Cliente') {
          navigate('/project');
        }
      }
    } catch (error) {
      setErrorMessage('Usuario no valido');
    }
  };
  return (
    <div className='h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
          Ingresar 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type='email'
              className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
              id='email'
              placeholder='Email'
            />
          </div>
          <span className='text-red-500'>{errorMessage}</span>

          <div className='flex justify-center items-center mt-6'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
