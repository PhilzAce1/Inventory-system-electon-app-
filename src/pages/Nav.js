import React from 'react';
// import Input from '../components/Input';
function Nav(props) {
  return (
    <div style={style.body}>
      <div style={style.firstDiv}>
        <h3>Fauna Electron App</h3>
      </div>
    </div>
  );
}
const style = {
  body: {
    width: '100%',
    height: '6%',
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  firstDiv: {
    width: '19%',
    paddingLeft: '50px',
    fontSize: '1.4rem',
    paddingTop: 0,
  },
  secoundDiv: {
    width: '91%',
    paddingLeft: '0px',
    fontSize: '1rem',
    paddingTop: 10,
  },
};
export default Nav;
