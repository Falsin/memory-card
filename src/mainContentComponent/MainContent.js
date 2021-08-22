import React from 'react';
import ScoreBoard from './scoreBoardComponent/ScoreBoard';

function MainContent(params) {
  return (
    <section>
      <ScoreBoard />
      <div id='cardsCollection'>collection</div>
    </section>
  )
}

export default MainContent;