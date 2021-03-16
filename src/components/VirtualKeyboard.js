import React from 'react';
import { Button } from 'antd';

const keyBoard = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
  ['o', 'p', 'q', 'r', 's', 't', 'u'],
  ['v', 'w', 'x', 'y', 'z'],
];

function Keyboard({ guessWords = [], guessWord, className }) {
  return (
    <div className={className}>
      {keyBoard.map((row, idx) => (
        <div key={idx} className="keyboard">
          {row.map((key) => {
            return (
              <Button
                onClick={() => guessWord(key)}
                disabled={guessWords.includes(key) && true}
                className="keyboard-key"
                key={key}
              >
                {key}
              </Button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
