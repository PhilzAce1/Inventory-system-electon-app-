import React from 'react';
// import Sidebar from './Sidebar';
import List from './List';
import { mainStyle as style } from '../Util/JSXstyles';
function Main(props) {
  return (
    <div style={style.body}>
      <List />
    </div>
  );
}
export default Main;
