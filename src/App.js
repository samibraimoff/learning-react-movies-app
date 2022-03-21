import React, { Fragment } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import Main from './layout/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
