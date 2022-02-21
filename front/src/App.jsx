import Index from 'pages';
import Project from 'pages/project';
import Createuser from 'pages/createuser';
import Issuescomment from 'pages/issuescomment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'styles/globals.css';
import Enterprise from 'pages/enterprise';
import Createenterprise from 'pages/createenterprise';
import CreateProject from 'pages/createproject';
import Issues from 'pages/issues';
import CreateIssue from 'pages/createissue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index />} />
        <Route path='/project/:id/:name' element={<Project />} />
        <Route path='/issues/:id' element={<Issues />} />
        <Route path='adm' element={<Enterprise />} />
        <Route path='adm/createenterprise' element={<Createenterprise />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/createproject/:id' element={<CreateProject />} />
        <Route path='/createissue/:id' element={<CreateIssue />} />
        <Route path='/user/issuescomment' element={<Issuescomment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
