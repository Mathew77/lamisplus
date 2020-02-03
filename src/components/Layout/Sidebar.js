import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
// import { FaGithub } from 'react-icons/fa';
import {
  MdDashboard,
  MdAirlineSeatFlat,
} from 'react-icons/md';
import { FaUserPlus, FaVials, FaXRay, FaUserMd,FaCalendarAlt, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navItems = [
  { to: '/dashboard', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/patient-regsitration', name: 'register patient', exact: false, Icon: FaUserPlus },
  { to: '/checkin', name: 'check in', exact: false, Icon: MdAirlineSeatFlat },
  { to: '/vitalsigns', name: 'vital signs', exact: false, Icon: FaXRay },
  { to: '/consultation', name: 'consultation', exact: false, Icon: FaUserMd },
  { to: '/laboratory', name: 'laboratory', exact: false, Icon: FaVials },
  { to: '/pharmacy', name: 'pharmacy', exact: false, Icon: FaUserPlus },
  { to: '/appointment', name: 'appointment', exact: false, Icon: FaCalendarAlt },

];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage} >
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                LAMISPLUS 
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  style={{ textTransform: 'capitalize'}} 
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}         
        
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
