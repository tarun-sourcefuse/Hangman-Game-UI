import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { H1 } from '../../components/Content';

const mapStateToProps = ({ game: { gameOver, msg } }) => ({
  gameOver,
  msg,
});

const contentStyle = {
  top: '40%',
};

function Result({ gameOver, msg }) {
  const history = useHistory();

  useEffect(() => {
    if (!gameOver) history.push('/login');
  }, []);

  return (
    <H1 style={contentStyle} className="result">
      {msg}
    </H1>
  );
}

export default connect(mapStateToProps)(Result);
