import React from 'react';
import { Button as BTN } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function Button(props) {
  return (
    <BTN type="primary" icon={<SearchOutlined />}>
      Search
    </BTN>
  );
}

export default Button;
