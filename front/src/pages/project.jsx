import axios from 'axios';
import Navbar from 'components/Navbar';
import RowList from 'components/RowList';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Project = () => {
  const params = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectData = async () => {
      const options = {
        method: 'get',
        url: 'https://software-tracking.herokuapp.com/project',
      };
      const res = await axios.request(options);
      setProjects(res.data.projects);
    };
    projectData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-row-reverse px-5 py-5'>
        <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0'>
          Cambiar nombre empresa
        </span>
        <span className='mx-5'>{params.name}</span>
      </div>
      <div className='flex place-content-center text-center'>
        <table className='w-4/5 table-fixed border rounded border-black'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Proyecto</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              if (project.clientEnterpriseId === params.id) {
                return (
                  <RowList
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                  />
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className='flex flex-row-reverse px-5 py-5'>
        <Link to={`/createproject/${params.id}`}>
          <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0'>
            Crear nuevo proyecto
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
