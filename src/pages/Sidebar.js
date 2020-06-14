import React from 'react';
import { Button } from 'antd';
export default function Sidebar(props) {
  const btns = [
    {
      title: 'Save',
      onClick: () => {
        console.log('');
      },
    },
    {
      title: 'Auto Save',
      onClick: () => {
        console.log('Auto Save');
      },
    },
    {
      title: 'Delete',
      onClick: () => {
        console.log('Delete');
      },
    },
  ];
  const mapBtns = btns.map((btn, i) => (
    <Button type="primary" onClick={btn.onClick}>
      {btn.title}
    </Button>
  ));
  return (
    <div style={style}>
      <div style={child}>{mapBtns}</div>
    </div>
  );
}
const style = {
  width: '19%',
  height: '100%',
  padding: '10px',
  paddingLeft: '4vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
const child = {
  width: '100%',
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
};
