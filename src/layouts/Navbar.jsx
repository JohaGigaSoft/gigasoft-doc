import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from '../components/NavLink';

// images
import logo from '../assets/images/logo.png';
import { useRef } from 'react';

const navItems = [
  {
    id: 1,
    to: 'doc-giga-food',
    title: 'Giga food',
  },
  {
    id: 2,
    to: 'doc-rest-food',
    title: 'Restfood',
  },
  {
    id: 3,
    to: 'doc-go-food',
    title: ' Go food',
  },
  {
    id: 4,
    to: 'doc-hexacom',
    title: 'Hexacom',
  },
  {
    id: 5,
    to: 'doc-giga-mart',
    title: 'Giga mart',
  },
  {
    id: 6,
    to: 'doc-g-cash',
    title: 'G-cash',
  },
];

const DocNav = () => {
  const navBarCollapse = useRef(null);
  const handleClick = () => {
    // const collapseDiv = navBarCollapse.current.classList.remove('show');
    // console.log(collapseDiv);
  };
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-brand-logo">
            <img src={logo} alt="rest food" className="w-100" />
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" ref={navBarCollapse}>
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  to={item.to}
                  className=""
                  activeClassName="active"
                  inactiveClassName="inactive"
                  onClick={handleClick}
                  eventKey={item.id}
                  as={NavLink}
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
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
