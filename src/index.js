import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createClient } from 'pexels';
import LoadBlock from './LoadBlock';
import './style.css'

import Header from './headerComponent/Header';
import MainContent from './mainContentComponent/MainContent'

function CommonParent() {
  const [imagesArray, setImagesArray] = useState([]);
  let [image, setImage] = useState(null)
  

    useEffect(() => {
      if (!imagesArray.length) {
        const client = createClient('563492ad6f917000010000016beb93e33efd4bf5829a8d135c840222');
        const query = 'Nature';
      
        client.photos.search({ query, per_page: 30 })
          .then(response => {
            console.log(response.photos)
            let newArray = [...response.photos];

            Promise.all(newArray.map(elem => {
              return (
                fetch(elem.src.small, {mode: 'cors'})
                  .then(response => response.blob())
                  .then(response => URL.createObjectURL(response))
                  .then(response => elem.img = response)
              )
            }))
              .then(() => setImagesArray(imagesArray.concat(newArray)) )
          })
      } 
    })

  return (
    <>
      <Header />
      <MainContent cardArr={imagesArray} />
      {imagesArray.length !== 0 ? null : <LoadBlock />}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <CommonParent />
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
