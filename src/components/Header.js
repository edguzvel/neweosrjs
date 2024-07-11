import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import SubmitReportForm from './SubmitReportForm.js';

const styles = {
  Header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '10vh', // Adjusted to accommodate both search input and nav items
    backgroundColor: '#ffffff',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
    display: 'flex', // Added to layout the search and nav side by side
    justifyContent: 'space-between', // Space out elements
    alignItems: 'center', // Vertically center elements
    padding: '0 20px', // Added padding for breathing room
  },
  Input: {
    position: 'relative',
    width: '20%', // Adjust width as needed
    height: '42px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'rgba(237,237,237,0.64)',
    color: '#14171a',
    fontSize: '1em',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: '19px',
    outline: 'none',
  },
  NavMenu: {
    display: 'flex', // Changed to flex for horizontal layout
    height: '100%', // Match header height
    alignItems: 'center', // Center items vertically
  },
};

const defaultProps = {
  text: 'Search',
};

const HeaderWithInputAndNav = (props) => {
  return (
    <div style={styles.Header}>
      <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
      <Nav style={styles.NavMenu}>
        <NavItem>
          <SubmitReportForm />
        </NavItem>
        <NavItem>
          <NavLink href="#">Reports</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Calendar</NavLink>
        </NavItem>
      </Nav>
      {props.children}
    </div>
  );
};

export default HeaderWithInputAndNav;