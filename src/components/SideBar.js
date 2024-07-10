import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import SubmitReportForm from './SubmitReportForm.js';

const styles = {
  NavMenu: {
    position: 'fixed',
    top: '10vh',
    left: '0',
    width: '200px',
    height: '90vh',
  },
};

const NavMenu = () => {
  return (
    <Nav vertical style={styles.NavMenu}>
      <NavItem>
        <SubmitReportForm />
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Reports
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Calendar
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavMenu;