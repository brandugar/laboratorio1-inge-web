import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { title } = props;
  const { id } = props;

  return (
    <Link to={`/project/${id}/${title}`}>
      <div className='cursor-pointer border border-black rounded-md p-5 w-auto m-3'>
        <span className='text-2xl font-extrabold'>{title}</span>
      </div>
    </Link>
  );
};

export default Card;
