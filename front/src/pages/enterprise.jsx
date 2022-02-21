import axios from 'axios';
import Card from 'components/Card';
import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  const [enterprises, setEnterprises] = useState([]);
  useEffect(() => {
    const EnterpriseData = async () => {
      const options = {
        method: 'get',
        url: 'https://software-tracking.herokuapp.com/enterprise',
      };
      const res = await axios.request(options);
      setEnterprises(res.data.enterprises);
    };
    EnterpriseData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-row-reverse px-5 py-5'>
        <Link to='createenterprise'>
          <span className='cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0'>
            Crear nueva empresa
          </span>
        </Link>
      </div>
      <div className='flex place-content-center text-center m-3'>
        {enterprises.map((enterprise) => (
          <Card
            key={enterprise.id}
            id={enterprise.id}
            title={enterprise.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
