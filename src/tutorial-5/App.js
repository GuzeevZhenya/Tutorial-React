import React, { useState } from 'react';

import Phrase from './components/Phrase';
import { EmptyBlock } from './components/EmptyBlock';
import { adjectivesArr, nounsArr } from './Words';

import './App.css';

export const App = () => {
  const [ firstAbjectives ] = useState(adjectivesArr);
  const [ secondAbjectives ] = useState(adjectivesArr);
  const [ nounsArray ] = useState(nounsArr);

  const [ phrases, setPhrase ] = useState([]);

  const getRandomPhrase = () => {
    const firstRandomAdj = Math.floor(Math.random() * firstAbjectives.length);
    const secondRandomAbj = Math.floor(Math.random() * firstAbjectives.length);
    const nounRandom = Math.floor(Math.random() * nounsArr.length);
    const arr = `${firstAbjectives[firstRandomAdj]} ${secondAbjectives[
      secondRandomAbj
    ]} ${nounsArray[nounRandom]}`;

    setPhrase([ arr, ...phrases ]);
  };

  return (
    <div className="wrapper">
      {phrases.length !== 0 ? (
        <div className="list">
          {phrases.map((phrase, index) => (
            <div key={index} className="block">
              <Phrase text={phrase} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyBlock />
      )}
      <button className="btn btn_generate" onClick={getRandomPhrase}>
        Сгенерировать
      </button>
    </div>
  );
};
