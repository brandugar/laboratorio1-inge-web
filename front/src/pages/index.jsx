import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <Link to='/adm'>
      <div>adm</div>
    </Link>
    <Link to='/user'>
      <div>cliente</div>
    </Link>
    <Link to='/dev'>
      <div>desarrollador</div>
    </Link>
  </div>
);

export default Index;
