import axios from 'axios';
import IssueList from 'components/IssueList';
import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Issues = () => {
  const params = useParams();
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const issuesData = async () => {
      const options = {
        method: 'get',
        url: `https://software-tracking.herokuapp.com/project/${params.id}/issues`,
      };
      const res = await axios.request(options);
      setIssues(res.data.issues);
    };
    issuesData();
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
              <th>Descripción</th>
              <th>Categoria</th>
              <th>Prioridad</th>
              <th>Estatus</th>
              <th>Estimado en horas</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <IssueList
                key={issue.id}
                id={issue.id}
                description={issue.description}
                category={issue.category}
                priority={issue.priority}
                status={issue.status}
                estimate={issue.hourEstimate}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-row-reverse px-5 py-5'>
        <Link to={`/createissue/${params.id}`}>
          <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0'>
            Crear nuevo asunto
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Issues;
