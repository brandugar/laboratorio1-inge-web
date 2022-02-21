import { Select } from '@mui/material';
import axios from 'axios';
import Navbar from 'components/Navbar';
import useFormData from 'hooks/useFormData';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CreateIssue = () => {
  const categoryOption = [
    { value: 'MissingTask', label: 'missing task' },
    { value: 'Bug', label: 'bug' },
    { value: 'Additional', label: 'aditional' },
  ];

  const params = useParams();
  const { form, formData, updateFormData } = useFormData();
  const submitForm = async () => {
    const options = {
      method: 'POST',
      url: `https://software-tracking.herokuapp.com/issue`,
      data: { project: formData },
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
              <label htmlFor='description'>
                <span>Descripcion del asunto</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='description'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='category'>
                <span>Categoria</span>
                <Select options={categoryOption} />
                {
                  // eslint-disable-next-line no-console
                  console.log(categoryOption)
                }
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='category'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='priority'>
                <span>Prioridad</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='priority'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='status'>
                <span>Estado</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='status'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='hourEstimate'>
                <span>Tiempo estimado (Horas)</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='hourEstimate'
                  type='number'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='userId'>
                <span>ID Usuario</span>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='userId'
                  type='text'
                  placeholder='Postobon'
                />
              </label>
              <label htmlFor='projectId'>
                <input
                  className='hidden appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  name='projectId'
                  type='text'
                  defaultValue={params.id}
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

export default CreateIssue;
