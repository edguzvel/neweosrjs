import React from 'react';
import SideBar from './SideBar'; // adjust the path as needed

const styles = {
  Header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '10vh', // 10% of viewport height
    backgroundColor: '#ffffff',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
  },
  Input: {
    position: 'relative',
    top: '16px',
    left: '75%', // 5% of parent's width
    width: '20%', // 90% of parent's width
    height: '42px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(237,237,237,0.64)',
    color: '#14171a',
    fontSize: '1em', // relative to parent's font size
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '19px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Search',
};

const HeaderWithInput = (props) => {
  return (
    <div style={styles.Header}>
      <SideBar />
      <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
      {props.children}
    </div>
  );
};

export default HeaderWithInput;