import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
export default function Sidebar({ save, onDelete }) {
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (auto === true) {
      const interval = setInterval(save, 1000);
      return () => clearInterval(interval);
    }
  }, [auto, save]);
  const btns = [
    {
      title: 'Save',
      onClick: () => {
        save();
      },
    },
    {
      title: 'Auto Save',
      onClick: () => {
        setAuto((state) => !state);
      },
    },
    {
      title: 'Delete',
      onClick: () => {
        console.log('Delete');
        onDelete();
      },
    },
  ];

  const mapBtns = btns.map((btn, i) =>
    i === 1 ? (
      <Button key={i} type={auto ? 'dashed' : 'primary'} onClick={btn.onClick}>
        {btn.title}
      </Button>
    ) : (
      <Button key={i} type="primary" onClick={btn.onClick}>
        {btn.title}
      </Button>
    )
  );
  return (
    <div style={style}>
      <div style={child}>{mapBtns}</div>
    </div>
  );
}
const style = {
  width: '50%',
  height: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
};
const child = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
};
