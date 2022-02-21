import React from 'react';
import { Link } from 'react-router-dom';

const IssueList = (props) => {
  const { id } = props;
  const { description } = props;
  const { category } = props;
  const { priority } = props;
  const { status } = props;
  const { estimate } = props;
  return (
    <tr className='border border-black'>
      <td>{id}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td>{estimate}</td>
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

export default IssueList;
