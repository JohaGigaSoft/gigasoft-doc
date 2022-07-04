import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AccordionPage from '../components/AccordionPage';

const Page = ({ accordions }) => {
  const [intro, setIntro] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let indexOfSlash = location.pathname.split('/').length - 1;
    if (indexOfSlash === 1) {
      setIntro(true);
    } else {
      setIntro(false);
    }
  }, [location]);

  return (
    <Container>
      <Row className="doc-div">
        <Col md={4} className="accordion-col">
          <div className="accordion-col-sticky">
            <button
              className={`title-link text-start w-100 ${
                intro ? 'title-active' : 'title-inactive'
              }`}
              onClick={() => navigate('/doc-rest-food')}
            >
              Introduction
            </button>

            {accordions.map((element, index) => {
              return (
                <AccordionPage
                  accordion={element}
                  id={index}
                  key={element.id}
                />
              );
            })}
          </div>
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
