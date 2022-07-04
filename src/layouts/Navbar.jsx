import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from '../components/NavLink';

// images
import logo2 from '../assets/images/logo-2.png';

const navItems = [
  {
    id: 1,
    to: 'doc-rest-food',
    title: 'Restfood',
  },
  {
    id: 2,
    to: 'doc-go-mart',
    title: 'GoMart',
  },
  {
    id: 3,
    to: 'doc-demo-1',
    title: 'Demo 1',
  },

  {
    id: 4,
    to: 'doc-demo-2',
    title: 'Demo 2',
  },
  {
    id: 5,
    to: 'doc-demo-3',
    title: 'Demo 3',
  },

  {
    id: 6,
    to: 'doc-demo-4',
    title: 'Demo 4',
  },
];

const DocNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-brand-logo">
            <img src={logo2} alt="rest food" className="w-100" />
          </span>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  to={item.to}
                  className=""
                  activeClassName="active"
                  inactiveClassName="inactive"
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
              Visit Giga Soft{' '}
              <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default DocNav;
