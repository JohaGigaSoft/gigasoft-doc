import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink';

// images
import logo from '../assets/images/logo.png';

const DocNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-brand-logo">
            <img src={logo} alt="rest food" className="w-100" />
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="doc-giga-food"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              Giga food
            </NavLink>
            <NavLink
              to="doc-rest-food"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              Restfood
            </NavLink>
            <NavLink
              to="/doc-go-food"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              Go food{' '}
            </NavLink>
            <NavLink
              to="/doc-hexacom"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              Hexacom
            </NavLink>
            <NavLink
              to="/doc-giga-mart"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              Giga mart
            </NavLink>
            <NavLink
              to="/doc-g-cash"
              className="nav-link"
              activeClassName="active"
              inactiveClassName="inactive"
            >
              G-cash
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/" className="nav-link inactive">
              Visit Restfood{' '}
              <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default DocNav;
