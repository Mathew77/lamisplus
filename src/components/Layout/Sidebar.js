import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  MdDashboard,
  MdExtension,
  MdKeyboardArrowDown,
  MdPages,
  MdAirlineSeatFlat,
} from 'react-icons/md';
import { GiTreeBeehive} from 'react-icons/gi';
import { FaUserPlus, FaVials, FaXRay, FaUserMd, FaUsers} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/test-order', name: 'Test Order', exact: false, Icon: FaVials },
  {
    to: '/collected-sample',
    name: 'Collected Sample',
    exact: false,
    Icon: FaVials,
  },
  {
    to: '/test-result',
    name: 'Test Result',
    exact: false,
    Icon: FaVials,
  },
];



const pageContents = [
  { to: '/pending-prescription', name: 'Pending Prescription', exact: false, Icon: FaUserPlus },
  {
    to: '/dispensed-prescription',
    name: 'Dispensed Precription',
    exact: false,
    Icon: FaUserPlus,
  },
];

const PagesHiv = [
  { to: '/hiv-registration', name: 'Enrollment', exact: false, Icon: GiTreeBeehive },
  {
    to: '/hiv-clinic',
    name: 'Clinic',
    exact: false,
    Icon: FaUserPlus,
  },
  { to: '/hts', name: 'HTS', exact: false, Icon: GiTreeBeehive },
  { to: '/case-management', name: 'Case Management', exact: false, Icon: GiTreeBeehive },
  { to: '/pmtct', name: 'PMTCT', exact: false, Icon: GiTreeBeehive },
  { to: '/index-tracking', name: 'Index Contract Tracking', exact: false, Icon: GiTreeBeehive },
  { to: '/client-status', name: 'Client Status Update', exact: false, Icon: GiTreeBeehive },
];

const navItems = [
  { to: '/dashboard', name: 'Dashboard', exact: true, Icon: MdDashboard },
  { to: '/patients', name: 'Patient', exact: false, Icon: FaUsers },
  { to: '/vital-signs', name: 'Vital Signs', exact: false, Icon: MdAirlineSeatFlat },
  { to: '/checkin', name: 'Check IN', exact: false, Icon: FaXRay },
  { to: '/consultation', name: 'Consultation', exact: false, Icon: FaUserMd },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: false,
    isOpenContents: false,
    isOpenPages: false,
    isOpenPagesHiv: false,
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
      <aside className={bem.b()} data-image={sidebarBgImage}>
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
                Reduction <FaGithub />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
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

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Laboratory</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
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
            </Collapse>
           


            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pharmacy</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
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
            </Collapse>           
            <Divider variant="middle" style={{backgroundColor: '#fff'}}/>
              <Typography gutterBottom variant="body1" style={{marginLeft:30, padding: 5, }}>
                Services
              </Typography>
            <Divider variant="middle" style={{backgroundColor: '#fff'}}/>
      
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('PagesHiv')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">HIV</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPagesHiv
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPagesHiv}>
              {PagesHiv.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
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
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;