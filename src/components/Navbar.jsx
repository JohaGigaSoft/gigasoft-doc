import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { routes } from '../App';
import {
  Link,
  matchRoutes,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';

// images
import logo from '../assets/images/logo.png';

function NavLink({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) {
  let location = useLocation();
  let resolvedLocation = useResolvedPath(to);
  let routeMatches = matchRoutes(routes, location);

  let isActive;
  if (exact) {
    isActive = location.pathname === resolvedLocation.pathname;
  } else {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedLocation.pathname
    );
  }

  let allClassNames =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

  return <Link className={allClassNames} to={to} {...rest} />;
}

const DocNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-brand-logo">
            <img src={logo} alt="rest food" className="w-100" />
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" activeClassName="active">
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
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default DocNav;
