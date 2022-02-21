import React from 'react';
import { Link } from 'react-router-dom';

const RowList = (props) => {
  const { id } = props;
  const { name } = props;
  const { description } = props;
  return (
    <tr className='border border-black'>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <Link to={`../issues/${id}`}>
          <i className='fa-solid fa-eye m-1'> </i>
        </Link>
        <a>
          <i className='fa-solid fa-pen m-1'> </i>
        </a>
        <a>
          <i className='fa-solid fa-trash m-1'> </i>
        </a>
        <a>
          <i className='fa-solid fa-comment m-1'> </i>
        </a>
      </td>
    </tr>
  );
};

export default RowList;
