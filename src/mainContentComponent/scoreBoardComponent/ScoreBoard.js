import React, { useEffect, useState } from 'react';

function ScoreBoard (props) {
  const [score, setScore] = useState({
    arrayOfId: [],
    currentScore: 0,
    bestScore: 0
  })

  useEffect(() => {
    if (props.imageId !== null) {
      if (!score.arrayOfId.includes(props.imageId)) {
        setScore({
          arrayOfId: score.arrayOfId.concat(props.imageId),
          currentScore: ++score.currentScore,
          bestScore: score.bestScore,
        });
      } else {
        setScore({
          arrayOfId: [],
          currentScore: 0,
          bestScore: score.currentScore > score.bestScore ? score.currentScore : score.bestScore,
        });
      }
    }
  })

  return (
    <div id='scoreBoard'>
      <ul>
        <li id='currentScore'>Score: <span>{score.currentScore}</span></li>
        <li id='bestScore'>Best score: <span>{score.bestScore}</span></li>
      </ul>
    </div>
  )
}

export default ScoreBoard;