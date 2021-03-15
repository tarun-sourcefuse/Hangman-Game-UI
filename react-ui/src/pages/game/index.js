import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { H1, H2 } from '../../components/Content';
import Keyboard from '../../components/VirtualKeyboard';
import Loader from '../../components/Loader';

const mapStateToProps = ({ user: { loading, email }, game }) => ({
  email,
  loading,
  game,
});

const contentStyles = {
  title: { top: '25%' },
  hint: { top: '30%' },
  attempts: { top: '35%' },
};

function Game({ email, dispatch, game }) {
  const history = useHistory();

  useEffect(() => {
    if (email) {
      dispatch({ type: 'game/START_GAME', email });
    }
  }, [email]);

  useEffect(() => {
    if (game && game.gameOver) {
      history.push('/result');
    }
  }, [game]);

  const guessWord = (character) => {
    dispatch({ type: 'game/ATTEMPT', character, email });
  };

  if (game.loading) return <Loader />;

  return (
    <div>
      <H1 style={contentStyles.title}>{game?.word}</H1>
      <H2 style={contentStyles.hint}>Hint: {game?.hint}</H2>
      <H2 style={contentStyles.attempts}>Attempts left: {game?.attempts}</H2>
      <Keyboard className="center-div" guessWord={guessWord} guessWords={game?.guessWords} />
    </div>
  );
}

export default connect(mapStateToProps)(Game);
