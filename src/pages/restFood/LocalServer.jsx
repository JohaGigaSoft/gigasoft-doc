import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';

const LocalServer = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Local server (not mandatory)</h1>
      <div className="section overview">
        <p>
          If you want to run the admin panel in your local machine for test
          purpose or need to customize something you can install but we
          recommend test the system in a live server.
        </p>

        <Info>
          <p className="mt-4">Recommended setup tutorial is below 👇</p>
        </Info>
        <Iframe src="https://www.youtube.com/embed/5kGSmjoulgs" />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-rest-food/rest_food-flutter-sdk-1', {
                replace: true,
              });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-rest-food/rest_food-install-on-server-2', {
                replace: true,
              });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default LocalServer;
