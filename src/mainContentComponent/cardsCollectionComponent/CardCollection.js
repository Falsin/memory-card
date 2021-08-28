import React, {useState, useEffect } from 'react';

function CardsCollection(props) {
  const [randomArray, setRandomArr] = useState(createRandomArr(props.imgArr))

  useEffect(() => props.changeUploadStatus(true), []);

  function createRandomArr(array) {
    let newArray = [];
    const maxVal = array.length + 0.5;
    const minVal = 0.5;

    for (let i = 0; i < array.length; i++) {
      const randomNumber = Math.round(minVal + Math.random() * (maxVal - minVal));
      const randomIndex = randomNumber - 1;
      newArray.push(array[randomIndex]);
    }

    return newArray;
  }

  return (
    <div id='cardsCollection'>
      {randomArray.map((elem, id) => {
        return <div className='visible' onClick={() => {
          props.setIdImage(elem.id)
          setRandomArr(createRandomArr(props.imgArr))
        }} key={id} style={{backgroundImage: `url(${elem.img})`}}></div>
      })}

      {(() => {
        let arrayOfElements = []
        for (let i = 0; i < 15; i++) {
          arrayOfElements.push(<div key={i + 40}></div>)
        }

        return arrayOfElements;
      })().map(elem => elem)}
    </div>
  )
}

export default CardsCollection;