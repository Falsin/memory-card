import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';

import ScoreBoard from './scoreBoardComponent/ScoreBoard';
import CardsCollection from './cardsCollectionComponent/CardCollection';

const MainContent = React.memo((props) => {
  const [imagesArray, setImagesArray] = useState([]);
  const [idImage, setIdImage] = useState(null);

  console.log('work2')

  useEffect(() => {
    if (!imagesArray.length) {
      const client = createClient('563492ad6f917000010000016beb93e33efd4bf5829a8d135c840222');
      const query = 'Nature';
    
      client.photos.search({ query, per_page: 30 })
        .then(response => {
          let arrayOfPromises = response.photos.map(elem => {
            return (
              fetch(elem.src.medium, {mode: 'cors'})
                .then(response => response.blob())
                .then(response => URL.createObjectURL(response))
                .then(response => elem.img = response)
            )
          })

          Promise.all(arrayOfPromises)
            .then(() => setImagesArray(response.photos))
        })
    }
  })

  useEffect(() => {
    if (idImage !== null) {
      console.log(idImage);
      setIdImage(null)
    }
  }, [idImage])

  return (
    <section>
      <ScoreBoard />
      {imagesArray.length ? <CardsCollection imgArr={imagesArray} setIdImage={setIdImage} changeUploadStatus={props.changeUploadStatus} /> : null}
    </section>
  )
})

/* function setRandomArr(array) {
  const maxVal = array.length + 0.5;
  const minVal = 0.5;

  return Math.round(minVal + Math.random() * (maxVal - minVal));
} */

export default MainContent;