import React from 'react';

function CardsCollection(props) {
/*   console.log(props.imgArr) */

  return (
    <div id='cardsCollection'>
      {props.imgArr.map((elem, id) => {
/*         console.log(elem.img)
        setTimeout(() => {
          console.log(elem.img)
        }, 5000); */
        //return <div key={id} style={{backgroundImage: `url(${elem.src.small})`}}></div>
        return <div key={id} style={{backgroundImage: `url(${elem.img})`}}></div>
      })}
    </div>
  )
}

export default CardsCollection;