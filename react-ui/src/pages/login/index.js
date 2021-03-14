import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const mapStateToProps = ({ user: { loading, email } }) => ({
  email,
  loading,
});

function Login({ loading, email, dispatch }) {
  const [userEmail, setUserEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (email) history.push('/game');
  }, [email]);

  const login = () => {
    console.log(userEmail);
    dispatch({ type: 'user/LOGIN', email: userEmail });
  };

  if (loading) return <div>Loading ... </div>;

  return (
    <div className="center-div">
      <div>
        <Input
          onChange={(syntheticEvent) => setUserEmail(syntheticEvent.target.value)}
          placeholder="Enter your email"
          className="login-input"
        />
      </div>

      <div>
        <Button onClick={login} type="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Login);
