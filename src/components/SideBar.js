import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const styles = {
  NavMenu: {
    position: 'fixed',
    top: '10vh',
    left: '0',
    width: '200px', // adjust as needed
    height: '90vh', // full viewport height
  },
};

const NavMenu = () => {
  return (
    <Nav vertical style={styles.NavMenu}>
      <NavItem>
        <NavLink href="#">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Reports
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Teams
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          disabled
          href="#"
        >
          Settings
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavMenu;