import React from 'react';

function Hangman({ attempts = 6 }) {
  console.log(attempts);
  return (
    <div className="game-content" style={{ top: '10%' }}>
      <svg
        height="250"
        width="200"
        style={{
          fill: 'transparent',
          stroke: 'black',
          strokeWidth: '4px',
          strokeLinecap: 'round',
        }}
      >
        <line x1="60" y1="20" x2="140" y2="20"></line>
        <line x1="140" y1="20" x2="140" y2="50"></line>
        <line x1="60" y1="20" x2="60" y2="230"></line>
        <line x1="20" y1="230" x2="100" y2="230"></line>

        {attempts < 6 && <circle cx="140" cy="70" r="20"></circle>}
        {attempts < 5 && <line x1="140" y1="90" x2="140" y2="150"></line>}
        {attempts < 4 && <line x1="140" y1="120" x2="120" y2="100"></line>}
        {attempts < 3 && <line x1="140" y1="120" x2="160" y2="100"></line>}
        {attempts < 2 && <line x1="140" y1="150" x2="120" y2="180"></line>}
        {attempts < 1 && <line x1="140" y1="150" x2="160" y2="180"></line>}
      </svg>
    </div>
  );
}

export default Hangman;
