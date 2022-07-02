import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AccordionPage from './AccordionPage';
import NavLink from './NavLink';

const Page = ({ accordions }) => {
  return (
    <Container>
      <Row className="doc-div">
        <Col md={4} className="accordion-col">
          <NavLink
            to="introduction"
            activeClassName="title-active"
            inactiveClassName="title-inactive"
            className="title-link"
          >
            Introduction
          </NavLink>

          {accordions.map((element) => {
            return <AccordionPage accordion={element} key={element.id} />;
          })}
        </Col>
        <Col md={8} className="accordion-col-two">
          <div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Page;
