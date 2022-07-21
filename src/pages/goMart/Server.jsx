import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import { server } from '../../data/unorderList/goMart/server';

const Server = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Server</h1>
      <div className="section overview">
        <UnorderedList lists={server} />
        <p>
          In most servers these extensions are enabled by default, but you
          should check with your hosting provider.
        </p>
        <Info>
          Please do this very carefully. We will not be responsible for your
          mistake.
        </Info>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-basic-0', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-mobile-app-0', { replace: true });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Server;
