import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import { basic } from '../../data/unorderList/goMart/basic';

const Basic = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Basic</h1>
      <div className="section overview">
        <p className="title-des">
          As Giga Soft is a complete system with lots of modules for web and
          mobile apps, it is compulsory to have some basic knowledge in both
          server side and mobile app development if you want to do the
          installation, setup and publishing with your branding yourself.
        </p>

        <UnorderedList lists={basic} />
        <Info>
          The Envato price don’t included any kind of installation and app
          publishing support. You need to follow the documentation step by step
          for installation, setup and other branding related changes. We are not
          responsible for your mistake. Also if you do any kind of customization
          it is totally your responsibility.
        </Info>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-server-0', { replace: true });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Basic;
