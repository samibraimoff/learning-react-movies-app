import React from 'react';

export const Footer = () => {
  return (
    <footer className='page-footer indigo lighten-2'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Movies Database
          <a className='grey-text text-lighten-4 right' href='#!'>
            Home
          </a>
        </div>
      </div>
    </footer>
  );
};
