import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import TopNavbar from './components/top-navbar';

const App = () => {
  return (
    <>
      <TopNavbar />
      <Home />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
