import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import Header from './headerComponent/Header';
import MainContent from './mainContentComponent/MainContent'

ReactDOM.render(
  <React.StrictMode>
    <>
    <Header />
    <MainContent />
    {/* <Footer /> */}
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
