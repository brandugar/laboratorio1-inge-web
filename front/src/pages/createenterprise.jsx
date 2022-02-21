import axios from 'axios';
import Navbar from 'components/Navbar';
import useFormData from 'hooks/useFormData';
import React from 'react';
import { Link } from 'react-router-dom';

const Createenterprise = () => {
  const { form, formData, updateFormData } = useFormData();
  const submitForm = async () => {
    const options = {
      method: 'POST',
      url: 'https://software-tracking.herokuapp.com/enterprise',
      data: { enterprise: formData },
    };
    await axios.request(options);
  };

  return (
    <div>
      <Navbar />
      <div className='grid place-items-center my-20'>
        <form ref={form} onChange={updateFormData} className='w-full max-w-lg'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label htmlFor='name'>
                <span>Nombre de la empresa</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='name'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-2/3'>
              <button
                type='submit'
                className='shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                onClick={submitForm}
              >
                <Link to='../adm'>Enviar registro</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createenterprise;
