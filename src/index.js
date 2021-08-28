import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import Header from './headerComponent/Header';
import MainContent from './mainContentComponent/MainContent';
import Footer from './footerComponents/Footer';
import LoadBlock from './LoadBlock';


function CommonParent() {
  const [imageUploadStatus, setImageUploadStatus] = useState(false);

  return (
    <>
      <Header />
      <MainContent changeUploadStatus={setImageUploadStatus} />
      <Footer />
      {imageUploadStatus ? null : <LoadBlock />}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <CommonParent />
  </React.StrictMode>,
  document.getElementById('root')
);