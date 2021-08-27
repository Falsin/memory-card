import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoadBlock from './LoadBlock';
import './style.css'

import Header from './headerComponent/Header';
import MainContent from './mainContentComponent/MainContent'

function CommonParent() {
  const [imageUploadStatus, setImageUploadStatus] = useState(false);
  console.log('work')

  return (
    <>
      <Header />
      <MainContent changeUploadStatus={setImageUploadStatus} />
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