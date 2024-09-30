// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x); // Split the pathname into parts

  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li className="breadcrumb-item" key={pathname}>
              <Link to={routeTo}>{pathname}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
