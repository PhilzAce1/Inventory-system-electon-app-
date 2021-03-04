import React from 'react';
// import Sidebar from './Sidebar';
import List from './List';

function Main(props) {
  return (
    <div style={style.body}>
      <List />
    </div>
  );
}
const style = {
  body: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '90%',
    width: '100%',
    paddingRight: '25px',
    paddingBottom: '25px',
  },
};
export default Main;
