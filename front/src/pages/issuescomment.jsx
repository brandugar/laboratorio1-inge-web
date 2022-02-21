import React from 'react';

const issuescomment = () => (
  <div>
    <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>Vista Rol</span>
      </div>
    </nav>
    <div className='flex place-content-center text-center mt-5'>
      <div className='w-4/5 border border-black'>issue</div>
    </div>
    <div className='flex place-content-center text-center'>
      <table className='w-4/5 table-fixed border rounded border-black'>
        <thead>
          <tr>
            <th>Comentario</th>
            <th>Hecho por</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default issuescomment;
