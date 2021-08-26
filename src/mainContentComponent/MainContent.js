import React, { useState, useEffect } from 'react';
/* import { createClient } from 'pexels'; */

import ScoreBoard from './scoreBoardComponent/ScoreBoard';
import CardsCollection from './cardsCollectionComponent/CardCollection';

function MainContent(props) {
    /* const [imagesArray, setImagesArray] = useState([]);

    useEffect(() => {
      const client = createClient('563492ad6f917000010000016beb93e33efd4bf5829a8d135c840222');
      const query = 'Nature';
      
      client.photos.search({ query, per_page: 30 })
        .then(response => setImagesArray(imagesArray.concat(response.photos)))
    }, []) */

  return (
    <section>
      <ScoreBoard />
      <CardsCollection imgArr={props.cardArr} />

{/*       <div id='cardsCollection'>
        {imagesArray.map((elem, id) => {
          return <img src={elem.src.small} key={id} alt='a card' />
        })}
      </div> */}
    </section>
  )
}

export default MainContent;