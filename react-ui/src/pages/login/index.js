import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import Loader from '../../components/Loader';
import 'antd/dist/antd.css';

const mapStateToProps = ({ user: { loading, email } }) => ({
  email,
  loading,
});

function Login({ loading, email, dispatch }) {
  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    if (email) history.push('/game');
  }, [email]);

  const checkLogin = (data) => {
    dispatch({ type: 'user/LOGIN', email: data.userEmail });
  };

  if (loading) return <Loader />;

  return (
    <Form form={form} layout="inline" onFinish={checkLogin} className="login-form">
      <div className="center-div">
        <div>
          <Form.Item
            name="userEmail"
            rules={[{ required: true, type: 'email', message: 'Please enter Email' }]}
            shouldUpdate="true"
          >
            <Input placeholder="Enter your email" className="login-input" />
          </Form.Item>
        </div>

        <div>
          <Form.Item shouldUpdate={(prevValues, currentValues) => prevValues !== currentValues}>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}

export default connect(mapStateToProps)(Login);
