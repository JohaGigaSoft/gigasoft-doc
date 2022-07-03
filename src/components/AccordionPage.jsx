import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import { Plus } from './svgs/Plus';

const AccordionPage = ({ accordion, id }) => {
  const [show, setShow] = useState(false);
  const body = useRef(null);
  const location = useLocation();
  const { accordionName, items } = accordion;

  useEffect(() => {
    let isShow = body.current.children[0].classList.value
      .split(' ')
      .indexOf('sub-active');
    if (isShow >= 0) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log('show');
  }, [location]);

  return (
    <div className="accordion mt-2">
      <div
        className={`accordion-title title-link-btn ${
          show ? 'show-active' : ''
        }`}
        onClick={() => setShow(!show)}
      >
        <span>{accordionName}</span>

        <Plus className="toggle" aria-expanded={show} />
      </div>
      <div className="accordion-content" aria-expanded={!show}>
        <div className="d-flex flex-column" ref={body}>
          {items.map((item) => (
            <NavLink
              to={`${item.id}`}
              activeClassName="sub-active"
              inactiveClassName="sub-inactive"
              className="sub-link flex-grow-1"
              key={item.itemName}
            >
              {item.itemName}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AccordionPage;
