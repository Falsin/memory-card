import React from 'react';

function CardsCollection(props) {
  console.log(props.imgArr)

  return (
    <div id='cardsCollection'>
      {props.imgArr.map((elem, id) => {
        return <div key={id} style={{backgroundImage: `url(${elem.src.small})`}}></div>
      })}
    </div>
  )
}

export default CardsCollection;