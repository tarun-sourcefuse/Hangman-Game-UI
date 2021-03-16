import React from 'react';
import { Spin } from 'antd';

function Loader() {
  return <Spin tip="Loading..." size="large" className="spinner" />;
}

export default Loader;
