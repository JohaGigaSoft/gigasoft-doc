import { Accordion } from 'react-bootstrap';
import NavLink from './NavLink';

const AccordionPage = ({ accordion }) => {
  const { id, accordionName, items } = accordion;

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={id}>
        <Accordion.Header className="title-link-btn">
          {accordionName}
        </Accordion.Header>
        <Accordion.Body>
          {items.map((item) => (
            <div key={item.id} className="d-flex">
              <NavLink
                to={`${item.id}`}
                activeClassName="sub-active"
                inactiveClassName="sub-inactive"
                className="sub-link flex-grow-1"
              >
                {item.itemName}
              </NavLink>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default AccordionPage;
