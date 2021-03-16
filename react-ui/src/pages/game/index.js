import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { H1, H2 } from '../../components/Content';
import Keyboard from '../../components/VirtualKeyboard';
import Loader from '../../components/Loader';
import Hangman from '../../components/Hangman';

const mapStateToProps = ({ user: { loading, email }, game }) => ({
  email,
  loading,
  game,
});

const contentStyles = {
  title: { top: '30%' },
  hint: { top: '40%' },
  attempts: { top: '50%' },
};

function Game({ email, dispatch, game }) {
  useEffect(() => {
    if (email) {
      startGame();
    }
  }, [email]);

  const startGame = () => {
    dispatch({ type: 'game/START_GAME', email });
  };

  const guessWord = (character) => {
    dispatch({ type: 'game/ATTEMPT', character, email });
  };

  if (game.loading) return <Loader />;

  return (
    <div>
      <Hangman attempts={game?.attempts} />
      <H1 style={contentStyles.title}>{game?.word}</H1>
      {game.gameOver ? (
        <div>
          <H2 style={contentStyles.hint}>{game?.msg}</H2>
          <div className="game-content" style={contentStyles.attempts}>
            <Button onClick={startGame}>Start Again</Button>
          </div>
        </div>
      ) : (
        <div>
          <H2 style={contentStyles.hint}>Hint: {game?.hint}</H2>
          <H2 style={contentStyles.attempts}>Attempts left: {game?.attempts}</H2>
        </div>
      )}
      <Keyboard className="center-div" guessWord={guessWord} guessWords={game?.guessWords} />
    </div>
  );
}

export default connect(mapStateToProps)(Game);
