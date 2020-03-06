import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingPage = () => (
  <div className="loader">
    <div className="icons-list">
      <LoadingOutlined style={{ fontSize: '100px', color: '#face48' }} />
    </div>
  </div>
);

export default LoadingPage;
