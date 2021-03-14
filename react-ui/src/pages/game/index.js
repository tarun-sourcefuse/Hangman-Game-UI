import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

const mapStateToProps = ({ user: { loading, email }, game }) => ({
  email,
  loading,
  game,
});

const keyBoard = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
  ['o', 'p', 'q', 'r', 's', 't', 'u'],
  ['v', 'w', 'x', 'y', 'z'],
];

function Game({ email, loading, dispatch, game }) {
  useEffect(() => {
    if (email) dispatch({ type: 'game/START_GAME', email });
  }, [email]);

  useEffect(() => {
    if (game && game.gameOver) {
      alert(game.msg);
    }
  }, [game]);

  const guessWord = (character) => {
    dispatch({ type: 'game/ATTEMPT', character, email });
  };

  console.log(' >>> ', loading);
  if (loading) return <div>Loading ... </div>;
  return (
    <div>
      <div className="game-title">
        <h1>{game?.word}</h1>
      </div>
      <div className="game-hint">
        <h2>Hint: {game?.hint}</h2>
      </div>
      <div className="game-answer">
        <h2>Attempts left: {game?.attempts}</h2>
      </div>
      <div className="center-div">
        <div>
          {keyBoard.map((row, idx) => (
            <div key={idx} className="keyboard">
              {row.map((key) => {
                return (
                  <Button
                    onClick={() => guessWord(key)}
                    disabled={game?.guessWords?.includes(key) && true}
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
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Game);
