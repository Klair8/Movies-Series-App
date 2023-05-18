import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterOne = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        Claire Using React JS & Redux JS integrated with external movies data API
        <a className="text-dark" href="https://www.omdbapi.com/">OMDB</a>
      </div>
    </footer>
  );
};

export default FooterOne;