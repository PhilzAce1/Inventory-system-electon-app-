import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

function Input(props) {
  // body.background = props.color;
  // body.width = props.size === 'big' ? '401px' : '350px';

  return (
    <div
      style={{
        ...body,
        background: props.color ? props.color : '#E5E9F0',
        width: props.size === 'big' ? '401px' : '300px',
        border: '1px solid #E5E9F0',
      }}
    >
      <SearchOutlined style={{ color: '#D0D5DC' }} />
      <input
        style={style}
        type="text"
        name="search"
        id="search"
        placeholder="search"
      />
    </div>
  );
}

export default Input;
const body = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  width: '401px',
  height: '33px',
  borderRadius: '20px',
  paddingLeft: '10px',
  alignItems: 'center',
  margin: '10px',
};
const style = {
  border: 0,
  outline: 0,
  background: 'transparent',
  width: '100%',
  fontSize: '1rem',
  color: 'rgba(0,0,0,0.5)',
  paddingLeft: '10px',
};
